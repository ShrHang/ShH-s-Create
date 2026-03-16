/**
 * @file 食物效果脚本
 * @description 允许食物携带药水效果，食用后给予玩家对应的状态效果。
 */
ItemEvents.foodEaten(event => {
    if (event.item.components.has("minecraft:potion_contents")) {
        event.item.components.get("minecraft:potion_contents").allEffects.forEach(effect => {
            event.entity.potionEffects.add(
                effect.getEffect(),
                effect.getDuration(),
                effect.getAmplifier(),
                effect.isAmbient(),
                effect.isVisible()
            );
        });
    }
})