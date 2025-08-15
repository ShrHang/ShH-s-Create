// 盾牌
ItemEvents.modification(event => {
    // 盾牌
    event.modify('minecraft:shield', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
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
                "amount": 0.1,
                "id": "shh_nockback_resistance:any"
            },
            "any"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
})


// 剑
ItemEvents.modification(event => {
    // 木剑
    event.modify('minecraft:wooden_sword', item => {
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
    // 石剑
    event.modify('minecraft:stone_sword', item => {
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
    // 金剑
    event.modify('minecraft:golden_sword', item => {
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
    // 铁剑
    event.modify('minecraft:iron_sword', item => {
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
    // 钻石剑
    event.modify('minecraft:diamond_sword', item => {
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
    // 下界合金剑
    event.modify('minecraft:netherite_sword', item => {
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
    
})
// 斧
ItemEvents.modification(event => {
    // 木斧
    event.modify('minecraft:wooden_axe', item => {
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
    // 石斧
    event.modify('minecraft:stone_axe', item => {
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
    // 金斧
    event.modify('minecraft:golden_axe', item => {
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
    // 铁斧
    event.modify('minecraft:iron_axe', item => {
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
    // 钻石斧
    event.modify('minecraft:diamond_axe', item => {
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
    // 下界合金斧
    event.modify('minecraft:netherite_axe', item => {
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
})


// 三叉戟&重锤
ItemEvents.modification(event => {
    // 三叉戟
    event.modify('minecraft:trident', item => {
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
            "neoforge:swim_speed",
            {
                "operation": 0,
                "amount": 0.15,
                "id": "shh_swim_speed:mainhand"
            },
            "mainhand"
        )
        .withModifierAdded(
            "neoforge:swim_speed",
            {
                "operation": 0,
                "amount": 0.15,
                "id": "shh_swim_speed:offhand"
            },
            "offhand"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 重锤
    event.modify('minecraft:mace', item => {
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
                "id": "shh_knockback_resistance:mainhand"
            },
            "mainhand"
        )
        .withModifierAdded(
            "minecraft:generic.knockback_resistance",
            {
                "operation": 0,
                "amount": 0.15,
                "id": "shh_knockback_resistance:offhand"
            },
            "offhand"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
})


// 皮革套装
ItemEvents.modification(event => {
    // 皮革帽
    event.modify('minecraft:leather_helmet', item => {
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
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 皮革胸甲
    event.modify('minecraft:leather_chestplate', item => {
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
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 皮革护腿
    event.modify('minecraft:leather_leggings', item => {
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
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 皮革靴子
    event.modify('minecraft:leather_boots', item => {
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
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
})
// 锁链套装
ItemEvents.modification(event => {
    // 锁链帽
    event.modify('minecraft:chainmail_helmet', item => {
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
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 锁链胸甲
    event.modify('minecraft:chainmail_chestplate', item => { 
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
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 锁链护腿
    event.modify('minecraft:chainmail_leggings', item => {
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
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 锁链靴子
    event.modify('minecraft:chainmail_boots', item => {
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
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
})
// 铁套装
ItemEvents.modification(event => {
    // 铁头盔
    event.modify('minecraft:iron_helmet', item => {
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
            "minecraft:generic.armor_toughness",
            {
                "operation": 0,
                "amount": 2,
                "id": "shh_armor_toughness:head"
            },
            "head"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 铁胸甲
    event.modify('minecraft:iron_chestplate', item => { 
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
            "minecraft:generic.armor_toughness",
            {
                "operation": 0,
                "amount": 2,
                "id": "shh_armor_toughness:chest"
            },
            "chest"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 铁护腿
    event.modify('minecraft:iron_leggings', item => {
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
            "minecraft:generic.armor_toughness",
            {
                "operation": 0,
                "amount": 2,
                "id": "shh_armor_toughness:legs"
            },
            "legs"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 铁靴子
    event.modify('minecraft:iron_boots', item => {
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
            "minecraft:generic.armor_toughness",
            {
                "operation": 0,
                "amount": 2,
                "id": "shh_armor_toughness:feet"
            },
            "feet"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
})
// 金套装
ItemEvents.modification(event => {
    // 金头盔
    event.modify('minecraft:golden_helmet', item => {
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
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 金胸甲
    event.modify('minecraft:golden_chestplate', item => { 
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
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 金护腿
    event.modify('minecraft:golden_leggings', item => {
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
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 金靴子
    event.modify('minecraft:golden_boots', item => {
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
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
})
// 钻石套装
ItemEvents.modification(event => {
    // 钻石头盔
    event.modify('minecraft:diamond_helmet', item => {
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
                "amount": -0.03,
                "id": "shh_l2_damage_reduction:head"
            },
            "head"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 钻石胸甲
    event.modify('minecraft:diamond_chestplate', item => { 
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
                "amount": -0.03,
                "id": "shh_l2_damage_reduction:chest"
            },
            "chest"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 钻石护腿
    event.modify('minecraft:diamond_leggings', item => {
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
            "minecraft:generic.armor_toughness",
            {
                "operation": 0,
                "amount": 1,
                "id": "shh_armor_toughness:legs"
            },
            "legs"
        )
        .withModifierAdded(
            "l2damagetracker:damage_reduction",
            {
                "operation": 0,
                "amount": -0.03,
                "id": "shh_l2_damage_reduction:legs"
            },
            "legs"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 钻石靴子
    event.modify('minecraft:diamond_boots', item => {
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
                "amount": -0.03,
                "id": "shh_l2_damage_reduction:feet"
            },
            "feet"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
})
// 下界合金套装
ItemEvents.modification(event => {
    // 下界合金头盔
    event.modify('minecraft:netherite_helmet', item => {
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
    // 下界合金胸甲
    event.modify('minecraft:netherite_chestplate', item => { 
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
    });
    // 下界合金护腿
    event.modify('minecraft:netherite_leggings', item => {
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
            "minecraft:generic.armor_toughness",
            {
                "operation": 0,
                "amount": 1,
                "id": "shh_armor_toughness:legs"
            },
            "legs"
        )
        .withModifierAdded(
            "l2damagetracker:damage_reduction",
            {
                "operation": 0,
                "amount": -0.05,
                "id": "shh_l2_damage_reduction:legs"
            },
            "legs"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 下界合金靴子
    event.modify('minecraft:netherite_boots', item => {
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
    });
})


// 海龟壳
ItemEvents.modification(event => {
    // 海龟壳
    event.modify('minecraft:turtle_helmet', item => {
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
            "neoforge:swim_speed",
            {
                "operation": 0,
                "amount": 0.15,
                "id": "shh_swim_speed:head"
            },
            "head"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
})