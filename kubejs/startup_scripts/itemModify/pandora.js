ItemEvents.modification(event => {
    if (Platform.isLoaded("curseofpandora")) {
        // 剑
        // 裁决
        event.modify('curseofpandora:angelic_judgement', item => {
            addAttModifier(item, [
                { attribute: "minecraft:generic.movement_speed", operation: 1, amount: 0.1, id: "shh_movement_speed:mainhand", slot: "mainhand" }
            ]);
        })
        // 黑星
        event.modify('curseofpandora:doom_star', item => {
            addAttModifier(item, [
                { attribute: "minecraft:generic.movement_speed", operation: 1, amount: -0.05, id: "shh_movement_speed:mainhand", slot: "mainhand" }
            ]);
        })
        // 罪业
        event.modify('curseofpandora:cursed_karma', item => {
            addAttModifier(item, [
                { attribute: "minecraft:generic.movement_speed", operation: 1, amount: -0.05, id: "shh_movement_speed:mainhand", slot: "mainhand" }
            ]);
        })
        // 深渊之锋
        event.modify('curseofpandora:abyssal_edge', item => {
            addAttModifier(item, [
                { attribute: "minecraft:generic.movement_speed", operation: 1, amount: -0.05, id: "shh_movement_speed:mainhand", slot: "mainhand" }
            ]);
        })
    }
    if (Platform.isLoaded("l2hostility")) {
        // 抢夺宝珠
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
    }
})