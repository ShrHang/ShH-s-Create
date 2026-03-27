const TooltipModifier = Java.loadClass("com.simibubi.create.foundation.item.TooltipModifier");
const FontHelper = Java.loadClass("net.createmod.catnip.lang.FontHelper");
const ItemDescription = Java.loadClass("com.simibubi.create.foundation.item.ItemDescription");
const KineticStats = Java.loadClass("com.simibubi.create.foundation.item.KineticStats");

ItemEvents.modifyTooltips(event => {
    console.log("正在添加提示信息...")

    // event.add("create:item_vault", Component.translate("text.shh.create.item_vault.tooltip"))

    event.add("create_enchantment_industry:super_experience_block", [
        Component.translate("text.shh.create_enchantment_industry.super_experience_block.tooltip_1"),
        Component.translate("text.shh.create_enchantment_industry.super_experience_block.tooltip_2")
    ])

    event.add("l2hostility:bottle_of_curse", [
        Component.translate("text.shh.l2hostility.bottle_of_curse.tooltip"),
        Component.translate("text.shh.l2hostility.bottle_of_curse.tooltip_maid")
    ])

    event.add("l2hostility:bottle_of_sanity", [
        Component.translate("text.shh.l2hostility.bottle_of_sanity.tooltip"),
        Component.translate("text.shh.l2hostility.bottle_of_sanity.tooltip_maid")
    ])

    event.add("l2hostility:miracle_block", Component.translate("text.shh.l2hostility.miracle_block.tooltip_maid"))

    event.add(
        "pandora:pandora_bracelet[pandora:backpack_content=[{item:{count:1,id:\"curseofpandora:curse_of_inertia\"},slot:0},{item:{count:1,id:\"curseofpandora:curse_of_proximity\"},slot:1},{item:{count:1,id:\"curseofpandora:curse_of_flesh\"},slot:2},{item:{count:1,id:\"curseofpandora:curse_of_metabolism\"},slot:3},{item:{count:1,id:\"curseofpandora:curse_of_tension\"},slot:4},{item:{count:1,id:\"curseofpandora:curse_of_prudence\"},slot:5},{item:{count:1,id:\"curseofpandora:curse_of_spell\"},slot:6}]]",
        Component.translate("text.shh.pandora_bracelet_init.tooltip")
    )
    event.add(
        "pandora:pandora_necklace[pandora:backpack_content=[{item:{count:1,id:\"curseofpandora:curse_of_inertia\"},slot:0},{item:{count:1,id:\"curseofpandora:curse_of_proximity\"},slot:1},{item:{count:1,id:\"curseofpandora:curse_of_flesh\"},slot:2},{item:{count:1,id:\"curseofpandora:curse_of_metabolism\"},slot:3},{item:{count:1,id:\"curseofpandora:curse_of_tension\"},slot:4},{item:{count:1,id:\"curseofpandora:curse_of_prudence\"},slot:5},{item:{count:1,id:\"curseofpandora:curse_of_spell\"},slot:6}]]",
        Component.translate("text.shh.pandora_necklet_init.tooltip")
    )

    event.add("#shh:ban", Component.translate("text.shh.common.tooltip.ban"))
    event.add("l2archery:upgrade[l2archery:item_upgrade=\"l2archery:explosion_breaker\"]", Component.translate("text.shh.common.tooltip.ban"))
})

const createTooltipIds = new Set([
    'shh:chimings_sword',
    "shh:etihw",
    "shh:hulibugulv",
    "shh:maid_tool",
    "shh:unbreakable"
]);

NativeEvents.onEvent("net.neoforged.neoforge.event.entity.player.ItemTooltipEvent", event => {
    let item = event.getItemStack().getItem();
    if (createTooltipIds.has(String(event.getItemStack().id))) {
        let kinetic = TooltipModifier.mapNull(KineticStats.create(item));
        new ItemDescription.Modifier(item, FontHelper.Palette.STANDARD_CREATE).andThen(kinetic).modify(event);
    }
})
