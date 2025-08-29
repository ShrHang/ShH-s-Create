// 词条产物1
// ServerEvents.recipes(event => {
//     // 不死
//     event.shapeless('minecraft:totem_of_undying', [
//         'l2hostility:charm_of_looting_1',
//         'l2hostility:undying'
//     ])

//     // 扭曲
//     event.shapeless(Item.of('minecraft:pufferfish', 4), [
//         'l2hostility:charm_of_looting_1',
//         'l2hostility:nausea'  // 词条ID
//     ])
    
//     // 重力
//     event.shapeless(Item.of('minecraft:dragon_breath', 4), [
//         'l2hostility:charm_of_looting_1',
//         'l2hostility:gravity'  // 词条ID
//     ])
    
//     // 凋零
//     event.shapeless(Item.of('minecraft:wither_rose', 8), [
//         'l2hostility:charm_of_looting_1', 
//         'l2hostility:wither'  // 词条ID
//     ])
    
//     // 烈焰
//     event.shapeless(Item.of('minecraft:blaze_rod', 8), [
//         'l2hostility:charm_of_looting_1',
//         'l2hostility:fiery'  // 词条ID
//     ])
    
//     // 凋零
//     event.shapeless('minecraft:wither_skeleton_skull', [
//         'l2hostility:charm_of_looting_1',
//         'l2hostility:wither',
//         'l2hostility:wither'  // 词条ID
//     ])

//     // 月步
//     event.shapeless(Item.of('minecraft:dragon_breath', 4), [
//         'l2hostility:charm_of_looting_1',
//         'l2hostility:moonwalk'  // 词条ID
//     ])
    
//     // 神速
//     event.shapeless(Item.of('minecraft:rabbit_foot', 2), [
//         'l2hostility:charm_of_looting_1',
//         'l2hostility:speedy'  // 词条ID
//     ])
    
//     // 剧毒
//     event.shapeless(Item.of('minecraft:spider_eye', 8), [
//         'l2hostility:charm_of_looting_1',
//         'l2hostility:poison'  // 词条ID
//     ])

//     // 诅咒
//     event.shapeless('minecraft:potion[potion_contents={potion:"l2complements:curse"}]', [
//         'l2hostility:charm_of_looting_1',
//         'l2hostility:cursed'  // 词条ID
//     ])
    
//     // 保护
//     event.shapeless('minecraft:shulker_shell', [
//         'l2hostility:charm_of_looting_1',
//         'l2hostility:protection',
//         'l2hostility:protection'  // 词条ID
//     ])
    
//     // 重装
//     event.shapeless(Item.of('minecraft:diamond', 4), [
//         'l2hostility:charm_of_looting_1',
//         'l2hostility:tank'  // 词条ID
//     ])
    
//     // 流沙
//     event.shapeless(Item.of('minecraft:cobweb', 4), [
//         'l2hostility:charm_of_looting_1',
//         'l2hostility:slowness'  // 词条ID
//     ])
    
//     // 虚弱
//     event.shapeless(Item.of('minecraft:fermented_spider_eye', 8), [
//         'l2hostility:charm_of_looting_1',
//         'l2hostility:weakness'  // 词条ID
//     ])
    
//     // 重装
//     event.shapeless('minecraft:netherite_scrap', [
//         'l2hostility:charm_of_looting_1',
//         'l2hostility:tank',
//         'l2hostility:tank'  // 词条ID
//     ])
    
//     // 榴弹
//     event.shapeless(Item.of('minecraft:gunpowder', 4), [
//         'l2hostility:charm_of_looting_1',
//         'l2hostility:grenade'  // 词条ID
//     ])
    
//     // 保护
//     event.shapeless(Item.of('minecraft:turtle_scute', 4), [
//         'l2hostility:charm_of_looting_1',
//         'l2hostility:protection'  // 词条ID
//     ])
    
//     // 隐身
//     event.shapeless(Item.of('minecraft:phantom_membrane', 4), [
//         'l2hostility:charm_of_looting_1',
//         'l2hostility:invisible'  // 词条ID
//     ])

//     // 生长
//     event.shapeless('minecraft:enchanted_golden_apple', [
//         'l2hostility:charm_of_looting_1',
//         'l2hostility:growth'  // 词条ID
//     ])
    
