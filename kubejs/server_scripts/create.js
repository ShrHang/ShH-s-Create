ServerEvents.recipes(event => {
    if (!Platform.isLoaded('create')) { return; }

    // Compacting Recipes
    {
        event.custom({
            type: "create:compacting",
            ingredients: [
                { item: "minecraft:cobblestone" },
                {
                    type: "fluid_stack",
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
                    type: "fluid_stack",
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
                    type: "fluid_stack",
                    amount: 250,
                    fluid: "minecraft:water"
                }
            ],
            results: [{ id: "minecraft:calcite" }]
        })
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
                    type: "fluid_stack",
                    amount: 500,
                    fluid: "minecraft:lava"
                }
            ],
            results: [{ id: "minecraft:diamond" }]
        })
        event.custom({
            type: "create:compacting",
            ingredients: [
                { item: "create:zinc_nugget" },
                { item: "create:zinc_nugget" },
                { item: "create:zinc_nugget" },
                { item: "create:zinc_nugget" },
                { item: "minecraft:gravel" },
                {
                    type: "fluid_stack",
                    amount: 1000,
                    fluid: "minecraft:water"
                }
            ],
            results: [{ id: "create:asurine" }]
        })
        event.custom({
            type: "create:compacting",
            ingredients: [
                { item: "minecraft:iron_nugget" },
                { item: "minecraft:iron_nugget" },
                { item: "minecraft:iron_nugget" },
                { item: "minecraft:iron_nugget" },
                { item: "minecraft:gravel" },
                {
                    type: "fluid_stack",
                    amount: 1000,
                    fluid: "minecraft:water"
                }
            ],
            results: [{ id: "create:crimsite" }]
        })
        event.custom({
            type: "create:compacting",
            ingredients: [
                { item: "minecraft:gold_nugget" },
                { item: "minecraft:gold_nugget" },
                { item: "minecraft:gold_nugget" },
                { item: "minecraft:gold_nugget" },
                { item: "minecraft:gravel" },
                {
                    type: "fluid_stack",
                    amount: 1000,
                    fluid: "minecraft:water"
                }
            ],
            results: [{ id: "create:ochrum" }]
        })
        event.custom({
            type: "create:compacting",
            ingredients: [
                { item: "create:copper_nugget" },
                { item: "create:copper_nugget" },
                { item: "create:copper_nugget" },
                { item: "create:copper_nugget" },
                { item: "minecraft:gravel" },
                {
                    type: "fluid_stack",
                    amount: 1000,
                    fluid: "minecraft:water"
                }
            ],
            results: [{ id: "create:veridium" }]
        })
    }
    // Crushing Recipes
    {
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
    }
    // Testing Filling Recipes
    {
        event.custom({
            type: "create:filling",
            ingredients: [
                {
                    item: "minecraft:apple"
                },
                {
                    type: "fluid_stack",
                    amount: 250,
                    components: {
                        "create:potion_fluid_bottle_type": "regular",
                        "minecraft:potion_contents":
                        {
                            potion: "minecraft:swiftness"
                        }
                    },
                    fluid: "create:potion"
                }
            ],
            results: [
                {
                    components: {
                        "minecraft:food":
                        {
                            nutrition: 6,
                            saturation: 5,
                            effects: [
                                { effect: { id: "minecraft:speed", duration: 200, amplifier: 0 } }
                            ]
                        }
                    },
                    id: "minecraft:apple"
                }
            ]
        })
    }
})
