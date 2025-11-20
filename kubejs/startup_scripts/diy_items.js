StartupEvents.registry('item', event => {
    event.create('shh:etihw')
        .tooltip(Text.translate('text.shh.etihw.tooltip'))
        .texture('shh:item/etihw')
        .attachCuriosCapability(CuriosJSCapabilityBuilder.create().addAttribute(
            "minecraft:generic.attack_damage",
            "shh_attack_damage:curios_curio",
            8.23,
            "add_value"
        ))
        .rarity('epic')

    event.create('shh:hulibugulv')
        .tooltip(Text.translate('text.shh.hulibugulv.tooltip'))
        .texture('shh:item/hulibugulv')
        .food(food => {
            food.nutrition(1)           // ✅ 设置营养值（饥饿值）
            food.saturation(15)        // ✅ 设置饱食度
            food.alwaysEdible()         // ✅ 总是可食用
            food.fastToEat()
            food.effect('minecraft:health_boost', 3600, 4, 1.0)
            food.effect('minecraft:absorption', 3600, 3, 1.0)
            food.effect('minecraft:regeneration', 400, 2, 1.0)
            food.effect('minecraft:instant_health', 1, 4, 1.0)
            food.removeEffect('minecraft:hunger')
            food.usingConvertsTo('minecraft:paper')
        })
        .maxStackSize(16)
        .rarity('epic')


    event.create('shh:chimings_sword', "sword")
        .maxStackSize(1)
        .maxDamage(1024)
        .rarity('epic')
        .tooltip(Text.translate('text.shh.chimings_sword.tooltip'))
        .texture('shh:item/chimings_sword')

    event.create('shh:maid_tool')
        .maxStackSize(1)
        .rarity('epic')

    event.create('shh:incomplete_upgrade_advanced_infinity')
        .texture('shh:item/incomplete_upgrade_advanced_infinity')
    event.create('shh:incomplete_upgrade_anti_gravity')
        .texture('shh:item/incomplete_upgrade_anti_gravity')
    event.create('shh:incomplete_upgrade_blackstone')
        .texture('shh:item/incomplete_upgrade_blackstone')
    event.create('shh:incomplete_upgrade_cleanse')
        .texture('shh:item/incomplete_upgrade_cleanse')
    event.create('shh:incomplete_upgrade_corrosion')
        .texture('shh:item/incomplete_upgrade_corrosion')
    event.create('shh:incomplete_upgrade_curse')
        .texture('shh:item/incomplete_upgrade_curse')
    event.create('shh:incomplete_upgrade_damage')
        .texture('shh:item/incomplete_upgrade_damage')
    event.create('shh:incomplete_upgrade_double_charge')
        .texture('shh:item/incomplete_upgrade_double_charge')
    event.create('shh:incomplete_upgrade_explosion')
        .texture('shh:item/incomplete_upgrade_explosion')
    event.create('shh:incomplete_upgrade_explosion_breaker')
        .texture('shh:item/incomplete_upgrade_explosion_breaker')
    event.create('shh:incomplete_upgrade_flux_up')
        .texture('shh:item/incomplete_upgrade_flux_up')
    event.create('shh:incomplete_upgrade_frozen')
        .texture('shh:item/incomplete_upgrade_frozen')
    event.create('shh:incomplete_upgrade_glow')
        .texture('shh:item/incomplete_upgrade_glow')
    event.create('shh:incomplete_upgrade_glowing')
        .texture('shh:item/incomplete_upgrade_glowing')
    event.create('shh:incomplete_upgrade_harm')
        .texture('shh:item/incomplete_upgrade_harm')
    event.create('shh:incomplete_upgrade_heal')
        .texture('shh:item/incomplete_upgrade_heal')
    event.create('shh:incomplete_upgrade_levitate')
        .texture('shh:item/incomplete_upgrade_levitate')
    event.create('shh:incomplete_upgrade_levitation')
        .texture('shh:item/incomplete_upgrade_levitation')
    event.create('shh:incomplete_upgrade_magnify_x2')
        .texture('shh:item/incomplete_upgrade_magnify_x2')
    event.create('shh:incomplete_upgrade_magnify_x4')
        .texture('shh:item/incomplete_upgrade_magnify_x4')
    event.create('shh:incomplete_upgrade_magnify_x8')
        .texture('shh:item/incomplete_upgrade_magnify_x8')
    event.create('shh:incomplete_upgrade_poison')
        .texture('shh:item/incomplete_upgrade_poison')
    event.create('shh:incomplete_upgrade_punch')
        .texture('shh:item/incomplete_upgrade_punch')
    event.create('shh:incomplete_upgrade_railgun')
        .texture('shh:item/incomplete_upgrade_railgun')
    event.create('shh:incomplete_upgrade_slowness')
        .texture('shh:item/incomplete_upgrade_slowness')
    event.create('shh:incomplete_upgrade_soul_fire')
        .texture('shh:item/incomplete_upgrade_soul_fire')
    event.create('shh:incomplete_upgrade_super_damage')
        .texture('shh:item/incomplete_upgrade_super_damage')
    event.create('shh:incomplete_upgrade_void')
        .texture('shh:item/incomplete_upgrade_void')
    event.create('shh:incomplete_upgrade_weak')
        .texture('shh:item/incomplete_upgrade_weak')
    event.create('shh:incomplete_upgrade_wither')
        .texture('shh:item/incomplete_upgrade_wither')
})


ItemEvents.modification(event => {
    event.modify('shh:hulibugulv', item => {
        item.setAttributeModifiersWithTooltip(
            item
                .item()
                .defaultAttributeModifiers
                .withModifierAdded(
                    "minecraft:generic.attack_damage",
                    {
                        "operation": 0,
                        "amount": 5,
                        "id": "minecraft:base_attack_damage"
                    },
                    "mainhand"
                ).modifiers()
        );
    })
})

StartupEvents.registry('creative_mode_tab', event => {
    event.create('shh:shh_stuffs')
        .content(() => ['shh:etihw', 'shh:hulibugulv', 'shh:chimings_sword', 'shh:maid_tool'])
        .translationKey('itemGroup.shh.shh_stuffs')
        .icon(() => 'shh:etihw')
})