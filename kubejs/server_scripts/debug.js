/**
 * @file 调试用的脚本
 */
PlayerEvents.chat(event => {
    let player = event.player;
    let message = event.message;

    if (message == "ts") {
        
        event.cancel();
    }

    if (message == "tt") {
        
    }

    if (message == "ed") {
        let enderChestContainer = player.enderChestInventory;
        player.openMenu(new SimpleMenuProvider(
            (id, inventory, player) => {
                return ChestMenu.threeRows(id, inventory, enderChestContainer)
            },
            Component.translatable("container.enderchest")
        ))
        event.cancel();
    }
});

ServerEvents.recipes(event => {
    event.printExamples("create:mixing");
});
