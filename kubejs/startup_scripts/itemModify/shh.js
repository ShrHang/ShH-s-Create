ItemEvents.modification(event => {
    event.modify('shh:etihw', item => {
        if (CuriosApi) {
            item.attachCuriosCapability(CuriosJSCapabilityBuilder
                .create()
                .addAttribute(
                    "minecraft:generic.attack_damage",
                    "shh_attack_damage:curios_curio",
                    8.23,
                    "add_value"
                )
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
    })

})
