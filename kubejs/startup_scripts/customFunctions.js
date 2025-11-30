/**
 * @typedef {Object} AttributeEntry
 * @property {string} attribute           - 属性 ID（例如 "minecraft:generic.armor"）
 * @property {number} [operation]           - 操作类型，默认0（0 = add, 1 = add-multiply, 2 = multiply）
 * @property {number} amount              - 值（数值或百分比数，取决于 operation ）
 * @property {string} [id]                  - 修饰器 ID，自定义（例如 "shh_armor:any"）
 * @property {string} [slot]              - 生效栏位，默认"any"（例如 "head","chest"）
 * @property {boolean|function():boolean} [condition] - 布尔或无参函数，返回 false 则跳过该条目
 * @param {any} item `event.modify`回调中的`item`对象
 * @param {Array<AttributeEntry>} attributeModifiers - 属性修饰器条目数组 {@link AttributeEntry}
 */
function buildAttModifier(mods, attributeModifiers) {
    attributeModifiers.forEach(entry => {
        if (!(entry && typeof entry === "object")) return;
        if (!entry.attribute || !entry.amount ) return;
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
 * @param {any} item `event.modify`回调中的`item`对象
 * @param {Array<AttributeEntry>} attributeModifiers - 属性修饰器条目数组 {@link AttributeEntry}
 */
function addAttModifiers(item, attributeModifiers) { // 在ItemEvents.modification的item.modify回调中使用
    let mods = item.item().getDefaultInstance().getAttributeModifiers();
    item.setAttributeModifiersWithTooltip(buildAttModifier(mods, attributeModifiers).modifiers());
}

/**
 * @property {boolean|function():boolean} [condition] - 布尔或无参函数，返回 false 则跳过该条目
 * @param {any} item `event.modify`回调中的`item`对象
 * @param {Array<AttributeEntry>} attributeModifiers - 属性修饰器条目数组 {@link AttributeEntry}
 */
function setAttModifiers(item, attributeModifiers) { // 在ItemEvents.modification的item.modify回调中使用
    let mods = item.item().getDefaultAttributeModifiers();
    item.setAttributeModifiersWithTooltip(buildAttModifier(mods, attributeModifiers).modifiers());
}