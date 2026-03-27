ServerEvents.recipes(event => {
    // shh:maid_tool
    event.shaped("shh:maid_tool", [
        "  A",
        " B ",
        "B  "
    ], {
        A: "l2complements:heirophant_green",
        B: "create_sa:zinc_handle"
    })
    // shh:hulibugulv
    event.custom(
        {
            type: "create:mixing",
            ingredients: [
                { item: "minecraft:egg" },
                { item: "kaleidoscope_cookery:flour" },
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
    )

    event.custom({
            type: "create:mixing",
            ingredients: [
                { item: "l2hostility:miracle_powder" },
                {
                    type: "neoforge:single",
                    amount: 250,
                    fluid: "minecraft:water"
                }
            ],
            results: [{
                amount: 250,
                id: "shhs_create_core:wonder"
            }]
        })
});
