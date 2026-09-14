ServerEvents.recipes((event) => {
    event.shapeless("minecraft:player_head", [
        "minecraft:zombie_head",
        "l2complements:life_essence",
    ]);
    event.custom({
        type: "create:compacting",
        ingredients: [
            {
                type: "fluid_stack",
                amount: 10,
                fluid: "create_enchantment_industry:experience",
            },
            {
                type: "fluid_stack",
                amount: 25,
                fluid: "shhs_create_core:miracle",
            },
            { item: "minecraft:phantom_membrane" },
            { item: "l2complements:strong_fire_charge" },
        ],
        results: [{ id: "l2complements:storm_core" }],
    });
    event.custom({
        type: "create:compacting",
        heat_requirement: "superheated",
        ingredients: [
            {
                type: "fluid_stack",
                amount: 25,
                fluid: "shhs_create_core:miracle",
            },
            { item: "minecraft:phantom_membrane" },
        ],
        results: [{ id: "l2complements:sun_membrane" }],
    });
    event.custom({
        type: "create_dragons_plus:freezing",
        ingredients: [{ item: "minecraft:fire_charge" }],
        results: [{ id: "l2complements:black_fire_charge" }],
    });
    event.custom({
        type: "create:haunting",
        ingredients: [{ item: "minecraft:fire_charge" }],
        results: [{ id: "l2complements:soul_fire_charge" }],
    });
    event.custom({
        type: "shhs_create_core:miracle",
        ingredients: [{ item: "l2complements:wind_capture_bottle" }],
        results: [{ id: "l2complements:captured_wind" }],
    });
    event.custom({
        type: "create:mixing",
        ingredients: [
            { item: "minecraft:blaze_powder" },
            { item: "minecraft:fire_charge" },
            { item: "minecraft:fire_charge" },
            { item: "minecraft:fire_charge" },
            { item: "minecraft:gunpowder" },
        ],
        results: [{ count: 2, id: "l2complements:strong_fire_charge" }],
    });
});
