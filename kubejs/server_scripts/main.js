/**
 * @file 调试用的脚本
 */
PlayerEvents.chat(event => {
    let player = event.player;
    let message = event.message;

    if (message == "ts") {
    }

    if (message == "tt") {
        let item = player.mainHandItem
        if (!item) return;
        try {
            player.sendSystemMessage(Component.literal(item.getBurnTime("minecraft:smelting")));
        } catch (e) {
            player.sendSystemMessage(Component.literal(e + "\n"))
        }
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
