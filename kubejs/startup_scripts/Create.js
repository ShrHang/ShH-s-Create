// 扳手
ItemEvents.modification(event => {
    event.modify('create:wrench', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.attack_damage",
            {
                "operation": 0,
                "amount": 9,
                "id": "minecraft:base_attack_damage"
            },
            "mainhand"
        )
        .withModifierAdded(
            "minecraft:generic.attack_speed",
            {
                "operation": 0,
                "amount": -1,
                "id": "minecraft:base_attack_speed"
            },
            "mainhand"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
})

// 铜潜水套装
ItemEvents.modification(event => {
    // 铜潜水头盔
    event.modify('create:copper_diving_helmet', item => {
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
            "irons_spellbooks:lightning_spell_power",
            {
                "operation": 0,
                "amount": 0.05,
                "id": "shh_lightning_spell_power:head"
            },
            "head"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 铜背罐
    event.modify('create:copper_backtank', item => {
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
            "irons_spellbooks:lightning_spell_power",
            {
                "operation": 0,
                "amount": 0.05,
                "id": "shh_lightning_spell_power:chest"
            },
            "chest"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 铜潜水靴
    event.modify('create:copper_diving_boots', item => {
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
            "irons_spellbooks:lightning_spell_power",
            {
                "operation": 0,
                "amount": 0.05,
                "id": "shh_lightning_spell_power:feet"
            },
            "feet"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
})
// 下界合金潜水套装
ItemEvents.modification(event => {
    // 下界合金潜水头盔
    event.modify('create:netherite_diving_helmet', item => {
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
            "minecraft:generic.armor_toughness",
            {
                "operation": 0,
                "amount": 1,
                "id": "shh_armor_toughness:head"
            },
            "head"
        )
        .withModifierAdded(
            "l2damagetracker:damage_reduction",
            {
                "operation": 0,
                "amount": -0.05,
                "id": "shh_l2_damage_reduction:head"
            },
            "head"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 下界合金背罐
    event.modify('create:netherite_backtank', item => {
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
            "minecraft:generic.armor_toughness",
            {
                "operation": 0,
                "amount": 5,
                "id": "shh_armor_toughness:chest"
            },
            "chest"
        )
        .withModifierAdded(
            "l2damagetracker:damage_reduction",
            {
                "operation": 0,
                "amount": -0.05,
                "id": "shh_l2_damage_reduction:chest"
            },
            "chest"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
    // 下界合金潜水靴
    event.modify('create:netherite_diving_boots', item => {
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
            "minecraft:generic.armor_toughness",
            {
                "operation": 0,
                "amount": 1,
                "id": "shh_armor_toughness:feet"
            },
            "feet"
        )
        .withModifierAdded(
            "l2damagetracker:damage_reduction",
            {
                "operation": 0,
                "amount": -0.05,
                "id": "shh_l2_damage_reduction:feet"
            },
            "feet"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
})

// 纸板套装
ItemEvents.modification(event => {
    // 纸板头盔
    event.modify('create:cardboard_helmet', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "player.sneaking_speed",
            {
                "operation": 0,
                "amount": 0.15,
                "id": "shh_sneaking_speed:head"
            },
            "head"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
    // 纸板胸甲
    event.modify('create:cardboard_chestplate', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "player.sneaking_speed",
            {
                "operation": 0,
                "amount": 0.15,
                "id": "shh_sneaking_speed:chest"
            },
            "chest"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
    // 纸板护腿
    event.modify('create:cardboard_leggings', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "player.sneaking_speed",
            {
                "operation": 0,
                "amount": 0.15,
                "id": "shh_sneaking_speed:legs"
            },
            "legs"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
    // 纸板靴子
    event.modify('create:cardboard_boots', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "player.sneaking_speed",
            {
                "operation": 0,
                "amount": 0.15,
                "id": "shh_sneaking_speed:feet"
            },
            "feet"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    })
})