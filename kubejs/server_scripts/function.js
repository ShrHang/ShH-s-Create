/**
 * @file 自定义函数
 */

/**
 * @summary 创建一个机械动力的“部署”配方
 * @param {import("dev.latvian.mods.kubejs.recipe.RecipesKubeEvent").$RecipesKubeEvent} event 
 * @param {Special.Item} target 物品id，表示被放置的物品
 * @param {Special.Item | Special.ItemTag} held 物品id或标签，表示被持有的物品
 * @param {Special.Item} output 物品id，表示配方的输出物品
 * @param {boolean} [isKeepItem ] 是否保留被持有的物品，默认为false
 */
function createDeploying(event, target, held, output, isKeepItem) {
    isKeepItem = isKeepItem || false;
    if (held.startsWith("#")) {
        held = held.substring(1);
        event.custom({
            type: "create:deploying",
            ingredients: [{ item: target }, { tag: held }],
            keep_held_item: isKeepItem,
            results: [{ id: output }]
        });
    } else
        event.custom({
            type: "create:deploying",
            ingredients: [{ item: target }, { item: held }],
            keep_held_item: isKeepItem,
            results: [{ id: output }]
        });
}