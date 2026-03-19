// requires: man_of_many_planes
ServerEvents.recipes(event => {
    event.custom({
        type: "create:mechanical_crafting",
        accept_mirrored: true,
        category: "misc",
        pattern: [
            "   S ",
            "S TSP",
            "HH_EC",
            "S TSP",
            "   S "
        ],
        key: {
            "H": [{ "item": "immersive_aircraft:hull" }],
            "E": [{ "item": "immersive_aircraft:engine" }],
            "P": [{ "item": "immersive_aircraft:propeller" }],
            "S": [{ "item": "immersive_aircraft:sail" }],
            "C": [{ "item": "immersive_aircraft:industrial_gears" }],
            "T": [{ "item": "create:fluid_tank" }],
            "_": [{ "tag": "create:seats" }]
        },
        result: {
            "count": 1,
            "id": "man_of_many_planes:economy_plane"
        }
    })
    // event.recipes.create.mechanical_crafting("man_of_many_planes:economy_plane", [
    //     "   S ",
    //     "S TSP",
    //     "HH_EC",
    //     "S TSP",
    //     "   S "
    // ], {
    //     H: "immersive_aircraft:hull",
    //     E: "immersive_aircraft:engine",
    //     P: "immersive_aircraft:propeller",
    //     S: "immersive_aircraft:sail",
    //     C: "immersive_aircraft:industrial_gears",
    //     T: "create:fluid_tank",
    //     _: "#create:seats"
    // })

    event.custom({
        type: "create:mechanical_crafting",
        accept_mirrored: true,
        pattern: [
            "   S ",
            "S  S ",
            "HH_EP",
            "S  S ",
            "   S "
        ],
        key: {
            "H": [{ "item": "immersive_aircraft:hull_reinforcement" }],
            "E": [{ "item": "man_of_many_planes:economy_plane" }],
            "P": [{ "item": "immersive_aircraft:propeller" }],
            "S": [{ "item": "immersive_aircraft:sail" }],
            "_": [{ "tag": "create:seats" }]
        },
        result: {
            "count": 1,
            "id": "man_of_many_planes:scarlet_biplane"
        }
    })
    // event.recipes.create.mechanical_crafting("man_of_many_planes:scarlet_biplane", [
    //     "   S ",
    //     "S  S ",
    //     "HH_EP",
    //     "S  S ",
    //     "   S "
    // ], {
    //     H: "immersive_aircraft:hull_reinforcement",
    //     E: "man_of_many_planes:economy_plane",
    //     P: "immersive_aircraft:propeller",
    //     S: "immersive_aircraft:sail",
    //     _: "#create:seats"
    // })
});