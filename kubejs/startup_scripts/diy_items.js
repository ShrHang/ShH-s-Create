StartupEvents.registry('item', event => {
    // 注册一个基础物品
    event.create('shh:etihw')
        .tooltip('Welcome to ShH\'s create')
        .texture('shh:item/etihw') // 确保纹理路径正确
        .rarity('epic')
})