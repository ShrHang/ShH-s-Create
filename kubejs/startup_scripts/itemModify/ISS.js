// requires: irons_spellbooks
ItemEvents.modification(event => {
    //#region 法杖
    event.modify([
        "irons_spellbooks:blood_staff",
        "irons_spellbooks:graybeard_staff",
        "irons_spellbooks:ice_staff",
        "irons_spellbooks:artificer_cane",
        "irons_spellbooks:lightning_rod",
        "irons_spellbooks:pyrium_staff"
    ], item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.attack_damage", amount: 6, id: "shh_attack_damage:mainhand", slot: "mainhand" }
        ]);
    });
    //#endregion

    //#region 近战武器
    // 狩魔人之剑
    event.modify("irons_spellbooks:magehunter", item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.attack_damage", amount: 6, id: "shh_attack_damage:mainhand", slot: "mainhand" }
        ]);
    });
    // 破法者
    event.modify("irons_spellbooks:spellbreaker", item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.attack_damage", amount: 7, id: "shh_attack_damage:mainhand", slot: "mainhand" }
        ]);
    });
    // 紫水晶刺剑
    event.modify("irons_spellbooks:amethyst_rapier", item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.attack_damage", amount: 6, id: "shh_attack_damage:mainhand", slot: "mainhand" },
            { attribute: "irons_spellbooks:spell_power", operation: 1, amount: 0.05, id: "shh_spell_power:mainhand", slot: "mainhand" }
        ])
    });
    // 破败焰型剑
    event.modify("irons_spellbooks:keeper_flamberge", item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.attack_damage", amount: 6, id: "shh_attack_damage:mainhand", slot: "mainhand" }
        ]);
    });
    // 军团焰型剑
    event.modify("irons_spellbooks:legionnaire_flamberge", item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.attack_damage", amount: 8, id: "shh_attack_damage:mainhand", slot: "mainhand" }
        ]);
    });
    // 破败战镰
    event.modify("irons_spellbooks:decrepit_scythe", item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.attack_damage", amount: 6, id: "shh_attack_damage:mainhand", slot: "mainhand" },
            { attribute: "minecraft:player.entity_interaction_range", amount: 2, id: "shh_entity_interaction:mainhand", slot: "mainhand" }
        ]);
    });
    // 地狱战镰
    event.modify("irons_spellbooks:hellrazor", item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.attack_damage", amount: 8, id: "shh_attack_damage:mainhand", slot: "mainhand" },
            { attribute: "minecraft:player.entity_interaction_range", amount: 2, id: "shh_entity_interaction:mainhand", slot: "mainhand" }
        ]);
    });
    // 北冰之刃
    event.modify("irons_spellbooks:boreal_blade", item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.attack_damage", amount: 6, id: "shh_attack_damage:mainhand", slot: "mainhand" },
            { attribute: "minecraft:generic.attack_speed", amount: 0.4, id: "shh_attack_speed:mainhand", slot: "mainhand" },
            { attribute: "minecraft:player.entity_interaction_range", amount: 1, id: "shh_entity_interaction:mainhand", slot: "mainhand" }
        ]);
    });
    //#endregion

    //#region 基础法师套装 (3护甲 50魔力)
    ["wandering_magician", "pumpkin"].forEach(material => {
        pieceSlot.forEach(ps => {
            event.modify(`irons_spellbooks:${material}_${ps.piece}`, item => {
                addAttModifiers(item, [
                    { attribute: "minecraft:generic.armor", amount: 3, id: `shh_armor:${ps.slot}`, slot: ps.slot },
                    { attribute: "irons_spellbooks:max_mana", amount: 50, id: `shh_max_mana:${ps.slot}`, slot: ps.slot }
                ]);
            });
        });
    });
    //#endregion

    //#region 法师套装
    [
        "wizard", "archevoker", "electromancer", "pyromancer",
        "plagued", "priest", "shadowwalker", "cryomancer", "cultist"
    ].forEach(material => {
        pieceSlot.forEach(ps => {
            let itemIds = (material === "wizard" && ps.piece === "helmet") 
                ? ["irons_spellbooks:wizard_helmet", "irons_spellbooks:wizard_hat"] 
                : `irons_spellbooks:${material}_${ps.piece}`;
            
            event.modify(itemIds, item => {
                addAttModifiers(item, [
                    { attribute: "minecraft:generic.armor", amount: 3, id: `shh_armor:${ps.slot}`, slot: ps.slot },
                    { attribute: "irons_spellbooks:max_mana", amount: 75, id: `shh_max_mana:${ps.slot}`, slot: ps.slot }
                ]);
            });
        });
    });
    //#endregion

    //#region 下界合金战斗法师套装
    pieceSlot.forEach(ps => {
        event.modify(`irons_spellbooks:netherite_mage_${ps.piece}`, item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 4, id: `shh_armor:${ps.slot}`, slot: ps.slot },
                { attribute: "irons_spellbooks:max_mana", amount: 75, id: `shh_max_mana:${ps.slot}`, slot: ps.slot }
            ]);
        });
    });
    //#endregion

    //#region 其它装备
    // 暗淡皇冠
    event.modify("irons_spellbooks:tarnished_helmet", item => {
        addAttModifiers(item, [
            { attribute: "irons_spellbooks:max_mana", amount: 125, id: "shh_max_mana:head", slot: "head" },
            { attribute: "irons_spellbooks:spell_power", operation: 1, amount: 0.25, id: "shh_spell_power:head", slot: "head" },
            { attribute: "l2damagetracker:magic_damage", amount: 0.25, id: "shh_l2_magic_damage:head", slot: "head", condition: Platform.isLoaded("l2damagetracker") }
        ]);
    })
    // 光明行者胸甲
    event.modify("irons_spellbooks:paladin_chestplate", item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.armor", amount: 5, id: "shh_armor:chest", slot: "chest" },
            { attribute: "irons_spellbooks:max_mana", amount: 75, id: "shh_max_mana:chest", slot: "chest" },
            { attribute: "l2damagetracker:magic_damage", amount: 0.25, id: "shh_l2_magic_damage:chest", slot: "chest", condition: Platform.isLoaded("l2damagetracker") }
        ]);
    })
    // 迅捷之靴
    event.modify("irons_spellbooks:speed_boots", item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.armor", amount: 5, id: "shh_armor:feet", slot: "feet" },
            { attribute: "irons_spellbooks:max_mana", amount: 75, id: "shh_max_mana:feet", slot: "feet" }
        ]);
    })
    // 金皇冠
    event.modify("irons_spellbooks:gold_crown", item => {
        addAttModifiers(item, [
            { attribute: "irons_spellbooks:spell_power", operation: 1, amount: 0.5, id: "shh_spell_power:head", slot: "head" },
            { attribute: "l2damagetracker:magic_damage", amount: 0.25, id: "shh_l2_magic_damage:head", slot: "head", condition: Platform.isLoaded("l2damagetracker") }
        ]);
    })

    //#endregion
});
