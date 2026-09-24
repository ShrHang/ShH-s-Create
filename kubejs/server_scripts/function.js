/** @description 自定义函数 */
/**
 * @summary 创建一个机械动力的“部署”配方
 * @param {import("@package/dev/latvian/mods/kubejs/recipe").$RecipesKubeEvent} event
 * @param {Special.Item} target 物品id，表示被放置的物品
 * @param {Special.Item | Special.ItemTag} held 物品id或标签，表示被持有的物品
 * @param {Special.Item} output 物品id，表示配方的输出物品
 * @param {boolean} [isKeepItem] 是否保留被持有的物品，默认为false
 */
function createDeploying(event,target,held,output,isKeepItem){isKeepItem=isKeepItem||false;if(held.startsWith("#")){event.custom({type:"create:deploying",ingredients:[{item:target},{tag:held.substring(1)}],keep_held_item:isKeepItem,results:[{id:output}]})}else event.custom({type:"create:deploying",ingredients:[{item:target},{item:held}],keep_held_item:isKeepItem,results:[{id:output}]})}function createItemApplication(event,target,held,output){if(held.startsWith("#")){event.custom({type:"create:item_application",ingredients:[{item:target},{tag:held.substring(1)}],results:[{id:output}]})}else event.custom({type:"create:item_application",ingredients:[{item:target},{item:held}],results:[{id:output}]})}
/**
 * @description 微缩信标注液
 * @param {import("@package/dev/latvian/mods/kubejs/recipe").$RecipesKubeEvent} event
 * @param {string} name
 * @param {string} potion
 */function fillingMiniBeacon(event,name,potion){event.remove({output:"curseofpandora:mini_beacon_"+name});event.custom({type:"create:filling",ingredients:[{item:"curseofpandora:mini_beacon"},{type:"fluid_stack",amount:500,components:{"create:potion_fluid_bottle_type":"regular","minecraft:potion_contents":{potion}},fluid:"create:potion"}],results:[{id:"curseofpandora:mini_beacon_"+name}]})}
