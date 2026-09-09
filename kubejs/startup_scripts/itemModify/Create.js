/**
 * @file 修改物品属性
 */
// requires: create
ItemEvents.modification(event=>{
//#region  扳手
event.modify("create:wrench",item=>{addAttModifiers(item,[{attribute:"minecraft:generic.attack_damage",amount:9,id:AttackDamage,slot:"mainhand"},{attribute:"minecraft:generic.attack_speed",amount:-1,id:AttackSpeed,slot:"mainhand"}])});
//#endregion
//#region  铜潜水套装
// 铜潜水头盔
event.modify("create:copper_diving_helmet",item=>{addAttModifiers(item,[{attribute:"minecraft:generic.armor",amount:4,id:"shh_armor:head",slot:"head"},{attribute:"irons_spellbooks:lightning_spell_power",amount:.05,id:"shh_lightning_spell_power:head",slot:"head",condition:Platform.isLoaded("irons_spellbooks")}])});
// 铜背罐
event.modify("create:copper_backtank",item=>{addAttModifiers(item,[{attribute:"minecraft:generic.armor",amount:4,id:"shh_armor:chest",slot:"chest"},{attribute:"irons_spellbooks:lightning_spell_power",amount:.05,id:"shh_lightning_spell_power:chest",slot:"chest",condition:Platform.isLoaded("irons_spellbooks")}])});
// 铜潜水靴
event.modify("create:copper_diving_boots",item=>{addAttModifiers(item,[{attribute:"minecraft:generic.armor",amount:4,id:"shh_armor:feet",slot:"feet"},{attribute:"irons_spellbooks:lightning_spell_power",amount:.05,id:"shh_lightning_spell_power:feet",slot:"feet",condition:Platform.isLoaded("irons_spellbooks")}])});
//#endregion
//#region  下界合金潜水套装
// 下界合金潜水头盔
event.modify("create:netherite_diving_helmet",item=>{addAttModifiers(item,[{attribute:"minecraft:generic.armor",amount:5,id:"shh_armor:head",slot:"head"},{attribute:"minecraft:generic.armor_toughness",amount:1,id:"shh_armor_toughness:head",slot:"head"},{attribute:"l2damagetracker:damage_reduction",amount:-.05,id:"shh_l2_damage_reduction:head",slot:"head",condition:Platform.isLoaded("l2damagetracker")}])});
// 下界合金背罐
event.modify("create:netherite_backtank",item=>{addAttModifiers(item,[{attribute:"minecraft:generic.armor",amount:5,id:"shh_armor:chest",slot:"chest"},{attribute:"minecraft:generic.armor_toughness",amount:5,id:"shh_armor_toughness:chest",slot:"chest"},{attribute:"l2damagetracker:damage_reduction",amount:-.05,id:"shh_l2_damage_reduction:chest",slot:"chest",condition:Platform.isLoaded("l2damagetracker")}])});
// 下界合金潜水靴
event.modify("create:netherite_diving_boots",item=>{addAttModifiers(item,[{attribute:"minecraft:generic.armor",amount:5,id:"shh_armor:feet",slot:"feet"},{attribute:"minecraft:generic.armor_toughness",amount:1,id:"shh_armor_toughness:feet",slot:"feet"},{attribute:"l2damagetracker:damage_reduction",amount:-.05,id:"shh_l2_damage_reduction:feet",slot:"feet",condition:Platform.isLoaded("l2damagetracker")}])});
//#endregion
//#region  纸板套装
pieceSlot.forEach(ps=>{event.modify(`create:cardboard_${ps.piece}`,item=>{addAttModifiers(item,[{attribute:"minecraft:player.sneaking_speed",amount:.15,id:`shh_sneaking_speed:${ps.slot}`,slot:ps.slot}])})});
//#endregion
});
