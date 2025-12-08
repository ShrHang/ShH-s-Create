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