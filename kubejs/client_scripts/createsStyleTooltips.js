//#region 类加载
// Create
/** @type {import("com.simibubi.create.foundation.item.TooltipModifier")} */
const TooltipModifier = Java.loadClass("com.simibubi.create.foundation.item.TooltipModifier");
/** @type {import("net.createmod.catnip.lang.FontHelper")} */
const FontHelper = Java.loadClass("net.createmod.catnip.lang.FontHelper");
/** @type {import("com.simibubi.create.foundation.item.ItemDescription")} */
const ItemDescription = Java.loadClass("com.simibubi.create.foundation.item.ItemDescription");
/** @type {import("com.simibubi.create.foundation.item.KineticStats")} */
const KineticStats = Java.loadClass("com.simibubi.create.foundation.item.KineticStats");
// Minecraft
/** @type {import("net.minecraft.core.registries.BuiltInRegistries")} */
const BuiltInRegistries = Java.loadClass("net.minecraft.core.registries.BuiltInRegistries");
/** @type {import("net.minecraft.resources.ResourceLocation")} */
const ResourceLocation = Java.loadClass("net.minecraft.resources.ResourceLocation");
//#endregion

// 支持Create风格的Tooltip的物品列表
const idsForTooltipOfCreate = [
    'shh:chimings_sword',
    "shh:etihw",
    "shh:hulibugulv",
    "shh:maid_tool",
    "shh:unbreakable"
];

//#region 预先构建好TooltipModifier
const modifiersOfCreate = new Map();
function createModifier(id) {
    let item = BuiltInRegistries.ITEM.get(ResourceLocation.parse(id));
    if (item.toString() == "minecraft:air") return null;
    return new ItemDescription.Modifier(item, FontHelper.Palette.STANDARD_CREATE).andThen(TooltipModifier.mapNull(KineticStats.create(item)));
}
function rebuildModifiers() {
    modifiersOfCreate.clear();
    for (let id of idsForTooltipOfCreate) modifiersOfCreate.set(id, createModifier(id));
}
ItemEvents.modifyTooltips(event => rebuildModifiers())
//#endregion

// 最终渲染
NativeEvents.onEvent("net.neoforged.neoforge.event.entity.player.ItemTooltipEvent", event => {
    let modifier = modifiersOfCreate.get(String(event.getItemStack().id));
    if (modifier) modifier.modify(event);
})
