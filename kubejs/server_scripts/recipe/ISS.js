ServerEvents.recipes(event => {
    if (!Platform.isLoaded('irons_spellbooks')) { return; }

    // Recipes remove
    {
        event.remove({ output: "irons_spellbooks:iron_spell_book" })
        event.remove({ output: "irons_spellbooks:gold_spell_book" })
        event.remove({ output: "irons_spellbooks:rotten_spell_book" })
        event.remove({ output: "irons_spellbooks:diamond_spell_book" })
        event.remove({ output: "irons_spellbooks:blaze_spell_book" })
        event.remove({ output: "irons_spellbooks:villager_spell_book" })
        event.remove({ output: "irons_spellbooks:cursed_doll_spell_book" })
        event.remove({ output: "irons_spellbooks:dragonskin_spell_book" })
        event.remove({ output: "irons_spellbooks:druidic_spell_book" })
        event.remove({ output: "irons_spellbooks:netherite_spell_book" })
        event.remove({ output: "irons_spellbooks:ice_spell_book" })
        if (Platform.isLoaded('cataclysm_spellbooks')) {
            event.remove({ output: "cataclysm_spellbooks:codex_of_malice_spell_book" })
            event.remove({ output: "cataclysm_spellbooks:abyss_spell_book" })
        }
    }
    // Spellbook Upgrading Recipes
    {
        // 无用->初学者
        event.smithing(
            "irons_spellbooks:copper_spell_book",
            "minecraft:copper_ingot",
            "irons_spellbooks:wimpy_spell_book",
            "minecraft:copper_ingot"
        )

        // 初学者->铁箍
        event.smithing(
            "irons_spellbooks:iron_spell_book",
            "minecraft:chain",
            "irons_spellbooks:copper_spell_book",
            ["create:iron_sheet", "createaddition:zinc_sheet"]
        )

        // 铁箍->学徒
        event.smithing(
            "irons_spellbooks:gold_spell_book",
            "irons_spellbooks:hogskin",
            "irons_spellbooks:iron_spell_book",
            ["create:golden_sheet", "createaddition:electrum_sheet"]
        )

        // 铁箍->残破
        event.smithing(
            "irons_spellbooks:rotten_spell_book",
            'create:cardboard',
            "irons_spellbooks:iron_spell_book",
            "minecraft:moss_carpet"
        )

        // 学徒->附魔
        event.smithing(
            "irons_spellbooks:diamond_spell_book",
            "create_enchantment_industry:super_enchanting_template",
            "irons_spellbooks:gold_spell_book",
            "createaddition:diamond_grit_sandpaper"
        )

        // 附魔->炽焰
        event.smithing(
            "irons_spellbooks:blaze_spell_book",
            "create_dragons_plus:blaze_upgrade_smithing_template",
            "irons_spellbooks:diamond_spell_book",
            "l2complements:sun_membrane"
        )

        // 附魔->村民
        event.smithing(
            "irons_spellbooks:villager_spell_book",
            "l2complements:life_essence",
            "irons_spellbooks:diamond_spell_book",
            "artifacts:villager_hat"
        )

        // 附魔->噬血
        event.smithing(
            "irons_spellbooks:cursed_doll_spell_book",
            "curseofpandora:spellbound_orb",
            "irons_spellbooks:diamond_spell_book",
            "irons_spellbooks:bloody_vellum"
        )

        // 附魔->龙皮
        event.smithing(
            "irons_spellbooks:dragonskin_spell_book",
            "curseofpandora:charm_of_calmness",
            "irons_spellbooks:diamond_spell_book",
            "irons_spellbooks:dragonskin"
        )

        // 破败->德鲁伊
        event.smithing(
            "irons_spellbooks:druidic_spell_book",
            "minecraft:spore_blossom",
            "irons_spellbooks:rotten_spell_book",
            "irons_spellbooks:magic_cloth"
        )

        // 破败->远古
        if (Platform.isLoaded('cataclysm_spellbooks')) {
            event.smithing(
                "irons_spellbooks:netherite_spell_book",
                "l2complements:warden_bone_shard",
                "irons_spellbooks:rotten_spell_book",
                "irons_spellbooks:eldritch_manuscript"
            )
        }
        // 破败->拉莱耶
        if (Platform.isLoaded('cataclysm_spellbooks')) {
            event.smithing(
                "cataclysm_spellbooks:abyss_spell_book",
                'cataclysm:blessed_amethyst_crab_meat',
                "irons_spellbooks:rotten_spell_book",
                'cataclysm:abyss_eye'
            )
        }

        // 破败->寒冰
        event.smithing(
            "irons_spellbooks:ice_spell_book",
            "irons_spellbooks:ice_venom_vial",
            "irons_spellbooks:rotten_spell_book",
            "l2complements:hard_ice"
        )

        // 寒冰->咒魂
        if (Platform.isLoaded('cataclysm_spellbooks')) {
            event.smithing(
                "cataclysm_spellbooks:codex_of_malice_spell_book",
                "cataclysm:cursium_upgrade_smithing_template",
                "irons_spellbooks:ice_spell_book",
                "cataclysm:cursium_ingot"
            )
        }
    }
    // Items Recipe
    {
        if (Platform.isLoaded('create')) {
            event.recipes.create.cutting([
                CreateItem.of(Item.of("irons_spellbooks:eldritch_manuscript", 2)),
                CreateItem.of(Item.of("irons_spellbooks:eldritch_manuscript", 1), 0.5),
                CreateItem.of(Item.of("irons_spellbooks:ancient_knowledge_fragment", 14)),
                CreateItem.of(Item.of("irons_spellbooks:ancient_knowledge_fragment", 6), 0.8)
            ], "irons_spellbooks:ruined_book")
        }
        if (Platform.isLoaded('create_dragons_plus')) {
            event.custom({
                type: "create_dragons_plus:freezing",
                ingredients: [
                    {
                        item: "minecraft:bone"
                    }
                ],
                results: [
                    {
                        id: "irons_spellbooks:frozen_bone"
                    }
                ]
            })
        }
        if (Platform.isLoaded('createaddition')) {
            event.custom({
                type: "createaddition:charging",
                energy: 4000,
                ingredients: [
                    {
                        item: "minecraft:glass_bottle"
                    }
                ],
                max_charge_rate: 200,
                results: [
                    {
                        id: "irons_spellbooks:lightning_bottle"
                    }
                ]
            })
        }
    }
})
