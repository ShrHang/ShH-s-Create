// Recipes remove
ServerEvents.recipes(event => {
    event.remove({output:'irons_spellbooks:iron_spell_book'})
    event.remove({output:'irons_spellbooks:gold_spell_book'})
    event.remove({output:'irons_spellbooks:rotten_spell_book'})
    event.remove({output:'irons_spellbooks:diamond_spell_book'})
    event.remove({output:'irons_spellbooks:blaze_spell_book'})
    event.remove({output:'irons_spellbooks:villager_spell_book'})
    event.remove({output:'irons_spellbooks:cursed_doll_spell_book'})
    event.remove({output:'irons_spellbooks:dragonskin_spell_book'})
    event.remove({output:'irons_spellbooks:druidic_spell_book'})
    event.remove({output:'irons_spellbooks:netherite_spell_book'})
    event.remove({output:'irons_spellbooks:ice_spell_book'})
    event.remove({output:'cataclysm_spellbooks:codex_of_malice_spell_book'})
})
// Spellbook
ServerEvents.recipes(event => {
    // 初学者->铁箍
    event.smithing(
        'irons_spellbooks:iron_spell_book',
        'minecraft:chain',
        'irons_spellbooks:copper_spell_book',
        ['create:iron_sheet','createaddition:zinc_sheet']
    )

    // 铁箍->学徒
    event.smithing(
        'irons_spellbooks:gold_spell_book',
        'irons_spellbooks:hogskin',
        'irons_spellbooks:iron_spell_book',
        ['create:golden_sheet','createaddition:electrum_sheet']
    )

    // 铁箍->残破
    event.smithing(
        'irons_spellbooks:rotten_spell_book',
        'farmersdelight:canvas',
        'irons_spellbooks:iron_spell_book',
        'minecraft:moss_carpet'
    )

    // 学徒->附魔
    event.smithing(
        'irons_spellbooks:diamond_spell_book',
        'create_enchantment_industry:super_enchanting_template',
        'irons_spellbooks:gold_spell_book',
        'createaddition:diamond_grit_sandpaper'
    )

    // 附魔->炽焰
    event.smithing(
        'irons_spellbooks:blaze_spell_book',
        'create_dragons_plus:blaze_upgrade_smithing_template',
        'irons_spellbooks:diamond_spell_book',
        'l2complements:sun_membrane'
    )

    // 附魔->村民
    event.smithing(
        'irons_spellbooks:villager_spell_book',
        'l2complements:life_essence',
        'irons_spellbooks:diamond_spell_book',
        'artifacts:villager_hat'
    )

    // 附魔->噬血
    event.smithing(
        'irons_spellbooks:cursed_doll_spell_book',
        'curseofpandora:spellbound_orb',
        'irons_spellbooks:diamond_spell_book',
        'irons_spellbooks:bloody_vellum'
    )

    // 附魔->龙皮
    event.smithing(
        'irons_spellbooks:dragonskin_spell_book',
        'curseofpandora:charm_of_calmness',
        'irons_spellbooks:diamond_spell_book',
        'irons_spellbooks:dragonskin'
    )

    // 破败->德鲁伊
    event.smithing(
        'irons_spellbooks:druidic_spell_book',
        'minecraft:spore_blossom',
        'irons_spellbooks:rotten_spell_book',
        'irons_spellbooks:magic_cloth'
    )

    // 破败->远古
    event.smithing(
        'irons_spellbooks:netherite_spell_book',
        'l2complements:warden_bone_shard',
        'irons_spellbooks:rotten_spell_book',
        'irons_spellbooks:eldritch_manuscript'
    )

    // 破败->寒冰
    event.smithing(
        'irons_spellbooks:ice_spell_book',
        'irons_spellbooks:ice_venom_vial',
        'irons_spellbooks:rotten_spell_book',
        'l2complements:hard_ice'
    )

    // 寒冰->咒魂
    event.smithing(
        'cataclysm_spellbooks:codex_of_malice_spell_book',
        'cataclysm:cursium_upgrade_smithing_template',
        'irons_spellbooks:ice_spell_book',
        'cataclysm:cursium_ingot'
    )
})