//     // 再生
//     event.shapeless(Item.of('minecraft:ghast_tear', 4), [
//         'l2hostility:charm_of_looting_1',
//         'l2hostility:regenerate'  // 词条ID
//     ])
    
//     // 榴弹
//     event.shapeless('minecraft:creeper_head', [
//         'l2hostility:charm_of_looting_1',
//         'l2hostility:grenade',
//         'l2hostility:grenade'  // 词条ID
//     ])
    
//     // 致盲
//     event.shapeless(Item.of('minecraft:ink_sac', 8), [
//         'l2hostility:charm_of_looting_1',
//         'l2hostility:blindness'  // 词条ID
//     ])
// })

// 词条产物2
// ServerEvents.recipes(event => {
//     // 反射
//     event.shapeless('l2complements:explosion_shard', [
//         'l2hostility:charm_of_looting_2',
//         'l2hostility:reflect'
//     ])

//     // 潜影
//     event.shapeless('l2complements:captured_shulker_bullet', [
//         'l2hostility:charm_of_looting_2',
//         'l2hostility:shulker'
//     ])

//     // 寒流
//     event.shapeless(Item.of('l2complements:hard_ice',2), [
//         'l2hostility:charm_of_looting_2',
//         'l2hostility:freezing'
//     ])

//     // 诅咒
//     event.shapeless('l2complements:cursed_droplet', [
//         'l2hostility:charm_of_looting_2',
//         'l2hostility:cursed'
//     ])

//     // 再生
//     event.shapeless('l2complements:life_essence', [
//         'l2hostility:charm_of_looting_2',
//         'l2hostility:regenerate'
//     ])

//     // 分裂
//     event.shapeless('l2complements:guardian_eye', [
//         'l2hostility:charm_of_looting_2',
//         'l2hostility:split'
//     ])

//     // 不死
//     event.shapeless(Item.of('l2complements:life_essence',3), [
//         'l2hostility:charm_of_looting_2',
//         'l2hostility:undying'
//     ])

//     // 嗜魔
//     event.shapeless('l2hostility:witch_droplet', [
//         'l2hostility:charm_of_looting_2',
//         'l2hostility:drain'
//     ])

//     // 升空
//     event.shapeless('l2complements:captured_shulker_bullet', [
//         'l2hostility:charm_of_looting_2',
//         'l2hostility:levitation'
//     ])

//     // 适应
//     event.shapeless('l2complements:cursed_droplet', [
//         'l2hostility:charm_of_looting_2',
//         'l2hostility:adaptive'
//     ])

//     // 保护+重装
//     event.shapeless(Item.of('l2complements:shulkerate_nugget', 4), [
//         'l2hostility:charm_of_looting_2',
//         Item.of('l2hostility:protection',2),
//         'l2hostility:tank'
//     ])

//     // 保护+重装
//     event.shapeless('l2complements:shulkerate_ingot', [
//         'l2hostility:charm_of_looting_2',
//         Item.of('l2hostility:protection',4),
//         'l2hostility:tank'
//     ])

//     // 业火
//     event.shapeless(Item.of('l2complements:soul_flame',2), [
//         'l2hostility:charm_of_looting_2',
//         'l2hostility:soul_burner'
//     ])

//     // 反击
//     event.shapeless('l2complements:explosion_shard', [
//         'l2hostility:charm_of_looting_2',
//         'l2hostility:counter_strike'
//     ])

//     // 风蚀
//     event.shapeless('l2complements:cursed_droplet', [
//         'l2hostility:charm_of_looting_2',
//         'l2hostility:erosion'
//     ])

//     // 腐蚀
//     event.shapeless('l2complements:cursed_droplet', [
//         'l2hostility:charm_of_looting_2',
//         'l2hostility:corrosion'
//     ])
// })

// 词条产物3
// ServerEvents.recipes(event => {
//     // 复印
//     event.shapeless('l2hostility:book_of_reprint', [
//         'l2hostility:charm_of_looting_3',
//         'l2hostility:reprint'
//     ])

//     // 神速
//     event.shapeless('l2complements:captured_wind', [
//         'l2hostility:charm_of_looting_3',
//         'l2hostility:speedy'  // 词条ID
//     ])

