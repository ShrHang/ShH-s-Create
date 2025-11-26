ServerEvents.recipes(event => {
    // shh:maid_tool
    event.shaped('shh:maid_tool', [
        '  A',
        ' B ',
        'B  '
    ], {
        A: 'l2complements:heirophant_green',
        B: 'create_sa:zinc_handle'
    })
    // shh:hulibugulv
    /*event.custom(
        {
            type: "create:mixing",
            ingredients: [
                { item: "minecraft:egg" },
                { item: "create:wheat_flour" },
                { item: "create:cinder_flour" },
                {
                    type: "neoforge:single",
                    amount: 1000,
                    fluid: "minecraft:milk"
                },
                { item: "minecraft:sugar" },
                { item: "minecraft:sugar" },
                { item: "minecraft:sugar" },
                { item: "minecraft:sugar" },
                { item: "minecraft:sugar" },
                { item: "minecraft:sugar" },
                { item: "minecraft:sugar" },
                { item: "minecraft:sugar" },
                { item: "minecraft:sugar" }
            ],
            results: [{ id: "shh:hulibugulv" }]
        }
    )*/
    event.recipes.create.mixing('shh:hulibugulv',[
        "minecraft:egg",
        "create:wheat_flour",
        "create:cinder_flour",
        Fluid.of("minecraft:milk", 1000),
        "minecraft:sugar",
        "minecraft:sugar",
        "minecraft:sugar",
        "minecraft:sugar",
        "minecraft:sugar",
        "minecraft:sugar",
        "minecraft:sugar",
        "minecraft:sugar",
        "minecraft:sugar"
    ]
    ).superheated()
})