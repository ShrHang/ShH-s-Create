ItemEvents.modification(event => {
    // 潘多拉的剑
    [
        "curseofpandora:angelic_judgement", // 裁决
        "curseofpandora:doom_star", // 黑星
        "curseofpandora:cursed_karma", // 罪业
        "curseofpandora:abyssal_edge" // 深渊之锋
    ].forEach(id => event.modify(id, item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.attack_damage", amount: 6, id: "shh_attack_damage:mainhand", slot: "mainhand" }
        ]);
    }))

    // 抢夺宝珠
    for (let i = 1; i <= 4; i++) event.modify(`l2hostility:charm_of_looting_${i}`, item => item.maxStackSize = 8);
})
