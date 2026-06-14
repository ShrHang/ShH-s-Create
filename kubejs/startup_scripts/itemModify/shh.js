ItemEvents.modification(event => {
    event.modify('shh:etihw', item => {
        if (CuriosApi) {
            item.attachCuriosCapability(CuriosJSCapabilityBuilder
                .create()
                .addAttribute(
                    "neoforge:creative_flight",
                    "shh_creative_flight:curios_curio",
                    8.23,
                    "add_value"
                )
                .curioTick((context, stack) => {
                    if (context.entity().level.getTime() % 100 !== 0) return;
                    if (!context.entity().isPlayer()) return;
                    let player = context.entity();
                    player.potionEffects.add("night_vision", 100, 0, false, false);
                })
            )
        }
    });
    event.modify('shh:hulibugulv', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.attack_damage", amount: 5, id: "minecraft:base_attack_damage", slot: "mainhand" }
        ]);
    });
    event.modify("shh:reality_index_upgrade_orb", item => {
        item.set("irons_spellbooks:upgrade_orb_type", "curseofpandora:reality_index");
    });
})
