// requires: waystones
ServerEvents.recipes(event => {
    // Warp Stone
    event.remove({ output: 'waystones:warp_stone' })
    event.shaped('waystones:warp_stone', [
        'AAA',
        'ABA',
        'AAA'
    ], { A: 'waystones:warp_dust', B: 'minecraft:diamond' });

    // Share Stone
    for (let color of colors) {
        event.shapeless(`waystones:${color}_sharestone`, [
            'waystones:waystone',
            Item.of(`minecraft:${color}_dye`, 2)
        ])
    }
})
