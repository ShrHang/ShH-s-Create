if (Platform.isLoaded('create')) {
    ServerEvents.recipes(event => {

        // Compacting Recipes
        {
            /*event.custom({
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
            })*/
            event.recipes.create.compacting("minecraft:deepslate", [
                "minecraft:cobblestone",
                Fluid.of("minecraft:lava", 250)
            ])

            /*event.custom({
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
            })*/
            event.recipes.create.compacting("minecraft:tuff", [
                "minecraft:cobblestone",
                Fluid.of("minecraft:water", 250)
            ])

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
        }
        // Crushing Recipes
        {
            /*event.custom({
                type: "create:crushing",
                ingredients: [{ tag: "c:material/netherite" }],
                processing_time: 750,
                results: [{ id: "minecraft:netherite_scrap" }]
            })*/
            event.custom({
                type: "create:crushing",
                ingredients: [{ tag: "c:material/netherite" }],
                processing_time: 750,
                results: [{ id: "minecraft:netherite_scrap" }]
            })

            /*event.custom({
                type: "create:crushing",
                ingredients: [{ item: "minecraft:crying_obsidian" }],
                processingTime: 500,
                results: [
                    { id: "create:powdered_obsidian" },
                    { chance: 0.75, id: "minecraft:obsidian" },
                    { chance: 0.5, id: "minecraft:amethyst_shard" }
                ]
            })*/
            event.recipes.create.crushing([
                    'create:powdered_obsidian',
                    CreateItem.of('minecraft:obsidian', 0.75),
                    CreateItem.of('minecraft:amethyst_shard', 0.5)
                ], 
                'minecraft:crying_obsidian'
            ).processingTime(500)
            /*event.custom({
                type: "create:crushing",
                ingredients: [{ item: "create:limestone" }],
                processingTime: 250,
                results: [
                    { chance: 0.15, id: "minecraft:quartz", count: 2 },
                    { chance: 0.35, id: "minecraft:lapis_lazuli" }
                ]
            })*/
            event.recipes.create.crushing([
                    CreateItem.of(Item.of('minecraft:quartz', 2), 0.15),
                    CreateItem.of('minecraft:lapis_lazuli', 0.35)
                ], 
                'create:limestone'
            ).processingTime(250)
            /*event.custom({
                "type": "create:crushing",
                "ingredients": [
                    {
                        "item": "minecraft:blackstone"
                    }
                ],
                "results": [
                    {
                        "chance": 0.01,
                        "id": "minecraft:wither_skeleton_skull"
                    },
                    {
                        "chance": 0.01,
                        "id": "l2complements:blackstone_core"
                    }
                ],
                "processingTime": 350
            })*/
            event.recipes.create.crushing([
                CreateItem.of('minecraft:wither_skeleton_skull', 0.01),
                CreateItem.of('l2complements:blackstone_core', 0.01)
            ],
            'minecraft:blackstone'
            ).processingTime(350)

            /*event.custom({
                "type": "create:crushing",
                "ingredients": [
                    {
                        "item": "minecraft:netherrack"
                    }
                ],
                "results": [
                    {
                        "chance": 1.0,
                        "id": "create:cinder_flour"
                    },
                    {
                        "chance": 0.5,
                        "id": "create:cinder_flour"
                    },
                    {
                        "chance": 0.005,
                        "id": "minecraft:netherite_scrap"
                    }
                ],
                "processingTime": 350
            })*/
            event.recipes.create.crushing([
                CreateItem.of('create:cinder_flour', 1.0),
                CreateItem.of('create:cinder_flour', 0.5),
                CreateItem.of('minecraft:netherite_scrap', 0.005)
            ],
            'minecraft:netherrack'
            ).processingTime(350)

            /*event.custom({
                "type": "create:crushing",
                "ingredients": [
                    {
                        "item": "create:scoria"
                    }
                ],
                "results": [
                    {
                        "chance": 0.125,
                        "id": "minecraft:blaze_powder"
                    },
                    {
                        "chance": 0.02,
                        "id": "minecraft:blaze_rod"
                    }
                ],
                "processingTime": 125
            })*/
            event.recipes.create.crushing([
                CreateItem.of('minecraft:blaze_powder', 0.125),
                CreateItem.of('minecraft:blaze_rod', 0.02)
            ],
            'create:scoria'
            ).processingTime(125)

            /*event.custom({
                "type": "create:crushing",
                "ingredients": [
                    {
                        "item": "minecraft:soul_sand"
                    }
                ],
                "results": [
                    {
                        "chance": 0.125,
                        "id": "minecraft:glowstone_dust"
                    }
                ],
                "processingTime": 125
            })*/
            event.recipes.create.crushing([
                CreateItem.of('minecraft:glowstone_dust', 0.125)
            ],
            'minecraft:soul_sand'
            ).processingTime(125)
        }
        // Testing Filling Recipes
        {
            /*event.custom({
                type: "create:filling",
                ingredients: [
                    {
                        item: "minecraft:apple"
                    },
                    {
                        type: "neoforge:single",
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
            })*/
        }
    })


}