// Spell Cloths
ServerEvents.recipes(event => {
    // 唤魔者帽
    event.smithing(
        'irons_spellbooks:archevoker_helmet',
        'irons_spellbooks:evocation_rune',
        'irons_spellbooks:wizard_helmet',
        'irons_spellbooks:magic_cloth'
    )
    // 唤魔者法袍
    event.smithing(
        'irons_spellbooks:archevoker_chestplate',
        'irons_spellbooks:evocation_rune',
        'irons_spellbooks:wizard_chestplate',
        'irons_spellbooks:magic_cloth'
    )
    // 唤魔者裤子
    event.smithing(
        'irons_spellbooks:archevoker_leggings',
        'irons_spellbooks:evocation_rune',
        'irons_spellbooks:wizard_leggings',
        'irons_spellbooks:magic_cloth'
    )
    // 唤魔者靴子
    event.smithing(
        'irons_spellbooks:archevoker_boots',
        'irons_spellbooks:evocation_rune',
        'irons_spellbooks:wizard_boots',
        'irons_spellbooks:magic_cloth'
    )
    // 炽焰术士帽
    event.smithing(
        'irons_spellbooks:pyromancer_helmet',
        'irons_spellbooks:fire_rune',
        'irons_spellbooks:wizard_helmet',
        'irons_spellbooks:magic_cloth'
    )
    // 炽焰术士法袍
    event.smithing(
        'irons_spellbooks:pyromancer_chestplate',
        'irons_spellbooks:fire_rune',
        'irons_spellbooks:wizard_chestplate',
        'irons_spellbooks:magic_cloth'
    )
    // 炽焰术士裤子
    event.smithing(
        'irons_spellbooks:pyromancer_leggings',
        'irons_spellbooks:fire_rune',
        'irons_spellbooks:wizard_leggings',
        'irons_spellbooks:magic_cloth'
    )
    // 炽焰术士靴子
    event.smithing(
        'irons_spellbooks:pyromancer_boots',
        'irons_spellbooks:fire_rune',
        'irons_spellbooks:wizard_boots',
        'irons_spellbooks:magic_cloth'
    )
    // 冰霜术士帽
    event.smithing(
        'irons_spellbooks:cryomancer_helmet',
        'irons_spellbooks:ice_rune',
        'irons_spellbooks:wizard_helmet',
        'irons_spellbooks:magic_cloth'
    )
    // 冰霜术士法袍
    event.smithing(
        'irons_spellbooks:cryomancer_chestplate',
        'irons_spellbooks:ice_rune',
        'irons_spellbooks:wizard_chestplate',
        'irons_spellbooks:magic_cloth'
    )
    // 冰霜术士裤子
    event.smithing(
        'irons_spellbooks:cryomancer_leggings',
        'irons_spellbooks:ice_rune',
        'irons_spellbooks:wizard_leggings',
        'irons_spellbooks:magic_cloth'
    )
    // 冰霜术士靴子
    event.smithing(
        'irons_spellbooks:cryomancer_boots',
        'irons_spellbooks:ice_rune',
        'irons_spellbooks:wizard_boots',
        'irons_spellbooks:magic_cloth'
    )
    // 雷霆术士帽
    event.smithing(
        'irons_spellbooks:electromancer_helmet',
        'irons_spellbooks:lightning_rune',
        'irons_spellbooks:wizard_helmet',
        'irons_spellbooks:magic_cloth'
    )
    // 雷霆术士法袍
    event.smithing(
        'irons_spellbooks:electromancer_chestplate',
        'irons_spellbooks:lightning_rune',
        'irons_spellbooks:wizard_chestplate',
        'irons_spellbooks:magic_cloth'
    )
    // 雷霆术士裤子
    event.smithing(
        'irons_spellbooks:electromancer_leggings',
        'irons_spellbooks:lightning_rune',
        'irons_spellbooks:wizard_leggings',
        'irons_spellbooks:magic_cloth'
    )
    // 雷霆术士靴子
    event.smithing(
        'irons_spellbooks:electromancer_boots',
        'irons_spellbooks:lightning_rune',
        'irons_spellbooks:wizard_boots',
        'irons_spellbooks:magic_cloth'
    )
    // 瘟疫术士帽
    event.smithing(
        'irons_spellbooks:plagued_helmet',
        'irons_spellbooks:nature_rune',
        'irons_spellbooks:wizard_helmet',
        'irons_spellbooks:magic_cloth'
    )
    // 瘟疫术士法袍
    event.smithing(
        'irons_spellbooks:plagued_chestplate',
        'irons_spellbooks:nature_rune',
        'irons_spellbooks:wizard_chestplate',
        'irons_spellbooks:magic_cloth'
    )
    // 瘟疫术士裤子
    event.smithing(
        'irons_spellbooks:plagued_leggings',
        'irons_spellbooks:nature_rune',
        'irons_spellbooks:wizard_leggings',
        'irons_spellbooks:magic_cloth'
    )
    // 瘟疫术士靴子
    event.smithing(
        'irons_spellbooks:plagued_boots',
        'irons_spellbooks:nature_rune',
        'irons_spellbooks:wizard_boots',
        'irons_spellbooks:magic_cloth'
    )
    // 牧师帽
    event.smithing(
        'irons_spellbooks:priest_helmet',
        'irons_spellbooks:holy_rune',
        'irons_spellbooks:wizard_helmet',
        'irons_spellbooks:magic_cloth'
    )
    // 牧师法袍
    event.smithing(
        'irons_spellbooks:priest_chestplate',
        'irons_spellbooks:holy_rune',
        'irons_spellbooks:wizard_chestplate',
        'irons_spellbooks:magic_cloth'
    )
    // 牧师裤子
    event.smithing(
        'irons_spellbooks:priest_leggings',
        'irons_spellbooks:holy_rune',
        'irons_spellbooks:wizard_leggings',
        'irons_spellbooks:magic_cloth'
    )
    // 牧师靴子
    event.smithing(
        'irons_spellbooks:priest_boots',
        'irons_spellbooks:holy_rune',
        'irons_spellbooks:wizard_boots',
        'irons_spellbooks:magic_cloth'
    )
    // 暗影行者帽
    event.smithing(
        'irons_spellbooks:shadowwalker_helmet',
        'irons_spellbooks:ender_rune',
        'irons_spellbooks:wizard_helmet',
        'irons_spellbooks:magic_cloth'
    )
    // 暗影行者法袍
    event.smithing(
        'irons_spellbooks:shadowwalker_chestplate',
        'irons_spellbooks:ender_rune',
        'irons_spellbooks:wizard_chestplate',
        'irons_spellbooks:magic_cloth'
    )
    // 暗影行者裤子
    event.smithing(
        'irons_spellbooks:shadowwalker_leggings',
        'irons_spellbooks:ender_rune',
        'irons_spellbooks:wizard_leggings',
        'irons_spellbooks:magic_cloth'
    )
    // 暗影行者靴子
    event.smithing(
        'irons_spellbooks:shadowwalker_boots',
        'irons_spellbooks:ender_rune',
        'irons_spellbooks:wizard_boots',
        'irons_spellbooks:magic_cloth'
    )
    // 猩红教徒帽
    event.smithing(
        'irons_spellbooks:cultist_helmet',
        'irons_spellbooks:blood_rune',
        'irons_spellbooks:wizard_helmet',
        'irons_spellbooks:magic_cloth'
    )
    // 猩红教徒法袍
    event.smithing(
        'irons_spellbooks:cultist_chestplate',
        'irons_spellbooks:blood_rune',
        'irons_spellbooks:wizard_chestplate',
        'irons_spellbooks:magic_cloth'
    )
    // 猩红教徒裤子
    event.smithing(
        'irons_spellbooks:cultist_leggings',
        'irons_spellbooks:blood_rune',
        'irons_spellbooks:wizard_leggings',
        'irons_spellbooks:magic_cloth'
    )
    // 猩红教徒靴子
    event.smithing(
        'irons_spellbooks:cultist_boots',
        'irons_spellbooks:blood_rune',
        'irons_spellbooks:wizard_boots',
        'irons_spellbooks:magic_cloth'
    )
})

// Staff
ServerEvents.recipes(event => {
    event.shapeless(Item.of('irons_spellbooks:blank_rune', 8),[
            'minecraft:polished_tuff'
    ])
})