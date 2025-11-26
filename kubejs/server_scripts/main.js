// const ICuriosItemHandler = Java.loadClass("top.theillusivec4.curios.api.type.capability.ICuriosItemHandler")
// const EntityCapability = Java.loadClass("net.neoforged.neoforge.capabilities.EntityCapability")
// const ICurioStacksHandler = Java.loadClass("top.theillusivec4.curios.api.type.inventory.ICurioStacksHandler")

const FP = Java.loadClass('net.minecraft.world.food.FoodProperties')
const PE = Java.loadClass('net.minecraft.world.food.FoodProperties$PossibleEffect')
const MEI = Java.loadClass('net.minecraft.world.effect.MobEffectInstance')

// const curiosCap = EntityCapability.createVoid("curios:inventory",ICuriosItemHandler);

// const Doc = Java.loadClass("moe.wolfgirl.probejs.generated.DocumentedRecipes")

PlayerEvents.chat(event => {
    const player = event.player
    const message = event.message
    if (message == 'addfoodcomp') {
        // player.sendSystemMessage(Component.literal(player.type));
        /*
         * 主手药水
         * 副手食物
         */
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
            ].join('|');
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
            ].join('|');
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
    // if (message == 'ts') {
    //     player.give(Item.of('pandora:pandora_necklace').componentsPatch(({
    //             'pandora:backpack_content': [
    //                 { item: { count: 1, id: 'curseofpandora:curse_of_inertia' }, slot: 0 },
    //                 { item: { count: 1, id: 'curseofpandora:curse_of_proximity' }, slot: 1 },
    //                 { item: { count: 1, id: 'curseofpandora:curse_of_flesh' }, slot: 2 },
    //                 { item: { count: 1, id: 'curseofpandora:curse_of_metabolism' }, slot: 3 },
    //                 { item: { count: 1, id: 'curseofpandora:curse_of_tension' }, slot: 4 },
    //                 { item: { count: 1, id: 'curseofpandora:curse_of_prudence' }, slot: 5 },
    //                 { item: { count: 1, id: 'curseofpandora:curse_of_spell' }, slot: 6 }
    //             ]
    //         })));
    // }
})

