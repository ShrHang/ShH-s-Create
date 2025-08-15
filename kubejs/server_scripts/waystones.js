// Warp Stone
ServerEvents.recipes(event => {
    event.remove({output:'waystones:warp_stone'})
    event.shaped('waystones:warp_stone', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'waystones:warp_dust',
        B: 'minecraft:diamond'
    })
    event.shaped('waystones:warp_stone', [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: 'waystones:warp_dust',
        B: 'waystones:warp_stone'
    })
})

// Share Stone
ServerEvents.recipes(event => {
    // Orange Share Stone
    event.shapeless('waystones:orange_sharestone', [
      'waystones:waystone',
        Item.of('minecraft:orange_dye', 2)
    ])
    // Blue Share Stone
    event.shapeless('waystones:blue_sharestone', [
      'waystones:waystone',
        Item.of('minecraft:blue_dye', 2)
    ])
    // Green Share Stone
    event.shapeless('waystones:green_sharestone', [
      'waystones:waystone',
        Item.of('minecraft:green_dye', 2)
    ])
    // Purple Share Stone
    event.shapeless('waystones:purple_sharestone', [
        'waystones:waystone',
            Item.of('minecraft:purple_dye', 2)
        ])
    // Yellow Share Stone
    event.shapeless('waystones:yellow_sharestone', [
        'waystones:waystone',
            Item.of('minecraft:yellow_dye', 2)
        ])
    // Red Share Stone
    event.shapeless('waystones:red_sharestone', [
        'waystones:waystone',
            Item.of('minecraft:red_dye', 2)
        ])
    // Black Share Stone
    event.shapeless('waystones:black_sharestone', [
        'waystones:waystone',
            Item.of('minecraft:black_dye', 2)
        ])
    // Gray Share Stone
    event.shapeless('waystones:gray_sharestone', [
        'waystones:waystone',
            Item.of('minecraft:gray_dye', 2)
        ])
    // Light Gray Share Stone
    event.shapeless('waystones:light_gray_sharestone', [
        'waystones:waystone',
            Item.of('minecraft:light_gray_dye', 2)
        ])
    // Cyan Share Stone
    event.shapeless('waystones:cyan_sharestone', [
        'waystones:waystone',
            Item.of('minecraft:cyan_dye', 2)
        ])
    // Pink Share Stone
    event.shapeless('waystones:pink_sharestone', [
        'waystones:waystone',
            Item.of('minecraft:pink_dye', 2)
        ])
    // Lime Share Stone
    event.shapeless('waystones:lime_sharestone', [
        'waystones:waystone',
            Item.of('minecraft:lime_dye', 2)
        ])
    // Brown Share Stone
    event.shapeless('waystones:brown_sharestone', [
        'waystones:waystone',
            Item.of('minecraft:brown_dye', 2)
        ])
    // Light Blue Share Stone
    event.shapeless('waystones:light_blue_sharestone', [
        'waystones:waystone',
            Item.of('minecraft:light_blue_dye', 2)
        ])
    // Magenta Share Stone
    event.shapeless('waystones:magenta_sharestone', [
        'waystones:waystone',
            Item.of('minecraft:magenta_dye', 2)
        ])
})