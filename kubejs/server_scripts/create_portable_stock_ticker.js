const RequestMenuProvider = Java.loadClass("com.simibubi.create.content.logistics.stockTicker.StockTickerBlockEntity$RequestMenuProvider");
const CustomData = Java.loadClass("net.minecraft.world.item.component.CustomData")
ItemEvents.firstRightClicked('shh:portable_stock_ticker', event => {
    let player = event.player;
    let item = event.item;
    let data = item.components.get("minecraft:custom_data");
    if (player.isShiftKeyDown()) {
        if (player.rayTrace(7).block.id == 'create:stock_ticker') {
            let blockEntity = player.rayTrace(7).block.entity;
            let pos = blockEntity.getBlockPos();
            item.components.set("minecraft:custom_data", CustomData.of({
                pos: player.rayTrace(7).block.pos.asLong(),
                dimension: player.rayTrace(7).block.level.dimension.toString()
            }));
            player.tell(Component.green("仓储发报机绑定成功！"));
        }
    } else {
        if (data.isEmpty() || !data) {
            player.tell(Component.translatable("text.shh.portable_stock_ticker.no_data"));
            event.cancel();
        } else {
            let level = player.level;
            if (level.dimension.toString() != data.copyTag().getString("dimension")) {
                player.tell(Component.red("当前维度与绑定的仓储发报机维度不符，无法打开！"));
                event.cancel();
            }
            let blockEntity = level.getBlockEntity(BlockPos.of(data.copyTag().getLong("pos")));
            let provider = new RequestMenuProvider(blockEntity);
            player["openMenu(net.minecraft.world.MenuProvider,java.util.function.Consumer)"](provider, buf => {
                buf.writeBoolean(true).writeBoolean(false).writeLong(data.copyTag().getLong("pos"));
            });
            event.cancel();
        }
    }
})