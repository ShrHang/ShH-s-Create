/** @type {import("net.minecraft.client.KeyMapping")} */
const KEY_QUESTS = Java.loadClass("dev.ftb.mods.ftbquests.client.FTBQuestsKeyMappings").KEY_QUESTS;

ItemEvents.modifyTooltips(event => {
    //#region 基础物品描述
    event.add("#shh:ban", Component.translate("text.shh.common.tooltip.ban").darkRed())
    event.add("l2archery:upgrade[l2archery:item_upgrade=\"l2archery:explosion_breaker\"]", Component.translate("text.shh.common.tooltip.ban").darkRed())
    event.add('ftbquests:book', Component.translate("text.shh.common.tooltip.youcanalso",Component.translate("text.shh.common.tooltip.press_key_to", KEY_QUESTS.getTranslatedKeyMessage().white(), KEY_QUESTS.getDisplayName().white())).gray())
    //#endregion
    rebuildModifiers();
})