// requires: immersive_aircraft
ServerEvents.recipes(event => {
    event.shaped(Item.of('immersive_aircraft:propeller', 4), [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: 'create:iron_sheet',
        B: 'create:propeller'
    })

    event.remove({ output: 'immersive_aircraft:boiler' })
    event.shapeless(Item.of('immersive_aircraft:boiler', 4), [
        'create:steam_engine',
        'create:fluid_tank'
    ])

    event.custom({
        type: "create:mechanical_crafting",
        accept_mirrored: true,
        category: "misc",
        key: {
            A: [
                { item: "create:iron_sheet" },
                { item: "createaddition:zinc_sheet" }
            ],
            B: { tag: "minecraft:logs" }
        },
        pattern: [
            "BBBB",
            "AAAA",
            "BBBB"
        ],
        result: {
            count: 2,
            id: "immersive_aircraft:hull"
        }
    })
    // event.recipes.create.mechanical_crafting(Item.of('immersive_aircraft:hull', 2), [
    //     'BBBB',
    //     'AAAA',
    //     'BBBB'
    // ], {
    //     A: [
    //         "create:iron_sheet",
    //         "createaddition:zinc_sheet"
    //     ],
    //     B: '#minecraft:logs'
    // })

    event.shaped(Item.of('immersive_aircraft:sail', 6), [
        'AB'
    ], {
        A: 'create:white_sail',
        B: 'createaddition:iron_wire'
    })

    event.shaped('immersive_aircraft:engine', [
        'PIP',
        'MBM',
        'ILI'
    ], {
        P: 'create:piston_extension_pole',
        I: 'create:iron_sheet',
        M: 'minecraft:piston',
        B: 'immersive_aircraft:boiler',
        L: 'minecraft:blast_furnace'
    })

    event.remove({ output: 'immersive_aircraft:gyrodyne' })
    event.shaped('immersive_aircraft:gyrodyne', [
        ' A ',
        ' B ',
        'CDC'
    ], {
        A: 'immersive_aircraft:propeller',
        B: 'minecraft:stick',
        C: 'immersive_aircraft:sail',
        D: '#minecraft:chest_boats'
    })

    event.custom({
        "type": "create:mechanical_crafting",
        "accept_mirrored": true,
        "category": "misc",
        "key": {
            "A": { "item": "immersive_aircraft:hull" },
            "B": { "item": "immersive_aircraft:engine" },
            "C": { "item": "immersive_aircraft:sail" }
        },
        "pattern": [
            "CCC",
            "CCC",
            "BA "
        ],
        "result": {
            "count": 1,
            "id": "immersive_aircraft:airship"
        }
    })
    // event.recipes.create.mechanical_crafting('immersive_aircraft:airship', [
    //     'CCC',
    //     'CCC',
    //     'BA '
    // ], {
    //     A: "immersive_aircraft:hull",
    //     B: "immersive_aircraft:engine",
    //     C: "immersive_aircraft:sail"
    // })

    event.custom({
        "type": "create:mechanical_crafting",
        "accept_mirrored": true,
        "category": "misc",
        "key": {
            "A": { "item": "immersive_aircraft:hull" },
            "B": { "item": "immersive_aircraft:engine" },
            "C": { "item": "immersive_aircraft:biplane" },
            "D": { "item": "minecraft:bamboo_block" }
        },
        "pattern": [
            "ACACA",
            " DBD ",
            " DDD "
        ],
        "result": {
            "count": 1,
            "id": "immersive_aircraft:bamboo_hopper"
        }
    })
    // event.recipes.create.mechanical_crafting('immersive_aircraft:bamboo_hopper', [
    //     'ACACA',
    //     ' DBD ',
    //     ' DDD '
    // ], {
    //     A: "immersive_aircraft:hull",
    //     B: "immersive_aircraft:engine",
    //     C: "immersive_aircraft:biplane",
    //     D: "minecraft:bamboo_block"
    // })

    event.custom({
        "type": "create:mechanical_crafting",
        "accept_mirrored": true,
        "category": "misc",
        "key": {
            "A": { "item": "immersive_aircraft:hull" },
            "B": { "item": "immersive_aircraft:engine" },
            "C": { "item": "immersive_aircraft:propeller" },
            "D": { "tag": "create:seats" }
        },
        "pattern": [
            "   A ",
            "   A ",
            "AADBC",
            "   A ",
            "   A "
        ],
        "result": {
            "count": 1,
            "id": "immersive_aircraft:biplane"
        }
    })
    // event.recipes.create.mechanical_crafting('immersive_aircraft:biplane', [
    //     '   A ',
    //     '   A ',
    //     'AADBC',
    //     '   A ',
    //     '   A '
    // ], {
    //     A: "immersive_aircraft:hull",
    //     B: "immersive_aircraft:engine",
    //     C: "immersive_aircraft:propeller",
    //     D: "#create:seats"
    // })

    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": "immersive_aircraft:airship"
        },
        "loops": 1,
        "results": [
            {
                "chance": 100.0,
                "id": "immersive_aircraft:cargo_airship"
            }
        ],
        "sequence": [
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "immersive_aircraft:airship"
                    },
                    {
                        "item": "immersive_aircraft:hull"
                    }
                ],
                "results": [
                    {
                        "id": "immersive_aircraft:airship"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "immersive_aircraft:airship"
                    },
                    {
                        "item": "minecraft:chest"
                    }
                ],
                "results": [
                    {
                        "id": "immersive_aircraft:airship"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "immersive_aircraft:airship"
                    },
                    {
                        "item": "minecraft:chest"
                    }
                ],
                "results": [
                    {
                        "id": "immersive_aircraft:airship"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "immersive_aircraft:airship"
                    },
                    {
                        "item": "minecraft:chest"
                    }
                ],
                "results": [
                    {
                        "id": "immersive_aircraft:airship"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "immersive_aircraft:airship"
                    },
                    {
                        "item": "minecraft:chest"
                    }
                ],
                "results": [
                    {
                        "id": "immersive_aircraft:airship"
                    }
                ]
            }
        ],
        "transitional_item": {
            "id": "immersive_aircraft:airship"
        }
    })
    // event.recipes.create.sequenced_assembly(
    //     "immersive_aircraft:cargo_airship",
    //     "immersive_aircraft:airship",
    //     [
    //         event.recipes.create.deploying("immersive_aircraft:airship", ["immersive_aircraft:airship", "immersive_aircraft:hull"]),
    //         event.recipes.create.deploying("immersive_aircraft:airship", ["immersive_aircraft:airship", "minecraft:chest"]),
    //         event.recipes.create.deploying("immersive_aircraft:airship", ["immersive_aircraft:airship", "minecraft:chest"]),
    //         event.recipes.create.deploying("immersive_aircraft:airship", ["immersive_aircraft:airship", "minecraft:chest"]),
    //         event.recipes.create.deploying("immersive_aircraft:airship", ["immersive_aircraft:airship", "minecraft:chest"])
    //     ]
    // ).transitionalItem("immersive_aircraft:airship")

    event.custom({
        "type": "create:mechanical_crafting",
        "accept_mirrored": true,
        "category": "misc",
        "key": {
            "A": [
                { "item": "create:iron_sheet" },
                { "item": "createaddition:zinc_sheet" }
            ],
            "B": {
                "item": "minecraft:furnace"
            },
            "C": {
                "item": "minecraft:piston"
            },
            "D": {
                "item": "immersive_aircraft:boiler"
            }
        },
        "pattern": [
            "AAAA",
            "BCDA",
            "AAAA"
        ],
        "result": {
            "count": 1,
            "id": "immersive_aircraft:engine"
        }
    })
    // event.recipes.create.mechanical_crafting('immersive_aircraft:engine', [
    //     'AAAA',
    //     'BCDA',
    //     'AAAA'
    // ], {
    //     A: [
    //         "create:iron_sheet",
    //         "createaddition:zinc_sheet"
    //     ],
    //     B: "minecraft:furnace",
    //     C: "minecraft:piston",
    //     D: "immersive_aircraft:boiler"
    // })

    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": "minecraft:scaffolding"
        },
        "loops": 1,
        "results": [
            {
                "chance": 100.0,
                "id": "immersive_aircraft:quadrocopter"
            }
        ],
        "sequence": [
            {
                "type": "create:deploying",
                "ingredients": [
                    { "item": "minecraft:scaffolding" },
                    { "item": "immersive_aircraft:engine" }
                ],
                "results": [{ "id": "minecraft:scaffolding" }]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "minecraft:scaffolding"
                    },
                    {
                        "item": "immersive_aircraft:propeller"
                    }
                ],
                "results": [
                    {
                        "id": "minecraft:scaffolding"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "minecraft:scaffolding"
                    },
                    {
                        "item": "immersive_aircraft:propeller"
                    }
                ],
                "results": [
                    {
                        "id": "minecraft:scaffolding"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    { "item": "minecraft:scaffolding" },
                    { "item": "immersive_aircraft:propeller" }
                ],
                "results": [{ "id": "minecraft:scaffolding" }]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "minecraft:scaffolding"
                    },
                    {
                        "item": "immersive_aircraft:propeller"
                    }
                ],
                "results": [
                    {
                        "id": "minecraft:scaffolding"
                    }
                ]
            }
        ],
        "transitional_item": {
            "id": "minecraft:scaffolding"
        }
    })
    // event.recipes.create.sequenced_assembly("immersive_aircraft:quadrocopter",
    //     "minecraft:scaffolding",
    //     [
    //         event.recipes.create.deploying("minecraft:scaffolding", ["minecraft:scaffolding", "immersive_aircraft:engine"]),
    //         event.recipes.create.deploying("minecraft:scaffolding", ["minecraft:scaffolding", "immersive_aircraft:propeller"]),
    //         event.recipes.create.deploying("minecraft:scaffolding", ["minecraft:scaffolding", "immersive_aircraft:propeller"]),
    //         event.recipes.create.deploying("minecraft:scaffolding", ["minecraft:scaffolding", "immersive_aircraft:propeller"]),
    //         event.recipes.create.deploying("minecraft:scaffolding", ["minecraft:scaffolding", "immersive_aircraft:propeller"])
    //     ]
    // ).transitionalItem("minecraft:scaffolding")

    event.custom({
        "type": "create:mechanical_crafting",
        "accept_mirrored": true,
        "category": "misc",
        "key": {
            "A": { "item": "immersive_aircraft:hull" },
            "B": { "item": "immersive_aircraft:engine" },
            "C": { "item": "immersive_aircraft:sail" },
            "D": { "item": "immersive_aircraft:cargo_airship" }
        },
        "pattern": [
            "CCCCC",
            "CBDBC",
            " AAA "
        ],
        "result": {
            "count": 1,
            "id": "immersive_aircraft:warship"
        }
    })
    //    event.recipes.create.mechanical_crafting('immersive_aircraft:warship', [
    //         "CCCCC",
    //         "CBDBC",
    //         " AAA "
    //     ], {
    //         A: "immersive_aircraft:hull",
    //         B: "immersive_aircraft:engine",
    //         C: "immersive_aircraft:sail",
    //         D: "immersive_aircraft:cargo_airship"
    //     })

})
