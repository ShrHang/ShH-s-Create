const TOOLTIP_BAN = Text.translate('text.shh.common.tooltip.ban')
ItemEvents.modifyTooltips(event => {
    // 添加提示信息
    event.add('create_enchantment_industry:super_experience_block',Text.translate('text.shh.create_enchantment_industry.super_experience_block.tooltip_1'))
    event.add('create_enchantment_industry:super_experience_block',Text.translate('text.shh.create_enchantment_industry.super_experience_block.tooltip_2'))

    event.add("l2hostility:bottle_of_curse", Text.translate('text.shh.l2hostility.bottle_of_curse.tooltip'))
    event.add("l2hostility:bottle_of_curse", Text.translate('text.shh.l2hostility.bottle_of_curse.tooltip_maid'))

    event.add("l2hostility:bottle_of_sanity", Text.translate('text.shh.l2hostility.bottle_of_sanity.tooltip'))
    event.add("l2hostility:bottle_of_sanity", Text.translate('text.shh.l2hostility.bottle_of_sanity.tooltip_maid'))

    event.add("l2hostility:miracle_block", Text.translate('text.shh.l2hostility.miracle_block.tooltip_maid'))

    event.add("shh:maid_tool", Text.translate('text.shh.maid_tool.tooltip'))
    event.add("shh:maid_tool", { shift: true }, Text.translate('text.shh.maid_tool.tooltip_right_click'))
    event.add("shh:maid_tool", { shift: true }, Text.translate('text.shh.maid_tool.tooltip_shift_right_click'))

    {
        event.add('l2archery:void_arrow', TOOLTIP_BAN)
        event.add('l2archery:upgrade[l2archery:item_upgrade="l2archery:explosion_breaker"]', TOOLTIP_BAN)
    }

})