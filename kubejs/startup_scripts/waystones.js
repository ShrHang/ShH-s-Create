// Warp Stone
ItemEvents.modification( event => {
    event.modify('waystones:warp_stone', item => {
        item.setMaxDamage(512)
    })
})