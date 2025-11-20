ServerEvents.recipes(event => {
    if (!Platform.isLoaded('l2archery')) { return; }
    event.remove({ output: 'l2archery:void_arrow' })
})