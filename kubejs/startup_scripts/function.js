/**
 * @file 定义一些常用的函数
 * @author ShrHang
 */
//#region 物品注册
/**
 * @summary 注册一个使用Sequenced Assembly工艺的中间物品
 * @param {import("moe.wolfgirl.probejs.generated.registry.minecraft.Item").$Item} event - `StartupEvents.registry`回调中的`event`对象
 * @param {import("net.minecraft.resources.ResourceLocation").$ResourceLocation$$Type} itemId - 物品 ID
 * @example
 * ```js
 * // 注册一个 ID 为 "shh:example_assembly_item" 的序列装配物品
 * StartupEvents.registry('item', event => {
 *  registerSequencedAssemblyItem(event, "shh:example_assembly_item");
 * });
 * ```
 * @see {@link SequencedAssemblyItem} 以了解该物品的特殊属性和行为
 */
function createSequencedAssemblyItem(event, itemId) {
    event.createCustom(itemId, () => new SequencedAssemblyItem(new ItemProperties().stacksTo(1)));
}

/**
 * @typedef {Object} AttributeModifier
 * @property {DeferredHolder<Attribute, Attribute>} attribute           - 属性，需要使用Java导入的属性类
 * @property {double} amount              - 值（数值或百分比数，取决于 operation ）
 * @property {import("net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation").$AttributeModifier$Operation$$Type} [operation]           - 操作类型，默认0（0 = add, 1 = add-multiply, 2 = multiply）
 * @property {boolean|function():boolean} [condition] - 布尔或无参函数，返回 false 则跳过该条目
 */
/**
 * @summary 构建属性容器列表，自动处理条件
 * @param {Array<AttributeModifier>} attributeModifiers - 属性修饰器条目数组 {@link AttributeModifier}
 * @returns {Array<AttributeContainer>} 返回 {@link AttributeContainer} 数组
 */
function buildAttributeContainers(attributeModifiers) {
    let containers = attributeModifiers.map( entry => {
        if (!(entry && typeof entry === "object")) return null;
        if (!entry.attribute || !entry.amount) return null;
        if (Object.prototype.hasOwnProperty.call(entry, "condition")) {
            let cond = false;
            if (typeof entry.condition === "function") {
                try {
                    cond = !!entry.condition();
                } catch (e) {
                    console.error(e);
                    cond = false;
                }
            } else {
                cond = !!entry.condition;
            }
            if (!cond) return null;
        }
        return new AttributeContainer(
            entry.attribute,
            entry.amount,
            entry.operation || 0,
        );
    }).filter(v => !!v); // 过滤掉 null 值
    return containers;
}
/**
 * @typedef {Object} AttributesList
 * @property {string} slotName - Curios 插槽名称（例如 "ring", "necklace"）
 * @property {Array<AttributeModifier>} modifiers - 属性修饰器条目数组 {@link AttributeModifier}
 */
/**
 * @summary 注册一个 Curios 物品
 * @param {import("moe.wolfgirl.probejs.generated.registry.minecraft.Item").$Item} event - 注册事件
 * @param {string} itemId - 物品ID
 * @param {AttributesList} [attributesList] - 可选的属性列表项目{@link AttributesList}，如果提供，将为该物品添加属性修饰器
 */
function createCuriosItem(event, itemId, attributesList) {
    event.createCustom(itemId, () => {
        let item = new $CurioBaseItem(new ItemProperties().stacksTo(1));
        if (attributesList.slotName && attributesList.modifiers && Array.isArray(attributesList.modifiers)) {
            let containers = buildAttributeContainers(attributesList.modifiers);
            item = item.withAttributes(attributesList.slotName, containers);
        }
        return item;
    })
}
/**
 * @summary 注册一个法术书物品
 * @param {import("moe.wolfgirl.probejs.generated.registry.minecraft.Item").$Item} event - 注册事件
 * @param {string} itemId - 物品ID
 * @param {number} spellSize - 法术书的法术槽数量
 * @param {Array<AttributeModifier>} [attributeModifiers] - 可选的属性修饰符数组，应用于 "spell_book" 插槽 
 */
function createSpellBook(event, itemId, spellSize, attributeModifiers) {
    event.createCustom(itemId, () => {
        let item = new $SpellBook(spellSize, new ItemProperties().stacksTo(1).rarity("uncommon"));
        if (attributeModifiers && Array.isArray(attributeModifiers)) {
            let containers = buildAttributeContainers(attributeModifiers);
            item = item.withAttributes("spellbook", containers);
        }
        return item;
    })
}
//#endregion

