if (Platform.isLoaded('l2hostility')) {
    ServerEvents.recipes(event => {
        /*if (Platform.isLoaded('create')) {
            
            event.custom({
                type: "create:crushing",
                ingredients: [{ item: "l2hostility:book_of_reprint" }],
                processing_time: 350,
                results: [
                    { count: 9, id: "create:experience_nugget" },
                    { count: 16, chance: 0.5, id: "create:experience_nugget" },
                    { count: 32, chance: 0.25, id: "create:experience_nugget" },
                    { count: 64, chance: 0.125, id: "create:experience_nugget" }
                ]
            }).id('kubejs:crushing/book_of_reprint')
        }*/
        event.recipes.create.crushing(
            [
                "create:experience_nugget",
                CreateItem.of("create:experience_nugget", 0.5),
                CreateItem.of("create:experience_nugget", 0.25),
                CreateItem.of("create:experience_nugget", 0.125)
            ],
            "l2hostility:book_of_reprint"
        )
    })
}