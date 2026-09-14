ServerEvents.recipes((event) => {
    event.shaped("minecraft:zombie_head", ["AAA", "ABA", "AAA"], {
        A: "minecraft:rotten_flesh",
        B: "minecraft:skeleton_skull",
    });
});
