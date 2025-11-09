ServerEvents.recipes(event => {
    if (!Platform.isLoaded('shh')) { return; }

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
    event.custom(
        {
            type: "create:mixing",
            ingredients: [
                { item: "minecraft:egg" },
                { item: "create:wheat_flour" },
                { item: "create:cinder_flour" },
                {
                    type: "fluid_stack",
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
    )
})