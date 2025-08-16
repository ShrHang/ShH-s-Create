ServerEvents.recipes(event => {

    event.remove({output: 'immersive_aircraft:propeller'})
    event.remove({output: 'immersive_aircraft:boiler'})
    // event.remove({output: 'immersive_aircraft:hull'})
    event.remove({output: 'immersive_aircraft:sail'})
    // event.remove({output: 'immersive_aircraft:engine'})
    event.remove({output: 'immersive_aircraft:gyrodyne'})

    event.shaped('immersive_aircraft:propeller', [
        'AA ',
        ' B ',
        ' AA'
    ]
    , {
        A: 'create:iron_sheet',
        B: 'create:propeller'
    })

    event.shapeless('immersive_aircraft:boiler', [
        'create:steam_engine',
        'create:fluid_tank'
    ])

    // event.shaped('immersive_aircraft:hull', [
    //     'AAA',
    //     'BBB',
    //     'AAA'
    // ], {
    //     A:'#minecraft:logs',
    //     B: ['create:iron_sheet', 'createaddition:zinc_sheet']
    // })

    event.shaped(Item.of('immersive_aircraft:sail',4), [
        'AB'
    ], {
        A: 'create:white_sail',
        B: 'createaddition:iron_wire'
    })

    // event.shaped('immersive_aircraft:engine', [
    //     'PIP',
    //     'MBM',
    //     'ILI'
    // ], {
    //     P: 'create:piston_extension_pole',
    //     I: 'create:iron_sheet',
    //     M: 'minecraft:piston',
    //     B: 'immersive_aircraft:boiler',
    //     L: 'minecraft:blast_furnace'
    // })

    event.shaped('immersive_aircraft:gyrodyne', [
        ' A ',
        ' B ',
        'CDC'
    ],{
        A: 'immersive_aircraft:propeller',
        B: 'minecraft:stick',
        C: 'immersive_aircraft:sail',
        D: '#minecraft:chest_boats'
    })
})