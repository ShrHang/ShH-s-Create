ItemEvents.rightClicked('createdieselgenerators:wire_cutters', event => {
    let player = event.player;
    let entity = player.rayTraceEntity(7, entity => entity.type == "powergrid:hanging_wire");
    if (entity) {
        entity.kill();
        event.cancel();
    }
});
