// Warp Stone
ItemEvents.modification(event => {
    if (Platform.isLoaded("waystones")) {
        event.modify('waystones:warp_stone', item => {
            item.setUnbreakable()
        })
    }
})