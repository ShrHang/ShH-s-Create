// 盾牌
ItemEvents.modification(event => {
    // 黑钢圆盾
    event.modify('cataclysm:black_steel_targe', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 9,
                "id": "shh_armor:any"
            },
            "any"
        )
        .withModifierAdded(
            "minecraft:generic.knockback_resistance",
            {
                "operation": 0,
                "amount": 0.16,
                "id": "shh_nockback_resistance:any"
            },
            "any"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 蔚蓝海石盾
    event.modify('cataclysm:azure_sea_shield', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "neoforge:swim_speed",
            {
                "operation": 0,
                "amount": 0.12,
                "id": "shh_swim_speed:any"
            },
            "any"
        )
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 6,
                "id": "shh_armor:any"
            },
            "any"
        )
        .withModifierAdded(
            "minecraft:generic.knockback_resistance",
            {
                "operation": 0,
                "amount": 0.08,
                "id": "shh_nockback_resistance:any"
            },
            "any"
        )
        .withModifierAdded(
            "irons_spellbooks:lightning_spell_power",
            {
                "operation": 0,
                "amount": 0.05,
                "id": "shh_lightning_spell_power:any"
            },
            "any"
        )
        .withModifierAdded(
            "irons_spellbooks:lightning_magic_resist",
            {
                "operation": 0,
                "amount": 0.15,
                "id": "shh_lightning_magic_resist:any"
            },
            "any"
        )
        .withModifierAdded(
            "l2damagetracker:lightning_damage",
            {
                "operation": 0,
                "amount": 0.2,
                "id": "shh_l2_lightning_damage:any"
            },
            "any"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 火焰壁垒
    event.modify('cataclysm:bulwark_of_the_flame', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "l2damagetracker:fire_damage",
            {
                "operation": 0,
                "amount": 0.2,
                "id": "shh_fire_damage:any"
            },
            "any"
        )
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 12,
                "id": "shh_armor:any"
            },
            "any"
        )
        .withModifierAdded(
            "minecraft:generic.knockback_resistance",
            {
                "operation": 0,
                "amount": 0.2,
                "id": "shh_nockback_resistance:any"
            },
            "any"
        )
        .withModifierAdded(
            "irons_spellbooks:fire_spell_power",
            {
                "operation": 0,
                "amount": 0.15,
                "id": "shh_fire_spell_power:any"
            },
            "any"
        )
        .withModifierAdded(
            "irons_spellbooks:fire_magic_resist",
            {
                "operation": 0,
                "amount": 0.25,
                "id": "shh_fire_magic_resist:any"
            },
            "any"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
});


