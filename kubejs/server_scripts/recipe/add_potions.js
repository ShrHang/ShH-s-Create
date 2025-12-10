ServerEvents.recipes(event => {
    if (Platform.isLoaded("add_potion")) {
        event.remove({ output: "add_potion:potion_table" })
        event.shaped("add_potion:potion_table", [
            "ABD",
            " CE",
            "FBG"
        ], {
            A: "create:spout",
            B: "create:fluid_pipe",
            C: "create:mechanical_pump",
            D: "create:hand_crank",
            E: "create:cogwheel",
            F: "create:depot",
            G: "create:item_drain"
        })
    }
})