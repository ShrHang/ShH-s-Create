// 剑
ItemEvents.modification(event => {
    // 生命剑
    event.modify('l2complements:totemic_gold_sword', item => {
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
    })
    // 海神剑
    event.modify('l2complements:poseidite_sword', item => {
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
    })
    // 潜影剑
    event.modify('l2complements:shulkerate_sword', item => {
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
    })
    // 幽匿剑
    event.modify('l2complements:sculkium_sword', item => {
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
    })
    // 永恒剑
    event.modify('l2complements:eternium_sword', item => {
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
    })
})

// 斧
ItemEvents.modification(event => {
    // 生命斧
    event.modify('l2complements:totemic_gold_axe', item => {
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
    })
    // 海神斧
    event.modify('l2complements:poseidite_axe', item => {
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
    })
    // 潜影斧
    event.modify('l2complements:shulkerate_axe', item => {
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
    })
    // 幽匿斧
    event.modify('l2complements:sculkium_axe', item => {
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
    })
    // 永恒斧
    event.modify('l2complements:eternium_axe', item => {
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
    })
})

// 生命套装
ItemEvents.modification(event => {
    // 生命头盔
    event.modify('l2complements:totemic_gold_helmet', item => {
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
            "minecraft:generic.max_health",
            {
                "operation": 0,
                "amount": 10,
                "id": "shh_health:head"
            },
            "head"
        )
        .withModifierAdded(
            "l2damagetracker:damage_absorption",
            {
                "operation": 0,
                "amount": 5,
                "id": "shh_damage_absorption:head"
            },
            "head"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
    // 生命胸甲
    event.modify('l2complements:totemic_gold_chestplate', item => {
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
            "minecraft:generic.max_health",
            {
                "operation": 0,
                "amount": 10,
                "id": "shh_health:chest"
            },
            "chest"
        )
        .withModifierAdded(
            "l2damagetracker:damage_absorption",
            {
                "operation": 0,
                "amount": 5,
                "id": "shh_damage_absorption:chest"
            },
            "chest"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
    // 生命护腿
    event.modify('l2complements:totemic_gold_leggings', item => {
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
            "minecraft:generic.max_health",
            {
                "operation": 0,
                "amount": 10,
                "id": "shh_health:legs"
            },
            "legs"
        )
        .withModifierAdded(
            "l2damagetracker:damage_absorption",
            {
                "operation": 0,
                "amount": 5,
                "id": "shh_damage_absorption:legs"
            },
            "legs"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
    // 生命靴子
    event.modify('l2complements:totemic_gold_boots', item => {
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
            "minecraft:generic.max_health",
            {
                "operation": 0,
                "amount": 10,
                "id": "shh_health:feet"
            },
            "feet"
        )
        .withModifierAdded(
            "l2damagetracker:damage_absorption",
            {
                "operation": 0,
                "amount": 5,
                "id": "shh_damage_absorption:feet"
            },
            "feet"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
})
// 海神套装
ItemEvents.modification(event => {
    // 海神头盔
    event.modify('l2complements:poseidite_helmet', item => {
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
            "l2damagetracker:bow_strength",
            {
                "operation": 0,
                "amount": 0.1,
                "id": "shh_bow_strength:head"
            },
            "head"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
    // 海神胸甲
    event.modify('l2complements:poseidite_chestplate', item => {
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
            "l2damagetracker:bow_strength",
            {
                "operation": 0,
                "amount": 0.1,
                "id": "shh_bow_strength:chest"
            },
            "chest"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
    // 海神护腿
    event.modify('l2complements:poseidite_leggings', item => {
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
            "l2damagetracker:bow_strength",
            {
                "operation": 0,
                "amount": 0.1,
                "id": "shh_bow_strength:legs"
            },
            "legs"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
    // 海神靴子
    event.modify('l2complements:poseidite_boots', item => {
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
            "l2damagetracker:bow_strength",
            {
                "operation": 0,
                "amount": 0.1,
                "id": "shh_bow_strength:feet"
            },
            "feet"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
})
// 潜影套装
ItemEvents.modification(event => {
    // 潜影头盔
    event.modify('l2complements:shulkerate_helmet', item => {
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
            "l2damagetracker:damage_reduction",
            {
                "operation": 0,
                "amount": -0.08,
                "id": "shh_damage_reduction:head"
            },
            "head"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
    // 潜影胸甲
    event.modify('l2complements:shulkerate_chestplate', item => {
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
            "l2damagetracker:damage_reduction",
            {
                "operation": 0,
                "amount": -0.08,
                "id": "shh_damage_reduction:chest"
            },
            "chest"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
    // 潜影护腿
    event.modify('l2complements:shulkerate_leggings', item => {
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
            "l2damagetracker:damage_reduction",
            {
                "operation": 0,
                "amount": -0.08,
                "id": "shh_damage_reduction:legs"
            },
            "legs"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
    // 潜影靴子
    event.modify('l2complements:shulkerate_boots', item => {
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
            "l2damagetracker:damage_reduction",
            {
                "operation": 0,
                "amount": -0.08,
                "id": "shh_damage_reduction:feet"
            },
            "feet"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
})
// 幽匿套装
ItemEvents.modification(event => {
    // 幽匿头盔
    event.modify('l2complements:sculkium_helmet', item => {
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
            "irons_spellbooks:eldritch_spell_power",
            {
                "operation": 0,
                "amount": 0.08,
                "id": "shh_spell_power:head"
            },
            "head"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
    // 幽匿胸甲
    event.modify('l2complements:sculkium_chestplate', item => {
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
            "irons_spellbooks:eldritch_spell_power",
            {
                "operation": 0,
                "amount": 0.08,
                "id": "shh_spell_power:chest"
            },
            "chest"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
    // 幽匿护腿
    event.modify('l2complements:sculkium_leggings', item => {
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
            "irons_spellbooks:eldritch_spell_power",
            {
                "operation": 0,
                "amount": 0.08,
                "id": "shh_spell_power:legs"
            },
            "legs"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
    // 幽匿靴子
    event.modify('l2complements:sculkium_boots', item => {
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
            "irons_spellbooks:eldritch_spell_power",
            {
                "operation": 0,
                "amount": 0.08,
                "id": "shh_spell_power:feet"
            },
            "feet"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
})
// 永恒套装
ItemEvents.modification(event => {
    // 永恒头盔
    event.modify('l2complements:eternium_helmet', item => {
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
            "minecraft:generic.movement_speed",
            {
                "operation": 1,
                "amount": 0.5,
                "id": "shh_speed:head"
            },
            "head"
        )
        .withModifierAdded(
            "artifacts:generic.sprinting_step_height",
            {
                "operation": 0,
                "amount": 0.5,
                "id": "shh_sprinting_step_height:head"
            },
            "head"   
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
    // 永恒胸甲
    event.modify('l2complements:eternium_chestplate', item => {
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
            "minecraft:generic.movement_speed",
            {
                "operation": 1,
                "amount": 0.5,
                "id": "shh_speed:chest"
            },
            "chest"
        )
        .withModifierAdded(
            "artifacts:generic.sprinting_step_height",
            {
                "operation": 0,
                "amount": 0.5,
                "id": "shh_sprinting_step_height:chest"
            },
            "chest"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
    // 永恒护腿
    event.modify('l2complements:eternium_leggings', item => {
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
            "minecraft:generic.movement_speed",
            {
                "operation": 1,
                "amount": 0.5,
                "id": "shh_speed:legs"
            },
            "legs"
        )
        .withModifierAdded(
            "artifacts:generic.sprinting_step_height",
            {
                "operation": 0,
                "amount": 0.5,
                "id": "shh_sprinting_step_height:legs"
            },
            "legs"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
    // 永恒靴子
    event.modify('l2complements:eternium_boots', item => {
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
            "minecraft:generic.movement_speed",
            {
                "operation": 1,
                "amount": 0.5,
                "id": "shh_speed:feet"
            },
            "feet"
        )
        .withModifierAdded(
            "artifacts:generic.sprinting_step_height",
            {
                "operation": 0,
                "amount": 0.5,
                "id": "shh_sprinting_step_height:feet"
            },
            "feet"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
})