// requires: create
ServerEvents.recipes(event => {
    //#region Remove
    event.remove({ id: "create:crushing/crimsite" });
    event.remove({ id: "create:crushing/diorite" });
    event.remove({ id: "create:crushing/ochrum" });
    event.remove({ id: "create:crushing/tuff" });
    event.remove({ id: "create:crushing/veridium" });
    if (Platform.isLoaded("createaddition")) {
        event.remove({ id: "createaddition:crushing/tuff_recycling" });
        event.custom({
            type: "create:crushing",
            ingredients: [{ tag: "create:stone_types/tuff" }],
            processing_time: 350,
            results: [
                { chance: 0.25, id: "minecraft:flint" },
                { chance: 0.05, id: "minecraft:gold_nugget" },
                { chance: 0.05, id: "create:copper_nugget" },
                { chance: 0.05, id: "create:zinc_nugget" },
                { chance: 0.05, id: "minecraft:iron_nugget" },
                { chance: 0.05, id: "createaddition:electrum_nugget" }
            ]
        }).id("create:crushing/tuff_recycling");
        if (Platform.isLoaded("createdieselgenerators")) event.remove({ id: "createdieselgenerators:compacting/plant_oil" });
    }
    if (Platform.isLoaded("kaleidoscope_cookery")) {
        event.replaceInput({}, "create:dough", "kaleidoscope_cookery:raw_dough")
        event.replaceOutput({}, "create:dough", "kaleidoscope_cookery:raw_dough")
        event.replaceInput({}, "create:wheat_flour", "kaleidoscope_cookery:flour")
        event.replaceOutput({}, "create:wheat_flour", "kaleidoscope_cookery:flour")
        event.custom({
            type: "create:milling",
            ingredients: [{ item: "minecraft:wheat" }],
            processing_time: 150,
            results: [
                { id: "kaleidoscope_cookery:flour" },
                { chance: 0.25, count: 2, id: "kaleidoscope_cookery:flour" },
                { chance: 0.25, id: "minecraft:wheat_seeds" }
            ]
        }).id("create:milling/wheat");
        event.custom({
            type: "create:mixing",
            ingredients: [
                { tag: "c:flours/wheat" },
                { type: "neoforge:single", amount: 1000, fluid: "minecraft:water" }
            ],
            results: [{ id: "create:dough" }]
        }).id("create:mixing/wheat_flour");
        event.custom({
            type: "create:splashing",
            ingredients: [{ tag: "c:flour" }],
            results: [{ id: "kaleidoscope_cookery:raw_dough" }]
        }).id("create:splashing/wheat_flour");
        if (Platform.isLoaded("createaddition")) event.custom({
            type: "create:compacting",
            ingredients: [
                { tag: "c:eggs" },
                { item: "minecraft:sugar" },
                { item: "minecraft:sugar" },
                { item: "kaleidoscope_cookery:flour" }
            ],
            results: [{ "id": "createaddition:cake_base" }]
        }).id("createaddition:compacting/cake_base");
    }
    //#endregion

    //#region Compacting
    event.custom({
        type: "create:compacting",
        ingredients: [
            { item: "minecraft:cobblestone" },
            { type: "neoforge:single", amount: 250, fluid: "minecraft:lava" }
        ],
        results: [{ id: "minecraft:deepslate" }]
    });
    event.custom({
        type: "create:compacting",
        ingredients: [
            { item: "minecraft:cobbled_deepslate" },
            { type: "neoforge:single", amount: 500, fluid: "minecraft:water" }
        ],
        results: [{ id: "minecraft:tuff" }]
    });
    event.custom({
        type: "create:compacting",
        ingredients: [
            { item: "minecraft:dripstone_block" },
            { item: "minecraft:bone_meal" },
            { item: "minecraft:bone_meal" },
            { item: "minecraft:bone_meal" },
            { type: "neoforge:single", amount: 500, fluid: "minecraft:water" }
        ],
        results: [{ id: "minecraft:calcite" }]
    });
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
            { type: "neoforge:single", amount: 500, fluid: "minecraft:lava" }
        ],
        results: [{ id: "minecraft:diamond" }]
    });
    event.custom({
        type: "create:compacting",
        ingredients: [
            { item: "create:zinc_nugget" },
            { item: "create:zinc_nugget" },
            { item: "create:zinc_nugget" },
            { item: "create:zinc_nugget" },
            { item: "minecraft:tuff" },
            { type: "neoforge:single", amount: 1000, fluid: "minecraft:water" }
        ],
        results: [{ id: "create:asurine" }]
    });
    event.custom({
        type: "create:compacting",
        ingredients: [
            { item: "minecraft:iron_nugget" },
            { item: "minecraft:iron_nugget" },
            { item: "minecraft:iron_nugget" },
            { item: "minecraft:iron_nugget" },
            { item: "minecraft:tuff" },
            { type: "neoforge:single", amount: 1000, fluid: "minecraft:water" }
        ],
        results: [{ id: "create:crimsite" }]
    });
    event.custom({
        type: "create:compacting",
        ingredients: [
            { item: "minecraft:gold_nugget" },
            { item: "minecraft:gold_nugget" },
            { item: "minecraft:gold_nugget" },
            { item: "minecraft:gold_nugget" },
            { item: "minecraft:tuff" },
            { type: "neoforge:single", amount: 1000, fluid: "minecraft:water" }
        ],
        results: [{ id: "create:ochrum" }]
    });
    event.custom({
        type: "create:compacting",
        ingredients: [
            { item: "create:copper_nugget" },
            { item: "create:copper_nugget" },
            { item: "create:copper_nugget" },
            { item: "create:copper_nugget" },
            { item: "minecraft:tuff" },
            { type: "neoforge:single", amount: 1000, fluid: "minecraft:water" }
        ],
        results: [{ id: "create:veridium" }]
    });
    if (Platform.isLoaded("createdieselgenerators")) {
        event.custom({
            type: "create:compacting",
            ingredients: [
                { item: "createdieselgenerators:wood_chip" },
                { item: "createdieselgenerators:wood_chip" },
                { item: "createdieselgenerators:wood_chip" },
                { item: "createdieselgenerators:wood_chip" },
                { item: "createdieselgenerators:wood_chip" },
                { item: "createdieselgenerators:wood_chip" }
            ],
            results: [{ id: "createdieselgenerators:chip_wood_beam" }]
        });
        event.custom({
            type: "create:compacting",
            ingredients: [
                { item: "createdieselgenerators:wood_chip" },
                { item: "createdieselgenerators:wood_chip" },
                { item: "createdieselgenerators:chip_wood_block" }
            ],
            results: [{ id: "createdieselgenerators:chip_wood_beam" }]
        });
    }
    //#endregion

    //#region Crushing
    event.custom({
        type: "create:crushing",
        ingredients: [{ tag: "c:material/netherite" }],
        processing_time: 750,
        results: [{ id: "minecraft:netherite_scrap" }]
    });
    event.custom({
        type: "create:crushing",
        ingredients: [{ item: "minecraft:crying_obsidian" }],
        processingTime: 500,
        results: [
            { id: "create:powdered_obsidian" },
            { chance: 0.75, id: "minecraft:obsidian" },
            { chance: 0.5, id: "minecraft:amethyst_shard" }
        ]
    });
    event.custom({
        type: "create:crushing",
        ingredients: [{ item: "create:limestone" }],
        processingTime: 250,
        results: [
            { chance: 0.15, id: "minecraft:quartz", count: 2 },
            { chance: 0.35, id: "minecraft:lapis_lazuli" }
        ]
    });
    event.custom({
        type: "create:crushing",
        ingredients: [{ item: "minecraft:blackstone" }],
        processingTime: 350,
        results: [
            { chance: 0.01, id: "minecraft:wither_skeleton_skull" },
            { chance: 0.01, id: "l2complements:blackstone_core" }
        ]
    });
    event.custom({
        type: "create:crushing",
        ingredients: [{ item: "create:scoria" }],
        processingTime: 125,
        results: [
            { chance: 0.125, id: "minecraft:blaze_powder" },
            { chance: 0.02, id: "minecraft:blaze_rod" }
        ]
    });
    event.custom({
        type: "create:crushing",
        ingredients: [{ item: "minecraft:soul_sand" }],
        processingTime: 125,
        results: [{ chance: 0.125, id: "minecraft:glowstone_dust" }]
    });
    //#endregion

    //#region Haunting
    event.custom({
        type: "create:haunting",
        ingredients: [{ item: "minecraft:poppy" }],
        results: [{ id: "minecraft:wither_rose" }]
    });
    event.custom({
        type: "create:haunting",
        ingredients: [{ item: "minecraft:skeleton_skull" }],
        results: [{ id: "minecraft:wither_skeleton_skull" }]
    });
    event.custom({
        type: "create:haunting",
        ingredients: [{ item: "minecraft:charcoal" }],
        results: [{ id: "minecraft:coal" }]
    });
    //#endregion

    //#region Deploying

    //#endregion

    //#region Item Application
    if (Platform.isLoaded("createdieselgenerators")) {
        event.custom({
            type: "create:item_application",
            ingredients: [
                { item: "createdieselgenerators:chip_wood_beam" },
                { item: "create:andesite_alloy" }
            ],
            results: [{ "id": "create:andesite_casing" }]
        });
        event.custom({
            type: "create:item_application",
            ingredients: [
                { item: "createdieselgenerators:chip_wood_beam" },
                { item: "create:brass_ingot" }
            ],
            results: [{ "id": "create:brass_casing" }]
        });
        event.custom({
            type: "create:item_application",
            ingredients: [
                { item: "createdieselgenerators:chip_wood_beam" },
                { item: "minecraft:copper_ingot" }
            ],
            results: [{ "id": "create:copper_casing" }]
        });
    }
    //#endregion

    //#region Splashing
    event.custom({
        type: "create:splashing",
        ingredients: [{ item: "minecraft:sand" }],
        results: [
            { chance: 0.25, id: "minecraft:clay_ball" },
            { chance: 0.2, count: 2, id: "create:copper_nugget" },
            { chance: 0.125, count: 2, id: "create:copper_nugget" }
        ]
    });
    //#endregion

    //#region Mixing
    event.custom({
        type: "create:mixing",
        heat_requirement: "heated",
        ingredients: [{ item: "create:experience_nugget" }],
        results: [{ amount: 3, id: "create_enchantment_industry:experience" }]
    });
    event.custom({
        type: "create:mixing",
        heat_requirement: "heated",
        ingredients: [{ item: "create_sa:heap_of_experience" }],
        results: [{ amount: 12, id: "create_enchantment_industry:experience" }]
    });
    event.custom({
        type: "create:mixing",
        heat_requirement: "heated",
        ingredients: [{ item: "create:experience_block" }],
        results: [{ amount: 27, id: "create_enchantment_industry:experience" }]
    });
    event.custom({
        type: "create:mixing",
        heat_requirement: "heated",
        ingredients: [{ item: "create_enchantment_industry:super_experience_nugget" }],
        results: [{ amount: 3, id: "create_enchantment_industry:experience" }]
    });
    event.custom({
        type: "create:mixing",
        heat_requirement: "heated",
        ingredients: [{ item: "create_enchantment_industry:super_experience_block" }],
        results: [{ amount: 27, id: "create_enchantment_industry:experience" }]
    });
    if (Platform.isLoaded("create_enchantment_industry")) {
        event.custom({
            type: "create:mixing",
            heat_requirement: "heated",
            ingredients: [
                { item: "minecraft:sculk_catalyst" },
                { type: "neoforge:single", amount: 200, fluid: "create_enchantment_industry:experience" }
            ],
            results: [
                { count: 8, id: "minecraft:sculk" },
                { id: "minecraft:sculk_catalyst" }
            ]
        })
    }
    //#endregion
});
