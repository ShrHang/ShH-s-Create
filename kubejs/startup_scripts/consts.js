/**
 * @file 定义常量
 */

//#region 类加载
// minecraft
/**
 * 基础础物品属性类
 * @type {import("net.minecraft.world.item.Item$Properties")}
 */
const ItemProperties = Java.loadClass("net.minecraft.world.item.Item$Properties");
/**
 * 药水效果组件类
 * @type {import("net.minecraft.world.item.alchemy.PotionContents")}
 * @see {@linkcode ItemProperties} 中的条件处理机制也适用于这个类，可以通过条件来决定是否添加某个药水效果
 */
const PotionContents = Java.loadClass("net.minecraft.world.item.alchemy.PotionContents");
/**
 * 状态效果实例类
 * @type {import("net.minecraft.world.effect").$MobEffectInstance}
 */
const $MobEffectInstance = Java.loadClass("net.minecraft.world.effect.MobEffectInstance");


// create
/**
 * 序列装配物品类
 * @type {import("com.simibubi.create.content.processing.sequenced.SequencedAssemblyItem")}
 */
const SequencedAssemblyItem = Java.loadClass("com.simibubi.create.content.processing.sequenced.SequencedAssemblyItem");


// irons_spellbooks
/**
 * 铁魔法的Curios物品类
 * @type {import("io.redspace.ironsspellbooks.item.curios.CurioBaseItem")}
 */
const $CurioBaseItem = Java.loadClass("io.redspace.ironsspellbooks.item.curios.CurioBaseItem");
const $SpellContainer = Java.loadClass("io.redspace.ironsspellbooks.capabilities.magic.SpellContainer");
/**
 * 法术书类
 * @type {import("io.redspace.ironsspellbooks.item.SpellBook")}
 */
const $SpellBook = Java.loadClass("io.redspace.ironsspellbooks.item.SpellBook");
/**
 * 铁魔法的属性注册表类
 * @type {import("io.redspace.ironsspellbooks.api.registry.AttributeRegistry")}
 */
const $AttributeRegistry = Java.loadClass("io.redspace.ironsspellbooks.api.registry.AttributeRegistry");
/**
 * 铁魔法的属性容器记录
 * @type {import("io.redspace.ironsspellbooks.item.weapons.AttributeContainer")}
 */
const AttributeContainer = Java.loadClass("io.redspace.ironsspellbooks.item.weapons.AttributeContainer");
const $SpellRegistry = Java.loadClass("io.redspace.ironsspellbooks.api.registry.SpellRegistry");
const $ComponenteRegistry = Java.loadClass("io.redspace.ironsspellbooks.registries.ComponentRegistry");
//#endregion

//#region 属性名称
const AttackDamage = "minecraft:base_attack_damage";
const AttackSpeed = "minecraft:base_attack_speed";
//#endregion

//#region 常量
const pieceSlot = [
    { piece: "helmet", slot: "head" },
    { piece: "chestplate", slot: "chest" },
    { piece: "leggings", slot: "legs" },
    { piece: "boots", slot: "feet" }
];

const toolTypes = ["sword", "axe", "pickaxe", "shovel", "hoe"];

const l2archeryUpgradeTypes = [
    "advanced_infinity",
    "anti_gravity",
    "blackstone",
    "cleanse",
    "corrosion",
    "curse",
    "damage",
    "double_charge",
    "explosion",
    "explosion_breaker",
    "flux_up",
    "frozen",
    "glow",
    "glowing",
    "harm",
    "heal",
    "levitate",
    "levitation",
    "magnify_x2",
    "magnify_x4",
    "magnify_x8",
    "poison",
    "punch",
    "railgun",
    "slowness",
    "soul_fire",
    "super_damage",
    "void",
    "weak",
    "wither"
]
//#endregion
