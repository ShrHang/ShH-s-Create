// requires: cataclysm
ItemEvents.modification(event => {
    //#region  盾牌
    // 黑钢圆盾
    event.modify("cataclysm:black_steel_targe", item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.armor", amount: 9, id: "shh_armor:any" },
            { attribute: "minecraft:generic.knockback_resistance", amount: 0.16, id: "shh_nockback_resistance:any" }
        ]);
    });
    // 蔚蓝海石盾
    event.modify("cataclysm:azure_sea_shield", item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.armor", amount: 6, id: "shh_armor:any" },
            { attribute: "minecraft:generic.knockback_resistance", amount: 0.08, id: "shh_nockback_resistance:any" },
            { attribute: "irons_spellbooks:lightning_spell_power", amount: 0.05, id: "shh_lightning_spell_power:any", condition: Platform.isLoaded("irons_spellbooks") },
            { attribute: "irons_spellbooks:lightning_magic_resist", amount: 0.15, id: "shh_lightning_magic_resist:any", condition: Platform.isLoaded("irons_spellbooks") },
        ])
    });
    // 火焰壁垒
    event.modify("cataclysm:bulwark_of_the_flame", item => {
        addAttModifiers(item, [
            { attribute: "l2damagetracker:fire_damage", amount: 0.2, id: "shh_fire_damage:any", condition: Platform.isLoaded("l2damagetracker") },
            { attribute: "minecraft:generic.armor", amount: 12, id: "shh_armor:any" },
            { attribute: "minecraft:generic.knockback_resistance", amount: 0.2, id: "shh_nockback_resistance:any" },
            { attribute: "irons_spellbooks:fire_spell_power", amount: 0.05, id: "shh_fire_spell_power:any", condition: Platform.isLoaded("irons_spellbooks") },
            { attribute: "irons_spellbooks:fire_magic_resist", amount: 0.15, id: "shh_fire_magic_resist:any", condition: Platform.isLoaded("irons_spellbooks") },
        ])
    });
    //#endregion

    //#region  花岩肩甲
    event.modify("cataclysm:bloom_stone_pauldrons", item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.armor", amount: 10, id: "shh_armor:chest", slot: "chest" },
            { attribute: "minecraft:generic.knockback_resistance", amount: 0.05, id: "shh_nockback_resistance:chest", slot: "chest" },
            { attribute: "irons_spellbooks:nature_spell_power", amount: 0.08, id: "shh_nature_spell_power:chest", slot: "chest", condition: Platform.isLoaded("irons_spellbooks") },
            { attribute: "irons_spellbooks:spell_resist", amount: 0.1, id: "shh_spell_resist:chest", slot: "chest", condition: Platform.isLoaded("irons_spellbooks") },
            { attribute: "irons_spellbooks:spell_power", amount: 0.07, id: "shh_spell_power:chest", slot: "chest", condition: Platform.isLoaded("irons_spellbooks") },
            { attribute: "irons_spellbooks:mana_regen", amount: 0.15, id: "shh_mana_regen:chest", slot: "chest", condition: Platform.isLoaded("irons_spellbooks") },
            { attribute: "irons_spellbooks:max_mana", amount: 300, id: "shh_max_mana:chest", slot: "chest", condition: Platform.isLoaded("irons_spellbooks") },
            { attribute: "l2damagetracker:regen", amount: 0.35, id: "shh_l2_regen:chest", slot: "chest", condition: Platform.isLoaded("l2damagetracker") }
        ])
    });
    //#endregion

    //#region  恶兽头盔
    event.modify("cataclysm:monstrous_helm", item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.armor", amount: 9, id: "shh_armor:head", slot: "head" },
            { attribute: "minecraft:generic.max_health", amount: 20, id: "shh_max_health:head", slot: "head" },
            { attribute: "minecraft:generic.max_health", operation: 1, amount: 0.2, id: "shh_max_health_1:head", slot: "head" },
            { attribute: "l2damagetracker:damage_reduction", amount: -0.2, id: "shh_l2_damage_reduction:head", slot: "head", condition: Platform.isLoaded("l2damagetracker") }
        ])
    });
    //#endregion

    //#region  骸龙盔甲
    // 骸龙头盔
    event.modify("cataclysm:bone_reptile_helmet", item => {
        addAttModifiers(item, [
            { attribute: "irons_spellbooks:spell_power", amount: 0.05, id: "shh_spell_power:head", slot: "head", condition: Platform.isLoaded("irons_spellbooks") },
            { attribute: "minecraft:generic.armor", amount: 8, id: "shh_armor:head", slot: "head" },
            { attribute: "irons_spellbooks:holy_spell_power", amount: 0.05, id: "shh_holy_spell_power:head", slot: "head", condition: Platform.isLoaded("irons_spellbooks") },
            { attribute: "minecraft:generic.armor_toughness", amount: 2, id: "shh_armor_toughness:head", slot: "head" },
            { attribute: "minecraft:generic.knockback_resistance", amount: 0.05, id: "shh_knockback_resistance:head", slot: "head" },
            { attribute: "l2damagetracker:damage_absorption", amount: 4, id: "shh_l2_damage_absorption:head", slot: "head", condition: Platform.isLoaded("l2damagetracker") }
        ]);
    });
    // 骸龙胸甲
    event.modify("cataclysm:bone_reptile_chestplate", item => {
        addAttModifiers(item, [
            { attribute: "irons_spellbooks:spell_power", amount: 0.05, id: "shh_spell_power:chest", slot: "chest", condition: Platform.isLoaded("irons_spellbooks") },
            { attribute: "minecraft:generic.armor", amount: 8, id: "shh_armor:chest", slot: "chest" },
            { attribute: "irons_spellbooks:holy_spell_power", amount: 0.05, id: "shh_holy_spell_power:chest", slot: "chest", condition: Platform.isLoaded("irons_spellbooks") },
            { attribute: "minecraft:generic.armor_toughness", amount: 2, id: "shh_armor_toughness:chest", slot: "chest" },
            { attribute: "minecraft:generic.knockback_resistance", amount: 0.05, id: "shh_knockback_resistance:chest", slot: "chest" },
            { attribute: "l2damagetracker:damage_absorption", amount: 8, id: "shh_l2_damage_absorption:chest", slot: "chest", condition: Platform.isLoaded("l2damagetracker") }
        ]);
    });
    //#endregion
    
    //#region  腾炎盔甲
    pieceSlot.forEach(ps => {
        let itemId = (ps.piece === "chestplate")
            ? ["cataclysm:ignitium_chestplate", "cataclysm:ignitium_elytra_chestplate"]
            : `cataclysm:ignitium_${ps.piece}`;
        event.modify(itemId, item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 6, id: `shh_armor:${ps.slot}`, slot: ps.slot },
                { attribute: "irons_spellbooks:fire_spell_power", amount: 0.05, id: `shh_fire_spell_power:${ps.slot}`, slot: ps.slot, condition: Platform.isLoaded("irons_spellbooks") },
                { attribute: "irons_spellbooks:fire_magic_resist", amount: 0.15, id: `shh_fire_magic_resist:${ps.slot}`, slot: ps.slot, condition: Platform.isLoaded("irons_spellbooks") },
                { attribute: "l2damagetracker:damage_reduction", amount: -0.08, id: `shh_l2_damage_reduction:${ps.slot}`, slot: ps.slot, condition: Platform.isLoaded("l2damagetracker") }
            ]);
            item.remove("minecraft:unbreakable");
        });
    });
    //#endregion

    //#region  咒魂盔甲
    pieceSlot.forEach(ps => {
        event.modify(`cataclysm:cursium_${ps.piece}`, item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 5, id: `shh_armor:${ps.slot}`, slot: ps.slot },
                { attribute: "irons_spellbooks:ice_spell_power", amount: 0.05, id: `shh_curse_spell_power:${ps.slot}`, slot: ps.slot, condition: Platform.isLoaded("irons_spellbooks") },
                { attribute: "minecraft:generic.attack_speed", operation: 1, amount: 0.05, id: `shh_curse_magic_resist:${ps.slot}`, slot: ps.slot }
            ]);
            item.remove("minecraft:unbreakable");
        });
    });
    //#endregion

    //#region  黑钢武器
    // 黑钢斧
    event.modify("cataclysm:black_steel_axe", item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.attack_damage", amount: 6, id: "shh_attack_damage:mainhand", slot: "mainhand" }
        ]);
    });
    // 黑钢剑
    event.modify("cataclysm:black_steel_sword", item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.attack_damage", amount: 6, id: "shh_attack_damage:mainhand", slot: "mainhand" }
        ]);
    });
    //#endregion

    //#region  渊灵武器
    // 仪式匕首
    event.modify("cataclysm:athame", item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.attack_damage", amount: 5, id: "shh_attack_damage:mainhand", slot: "mainhand" },
            { attribute: "minecraft:generic.movement_speed", amount: 0.1, id: "shh_attack_speed:any" }
        ]);
    });
    // 珊瑚长矛
    event.modify("cataclysm:coral_spear", item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.attack_damage", amount: 6, id: "shh_attack_damage:mainhand", slot: "mainhand" },
            { attribute: "minecraft:player.entity_interaction_range", amount: 0.5, id: "shh_entity_interaction_range:mainhand", slot: "mainhand" }
        ]);
    });
    // 珊瑚钺
    event.modify("cataclysm:coral_bardiche", item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.attack_damage", amount: 6, id: "shh_attack_damage:mainhand", slot: "mainhand" }
        ]);
    });
    // 潮汐利爪
    event.modify("cataclysm:tidal_claws", item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.attack_damage", amount: 7, id: "shh_attack_damage:mainhand", slot: "mainhand" },
            { attribute: "neoforge:swim_speed", amount: 0.1, id: "shh_swim_speed:any" },
            { attribute: "cataclysm_spellbooks:abyssal_spell_power", amount: 0.1, id: "shh_abyssal_spell_power:any", condition: Platform.isLoaded("cataclysm_spellbooks") }
        ]);
    });
    //#endregion

    //#region  沙漠武器
    // 镰形剑
    event.modify("cataclysm:khopesh", item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.attack_damage", amount: 6, id: "shh_attack_damage:mainhand", slot: "mainhand" }
        ]);
    });
    // 远古之矛
    event.modify("cataclysm:ancient_spear", item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.attack_damage", amount: 6, id: "shh_attack_damage:mainhand", slot: "mainhand" },
            { attribute: "minecraft:generic.attack_speed", amount: 0.4, id: "shh_attack_speed:mainhand", slot: "mainhand" }
        ]);
    });
    //#endregion

    //#region  先驱武器
    // 绞肉锯
    event.modify("cataclysm:meat_shredder", item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.attack_damage", amount: 7, id: "shh_attack_damage:mainhand", slot: "mainhand" },
            { attribute: "l2damagetracker:crit_rate", amount: 0.1, id: "shh_l2_crit_rate:any", condition: Platform.isLoaded("l2damagetracker") },
            { attribute: "l2damagetracker:crit_damage", amount: 0.15, id: "shh_l2_crit_damage:any", condition: Platform.isLoaded("l2damagetracker") }
        ]);
    });
    //#endregion

    //#region  恶兽武器
    // 炼狱锻锤
    event.modify("cataclysm:infernal_forge", item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.attack_damage", amount: 7, id: "shh_attack_damage:mainhand", slot: "mainhand" },
            { attribute: "minecraft:generic.knockback_resistance", amount: 0.15, id: "shh_nockback_resistance:mainhand", slot: "mainhand" }
        ]);
    });
    // 虚空锻锤
    event.modify("cataclysm:void_forge", item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.attack_damage", amount: 8, id: "shh_attack_damage:mainhand", slot: "mainhand" },
            { attribute: "minecraft:generic.knockback_resistance", amount: 0.15, id: "shh_nockback_resistance:mainhand", slot: "mainhand" },
            { attribute: "irons_spellbooks:ender_spell_power", amount: 0.05, id: "shh_ender_spell_power:any", condition: Platform.isLoaded("irons_spellbooks") }
        ]);
    });
    // 掣雷巨锤
    event.modify("cataclysm:brontes", item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.attack_damage", amount: 8, id: "shh_attack_damage:mainhand", slot: "mainhand" },
            { attribute: "irons_spellbooks:lightning_spell_power", operation: 1, amount: 0.1, id: "shh_lightning_spell_power:any", condition: Platform.isLoaded("irons_spellbooks") },
            { attribute: "l2damagetracker:lightning_damage", amount: 0.2, id: "shh_l2_lightning_damage:any", condition: Platform.isLoaded("l2damagetracker") }
        ]);
    });
    //#endregion

    //#region  护手
    // 守卫者护手
    event.modify("cataclysm:gauntlet_of_guard", item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.attack_damage", amount: 7, id: "shh_attack_damage:mainhand", slot: "mainhand" },
            { attribute: "minecraft:generic.attack_speed", amount: 0.6, id: "shh_attack_speed:mainhand", slot: "mainhand" },
            { attribute: "minecraft:generic.armor", amount: 7, id: "shh_armor:any" },
            { attribute: "irons_spellbooks:ender_spell_power", amount: 0.05, id: "shh_ender_spell_power:any", condition: Platform.isLoaded("irons_spellbooks") }
        ]);
    });
    // 堡垒护手
    event.modify("cataclysm:gauntlet_of_bulwark", item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.attack_damage", amount: 8, id: "shh_attack_damage:mainhand", slot: "mainhand" },
            { attribute: "minecraft:generic.attack_speed", amount: 0.6, id: "shh_attack_speed:mainhand", slot: "mainhand" },
            { attribute: "minecraft:generic.armor", amount: 7, id: "shh_armor:any" },
            { attribute: "irons_spellbooks:ender_spell_power", amount: 0.05, id: "shh_ender_spell_power:any", condition: Platform.isLoaded("irons_spellbooks") },
            { attribute: "irons_spellbooks:fire_spell_power", amount: 0.05, id: "shh_fire_spell_power:any", condition: Platform.isLoaded("irons_spellbooks") }
        ]);
    });
    // 漩涡护手
    event.modify("cataclysm:gauntlet_of_maelstrom", item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.attack_damage", amount: 8, id: "shh_attack_damage:mainhand", slot: "mainhand" },
            { attribute: "minecraft:generic.attack_speed", amount: 0.6, id: "shh_attack_speed:mainhand", slot: "mainhand" },
            { attribute: "minecraft:generic.armor", amount: 7, id: "shh_armor:any" },
            { attribute: "irons_spellbooks:ender_spell_power", amount: 0.1, id: "shh_ender_spell_power:any", condition: Platform.isLoaded("irons_spellbooks") }
        ]);
    });
    //#endregion

    //#region  咒魂武器
    // 断魂战戟
    event.modify("cataclysm:soul_render", item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.attack_damage", amount: 7, id: "shh_attack_damage:mainhand", slot: "mainhand" },
            { attribute: "irons_spellbooks:ice_spell_power", operation: 1, amount: 0.1, id: "shh_ice_spell_power:mainhand", slot: "mainhand", condition: Platform.isLoaded("irons_spellbooks") }
        ]);
    });
    // 歼灭战锤
    event.modify("cataclysm:the_annihilator", item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.attack_damage", amount: 6.5, id: "shh_attack_damage:mainhand", slot: "mainhand" },
        ]);
    });
    //#endregion

    //#region  腾炎武器
    // 献祭者
    event.modify("cataclysm:the_immolator", item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.attack_damage", amount: 7.5, id: "shh_attack_damage:mainhand", slot: "mainhand" },
            { attribute: "l2damagetracker:explosion_damage", amount: 10, id: "shh_l2_explosion_damage:any", condition: Platform.isLoaded("l2damagetracker") }
        ]);
    });
    // 炎葬
    event.modify("cataclysm:the_incinerator", item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.attack_damage", amount: 8, id: "shh_attack_damage:mainhand", slot: "mainhand" },
            { attribute: "irons_spellbooks:fire_spell_power", operation: 1, amount: 0.05, id: "shh_fire_spell_power:any", condition: Platform.isLoaded("irons_spellbooks") },
            { attribute: "l2damagetracker:explosion_damage", amount: 10, id: "shh_l2_explosion_damage:mainhand", slot: "mainhand", condition: Platform.isLoaded("l2damagetracker") }
        ]);
        item.setMaxDamage(3072);
        item.setDamage(0);
    });
    //#endregion

    //#region  风暴武器
    // 神怒长槊
    event.modify("cataclysm:astrape", item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.attack_damage", amount: 7.5, id: "shh_attack_damage:mainhand", slot: "mainhand" },
            { attribute: "irons_spellbooks:lightning_spell_power", operation: 1, amount: 0.1, id: "shh_lightning_spell_power:any", condition: Platform.isLoaded("irons_spellbooks") },
            { attribute: "l2damagetracker:lightning_damage", amount: 0.2, id: "shh_l2_lightning_damage:any", condition: Platform.isLoaded("l2damagetracker") }
        ]);
    });
    // 霆浪锚戟
    event.modify("cataclysm:ceraunus", item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.attack_damage", amount: 8, id: "shh_attack_damage:mainhand", slot: "mainhand" },
            { attribute: "minecraft:generic.attack_speed", amount: 0.4, id: "shh_attack_speed:mainhand", slot: "mainhand" },
            { attribute: "irons_spellbooks:lightning_spell_power", operation: 1, amount: 0.05, id: "shh_lightning_spell_power:mainhand", slot: "mainhand", condition: Platform.isLoaded("irons_spellbooks") },
            { attribute: "l2damagetracker:lightning_damage", amount: 0.2, id: "shh_l2_lightning_damage:mainhand", slot: "mainhand", condition: Platform.isLoaded("l2damagetracker") }
        ]);
    });
    //#endregion
})
