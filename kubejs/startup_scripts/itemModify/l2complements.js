// requires: l2complements
ItemEvents.modification(event => {
    //#region  l2complements 剑与斧类
    [
        { material: "totemic_gold", damage: 6 },
        { material: "poseidite", damage: 7 },
        { material: "shulkerate", damage: 7 },
        { material: "sculkium", damage: 8 },
        { material: "eternium", damage: 8 }
    ].forEach(md => {
        ['sword', 'axe'].forEach(tool => {
            event.modify(`l2complements:${md.material}_${tool}`, item => {
                addAttModifiers(item, [
                    { attribute: "minecraft:generic.attack_damage", amount: md.damage, id: "shh_attack_damage:mainhand", slot: "mainhand" }
                ]);
            });
        });
    });
    //#endregion

    //#region  生命套装
    pieceSlot.forEach(ps => {
        event.modify(`l2complements:totemic_gold_${ps.piece}`, item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 4, id: `shh_armor:${ps.slot}`, slot: ps.slot },
                { attribute: "minecraft:generic.max_health", amount: 10, id: `shh_health:${ps.slot}`, slot: ps.slot },
                { attribute: "l2damagetracker:damage_absorption", amount: 5, id: `shh_damage_absorption:${ps.slot}`, slot: ps.slot, condition: Platform.isLoaded('l2damagetracker') }
            ]);
        });
    });
    //#endregion

    //#region  海神套装
    pieceSlot.forEach(ps => {
        event.modify(`l2complements:poseidite_${ps.piece}`, item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 4, id: `shh_armor:${ps.slot}`, slot: ps.slot },
                { attribute: "l2damagetracker:bow_strength", amount: 0.05, id: `shh_bow_strength:${ps.slot}`, slot: ps.slot, condition: Platform.isLoaded('l2damagetracker') },
                { attribute: "l2damagetracker:lightning_damage", amount: 0.08, id: `shh_l2_lightning_damage:${ps.slot}`, slot: ps.slot, condition: Platform.isLoaded("l2damagetracker") }

            ]);
        });
    });
    //#endregion

    //#region  潜影套装
    pieceSlot.forEach(ps => {
        event.modify(`l2complements:shulkerate_${ps.piece}`, item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 4, id: `shh_armor:${ps.slot}`, slot: ps.slot },
                { attribute: "minecraft:generic.armor_toughness", amount: 3, id: `shh_armor_toughness:${ps.slot}`, slot: ps.slot },
                { attribute: "l2damagetracker:bow_strength", amount: 0.15, id: `shh_bow_strength_bonus:${ps.slot}`, slot: ps.slot, condition: Platform.isLoaded('l2damagetracker') },
                { attribute: "l2damagetracker:damage_reduction", amount: -0.08, id: `shh_damage_reduction:${ps.slot}`, slot: ps.slot, condition: Platform.isLoaded('l2damagetracker') }

            ]);
        });
    });
    //#endregion

    //#region  幽匿套装
    pieceSlot.forEach(ps => {
        event.modify(`l2complements:sculkium_${ps.piece}`, item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 5, id: `shh_armor:${ps.slot}`, slot: ps.slot },
                { attribute: "irons_spellbooks:eldritch_spell_power", amount: 0.08, id: `shh_spell_power:${ps.slot}`, slot: ps.slot, condition: Platform.isLoaded('irons_spellbooks') }
            ]);
        });
    });
    //#endregion

    //#region  永恒套装
    pieceSlot.forEach(ps => {
        event.modify(`l2complements:eternium_${ps.piece}`, item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 5, id: `shh_armor:${ps.slot}`, slot: ps.slot },
                { attribute: "minecraft:generic.movement_speed", operation: 1, amount: 0.5, id: `shh_speed:${ps.slot}`, slot: ps.slot },
                { attribute: "artifacts:generic.sprinting_step_height", amount: 0.5, id: `shh_sprinting_step_height:${ps.slot}`, slot: ps.slot, condition: Platform.isLoaded('artifacts') }
            ]);
        });
    });
    //#endregion

    //#region  其它
    // 结晶渗透法杖
    event.modify("l2complements:diffusion_wand", item => {
        item.setUnbreakable();
    });
    //#endregion
});
