// requires: createdieselgenerators
ServerEvents.recipes(event => {
    if (Platform.isLoaded("createaddition")) { // 处理重复植物油配方
        event.remove({ id: "createdieselgenerators:compacting/plant_oil" })
    }
});