//#region 属性修改
/**
 * @typedef {Object} AttributeEntry
 * @property {import("net.minecraft.world.entity.ai.attributes.Attribute").$Attribute$$Type} attribute           - 属性 ID（例如 "minecraft:generic.armor"）
 * @property {import("net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation").$AttributeModifier$Operation$$Type} [operation]           - 操作类型，默认0（0 = add, 1 = add-multiply, 2 = multiply）
 * @property {double} amount              - 值（数值或百分比数，取决于 operation ）
 * @property {string} [id]                  - 修饰器 ID，自定义（例如 "shh_armor:any"）
 * @property {import("net.minecraft.world.entity.EquipmentSlotGroup").$EquipmentSlotGroup$$Type} [slot]              - 生效栏位，默认"any"（例如 "head","chest"）
 * @property {boolean|function():boolean} [condition] - 布尔或无参函数，返回 false 则跳过该条目
 */
/**
 * @summary 构建属性修饰器列表，自动处理条件和工具提示显示
 * @param {import("net.minecraft.world.item.component.ItemAttributeModifiers").$ItemAttributeModifiers} mods
 * @param {Array<AttributeEntry>} attributeModifiers - 属性修饰器条目数组 {@link AttributeEntry}
 * @returns {import("net.minecraft.world.item.component.ItemAttributeModifiers").$ItemAttributeModifiers}
 */
function buildAttModifier(mods, attributeModifiers) {
    attributeModifiers.forEach(entry => {
        if (!(entry && typeof entry === "object")) return;
        if (!entry.attribute || !entry.amount) return;
        if (Object.prototype.hasOwnProperty.call(entry, "condition")) {
            let cond = false;
            if (typeof entry.condition === "function") {
                try {
                    cond = !!entry.condition();
                } catch (e) {
                    console.error(e);
                    cond = false;
                }
            } else {
                cond = !!entry.condition;
            }
            if (!cond) return;
        }
        mods = mods.withModifierAdded(
            entry.attribute,
            {
                operation: entry.operation || 0,
                amount: entry.amount,
                id: entry.id || "shh:func" + Math.floor(Math.random() * 1000000)
            },
            entry.slot || "any"
        );
    });
    return mods;
}
/**
 * @summary 为物品添加属性修饰器，并自动处理条件和工具提示显示
 * @param {import("dev.latvian.mods.kubejs.item.ItemModificationKubeEvent$ItemModifications").$ItemModificationKubeEvent$ItemModifications} item `event.modify`回调中的`item`对象
 * @param {Array<AttributeEntry>} attributeModifiers - 属性修饰器条目数组 {@link AttributeEntry}
 * @example
 * ```js
 * // 给铜潜水头盔添加属性修饰器
 * event.modify('create:copper_diving_helmet', item => {
 *   addAttModifiers(item, [
 *     { attribute: "minecraft:generic.armor", amount: 4, id: "shh_armor:head", slot: "head" },
 *     { attribute: "irons_spellbooks:lightning_spell_power", amount: 0.05, id: "shh_lightning_spell_power:head", slot: "head", condition: Platform.isLoaded('irons_spellbooks') }
 * ]);
 * ```
 * @see {@link buildAttModifier} 以了解条件和工具提示的处理机制
 */
function addAttModifiers(item, attributeModifiers) {
    let mods = item.item().getDefaultInstance().getAttributeModifiers();
    item.setAttributeModifiersWithTooltip(buildAttModifier(mods, attributeModifiers).modifiers());
}

/**
 * @summary 为物品设置属性修饰器（覆盖原有），并自动处理条件和工具提示显示
 * @param {import("dev.latvian.mods.kubejs.item.ItemModificationKubeEvent$ItemModifications").$ItemModificationKubeEvent$ItemModifications} item `event.modify`回调中的`item`对象
 * @param {Array<AttributeEntry>} attributeModifiers - 属性修饰器条目数组 {@link AttributeEntry}
 * @example
 * ```js
 * // 给铜潜水头盔设置属性修饰器（覆盖原有）
 * event.modify('create:copper_diving_helmet', item => {
 *   setAttModifiers(item, [
 *     { attribute: "minecraft:generic.armor", amount: 4, id: "shh_armor:head", slot: "head" },
 *     { attribute: "irons_spellbooks:lightning_spell_power", amount: 0.05, id: "shh_lightning_spell_power:head", slot: "head", condition: Platform.isLoaded('irons_spellbooks') }
 * ]);
 * ```
 * @see {@link buildAttModifier} 以了解条件和工具提示的处理机制
 */
function setAttModifiers(item, attributeModifiers) {
    let mods = item.item().getDefaultAttributeModifiers();
    item.setAttributeModifiersWithTooltip(buildAttModifier(mods, attributeModifiers).modifiers());
}
//#endregion
