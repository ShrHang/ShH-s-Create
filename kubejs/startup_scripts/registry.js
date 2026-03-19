/**
 * @file 物品、方块、流体等注册脚本
 * @see StartupEvents.registry
 */

StartupEvents.registry("item", event => {
    event.create("shh:etihw")
        .tooltip(Text.translate("text.shh.shh.etihw.tooltip"))
        .texture("shh:item/etihw")
        .rarity("epic")

    event.create("shh:hulibugulv")
        .tooltip(Text.translate("text.shh.shh.hulibugulv.tooltip"))
        .texture("shh:item/hulibugulv")
        .food(food => {
            food.nutrition(1)
            food.saturation(15)
            food.alwaysEdible()
            food.fastToEat()
            food.effect("minecraft:health_boost", 3600, 4, 1.0)
            food.effect("minecraft:absorption", 3600, 3, 1.0)
            food.effect("minecraft:regeneration", 400, 2, 1.0)
            food.effect("minecraft:instant_health", 1, 4, 1.0)
            food.removeEffect("minecraft:hunger")
            food.usingConvertsTo("minecraft:paper")
        })
        .maxStackSize(16)
        .rarity("epic")

    event.create("shh:chimings_sword", "sword")
        .maxStackSize(1)
        .maxDamage(1024)
        .rarity("epic")
        .tooltip(Text.translate("text.shh.shh.chimings_sword.tooltip"))
        .texture("shh:item/chimings_sword")

    event.create("shh:maid_tool")
        .maxStackSize(1)
        .rarity("epic")

    event.create("shh:reality_index_upgrade_orb")

    //#region 序列装配物品
    createSequencedAssemblyItem(event, "shh:incomplete_upgrade_advanced_infinity")
    createSequencedAssemblyItem(event, "shh:incomplete_upgrade_anti_gravity")
    createSequencedAssemblyItem(event, "shh:incomplete_upgrade_blackstone")
    createSequencedAssemblyItem(event, "shh:incomplete_upgrade_cleanse")
    createSequencedAssemblyItem(event, "shh:incomplete_upgrade_corrosion")
    createSequencedAssemblyItem(event, "shh:incomplete_upgrade_curse")
    createSequencedAssemblyItem(event, "shh:incomplete_upgrade_damage")
    createSequencedAssemblyItem(event, "shh:incomplete_upgrade_double_charge")
    createSequencedAssemblyItem(event, "shh:incomplete_upgrade_explosion")
    createSequencedAssemblyItem(event, "shh:incomplete_upgrade_explosion_breaker")
    createSequencedAssemblyItem(event, "shh:incomplete_upgrade_flux_up")
    createSequencedAssemblyItem(event, "shh:incomplete_upgrade_frozen")
    createSequencedAssemblyItem(event, "shh:incomplete_upgrade_glow")
    createSequencedAssemblyItem(event, "shh:incomplete_upgrade_glowing")
    createSequencedAssemblyItem(event, "shh:incomplete_upgrade_harm")
    createSequencedAssemblyItem(event, "shh:incomplete_upgrade_heal")
    createSequencedAssemblyItem(event, "shh:incomplete_upgrade_levitate")
    createSequencedAssemblyItem(event, "shh:incomplete_upgrade_levitation")
    createSequencedAssemblyItem(event, "shh:incomplete_upgrade_magnify_x2")
    createSequencedAssemblyItem(event, "shh:incomplete_upgrade_magnify_x4")
    createSequencedAssemblyItem(event, "shh:incomplete_upgrade_magnify_x8")
    createSequencedAssemblyItem(event, "shh:incomplete_upgrade_poison")
    createSequencedAssemblyItem(event, "shh:incomplete_upgrade_punch")
    createSequencedAssemblyItem(event, "shh:incomplete_upgrade_railgun")
    createSequencedAssemblyItem(event, "shh:incomplete_upgrade_slowness")
    createSequencedAssemblyItem(event, "shh:incomplete_upgrade_soul_fire")
    createSequencedAssemblyItem(event, "shh:incomplete_upgrade_super_damage")
    createSequencedAssemblyItem(event, "shh:incomplete_upgrade_void")
    createSequencedAssemblyItem(event, "shh:incomplete_upgrade_weak")
    createSequencedAssemblyItem(event, "shh:incomplete_upgrade_wither")
    //#endregion

    event.create("shh:unbreakable")
        .rarity("epic")
        .tooltip(Text.translate("text.shh.shh.unbreakable.tooltip"))

    createSpellBook(event, "shh:spell_book", 10, [
        { attribute: $AttributeRegistry.MAX_MANA, amount: 400, operation: 0 }
    ])
})

StartupEvents.registry("block", event => {
    event.create("shh:packages_transportation_unit")
        .tagBlock(["create:wrench_pickup"])
        .blockEntity(info => {
            info.inventory("shh", ["down", "east", "north", "south", "up", "west"], 1, 1, item => item.hasTag("create:packages"))
            info.tickFrequency(20)
            info.serverTicking()
        })

})

StartupEvents.registry("fluid", event => {
    event.create("shh:hostility")
        .tint(0xcc71ec)
        .noBlock()
        .noBucket()
})

StartupEvents.registry("creative_mode_tab", event => {
    event.create("shh:shh_stuffs")
        .content(() => ["shh:etihw", "shh:hulibugulv", "shh:chimings_sword", "shh:maid_tool"])
        .translationKey("itemGroup.shh.shh_stuffs")
        .icon(() => "shh:etihw")
})
