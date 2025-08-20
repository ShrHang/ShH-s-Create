ServerEvents.recipes(event => {
    event.remove({ id: 'pandora:pandora_bracelet' })
    event.shaped('pandora:pandora_bracelet', [
        'BAB',
        'A A',
        'BAB'
    ], {
        A: 'createaddition:electrum_wire',
        B: 'createaddition:electrum_nugget'
    })

    event.remove({ output: 'pandora:pandora_necklace' })
    event.shaped('pandora:pandora_necklace', [
        'AAA',
        'A A',
        'ABA'
    ], {
        A: 'createaddition:electrum_wire',
        B: 'createaddition:electrum_ingot'
    })
    event.custom({
        type: 'minecraft:crafting_shaped',
        category: 'misc',
        key: {
            A: { item: 'createaddition:electrum_wire' },
            B: { item: 'curseofpandora:plain_charm' },
            C: { item: 'minecraft:nether_star' }
        },
        pattern: [
            'ACA',
            'CBC',
            'ACA'
        ],
        result: {
            components: {
                'pandora:backpack_content': [
                { item: { count: 1, id: 'curseofpandora:curse_of_inertia' }, slot: 0 },
                { item: { count: 1, id: 'curseofpandora:curse_of_proximity' }, slot: 1 },
                { item: { count: 1, id: 'curseofpandora:curse_of_flesh' }, slot: 2 },
                { item: { count: 1, id: 'curseofpandora:curse_of_metabolism' }, slot: 3 },
                { item: { count: 1, id: 'curseofpandora:curse_of_tension' }, slot: 4 },
                { item: { count: 1, id: 'curseofpandora:curse_of_prudence' }, slot: 5 },
                { item: { count: 1, id: 'curseofpandora:curse_of_spell' }, slot: 6 }
                ]
            },
            count: 1,
            id: 'pandora:pandora_necklace'
        }
    })

    event.custom({
        "type": "create:compacting",
        "ingredients": [
            {"item": "minecraft:iron_block"},
            {"item": "minecraft:iron_block"},
            {"item": "minecraft:iron_block"},
            {"item": "minecraft:iron_block"}
        ],
        "results": [
            { "chance": 0.0972, "id": "curseofpandora:mini_beacon_base" }
        ]
    })
    event.custom({
        "type": "create:compacting",
        "ingredients": [
            {"item": "minecraft:gold_block"},
            {"item": "minecraft:gold_block"},
            {"item": "minecraft:gold_block"},
            {"item": "minecraft:gold_block"}
        ],
        "results": [
            { "chance": 0.0972, "id": "curseofpandora:mini_beacon_base" }
        ]
    })
    event.custom({
        "type": "create:compacting",
        "ingredients": [
            {"item": "minecraft:diamond_block"},
            {"item": "minecraft:diamond_block"},
            {"item": "minecraft:diamond_block"},
            {"item": "minecraft:diamond_block"}
        ],
        "results": [
            { "chance": 0.0972, "id": "curseofpandora:mini_beacon_base" }
        ]
    })
    event.custom({
        "type": "create:compacting",
        "ingredients": [
            { "item": "minecraft:netherite_block" },
            { "item": "minecraft:netherite_block" },
            { "item": "minecraft:netherite_block" },
            { "item": "minecraft:netherite_block" }
        ],
        "results": [
            { "chance": 0.0972, "id": "curseofpandora:mini_beacon_base" }
        ]
    })
    event.custom({
        "type": "create:compacting",
        "ingredients": [
            { "item": "minecraft:emerald_block" },
            { "item": "minecraft:emerald_block" },
            { "item": "minecraft:emerald_block" },
            { "item": "minecraft:emerald_block" }
        ],
        "results": [
            { "chance": 0.0972, "id": "curseofpandora:mini_beacon_base" }
        ]
    })
    event.custom({
        "type": "create:compacting",
        "ingredients": [
            { "item": "create:brass_block" },
            { "item": "create:brass_block" },
            { "item": "create:brass_block" },
            { "item": "create:brass_block" }
        ],
        "results": [
            { "chance": 0.0972, "id": "curseofpandora:mini_beacon_base" }
        ]
    })
    event.custom({
        "type": "create:compacting",
        "ingredients": [
            { "item": "create:zinc_block" },
            { "item": "create:zinc_block" },
            { "item": "create:zinc_block" },
            { "item": "create:zinc_block" }
        ],
        "results": [
            { "chance": 0.0972, "id": "curseofpandora:mini_beacon_base" }
        ]
    })
})
