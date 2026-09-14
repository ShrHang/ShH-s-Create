/**
 * @file 恶意女仆交互事件
 * @description 允许玩家使用特定物品与恶意女仆交互，改变其恶意等级或使用女仆手杖。
 * @author ShrHang
 */
// requires: l2hostility, touhou_little_maid
ItemEvents.entityInteracted(event=>{let target=event.target;let player=event.player;let item=event.item;if(target.type=="touhou_little_maid:maid"&&player==target.getOwner()){if(item=="shh:maid_tool"){if(player.isShiftKeyDown()){item=Item.of("l2magic:equipment_wand")}else{item=Item.of("l2magic:ai_config_wand")}item.getItem().clickTarget(item,player,target);event.cancel()}let cap=L2Hostility.of(target);if(!cap)console.log("ShH--Error: Cannot get L2Hostility capability of TouhouLittleMaid.");if(!player.isShiftKeyDown()){if(item=="l2hostility:bottle_of_curse"){cap.setLevel(target,cap.level+100);cap.syncToClient(target);if(!player.isCreative())event.item.count--;event.cancel()}if(item=="l2hostility:bottle_of_sanity"){cap.reinit(target,0,true);cap.syncToClient(target);if(!player.isCreative())event.item.count--;event.cancel()}if(item=="l2hostility:miracle_block"){cap.reinit(target,cap.lv,true);cap.syncToClient(target);if(!player.isCreative())event.item.count--;event.cancel()}}}});
