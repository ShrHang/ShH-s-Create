ServerEvents.recipes(event => {
    // shh:maid_tool
    event.shaped("shh:maid_tool", [
        "  A",
        " B ",
        "B  "
    ], { A: "l2complements:heirophant_green", B: "create_sa:zinc_handle" })

    // shh:hulibugulv
    event.custom({
        type: "create:mixing",
        ingredients: [
            { item: "minecraft:egg" },
            { item: "create:cinder_flour" },
            { item: "kaleidoscope_cookery:flour" },
            { type: "neoforge:single", amount: 1000, fluid: "minecraft:milk" },
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
    })

    event.custom({
        type: "create:mixing",
        ingredients: [
            { item: "l2complements:captured_shulker_bullet" },
            { type: "neoforge:components", amount: 1000, components: { "create:potion_fluid_bottle_type": "regular", "minecraft:potion_contents": { potion: "minecraft:slow_falling" } }, fluids: "create:potion" },
            { type: "neoforge:single", amount: 1000, fluid: "shhs_create_core:wonder" },
        ],
        results: [{ amount: 250, components: { "create:potion_fluid_bottle_type": "regular", "minecraft:potion_contents": { potion: "shh:flight_potion" } }, id: "create:potion" }]
    })

    event.custom({
        type: "create:mixing",
        ingredients: [
            { item: "minecraft:phantom_membrane" },
            { type: "neoforge:components", amount: 1000, components: { "create:potion_fluid_bottle_type": "regular", "minecraft:potion_contents": { potion: "l2complements:levitation" } }, fluids: "create:potion" },
            { type: "neoforge:single", amount: 1000, fluid: "shhs_create_core:wonder" }
        ],
        results: [{ amount: 250, components: { "create:potion_fluid_bottle_type": "regular", "minecraft:potion_contents": { potion: "shh:flight_potion" } }, id: "create:potion" }]
    })

    event.custom({
        type: "create:mixing",
        ingredients: [
            { item: "l2hostility:miracle_powder" },
            { type: "neoforge:components", amount: 1000, components: { "create:potion_fluid_bottle_type": "regular", "minecraft:potion_contents": { potion: "l2complements:levitation" } }, fluids: "create:potion" },
            { type: "neoforge:components", amount: 1000, components: { "create:potion_fluid_bottle_type": "regular", "minecraft:potion_contents": { potion: "minecraft:slow_falling" } }, fluids: "create:potion" },
        ],
        results: [{ amount: 250, components: { "create:potion_fluid_bottle_type": "regular", "minecraft:potion_contents": { potion: "shh:flight_potion" } }, id: "create:potion" }]
    })
});
