ServerEvents.recipes(event => {
    if (Platform.isLoaded('l2hostility')) {
        if (Platform.isLoaded('create')) {

            event.custom({
                type: "create:crushing",
                ingredients: [{ item: "l2hostility:book_of_reprint" }],
                processing_time: 350,
                results: [
                    { count: 9, id: "create:experience_nugget" },
                    { count: 16, chance: 0.5, id: "create:experience_nugget" },
                    { count: 32, chance: 0.25, id: "create:experience_nugget" },
                    { count: 64, chance: 0.125, id: "create:experience_nugget" }
                ]
            })

            //charm of looting 1
            {
                // blaze_rod
                event.custom({
                    type: "create:mixing",
                    ingredients: [{ item: "l2hostility:charm_of_looting_1" }, { item: "l2hostility:fiery" }],
                    results: [{ id: "l2hostility:charm_of_looting_1" }, { count: 8, id: "minecraft:blaze_rod" }]
                })

                // cobweb
                event.custom({
                    type: "create:mixing",
                    ingredients: [{ item: "l2hostility:charm_of_looting_1" }, { item: "l2hostility:slowness" }],
                    results: [{ id: "l2hostility:charm_of_looting_1" }, { count: 4, id: "minecraft:cobweb" }]
                })

                // creeper_head
                event.custom({
                    type: "create:mixing",
                    ingredients: [{ item: "l2hostility:charm_of_looting_1" }, { item: "l2hostility:grenade" }, { item: "l2hostility:grenade" }],
                    results: [{ id: "l2hostility:charm_of_looting_1" }, { count: 1, id: "minecraft:creeper_head" }]
                })

                // diamond
                event.custom({
                    type: "create:mixing",
                    ingredients: [{ item: "l2hostility:charm_of_looting_1" }, { item: "l2hostility:tank" }],
                    results: [{ id: "l2hostility:charm_of_looting_1" }, { count: 4, id: "minecraft:diamond" }]
                })

                // dragon_breath-1
                event.custom({
                    type: "create:mixing",
                    ingredients: [{ item: "l2hostility:charm_of_looting_1" }, { item: "l2hostility:moonwalk" }],
                    results: [{ id: "l2hostility:charm_of_looting_1" }, { count: 8, id: "minecraft:dragon_breath" }]
                })

                // dragon_breath
                event.custom({
                    type: "create:mixing",
                    ingredients: [{ item: "l2hostility:charm_of_looting_1" }, { item: "l2hostility:gravity" }],
                    results: [{ id: "l2hostility:charm_of_looting_1" }, { count: 4, id: "minecraft:dragon_breath" }]
                })

                // enchanted_golden_apple
                event.custom({
                    type: "create:mixing",
                    ingredients: [{ item: "l2hostility:charm_of_looting_1" }, { item: "l2hostility:growth" }],
                    results: [{ id: "l2hostility:charm_of_looting_1" }, { count: 1, id: "minecraft:enchanted_golden_apple" }]
                })

                // fermented_spider_eye
                event.custom({
                    type: "create:mixing",
                    ingredients: [{ item: "l2hostility:charm_of_looting_1" }, { item: "l2hostility:weakness" }],
                    results: [{ id: "l2hostility:charm_of_looting_1" }, { count: 8, id: "minecraft:fermented_spider_eye" }]
                })

                // ghast_tear
                event.custom({
                    type: "create:mixing",
                    ingredients: [{ item: "l2hostility:charm_of_looting_1" }, { item: "l2hostility:regenerate" }],
                    results: [{ id: "l2hostility:charm_of_looting_1" }, { count: 4, id: "minecraft:ghast_tear" }]
                })

                // gunpowder
                event.custom({
                    type: "create:mixing",
                    ingredients: [{ item: "l2hostility:charm_of_looting_1" }, { item: "l2hostility:grenade" }],
                    results: [{ id: "l2hostility:charm_of_looting_1" }, { count: 4, id: "minecraft:gunpowder" }]
                })

                // ink_sac
                event.custom({
                    type: "create:mixing",
                    ingredients: [{ item: "l2hostility:charm_of_looting_1" }, { item: "l2hostility:blindness" }],
                    results: [{ id: "l2hostility:charm_of_looting_1" }, { count: 8, id: "minecraft:ink_sac" }]
                })

                // netherite_scrap
                event.custom({
                    type: "create:mixing",
                    ingredients: [{ item: "l2hostility:charm_of_looting_1" }, { item: "l2hostility:tank" }, { item: "l2hostility:tank" }],
                    results: [{ id: "l2hostility:charm_of_looting_1" }, { count: 1, id: "minecraft:netherite_scrap" }]
                })

                // phantom_membrane
                event.custom({
                    type: "create:mixing",
                    ingredients: [{ item: "l2hostility:charm_of_looting_1" }, { item: "l2hostility:invisible" }],
                    results: [{ id: "l2hostility:charm_of_looting_1" }, { count: 4, id: "minecraft:phantom_membrane" }]
                })

                // potion
                event.custom({
                    type: "create:mixing",
                    ingredients: [{ item: "l2hostility:charm_of_looting_1" }, { item: "l2hostility:cursed" }],
                    results: [{ id: "l2hostility:charm_of_looting_1" }, { count: 1, id: "minecraft:potion", components: { "minecraft:potion_contents": { potion: "l2complements:curse" } } }]
                })

                // pufferfish
                event.custom({
                    type: "create:mixing",
                    ingredients: [{ item: "l2hostility:charm_of_looting_1" }, { item: "l2hostility:nausea" }],
                    results: [{ id: "l2hostility:charm_of_looting_1" }, { count: 4, id: "minecraft:pufferfish" }]
                })

                // rabbit_foot
                event.custom({
                    type: "create:mixing",
                    ingredients: [{ item: "l2hostility:charm_of_looting_1" }, { item: "l2hostility:speedy" }],
                    results: [{ id: "l2hostility:charm_of_looting_1" }, { count: 2, id: "minecraft:rabbit_foot" }]
                })

                // shulker_shell
                event.custom({
                    type: "create:mixing",
                    ingredients: [{ item: "l2hostility:charm_of_looting_1" }, { item: "l2hostility:protection" }],
                    results: [{ id: "l2hostility:charm_of_looting_1" }, { count: 1, id: "minecraft:shulker_shell" }]
                })

                // spider_eye
                event.custom({
                    type: "create:mixing",
                    ingredients: [{ item: "l2hostility:charm_of_looting_1" }, { item: "l2hostility:poison" }],
                    results: [{ id: "l2hostility:charm_of_looting_1" }, { count: 8, id: "minecraft:spider_eye" }]
                })

                // totem_of_undying
                event.custom({
                    type: "create:mixing",
                    ingredients: [{ item: "l2hostility:charm_of_looting_1" }, { item: "l2hostility:undying" }],
                    results: [{ id: "l2hostility:charm_of_looting_1" }, { count: 1, id: "minecraft:totem_of_undying" }]
                })

                // turtle_scute
                event.custom({
                    type: "create:mixing",
                    ingredients: [{ item: "l2hostility:charm_of_looting_1" }, { item: "l2hostility:protection" }],
                    results: [{ id: "l2hostility:charm_of_looting_1" }, { count: 4, id: "minecraft:turtle_scute" }]
                })

                // wither_rose
                event.custom({
                    type: "create:mixing",
                    ingredients: [{ item: "l2hostility:charm_of_looting_1" }, { item: "l2hostility:wither" }],
                    results: [{ id: "l2hostility:charm_of_looting_1" }, { count: 8, id: "minecraft:wither_rose" }]
                })

                // wither_skeleton_skull
                event.custom({
                    type: "create:mixing",
                    ingredients: [{ item: "l2hostility:charm_of_looting_1" }, { count: 2, item: "l2hostility:wither" }],
                    results: [{ id: "l2hostility:charm_of_looting_1" }, { count: 1, id: "minecraft:wither_skeleton_skull" }]
                })
            }

            // charm of looting 2
            {
                event.custom({
                    type: "create:mixing",
                    ingredients: [{ item: "l2hostility:charm_of_looting_2" }, { item: "l2hostility:levitation" }],
                    results: [
                        {
                            id: "l2hostility:charm_of_looting_2"
                        },
                        {
                            count: 1,
                            id: "l2complements:captured_shulker_bullet"
                        }
                    ]
                })


                event.custom({
                    type: "create:mixing",
                    ingredients: [{ item: "l2hostility:charm_of_looting_2" }, { item: "l2hostility:shulker" }],
                    results: [
                        {
                            id: "l2hostility:charm_of_looting_2"
                        },
                        {
                            count: 1,
                            id: "l2complements:captured_shulker_bullet"
                        }
                    ]
                })


                event.custom({
                    type: "create:mixing",
                    ingredients: [{ item: "l2hostility:charm_of_looting_2" }, { item: "l2hostility:adaptive" }],
                    results: [
                        {
                            id: "l2hostility:charm_of_looting_2"
                        },
                        {
                            count: 1,
                            id: "l2complements:cursed_droplet"
                        }
                    ]
                })


                event.custom({
                    type: "create:mixing",
                    ingredients: [
                        {
                            item: "l2hostility:charm_of_looting_2"
                        },
                        {
                            item: "l2hostility:erosion"
                        }
                    ],
                    results: [
                        {
                            id: "l2hostility:charm_of_looting_2"
                        },
                        {
                            count: 1,
                            id: "l2complements:cursed_droplet"
                        }
                    ]
                })


                event.custom({
                    type: "create:mixing",
                    ingredients: [
                        {
                            item: "l2hostility:charm_of_looting_2"
                        },
                        {
                            item: "l2hostility:corrosion"
                        }
                    ],
                    results: [
                        {
                            id: "l2hostility:charm_of_looting_2"
                        },
                        {
                            count: 1,
                            id: "l2complements:cursed_droplet"
                        }
                    ]
                })


                event.custom({
                    type: "create:mixing",
                    ingredients: [
                        {
                            item: "l2hostility:charm_of_looting_2"
                        },
                        {
                            item: "l2hostility:cursed"
                        }
                    ],
                    results: [
                        {
                            id: "l2hostility:charm_of_looting_2"
                        },
                        {
                            count: 1,
                            id: "l2complements:cursed_droplet"
                        }
                    ]
                })


                event.custom({
                    type: "create:mixing",
                    ingredients: [
                        {
                            item: "l2hostility:charm_of_looting_2"
                        },
                        {
                            item: "l2hostility:counter_strike"
                        }
                    ],
                    results: [
                        {
                            id: "l2hostility:charm_of_looting_2"
                        },
                        {
                            count: 1,
                            id: "l2complements:explosion_shard"
                        }
                    ]
                })


                event.custom({
                    type: "create:mixing",
                    ingredients: [
                        {
                            item: "l2hostility:charm_of_looting_2"
                        },
                        {
                            item: "l2hostility:reflect"
                        }
                    ],
                    results: [
                        {
                            id: "l2hostility:charm_of_looting_2"
                        },
                        {
                            count: 1,
                            id: "l2complements:explosion_shard"
                        }
                    ]
                })


                event.custom({
                    type: "create:mixing",
                    ingredients: [
                        {
                            item: "l2hostility:charm_of_looting_2"
                        },
                        {
                            item: "l2hostility:split"
                        }
                    ],
                    results: [
                        {
                            id: "l2hostility:charm_of_looting_2"
                        },
                        {
                            count: 1,
                            id: "l2complements:guardian_eye"
                        }
                    ]
                })


                event.custom({
                    type: "create:mixing",
                    ingredients: [
                        {
                            item: "l2hostility:charm_of_looting_2"
                        },
                        {
                            item: "l2hostility:freezing"
                        }
                    ],
                    results: [
                        {
                            id: "l2hostility:charm_of_looting_2"
                        },
                        {
                            count: 2,
                            id: "l2complements:hard_ice"
                        }
                    ]
                })


                event.custom({
                    type: "create:mixing",
                    ingredients: [
                        {
                            item: "l2hostility:charm_of_looting_2"
                        },
                        {
                            item: "l2hostility:undying"
                        }
                    ],
                    results: [
                        {
                            id: "l2hostility:charm_of_looting_2"
                        },
                        {
                            count: 3,
                            id: "l2complements:life_essence"
                        }
                    ]
                })


                event.custom({
                    type: "create:mixing",
                    ingredients: [
                        {
                            item: "l2hostility:charm_of_looting_2"
                        },
                        {
                            item: "l2hostility:regenerate"
                        }
                    ],
                    results: [
                        {
                            id: "l2hostility:charm_of_looting_2"
                        },
                        {
                            count: 1,
                            id: "l2complements:life_essence"
                        }
                    ]
                })


                event.custom({
                    type: "create:mixing",
                    ingredients: [
                        {
                            item: "l2hostility:charm_of_looting_2"
                        },
                        {
                            count: 4,
                            item: "l2hostility:protection"
                        },
                        {
                            item: "l2hostility:tank"
                        }
                    ],
                    results: [
                        {
                            id: "l2hostility:charm_of_looting_2"
                        },
                        {
                            count: 1,
                            id: "l2complements:shulkerate_ingot"
                        }
                    ]
                })


                event.custom({
                    type: "create:mixing",
                    ingredients: [
                        {
                            item: "l2hostility:charm_of_looting_2"
                        },
                        {
                            count: 2,
                            item: "l2hostility:protection"
                        },
                        {
                            item: "l2hostility:tank"
                        }
                    ],
                    results: [
                        {
                            id: "l2hostility:charm_of_looting_2"
                        },
                        {
                            count: 4,
                            id: "l2complements:shulkerate_nugget"
                        }
                    ]
                })

                event.custom({
                    type: "create:mixing",
                    ingredients: [
                        {
                            item: "l2hostility:charm_of_looting_2"
                        },
                        {
                            item: "l2hostility:soul_burner"
                        }
                    ],
                    results: [
                        {
                            id: "l2hostility:charm_of_looting_2"
                        },
                        {
                            count: 2,
                            id: "l2complements:soul_flame"
                        }
                    ]
                })

                event.custom({
                    type: "create:mixing",
                    ingredients: [
                        {
                            item: "l2hostility:charm_of_looting_2"
                        },
                        {
                            item: "l2hostility:drain"
                        }
                    ],
                    results: [
                        {
                            id: "l2hostility:charm_of_looting_2"
                        },
                        {
                            count: 1,
                            id: "l2hostility:witch_droplet"
                        }
                    ]
                })

            }

            // charm of looting 3
            {
                event.custom(
                    {
                        type: "create:mixing",
                        ingredients: [
                            {
                                item: "l2hostility:charm_of_looting_3"
                            },
                            {
                                item: "l2hostility:pulling"
                            }
                        ],
                        results: [
                            {
                                id: "l2hostility:charm_of_looting_3"
                            },
                            {
                                count: 1,
                                id: "l2complements:blackstone_core"
                            }
                        ]
                    }
                )
                event.custom(
                    {
                        type: "create:mixing",
                        ingredients: [
                            {
                                item: "l2hostility:charm_of_looting_3"
                            },
                            {
                                item: "l2hostility:reprint"
                            }
                        ],
                        results: [
                            {
                                id: "l2hostility:charm_of_looting_3"
                            },
                            {
                                count: 1,
                                id: "l2hostility:book_of_reprint"
                            }
                        ]
                    }
                )
                event.custom(
                    {
                        type: "create:mixing",
                        ingredients: [
                            {
                                item: "l2hostility:charm_of_looting_3"
                            },
                            {
                                item: "l2hostility:speedy"
                            }
                        ],
                        results: [
                            {
                                id: "l2hostility:charm_of_looting_3"
                            },
                            {
                                count: 1,
                                id: "l2complements:captured_wind"
                            }
                        ]
                    }
                )
                event.custom(
                    {
                        type: "create:mixing",
                        ingredients: [
                            {
                                item: "l2hostility:charm_of_looting_3"
                            },
                            {
                                item: "l2hostility:repelling"
                            }
                        ],
                        results: [
                            {
                                id: "l2hostility:charm_of_looting_3"
                            },
                            {
                                count: 1,
                                id: "l2complements:force_field"
                            }
                        ]
                    }
                )
                event.custom(
                    {
                        type: "create:mixing",
                        ingredients: [
                            {
                                item: "l2hostility:charm_of_looting_3"
                            },
                            {
                                item: "l2hostility:speedy"
                            },
                            {
                                count: 3,
                                item: "l2hostility:tank"
                            }
                        ],
                        results: [
                            {
                                id: "l2hostility:charm_of_looting_3"
                            },
                            {
                                count: 4,
                                id: "l2complements:sculkium_nugget"
                            }
                        ]
                    }
                )
                event.custom(
                    {
                        type: "create:mixing",
                        ingredients: [
                            {
                                item: "l2hostility:charm_of_looting_3"
                            },
                            {
                                item: "l2hostility:grenade"
                            }
                        ],
                        results: [
                            {
                                id: "l2hostility:charm_of_looting_3"
                            },
                            {
                                count: 1,
                                id: "l2complements:storm_core"
                            }
                        ]
                    }
                )
                event.custom(
                    {
                        type: "create:mixing",
                        ingredients: [
                            {
                                item: "l2hostility:charm_of_looting_3"
                            },
                            {
                                item: "l2hostility:regenerate"
                            }
                        ],
                        results: [
                            {
                                id: "l2hostility:charm_of_looting_3"
                            },
                            {
                                count: 4,
                                id: "l2complements:totemic_gold_nugget"
                            }
                        ]
                    }
                )

            }

            // charm of looting 4
            {
                event.custom(
                    {
                        type: "create:mixing",
                        ingredients: [
                            {
                                item: "l2hostility:charm_of_looting_4"
                            },
                            {
                                item: "l2hostility:master"
                            }
                        ],
                        results: [
                            {
                                id: "l2hostility:charm_of_looting_4"
                            },
                            {
                                count: 4,
                                id: "l2hostility:chaos_ingot"
                            }
                        ]
                    }
                )
                event.custom(
                    {
                        type: "create:mixing",
                        ingredients: [
                            {
                                item: "l2hostility:charm_of_looting_4"
                            },
                            {
                                item: "l2hostility:dementor"
                            },
                            {
                                item: "l2hostility:ragnarok"
                            },
                            {
                                item: "l2hostility:killer_aura"
                            }
                        ],
                        results: [
                            {
                                id: "l2hostility:charm_of_looting_4"
                            },
                            {
                                count: 1,
                                id: "l2hostility:chaos_ingot"
                            }
                        ]
                    }
                )
                event.custom(
                    {
                        type: "create:mixing",
                        ingredients: [
                            {
                                item: "l2hostility:charm_of_looting_4"
                            },
                            {
                                item: "l2hostility:arena"
                            }
                        ],
                        results: [
                            {
                                id: "l2hostility:charm_of_looting_4"
                            },
                            {
                                count: 1,
                                id: "l2hostility:chaos_ingot"
                            }
                        ]
                    }
                )
                event.custom(
                    {
                        type: "create:mixing",
                        ingredients: [
                            {
                                item: "l2hostility:charm_of_looting_4"
                            },
                            {
                                item: "l2hostility:ragnarok"
                            }
                        ],
                        results: [
                            {
                                id: "l2hostility:charm_of_looting_4"
                            },
                            {
                                count: 4,
                                id: "l2complements:eternium_nugget"
                            }
                        ]
                    }
                )
                event.custom(
                    {
                        type: "create:mixing",
                        ingredients: [
                            {
                                item: "l2hostility:charm_of_looting_4"
                            },
                            {
                                item: "l2hostility:killer_aura"
                            }
                        ],
                        results: [
                            {
                                id: "l2hostility:charm_of_looting_4"
                            },
                            {
                                count: 1,
                                id: "l2complements:heirophant_green"
                            }
                        ]
                    }
                )
                event.custom(
                    {
                        type: "create:mixing",
                        ingredients: [
                            {
                                item: "l2hostility:charm_of_looting_4"
                            },
                            {
                                item: "l2hostility:dispell"
                            },
                            {
                                item: "l2hostility:dispell"
                            },
                            {
                                item: "l2hostility:dispell"
                            }
                        ],
                        results: [
                            {
                                id: "l2hostility:charm_of_looting_4"
                            },
                            {
                                count: 1,
                                id: "l2hostility:imagine_breaker"
                            }
                        ]
                    }
                )
                event.custom(
                    {
                        type: "create:mixing",
                        ingredients: [
                            {
                                item: "l2hostility:charm_of_looting_4"
                            },
                            {
                                item: "l2hostility:dispell"
                            }
                        ],
                        results: [
                            {
                                id: "l2hostility:charm_of_looting_4"
                            },
                            {
                                count: 1,
                                id: "l2complements:resonant_feather"
                            }
                        ]
                    }
                )
                event.custom(
                    {
                        type: "create:mixing",
                        ingredients: [
                            {
                                item: "l2hostility:charm_of_looting_4"
                            },
                            {
                                item: "l2hostility:dementor"
                            }
                        ],
                        results: [
                            {
                                id: "l2hostility:charm_of_looting_4"
                            },
                            {
                                count: 1,
                                id: "l2complements:sun_membrane"
                            }
                        ]
                    }
                )
                event.custom(
                    {
                        type: "create:mixing",
                        ingredients: [
                            {
                                item: "l2hostility:charm_of_looting_4"
                            },
                            {
                                item: "l2hostility:teleport"
                            }
                        ],
                        results: [
                            {
                                id: "l2hostility:charm_of_looting_4"
                            },
                            {
                                count: 1,
                                id: "l2complements:void_eye"
                            }
                        ]
                    }
                )
            }
        }
    }
})