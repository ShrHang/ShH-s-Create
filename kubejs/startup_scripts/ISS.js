// 法杖
ItemEvents.modification(event => {
    // 猩红神杖
    event.modify('irons_spellbooks:blood_staff', item => {
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
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 长者手杖
    event.modify('irons_spellbooks:graybeard_staff', item => {
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
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    }); 
    // 冰霜魔杖
    event.modify('irons_spellbooks:ice_staff', item => {
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
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 匠师之杖
    event.modify('irons_spellbooks:artificer_cane', item => {
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
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 雷霆之杖
    event.modify('irons_spellbooks:lightning_rod', item => {
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
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 炽金魔杖
    event.modify('irons_spellbooks:pyrium_staff', item => {
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
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
})

// 近战武器
ItemEvents.modification(event => {
    // 狩魔人之剑
    event.modify('irons_spellbooks:magehunter', item => {
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
    // 破法者
    event.modify('irons_spellbooks:spellbreaker', item => {
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
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 紫水晶刺剑
    event.modify('irons_spellbooks:amethyst_rapier', item => {
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
            "irons_spellbooks:spell_power",
            {
                "operation": 1,
                "amount": 0.05,
                "id": "shh_pell_power:mainhand"
            },
            "mainhand"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 破败焰型剑
    event.modify('irons_spellbooks:keeper_flamberge', item => {
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
    // 军团焰型剑
    event.modify('irons_spellbooks:legionnaire_flamberge', item => {
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
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 破败战镰
    event.modify('irons_spellbooks:decrepit_scythe', item => {
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
                "amount": 2,
                "id": "shh_entity_interaction:mainhand"
            },
            "mainhand"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 地狱战镰
    event.modify('irons_spellbooks:hellrazor', item => {
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
            "minecraft:player.entity_interaction_range",
            {
                "operation": 0,
                "amount": 2,
                "id": "shh_entity_interaction:mainhand"
            },
            "mainhand"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
    // Boreal Blade
    event.modify('irons_spellbooks:boreal_blade', item => {
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
                "amount": 1,
                "id": "shh_entity_interaction:mainhand"
            },
            "mainhand"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
})

// 流浪法师套装
ItemEvents.modification(event => {
    // 流浪法师兜帽
    event.modify('irons_spellbooks:wandering_magician_helmet', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 3,
                "id": "shh_armor:head"
            },
            "head"
        )
        .withModifierAdded(
            "irons_spellbooks:max_mana",
            {
                "operation": 0,
                "amount": 50,
                "id": "shh_max_mana:head"
            },
            "head"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
    // 流浪法师法袍
    event.modify('irons_spellbooks:wandering_magician_chestplate', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 3,
                "id": "shh_armor:chest"
            },
            "chest"
        )
        .withModifierAdded(
            "irons_spellbooks:max_mana",
            {
                "operation": 0,
                "amount": 50,
                "id": "shh_max_mana:chest"
            },
            "chest"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
    // 流浪法师裤子
    event.modify('irons_spellbooks:wandering_magician_leggings', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 3,
                "id": "shh_armor:legs"
            },
            "legs"
        )
        .withModifierAdded(
            "irons_spellbooks:max_mana",
            {
                "operation": 0,
                "amount": 50,
                "id": "shh_max_mana:legs"
            },
            "legs"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
    // 流浪法师靴子
    event.modify('irons_spellbooks:wandering_magician_boots', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 3,
                "id": "shh_armor:feet"
            },
            "feet"
        )
        .withModifierAdded(
            "irons_spellbooks:max_mana",
            {
                "operation": 0,
                "amount": 50,
                "id": "shh_max_mana:feet"
            },
            "feet"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
})
// 惊悚南瓜套装
ItemEvents.modification(event => {
    // 惊悚南瓜帽子
    event.modify('irons_spellbooks:pumpkin_helmet', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 3,
                "id": "shh_armor:head"
            },
            "head"
        )
        .withModifierAdded(
            "irons_spellbooks:max_mana",
            {
                "operation": 0,
                "amount": 50,
                "id": "shh_max_mana:head"
            },
            "head"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
    // 惊悚南瓜法袍
    event.modify('irons_spellbooks:pumpkin_chestplate', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 3,
                "id": "shh_armor:chest"
            },
            "chest"
        )
        .withModifierAdded(
            "irons_spellbooks:max_mana",
            {
                "operation": 0,
                "amount": 50,
                "id": "shh_max_mana:chest"
            },
            "chest"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
    // 惊悚南瓜裤子
    event.modify('irons_spellbooks:pumpkin_leggings', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 3,
                "id": "shh_armor:legs"
            },
            "legs"
        )
        .withModifierAdded(
            "irons_spellbooks:max_mana",
            {
                "operation": 0,
                "amount": 50,
                "id": "shh_max_mana:legs"
            },
            "legs"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
    // 惊悚南瓜靴子
    event.modify('irons_spellbooks:pumpkin_boots', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 3,
                "id": "shh_armor:feet"
            },
            "feet"
        )
        .withModifierAdded(
            "irons_spellbooks:max_mana",
            {
                "operation": 0,
                "amount": 50,
                "id": "shh_max_mana:feet"
            },
            "feet"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
})
// 术士套装
ItemEvents.modification(event => {
    // 术士兜帽
    event.modify('irons_spellbooks:wizard_helmet', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 3,
                "id": "shh_armor:head"
            },
            "head"
        )
        .withModifierAdded(
            "irons_spellbooks:max_mana",
            {
                "operation": 0,
                "amount": 75,
                "id": "shh_max_mana:head"
            },
            "head"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
    // 术士法袍
    event.modify('irons_spellbooks:wizard_chestplate', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 3,
                "id": "shh_armor:chest"
            },
            "chest"
        )
        .withModifierAdded(
            "irons_spellbooks:max_mana",
            {
                "operation": 0,
                "amount": 75,
                "id": "shh_max_mana:chest"
            },
            "chest"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
    // 术士裤子
    event.modify('irons_spellbooks:wizard_leggings', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 3,
                "id": "shh_armor:legs"
            },
            "legs"
        )
        .withModifierAdded(
            "irons_spellbooks:max_mana",
            {
                "operation": 0,
                "amount": 75,
                "id": "shh_max_mana:legs"
            },
            "legs"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
    // 术士靴子
    event.modify('irons_spellbooks:wizard_boots', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 3,
                "id": "shh_armor:feet"
            },
            "feet"
        )
        .withModifierAdded(
            "irons_spellbooks:max_mana",
            {
                "operation": 0,
                "amount": 75,
                "id": "shh_max_mana:feet"
            },
            "feet"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
})
// 高位唤魔者套装
ItemEvents.modification(event => {
    // 高位唤魔者法帽
    event.modify('irons_spellbooks:archevoker_helmet', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 3,
                "id": "shh_armor:head"
            },
            "head"
        )
        .withModifierAdded(
            "irons_spellbooks:max_mana",
            {
                "operation": 0,
                "amount": 75,
                "id": "shh_max_mana:head"
            },
            "head"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
    // 高位唤魔者法袍
    event.modify('irons_spellbooks:archevoker_chestplate', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 3,
                "id": "shh_armor:chest"
            },
            "chest"
        )
        .withModifierAdded(
            "irons_spellbooks:max_mana",
            {
                "operation": 0,
                "amount": 75,
                "id": "shh_max_mana:chest"
            },
            "chest"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
    // 高位唤魔者裤子
    event.modify('irons_spellbooks:archevoker_leggings', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 3,
                "id": "shh_armor:legs"
            },
            "legs"
        )
        .withModifierAdded(
            "irons_spellbooks:max_mana",
            {
                "operation": 0,
                "amount": 75,
                "id": "shh_max_mana:legs"
            },
            "legs"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
    // 高位唤魔者靴子
    event.modify('irons_spellbooks:archevoker_boots', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 3,
                "id": "shh_armor:feet"
            },
            "feet"
        )
        .withModifierAdded(
            "irons_spellbooks:max_mana",
            {
                "operation": 0,
                "amount": 75,
                "id": "shh_max_mana:feet"
            },
            "feet"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
})
// 雷霆术士套装
ItemEvents.modification(event => {
    // 雷霆术士兜帽
    event.modify('irons_spellbooks:electromancer_helmet', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 3,
                "id": "shh_armor:head"
            },
            "head"
        )
        .withModifierAdded(
            "irons_spellbooks:max_mana",
            {
                "operation": 0,
                "amount": 75,
                "id": "shh_max_mana:head"
            },
            "head"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
    // 雷霆术士法袍
    event.modify('irons_spellbooks:electromancer_chestplate', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 3,
                "id": "shh_armor:chest"
            },
            "chest"
        )
        .withModifierAdded(
            "irons_spellbooks:max_mana",
            {
                "operation": 0,
                "amount": 75,
                "id": "shh_max_mana:chest"
            },
            "chest"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
    // 雷霆术士裤子
    event.modify('irons_spellbooks:electromancer_leggings', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 3,
                "id": "shh_armor:legs"
            },
            "legs"
        )
        .withModifierAdded(
            "irons_spellbooks:max_mana",
            {
                "operation": 0,
                "amount": 75,
                "id": "shh_max_mana:legs"
            },
            "legs"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
    // 雷霆术士靴子
    event.modify('irons_spellbooks:electromancer_boots', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 3,
                "id": "shh_armor:feet"
            },
            "feet"
        )
        .withModifierAdded(
            "irons_spellbooks:max_mana",
            {
                "operation": 0,
                "amount": 75,
                "id": "shh_max_mana:feet"
            },
            "feet"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
})
// 炽焰术士套装
ItemEvents.modification(event => {
    // 炽焰术士兜帽
    event.modify('irons_spellbooks:pyromancer_helmet', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 3,
                "id": "shh_armor:head"
            },
            "head"
        )
        .withModifierAdded(
            "irons_spellbooks:max_mana",
            {
                "operation": 0,
                "amount": 75,
                "id": "shh_max_mana:head"
            },
            "head"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
    // 炽焰术士法袍
    event.modify('irons_spellbooks:pyromancer_chestplate', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 3,
                "id": "shh_armor:chest"
            },
            "chest"
        )
        .withModifierAdded(
            "irons_spellbooks:max_mana",
            {
                "operation": 0,
                "amount": 75,
                "id": "shh_max_mana:chest"
            },
            "chest"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
    // 炽焰术士裤子
    event.modify('irons_spellbooks:pyromancer_leggings', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 3,
                "id": "shh_armor:legs"
            },
            "legs"
        )
        .withModifierAdded(
            "irons_spellbooks:max_mana",
            {
                "operation": 0,
                "amount": 75,
                "id": "shh_max_mana:legs"
            },
            "legs"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
    // 炽焰术士靴子
    event.modify('irons_spellbooks:pyromancer_boots', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 3,
                "id": "shh_armor:feet"
            },
            "feet"
        )
        .withModifierAdded(
            "irons_spellbooks:max_mana",
            {
                "operation": 0,
                "amount": 75,
                "id": "shh_max_mana:feet"
            },
            "feet"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
})
// 下界合金战斗法师套装
ItemEvents.modification(event => {
    // 下界合金战斗法师帽
    event.modify('irons_spellbooks:netherite_mage_helmet', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 4,
                "id": "shh_armor:head"
            },
            "head"
        )
        .withModifierAdded(
            "irons_spellbooks:max_mana",
            {
                "operation": 0,
                "amount": 75,
                "id": "shh_max_mana:head"
            },
            "head"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
    // 下界合金战斗法师法袍
    event.modify('irons_spellbooks:netherite_mage_chestplate', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 4,
                "id": "shh_armor:chest"
            },
            "chest"
        )
        .withModifierAdded(
            "irons_spellbooks:max_mana",
            {
                "operation": 0,
                "amount": 75,
                "id": "shh_max_mana:chest"
            },
            "chest"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
    // 下界合金战斗法师裤子
    event.modify('irons_spellbooks:netherite_mage_leggings', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 4,
                "id": "shh_armor:legs"
            },
            "legs"
        )
        .withModifierAdded(
            "irons_spellbooks:max_mana",
            {
                "operation": 0,
                "amount": 75,
                "id": "shh_max_mana:legs"
            },
            "legs"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
    // 下界合金战斗法师靴子
    event.modify('irons_spellbooks:netherite_mage_boots', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 4,
                "id": "shh_armor:feet"
            },
            "feet"
        )
        .withModifierAdded(
            "irons_spellbooks:max_mana",
            {
                "operation": 0,
                "amount": 75,
                "id": "shh_max_mana:feet"
            },
            "feet"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
})
// 瘟疫术士套装
ItemEvents.modification(event => {
    // 瘟疫术士兜帽
    event.modify('irons_spellbooks:plagued_helmet', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 3,
                "id": "shh_armor:head"
            },
            "head"
        )
        .withModifierAdded(
            "irons_spellbooks:max_mana",
            {
                "operation": 0,
                "amount": 75,
                "id": "shh_max_mana:head"
            },
            "head"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
    // 瘟疫术士法袍
    event.modify('irons_spellbooks:plagued_chestplate', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 3,
                "id": "shh_armor:chest"
            },
            "chest"
        )
        .withModifierAdded(
            "irons_spellbooks:max_mana",
            {
                "operation": 0,
                "amount": 75,
                "id": "shh_max_mana:chest"
            },
            "chest"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
    // 瘟疫术士裤子
    event.modify('irons_spellbooks:plagued_leggings', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 3,
                "id": "shh_armor:legs"
            },
            "legs"
        )
        .withModifierAdded(
            "irons_spellbooks:max_mana",
            {
                "operation": 0,
                "amount": 75,
                "id": "shh_max_mana:legs"
            },
            "legs"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
    // 瘟疫术士靴子
    event.modify('irons_spellbooks:plagued_boots', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 3,
                "id": "shh_armor:feet"
            },
            "feet"
        )
        .withModifierAdded(
            "irons_spellbooks:max_mana",
            {
                "operation": 0,
                "amount": 75,
                "id": "shh_max_mana:feet"
            },
            "feet"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
})
// 牧师套装
ItemEvents.modification(event => {
    // 牧师兜帽
    event.modify('irons_spellbooks:priest_helmet', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 3,
                "id": "shh_armor:head"
            },
            "head"
        )
        .withModifierAdded(
            "irons_spellbooks:max_mana",
            {
                "operation": 0,
                "amount": 75,
                "id": "shh_max_mana:head"
            },
            "head"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
    // 牧师法袍
    event.modify('irons_spellbooks:priest_chestplate', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 3,
                "id": "shh_armor:chest"
            },
            "chest"
        )
        .withModifierAdded(
            "irons_spellbooks:max_mana",
            {
                "operation": 0,
                "amount": 75,
                "id": "shh_max_mana:chest"
            },
            "chest"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
    // 牧师裤子
    event.modify('irons_spellbooks:priest_leggings', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 3,
                "id": "shh_armor:legs"
            },
            "legs"
        )
        .withModifierAdded(
            "irons_spellbooks:max_mana",
            {
                "operation": 0,
                "amount": 75,
                "id": "shh_max_mana:legs"
            },
            "legs"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
    // 牧师靴子
    event.modify('irons_spellbooks:priest_boots', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 3,
                "id": "shh_armor:feet"
            },
            "feet"
        )
        .withModifierAdded(
            "irons_spellbooks:max_mana",
            {
                "operation": 0,
                "amount": 75,
                "id": "shh_max_mana:feet"
            },
            "feet"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
})
// 暗影行者套装
ItemEvents.modification(event => {
    // 暗影行者兜帽
    event.modify('irons_spellbooks:shadowwalker_helmet', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 3,
                "id": "shh_armor:head"
            },
            "head"
        )
        .withModifierAdded(
            "irons_spellbooks:max_mana",
            {
                "operation": 0,
                "amount": 75,
                "id": "shh_max_mana:head"
            },
            "head"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
    // 暗影行者法袍
    event.modify('irons_spellbooks:shadowwalker_chestplate', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 3,
                "id": "shh_armor:chest"
            },
            "chest"
        )
        .withModifierAdded(
            "irons_spellbooks:max_mana",
            {
                "operation": 0,
                "amount": 75,
                "id": "shh_max_mana:chest"
            },
            "chest"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
    // 暗影行者裤子
    event.modify('irons_spellbooks:shadowwalker_leggings', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 3,
                "id": "shh_armor:legs"
            },
            "legs"
        )
        .withModifierAdded(
            "irons_spellbooks:max_mana",
            {
                "operation": 0,
                "amount": 75,
                "id": "shh_max_mana:legs"
            },
            "legs"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
    // 暗影行者靴子
    event.modify('irons_spellbooks:shadowwalker_boots', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 3,
                "id": "shh_armor:feet"
            },
            "feet"
        )
        .withModifierAdded(
            "irons_spellbooks:max_mana",
            {
                "operation": 0,
                "amount": 75,
                "id": "shh_max_mana:feet"
            },
            "feet"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
})
// 冰霜术士套装
ItemEvents.modification(event => {
    // 冰霜术士兜帽
    event.modify('irons_spellbooks:cryomancer_helmet', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 3,
                "id": "shh_armor:head"
            },
            "head"
        )
        .withModifierAdded(
            "irons_spellbooks:max_mana",
            {
                "operation": 0,
                "amount": 75,
                "id": "shh_max_mana:head"
            },
            "head"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
    // 冰霜术士法袍
    event.modify('irons_spellbooks:cryomancer_chestplate', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 3,
                "id": "shh_armor:chest"
            },
            "chest"
        )
        .withModifierAdded(
            "irons_spellbooks:max_mana",
            {
                "operation": 0,
                "amount": 75,
                "id": "shh_max_mana:chest"
            },
            "chest"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
    // 冰霜术士裤子
    event.modify('irons_spellbooks:cryomancer_leggings', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 3,
                "id": "shh_armor:legs"
            },
            "legs"
        )
        .withModifierAdded(
            "irons_spellbooks:max_mana",
            {
                "operation": 0,
                "amount": 75,
                "id": "shh_max_mana:legs"
            },
            "legs"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
    // 冰霜术士靴子
    event.modify('irons_spellbooks:cryomancer_boots', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 3,
                "id": "shh_armor:feet"
            },
            "feet"
        )
        .withModifierAdded(
            "irons_spellbooks:max_mana",
            {
                "operation": 0,
                "amount": 75,
                "id": "shh_max_mana:feet"
            },
            "feet"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
})
// 猩红教徒套装
ItemEvents.modification(event => {
    // 猩红教徒兜帽
    event.modify('irons_spellbooks:cultist_helmet', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 3,
                "id": "shh_armor:head"
            },
            "head"
        )
        .withModifierAdded(
            "irons_spellbooks:max_mana",
            {
                "operation": 0,
                "amount": 75,
                "id": "shh_max_mana:head"
            },
            "head"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
    // 猩红教徒法袍
    event.modify('irons_spellbooks:cultist_chestplate', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 3,
                "id": "shh_armor:chest"
            },
            "chest"
        )
        .withModifierAdded(
            "irons_spellbooks:max_mana",
            {
                "operation": 0,
                "amount": 75,
                "id": "shh_max_mana:chest"
            },
            "chest"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
    // 猩红教徒裤子
    event.modify('irons_spellbooks:cultist_leggings', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 3,
                "id": "shh_armor:legs"
            },
            "legs"
        )
        .withModifierAdded(
            "irons_spellbooks:max_mana",
            {
                "operation": 0,
                "amount": 75,
                "id": "shh_max_mana:legs"
            },
            "legs"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
    // 猩红教徒靴子
    event.modify('irons_spellbooks:cultist_boots', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 3,
                "id": "shh_armor:feet"
            },
            "feet"
        )
        .withModifierAdded(
            "irons_spellbooks:max_mana",
            {
                "operation": 0,
                "amount": 75,
                "id": "shh_max_mana:feet"
            },
            "feet"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
})
// 其它装备
ItemEvents.modification(event => {
    // 暗淡皇冠
    event.modify('irons_spellbooks:tarnished_helmet', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "irons_spellbooks:max_mana",
            {
                "operation": 0,
                "amount": 125,
                "id": "shh_max_mana:head"
            },
            "head"
        )
        .withModifierAdded(
            "irons_spellbooks:spell_power",
            {
                "operation": 1,
                "amount": 0.25,
                "id": "shh_spell_power:head"
            },
            "head"
        )
        .withModifierAdded(
            "l2damagetracker:magic_damage",
            {
                "operation": 0,
                "amount": 0.25,
                "id": "shh_l2_magic_damage:head"
            },
            "head"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
    // 光明行者胸甲
    event.modify('irons_spellbooks:paladin_chestplate', item => {
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
            "irons_spellbooks:max_mana",
            {
                "operation": 0,
                "amount": 75,
                "id": "shh_max_mana:chest"
            },
            "chest"
        )
        .withModifierAdded(
            "l2damagetracker:magic_damage",
            {
                "operation": 0,
                "amount": 0.25,
                "id": "shh_l2_magic_damage:chest"
            },
            "chest"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
    // 迅捷之靴
    event.modify('irons_spellbooks:speed_boots', item => {
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
            "irons_spellbooks:max_mana",
            {
                "operation": 0,
                "amount": 75,
                "id": "shh_max_mana:feet"
            },
            "feet"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
    // 金皇冠
    event.modify('irons_spellbooks:gold_crown', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "irons_spellbooks:spell_power",
            {
                "operation": 1,
                "amount": 0.5,
                "id": "shh_spell_power:head"
            },
            "head"
        )
        .withModifierAdded(
            "l2damagetracker:magic_damage",
            {
                "operation": 0,
                "amount": 0.25,
                "id": "shh_l2_magic_damage:head"
            },
            "head"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
})