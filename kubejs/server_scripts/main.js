ServerEvents.loaded(event => {
    const server = event.server
    const structureRegistry = server.registryAccess().registryOrThrow('structure')
    
    console.log("=== 结构列表 ===")
    structureRegistry.keySet().forEach(key => {
        console.log(key.toString())
    })
})