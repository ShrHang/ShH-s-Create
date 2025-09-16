const ICuriosItemHandler = Java.loadClass("top.theillusivec4.curios.api.type.capability.ICuriosItemHandler")
const EntityCapability = Java.loadClass("net.neoforged.neoforge.capabilities.EntityCapability")
const IEntitiesData = Java.loadClass("top.theillusivec4.curios.api.type.data.IEntitiesData")
const ICurioStacksHandler = Java.loadClass("top.theillusivec4.curios.api.type.inventory.ICurioStacksHandler")

const curiosCap = EntityCapability.createVoid("curios:inventory",ICuriosItemHandler);
ItemEvents.entityInteracted("shh:maid_tool", event => {
    let _player = event.player;
    let _target = event.target;
    if (_target.type == 'touhou_little_maid:maid' && _player == _target.getOwner()) {
        var _item
        if (_player.isShiftKeyDown()) {
            _item = Item.of("l2magic:equipment_wand");
        } else {
            _item = Item.of("l2magic:ai_config_wand");
        }
        _item.getItem().clickTarget(_item, _player, _target);
        event.cancel();
    }
})

PlayerEvents.chat(event => {
    const player = event.player
    const message = event.message

    if (message == 'ts') {
        // let curio = player.getCapability(curiosCap);
        // curio.getCurios().forEach(type => {
        //     let list = curio.getStacksHandler(type).get().getStacks();
        //     let slots = curio.getStacksHandler(type).get().getSlots();
        //     for (let i = 0; i < slots; i++) {
        //         let slot = list.getStackInSlot(i);
        //         if (!slot.isEmpty()) {
        //             player.sendSystemMessage(Component.literal(type + "槽 " + i + " : " + slot.getDisplayName().getString()).green());
        //             player.sendSystemMessage(Component.literal(curio.getStacksHandler(type).get().getModifiers()).gold());
                    
        //         }
        //     }
        // });
        player.sendSystemMessage(Component.literal(player.type));
        event.cancel(true);
    }

    if (player.tags.contains('chat_ban')) {
        // 玩家拥有该 tag，可以执行相关逻辑
        player.sendSystemMessage(Component.literal("您当前处于禁言状态！").red())
        event.cancel(true)
    }
})
ItemEvents.entityInteracted('minecraft:stick', event => {
    let _entity = event.target
    event.player.sendSystemMessage(Component.literal(_entity.type));
    event.player.sendSystemMessage(Component.literal(_entity.uuid));
    let curio = _entity.getCapability(curiosCap);
    let Slot = "ring";
    let list = curio.getStacksHandler(Slot).get().getStacks();
    let slots = curio.getStacksHandler(Slot).get().getSlots()
    event.player.sendSystemMessage(Component.literal("Curios槽位数量：" + slots).gold());
    for (let i = 0; i < slots; i++) {
        let slot = list.getStackInSlot(i);
        if (slot.isEmpty()) {
            event.player.sendSystemMessage(Component.literal(Slot + "槽 " + i + " : " + "Null").gray());
        } else {
            event.player.sendSystemMessage(Component.literal(Slot + "槽 " + i + " : " + slot.getDisplayName().getString()).green());
        }
    }
    // list.grow(1);
    event.player.sendSystemMessage(Component.literal("Curios槽位数量：" + slots).gold());
    event.cancel();
})

var Etihw = false
ItemEvents.rightClicked('shh:etihw', event => {
    if (Etihw) {
        if (event.player.isCrouching()) {
            event.server.runCommandSilent(`/tick unfreeze`)
            event.player.sendSystemMessage(Component.literal("时间开始流动").green())
            Etihw = false
        } else {
            event.server.runCommandSilent(`/tick step`)
        }
    } else {
        event.server.runCommandSilent(`/tick freeze`)
        event.player.sendSystemMessage(Component.literal("时间停止流动").red())
        Etihw = true
    }
})

// ServerEvents.recipes(event=>{
//     event.shapeless(Item.of('create:andesite_alloy', 64), [
//         'ftbquests:book'
//     ]);
// })

// ItemEvents.entityInteracted('shh:maid_curios_tool', event => {
//     const player = event.player;
//     const target = event.target;
//     let item = player.offHandItem;
//     let Slot = null;
//     if (target.type == 'touhou_little_maid:maid') {
        
//         let curio = target.getCapability(curiosCap);
        
//         curio.getCurios().forEach(type => {
//             if (item.tags.toString().includes(type) && !Slot) {
//                 Slot = type
//             }
//         });

//         if (Slot) {
//             let list = curio.getStacksHandler(Slot).get().getStacks();
//             let slots = curio.getStacksHandler(Slot).get().getSlots()
//             for (let i = 0; i < slots; i++) {
//                 let slot = list.getStackInSlot(i);
//                 if (player.isShiftKeyDown()) {
//                     if (slot.isEmpty()) {
//                         player.sendSystemMessage(Component.literal(Slot + "槽 " + i + " : " + "Null").gray());
//                     } else {
//                         player.give(slot.copy());
//                         player.sendSystemMessage(Component.literal(Slot + "槽 " + i + " : " + slot.getDisplayName().getString()).yellow())
//                         list.getStackInSlot(i).count--;
//                     }
//                 } else {
//                     if (slot.isEmpty()) {
//                         list.setStackInSlot(i, item.copy());
//                         player.sendSystemMessage(Component.literal(Slot + "槽 " + i + " : " + item.getDisplayName().getString() + "(NEW)").gold());
//                         item.count--;
//                         for (let j = i + 1; j < slots; j++) {
//                             player.sendSystemMessage(Component.literal(Slot + "槽 " + j + " : " + "Null").gray());
//                         }
//                         break;
//                     } else {
//                         player.sendSystemMessage(Component.literal(Slot + "槽 " + i + " : " + slot.getDisplayName().getString()).green());
//                     }
//                 }
//             }
//         } else {
//             curio.getCurios().forEach(type => {
//                 Slot = type;
//                 let list = curio.getStacksHandler(Slot).get().getStacks();
//                 let slots = curio.getStacksHandler(Slot).get().getSlots();
//                 for (let i = 0; i < slots; i++) {
//                     let slot = list.getStackInSlot(i);
//                     if (player.isShiftKeyDown()) {
//                         if (slot.isEmpty()) {
//                             player.sendSystemMessage(Component.literal(Slot + "槽 " + i + " : " + "Null").gray());
//                         } else {
//                             player.give(slot.copy());
//                             player.sendSystemMessage(Component.literal(Slot + "槽 " + i + " : " + slot.getDisplayName().getString()).yellow())
//                             list.getStackInSlot(i).count--;
//                         }
//                     } else {
//                         if (slot.isEmpty()) {
//                             player.sendSystemMessage(Component.literal(Slot + "槽 " + i + " : " + "Null").gray());
//                         } else {
//                             player.sendSystemMessage(Component.literal(Slot + "槽 " + i + " : " + slot.getDisplayName().getString()).green());
//                         }
//                     }
//                 }
//             });
//         }
//         event.cancel();
//     }
// });

// ItemEvents.firstRightClicked("l2magic:equipment_wand",event=>{
//     let _entity = event.getTarget().entity
//     event.player.closeMenu()
//     event.player.setItemInHand("main_hand",event.getItem())
//     if ((_entity.type == "touhou_little_maid:maid")){
//         event.getItem().getItem().clickTarget(event.getItem(),event.entity,event.getTarget().entity)
//     }
//     event.player.sendSystemMessage(Component.literal(_entity.type))
//     event.player.sendSystemMessage(Component.literal(_entity.getUsername()))
// })