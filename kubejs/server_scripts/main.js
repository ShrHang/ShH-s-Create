// const ICuriosItemHandler = Java.loadClass("top.theillusivec4.curios.api.type.capability.ICuriosItemHandler")
// const EntityCapability = Java.loadClass("net.neoforged.neoforge.capabilities.EntityCapability")
// const ICurioStacksHandler = Java.loadClass("top.theillusivec4.curios.api.type.inventory.ICurioStacksHandler")

const FP = Java.loadClass('net.minecraft.world.food.FoodProperties')
const PE = Java.loadClass('net.minecraft.world.food.FoodProperties$PossibleEffect')
const MEI = Java.loadClass('net.minecraft.world.effect.MobEffectInstance')

// const curiosCap = EntityCapability.createVoid("curios:inventory",ICuriosItemHandler);

PlayerEvents.chat(event => {
    const player = event.player
    const message = event.message

    if (message == 'ts') {
        player.sendSystemMessage(Component.literal(player.type));
        if (player.mainHandItem) {
            player.mainHandItem.getComponents().forEach(value=> {
                player.sendSystemMessage(Component.literal(value + "\n").gold());
            });
            player.sendSystemMessage(Component.literal("=====================").green());
        }
        let nEs = [];
        player.mainHandItem.getComponents().get("minecraft:potion_contents").potion().get().value().getEffects().forEach(e => {
            player.sendSystemMessage(Component.literal(`[vanilla] ${e.getEffect().unwrapKey().get().location()} \namp=${e.getAmplifier()} \ndur=${e.getDuration()}\n`))
            nEs.push(new PE(() => new MEI(e.getEffect(), e.getDuration(), e.getAmplifier(), e.isAmbient(), e.isVisible()), 1.0));
        });
        // player.sendSystemMessage(Component.literal(ef).gold());
        player.sendSystemMessage(Component.literal("=====================").green());
        let oF = Item.of("minecraft:apple").getComponents().get("minecraft:food");
        let nF = new FP(
            oF.nutrition(),
            oF.saturation(),
            oF.canAlwaysEat(),
            oF.eatSeconds(),
            oF.usingConvertsTo(),
            nEs
        );
        let appleItem = Item.of("minecraft:apple", 1);
        appleItem.getComponents().set("minecraft:food", nF);
        player.give(appleItem);
        // event.cancel(true);
    }
    if (player.tags.contains('chat_ban')) {
        // 玩家拥有该 tag，可以执行相关逻辑
        player.sendSystemMessage(Component.literal("您当前处于禁言状态！").red())
        event.cancel(true)
    }
    if (message == "ls") {
        let itemList = [];
        let listStr = "";
        player.inventory.allItems.forEach(item => {
            itemList.push("\"" + item.getId() + "\"");
        });
        listStr = itemList.join(", ");
        player.sendSystemMessage(Component.literal(listStr));
    }
})
