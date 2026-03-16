/**
 * @file 调试用的脚本
 */
PlayerEvents.chat(event => {
    let player = event.player;
    let message = event.message;

    if (message == "ts") {
        let item = player.mainHandItem
        if (!item) return;
        try {
            player.sendSystemMessage(Component.literal(item.components));
        } catch (e) {
            player.sendSystemMessage(Component.literal(e + "\n"))
        }
        item.
        event.cancel();
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
