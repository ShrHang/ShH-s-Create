

const SimpleMenuProvider = Java.loadClass('net.minecraft.world.SimpleMenuProvider')
const ChestMenu = Java.loadClass('net.minecraft.world.inventory.ChestMenu')

// const StockTickerBlockEntity = Java.loadClass("com.simibubi.create.content.logistics.stockTicker.StockTickerBlockEntity");
// const CategoryMenuProvider = Java.loadClass("com.simibubi.create.content.logistics.stockTicker.StockTickerBlockEntity$CategoryMenuProvider");

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
