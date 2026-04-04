ItemEvents.modification(event => {
    // 盾牌
    event.modify("minecraft:shield", item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.armor", amount: 6, id: "shh_armor:any" },
            { attribute: "minecraft:generic.knockback_resistance", amount: 0.1, id: "shh_nockback_resistance:any" }
        ]);
    });

    // 剑和斧
    event.modify([
        "minecraft:wooden_sword",
        "minecraft:stone_sword",
        "minecraft:golden_sword",
        "minecraft:iron_sword",
        "minecraft:diamond_sword",
        "minecraft:netherite_sword",
        "minecraft:wooden_axe",
        "minecraft:stone_axe",
        "minecraft:golden_axe",
        "minecraft:iron_axe",
        "minecraft:diamond_axe",
        "minecraft:netherite_axe"
    ], item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.attack_damage", amount: 6, id: "shh_attack_damage:mainhand", slot: "mainhand" }
        ]);
    });

    //#region 三叉戟&重锤
    // 三叉戟
    event.modify("minecraft:trident", item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.attack_damage", amount: 6, id: "shh_attack_damage:mainhand", slot: "mainhand" },
            { attribute: "neoforge:swim_speed", amount: 0.15, id: "shh_swim_speed:any" }
        ]);
    });
    // 重锤
    event.modify("minecraft:mace", item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.attack_damage", amount: 7, id: "shh_attack_damage:mainhand", slot: "mainhand" },
            { attribute: "minecraft:generic.knockback_resistance", amount: 0.15, id: "shh_knockback_resistance:any" }
        ]);
    });
    //#endregion

    // 基础护甲套装（皮革/锁链/铁/金）
    [
        { material: "leather", armor: 4 },
        { material: "chainmail", armor: 4 },
        { material: "iron", armor: 4},
        { material: "golden", armor: 4 }
    ].forEach(ma => {
        pieceSlot.forEach((ps) => {
            event.modify(`minecraft:${ma.material}_${ps.piece}`, item => {
                addAttModifiers(item, [
                    { attribute: "minecraft:generic.armor", amount: ma.armor, id: `shh_armor:${ps.slot}`, slot: ps.slot },
                    { attribute: "minecraft:generic.armor_toughness", amount: 2, id: `shh_armor_toughness:${ps.slot}`, slot: ps.slot, condition: ma.material === "iron" },
                ]);
            });
        });
    });

    // 钻石套装
    pieceSlot.forEach((ps) => {
        event.modify(`minecraft:diamond_${ps.piece}`, item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 5, id: `shh_armor:${ps.slot}`, slot: ps.slot },
                { attribute: "minecraft:generic.armor_toughness", amount: 1, id: `shh_armor_toughness:${ps.slot}`, slot: ps.slot },
                { attribute: "l2damagetracker:damage_reduction", amount: -0.03, id: `shh_l2_damage_reduction:${ps.slot}`, slot: ps.slot, condition: Platform.isLoaded("l2damagetracker") }
            ])
        });
    });

    // 下界合金套装
    pieceSlot.forEach((ps) => {
        event.modify(`minecraft:netherite_${ps.piece}`, item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 5, id: `shh_armor:${ps.slot}`, slot: ps.slot },
                { attribute: "minecraft:generic.armor_toughness", amount: 1, id: `shh_armor_toughness:${ps.slot}`, slot: ps.slot },
                { attribute: "l2damagetracker:damage_reduction", amount: -0.05, id: `shh_l2_damage_reduction:${ps.slot}`, slot: ps.slot, condition: Platform.isLoaded("l2damagetracker") }
            ]);
        });
    });

    // 海龟壳
    event.modify("minecraft:turtle_helmet", item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.armor", amount: 3, id: "shh_armor:head", slot: "head" },
            { attribute: "neoforge:swim_speed", amount: 0.15, id: "shh_swim_speed:head", slot: "head" }
        ]);
    });
})
