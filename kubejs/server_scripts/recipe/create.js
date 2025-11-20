/*
const DepotBE = Java.loadClass('com.simibubi.create.content.logistics.depot.DepotBlockEntity');
const SpoutBE = Java.loadClass('com.simibubi.create.content.fluids.spout.SpoutBlockEntity');
const BlockPos = Java.loadClass('net.minecraft.core.BlockPos');
const Direction = Java.loadClass('net.minecraft.core.Direction');
const trackedSpouts = new Map();
function posKey(level, pos) { return level.dimension().location().toString() + `|${pos.getX()},${pos.getY()},${pos.getZ()}`; }
function isTargetStack(stack) { return stack && !stack.empty && stack.id === 'mymod:empty_capsule'; }
function appendComponentsPreservingAll(original) {
    const out = original.copy();
    if (typeof out.withComponents === 'function') {
        out.withComponents(comp => {
            const prev = comp.get('minecraft:custom_data') || {};
            prev.MyFlag = 1;
            prev.Timestamp = Date.now();
            comp.set('minecraft:custom_data', prev);
        });
        return out;
    }
    const nbt = out.nbt || {};
    nbt.CustomData = nbt.CustomData || {};
    nbt.CustomData.MyFlag = 1;
    nbt.CustomData.Timestamp = Date.now();
    out.nbt = nbt;

    return out;
}
function tryDrainSpoutFluid(spoutBE, milliBuckets) {
    try {
        // 尝试通过常见能力访问（KubeJS 可能提供简化方法，如 be.getFluidHandler()）
        const IFluidHandler = Java.loadClass('net.neoforged.neoforge.fluids.capability.IFluidHandler');
        // 某些环境可以：spoutBE.getCapability(IFluidHandlerClass)；若不可用可注释掉
        const handler = spoutBE['getCapability'] ? spoutBE.getCapability(IFluidHandler.class) : null;
        if (handler && handler.present) {
            const drained = handler.orElse(null).drain(milliBuckets,
            Java.loadClass('net.neoforged.neoforge.fluids.capability.IFluidHandler$FluidAction').EXECUTE);
            return drained && !drained.isEmpty();
        }
    } catch (err) {
        // 能力通道不可用就跳过，不阻塞主流程
    }
    return false;
}
BlockEvents.placed(event => {
    if (event.block.id !== 'create:spout') return;
    const k = posKey(event.level, event.block.pos);
    trackedSpouts.set(k, { dim: event.level.dimension(), x: event.block.x, y: event.block.y, z: event.block.z, lastMark: -1, lastOpGameTime: 0 });
});
BlockEvents.broken(event => {
    if (event.block.id !== 'create:spout') return;
    const k = posKey(event.level, event.block.pos);
    trackedSpouts.delete(k);
});
ServerEvents.tick(event => {
    if ((event.server.getOverworld().gameTime % 5) !== 0) return;

    for (const [k, rec] of trackedSpouts) {
        const level = event.server.getLevel(rec.dim);
        if (!level) continue;
        const pos = BlockPos.containing(rec.x, rec.y, rec.z);
        const be = level.getBlockEntity(pos);
        if (!(be instanceof SpoutBE)) continue;

        // 下方方块（Spout 正下方 1 格）
        const below = pos.relative(Direction.DOWN);
        const depotBE = level.getBlockEntity(below);
        if (!(depotBE instanceof DepotBE)) {
            // 不是 Depot，跳过
            rec.lastMark = -1;
            continue;
        }

        // Depot 顶面物品
        // DepotBlockEntity 对外 API 版本不同，这里用兼容方式探测：
        // 1) 若有 getHeldItem() / getHeldItemStack() 就用它；
        // 2) 否则尝试读取物品能力槽位 0；
        let stack = null;
        if (typeof depotBE.getHeldItem === 'function') stack = depotBE.getHeldItem();
        else if (typeof depotBE.getHeldItemStack === 'function') stack = depotBE.getHeldItemStack();
        else if (typeof depotBE.getItem === 'function') stack = depotBE.getItem(0);
        if (!stack || stack.empty) { rec.lastMark = -1; continue; }

        if (!isTargetStack(stack)) { rec.lastMark = -1; continue; }

        // 读取 Spout 进度
        const FILLING_TIME = SpoutBE.FILLING_TIME; // static
        const progress = be.processingTicks | 0;   // 当前进度（tick）
        // 以“从 FILLING_TIME-1 → 0 的回落”为“完成瞬间”信号，避免多次触发
        const nearlyDone = progress >= (FILLING_TIME - 1);
        const gameTime = level.gameTime;

        if (nearlyDone && rec.lastMark < (FILLING_TIME - 1)) {
            // 即将完成：在本 tick 做一次“自定义注入”操作
            const out = appendComponentsPreservingAll(stack);

            // 回写到 Depot 顶面
            if (typeof depotBE.setHeldItem === 'function') depotBE.setHeldItem(out);
            else if (typeof depotBE.setItem === 'function') depotBE.setItem(0, out);

            // （可选）消耗流体（例：消耗 250 mB）
            // tryDrainSpoutFluid(be, 250);

            rec.lastOpGameTime = gameTime;
        }

        rec.lastMark = progress;
    }
});
*/

