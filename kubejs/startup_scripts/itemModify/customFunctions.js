/**
 * @typedef {Object} AttributeEntry
 * @property {string} attribute           - 属性 ID（例如 "minecraft:generic.armor"）
 * @property {number} operation           - 操作类型（0 = add, 1 = add-multiply, 2 = multiply）
 * @property {number} amount              - 值（数值或百分比数，取决于 operation ）
 * @property {string} id                  - 修饰器 ID，自定义（例如 "shh_armor:any"）
 * @property {string} [slot]              - 生效栏位（例如 "head","chest","any"），可选
 * @property {boolean|function():boolean} [condition] - 布尔或无参函数，返回 false 则跳过该条目
 */
/**
 * @param {$ItemModificationKubeEvent$ItemModifications} item `event.modify`回调中的`item`对象
 * @param {Array<AttributeEntry>} attributeModifiers - 属性修饰器条目数组
 */
function addAttModifier(item, attributeModifiers) { // 在ItemEvents.modification的item.modify回调中使用
    let mods = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers();
    attributeModifiers.forEach(entry => {
        if (!(entry && typeof entry === 'object')) return;
        if (!(entry.attribute && entry.operation != undefined && entry.amount != undefined && entry.id)) return;
        if (Object.prototype.hasOwnProperty.call(entry, 'condition')) {
            let cond = false;
            if (typeof entry.condition === 'function') {
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
                operation: entry.operation,
                amount: entry.amount,
                id: entry.id
            },
            entry.slot || 'any'
        );
    });
    item.setAttributeModifiersWithTooltip(mods.modifiers());
}
