/**
 * @file 食物注药脚本
 * @description 允许玩家使用注液器将流体中的药水效果添加到食物上。
 * @author ShrHang
 * @deprecated 已经用模组实现了该脚本的功能。
 */
// requires: kubejs_create
// ignored: true
CreateEvents.spoutHandler(event => {
    function compare(set, effect) {
        let key = [
            effect.getEffect().unwrapKey().get().location(),
            effect.getAmplifier(),
            effect.getDuration(),
            effect.isVisible()
        ].join("|");
        if (set.has(key)) return true;
        set.add(key);
        return false;
    }
    event.add("shh:filling_potion", "create:depot", (block, fluid, simulate) => {
        // 配方开始条件
        if (fluid.amount >= 250 && fluid.components.has("minecraft:potion_contents")) {
            let inventory = block.getInventory();
            if (!inventory.isEmpty()) { // 工作区有物品
                if (inventory.getStackInSlot(0).hasTag("c:foods") || !inventory.getStackInSlot(0).hasTag("c:foods/edible_when_placed")) { // 物品是食物

                    let potionComp = fluid.components.get("minecraft:potion_contents");
                    // 获取流体的药水效果组件
                    let comp = inventory.getStackInSlot(0).copy().components;
                    // 获取食物的组件
                    let seen = new Set();
                    let newComp;
                    if (comp.has("minecraft:potion_contents")) { // 食物已经有药水效果
                        newComp = comp.copy().get("minecraft:potion_contents");
                        comp.get("minecraft:potion_contents").allEffects.forEach(effect => {
                            if (compare(seen, effect)) return; // 已经有这个效果就跳过
                        })
                        let length = seen.size;
                        potionComp.allEffects.forEach(effect => {
                            if (compare(seen, effect)) return; // 已经有这个效果就跳过
                            newComp = newComp.withEffectAdded(effect); // 添加新的效果
                        })
                        if (seen.size == length) return 0; // 没有添加新的效果，就不执行
                    } else {
                        newComp = new PotionContents("minecraft:mundane");
                        potionComp.allEffects.forEach(effect => {
                            if (compare(seen, effect)) return; // 已经有这个效果就跳过
                            newComp = newComp.withEffectAdded(effect); // 添加新的效果
                        });
                        if (seen.size == 0) return 0; // 没有添加新的效果，就不执行
                    }

                    // 配方执行区域
                    if (!simulate) { // 非模拟状态下执行
                        let output = inventory.extractItem(0, 1, simulate); // 取出食物
                        output.components.set("minecraft:potion_contents", newComp); // 设置新的药水效果组件

                        output = inventory.insertItem(output, simulate); // 尝试放回工作区

                        if (output.count > 0) { // 放不下就准备放入输出缓冲区
                            let itemNBT = output.toNBT();
                            let data = block.getEntityData().copy();
                            let items = data.getCompound("OutputBuffer").get("Items");
                            let listItems = [];
                            if (items.size() > 0) {
                                for (let i = 0; i < items.size(); i++) {
                                    let it = items.get(i);
                                    let comp1 = it.get("components") || "SHH";
                                    let comp2 = itemNBT.get("components") || "SHH";
                                    if (it.getString("id") == itemNBT.getString("id") && comp1.toString() == comp2.toString() && Item.of(it.getString("id")).maxStackSize > it.getInt("count")) {
                                        data.getCompound("OutputBuffer").get("Items").get(i).putInt("count", it.getInt("count") + 1);
                                        output.count--;
                                        break;
                                    }
                                    listItems.push(it.toString());
                                }
                                block.setEntityData(data);
                            }
                            if (output.count > 0) { // 扩容缓冲区
                                if (items.size() < 8) {
                                    listItems.push(`{Slot:${items.size()},` + itemNBT.toString().substring(1)); // 删去nbt开头的 “{”，使其能与字符串拼接。
                                    block.getLevel().server.runCommandSilent(`data modify block ${block.pos.x} ${block.pos.y} ${block.pos.z} OutputBuffer.Items set value [${listItems.join(",")}]`);
                                } else block.popItem(output);
                            }
                        }

                    }
                    return 250; // 消耗250毫升流体
                }
            }
        }
        return 0;
    })
})
