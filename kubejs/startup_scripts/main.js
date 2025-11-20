// ItemEvents.modification(event => {
//     event.modify('l2hostility:ring_of_divinity', item => {
//         var modifiers = item
//         .item()
//         .getDefaultInstance()
//         .getAttributeModifiers()
//         .withModifierAdded(
//             "minecraft:generic.attack_damage",
//             {
//                 "operation": 0,
//                 "amount": 9,
//                 "id": "shh:base_attack_damage"
//             },
//             "ring"
//         )
//         .modifiers();
//         item.setAttributeModifiersWithTooltip(modifiers);
//     });
// })

ItemEvents.modelProperties(event => {});

// ItemEvents.modification(event => {
//     event.modify('shh:etihw', item => {
//         item.attachCuriosCapability(CuriosJSCapabilityBuilder.create().addAttribute(
//             "minecraft:generic.attack_damage",
//             "shh_attack_damage:curios_curio",
//             12.0,
//             "add_value"
//         ))
//     });
// });

ItemEvents.toolTierRegistry(event => {});

// StartupEvents.registry('item', event => {});