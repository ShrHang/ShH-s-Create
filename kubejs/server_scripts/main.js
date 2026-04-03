/**
 * @file 调试用的脚本
 */
PlayerEvents.chat(event => {
    let player = event.player;
    let message = event.message;

    if (message == "ts") {
        let curios = player.curiosInventory["findCurios(net.minecraft.world.item.Item)"]("shh:etihw");
        if (curios.isEmpty()) player.sendSystemMessage(Component.literal("没有装备"));
        else player.sendSystemMessage(Component.literal(curios.get(0).stack()));
        event.cancel();
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
