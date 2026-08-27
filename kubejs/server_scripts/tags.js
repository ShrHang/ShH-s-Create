/**
 * @file 添加标签。
 */
ServerEvents.tags("item", event => {
    event.add("c:beacon_base_blocks", [
        "minecraft:netherite_block",
        "minecraft:emerald_block",
        "minecraft:diamond_block",
        "minecraft:gold_block",
        "minecraft:iron_block"
    ]);
    event.add("c:enchantables", ["touhou_little_maid:camera"]);
    event.add("c:flour", ["create:wheat_flour"]);
    event.add("c:flours", ["kaleidoscope_cookery:flour"]);
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
        "minecraft:netherite_sword"
    ]);

    event.add("curios:curio", ["shh:etihw"]);
    event.add("curios:spellbook", ["shh:spell_book"]);
    event.add("curios:shh", ["minecraft:turtle_helmet"]);

    event.add("powergrid:wire_cutters", "#immersiveengineering:tools/wirecutters");

    event.add("minecraft:enchantable/durability", ["touhou_little_maid:camera"]);

    event.add("shh:ban", ["l2archery:void_arrow"]);
});

ServerEvents.tags("block", event => {
    event.add("create:wrench_pickup", [
        "minecraft:iron_bars",
        "#minecraft:doors",
        "#minecraft:trapdoors",
        "#waystones:is_teleport_target"
    ]);
});
