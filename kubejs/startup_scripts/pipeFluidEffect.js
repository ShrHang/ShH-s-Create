CreateEvents.pipeFluidEffect(event => {
    event.add("shh:hostility", (level, aabb, fluid) => {
        level.getEntitiesWithin(aabb).forEach(entity => {
            if (!L2Hostility.of(entity)) return;
            let cap = L2Hostility.of(entity);
            cap.setLevel(entity, cap.lv + 1);
            cap.syncToClient(entity);
        })
    })
})