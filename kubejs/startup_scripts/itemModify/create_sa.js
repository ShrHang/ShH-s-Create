// requires: create_sa
ItemEvents.modification((event) => {
    //#region  玫瑰石英工具
    ["sword", "axe", "pickaxe", "shovel"].forEach((tool) => {
        event.modify("create_sa:rose_quartz_" + tool, (item) => {
            addAttModifiers(item, [
                {
                    attribute: "minecraft:player.entity_interaction_range",
                    amount: 2,
                    id: "shh_entity_interaction:mainhand",
                    slot: "mainhand",
                },
                {
                    attribute: "minecraft:generic.attack_damage",
                    amount: tool === "sword" ? 6.5 : tool === "axe" ? 5.5 : 0,
                    id: "shh_attack_damage:mainhand",
                    slot: "mainhand",
                    condition: tool === "sword" || tool === "axe",
                },
            ]);
        });
    });
    //#endregion
    //#region  铜工具
    toolTypes.forEach((tool) => {
        event.modify("create_sa:copper_" + tool, (item) => {
            addAttModifiers(item, [
                {
                    attribute: "irons_spellbooks:lightning_spell_power",
                    amount: 0.05,
                    id: "shh_lightning_spell_power:mainhand",
                    slot: "mainhand",
                    condition: Platform.isLoaded("irons_spellbooks"),
                },
                {
                    attribute: "minecraft:generic.attack_damage",
                    amount: tool === "sword" ? 6.5 : tool === "axe" ? 8 : 0,
                    id: "shh_attack_damage:mainhand",
                    slot: "mainhand",
                    condition: tool === "sword" || tool === "axe",
                },
            ]);
        });
    });
    //#endregion
    //#region  锌工具
    toolTypes.forEach((tool) => {
        event.modify("create_sa:zinc_" + tool, (item) => {
            addAttModifiers(item, [
                {
                    attribute: "minecraft:generic.attack_damage",
                    amount: tool === "sword" ? 7 : tool === "axe" ? 6 : 0,
                    id: "shh_attack_damage:mainhand",
                    slot: "mainhand",
                    condition: tool === "sword" || tool === "axe",
                },
                {
                    attribute: "minecraft:player.entity_interaction_range",
                    amount: -1,
                    id: "shh_entity_interaction:mainhand",
                    slot: "mainhand",
                },
                {
                    attribute: "minecraft:player.block_interaction_range",
                    amount: -1,
                    id: "shh_entity_interaction:mainhand",
                    slot: "mainhand",
                },
            ]);
        });
    });
    //#endregion
    //#region  黄铜工具
    toolTypes.forEach((tool) => {
        event.modify("create_sa:brass_" + tool, (item) => {
            addAttModifiers(item, [
                {
                    attribute: "irons_spellbooks:lightning_spell_power",
                    amount: 0.05,
                    id: "shh_lightning_spell_power:mainhand",
                    slot: "mainhand",
                    condition: Platform.isLoaded("irons_spellbooks"),
                },
                {
                    attribute: "minecraft:generic.attack_damage",
                    amount: 7.5,
                    id: "shh_attack_damage:mainhand",
                    slot: "mainhand",
                    condition: tool === "sword",
                },
                {
                    attribute: "minecraft:generic.attack_damage",
                    amount: 6,
                    id: "shh_attack_damage:mainhand",
                    slot: "mainhand",
                    condition: tool === "axe",
                },
            ]);
        });
    });
    //#endregion
    //#region  烈焰工具
    ["cleaver", "axe", "pickaxe", "shovel"].forEach((tool) => {
        event.modify("create_sa:blazing_" + tool, (item) => {
            addAttModifiers(item, [
                {
                    attribute: "minecraft:generic.attack_damage",
                    amount: 6,
                    id: "shh_attack_damage:mainhand",
                    slot: "mainhand",
                    condition: tool === "cleaver" || tool === "axe",
                },
                {
                    attribute: "player.sweeping_damage_ratio",
                    amount: 1,
                    id: "shh_sweeping_damage_ratio:mainhand",
                    slot: "mainhand",
                    condition: tool === "cleaver",
                },
                {
                    attribute: "artifacts:generic.attack_burning_duration",
                    operation: 1,
                    amount: 0.4,
                    id: "shh_attack_burning_duration:mainhand",
                    slot: "mainhand",
                    condition: Platform.isLoaded("artifacts"),
                },
                {
                    attribute: "irons_spellbooks:fire_spell_power",
                    amount: 0.07,
                    id: "shh_fire_spell_power:mainhand",
                    slot: "mainhand",
                    condition: Platform.isLoaded("irons_spellbooks"),
                },
            ]);
        });
    });
    //#endregion
    //#region  经验工具
    ["sword", "axe", "pickaxe", "shovel"].forEach((tool) => {
        event.modify("create_sa:experience_" + tool, (item) => {
            addAttModifiers(item, [
                {
                    attribute: "minecraft:generic.attack_speed",
                    amount: 0.2,
                    id: "shh_attack_speed:mainhand",
                    slot: "mainhand",
                },
                {
                    attribute: "minecraft:generic.luck",
                    amount: 2,
                    id: "shh_luck:any",
                    slot: "any",
                },
                {
                    attribute: "minecraft:generic.attack_damage",
                    amount: 6,
                    id: "shh_attack_damage:mainhand",
                    slot: "mainhand",
                    condition: tool === "sword" || tool === "axe",
                },
            ]);
        });
    });
    //#endregion
    //#region 金属盔甲套装
    [
        {
            material: "copper",
            armor: 4,
            modifiers: (slot) => [
                {
                    attribute: "irons_spellbooks:lightning_spell_power",
                    amount: 0.05,
                    id: `shh_lightning_spell_power:${slot}`,
                    slot,
                    condition: Platform.isLoaded("irons_spellbooks"),
                },
                {
                    attribute: "curseofpandora:reality_index",
                    amount: 0.25,
                    id: `shh_reality_index:${slot}`,
                    slot,
                    condition: Platform.isLoaded("curseofpandora"),
                },
            ],
        },
        {
            material: "zinc",
            armor: 5,
            modifiers: (slot) => [
                {
                    attribute: "curseofpandora:reality_index",
                    amount: 0.5,
                    id: `shh_reality_index:${slot}`,
                    slot,
                    condition: Platform.isLoaded("curseofpandora"),
                },
            ],
        },
        {
            material: "brass",
            armor: 6,
            modifiers: (slot) => [
                {
                    attribute: "irons_spellbooks:lightning_spell_power",
                    amount: 0.05,
                    id: `shh_lightning_spell_power:${slot}`,
                    slot,
                    condition: Platform.isLoaded("irons_spellbooks"),
                },
                {
                    attribute: "curseofpandora:reality_index",
                    amount: 1,
                    id: `shh_reality_index:${slot}`,
                    slot,
                    condition: Platform.isLoaded("curseofpandora"),
                },
            ],
        },
    ].forEach((mat) => {
        pieceSlot.forEach((ps) => {
            event.modify(`create_sa:${mat.material}_${ps.piece}`, (item) => {
                let mods = [
                    {
                        attribute: "minecraft:generic.armor",
                        amount: mat.armor,
                        id: `shh_armor:${ps.slot}`,
                        slot: ps.slot,
                    },
                ];
                addAttModifiers(item, mods.concat(mat.modifiers(ps.slot)));
            });
        });
    });
    //#endregion
    //#region  粘液套装
    // 粘液头盔
    event.modify("create_sa:slime_helmet", (item) => {
        addAttModifiers(item, [
            {
                attribute: "minecraft:generic.armor",
                amount: 3,
                id: "shh_armor:head",
                slot: "head",
            },
            {
                attribute: "l2damagetracker:damage_absorption",
                amount: 2,
                id: "shh_l2_damage_absorption:head",
                slot: "head",
                condition: Platform.isLoaded("l2damagetracker"),
            },
            {
                attribute: "curseofpandora:reality_index",
                amount: 0.25,
                id: `shh_reality_index:head`,
                slot: "head",
                condition: Platform.isLoaded("curseofpandora"),
            },
        ]);
    });
    // 粘液靴子
    event.modify("create_sa:slime_boots", (item) => {
        addAttModifiers(item, [
            {
                attribute: "minecraft:generic.armor",
                amount: 3,
                id: "shh_armor:feet",
                slot: "feet",
            },
            {
                attribute: "minecraft:generic.jump_strength",
                amount: 0.5,
                id: "shh_jump_strength:feet",
                slot: "feet",
            },
            {
                attribute: "artifacts:generic.sprinting_speed",
                amount: 0.3,
                id: "shh_sprinting_speed:feet",
                slot: "feet",
                condition: Platform.isLoaded("artifacts"),
            },
            {
                attribute: "curseofpandora:reality_index",
                amount: 0.25,
                id: `shh_reality_index:feet`,
                slot: "feet",
                condition: Platform.isLoaded("curseofpandora"),
            },
        ]);
    });
    //#endregion
    //#region  喷气背包
    // 安山喷气背包
    event.modify("create_sa:andesite_jetpack_chestplate", (item) => {
        addAttModifiers(item, [
            {
                attribute: "minecraft:generic.armor",
                amount: 4,
                id: "shh_armor:chest",
                slot: "chest",
            },
            {
                attribute: "curseofpandora:reality_index",
                amount: 0.75,
                id: "shh_reality_index:chest",
                slot: "chest",
                condition: Platform.isLoaded("curseofpandora"),
            },
        ]);
    });
    // 铜喷气背包
    event.modify("create_sa:copper_jetpack_chestplate", (item) => {
        addAttModifiers(item, [
            {
                attribute: "minecraft:generic.armor",
                amount: 4,
                id: "shh_armor:chest",
                slot: "chest",
            },
            {
                attribute: "irons_spellbooks:lightning_spell_power",
                amount: 0.05,
                id: "shh_lightning_spell_power:chest",
                slot: "chest",
                condition: Platform.isLoaded("irons_spellbooks"),
            },
            {
                attribute: "curseofpandora:reality_index",
                amount: 0.25,
                id: `shh_reality_index:chest`,
                slot: "chest",
                condition: Platform.isLoaded("curseofpandora"),
            },
        ]);
    });
    // 黄铜喷气背包
    event.modify("create_sa:brass_jetpack_chestplate", (item) => {
        addAttModifiers(item, [
            {
                attribute: "minecraft:generic.armor",
                amount: 5,
                id: "shh_armor:chest",
                slot: "chest",
            },
            {
                attribute: "irons_spellbooks:lightning_spell_power",
                amount: 0.05,
                id: "shh_lightning_spell_power:chest",
                slot: "chest",
                condition: Platform.isLoaded("irons_spellbooks"),
            },
            {
                attribute: "curseofpandora:reality_index",
                amount: 1,
                id: "shh_reality_index:chest",
                slot: "chest",
                condition: Platform.isLoaded("curseofpandora"),
            },
        ]);
    });
    // 下界合金喷气背包
    event.modify("create_sa:netherite_jetpack_chestplate", (item) => {
        addAttModifiers(item, [
            {
                attribute: "minecraft:generic.armor",
                amount: 6,
                id: "shh_armor:chest",
                slot: "chest",
            },
            {
                attribute: "minecraft:generic.armor_toughness",
                amount: 5,
                id: "shh_armor_toughness:chest",
                slot: "chest",
            },
            {
                attribute: "l2damagetracker:damage_reduction",
                amount: -0.05,
                id: "shh_l2_damage_reduction:chest",
                slot: "chest",
                condition: Platform.isLoaded("l2damagetracker"),
            },
            {
                attribute: "curseofpandora:reality_index",
                amount: 1,
                id: "shh_reality_index:chest",
                slot: "chest",
                condition: Platform.isLoaded("curseofpandora"),
            },
        ]);
    });
    //#endregion
    //#region  外骨骼
    // 安山外骨骼
    event.modify("create_sa:andesite_exoskeleton_chestplate", (item) => {
        addAttModifiers(item, [
            {
                attribute: "minecraft:generic.armor",
                amount: 4,
                id: "shh_armor:chest",
                slot: "chest",
            },
            {
                attribute: "curseofpandora:reality_index",
                amount: 0.75,
                id: "shh_reality_index:chest",
                slot: "chest",
                condition: Platform.isLoaded("curseofpandora"),
            },
        ]);
    });
    // 铜外骨骼
    event.modify("create_sa:copper_exoskeleton_chestplate", (item) => {
        addAttModifiers(item, [
            {
                attribute: "minecraft:generic.armor",
                amount: 4,
                id: "shh_armor:chest",
                slot: "chest",
            },
            {
                attribute: "irons_spellbooks:lightning_spell_power",
                amount: 0.05,
                id: "shh_lightning_spell_power:chest",
                slot: "chest",
                condition: Platform.isLoaded("irons_spellbooks"),
            },
            {
                attribute: "curseofpandora:reality_index",
                amount: 0.25,
                id: `shh_reality_index:chest`,
                slot: "chest",
                condition: Platform.isLoaded("curseofpandora"),
            },
        ]);
    });
    // 黄铜外骨骼
    event.modify("create_sa:brass_exoskeleton_chestplate", (item) => {
        addAttModifiers(item, [
            {
                attribute: "minecraft:generic.armor",
                amount: 5,
                id: "shh_armor:chest",
                slot: "chest",
            },
            {
                attribute: "irons_spellbooks:lightning_spell_power",
                amount: 0.05,
                id: "shh_lightning_spell_power:chest",
                slot: "chest",
                condition: Platform.isLoaded("irons_spellbooks"),
            },
            {
                attribute: "curseofpandora:reality_index",
                amount: 1,
                id: "shh_reality_index:chest",
                slot: "chest",
                condition: Platform.isLoaded("curseofpandora"),
            },
        ]);
    });
    //#endregion
});