//     // 再生
//     event.shapeless(Item.of('l2complements:totemic_gold_nugget', 4), [
//         'l2hostility:charm_of_looting_3',
//         'l2hostility:regenerate'  // 词条ID
//     ])

//     // 神速+重装
//     event.shapeless(Item.of('l2complements:sculkium_nugget', 4), [
//         'l2hostility:charm_of_looting_3',
//         'l2hostility:speedy',
//         Item.of('l2hostility:tank',3)
//     ])

//     //排斥
//     event.shapeless('l2complements:force_field', [
//         'l2hostility:charm_of_looting_3',
//         'l2hostility:repelling'  // 词条ID
//     ])

//     // 吸引
//     event.shapeless('l2complements:blackstone_core', [
//         'l2hostility:charm_of_looting_3',
//         'l2hostility:pulling'  // 词条ID
//     ])

//     // 榴弹
//     event.shapeless('l2complements:storm_core', [
//         'l2hostility:charm_of_looting_3',
//         'l2hostility:grenade'
//     ])
// })

// 词条产物4
// ServerEvents.recipes(event => {
//     // 领域
//     event.shapeless('l2hostility:chaos_ingot', [
//         'l2hostility:charm_of_looting_4',
//         'l2hostility:arena'
//     ])

//     // 领主
//     event.shapeless(Item.of('l2hostility:chaos_ingot',4), [
//         'l2hostility:charm_of_looting_4',
//         'l2hostility:master'
//     ])

//     // 传送
//     event.shapeless('l2complements:void_eye', [
//         'l2hostility:charm_of_looting_4',
//         'l2hostility:teleport'
//     ])

//     // 摄魂
//     event.shapeless('l2complements:sun_membrane', [
//         'l2hostility:charm_of_looting_4',
//         'l2hostility:dementor'
//     ])

//     // 诸神黄昏
//     event.shapeless(Item.of('l2complements:eternium_nugget',4), [
//         'l2hostility:charm_of_looting_4',
//         'l2hostility:ragnarok'
//     ])

//     // 杀戮光环
//     event.shapeless('l2complements:heirophant_green', [
//         'l2hostility:charm_of_looting_4',
//         'l2hostility:killer_aura'
//     ])

//     // 摄魂+诸神黄昏+杀戮光环
//     event.shapeless('l2hostility:chaos_ingot', [
//         'l2hostility:charm_of_looting_4',
//         'l2hostility:dementor',
//         'l2hostility:ragnarok',
//         'l2hostility:killer_aura'
//     ])

//     // 破魔
//     event.shapeless('l2complements:resonant_feather', [
//         'l2hostility:charm_of_looting_4',
//         'l2hostility:dispell'
//     ])

//     // 破魔
//     event.shapeless('l2hostility:imagine_breaker', [
//         'l2hostility:charm_of_looting_4',
//         'l2hostility:dispell',
//         'l2hostility:dispell',
//         'l2hostility:dispell'
//     ])
// })

ItemEvents.entityInteracted("l2hostility:bottle_of_curse", event => {
    let _player = event.player;
    let _target = event.target;
    if (_target.type == 'touhou_little_maid:maid' && _player == _target.getOwner()) {
        event.server.runCommand(`/hostility mobs ${_target.getUuid()} level add 100`)
        event.item.count--
        event.cancel()
    }
})

ItemEvents.entityInteracted("l2hostility:bottle_of_sanity", event => {
    let _player = event.player;
    let _target = event.target;
    if (_target.type == 'touhou_little_maid:maid' && _player == _target.getOwner()) {
        event.server.runCommand(`/hostility mobs ${_target.getUuid()} trait clear`)
        event.server.runCommand(`/hostility mobs ${_target.getUuid()} level set 0`)
        event.item.count--
        event.cancel()
    }
})

ItemEvents.entityInteracted("l2hostility:miracle_powder", event => {
    let _player = event.player;
    let _target = event.target;
    if (_target.type == 'touhou_little_maid:maid' && _player.isShiftKeyDown() && _player == _target.getOwner()) {
        event.server.runCommand(`/hostility mobs ${_target.getUuid()} level rerollTraitNoSuppression`)
        event.item.count--
        event.cancel()
    }
})