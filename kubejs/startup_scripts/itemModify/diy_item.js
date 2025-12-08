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
    // event.modify('shh:portable_stock_ticker', item => {
    //     addAttModifiers(item, [
    //         { attribute: "minecraft:player.entity_interaction_range", operation: 0, amount: 1000000000, id: "shh_entity_interaction:mainhand", slot: "mainhand" }
    //     ]);
    // })
})