if (Platform.isLoaded('create')) {
    ServerEvents.recipes(event => {

        // Compacting Recipes
        {
            event.custom({
                type: "create:compacting",
                ingredients: [
                    { item: "minecraft:cobblestone" },
                    {
                        type: "neoforge:single",
                        amount: 250,
                        fluid: "minecraft:lava"
                    }
                ],
                results: [{ id: "minecraft:deepslate" }]
            })
            event.custom({
                type: "create:compacting",
                ingredients: [
                    { item: "minecraft:cobblestone" },
                    {
                        type: "neoforge:single",
                        amount: 250,
                        fluid: "minecraft:water"
                    }
                ],
                results: [{ id: "minecraft:tuff" }]
            })
            event.custom({
                type: "create:compacting",
                ingredients: [
                    { item: "minecraft:dripstone_block" },
                    { item: "minecraft:bone_meal" },
                    { item: "minecraft:bone_meal" },
                    { item: "minecraft:bone_meal" },
                    { item: "minecraft:blaze_powder" },
                    { item: "minecraft:blaze_powder" },
                    { item: "minecraft:blaze_powder" },
                    {
                        type: "neoforge:single",
                        amount: 250,
                        fluid: "minecraft:water"
                    }
                ],
                results: [{ id: "minecraft:calcite" }]
            })
            event.custom({
                type: "create:compacting",
                heat_requirement: "heated",
                ingredients: [
                    { item: "minecraft:coal_block" },
                    { item: "minecraft:coal_block" },
                    { item: "minecraft:coal_block" },
                    { item: "minecraft:coal_block" },
                    { item: "minecraft:coal_block" },
                    { item: "minecraft:coal_block" },
                    { item: "minecraft:coal_block" },
                    { item: "minecraft:coal_block" },
                    { item: "minecraft:coal_block" },
                    { item: "minecraft:coal_block" },
                    { item: "minecraft:coal_block" },
                    { item: "minecraft:coal_block" },
                    { item: "minecraft:coal_block" },
                    { item: "minecraft:coal_block" },
                    { item: "minecraft:coal_block" },
                    { item: "minecraft:coal_block" },
                    {
                        type: "neoforge:single",
                        amount: 500,
                        fluid: "minecraft:lava"
                    }
                ],
                results: [{ id: "minecraft:diamond" }]
            })
            event.custom({
                type: "create:compacting",
                ingredients: [
                    { item: "create:zinc_nugget" },
                    { item: "create:zinc_nugget" },
                    { item: "create:zinc_nugget" },
                    { item: "create:zinc_nugget" },
                    { item: "minecraft:gravel" },
                    {
                        type: "neoforge:single",
                        amount: 1000,
                        fluid: "minecraft:water"
                    }
                ],
                results: [{ id: "create:asurine" }]
            })
            event.custom({
                type: "create:compacting",
                ingredients: [
                    { item: "minecraft:iron_nugget" },
                    { item: "minecraft:iron_nugget" },
                    { item: "minecraft:iron_nugget" },
                    { item: "minecraft:iron_nugget" },
                    { item: "minecraft:gravel" },
                    {
                        type: "neoforge:single",
                        amount: 1000,
                        fluid: "minecraft:water"
                    }
                ],
                results: [{ id: "create:crimsite" }]
            })
            event.custom({
                type: "create:compacting",
                ingredients: [
                    { item: "minecraft:gold_nugget" },
                    { item: "minecraft:gold_nugget" },
                    { item: "minecraft:gold_nugget" },
                    { item: "minecraft:gold_nugget" },
                    { item: "minecraft:gravel" },
                    {
                        type: "neoforge:single",
                        amount: 1000,
                        fluid: "minecraft:water"
                    }
                ],
                results: [{ id: "create:ochrum" }]
            })
            event.custom({
                type: "create:compacting",
                ingredients: [
                    { item: "create:copper_nugget" },
                    { item: "create:copper_nugget" },
                    { item: "create:copper_nugget" },
                    { item: "create:copper_nugget" },
                    { item: "minecraft:gravel" },
                    {
                        type: "neoforge:single",
                        amount: 1000,
                        fluid: "minecraft:water"
                    }
                ],
                results: [{ id: "create:veridium" }]
            })
        }
        // Crushing Recipes
        {
            event.custom({
                type: "create:crushing",
                ingredients: [{ tag: "c:material/netherite" }],
                processing_time: 750,
                results: [{ id: "minecraft:netherite_scrap" }]
            })
            event.custom({
                type: "create:crushing",
                ingredients: [{ item: "minecraft:crying_obsidian" }],
                processingTime: 500,
                results: [
                    { id: "create:powdered_obsidian" },
                    { chance: 0.75, id: "minecraft:obsidian" },
                    { chance: 0.5, id: "minecraft:amethyst_shard" }
                ]
            })
            event.custom({
                type: "create:crushing",
                ingredients: [{ item: "create:limestone" }],
                processingTime: 250,
                results: [
                    { chance: 0.15, id: "minecraft:quartz", count: 2 },
                    { chance: 0.35, id: "minecraft:lapis_lazuli" }
                ]
            })
            event.custom({
                "type": "create:crushing",
                "ingredients": [
                    {
                        "item": "minecraft:blackstone"
                    }
                ],
                "results": [
                    {
                        "chance": 0.01,
                        "id": "minecraft:wither_skeleton_skull"
                    },
                    {
                        "chance": 0.01,
                        "id": "l2complements:blackstone_core"
                    }
                ],
                "processingTime": 350
            })
            event.custom({
                "type": "create:crushing",
                "ingredients": [
                    {
                        "item": "minecraft:netherrack"
                    }
                ],
                "results": [
                    {
                        "chance": 1.0,
                        "id": "create:cinder_flour"
                    },
                    {
                        "chance": 0.5,
                        "id": "create:cinder_flour"
                    },
                    {
                        "chance": 0.005,
                        "id": "minecraft:netherite_scrap"
                    }
                ],
                "processingTime": 350
            })
            event.custom({
                "type": "create:crushing",
                "ingredients": [
                    {
                        "item": "create:scoria"
                    }
                ],
                "results": [
                    {
                        "chance": 0.125,
                        "id": "minecraft:blaze_powder"
                    },
                    {
                        "chance": 0.02,
                        "id": "minecraft:blaze_rod"
                    }
                ],
                "processingTime": 125
            })
            event.custom({
                "type": "create:crushing",
                "ingredients": [
                    {
                        "item": "minecraft:soul_sand"
                    }
                ],
                "results": [
                    {
                        "chance": 0.125,
                        "id": "minecraft:glowstone_dust"
                    }
                ],
                "processingTime": 125
            })
        }
        // Testing Filling Recipes
        {
            event.custom({
                type: "create:filling",
                ingredients: [
                    {
                        item: "minecraft:apple"
                    },
                    {
                        type: "neoforge:single",
                        amount: 250,
                        components: {
                            "create:potion_fluid_bottle_type": "regular",
                            "minecraft:potion_contents":
                            {
                                potion: "minecraft:swiftness"
                            }
                        },
                        fluid: "create:potion"
                    }
                ],
                results: [
                    {
                        components: {
                            "minecraft:food":
                            {
                                nutrition: 6,
                                saturation: 5,
                                effects: [
                                    { effect: { id: "minecraft:speed", duration: 200, amplifier: 0 } }
                                ]
                            }
                        },
                        id: "minecraft:apple"
                    }
                ]
            })
        }
    })


}