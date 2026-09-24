// requires: create
ServerEvents.recipes((event) => {
    //#region Remove
    event.remove({ id: "create:crushing/crimsite" });
    event.remove({ id: "create:crushing/diorite" });
    event.remove({ id: "create:crushing/ochrum" });
    event.remove({ id: "create:crushing/tuff" });
    event.remove({ id: "create:crushing/veridium" });
    event.replaceInput({}, "create:dough", "#c:dough");
    event.replaceInput({}, "create:wheat_flour", "#c:flours");
    if (Platform.isLoaded("kaleidoscope_cookery")) {
        event
            .custom({
                type: "create:milling",
                ingredients: [{ item: "minecraft:wheat" }],
                processing_time: 150,
                results: [
                    { id: "kaleidoscope_cookery:flour" },
                    {
                        chance: 0.25,
                        count: 2,
                        id: "kaleidoscope_cookery:flour",
                    },
                    { chance: 0.25, id: "minecraft:wheat_seeds" },
                ],
            })
            .id("create:milling/wheat");
        event
            .custom({
                type: "create:mixing",
                ingredients: [
                    { tag: "c:flours" },
                    {
                        type: "fluid_stack",
                        amount: 1e3,
                        fluid: "minecraft:water",
                    },
                ],
                results: [{ id: "kaleidoscope_cookery:raw_dough" }],
            })
            .id("create:mixing/dough_by_mixing");
        event
            .custom({
                type: "create:splashing",
                ingredients: [{ tag: "c:flours" }],
                results: [{ id: "kaleidoscope_cookery:raw_dough" }],
            })
            .id("create:splashing/wheat_flour");
        if (Platform.isLoaded("createaddition"))
            event
                .custom({
                    type: "create:compacting",
                    ingredients: [
                        { tag: "c:eggs" },
                        { item: "minecraft:sugar" },
                        { item: "minecraft:sugar" },
                        { item: "kaleidoscope_cookery:flour" },
                    ],
                    results: [{ id: "createaddition:cake_base" }],
                })
                .id("createaddition:compacting/cake_base");
    }
    if (
        Platform.isLoaded("create_dragons_plus") &&
        Platform.isLoaded("fluidlogistics")
    ) {
        event.remove({ output: "create_dragons_plus:fluid_hatch" });
        event.replaceInput(
            { input: "create_dragons_plus:fluid_hatch" },
            "create_dragons_plus:fluid_hatch",
            "fluidlogistics:fluid_hatch",
        );
        event.shapeless("fluidlogistics:fluid_hatch", [
            "create_dragons_plus:fluid_hatch",
        ]);
        event.shapeless("create_dragons_plus:fluid_hatch", [
            "fluidlogistics:fluid_hatch",
        ]);
    }
    if (Platform.isLoaded("powergrid")) {
        event.remove({ output: "powergrid:wire_cutter" });
        event.shapeless("createdieselgenerators:wire_cutters", [
            "powergrid:wire_cutter",
        ]);
    }
    //#endregion
    //#region Compacting
    event.custom({
        type: "create:compacting",
        ingredients: [
            { type: "fluid_stack", amount: 1e3, fluid: "minecraft:lava" },
            { type: "fluid_stack", amount: 1e3, fluid: "minecraft:water" },
        ],
        results: [{ id: "minecraft:obsidian" }],
    });
    event.custom({
        type: "create:compacting",
        ingredients: [
            { item: "minecraft:cobblestone" },
            { type: "fluid_stack", amount: 1e3, fluid: "minecraft:lava" },
        ],
        results: [{ id: "minecraft:cobbled_deepslate" }],
    });
    event.custom({
        type: "create:compacting",
        ingredients: [
            { item: "minecraft:cobbled_deepslate" },
            { type: "fluid_stack", amount: 1e3, fluid: "minecraft:water" },
        ],
        results: [{ id: "minecraft:tuff" }],
    });
    event.custom({
        type: "create:compacting",
        heat_requirement: "heated",
        ingredients: [
            { item: "minecraft:clay" },
            { item: "supplementaries:ash" },
            { item: "supplementaries:ash" },
            { item: "supplementaries:ash" },
        ],
        results: [{ id: "minecraft:calcite" }],
    });
    event.custom({
        type: "create:compacting",
        ingredients: [
            { item: "minecraft:smooth_basalt" },
            { item: "minecraft:amethyst_block" },
            {
                type: "fluid_stack",
                amount: 1e3,
                fluid: "shhs_create_core:miracle",
            },
        ],
        results: [{ count: 16, id: "minecraft:calcite" }],
    });
    event.custom({
        type: "create:compacting",
        heat_requirement: "superheated",
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
            { type: "fluid_stack", amount: 500, fluid: "minecraft:lava" },
        ],
        results: [{ id: "minecraft:diamond" }],
    });
    event.custom({
        type: "create:compacting",
        heat_requirement: "superheated",
        ingredients: [
            { item: "create:zinc_nugget" },
            { item: "create:zinc_nugget" },
            { item: "create:zinc_nugget" },
            { item: "create:zinc_nugget" },
            { item: "minecraft:cobblestone" },
        ],
        results: [{ id: "create:asurine" }],
    });
    event.custom({
        type: "create:compacting",
        heat_requirement: "superheated",
        ingredients: [
            { item: "minecraft:iron_nugget" },
            { item: "minecraft:iron_nugget" },
            { item: "minecraft:iron_nugget" },
            { item: "minecraft:iron_nugget" },
            { item: "minecraft:cobblestone" },
        ],
        results: [{ id: "create:crimsite" }],
    });
    event.custom({
        type: "create:compacting",
        heat_requirement: "superheated",
        ingredients: [
            { item: "minecraft:gold_nugget" },
            { item: "minecraft:gold_nugget" },
            { item: "minecraft:gold_nugget" },
            { item: "minecraft:gold_nugget" },
            { item: "minecraft:cobblestone" },
        ],
        results: [{ id: "create:ochrum" }],
    });
    event.custom({
        type: "create:compacting",
        heat_requirement: "superheated",
        ingredients: [
            { item: "create:copper_nugget" },
            { item: "create:copper_nugget" },
            { item: "create:copper_nugget" },
            { item: "create:copper_nugget" },
            { item: "minecraft:cobblestone" },
        ],
        results: [{ id: "create:veridium" }],
    });
    //#endregion
    //#region Crushing
    event.custom({
        type: "create:crushing",
        ingredients: [{ item: "minecraft:skeleton_skull" }],
        processing_time: 750,
        results: [
            { count: 6, id: "minecraft:bone_meal" },
            { chance: 0.15, id: "minecraft:bone_meal" },
        ],
    });
    event.custom({
        type: "create:crushing",
        ingredients: [{ tag: "c:material/netherite" }],
        processing_time: 750,
        results: [{ id: "minecraft:netherite_scrap" }],
    });
    event.custom({
        type: "create:crushing",
        ingredients: [{ item: "minecraft:crying_obsidian" }],
        processingTime: 500,
        results: [
            { id: "create:powdered_obsidian" },
            { chance: 0.75, id: "minecraft:obsidian" },
            { chance: 0.5, id: "minecraft:amethyst_shard" },
        ],
    });
    event.custom({
        type: "create:crushing",
        ingredients: [{ item: "create:limestone" }],
        processingTime: 250,
        results: [
            { chance: 0.15, id: "minecraft:quartz", count: 2 },
            { chance: 0.35, id: "minecraft:lapis_lazuli" },
        ],
    });
    event.custom({
        type: "create:crushing",
        ingredients: [{ item: "minecraft:blackstone" }],
        processingTime: 350,
        results: [
            { chance: 0.01, id: "minecraft:wither_skeleton_skull" },
            { chance: 0.01, id: "l2complements:blackstone_core" },
        ],
    });
    event.custom({
        type: "create:crushing",
        ingredients: [{ item: "create:scoria" }],
        processingTime: 125,
        results: [
            { chance: 0.125, id: "minecraft:blaze_powder" },
            { chance: 0.02, id: "minecraft:blaze_rod" },
        ],
    });
    event.custom({
        type: "create:crushing",
        ingredients: [{ item: "minecraft:soul_sand" }],
        processingTime: 125,
        results: [{ chance: 0.125, id: "minecraft:glowstone_dust" }],
    });
    event
        .custom({
            type: "create:crushing",
            ingredients: [{ tag: "create:stone_types/tuff" }],
            processing_time: 125,
            results: [
                { chance: 0.25, id: "create:zinc_nugget" },
                { chance: 0.15, id: "create:zinc_nugget" },
            ],
        })
        .id("create:crushing/tuff_recycling");
    //#endregion
    //#region Filling
    event.custom({
        type: "create:filling",
        ingredients: [
            { item: "minecraft:amethyst_block" },
            {
                type: "fluid_stack",
                amount: 1e3,
                fluid: "shhs_create_core:miracle",
            },
        ],
        results: [{ id: "minecraft:budding_amethyst" }],
    });
    //#endregion
    //#region Freezing
    //#endregion
    //#region Haunting
    event.custom({
        type: "create:haunting",
        ingredients: [{ item: "minecraft:poppy" }],
        results: [{ id: "minecraft:wither_rose" }],
    });
    event.custom({
        type: "create:haunting",
        ingredients: [{ item: "minecraft:skeleton_skull" }],
        results: [{ id: "minecraft:wither_skeleton_skull" }],
    });
    event.custom({
        type: "create:haunting",
        ingredients: [{ item: "minecraft:charcoal" }],
        results: [{ id: "minecraft:coal" }],
    });
    //#endregion
    //#region Item Application
    if (Platform.isLoaded("createdieselgenerators")) {
        createItemApplication(
            event,
            "createdieselgenerators:chip_wood_beam",
            "create:andesite_alloy",
            "create:andesite_casing"
        );
        createItemApplication(
            event,
            "createdieselgenerators:chip_wood_beam",
            "create:brass_ingot",
            "create:brass_casing"
        );
        createItemApplication(
            event,
            "createdieselgenerators:chip_wood_beam",
            "minecraft:copper_ingot",
            "create:copper_casing"
        );
        createItemApplication(
            event,
            "createdieselgenerators:large_diesel_engine",
            'create:steam_engine',
            "createdieselgenerators:huge_diesel_engine"
        )
    }
    if (
        Platform.isLoaded("create_enchantment_industry") &&
        Platform.isLoaded("fluidlogistics")
    ) {
        createItemApplication(
            event,
            "fluidlogistics:fluid_hatch",
            "create:experience_block",
            "create_enchantment_industry:experience_hatch",
        );
    }
    //#endregion
    //#region Mixing
    event.custom({
        type: "create:mixing",
        heat_requirement: "heated",
        ingredients: [{ item: "create:experience_nugget" }],
        results: [{ amount: 3, id: "create_enchantment_industry:experience" }],
    });
    event.custom({
        type: "create:mixing",
        heat_requirement: "heated",
        ingredients: [{ item: "create_sa:heap_of_experience" }],
        results: [{ amount: 12, id: "create_enchantment_industry:experience" }],
    });
    event.custom({
        type: "create:mixing",
        heat_requirement: "heated",
        ingredients: [{ item: "create:experience_block" }],
        results: [{ amount: 27, id: "create_enchantment_industry:experience" }],
    });
    event.custom({
        type: "create:mixing",
        heat_requirement: "heated",
        ingredients: [
            { item: "create_enchantment_industry:super_experience_nugget" },
        ],
        results: [{ amount: 3, id: "create_enchantment_industry:experience" }],
    });
    event.custom({
        type: "create:mixing",
        heat_requirement: "heated",
        ingredients: [
            { item: "create_enchantment_industry:super_experience_block" },
        ],
        results: [{ amount: 27, id: "create_enchantment_industry:experience" }],
    });
    if (Platform.isLoaded("create_enchantment_industry")) {
        event.custom({
            type: "create:mixing",
            heat_requirement: "heated",
            ingredients: [
                { item: "minecraft:sculk_catalyst" },
                {
                    type: "fluid_stack",
                    amount: 200,
                    fluid: "create_enchantment_industry:experience",
                },
            ],
            results: [
                { count: 8, id: "minecraft:sculk" },
                { id: "minecraft:sculk_catalyst" },
            ],
        });
    }
    //#endregion
    //#region Splashing
    event.remove({ id: "create:splashing/sand" });
    event.custom({
        type: "create:splashing",
        ingredients: [{ item: "minecraft:sand" }],
        results: [
            { chance: 0.25, id: "minecraft:clay_ball" },
            { chance: 0.2, count: 2, id: "create:copper_nugget" },
            { chance: 0.125, count: 2, id: "create:copper_nugget" },
        ],
    });
    event.custom({
        type: "create:splashing",
        ingredients: [{ item: "minecraft:wither_skeleton_skull" }],
        results: [{ id: "minecraft:skeleton_skull" }],
    });
    //#endregion
});
