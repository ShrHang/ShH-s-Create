/**
 * @file 物品、方块、流体等注册脚本
 * @see StartupEvents.registry
 */

StartupEvents.registry("item", event => {
    event.create("shh:etihw")
        .texture("shh:item/etihw")
        .rarity("epic")

    event.create("shh:hulibugulv")
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
        .texture("shh:item/chimings_sword")

    event.create("shh:maid_tool")
        .maxStackSize(1)
        .rarity("epic")

    event.create("shh:reality_index_upgrade_orb")

    //#region 序列装配物品
    for (let type of l2archeryUpgradeTypes) {
        createSequencedAssemblyItem(event, `shh:incomplete_upgrade_${type}`)
    }
    //#endregion

    event.create("shh:unbreakable")
        .use((level, player, hand) => {
            let item = hand != "MAIN_HAND" ? player.mainHandItem : player.offHandItem;
            let self = hand == "MAIN_HAND" ? player.mainHandItem : player.offHandItem;
            if (item.hasTag("minecraft:enchantable/durability") && !item.has("minecraft:unbreakable")) {
                item.setUnbreakableWithTooltip();
                item.setDamage(0);
                if (!player.isCreative()) self.shrink(1);
                return true;
            }
            return false;
        })
        .rarity("epic")

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

/**
 * @deprecated 已移交 ShH's Create: Core。
 */
// StartupEvents.registry("fluid", event => {
//     event.create("shh:hostility")
//         .tint(0xcc71ec)
//         .noBlock()
//         .noBucket()
// })

StartupEvents.registry("creative_mode_tab", event => {
    event.create("shh:shh_stuffs")
        .content(() => ["shh:etihw", "shh:hulibugulv", "shh:maid_tool"])
        .translationKey("itemGroup.shh.shh_stuffs")
        .icon(() => "shh:etihw")
})
