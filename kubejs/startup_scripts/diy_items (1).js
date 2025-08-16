StartupEvents.registry('item', event => {
    // 注册一个基础物品
    event.create('shh:etihw')
        .displayName('Etihw')
        .tooltip('Welcome to ShH\'s create')
        .texture('shh:item/etihw')
        .rarity('epic')
    
    event.create('example_item')
        .displayName('Example Item')
        .tooltip('This is an example item')
        .texture('kubejs:item/example_item')
        .rarity('common')
})

