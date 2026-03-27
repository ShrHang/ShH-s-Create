"""
Usage Guide
===========

Author: ChatGPT (OpenAI) 5.3-Codex

Purpose
- Convert spell definitions from config.txt into per-spell JSON files.
- Output JSON key format follows example.json.
- Output files are grouped by namespace directories.

How It Works
- Each block like [Spells."namespace:spell_name"] becomes one JSON file.
- File path pattern: <out>/<namespace>/<spell_name>.json
- Existing files are overwritten.

Required Input Fields Per Spell
- Enabled
- School
- MaxLevel
- MinRarity
- ManaCostMultiplier
- SpellPowerMultiplier
- CooldownInSeconds
- AllowCrafting

Value Conversion
- true/false -> JSON booleans
- Numeric strings -> int/float
- MinRarity string -> lowercase (e.g. COMMON -> common)

Command Line
- --input: path to source config (default: config.txt)
- --template: path to output template keys (default: example.json)
- --out: output root directory (default: current directory)

Examples
- python convert_spells.py
- python convert_spells.py --input config.txt --template example.json --out .

Exit Codes
- 0: all spell blocks converted successfully
- 1: completed with parse/skip/write issues
- 2: failed to load template JSON
"""

import argparse
import json
import re
from pathlib import Path
from typing import Any


BLOCK_RE = re.compile(r'^\s*\[Spells\."([^"]+)"\]\s*$')
KV_RE = re.compile(r'^\s*([A-Za-z][A-Za-z0-9_]*)\s*=\s*(.+?)\s*$')
INT_RE = re.compile(r'^[-+]?\d+$')
FLOAT_RE = re.compile(r'^[-+]?(?:\d+\.\d*|\d*\.\d+)(?:[eE][-+]?\d+)?$')

REQUIRED_KEYS = {
    "Enabled",
    "School",
    "MaxLevel",
    "MinRarity",
    "ManaCostMultiplier",
    "SpellPowerMultiplier",
    "CooldownInSeconds",
    "AllowCrafting",
}

FIELD_MAP = {
    "CooldownInSeconds": "irons_spellbooks:cooldown_in_seconds",
    "MinRarity": "irons_spellbooks:min_rarity",
    "School": "irons_spellbooks:school",
    "AllowCrafting": "irons_spellbooks:allow_crafting",
    "SpellPowerMultiplier": "irons_spellbooks:power_multiplier",
    "ManaCostMultiplier": "irons_spellbooks:mana_cost_multiplier",
    "Enabled": "irons_spellbooks:enabled",
    "MaxLevel": "irons_spellbooks:max_level",
}


def parse_scalar(raw: str) -> Any:
    value = raw.strip()

    if value.startswith('"') and value.endswith('"') and len(value) >= 2:
        return value[1:-1]

    lowered = value.lower()
    if lowered == "true":
        return True
    if lowered == "false":
        return False

    if INT_RE.fullmatch(value):
        return int(value)
    if FLOAT_RE.fullmatch(value):
        return float(value)

    return value


def parse_config(config_path: Path) -> tuple[list[tuple[str, dict[str, Any], int]], list[str]]:
    spells: list[tuple[str, dict[str, Any], int]] = []
    errors: list[str] = []

    current_spell_id: str | None = None
    current_data: dict[str, Any] = {}
    current_start_line = 0

    with config_path.open("r", encoding="utf-8") as f:
        for line_no, line in enumerate(f, start=1):
            stripped = line.strip()

            if not stripped or stripped.startswith("#"):
                continue

            block_match = BLOCK_RE.match(line)
            if block_match:
                if current_spell_id is not None:
                    spells.append((current_spell_id, current_data, current_start_line))

                current_spell_id = block_match.group(1)
                current_data = {}
                current_start_line = line_no
                continue

            kv_match = KV_RE.match(line)
            if kv_match:
                if current_spell_id is None:
                    errors.append(
                        f"Line {line_no}: found key-value outside spell block: {stripped}"
                    )
                    continue

                key = kv_match.group(1)
                raw_value = kv_match.group(2)
                current_data[key] = parse_scalar(raw_value)
                continue

            errors.append(f"Line {line_no}: unrecognized line format: {stripped}")

    if current_spell_id is not None:
        spells.append((current_spell_id, current_data, current_start_line))

    return spells, errors


