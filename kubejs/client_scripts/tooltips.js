ItemEvents.modifyTooltips(event => {
    //#region 基础物品描述
    event.add("#shh:ban", Component.translate("text.shh.common.tooltip.ban"))
    event.add("l2archery:upgrade[l2archery:item_upgrade=\"l2archery:explosion_breaker\"]", Component.translate("text.shh.common.tooltip.ban"))
    //#endregion
})
