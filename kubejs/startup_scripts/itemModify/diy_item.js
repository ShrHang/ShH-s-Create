ItemEvents.modification(event => {
    event.modify('shh:etihw', item => {
        if (CuriosApi) {
            item.attachCuriosCapability(CuriosJSCapabilityBuilder.create().addAttribute(
                "minecraft:generic.attack_damage",
                "shh_attack_damage:curios_curio",
                8.23,
                "add_value"
            ))
        }
    });
    event.modify('shh:hulibugulv', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.attack_damage", operation: 0, amount: 5, id: "minecraft:base_attack_damage", slot: "mainhand" }
        ]);
    });
})