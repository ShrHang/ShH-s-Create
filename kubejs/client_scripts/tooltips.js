/**
 * @file 物品Tooltip
 * @author ShrHang
 */
//#region 类加载
// Create
/** @type {import("com.simibubi.create.foundation.item.TooltipModifier")} */
const $TooltipModifier=Java.loadClass("com.simibubi.create.foundation.item.TooltipModifier");
/** @type {import("net.createmod.catnip.lang.FontHelper")} */const $FontHelper=Java.loadClass("net.createmod.catnip.lang.FontHelper");
/** @type {import("com.simibubi.create.foundation.item.ItemDescription")} */const $ItemDescription=Java.loadClass("com.simibubi.create.foundation.item.ItemDescription");
/** @type {import("com.simibubi.create.foundation.item.KineticStats")} */const $KineticStats=Java.loadClass("com.simibubi.create.foundation.item.KineticStats");
// FTB Quests
const $FTBQuestsKeyMappings=Java.loadClass("dev.ftb.mods.ftbquests.client.FTBQuestsKeyMappings");
// Minecraft
/** @type {import("net.minecraft.core.registries.BuiltInRegistries")} */const $BuiltInRegistries=Java.loadClass("net.minecraft.core.registries.BuiltInRegistries");
/** @type {import("net.minecraft.resources.ResourceLocation")} */const $ResourceLocation=Java.loadClass("net.minecraft.resources.ResourceLocation");
/** @type {import("net.neoforged.neoforge.event.entity.player.ItemTooltipEvent")} */const $ItemTooltipEvent=Java.loadClass("net.neoforged.neoforge.event.entity.player.ItemTooltipEvent");
//#endregion
// 支持Create风格的Tooltip的物品列表
const idsForTooltipOfCreate=["l2hostility:bottle_of_curse","l2hostility:bottle_of_sanity","l2hostility:miracle_block","shh:chimings_sword","shh:etihw","shh:hulibugulv","shh:maid_tool","shh:unbreakable"];
//#region 预先构建好TooltipModifier
const modifiers=new Map;function createModifier(id){let rl=$ResourceLocation.tryParse(id);if(!$BuiltInRegistries.ITEM.containsKey(rl))return null;let item=$BuiltInRegistries.ITEM.get(rl);return new $ItemDescription.Modifier(item,$FontHelper.Palette.STANDARD_CREATE).andThen($TooltipModifier.mapNull($KineticStats.create(item)))}function rebuildModifiers(){modifiers.clear();for(let id of idsForTooltipOfCreate){let modifier=createModifier(id);if(modifier)modifiers.set(id,modifier)}}
//#endregion
// 最终渲染
NativeEvents.onEvent($ItemTooltipEvent,event=>{let stack=event.getItemStack();let itemId=String(stack.id);let modifier=modifiers.get(itemId);if(modifier)modifier.modify(event);if(itemId=="ftbquests:book"){let mapping=$FTBQuestsKeyMappings.KEY_QUESTS;let key=mapping.getTranslatedKeyMessage();let displayName=mapping.getDisplayName();event.getToolTip().add(Component.translate("text.shh.common.tooltip.youcanalso").gray().append(Component.translate("text.shh.common.tooltip.press_key_to",key.white(),displayName.white())))}});ItemEvents.modifyTooltips(event=>{
//#region 基础物品描述
event.add("#shh:ban",Component.translate("text.shh.common.tooltip.ban").darkRed());event.add('l2archery:upgrade[l2archery:item_upgrade="l2archery:explosion_breaker"]',Component.translate("text.shh.common.tooltip.ban").darkRed());event.add("l2hostility:miracle_powder",Component.translate("text.shh.miracle_powder.tooltip.pom").withColor(5686931));event.add("minecraft:player_head",Component.translate("text.shh.player_head.tooltip.get").gray());event.add("create:limestone",Component.translate("text.shh.common.tooltip.fluidmetfluid",Component.translatable("block.minecraft.lava").withColor(13452297),Component.translatable("block.create.honey").withColor(15380016)).gray());event.add("create:scoria",Component.translate("text.shh.common.tooltip.fluidmetfluid",Component.translatable("block.minecraft.lava").withColor(13452297),Component.translatable("block.create.chocolate").withColor(10438971)).gray());
//#endregion
rebuildModifiers()});