def split_spell_id(spell_id: str) -> tuple[str, str]:
    if ":" in spell_id:
        namespace, spell_name = spell_id.split(":", 1)
        return namespace, spell_name
    return "default", spell_id


def build_output_payload(raw_data: dict[str, Any]) -> tuple[dict[str, Any], list[str]]:
    missing = sorted(REQUIRED_KEYS - set(raw_data.keys()))
    if missing:
        return {}, missing

    payload: dict[str, Any] = {}
    for source_key, target_key in FIELD_MAP.items():
        value = raw_data[source_key]
        if source_key == "MinRarity" and isinstance(value, str):
            value = value.lower()
        payload[target_key] = value

    return payload, []


def load_template_keys(template_path: Path) -> set[str]:
    with template_path.open("r", encoding="utf-8") as f:
        content = json.load(f)

    if not isinstance(content, dict):
        raise ValueError("Template must be a JSON object with key-value fields.")

    return set(content.keys())


def run(input_path: Path, template_path: Path, out_root: Path) -> int:
    try:
        template_keys = load_template_keys(template_path)
    except Exception as exc:  # pylint: disable=broad-except
        print(f"[ERROR] Failed to load template {template_path}: {exc}")
        return 2

    mapped_keys = set(FIELD_MAP.values())
    if mapped_keys != template_keys:
        missing_in_template = sorted(mapped_keys - template_keys)
        extra_in_template = sorted(template_keys - mapped_keys)
        print("[WARN] Template keys and mapped keys do not match.")
        if missing_in_template:
            print(f"       Missing in template: {missing_in_template}")
        if extra_in_template:
            print(f"       Extra in template:   {extra_in_template}")

    spells, parse_errors = parse_config(input_path)

    success = 0
    skipped = 0
    write_errors = 0

    for err in parse_errors:
        print(f"[PARSE-ERROR] {err}")

    for spell_id, raw_data, start_line in spells:
        payload, missing = build_output_payload(raw_data)
        if missing:
            skipped += 1
            print(
                f"[SKIP] {spell_id} (block starts at line {start_line}) missing keys: {missing}"
            )
            continue

        namespace, spell_name = split_spell_id(spell_id)
        target_dir = out_root / namespace
        target_path = target_dir / f"{spell_name}.json"

        try:
            target_dir.mkdir(parents=True, exist_ok=True)
            with target_path.open("w", encoding="utf-8") as f:
                json.dump(payload, f, indent=2)
                f.write("\n")
            success += 1
        except Exception as exc:  # pylint: disable=broad-except
            write_errors += 1
            print(f"[WRITE-ERROR] {target_path}: {exc}")

    print("\n=== Conversion Summary ===")
    print(f"Input file:      {input_path}")
    print(f"Output root:     {out_root}")
    print(f"Spell blocks:    {len(spells)}")
    print(f"Generated files: {success}")
    print(f"Skipped blocks:  {skipped}")
    print(f"Parse errors:    {len(parse_errors)}")
    print(f"Write errors:    {write_errors}")

    return 0 if (len(parse_errors) == 0 and skipped == 0 and write_errors == 0) else 1


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Convert irons_spellbooks config.txt spell blocks into per-spell JSON files."
    )
    parser.add_argument("--input", default="config.txt", help="Path to config.txt")
    parser.add_argument(
        "--template",
        default="example.json",
        help="Path to template JSON (used for key consistency check)",
    )
    parser.add_argument(
        "--out",
        default=".",
        help="Output root directory. Namespace subfolders are created inside this directory.",
    )

    args = parser.parse_args()

    input_path = Path(args.input)
    template_path = Path(args.template)
    out_root = Path(args.out)

    exit_code = run(input_path, template_path, out_root)
    raise SystemExit(exit_code)


if __name__ == "__main__":
    main()
