/**
 * @file 调试用的脚本
 */
// ignored: true
const $StructureUtils=Java.loadClass("com.chaosthedude.explorerscompass.util.StructureUtils");const $BiomeUtils=Java.loadClass("com.chaosthedude.naturescompass.util.BiomeUtils");PlayerEvents.chat(event=>{let player=event.player;let message=event.message;if(message=="ts"){}if(message=="tt"){}if(message=="ed"){let enderChestContainer=player.enderChestInventory;player.openMenu(new SimpleMenuProvider((id,inventory,player)=>ChestMenu.threeRows(id,inventory,enderChestContainer),Component.translatable("container.enderchest")));event.cancel()}});ServerEvents.recipes(event=>{event.printAllTypes()});
