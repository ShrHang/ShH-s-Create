// const ICuriosItemHandler = Java.loadClass("top.theillusivec4.curios.api.type.capability.ICuriosItemHandler")
// const EntityCapability = Java.loadClass("net.neoforged.neoforge.capabilities.EntityCapability")
// const ICurioStacksHandler = Java.loadClass("top.theillusivec4.curios.api.type.inventory.ICurioStacksHandler")
// const curiosCap = EntityCapability.createVoid("curios:inventory",ICuriosItemHandler);

const FP = Java.loadClass("net.minecraft.world.food.FoodProperties")
const PE = Java.loadClass("net.minecraft.world.food.FoodProperties$PossibleEffect")
const MEI = Java.loadClass("net.minecraft.world.effect.MobEffectInstance")

const PotionContents = Java.loadClass("net.minecraft.world.item.alchemy.PotionContents")

function insertString(original, index, stringToInsert) {
    return original.slice(0, index) + stringToInsert + original.slice(index);
}

PlayerEvents.chat(event => {
    const player = event.player
    const message = event.message

    // if (message == "addfoodcomp") {
    //     // player.sendSystemMessage(Component.literal(player.type));
    //     //主手药水
    //     //副手食物
    //     if (!player.mainHandItem || !player.offHandItem) return;
    //     let foodComp = player.mainHandItem.getComponents().get("minecraft:food");
    //     let potionComp = player.offHandItem.getComponents().get("minecraft:potion_contents");
    //     if (!foodComp || !potionComp) return;
    //     let seen = new Set();
    //     let newEffects = [];
    //     foodComp.effects().forEach(pEffect => {
    //         let key = [
    //             pEffect.effect().getEffect().unwrapKey().get().location(),
    //             pEffect.effect().getAmplifier(),
    //             pEffect.effect().getDuration(),
    //             pEffect.effect().isAmbient(),
    //             pEffect.effect().isVisible()
    //         ].join("|");
    //         if (seen.has(key)) return;
    //         seen.add(key);
    //         newEffects.push(pEffect);
    //     });
    //     potionComp.potion().get().value().getEffects().forEach(effect => {
    //         let key = [
    //             effect.getEffect().unwrapKey().get().location(),
    //             effect.getAmplifier(),
    //             effect.getDuration(),
    //             effect.isAmbient(),
    //             effect.isVisible()
    //         ].join("|");
    //         if (seen.has(key)) return;
    //         seen.add(key);
    //         newEffects.push(new PE(() => new MEI(effect.getEffect(), effect.getDuration(), effect.getAmplifier(), effect.isAmbient(), effect.isVisible()), 1.0));
    //     });
    //     let newFoodComp = new FP(
    //         foodComp.nutrition(),
    //         foodComp.saturation(),
    //         foodComp.canAlwaysEat(),
    //         foodComp.eatSeconds(),
    //         foodComp.usingConvertsTo(),
    //         newEffects
    //     );
    //     player.mainHandItem.getComponents().set("minecraft:food", newFoodComp);
    //     event.cancel();
    // }

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
    }

    if (message == "addpotioncomp") {
        let potionComp = player.offHandItem.getComponents().get("minecraft:potion_contents");
        player.mainHandItem.components.set("minecraft:potion_contents", potionComp);
        event.cancel();
    }

    if (message == "ts") {
        let block = player.level.getBlock(player.blockPosition());
        let data = block.getEntityData().copy();
        data.getCompound("OutputBuffer").get("Items")
        player.sendSystemMessage(Component.literal(data.getCompound("OutputBuffer").get("Items").size()));
        if (data.getCompound("OutputBuffer").get("Items").size() == 0)
            block.level.server.runCommandSilent(`data modify block ${block.pos.x} ${block.pos.y} ${block.pos.z} OutputBuffer.Items set value [${player.mainHandItem.toNBT().toString()}]`);
        event.cancel();
    }

    if (message == "sc") {
        let text = player.mainHandItem.toNBT().toString();
        let result = text.substring(1);
        player.sendSystemMessage(Component.literal(text + "\n" + result));
        event.cancel();
    }
})

ItemEvents.foodEaten(event => {
    let item = event.item;
    if (item.components.has("minecraft:potion_contents")) {
        item.components.get("minecraft:potion_contents").allEffects.forEach(effect => {
            event.entity.potionEffects.add(effect.getEffect(), effect.getDuration(), effect.getAmplifier(), effect.isAmbient(), effect.isVisible());
        });
    }
})
