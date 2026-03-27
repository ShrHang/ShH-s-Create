// requires: create
ServerEvents.recipes(event => {
    if (Platform.isLoaded("kaleidoscope_cookery")) {
        event.replaceInput({}, "create:dough", "kaleidoscope_cookery:raw_dough")
        event.replaceOutput({}, "create:dough", "kaleidoscope_cookery:raw_dough")
        event.replaceInput({}, "create:wheat_flour", "kaleidoscope_cookery:flour")
        event.replaceOutput({}, "create:wheat_flour", "kaleidoscope_cookery:flour")
    }

    //#region  Compacting Recipes
    event.custom({
        type: "create:compacting",
        ingredients: [
            { item: "minecraft:cobblestone" },
            {
                type: "neoforge:single",
                amount: 250,
                fluid: "minecraft:lava"
            }
        ],
        results: [{ id: "minecraft:deepslate" }]
    })

    event.custom({
        type: "create:compacting",
        ingredients: [
            { item: "minecraft:cobblestone" },
            {
                type: "neoforge:single",
                amount: 250,
                fluid: "minecraft:water"
            }
        ],
        results: [{ id: "minecraft:tuff" }]
    })

    event.custom({
        type: "create:compacting",
        ingredients: [
            { item: "minecraft:dripstone_block" },
            { item: "minecraft:bone_meal" },
            { item: "minecraft:bone_meal" },
            { item: "minecraft:bone_meal" },
            { item: "minecraft:blaze_powder" },
            { item: "minecraft:blaze_powder" },
            { item: "minecraft:blaze_powder" },
            {
                type: "neoforge:single",
                amount: 250,
                fluid: "minecraft:water"
            }
        ],
        results: [{ id: "minecraft:calcite" }]
    })
    // kubejs\data\create\recipe\compacting\calcite.json

    event.custom({
        type: "create:compacting",
        heat_requirement: "heated",
        ingredients: [
            { item: "minecraft:coal_block" },
            { item: "minecraft:coal_block" },
            { item: "minecraft:coal_block" },
            { item: "minecraft:coal_block" },
            { item: "minecraft:coal_block" },
            { item: "minecraft:coal_block" },
            { item: "minecraft:coal_block" },
            { item: "minecraft:coal_block" },
            { item: "minecraft:coal_block" },
            { item: "minecraft:coal_block" },
            { item: "minecraft:coal_block" },
            { item: "minecraft:coal_block" },
            { item: "minecraft:coal_block" },
            { item: "minecraft:coal_block" },
            { item: "minecraft:coal_block" },
            { item: "minecraft:coal_block" },
            {
                type: "neoforge:single",
                amount: 500,
                fluid: "minecraft:lava"
            }
        ],
        results: [{ id: "minecraft:diamond" }]
    })
    // kubejs\data\create\recipe\compacting\diamond.json

    event.custom({
        type: "create:compacting",
        ingredients: [
            { item: "create:zinc_nugget" },
            { item: "create:zinc_nugget" },
            { item: "create:zinc_nugget" },
            { item: "create:zinc_nugget" },
            { item: "minecraft:gravel" },
            {
                type: "neoforge:single",
                amount: 1000,
                fluid: "minecraft:water"
            }
        ],
        results: [{ id: "create:asurine" }]
    })
    // kubejs\data\create\recipe\compacting\asurine.json

    event.custom({
        type: "create:compacting",
        ingredients: [
            { item: "minecraft:iron_nugget" },
            { item: "minecraft:iron_nugget" },
            { item: "minecraft:iron_nugget" },
            { item: "minecraft:iron_nugget" },
            { item: "minecraft:gravel" },
            {
                type: "neoforge:single",
                amount: 1000,
                fluid: "minecraft:water"
            }
        ],
        results: [{ id: "create:crimsite" }]
    })
    // kubejs\data\create\recipe\compacting\crimsite.json

    event.custom({
        type: "create:compacting",
        ingredients: [
            { item: "minecraft:gold_nugget" },
            { item: "minecraft:gold_nugget" },
            { item: "minecraft:gold_nugget" },
            { item: "minecraft:gold_nugget" },
            { item: "minecraft:gravel" },
            {
                type: "neoforge:single",
                amount: 1000,
                fluid: "minecraft:water"
            }
        ],
        results: [{ id: "create:ochrum" }]
    })
    // kubejs\data\create\recipe\compacting\ochrum.json

    event.custom({
        type: "create:compacting",
        ingredients: [
            { item: "create:copper_nugget" },
            { item: "create:copper_nugget" },
            { item: "create:copper_nugget" },
            { item: "create:copper_nugget" },
            { item: "minecraft:gravel" },
            {
                type: "neoforge:single",
                amount: 1000,
                fluid: "minecraft:water"
            }
        ],
        results: [{ id: "create:veridium" }]
    })
    // kubejs\data\create\recipe\compacting\veridium.json
    //#endregion

    //#region  Crushing Recipes
    event.custom({
        type: "create:crushing",
        ingredients: [{ tag: "c:material/netherite" }],
        processing_time: 750,
        results: [{ id: "minecraft:netherite_scrap" }]
    })

    event.custom({
        type: "create:crushing",
        ingredients: [{ item: "minecraft:crying_obsidian" }],
        processingTime: 500,
        results: [
            { id: "create:powdered_obsidian" },
            { chance: 0.75, id: "minecraft:obsidian" },
            { chance: 0.5, id: "minecraft:amethyst_shard" }
        ]
    })
    event.custom({
        type: "create:crushing",
        ingredients: [{ item: "create:limestone" }],
        processingTime: 250,
        results: [
            { chance: 0.15, id: "minecraft:quartz", count: 2 },
            { chance: 0.35, id: "minecraft:lapis_lazuli" }
        ]
    })
    event.custom({
        type: "create:crushing",
        ingredients: [
            {
                "item": "minecraft:blackstone"
            }
        ],
        results: [
            {
                chance: 0.01,
                id: "minecraft:wither_skeleton_skull"
            },
            {
                chance: 0.01,
                id: "l2complements:blackstone_core"
            }
        ],
        processingTime: 350
    })

    event.custom({
        type: "create:crushing",
        ingredients: [
            {
                "item": "create:scoria"
            }
        ],
        results: [
            {
                chance: 0.125,
                id: "minecraft:blaze_powder"
            },
            {
                chance: 0.02,
                id: "minecraft:blaze_rod"
            }
        ],
        processingTime: 125
    })

    event.custom({
        type: "create:crushing",
        ingredients: [
            {
                "item": "minecraft:soul_sand"
            }
        ],
        results: [
            {
                chance: 0.125,
                id: "minecraft:glowstone_dust"
            }
        ],
        processingTime: 125
    })
    //#endregion

    //#region Stonecutting 切石机
    if (Platform.isLoaded("railways")) {
        const items = Ingredient.of("#railways:palettes/cycle_groups/base").itemIds;
        for (let item of items) 
            event.stonecutting(Item.of(item, 8), "minecraft:iron_block");
    }
    //#endregion

})
