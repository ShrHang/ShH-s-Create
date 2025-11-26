// 法杖
ItemEvents.modification(event => {
    if (Platform.isLoaded('cataclysm_spellbooks')) {
        // 华岩之杖
        event.modify('cataclysm_spellbooks:bloom_stone_staff', item => {
            var modifiers = item
                .item()
                .getDefaultInstance()
                .getAttributeModifiers()
                .withModifierAdded(
                    "minecraft:generic.attack_damage",
                    {
                        "operation": 0,
                        "amount": 7,
                        "id": "shh_attack_damage:mainhand"
                    },
                    "mainhand"
                )
                .modifiers();
            item.setAttributeModifiersWithTooltip(modifiers);
        })
        // 珊瑚法杖
        event.modify('cataclysm_spellbooks:coral_staff', item => {
            var modifiers = item
                .item()
                .getDefaultInstance()
                .getAttributeModifiers()
                .withModifierAdded(
                    "minecraft:generic.attack_damage",
                    {
                        "operation": 0,
                        "amount": 7,
                        "id": "shh_attack_damage:mainhand"
                    },
                    "mainhand"
                )
                .modifiers();
            item.setAttributeModifiersWithTooltip(modifiers);
        });
        // 仿制瓦吉特法杖
        event.modify('cataclysm_spellbooks:fake_wudjets_staff', item => {
            var modifiers = item
                .item()
                .getDefaultInstance()
                .getAttributeModifiers()
                .withModifierAdded(
                    "minecraft:generic.attack_damage",
                    {
                        "operation": 0,
                        "amount": 7,
                        "id": "shh_attack_damage:mainhand"
                    },
                    "mainhand"
                )
                .modifiers();
            item.setAttributeModifiersWithTooltip(modifiers);
        });
        // 虚空魔杖
        event.modify('cataclysm_spellbooks:void_staff', item => {
            var modifiers = item
                .item()
                .getDefaultInstance()
                .getAttributeModifiers()
                .withModifierAdded(
                    "minecraft:generic.attack_damage",
                    {
                        "operation": 0,
                        "amount": 7,
                        "id": "shh_attack_damage:mainhand"
                    },
                    "mainhand"
                )
                .modifiers();
            item.setAttributeModifiersWithTooltip(modifiers);
        })
        // 灵魂决裂之杖
        event.modify('cataclysm_spellbooks:spirit_sunderer', item => {
            var modifiers = item
                .item()
                .getDefaultInstance()
                .getAttributeModifiers()
                .withModifierAdded(
                    "minecraft:generic.attack_damage",
                    {
                        "operation": 0,
                        "amount": 7,
                        "id": "shh_attack_damage:mainhand"
                    },
                    "mainhand"
                )
                .modifiers();
            item.setAttributeModifiersWithTooltip(modifiers);
        });
        // Soul Brazier
        event.modify('cataclysm_spellbooks:soul_brazier', item => {
            var modifiers = item
                .item()
                .getDefaultInstance()
                .getAttributeModifiers()
                .withModifierAdded(
                    "minecraft:generic.attack_damage",
                    {
                        "operation": 0,
                        "amount": 7,
                        "id": "shh_attack_damage:mainhand"
                    },
                    "mainhand"
                )
                .modifiers();
            item.setAttributeModifiersWithTooltip(modifiers);
        })


        // 近战武器

        // 恶兽焰型剑
        event.modify('cataclysm_spellbooks:monstrous_flamberge', item => {
            var modifiers = item
                .item()
                .getDefaultInstance()
                .getAttributeModifiers()
                .withModifierAdded(
                    "minecraft:generic.attack_damage",
                    {
                        "operation": 0,
                        "amount": 9,
                        "id": "shh_attack_damage:mainhand"
                    },
                    "mainhand"
                )
                .modifiers();
            item.setAttributeModifiersWithTooltip(modifiers);
        });
        // 狱火锻锤
        event.modify('cataclysm_spellbooks:hellfire_forge', item => {
            var modifiers = item
                .item()
                .getDefaultInstance()
                .getAttributeModifiers()
                .withModifierAdded(
                    "minecraft:generic.attack_damage",
                    {
                        "operation": 0,
                        "amount": 9,
                        "id": "shh_attack_damage:mainhand"
                    },
                    "mainhand"
                )
                .modifiers();
            item.setAttributeModifiersWithTooltip(modifiers);
        })


        // 深渊术士套装

        // 深渊术士兜帽
        event.modify(['cataclysm_spellbooks:abyssal_warlock_helmet', 'cataclysm_spellbooks:abyssal_warlock_mask'], item => {
            var modifiers = item
                .item()
                .getDefaultInstance()
                .getAttributeModifiers()
                .withModifierAdded(
                    "minecraft:generic.armor",
                    {
                        "operation": 0,
                        "amount": 4,
                        "id": "shh_armor:head"
                    },
                    "head"
                )
                .withModifierAdded(
                    "irons_spellbooks:max_mana",
                    {
                        "operation": 0,
                        "amount": 75,
                        "id": "shh_max_mana:head"
                    },
                    "head"
                )
                .modifiers();
            item.setAttributeModifiersWithTooltip(modifiers);
        })
        // 深渊术士长袍
        event.modify('cataclysm_spellbooks:abyssal_warlock_chestplate', item => {
            var modifiers = item
                .item()
                .getDefaultInstance()
                .getAttributeModifiers()
                .withModifierAdded(
                    "minecraft:generic.armor",
                    {
                        "operation": 0,
                        "amount": 4,
                        "id": "shh_armor:chest"
                    },
                    "chest"
                )
                .withModifierAdded(
                    "irons_spellbooks:max_mana",
                    {
                        "operation": 0,
                        "amount": 75,
                        "id": "shh_max_mana:chest"
                    },
                    "chest"
                )
                .modifiers();
            item.setAttributeModifiersWithTooltip(modifiers);
        })
        // 深渊术士护腿
        event.modify('cataclysm_spellbooks:abyssal_warlock_leggings', item => {
            var modifiers = item
                .item()
                .getDefaultInstance()
                .getAttributeModifiers()
                .withModifierAdded(
                    "minecraft:generic.armor",
                    {
                        "operation": 0,
                        "amount": 4,
                        "id": "shh_armor:legs"
                    },
                    "legs"
                )
                .withModifierAdded(
                    "irons_spellbooks:max_mana",
                    {
                        "operation": 0,
                        "amount": 75,
                        "id": "shh_max_mana:legs"
                    },
                    "legs"
                )
                .modifiers();
            item.setAttributeModifiersWithTooltip(modifiers);
        })
        // 深渊术士长靴
        event.modify('cataclysm_spellbooks:abyssal_warlock_boots', item => {
            var modifiers = item
                .item()
                .getDefaultInstance()
                .getAttributeModifiers()
                .withModifierAdded(
                    "minecraft:generic.armor",
                    {
                        "operation": 0,
                        "amount": 4,
                        "id": "shh_armor:feet"
                    },
                    "feet"
                )
                .withModifierAdded(
                    "irons_spellbooks:max_mana",
                    {
                        "operation": 0,
                        "amount": 75,
                        "id": "shh_max_mana:feet"
                    },
                    "feet"
                )
                .modifiers();
            item.setAttributeModifiersWithTooltip(modifiers);
        })

        // 咒魂法师套装

        // 咒魂法师兜帽
        event.modify('cataclysm_spellbooks:cursium_mage_circlet', item => {
            var modifiers = item
                .item()
                .getDefaultInstance()
                .getAttributeModifiers()
                .withModifierAdded(
                    "minecraft:generic.armor",
                    {
                        "operation": 0,
                        "amount": 4,
                        "id": "shh_armor:head"
                    },
                    "head"
                )
                .withModifierAdded(
                    "irons_spellbooks:max_mana",
                    {
                        "operation": 0,
                        "amount": 75,
                        "id": "shh_max_mana:head"
                    },
                    "head"
                )
                .modifiers();
            item.setAttributeModifiersWithTooltip(modifiers);
        })
        // 咒魂法师长袍
        event.modify(['cataclysm_spellbooks:cursium_mage_chestplate', 'cataclysm_spellbooks:cursium_mage_elytra'], item => {
            var modifiers = item
                .item()
                .getDefaultInstance()
                .getAttributeModifiers()
                .withModifierAdded(
                    "minecraft:generic.armor",
                    {
                        "operation": 0,
                        "amount": 4,
                        "id": "shh_armor:chest"
                    },
                    "chest"
                )
                .withModifierAdded(
                    "irons_spellbooks:max_mana",
                    {
                        "operation": 0,
                        "amount": 75,
                        "id": "shh_max_mana:chest"
                    },
                    "chest"
                )
                .modifiers();
            item.setAttributeModifiersWithTooltip(modifiers);
        })
        // 咒魂法师护腿
        event.modify('cataclysm_spellbooks:cursium_mage_skirt', item => {
            var modifiers = item
                .item()
                .getDefaultInstance()
                .getAttributeModifiers()
                .withModifierAdded(
                    "minecraft:generic.armor",
                    {
                        "operation": 0,
                        "amount": 4,
                        "id": "shh_armor:legs"
                    },
                    "legs"
                )
                .withModifierAdded(
                    "irons_spellbooks:max_mana",
                    {
                        "operation": 0,
                        "amount": 75,
                        "id": "shh_max_mana:legs"
                    },
                    "legs"
                )
                .modifiers();
            item.setAttributeModifiersWithTooltip(modifiers);
        })
        // 咒魂法师长靴
        event.modify('cataclysm_spellbooks:cursium_mage_boots', item => {
            var modifiers = item
                .item()
                .getDefaultInstance()
                .getAttributeModifiers()
                .withModifierAdded(
                    "minecraft:generic.armor",
                    {
                        "operation": 0,
                        "amount": 4,
                        "id": "shh_armor:feet"
                    },
                    "feet"
                )
                .withModifierAdded(
                    "irons_spellbooks:max_mana",
                    {
                        "operation": 0,
                        "amount": 75,
                        "id": "shh_max_mana:feet"
                    },
                    "feet"
                )
                .modifiers();
            item.setAttributeModifiersWithTooltip(modifiers);
        })

        // 腾炎法师套装

        // 腾炎法师兜帽
        event.modify('cataclysm_spellbooks:ignis_helmet', item => {
            var modifiers = item
                .item()
                .getDefaultInstance()
                .getAttributeModifiers()
                .withModifierAdded(
                    "minecraft:generic.armor",
                    {
                        "operation": 0,
                        "amount": 4,
                        "id": "shh_armor:head"
                    },
                    "head"
                )
                .withModifierAdded(
                    "irons_spellbooks:max_mana",
                    {
                        "operation": 0,
                        "amount": 75,
                        "id": "shh_max_mana:head"
                    },
                    "head"
                )
                .modifiers();
            item.setAttributeModifiersWithTooltip(modifiers);
        })
        // 腾炎法师长袍
        event.modify(['cataclysm_spellbooks:ignis_chestplate', 'cataclysm_spellbooks:ignis_chestplate_elytra'], item => {
            var modifiers = item
                .item()
                .getDefaultInstance()
                .getAttributeModifiers()
                .withModifierAdded(
                    "minecraft:generic.armor",
                    {
                        "operation": 0,
                        "amount": 4,
                        "id": "shh_armor:chest"
                    },
                    "chest"
                )
                .withModifierAdded(
                    "irons_spellbooks:max_mana",
                    {
                        "operation": 0,
                        "amount": 75,
                        "id": "shh_max_mana:chest"
                    },
                    "chest"
                )
                .modifiers();
            item.setAttributeModifiersWithTooltip(modifiers);
        })
        // 腾炎法师护腿
        event.modify('cataclysm_spellbooks:ignis_leggings', item => {
            var modifiers = item
                .item()
                .getDefaultInstance()
                .getAttributeModifiers()
                .withModifierAdded(
                    "minecraft:generic.armor",
                    {
                        "operation": 0,
                        "amount": 4,
                        "id": "shh_armor:legs"
                    },
                    "legs"
                )
                .withModifierAdded(
                    "irons_spellbooks:max_mana",
                    {
                        "operation": 0,
                        "amount": 75,
                        "id": "shh_max_mana:legs"
                    },
                    "legs"
                )
                .modifiers();
            item.setAttributeModifiersWithTooltip(modifiers);
        })
        // 腾炎法师长靴
        event.modify('cataclysm_spellbooks:ignis_boots', item => {
            var modifiers = item
                .item()
                .getDefaultInstance()
                .getAttributeModifiers()
                .withModifierAdded(
                    "minecraft:generic.armor",
                    {
                        "operation": 0,
                        "amount": 4,
                        "id": "shh_armor:feet"
                    },
                    "feet"
                )
                .withModifierAdded(
                    "irons_spellbooks:max_mana",
                    {
                        "operation": 0,
                        "amount": 75,
                        "id": "shh_max_mana:feet"
                    },
                    "feet"
                )
                .modifiers();
            item.setAttributeModifiersWithTooltip(modifiers);
        })
    }
})