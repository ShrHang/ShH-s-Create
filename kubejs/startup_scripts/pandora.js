// 剑
ItemEvents.modification(event => {
    // 裁决
    event.modify('curseofpandora:angelic_judgement', item => {
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
    // 黑星
    event.modify('curseofpandora:doom_star', item => {
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
    // 罪业
    event.modify('curseofpandora:cursed_karma', item => {
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
    // 深渊之锋
    event.modify('curseofpandora:abyssal_edge', item => {
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
})

// 抢夺宝珠
ItemEvents.modification(event => {
    event.modify('l2hostility:charm_of_looting_1', item => {
        item.maxStackSize = 8;
    })
    event.modify('l2hostility:charm_of_looting_2', item => {
        item.maxStackSize = 8;
    })
    event.modify('l2hostility:charm_of_looting_3', item => {
        item.maxStackSize = 8;
    })
    event.modify('l2hostility:charm_of_looting_4', item => {
        item.maxStackSize = 8;
    })
})