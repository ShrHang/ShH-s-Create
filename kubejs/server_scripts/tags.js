/**
 * @file 添加标签。
 */
ServerEvents.tags("item", (event) => {
    event.add("c:beacon_base_blocks", [
        "minecraft:netherite_block",
        "minecraft:emerald_block",
        "minecraft:diamond_block",
        "minecraft:gold_block",
        "minecraft:iron_block",
    ]);
    event.add("c:enchantables", ["touhou_little_maid:camera"]);
    event.add("c:flours", ["#c:flour"]);
    event.add("c:material/netherite", [
        "minecraft:netherite_axe",
        "minecraft:netherite_boots",
        "minecraft:netherite_chestplate",
        "minecraft:netherite_helmet",
        "minecraft:netherite_hoe",
        "minecraft:netherite_leggings",
        "minecraft:netherite_pickaxe",
        "minecraft:netherite_scrap",
        "minecraft:netherite_shovel",
        "minecraft:netherite_sword",
    ]);
    event.add("c:dusts", [
        "#c:dusts/ash",
        "#c:dusts/diamond",
        "#c:dusts/glowstone",
        "#c:dusts/obsidian",
        "#c:dusts/redstone",
        "#c:dusts/wood",
    ]);
    event.add("curios:curio", ["shh:etihw"]);
    event.add("curios:necklace", ["shh:test_curio"]);
    event.add("curios:ring", ["shh:test_curio"]);
    event.add("curios:spellbook", ["shh:spell_book"]);
    event.add(
        "powergrid:wire_cutters",
        "#immersiveengineering:tools/wirecutters",
    );
    event.add("minecraft:enchantable/durability", [
        "touhou_little_maid:camera",
    ]);
    event.add("shh:ban", ["l2archery:void_arrow", "powergrid:wire_cutter"]);
    event.add("shh:diesel_engine", [
        "createdieselgenerators:diesel_engine",
        "createdieselgenerators:large_diesel_engine",
        "createdieselgenerators:huge_diesel_engine",
    ])
    event.add("shh:generator_components", [
        'powergrid:copper_coil',
        'powergrid:generator_induction_rotor',
        'powergrid:generator_large_induction_rotor',
        'powergrid:generator_commutator',
        'powergrid:generator_vertical_commutator',
        'powergrid:generator_clutch',
        'powergrid:generator_housing',
        'powergrid:vertical_generator_housing'
    ])
    event.add("shh:superheated_fuels", [
        'create:blaze_cake',
        "createdieselgenerators:ethanol_bucket",
        "createdieselgenerators:diesel_bucket",
        "createdieselgenerators:gasoline_bucket",
    ])
    event.add("touhou_little_maid:maid_baubles", [
        "minecraft:totem_of_undying",
        "touhou_little_maid:ultramarine_orb_elixir",
        "touhou_little_maid:explosion_protect_bauble",
        "touhou_little_maid:fire_protect_bauble",
        "touhou_little_maid:projectile_protect_bauble",
        "touhou_little_maid:magic_protect_bauble",
        "touhou_little_maid:fall_protect_bauble",
        "touhou_little_maid:drown_protect_bauble",
        "touhou_little_maid:nimble_fabric",
        "touhou_little_maid:item_magnet_bauble",
        "touhou_little_maid:mute_bauble",
        "touhou_little_maid:wireless_io",
    ]);
});
ServerEvents.tags("block", (event) => {
    event.add("create:wrench_pickup", [
        "minecraft:iron_bars",
        "#minecraft:doors",
        "#minecraft:trapdoors",
        "#waystones:is_teleport_target",
    ]);
});
ServerEvents.tags("enchantment", (event) => {
    event.add("minecraft:curse", ["shh:absurd"]);
});
ServerEvents.tags("entity_type", (event) => {
    event.add("l2hostility:whitelist", ["touhou_little_maid:maid"]);
});
