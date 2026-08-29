/**
 * @file 调试用的脚本
 */
const $StructureUtils = Java.loadClass("com.chaosthedude.explorerscompass.util.StructureUtils");
const $BiomeUtils = Java.loadClass("com.chaosthedude.naturescompass.util.BiomeUtils");
PlayerEvents.chat(event => {
    let player = event.player;
    let message = event.message;

    if (message == "ts") {
        
    }

    if (message == "tt") {
        
    }

    if (message == "ed") {
        let enderChestContainer = player.enderChestInventory;
        player.openMenu(new SimpleMenuProvider(
            (id, inventory, player) => {
                return ChestMenu.threeRows(id, inventory, enderChestContainer)
            },
            Component.translatable("container.enderchest")
        ))
        event.cancel();
    }

    if (message == "Export Language Keys for Compasses") {
        let structures = $StructureUtils.getAllowedStructureKeys(event.level);
        let biomes = $BiomeUtils.getAllowedBiomeKeys(event.level);
        let result = {};

        biomes.forEach(id => {
            let path = String(id.getPath()).replace(/\//g, ".");
            let key = "biome." + id.getNamespace() + "." + path;
            result[key] = "";
        });

        structures.forEach(id => {
            let path = String(id.getPath()).replace(/\//g, ".");
            let key = "structure." + id.getNamespace() + "." + path;
            result[key] = "";
        });

        JsonIO.write("export/compass_langkey.json", result);
        event.cancel();
    }
});

ServerEvents.recipes(event => {
    event.printExamples("create:mixing");
});
