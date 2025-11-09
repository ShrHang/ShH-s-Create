ServerEvents.recipes(event => {
    if (!Platform.isLoaded('immersive_aircraft')) { return; }
    

    // event.remove({output: 'immersive_aircraft:propeller'})
    event.shaped(Item.of('immersive_aircraft:propeller', 4), [
        ' A ',
        'ABA',
        ' A '
    ]
        , {
            A: 'create:iron_sheet',
            B: 'create:propeller'
        })

    event.remove({ output: 'immersive_aircraft:boiler' })
    event.shapeless(Item.of('immersive_aircraft:boiler', 4), [
        'create:steam_engine',
        'create:fluid_tank'
    ])


    // event.remove({output: 'immersive_aircraft:hull'})
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


    // event.remove({output: 'immersive_aircraft:sail'})
    event.shaped(Item.of('immersive_aircraft:sail', 6), [
        'AB'
    ], {
        A: 'create:white_sail',
        B: 'createaddition:iron_wire'
    })


    // event.remove({output: 'immersive_aircraft:engine'})
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
})
