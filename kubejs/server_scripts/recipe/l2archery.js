// requires: l2archery
ServerEvents.recipes(event => {
    event.remove({ output: 'l2archery:void_arrow' })
    event.remove({ output: 'l2archery:upgrade' })
    //#region upgrade recipes
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "minecraft:amethyst_shard" },
        loops: 1,
        results: [{ id: "l2archery:upgrade" }],
        sequence: [
            { type: "create:deploying", ingredients: [{ item: "minecraft:amethyst_shard" }, { item: "minecraft:redstone" }], results: [{ id: "minecraft:amethyst_shard" }] },
            { type: "create:deploying", ingredients: [{ item: "minecraft:amethyst_shard" }, { item: "minecraft:gold_nugget" }], results: [{ id: "minecraft:amethyst_shard" }] },
            { type: "create:deploying", ingredients: [{ item: "minecraft:amethyst_shard" }, { item: "minecraft:lapis_lazuli" }], results: [{ id: "minecraft:amethyst_shard" }] }
        ],
        transitional_item: { id: "minecraft:amethyst_shard" }
    })
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "l2archery:upgrade" },
        loops: 10,
        results: [{ components: { "l2archery:item_upgrade": "l2archery:advanced_infinity" }, id: "l2archery:upgrade" }],
        sequence: [
            { type: "create:deploying", ingredients: [{ item: "shh:incomplete_upgrade_advanced_infinity" }, { type: "l2core:enchantment", "enchantment": "minecraft:infinity", "minLevel": 1 }], results: [{ id: "shh:incomplete_upgrade_advanced_infinity" }] },
            { type: "create:filling", ingredients: [{ item: "shh:incomplete_upgrade_advanced_infinity" }, { type: "fluid_stack", amount: 20, fluid: "create_dragons_plus:dragon_breath" }], results: [{ id: "shh:incomplete_upgrade_advanced_infinity" }] },
            { type: "create:filling", ingredients: [{ item: "shh:incomplete_upgrade_advanced_infinity" }, { type: "fluid_stack", amount: 10, fluid: "create_enchantment_industry:experience" }], results: [{ id: "shh:incomplete_upgrade_advanced_infinity" }] }
        ],
        transitional_item: { id: "shh:incomplete_upgrade_advanced_infinity" }
    })
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "l2archery:upgrade" },
        loops: 4,
        results: [{ components: { "l2archery:item_upgrade": "l2archery:anti_gravity" }, id: "l2archery:upgrade" }],
        sequence: [
            { type: "create:filling", ingredients: [{ item: "shh:incomplete_upgrade_anti_gravity" }, { type: "fluid_stack", amount: 500, components: { "create:potion_fluid_bottle_type": "regular", "minecraft:potion_contents": { potion: "l2archery:sprinting_archer" } }, fluid: "create:potion" }], results: [{ id: "shh:incomplete_upgrade_anti_gravity" }] },
            { type: "create:filling", ingredients: [{ item: "shh:incomplete_upgrade_anti_gravity" }, { type: "fluid_stack", amount: 500, fluid: "create_dragons_plus:dragon_breath" }], results: [{ id: "shh:incomplete_upgrade_anti_gravity" }] },
            { type: "create:filling", ingredients: [{ item: "shh:incomplete_upgrade_anti_gravity" }, { type: "fluid_stack", amount: 250, fluid: "create_enchantment_industry:experience" }], results: [{ id: "shh:incomplete_upgrade_anti_gravity" }] }
        ],
        transitional_item: { id: "shh:incomplete_upgrade_anti_gravity" }
    })
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "l2archery:upgrade" },
        loops: 4,
        results: [{ components: { "l2archery:item_upgrade": "l2archery:blackstone" }, id: "l2archery:upgrade" }],
        sequence: [
            { type: "create:filling", ingredients: [{ item: "shh:incomplete_upgrade_blackstone" }, { type: "fluid_stack", amount: 500, components: { "create:potion_fluid_bottle_type": "regular", "minecraft:potion_contents": { potion: "l2complements:incarceration" } }, fluid: "create:potion" }], results: [{ id: "shh:incomplete_upgrade_blackstone" }] },
            { type: "create:filling", ingredients: [{ item: "shh:incomplete_upgrade_blackstone" }, { type: "fluid_stack", amount: 500, fluid: "create_dragons_plus:dragon_breath" }], results: [{ id: "shh:incomplete_upgrade_blackstone" }] },
            { type: "create:filling", ingredients: [{ item: "shh:incomplete_upgrade_blackstone" }, { type: "fluid_stack", amount: 250, fluid: "create_enchantment_industry:experience" }], results: [{ id: "shh:incomplete_upgrade_blackstone" }] }
        ],
        transitional_item: { id: "shh:incomplete_upgrade_blackstone" }
    })
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "l2archery:upgrade" },
        loops: 4,
        results: [{ components: { "l2archery:item_upgrade": "l2archery:cleanse" }, id: "l2archery:upgrade" }],
        sequence: [
            { type: "create:filling", ingredients: [{ item: "shh:incomplete_upgrade_cleanse" }, { type: "fluid_stack", amount: 500, components: { "create:potion_fluid_bottle_type": "regular", "minecraft:potion_contents": { potion: "l2complements:cleanse" } }, fluid: "create:potion" }], results: [{ id: "shh:incomplete_upgrade_cleanse" }] },
            { type: "create:filling", ingredients: [{ item: "shh:incomplete_upgrade_cleanse" }, { type: "fluid_stack", amount: 500, fluid: "create_dragons_plus:dragon_breath" }], results: [{ id: "shh:incomplete_upgrade_cleanse" }] },
            { type: "create:filling", ingredients: [{ item: "shh:incomplete_upgrade_cleanse" }, { type: "fluid_stack", amount: 250, fluid: "create_enchantment_industry:experience" }], results: [{ id: "shh:incomplete_upgrade_cleanse" }] }
        ],
        transitional_item: { id: "shh:incomplete_upgrade_cleanse" }
    })
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "l2archery:upgrade" },
        loops: 4,
        results: [{ components: { "l2archery:item_upgrade": "l2archery:corrosion" }, id: "l2archery:upgrade" }],
        sequence: [
            { type: "create:filling", ingredients: [{ item: "shh:incomplete_upgrade_corrosion" }, { type: "fluid_stack", amount: 500, components: { "create:potion_fluid_bottle_type": "regular", "minecraft:potion_contents": { potion: "l2complements:strong_armor_corrosion" } }, fluid: "create:potion" }], results: [{ id: "shh:incomplete_upgrade_corrosion" }] },
            { type: "create:filling", ingredients: [{ item: "shh:incomplete_upgrade_corrosion" }, { type: "fluid_stack", amount: 500, fluid: "create_dragons_plus:dragon_breath" }], results: [{ id: "shh:incomplete_upgrade_corrosion" }] },
            { type: "create:filling", ingredients: [{ item: "shh:incomplete_upgrade_corrosion" }, { type: "fluid_stack", amount: 250, fluid: "create_enchantment_industry:experience" }], results: [{ id: "shh:incomplete_upgrade_corrosion" }] }
        ],
        transitional_item: { id: "shh:incomplete_upgrade_corrosion" }
    })
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "l2archery:upgrade" },
        loops: 4,
        results: [{ components: { "l2archery:item_upgrade": "l2archery:curse" }, id: "l2archery:upgrade" }],
        sequence: [
            { type: "create:filling", ingredients: [{ item: "shh:incomplete_upgrade_curse" }, { type: "fluid_stack", amount: 500, components: { "create:potion_fluid_bottle_type": "regular", "minecraft:potion_contents": { potion: "l2complements:curse" } }, fluid: "create:potion" }], results: [{ id: "shh:incomplete_upgrade_curse" }] },
            { type: "create:filling", ingredients: [{ item: "shh:incomplete_upgrade_curse" }, { type: "fluid_stack", amount: 500, fluid: "create_dragons_plus:dragon_breath" }], results: [{ id: "shh:incomplete_upgrade_curse" }] },
            { type: "create:filling", ingredients: [{ item: "shh:incomplete_upgrade_curse" }, { type: "fluid_stack", amount: 250, fluid: "create_enchantment_industry:experience" }], results: [{ id: "shh:incomplete_upgrade_curse" }] }
        ],
        transitional_item: { id: "shh:incomplete_upgrade_curse" }
    })
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "l2archery:upgrade" },
        loops: 4,
        results: [{ components: { "l2archery:item_upgrade": "l2archery:damage" }, id: "l2archery:upgrade" }],
        sequence: [
            { type: "create:deploying", ingredients: [{ item: "shh:incomplete_upgrade_damage" }, { item: "l2archery:diamond_arrow" }], results: [{ id: "shh:incomplete_upgrade_damage" }] },
            { type: "create:deploying", ingredients: [{ item: "shh:incomplete_upgrade_damage" }, { type: "l2core:enchantment", "enchantment": "minecraft:power", "minLevel": 5 }], results: [{ id: "shh:incomplete_upgrade_damage" }] },
            { type: "create:filling", ingredients: [{ item: "shh:incomplete_upgrade_damage" }, { type: "fluid_stack", amount: 250, fluid: "create_enchantment_industry:experience" }], results: [{ id: "shh:incomplete_upgrade_damage" }] }
        ],
        transitional_item: { id: "shh:incomplete_upgrade_damage" }
    })
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "l2archery:upgrade" },
        loops: 4,
        results: [{ components: { "l2archery:item_upgrade": "l2archery:double_charge" }, id: "l2archery:upgrade" }],
        sequence: [
            { type: "create:deploying", ingredients: [{ item: "shh:incomplete_upgrade_double_charge" }, { item: "l2complements:blackstone_core" }], results: [{ id: "shh:incomplete_upgrade_double_charge" }] },
            { type: "create:deploying", ingredients: [{ item: "shh:incomplete_upgrade_double_charge" }, { item: "minecraft:anvil" }], results: [{ id: "shh:incomplete_upgrade_double_charge" }] },
            { type: "create:deploying", ingredients: [{ item: "shh:incomplete_upgrade_double_charge" }, { type: "l2core:enchantment", "enchantment": "minecraft:power", "minLevel": 5 }], results: [{ id: "shh:incomplete_upgrade_double_charge" }] },
            { type: "create:filling", ingredients: [{ item: "shh:incomplete_upgrade_double_charge" }, { type: "fluid_stack", amount: 250, fluid: "create_enchantment_industry:experience" }], results: [{ id: "shh:incomplete_upgrade_double_charge" }] }
        ],
        transitional_item: { id: "shh:incomplete_upgrade_double_charge" }
    })
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "l2archery:upgrade" },
        loops: 1,
        results: [{ components: { "l2archery:item_upgrade": "l2archery:explosion" }, id: "l2archery:upgrade" }],
        sequence: [
            { type: "create:deploying", ingredients: [{ item: "shh:incomplete_upgrade_explosion" }, { item: "minecraft:nether_star" }], results: [{ id: "shh:incomplete_upgrade_explosion" }] },
            { type: "create:deploying", ingredients: [{ item: "shh:incomplete_upgrade_explosion" }, { item: "minecraft:creeper_head" }], results: [{ id: "shh:incomplete_upgrade_explosion" }] },
            { type: "create:deploying", ingredients: [{ item: "shh:incomplete_upgrade_explosion" }, { type: "l2core:enchantment", "enchantment": "minecraft:infinity", "minLevel": 1 }], results: [{ id: "shh:incomplete_upgrade_explosion" }] },
            { type: "create:deploying", ingredients: [{ item: "shh:incomplete_upgrade_explosion" }, { item: "l2complements:explosion_shard" }], results: [{ id: "shh:incomplete_upgrade_explosion" }] },
            { type: "create:filling", ingredients: [{ item: "shh:incomplete_upgrade_explosion" }, { type: "fluid_stack", amount: 1000, fluid: "create_enchantment_industry:experience" }], results: [{ id: "shh:incomplete_upgrade_explosion" }] }
        ],
        transitional_item: { id: "shh:incomplete_upgrade_explosion" }
    })
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "l2archery:upgrade" },
        loops: 1,
        results: [{ components: { "l2archery:item_upgrade": "l2archery:flux_up" }, id: "l2archery:upgrade" }],
        sequence: [
            { type: "create:deploying", ingredients: [{ item: "shh:incomplete_upgrade_flux_up" }, { item: "powergrid:capacitor" }], results: [{ id: "shh:incomplete_upgrade_flux_up" }] },
            { type: "create:deploying", ingredients: [{ item: "shh:incomplete_upgrade_flux_up" }, { item: "powergrid:wire" }], results: [{ id: "shh:incomplete_upgrade_flux_up" }] },
            { type: "create:deploying", ingredients: [{ item: "shh:incomplete_upgrade_flux_up" }, { item: "powergrid:device_connector" }], results: [{ id: "shh:incomplete_upgrade_flux_up" }] }
        ],
        transitional_item: { id: "shh:incomplete_upgrade_flux_up" }
    })
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "l2archery:upgrade" },
        loops: 4,
        results: [{ components: { "l2archery:item_upgrade": "l2archery:frozen" }, id: "l2archery:upgrade" }],
        sequence: [
            { type: "create:filling", ingredients: [{ item: "shh:incomplete_upgrade_frozen" }, { type: "fluid_stack", amount: 500, components: { "create:potion_fluid_bottle_type": "regular", "minecraft:potion_contents": { potion: "l2complements:frost" } }, fluid: "create:potion" }], results: [{ id: "shh:incomplete_upgrade_frozen" }] },
            { type: "create:filling", ingredients: [{ item: "shh:incomplete_upgrade_frozen" }, { type: "fluid_stack", amount: 500, fluid: "create_dragons_plus:dragon_breath" }], results: [{ id: "shh:incomplete_upgrade_frozen" }] },
            { type: "create:filling", ingredients: [{ item: "shh:incomplete_upgrade_frozen" }, { type: "fluid_stack", amount: 250, fluid: "create_enchantment_industry:experience" }], results: [{ id: "shh:incomplete_upgrade_frozen" }] }
        ],
        transitional_item: { id: "shh:incomplete_upgrade_frozen" }
    })
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "l2archery:upgrade" },
        loops: 1,
        results: [{ components: { "l2archery:item_upgrade": "l2archery:glow" }, id: "l2archery:upgrade" }],
        sequence: [
            { type: "create:deploying", ingredients: [{ item: "shh:incomplete_upgrade_glow" }, { item: "l2hostility:detector_glasses" }], results: [{ id: "shh:incomplete_upgrade_glow" }] },
            { type: "create:filling", ingredients: [{ item: "shh:incomplete_upgrade_glow" }, { type: "fluid_stack", amount: 1000, fluid: "create_enchantment_industry:experience" }], results: [{ id: "shh:incomplete_upgrade_poison" }] }
        ],
        transitional_item: { id: "shh:incomplete_upgrade_glow" }
    })
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "l2archery:upgrade" },
        loops: 4,
        results: [{ components: { "l2archery:item_upgrade": "l2archery:glowing" }, id: "l2archery:upgrade" }],
        sequence: [
            { type: "create:deploying", ingredients: [{ item: "shh:incomplete_upgrade_glowing" }, { item: "minecraft:glowstone_dust" }], results: [{ id: "shh:incomplete_upgrade_glowing" }] },
            { type: "create:filling", ingredients: [{ item: "shh:incomplete_upgrade_glowing" }, { type: "fluid_stack", amount: 500, fluid: "create_dragons_plus:dragon_breath" }], results: [{ id: "shh:incomplete_upgrade_glowing" }] },
            { type: "create:filling", ingredients: [{ item: "shh:incomplete_upgrade_glowing" }, { type: "fluid_stack", amount: 250, fluid: "create_enchantment_industry:experience" }], results: [{ id: "shh:incomplete_upgrade_glowing" }] }
        ],
        transitional_item: { id: "shh:incomplete_upgrade_glowing" }
    })
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "l2archery:upgrade" },
        loops: 4,
        results: [{ components: { "l2archery:item_upgrade": "l2archery:harm" }, id: "l2archery:upgrade" }],
        sequence: [
            { type: "create:filling", ingredients: [{ item: "shh:incomplete_upgrade_harm" }, { type: "fluid_stack", amount: 500, components: { "create:potion_fluid_bottle_type": "regular", "minecraft:potion_contents": { potion: "minecraft:strong_harming" } }, fluid: "create:potion" }], results: [{ id: "shh:incomplete_upgrade_harm" }] },
            { type: "create:filling", ingredients: [{ item: "shh:incomplete_upgrade_harm" }, { type: "fluid_stack", amount: 500, fluid: "create_dragons_plus:dragon_breath" }], results: [{ id: "shh:incomplete_upgrade_harm" }] },
            { type: "create:filling", ingredients: [{ item: "shh:incomplete_upgrade_harm" }, { type: "fluid_stack", amount: 250, fluid: "create_enchantment_industry:experience" }], results: [{ id: "shh:incomplete_upgrade_harm" }] }
        ],
        transitional_item: { id: "shh:incomplete_upgrade_harm" }
    })
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "l2archery:upgrade" },
        loops: 4,
        results: [{ components: { "l2archery:item_upgrade": "l2archery:heal" }, id: "l2archery:upgrade" }],
        sequence: [
            { type: "create:filling", ingredients: [{ item: "shh:incomplete_upgrade_heal" }, { type: "fluid_stack", amount: 500, fluid: "irons_spellbooks:greater_healing_elixir" }], results: [{ id: "shh:incomplete_upgrade_heal" }] },
            { type: "create:filling", ingredients: [{ item: "shh:incomplete_upgrade_heal" }, { type: "fluid_stack", amount: 500, fluid: "create_dragons_plus:dragon_breath" }], results: [{ id: "shh:incomplete_upgrade_heal" }] },
            { type: "create:filling", ingredients: [{ item: "shh:incomplete_upgrade_heal" }, { type: "fluid_stack", amount: 250, fluid: "create_enchantment_industry:experience" }], results: [{ id: "shh:incomplete_upgrade_heal" }] }
        ],
        transitional_item: { id: "shh:incomplete_upgrade_heal" }
    })
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "l2archery:upgrade" },
        loops: 4,
        results: [{ components: { "l2archery:item_upgrade": "l2archery:levitate" }, id: "l2archery:upgrade" }],
        sequence: [
            { type: "create:filling", ingredients: [{ item: "shh:incomplete_upgrade_levitate" }, { type: "fluid_stack", amount: 500, components: { "create:potion_fluid_bottle_type": "regular", "minecraft:potion_contents": { potion: "l2complements:levitation" } }, fluid: "create:potion" }], results: [{ id: "shh:incomplete_upgrade_levitate" }] },
            { type: "create:filling", ingredients: [{ item: "shh:incomplete_upgrade_levitate" }, { type: "fluid_stack", amount: 500, fluid: "create_dragons_plus:dragon_breath" }], results: [{ id: "shh:incomplete_upgrade_levitate" }] },
            { type: "create:filling", ingredients: [{ item: "shh:incomplete_upgrade_levitate" }, { type: "fluid_stack", amount: 250, fluid: "create_enchantment_industry:experience" }], results: [{ id: "shh:incomplete_upgrade_levitate" }] }
        ],
        transitional_item: { id: "shh:incomplete_upgrade_levitate" }
    })
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "l2archery:upgrade" },
        loops: 4,
        results: [{ components: { "l2archery:item_upgrade": "l2archery:levitation" }, id: "l2archery:upgrade" }],
        sequence: [
            { type: "create:filling", ingredients: [{ item: "shh:incomplete_upgrade_levitation" }, { type: "fluid_stack", amount: 500, components: { "create:potion_fluid_bottle_type": "regular", "minecraft:potion_contents": { potion: "minecraft:slow_falling" } }, fluid: "create:potion" }], results: [{ id: "shh:incomplete_upgrade_levitation" }] },
            { type: "create:filling", ingredients: [{ item: "shh:incomplete_upgrade_levitation" }, { type: "fluid_stack", amount: 500, fluid: "create_dragons_plus:dragon_breath" }], results: [{ id: "shh:incomplete_upgrade_levitation" }] },
            { type: "create:filling", ingredients: [{ item: "shh:incomplete_upgrade_levitation" }, { type: "fluid_stack", amount: 250, fluid: "create_enchantment_industry:experience" }], results: [{ id: "shh:incomplete_upgrade_levitation" }] }
        ],
        transitional_item: { id: "shh:incomplete_upgrade_levitation" }
    })
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "l2archery:upgrade" },
        loops: 1,
        results: [{ components: { "l2archery:item_upgrade": "l2archery:magnify_x2" }, id: "l2archery:upgrade" }],
        sequence: [
            { type: "create:deploying", ingredients: [{ item: "shh:incomplete_upgrade_magnify_x2" }, { item: "create:copper_nugget" }], results: [{ id: "shh:incomplete_upgrade_magnify_x2" }] },
            { type: "create:deploying", ingredients: [{ item: "shh:incomplete_upgrade_magnify_x2" }, { item: "minecraft:spyglass" }], results: [{ id: "shh:incomplete_upgrade_magnify_x2" }] },
            { type: "create:filling", ingredients: [{ item: "shh:incomplete_upgrade_magnify_x2" }, { type: "fluid_stack", amount: 1000, fluid: "create_enchantment_industry:experience" }], results: [{ id: "shh:incomplete_upgrade_magnify_x2" }] }
        ],
        transitional_item: { id: "shh:incomplete_upgrade_magnify_x2" }
    })
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "l2archery:upgrade" },
        loops: 1,
        results: [{ components: { "l2archery:item_upgrade": "l2archery:magnify_x4" }, id: "l2archery:upgrade" }],
        sequence: [
            { type: "create:deploying", ingredients: [{ item: "shh:incomplete_upgrade_magnify_x4" }, { item: "minecraft:copper_ingot" }], results: [{ id: "shh:incomplete_upgrade_magnify_x4" }] },
            { type: "create:deploying", ingredients: [{ item: "shh:incomplete_upgrade_magnify_x4" }, { item: "minecraft:spyglass" }], results: [{ id: "shh:incomplete_upgrade_magnify_x4" }] },
            { type: "create:deploying", ingredients: [{ item: "shh:incomplete_upgrade_magnify_x4" }, { item: "minecraft:spyglass" }], results: [{ id: "shh:incomplete_upgrade_magnify_x4" }] },
            { type: "create:filling", ingredients: [{ item: "shh:incomplete_upgrade_magnify_x4" }, { type: "fluid_stack", amount: 1000, fluid: "create_enchantment_industry:experience" }], results: [{ id: "shh:incomplete_upgrade_magnify_x4" }] }
        ],
        transitional_item: { id: "shh:incomplete_upgrade_magnify_x4" }
    })
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "l2archery:upgrade" },
        loops: 1,
        results: [{ components: { "l2archery:item_upgrade": "l2archery:magnify_x8" }, id: "l2archery:upgrade" }],
        sequence: [
            { type: "create:deploying", ingredients: [{ item: "shh:incomplete_upgrade_magnify_x8" }, { item: "create:fluid_pipe" }], results: [{ id: "shh:incomplete_upgrade_magnify_x8" }] },
            { type: "create:deploying", ingredients: [{ item: "shh:incomplete_upgrade_magnify_x8" }, { item: "minecraft:spyglass" }], results: [{ id: "shh:incomplete_upgrade_magnify_x8" }] },
            { type: "create:deploying", ingredients: [{ item: "shh:incomplete_upgrade_magnify_x8" }, { item: "minecraft:spyglass" }], results: [{ id: "shh:incomplete_upgrade_magnify_x8" }] },
            { type: "create:deploying", ingredients: [{ item: "shh:incomplete_upgrade_magnify_x8" }, { item: "minecraft:spyglass" }], results: [{ id: "shh:incomplete_upgrade_magnify_x8" }] },
            { type: "create:filling", ingredients: [{ item: "shh:incomplete_upgrade_magnify_x8" }, { type: "fluid_stack", amount: 1000, fluid: "create_enchantment_industry:experience" }], results: [{ id: "shh:incomplete_upgrade_magnify_x8" }] }
        ],
        transitional_item: { id: "shh:incomplete_upgrade_magnify_x8" }
    })
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "l2archery:upgrade" },
        loops: 4,
        results: [{ components: { "l2archery:item_upgrade": "l2archery:poison" }, id: "l2archery:upgrade" }],
        sequence: [
            { type: "create:filling", ingredients: [{ item: "shh:incomplete_upgrade_poison" }, { type: "fluid_stack", amount: 500, components: { "create:potion_fluid_bottle_type": "regular", "minecraft:potion_contents": { potion: "minecraft:poison" } }, fluid: "create:potion" }], results: [{ id: "shh:incomplete_upgrade_poison" }] },
            { type: "create:filling", ingredients: [{ item: "shh:incomplete_upgrade_poison" }, { type: "fluid_stack", amount: 500, fluid: "create_dragons_plus:dragon_breath" }], results: [{ id: "shh:incomplete_upgrade_poison" }] },
            { type: "create:filling", ingredients: [{ item: "shh:incomplete_upgrade_poison" }, { type: "fluid_stack", amount: 250, fluid: "create_enchantment_industry:experience" }], results: [{ id: "shh:incomplete_upgrade_poison" }] }
        ],
        transitional_item: { id: "shh:incomplete_upgrade_poison" }
    })
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "l2archery:upgrade" },
        loops: 4,
        results: [{ components: { "l2archery:item_upgrade": "l2archery:punch" }, id: "l2archery:upgrade" }],
        sequence: [
            { type: "create:deploying", ingredients: [{ item: "shh:incomplete_upgrade_punch" }, { item: "l2archery:gold_arrow" }], results: [{ id: "shh:incomplete_upgrade_punch" }] },
            { type: "create:deploying", ingredients: [{ item: "shh:incomplete_upgrade_punch" }, { type: "l2core:enchantment", "enchantment": "minecraft:punch", "minLevel": 2 }], results: [{ id: "shh:incomplete_upgrade_punch" }] },
            { type: "create:filling", ingredients: [{ item: "shh:incomplete_upgrade_punch" }, { type: "fluid_stack", amount: 250, fluid: "create_enchantment_industry:experience" }], results: [{ id: "shh:incomplete_upgrade_punch" }] }
        ],
        transitional_item: { id: "shh:incomplete_upgrade_punch" }
    })
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "l2archery:upgrade" },
        loops: 10,
        results: [{ components: { "l2archery:item_upgrade": "l2archery:railgun" }, id: "l2archery:upgrade" }],
        sequence: [
            { type: "create:deploying", ingredients: [{ item: "shh:incomplete_upgrade_railgun" }, { item: "l2complements:space_shard" }], results: [{ id: "shh:incomplete_upgrade_railgun" }] },
            { type: "create:pressing", ingredients: [{ item: "shh:incomplete_upgrade_railgun" }], results: [{ id: "shh:incomplete_upgrade_railgun" }] },
            { type: "create:filling", ingredients: [{ item: "shh:incomplete_upgrade_railgun" }, { type: "fluid_stack", amount: 1000, fluid: "create_wizardry:lightning" }], results: [{ id: "shh:incomplete_upgrade_railgun" }] },
            { type: "create:filling", ingredients: [{ item: "shh:incomplete_upgrade_railgun" }, { type: "fluid_stack", amount: 1000, fluid: "create_enchantment_industry:experience" }], results: [{ id: "shh:incomplete_upgrade_railgun" }] }
        ],
        transitional_item: { id: "shh:incomplete_upgrade_railgun" }
    })
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "l2archery:upgrade" },
        loops: 4,
        results: [{ components: { "l2archery:item_upgrade": "l2archery:slowness" }, id: "l2archery:upgrade" }],
        sequence: [
            { type: "create:filling", ingredients: [{ item: "shh:incomplete_upgrade_slowness" }, { type: "fluid_stack", amount: 500, components: { "create:potion_fluid_bottle_type": "regular", "minecraft:potion_contents": { potion: "minecraft:strong_slowness" } }, fluid: "create:potion" }], results: [{ id: "shh:incomplete_upgrade_slowness" }] },
            { type: "create:filling", ingredients: [{ item: "shh:incomplete_upgrade_slowness" }, { type: "fluid_stack", amount: 500, fluid: "create_dragons_plus:dragon_breath" }], results: [{ id: "shh:incomplete_upgrade_slowness" }] },
            { type: "create:filling", ingredients: [{ item: "shh:incomplete_upgrade_slowness" }, { type: "fluid_stack", amount: 250, fluid: "create_enchantment_industry:experience" }], results: [{ id: "shh:incomplete_upgrade_slowness" }] }
        ],
        transitional_item: { id: "shh:incomplete_upgrade_slowness" }
    })
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "l2archery:upgrade" },
        loops: 4,
        results: [{ components: { "l2archery:item_upgrade": "l2archery:soul_fire" }, id: "l2archery:upgrade" }],
        sequence: [
            { type: "create:filling", ingredients: [{ item: "shh:incomplete_upgrade_soul_fire" }, { type: "fluid_stack", amount: 500, components: { "create:potion_fluid_bottle_type": "regular", "minecraft:potion_contents": { potion: "l2complements:soul_burning" } }, fluid: "create:potion" }], results: [{ id: "shh:incomplete_upgrade_soul_fire" }] },
            { type: "create:filling", ingredients: [{ item: "shh:incomplete_upgrade_soul_fire" }, { type: "fluid_stack", amount: 500, fluid: "create_dragons_plus:dragon_breath" }], results: [{ id: "shh:incomplete_upgrade_soul_fire" }] },
            { type: "create:filling", ingredients: [{ item: "shh:incomplete_upgrade_soul_fire" }, { type: "fluid_stack", amount: 250, fluid: "create_enchantment_industry:experience" }], results: [{ id: "shh:incomplete_upgrade_soul_fire" }] }
        ],
        transitional_item: { id: "shh:incomplete_upgrade_soul_fire" }
    })
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "l2archery:upgrade" },
        loops: 4,
        results: [{ components: { "l2archery:item_upgrade": "l2archery:super_damage" }, id: "l2archery:upgrade" }],
        sequence: [
            { type: "create:deploying", ingredients: [{ item: "shh:incomplete_upgrade_super_damage" }, { item: "l2complements:explosion_shard" }], results: [{ id: "shh:incomplete_upgrade_super_damage" }] },
            { type: "create:deploying", ingredients: [{ item: "shh:incomplete_upgrade_super_damage" }, { item: "l2complements:captured_wind" }], results: [{ id: "shh:incomplete_upgrade_super_damage" }] },
            { type: "create:deploying", ingredients: [{ item: "shh:incomplete_upgrade_super_damage" }, { type: "l2core:enchantment", "enchantment": "minecraft:power", "minLevel": 5 }], results: [{ id: "shh:incomplete_upgrade_super_damage" }] },
            { type: "create:filling", ingredients: [{ item: "shh:incomplete_upgrade_super_damage" }, { type: "fluid_stack", amount: 250, fluid: "create_enchantment_industry:experience" }], results: [{ id: "shh:incomplete_upgrade_super_damage" }] }
        ],
        transitional_item: { id: "shh:incomplete_upgrade_super_damage" }
    })
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "l2archery:upgrade" },
        loops: 1,
        results: [{ components: { "l2archery:item_upgrade": "l2archery:void" }, id: "l2archery:upgrade" }],
        sequence: [
            { type: "create:deploying", ingredients: [{ item: "shh:incomplete_upgrade_void" }, { item: "minecraft:dragon_head" }], results: [{ id: "shh:incomplete_upgrade_void" }] },
            { type: "create:deploying", ingredients: [{ item: "shh:incomplete_upgrade_void" }, { type: "l2core:enchantment", "enchantment": "minecraft:infinity", "minLevel": 1 }], results: [{ id: "shh:incomplete_upgrade_void" }] },
            { type: "create:deploying", ingredients: [{ item: "shh:incomplete_upgrade_void" }, { type: "l2core:enchantment", "enchantment": "minecraft:mending", "minLevel": 1 }], results: [{ id: "shh:incomplete_upgrade_void" }] },
            { type: "create:deploying", ingredients: [{ item: "shh:incomplete_upgrade_void" }, { type: "l2core:enchantment", "enchantment": "minecraft:binding_curse", "minLevel": 1 }], results: [{ id: "shh:incomplete_upgrade_void" }] },
            { type: "create:deploying", ingredients: [{ item: "shh:incomplete_upgrade_void" }, { type: "l2core:enchantment", "enchantment": "minecraft:vanishing_curse", "minLevel": 1 }], results: [{ id: "shh:incomplete_upgrade_void" }] },
            { type: "create:deploying", ingredients: [{ item: "shh:incomplete_upgrade_void" }, { item: "l2complements:void_eye" }], results: [{ id: "shh:incomplete_upgrade_void" }] },
            { type: "create:filling", ingredients: [{ item: "shh:incomplete_upgrade_void" }, { type: "fluid_stack", amount: 1000, fluid: "create_enchantment_industry:experience" }], results: [{ id: "shh:incomplete_upgrade_void" }] }
        ],
        transitional_item: { id: "shh:incomplete_upgrade_void" }
    })
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "l2archery:upgrade" },
        loops: 4,
        results: [{ components: { "l2archery:item_upgrade": "l2archery:weak" }, id: "l2archery:upgrade" }],
        sequence: [
            { type: "create:filling", ingredients: [{ item: "shh:incomplete_upgrade_weak" }, { type: "fluid_stack", amount: 500, components: { "create:potion_fluid_bottle_type": "regular", "minecraft:potion_contents": { potion: "minecraft:weakness" } }, fluid: "create:potion" }], results: [{ id: "shh:incomplete_upgrade_weak" }] },
            { type: "create:filling", ingredients: [{ item: "shh:incomplete_upgrade_weak" }, { type: "fluid_stack", amount: 500, fluid: "create_dragons_plus:dragon_breath" }], results: [{ id: "shh:incomplete_upgrade_weak" }] },
            { type: "create:filling", ingredients: [{ item: "shh:incomplete_upgrade_weak" }, { type: "fluid_stack", amount: 250, fluid: "create_enchantment_industry:experience" }], results: [{ id: "shh:incomplete_upgrade_weak" }] }
        ],
        transitional_item: { id: "shh:incomplete_upgrade_weak" }
    })
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "l2archery:upgrade" },
        loops: 4,
        results: [{ components: { "l2archery:item_upgrade": "l2archery:wither" }, id: "l2archery:upgrade" }],
        sequence: [
            { type: "create:deploying", ingredients: [{ item: "shh:incomplete_upgrade_wither" }, { item: "minecraft:wither_rose" }], results: [{ id: "shh:incomplete_upgrade_wither" }] },
            { type: "create:filling", ingredients: [{ item: "shh:incomplete_upgrade_wither" }, { type: "fluid_stack", amount: 500, fluid: "create_dragons_plus:dragon_breath" }], results: [{ id: "shh:incomplete_upgrade_wither" }] },
            { type: "create:filling", ingredients: [{ item: "shh:incomplete_upgrade_wither" }, { type: "fluid_stack", amount: 250, fluid: "create_enchantment_industry:experience" }], results: [{ id: "shh:incomplete_upgrade_wither" }] }
        ],
        transitional_item: { id: "shh:incomplete_upgrade_wither" }
    })
    //#endregion
})