// 花岩肩甲
ItemEvents.modification(event => {
    // 花岩肩甲
    event.modify('cataclysm:bloom_stone_pauldrons', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 10,
                "id": "shh_armor:chest"
            },
            "chest"
        )
        .withModifierAdded(
            "minecraft:generic.knockback_resistance",
            {
                "operation": 0,
                "amount": 0.05,
                "id": "shh_nockback_resistance:chest"
            },
            "chest"
        )
        .withModifierAdded(
            "irons_spellbooks:nature_spell_power",
            {
                "operation": 0,
                "amount": 0.08,
                "id": "shh_nature_spell_power:chest"
            },
            "chest"
        )
        .withModifierAdded(
            "irons_spellbooks:spell_resist",
            {
                "operation": 0,
                "amount": 0.1,
                "id": "shh_spell_resist:chest"
            },
            "chest"
        )
        .withModifierAdded(
            "irons_spellbooks:spell_power",
            {
                "operation": 0,
                "amount": 0.07,
                "id": "shh_spell_power:chest"
            },
            "chest"
        )
        .withModifierAdded(
            "irons_spellbooks:mana_regen",
            {
                "operation": 0,
                "amount": 0.15,
                "id": "shh_mana_regen:chest"
            },
            "chest"
        )
        .withModifierAdded(
            "irons_spellbooks:max_mana",
            {
                "operation": 0,
                "amount": 300,
                "id": "shh_max_mana:chest"
            },
            "chest"
        )
        .withModifierAdded(
            "l2damagetracker:regen",
            {
                "operation": 0,
                "amount": 0.35,
                "id": "shh_l2_regen:chest"
            },
            "chest"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
})
// 恶兽头盔
ItemEvents.modification(event => {
    // 恶兽头盔
    event.modify('cataclysm:monstrous_helm', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 9,
                "id": "shh_armor:head"
            },
            "head"
        )
        .withModifierAdded(
            "minecraft:generic.max_health",
            {
                "operation": 0,
                "amount": 20,
                "id": "shh_max_health:head"
            },
            "head"
        )
        .withModifierAdded(
            "minecraft:generic.max_health",
            {
                "operation": 1,
                "amount": 0.2,
                "id": "shh_max_health_1:head"
            },
            "head"
        )
        .withModifierAdded(
            "l2damagetracker:damage_reduction",
            {
                "operation": 0,
                "amount": -0.2,
                "id": "shh_l2_damage_reduction:head"
            },
            "head"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
})
// 骨蜥盔甲
ItemEvents.modification(event => {
    // 骨蜥头盔
    event.modify('cataclysm:bone_reptile_helmet', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "irons_spellbooks:spell_power",
            {
                "operation": 0,
                "amount": 0.05,
                "id": "shh_spell_power:head"
            },
            "head"
        )
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 8,
                "id": "shh_armor:head"
            },
            "head"
        )
        .withModifierAdded(
            "irons_spellbooks:holy_spell_power",
            {
                "operation": 0,
                "amount": 0.05,
                "id": "shh_holy_spell_power:head"
            },
            "head"
        )
        .withModifierAdded(
            "minecraft:generic.armor_toughness",
            {
                "operation": 0,
                "amount": 1,
                "id": "shh_armor_toughness:head"
            },
            "head"
        )
        .withModifierAdded(
            "minecraft:generic.knockback_resistance",
            {
                "operation": 0,
                "amount": 0.05,
                "id": "shh_knockback_resistance:head"
            },
            "head"
        )
        .withModifierAdded(
            "l2damagetracker:damage_absorption",
            {
                "operation": 0,
                "amount": 4,
                "id": "shh_l2_damage_absorption:head"
            },
            "head"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 骨蜥胸甲
    event.modify('cataclysm:bone_reptile_chestplate', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "irons_spellbooks:spell_power",
            {
                "operation": 0,
                "amount": 0.05,
                "id": "shh_spell_power:chest"
            },
            "chest"
        )
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 8,
                "id": "shh_armor:chest"
            },
            "chest"
        )
        .withModifierAdded(
            "irons_spellbooks:holy_spell_power",
            {
                "operation": 0,
                "amount": 0.05,
                "id": "shh_holy_spell_power:chest"
            },
            "chest"
        )
        .withModifierAdded(
            "minecraft:generic.armor_toughness",
            {
                "operation": 0,
                "amount": 1,
                "id": "shh_armor_toughness:chest"
            },
            "chest"
        )
        .withModifierAdded(
            "minecraft:generic.knockback_resistance",
            {
                "operation": 0,
                "amount": 0.05,
                "id": "shh_knockback_resistance:chest"
            },
            "chest"
        )
        .withModifierAdded(
            "l2damagetracker:damage_absorption",
            {
                "operation": 0,
                "amount": 8,
                "id": "shh_l2_damage_absorption:chest"
            },
            "chest"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
})
// 腾炎盔甲
ItemEvents.modification(event => {
    //腾炎头盔
    event.modify('cataclysm:ignitium_helmet', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 6,
                "id": "shh_armor:head"
            },
            "head"
        )
        .withModifierAdded(
            "irons_spellbooks:fire_spell_power",
            {
                "operation": 0,
                "amount": 0.05,
                "id": "shh_fire_spell_power:head"
            },
            "head"
        )
        .withModifierAdded(
            "irons_spellbooks:fire_magic_resist",
            {
                "operation": 0,
                "amount": 0.15,
                "id": "shh_fire_magic_resist:head"
            },
            "head"
        )
        .withModifierAdded(
            "l2damagetracker:damage_reduction",
            {
                "operation": 0,
                "amount": -0.08,
                "id": "shh_l2_damage_reduction:head"
            },
            "head"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    //腾炎胸甲
    event.modify(['cataclysm:ignitium_chestplate','cataclysm:ignitium_elytra_chestplate'], item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 6,
                "id": "shh_armor:chest"
            },
            "chest"
        )
        .withModifierAdded(
            "irons_spellbooks:fire_spell_power",
            {
                "operation": 0,
                "amount": 0.05,
                "id": "shh_fire_spell_power:chest"
            },
            "chest"
        )
        .withModifierAdded(
            "irons_spellbooks:fire_magic_resist",
            {
                "operation": 0,
                "amount": 0.15,
                "id": "shh_fire_magic_resist:chest"
            },
            "chest"
        )
        .withModifierAdded(
            "l2damagetracker:damage_reduction",
            {
                "operation": 0,
                "amount": -0.08,
                "id": "shh_l2_damage_reduction:chest"
            },
            "chest"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    //腾炎护腿
    event.modify('cataclysm:ignitium_leggings', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 6,
                "id": "shh_armor:legs"
            },
            "legs"
        )
        .withModifierAdded(
            "irons_spellbooks:fire_spell_power",
            {
                "operation": 0,
                "amount": 0.05,
                "id": "shh_fire_spell_power:legs"
            },
            "legs"
        )
        .withModifierAdded(
            "irons_spellbooks:fire_magic_resist",
            {
                "operation": 0,
                "amount": 0.15,
                "id": "shh_fire_magic_resist:legs"
            },
            "legs"
        )
        .withModifierAdded(
            "l2damagetracker:damage_reduction",
            {
                "operation": 0,
                "amount": -0.08,
                "id": "shh_l2_damage_reduction:legs"
            },
            "legs"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    //腾炎靴子
    event.modify('cataclysm:ignitium_boots', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 6,
                "id": "shh_armor:feet"
            },
            "feet"
        )
        .withModifierAdded(
            "irons_spellbooks:fire_spell_power",
            {
                "operation": 0,
                "amount": 0.05,
                "id": "shh_fire_spell_power:feet"
            },
            "feet"
        )
        .withModifierAdded(
            "irons_spellbooks:fire_magic_resist",
            {
                "operation": 0,
                "amount": 0.15,
                "id": "shh_fire_magic_resist:feet"
            },
            "feet"
        )
        .withModifierAdded(
            "l2damagetracker:damage_reduction",
            {
                "operation": 0,
                "amount": -0.08,
                "id": "shh_l2_damage_reduction:feet"
            },
            "feet"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
})
// 咒魂盔甲
ItemEvents.modification(event => {
    // 咒魂头盔
    event.modify('cataclysm:cursium_helmet', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 5,
                "id": "shh_armor:head"
            },
            "head"
        )
        .withModifierAdded(
            "irons_spellbooks:ice_spell_power",
            {
                "operation": 0,
                "amount": 0.05,
                "id": "shh_curse_spell_power:head"
            },
            "head"
        )
        .withModifierAdded(
            "minecraft:generic.attack_speed",
            {
                "operation": 1,
                "amount": 0.05,
                "id": "shh_curse_magic_resist:head"
            },
            "head"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 咒魂胸甲
    event.modify('cataclysm:cursium_chestplate', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 5,
                "id": "shh_armor:chest"
            },
            "chest"
        )
        .withModifierAdded(
            "irons_spellbooks:ice_spell_power",
            {
                "operation": 0,
                "amount": 0.05,
                "id": "shh_curse_spell_power:chest"
            },
            "chest"
        )
        .withModifierAdded(
            "minecraft:generic.attack_speed",
            {
                "operation": 1,
                "amount": 0.05,
                "id": "shh_curse_magic_resist:chest"
            },
            "chest"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 咒魂护腿
    event.modify('cataclysm:cursium_leggings', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 5,
                "id": "shh_armor:legs"
            },
            "legs"
        )
        .withModifierAdded(
            "irons_spellbooks:ice_spell_power",
            {
                "operation": 0,
                "amount": 0.05,
                "id": "shh_curse_spell_power:legs"
            },
            "legs"
        )
        .withModifierAdded(
            "minecraft:generic.attack_speed",
            {
                "operation": 1,
                "amount": 0.05,
                "id": "shh_curse_magic_resist:legs"
            },
            "legs"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 咒魂靴子
    event.modify('cataclysm:cursium_boots', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 5,
                "id": "shh_armor:feet"
            },
            "feet"
        )
        .withModifierAdded(
            "irons_spellbooks:ice_spell_power",
            {
                "operation": 0,
                "amount": 0.05,
                "id": "shh_curse_spell_power:feet"
            },
            "feet"
        )
        .withModifierAdded(
            "minecraft:generic.attack_speed",
            {
                "operation": 1,
                "amount": 0.05,
                "id": "shh_curse_magic_resist:feet"
            },
            "feet"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
})


