

const SimpleMenuProvider = Java.loadClass('net.minecraft.world.SimpleMenuProvider')
const ChestMenu = Java.loadClass('net.minecraft.world.inventory.ChestMenu')

const StockTickerBlockEntity = Java.loadClass("com.simibubi.create.content.logistics.stockTicker.StockTickerBlockEntity");
const RequestMenuProvider = Java.loadClass("com.simibubi.create.content.logistics.stockTicker.StockTickerBlockEntity$RequestMenuProvider");
const CategoryMenuProvider = Java.loadClass("com.simibubi.create.content.logistics.stockTicker.StockTickerBlockEntity$CategoryMenuProvider");

const CustomData = Java.loadClass("net.minecraft.world.item.component.CustomData")
// const $BlockPos = Java.loadClass('net.minecraft.core.BlockPos')
PlayerEvents.chat(event => {
    let player = event.player;
    let message = event.message;
    if (message == "ts") {
        let comp = player.mainHandItem.components.get("minecraft:custom_data").copyTag();
        player.tell(Component.literal(comp.isEmpty()));
        event.cancel();
    }

    if (message == "open") {
        let block = player.rayTrace(10).block;
        if (block.id == 'create:stock_ticker') {
            let blockEntity = block.entity;
            let pos = blockEntity.getBlockPos();
            let provider = new RequestMenuProvider(blockEntity);
            player["openMenu(net.minecraft.world.MenuProvider,java.util.function.Consumer)"](provider, buf => {
                buf.writeBoolean(true).writeBoolean(false).writeLong(pos.asLong());
            });
        } else {
            player.tell(Component.red("未找到 StockTicker 方块实体！请看着方块或站在方块上方。"));
        }
        event.cancel();
    }

    if (message == "ed") {
        let enderChestContainer = player.enderChestInventory;
        player["openMenu(net.minecraft.world.MenuProvider,java.util.function.Consumer)"](new SimpleMenuProvider(
            (id, inventory, player) => {
                return ChestMenu.threeRows(id, inventory, enderChestContainer)
            },
            Component.translatable("container.enderchest")
        ))
        event.cancel();
    }

    /*if (message == "addfoodcomp") {
        if (!player.mainHandItem || !player.offHandItem) return;
        let foodComp = player.mainHandItem.getComponents().get("minecraft:food");
        let potionComp = player.offHandItem.getComponents().get("minecraft:potion_contents");
        if (!foodComp || !potionComp) return;
        let seen = new Set();
        let newEffects = [];
        foodComp.effects().forEach(pEffect => {
            let key = [
                pEffect.effect().getEffect().unwrapKey().get().location(),
                pEffect.effect().getAmplifier(),
                pEffect.effect().getDuration(),
                pEffect.effect().isAmbient(),
                pEffect.effect().isVisible()
            ].join("|");
            if (seen.has(key)) return;
            seen.add(key);
            newEffects.push(pEffect);
        });
        potionComp.potion().get().value().getEffects().forEach(effect => {
            let key = [
                effect.getEffect().unwrapKey().get().location(),
                effect.getAmplifier(),
                effect.getDuration(),
                effect.isAmbient(),
                effect.isVisible()
            ].join("|");
            if (seen.has(key)) return;
            seen.add(key);
            newEffects.push(new PE(() => new MEI(effect.getEffect(), effect.getDuration(), effect.getAmplifier(), effect.isAmbient(), effect.isVisible()), 1.0));
        });
        let newFoodComp = new FP(
            foodComp.nutrition(),
            foodComp.saturation(),
            foodComp.canAlwaysEat(),
            foodComp.eatSeconds(),
            foodComp.usingConvertsTo(),
            newEffects
        );
        player.mainHandItem.getComponents().set("minecraft:food", newFoodComp);
        event.cancel();
    }

    if (message == "insert") {
        let block = player.level.getBlock(player.blockPosition());
        let item = player.mainHandItem.copy();
        let itemNBT = item.toNBT();
        let data = block.getEntityData().copy();
        let items = data.getCompound("OutputBuffer").get("Items");
        let list = [];
        for (let i = 0; i < items.size(); i++) {
            let it = items.get(i);
            let comp1 = it.get("components") || "SHH";
            let comp2 = itemNBT.get("components") || "SHH";
            if (it.getString("id") == itemNBT.getString("id") && comp1.toString() == comp2.toString()) {
                let inputCount = item.maxStackSize - it.getInt("count") < item.count ? item.maxStackSize - it.getInt("count") : item.count;
                inputCount = inputCount > 0 ? inputCount : 0;
                data.getCompound("OutputBuffer").get("Items").get(i).putInt("count", it.getInt("count") + inputCount);
                item.count -= inputCount;
                if (item.count <= 0) break;
                itemNBT = item.toNBT();
            }
            list.push(it.toString());
        }
        player.sendSystemMessage(Component.literal(data.getCompound("OutputBuffer").get("Items").size()));
        block.setEntityData(data);
        if (item.count > 0 && items.size() < 8) {
            list.push(`{Slot:${items.size()},` + itemNBT.toString().substring(1));
            block.level.server.runCommandSilent(`data modify block ${block.pos.x} ${block.pos.y} ${block.pos.z} OutputBuffer.Items set value [${list.join(",")}]`);
        } else block.popItem(item);

        event.cancel();
    }*/

})

ItemEvents.foodEaten(event => {
    let item = event.item;
    if (item.components.has("minecraft:potion_contents")) {
        item.components.get("minecraft:potion_contents").allEffects.forEach(effect => {
            event.entity.potionEffects.add(effect.getEffect(), effect.getDuration(), effect.getAmplifier(), effect.isAmbient(), effect.isVisible());
        });
    }
})

ItemEvents.firstRightClicked('shh:portable_stock_ticker', event => {
    let player = event.player;
    let item = event.item;
    let data = item.components.get("minecraft:custom_data").copyTag();
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
        if (data.isEmpty()) {
            player.tell(Component.translatable("text.shh.portable_stock_ticker.no_data"));
            event.cancel();
        } else {
            let level = player.level;
            if (level.dimension.toString() != data.getString("dimension")) {
                player.tell(Component.red("当前维度与绑定的仓储发报机维度不符，无法打开！"));
                event.cancel();
            }
            let blockEntity = level.getBlockEntity(BlockPos.of(data.getLong("pos")));
            let provider = new RequestMenuProvider(blockEntity);
            player["openMenu(net.minecraft.world.MenuProvider,java.util.function.Consumer)"](provider, buf => {
                buf.writeBoolean(true).writeBoolean(false).writeLong(data.getLong("pos"));
            });
            event.cancel();
        }
    }
})