const TOOLTIP_BAN = Component.translate('text.shh.common.tooltip.ban')
ItemEvents.modifyTooltips(event => {
    // 添加提示信息
    event.add('create_enchantment_industry:super_experience_block', [
        Component.translate('text.shh.create_enchantment_industry.super_experience_block.tooltip_1'),
        Component.translate('text.shh.create_enchantment_industry.super_experience_block.tooltip_2')
    ])

    event.add("l2hostility:bottle_of_curse", [
        Component.translate('text.shh.l2hostility.bottle_of_curse.tooltip'),
        Component.translate('text.shh.l2hostility.bottle_of_curse.tooltip_maid')
    ])

    event.add("l2hostility:bottle_of_sanity", [
        Component.translate('text.shh.l2hostility.bottle_of_sanity.tooltip'),
        Component.translate('text.shh.l2hostility.bottle_of_sanity.tooltip_maid')
    ])

    event.add("l2hostility:miracle_block", Component.translate('text.shh.l2hostility.miracle_block.tooltip_maid'))

    event.add("shh:maid_tool", Component.translate('text.shh.maid_tool.tooltip'))
    event.add("shh:maid_tool", { shift: true }, [
        Component.translate('text.shh.maid_tool.tooltip_right_click'),
        Component.translate('text.shh.maid_tool.tooltip_shift_right_click')
    ])

    event.add(
        "pandora:pandora_bracelet[pandora:backpack_content=[{item:{count:1,id:\"curseofpandora:curse_of_inertia\"},slot:0},{item:{count:1,id:\"curseofpandora:curse_of_proximity\"},slot:1},{item:{count:1,id:\"curseofpandora:curse_of_flesh\"},slot:2},{item:{count:1,id:\"curseofpandora:curse_of_metabolism\"},slot:3},{item:{count:1,id:\"curseofpandora:curse_of_tension\"},slot:4},{item:{count:1,id:\"curseofpandora:curse_of_prudence\"},slot:5},{item:{count:1,id:\"curseofpandora:curse_of_spell\"},slot:6}]]",
        Component.translate('text.shh.pandora_bracelet_init.tooltip')
    )
    event.add(
        "pandora:pandora_necklace[pandora:backpack_content=[{item:{count:1,id:\"curseofpandora:curse_of_inertia\"},slot:0},{item:{count:1,id:\"curseofpandora:curse_of_proximity\"},slot:1},{item:{count:1,id:\"curseofpandora:curse_of_flesh\"},slot:2},{item:{count:1,id:\"curseofpandora:curse_of_metabolism\"},slot:3},{item:{count:1,id:\"curseofpandora:curse_of_tension\"},slot:4},{item:{count:1,id:\"curseofpandora:curse_of_prudence\"},slot:5},{item:{count:1,id:\"curseofpandora:curse_of_spell\"},slot:6}]]",
        Component.translate('text.shh.pandora_necklet_init.tooltip')
    )

    event.add('l2archery:void_arrow', TOOLTIP_BAN)
    event.add('l2archery:upgrade[l2archery:item_upgrade="l2archery:explosion_breaker"]', TOOLTIP_BAN)

})