// 黑钢武器
ItemEvents.modification(event => {
    // 黑钢斧
    event.modify('cataclysm:black_steel_axe', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.attack_damage",
            {
                "operation": 0,
                "amount": 6,
                "id": "shh_attack_damage:mainhand"
            },
            "mainhand"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 黑钢剑
    event.modify('cataclysm:black_steel_sword', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.attack_damage",
            {
                "operation": 0,
                "amount": 6,
                "id": "shh_attack_damage:mainhand"
            },
            "mainhand"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
});
// 渊灵武器
ItemEvents.modification(event => {
    // 仪式匕首
    event.modify('cataclysm:athame', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.attack_damage",
            {
                "operation": 0,
                "amount": 5,
                "id": "shh_attack_damage:mainhand"
            },
            "mainhand"
        )
        .withModifierAdded(
            "minecraft:generic.movement_speed",
            {
                "operation": 0,
                "amount": 0.1,
                "id": "shh_attack_speed:any"
            },
            "any"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 珊瑚长矛
    event.modify('cataclysm:coral_spear', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.attack_damage",
            {
                "operation": 0,
                "amount": 6,
                "id": "shh_attack_damage:mainhand"
            },
            "mainhand"
        )
        .withModifierAdded(
            "minecraft:player.entity_interaction_range",
            {
                "operation": 0,
                "amount": 0.5,
                "id": "shh_entity_interaction_range:mainhand"
            },
            "mainhand"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 珊瑚钺
    event.modify('cataclysm:coral_bardiche', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.attack_damage",
            {
                "operation": 0,
                "amount": 6,
                "id": "shh_attack_damage:mainhand"
            },
            "mainhand"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 潮汐利爪
    event.modify('cataclysm:tidal_claws', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.attack_damage",
            {
                "operation": 0,
                "amount": 7,
                "id": "shh_attack_damage:mainhand"
            },
            "mainhand"
        )
        .withModifierAdded(
            "cataclysm_spellbooks:abyssal_spell_power",
            {
                "operation": 0,
                "amount": 0.1,
                "id": "shh_abyssal_spell_power:any"
            },
            "any"
        )
        .withModifierAdded(
            "neoforge:swim_speed",
            {
                "operation": 0,
                "amount": 0.1,
                "id": "shh_swim_speed:any"
            },
            "any"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
})
// 沙漠武器
ItemEvents.modification(event => {
    // 镰形剑
    event.modify('cataclysm:khopesh', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.attack_damage",
            {
                "operation": 0,
                "amount": 6,
                "id": "shh_attack_damage:mainhand"
            },
            "mainhand"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 远古之矛
    event.modify('cataclysm:ancient_spear', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.attack_damage",
            {
                "operation": 0,
                "amount": 6,
                "id": "shh_attack_damage:mainhand"
            },
            "mainhand"
        )
        .withModifierAdded(
            "minecraft:generic.attack_speed",
            {
                "operation": 0,
                "amount": 0.4,
                "id": "shh_attack_speed:mainhand"
            },
            "mainhand"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
})
// 先驱武器
ItemEvents.modification(event => {
    // 绞肉锯
    event.modify('cataclysm:meat_shredder', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.attack_damage",
            {
                "operation": 0,
                "amount": 7,
                "id": "shh_attack_damage:mainhand"
            },
            "mainhand"
        )
        .withModifierAdded(
            "l2damagetracker:crit_rate",
            {
                "operation": 0,
                "amount": 0.1,
                "id": "shh_l2_crit_rate:any"
            },
            "any"
        )
        .withModifierAdded(
            "l2damagetracker:crit_damage",
            {
                "operation": 0,
                "amount": 0.15,
                "id": "shh_l2_crit_damage:any"
            },
            "any"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
})
// 恶兽武器
ItemEvents.modification(event => {
    // 炼狱锻锤
    event.modify('cataclysm:infernal_forge', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.attack_damage",
            {
                "operation": 0,
                "amount": 7,
                "id": "shh_attack_damage:mainhand"
            },
            "mainhand"
        )
        .withModifierAdded(
            "minecraft:generic.knockback_resistance",
            {
                "operation": 0,
                "amount": 0.15,
                "id": "shh_nockback_resistance:mainhand"
            },
            "mainhand"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 虚空锻锤
    event.modify('cataclysm:void_forge', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.attack_damage",
            {
                "operation": 0,
                "amount": 8,
                "id": "shh_attack_damage:mainhand"
            },
            "mainhand"
        )
        .withModifierAdded(
            "minecraft:generic.knockback_resistance",
            {
                "operation": 0,
                "amount": 0.15,
                "id": "shh_nockback_resistance:mainhand"
            },
            "mainhand"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
})
// 护手
ItemEvents.modification(event => {
    // 守卫者护手
    event.modify('cataclysm:gauntlet_of_guard', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.attack_damage",
            {
                "operation": 0,
                "amount": 7,
                "id": "shh_attack_damage:mainhand"
            },
            "mainhand"
        )
        .withModifierAdded(
            "minecraft:generic.attack_speed",
            {
                "operation": 0,
                "amount": 0.6,
                "id": "shh_attack_speed:mainhand"
            },
            "mainhand"
        )
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 7,
                "id": "shh_armor:any"
            },
            "any"
        )
        .withModifierAdded(
            "irons_spellbooks:ender_spell_power",
            {
                "operation": 0,
                "amount": 0.05,
                "id": "shh_ender_spell_power:any"
            },
            "any"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 堡垒护手
    event.modify('cataclysm:gauntlet_of_bulwark', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.attack_damage",
            {
                "operation": 0,
                "amount": 8,
                "id": "shh_attack_damage:mainhand"
            },
            "mainhand"
        )
        .withModifierAdded(
            "minecraft:generic.attack_speed",
            {
                "operation": 0,
                "amount": 0.6,
                "id": "shh_attack_speed:mainhand"
            },
            "mainhand"
        )
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 7,
                "id": "shh_armor:any"
            },
            "any"
        )
        .withModifierAdded(
            "irons_spellbooks:ender_spell_power",
            {
                "operation": 0,
                "amount": 0.05,
                "id": "shh_ender_spell_power:any"
            },
            "any"
        )
        .withModifierAdded(
            "irons_spellbooks:fire_spell_power",
            {
                "operation": 0,
                "amount": 0.05,
                "id": "shh_fire_spell_power:any"
            },
            "any"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 漩涡护手
    event.modify('cataclysm:gauntlet_of_maelstrom', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.attack_damage",
            {
                "operation": 0,
                "amount": 8,
                "id": "shh_attack_damage:mainhand"
            },
            "mainhand"
        )
        .withModifierAdded(
            "minecraft:generic.attack_speed",
            {
                "operation": 0,
                "amount": 0.6,
                "id": "shh_attack_speed:mainhand"
            },
            "mainhand"
        )
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 7,
                "id": "shh_armor:any"
            },
            "any"
        )
        .withModifierAdded(
            "irons_spellbooks:ender_spell_power",
            {
                "operation": 0,
                "amount": 0.1,
                "id": "shh_ender_spell_power:any"
            },
            "any"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
})
// 咒魂武器
ItemEvents.modification(event => {
    // 断魂战戟
    event.modify('cataclysm:soul_render', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.attack_damage",
            {
                "operation": 0,
                "amount": 7,
                "id": "shh_attack_damage:mainhand"
            },
            "mainhand"
        )
        .withModifierAdded(
            "irons_spellbooks:ice_spell_power",
            {
                "operation": 1,
                "amount": 0.05,
                "id": "shh_ice_spell_power:mainhand"
            },
            "mainhand"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 歼灭战锤
    event.modify('cataclysm:the_annihilator', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.attack_damage",
            {
                "operation": 0,
                "amount": 6.5,
                "id": "shh_attack_damage:mainhand"
            },
            "mainhand"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
})
// 腾炎武器
ItemEvents.modification(event => {
    // 献祭者
    event.modify('cataclysm:the_immolator', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.attack_damage",
            {
                "operation": 0,
                "amount": 7.5,
                "id": "shh_attack_damage:mainhand"
            },
            "mainhand"
        )
        .withModifierAdded(
            "l2damagetracker:explosion_damage",
            {
                "operation": 0,
                "amount": 10,
                "id": "shh_l2_explosion_damage:any"
            },
            "any"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 炎葬
    event.modify('cataclysm:the_incinerator', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.attack_damage",
            {
                "operation": 0,
                "amount": 8,
                "id": "shh_attack_damage:mainhand"
            },
            "mainhand"
        )
        .withModifierAdded(
            "irons_spellbooks:fire_spell_power",
            {
                "operation": 1,
                "amount": 0.05,
                "id": "shh_fire_spell_power:any"
            },
            "any"
        )
        .withModifierAdded(
            "l2damagetracker:explosion_damage",
            {
                "operation": 0,
                "amount": 10,
                "id": "shh_l2_explosion_damage:any"
            },
            "any"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
})
// 风暴武器
ItemEvents.modification(event => {
    // 神怒长槊
    event.modify('cataclysm:astrape', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.attack_damage",
            {
                "operation": 0,
                "amount": 7.5,
                "id": "shh_attack_damage:mainhand"
            },
            "mainhand"
        )
        .withModifierAdded(
            "irons_spellbooks:lightning_spell_power",
            {
                "operation": 1,
                "amount": 0.05,
                "id": "shh_lightning_spell_power:any"
            },
            "any"
        )
        .withModifierAdded(
            "l2damagetracker:lightning_damage",
            {
                "operation": 0,
                "amount": 0.2,
                "id": "shh_l2_lightning_damage:any"
            },
            "any"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 霆浪锚戟
    event.modify( 'cataclysm:ceraunus' , item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.attack_damage",
            {
                "operation": 0,
                "amount": 8,
                "id": "shh_attack_damage:mainhand"
            },
            "mainhand"
        )
        .withModifierAdded(
            "irons_spellbooks:lightning_spell_power",
            {
                "operation": 1,
                "amount": 0.15,
                "id": "shh_lightning_spell_power:mainhand"
            },
            "mainhand"
        )
        .withModifierAdded(
            "l2damagetracker:lightning_damage",
            {
                "operation": 0,
                "amount": 0.2,
                "id": "shh_l2_lightning_damage:mainhand"
            },
            "mainhand"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
})