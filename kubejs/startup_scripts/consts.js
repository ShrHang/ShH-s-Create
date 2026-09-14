/**
 * @file 定义常量
 */
//#region 类加载
// minecraft
/** @description 基础物品属性类 */const $ItemProperties=Java.loadClass("net.minecraft.world.item.Item$Properties");
/** @description 药水效果组件类 */const $PotionContents=Java.loadClass("net.minecraft.world.item.alchemy.PotionContents");
/** @description 状态效果实例类 */const $MobEffectInstance=Java.loadClass("net.minecraft.world.effect.MobEffectInstance");
// neoforge
/** @description 注册酿造配方事件类 */const $RegisterBrewingRecipesEvent=Java.loadClass("net.neoforged.neoforge.event.brewing.RegisterBrewingRecipesEvent");
// create
/** @description 序列装配物品类 */const $SequencedAssemblyItem=Java.loadClass("com.simibubi.create.content.processing.sequenced.SequencedAssemblyItem");
// irons_spellbooks
/** @description 铁魔法的Curios物品类 */const $CurioBaseItem=Java.loadClass("io.redspace.ironsspellbooks.item.curios.CurioBaseItem");const $SpellContainer=Java.loadClass("io.redspace.ironsspellbooks.capabilities.magic.SpellContainer");
/** @description 法术书类 */const $SpellBook=Java.loadClass("io.redspace.ironsspellbooks.item.SpellBook");
/** @description 铁魔法的属性注册表类 */const $AttributeRegistry=Java.loadClass("io.redspace.ironsspellbooks.api.registry.AttributeRegistry");
/** @description 铁魔法的属性容器记录 */const $AttributeContainer=Java.loadClass("io.redspace.ironsspellbooks.item.weapons.AttributeContainer");const $SpellRegistry=Java.loadClass("io.redspace.ironsspellbooks.api.registry.SpellRegistry");const $ComponenteRegistry=Java.loadClass("io.redspace.ironsspellbooks.registries.ComponentRegistry");
//#endregion
//#region 属性名称
const AttackDamage="minecraft:base_attack_damage";const AttackSpeed="minecraft:base_attack_speed";
//#endregion
//#region 常量
const pieceSlot=[{piece:"helmet",slot:"head"},{piece:"chestplate",slot:"chest"},{piece:"leggings",slot:"legs"},{piece:"boots",slot:"feet"}];const toolTypes=["sword","axe","pickaxe","shovel","hoe"];const l2archeryUpgradeTypes=["advanced_infinity","anti_gravity","blackstone","cleanse","corrosion","curse","damage","double_charge","explosion","explosion_breaker","flux_up","frozen","glow","glowing","harm","heal","levitate","levitation","magnify_x2","magnify_x4","magnify_x8","poison","punch","railgun","slowness","soul_fire","super_damage","void","weak","wither"];
//#endregion
