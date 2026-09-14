/** @description 注册脚本 */
StartupEvents.registry("item", (event) => {
    event.create("shh:etihw").texture("shh:item/etihw").rarity("uncommon");
    event
        .create("shh:hulibugulv")
        .texture("shh:item/hulibugulv")
        .food((food) => {
            food.nutrition(1);
            food.saturation(15);
            food.alwaysEdible();
            food.fastToEat();
            food.effect("minecraft:health_boost", 3600, 4, 1);
            food.effect("minecraft:absorption", 3600, 3, 1);
            food.effect("minecraft:regeneration", 400, 2, 1);
            food.effect("minecraft:instant_health", 1, 4, 1);
            food.removeEffect("minecraft:hunger");
            food.usingConvertsTo("minecraft:paper");
        })
        .maxStackSize(16)
        .rarity("rare");
    event
        .create("shh:chimings_sword", "sword")
        .maxStackSize(1)
        .maxDamage(1024)
        .rarity("epic")
        .texture("shh:item/chimings_sword");
    event.create("shh:maid_tool").maxStackSize(1).rarity("epic");
    event.create("shh:reality_index_upgrade_orb");
    //#region 序列装配物品
    for (let type of l2archeryUpgradeTypes) {
        createSequencedAssemblyItem(event, `shh:incomplete_upgrade_${type}`);
    }
    //#endregion
    event
        .create("shh:unbreakable")
        .use((level, player, hand) => {
            let item =
                hand != "MAIN_HAND" ? player.mainHandItem : player.offHandItem;
            let self =
                hand == "MAIN_HAND" ? player.mainHandItem : player.offHandItem;
            if (
                item.hasTag("minecraft:enchantable/durability") &&
                !item.has("minecraft:unbreakable")
            ) {
                item.setUnbreakableWithTooltip();
                item.setDamage(0);
                if (!player.isCreative()) self.shrink(1);
                return true;
            }
            return false;
        })
        .rarity("epic");
    createSpellBook(event, "shh:spell_book", 10, [
        { attribute: $AttributeRegistry.MAX_MANA, amount: 400, operation: 0 },
    ]);
});
StartupEvents.registry("block", (event) => {
    event
        .create("shh:packages_transportation_unit")
        .tagBlock(["create:wrench_pickup"])
        .blockEntity((info) => {
            info.inventory(
                "shh",
                ["down", "east", "north", "south", "up", "west"],
                1,
                1,
                (item) => item.hasTag("create:packages"),
            );
            info.tickFrequency(20);
            info.serverTicking();
        });
});
StartupEvents.registry("mob_effect", (event) => {
    event
        .create("shh:flight")
        .color(16777215)
        .modifyAttribute(
            "neoforge:creative_flight",
            "shh:flight_effect",
            1,
            "add_value",
        );
});
StartupEvents.registry("potion", (event) => {
    event
        .create("shh:haste")
        .addEffect(
            new $MobEffectInstance("minecraft:haste", 3600, 0, false, true),
        );
    event
        .create("shh:long_haste")
        .addEffect(
            new $MobEffectInstance("minecraft:haste", 9600, 0, false, true),
        );
    event
        .create("shh:strong_haste")
        .addEffect(
            new $MobEffectInstance("minecraft:haste", 1800, 1, false, true),
        );
    event
        .create("shh:flight")
        .addEffect(new $MobEffectInstance("shh:flight", 12e3, 0, false, true));
    event
        .create("shh:long_flight")
        .addEffect(new $MobEffectInstance("shh:flight", -1, 0, false, true));
});
NativeEvents.onEvent($RegisterBrewingRecipesEvent, (event) => {
    event.builder.addMix("minecraft:awkward", "minecraft:quartz", "shh:haste");
    event.builder.addMix(
        "shh:haste",
        "minecraft:redstone",
        "shh:long_haste",
    );
    event.builder.addMix(
        "shh:haste",
        "minecraft:glowstone_dust",
        "shh:strong_haste",
    );
    event.builder.addMix(
        "minecraft:awkward",
        "curseofpandora:angelic_feather",
        "shh:flight",
    );
    event.builder.addMix("shh:flight", "minecraft:elytra", "shh:long_flight");
});
StartupEvents.modifyCreativeTab("shhs_create_core:default", (event) => {
    event.add("shh:etihw");
    event.add("shh:hulibugulv");
    event.add("shh:maid_tool");
    event.add("shh:reality_index_upgrade_orb");
    event.setIcon("shh:etihw");
});
