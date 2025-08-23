ItemEvents.modifyTooltips(event => {
    event.add('minecraft:diamond', Text.of('闪闪发亮的钻石').color('#a6eefeff'))
    // 添加提示信息
    event.add('create_enchantment_industry:super_experience_block',Text.gray('经验块在避雷针下方遭受雷击后转化。'))
    event.add('create_enchantment_industry:super_experience_block',Text.gray('您可以对着【经验颗粒】(不是超越经验颗粒)思索查看详细信息'))

    event.add('l2archery:void_arrow', Text.of('已禁用').red())
})