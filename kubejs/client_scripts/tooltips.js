ItemEvents.modifyTooltips(event => {
    event.add('minecraft:diamond', Text.of('闪闪发亮的钻石').color('#a6eefeff'))
    // 添加提示信息
    event.add('create_enchantment_industry:super_experience_block',Text.gray('经验块在避雷针下方遭受雷击后转化。'))
    event.add('create_enchantment_industry:super_experience_block',Text.gray('您可以对着【经验颗粒】(不是超越经验颗粒)思索查看详细信息'))

    event.add('l2archery:void_arrow', Text.of('已禁用').red())
    
    event.add("l2hostility:bottle_of_curse", Text.of('单次右键即饮用').gray())
    event.add("l2hostility:bottle_of_curse", Text.of('对女仆右键使用可以提升其恶意等级').darkPurple())

    event.add("l2hostility:bottle_of_sanity", Text.of('单次右键即饮用').gray())
    event.add("l2hostility:bottle_of_sanity", Text.of('对女仆右键使用可以清空其恶意等级和词条').yellow())

    event.add("l2hostility:miracle_powder", Text.of('对女仆右键使用可以根据其当前等级刷新词条').green())

    event.add("shh:maid_tool", { shift: false }, Text.of('按住[Shift]显示详情').darkGray())
    event.add("shh:maid_tool", { shift: true }, Text.of('按住[Shift]显示详情').gold())
    event.add("shh:maid_tool", { shift: true }, Text.of('·右键女仆移除/恢复女仆的AI').red())
    event.add("shh:maid_tool", { shift: true }, Text.of('·Shift+右键女仆打开女仆的Curios饰品栏').green())
})