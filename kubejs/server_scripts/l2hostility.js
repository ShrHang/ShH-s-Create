ServerEvents.recipes(event => {
    if (!Platform.isLoaded('l2hostility')) { return; }

    if (Platform.isLoaded('create')) {
        event.custom({
            type: "create:crushing",
            ingredients: [{ item: "l2hostility:book_of_reprint" }],
            processing_time: 350,
            results: [
                { count: 8, id: "create:experience_nugget" },
                { count: 16, chance: 0.5, id: "create:experience_nugget" },
                { count: 32, chance: 0.25, id: "create:experience_nugget" },
                { count: 64, chance: 0.125, id: "create:experience_nugget" }
            ]
        })
    }
})
