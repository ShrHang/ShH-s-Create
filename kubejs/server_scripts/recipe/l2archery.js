const UPGRADE_JSON_DIR = 'kubejs/data/l2archery/recipe/upgrades'

ServerEvents.recipes(event => {
    if (Platform.isLoaded('l2archery')) {
        event.remove({ output: 'l2archery:void_arrow' })
        event.remove({ output: 'l2archery:upgrade[l2archery:item_upgrade="l2archery:explosion_breaker"]' })

        event.recipes.create.sequenced_assembly(
            'l2archery:upgrade',
            'minecraft:amethyst_shard',
            [
                event.recipes.create.deploying('minecraft:amethyst_shard', ['minecraft:amethyst_shard', 'minecraft:redstone']),
                event.recipes.create.deploying('minecraft:amethyst_shard', ['minecraft:amethyst_shard', 'minecraft:gold_nugget']),
                event.recipes.create.deploying('minecraft:amethyst_shard', ['minecraft:amethyst_shard', 'minecraft:lapis_lazuli'])
            ]
        ).transitionalItem('minecraft:amethyst_shard')
    }
})