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
 * @param {import("dev.latvian.mods.kubejs.item.ItemModificationKubeEvent$ItemModifications").$ItemModificationKubeEvent$ItemModifications} item `event.modify`回调中的`item`对象
 * @param {Array<AttributeEntry>} attributeModifiers - 属性修饰器条目数组 {@link AttributeEntry}
 */
function addAttModifiers(item, attributeModifiers) {
    let mods = item.item().getDefaultInstance().getAttributeModifiers();
    item.setAttributeModifiersWithTooltip(buildAttModifier(mods, attributeModifiers).modifiers());
}

/**
 * @param {import("dev.latvian.mods.kubejs.item.ItemModificationKubeEvent$ItemModifications").$ItemModificationKubeEvent$ItemModifications} item `event.modify`回调中的`item`对象
 * @param {Array<AttributeEntry>} attributeModifiers - 属性修饰器条目数组 {@link AttributeEntry}
 */
function setAttModifiers(item, attributeModifiers) {
    let mods = item.item().getDefaultAttributeModifiers();
    item.setAttributeModifiersWithTooltip(buildAttModifier(mods, attributeModifiers).modifiers());
}
