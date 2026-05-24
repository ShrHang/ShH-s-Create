ItemEvents.firstRightClicked("shh:unbreakable", event => {
    let player = event.player;
    let hand = event.hand;
    let item = hand != "MAIN_HAND" ? player.mainHandItem : player.offHandItem;
    if (item.hasTag("minecraft:enchantable/durability") && !item.has("minecraft:unbreakable")) {
        item.setUnbreakableWithTooltip();
        item.setDamage(0);
        if (!player.isCreative()) event.item.shrink(1);
    }
})
