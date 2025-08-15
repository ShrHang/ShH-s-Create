// 玫瑰石英工具
ItemEvents.modification(event => {
    //玫瑰石英剑
    event.modify('create_sa:rose_quartz_sword', item => {
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
        .withModifierAdded(
            "minecraft:player.entity_interaction_range",
            {
                "operation": 0,
                "amount": 3,
                "id": "shh_entity_interaction:mainhand"
            },
            "mainhand"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    //玫瑰石英斧
    event.modify('create_sa:rose_quartz_axe', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.attack_damage",
            {
                "operation": 0,
                "amount": 6,
                "id": "shh_attack_damage:mainhand"
            },
            "mainhand"
        )
        .withModifierAdded(
            "minecraft:player.entity_interaction_range",
            {
                "operation": 0,
                "amount": 3,
                "id": "shh_entity_interaction:mainhand"
            },
            "mainhand"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    //玫瑰石英镐
    event.modify('create_sa:rose_quartz_pickaxe', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:player.entity_interaction_range",
            {
                "operation": 0,
                "amount": 3,
                "id": "shh_entity_interaction:mainhand"
            },
            "mainhand"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    //玫瑰石英铲
    event.modify('create_sa:rose_quartz_shovel', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:player.entity_interaction_range",
            {
                "operation": 0,
                "amount": 3,
                "id": "shh_entity_interaction:mainhand"
            },
            "mainhand"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
});
// 铜工具
ItemEvents.modification(event => {
    // 铜剑
    event.modify('create_sa:copper_sword', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.attack_damage",
            {
                "operation": 0,
                "amount": 6.5,
                "id": "shh_attack_damage:mainhand"
            },
            "mainhand"
        )
        .withModifierAdded(
            "irons_spellbooks:lightning_spell_power",
            {
                "operation": 0,
                "amount": 0.05,
                "id": "shh_lightning_spell_power:mainhand"
            },
            "mainhand"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 铜斧
    event.modify('create_sa:copper_axe', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.attack_damage",
            {
                "operation": 0,
                "amount": 8,
                "id": "shh_attack_damage:mainhand"
            },
            "mainhand"
        )
        .withModifierAdded(
            "irons_spellbooks:lightning_spell_power",
            {
                "operation": 0,
                "amount": 0.05,
                "id": "shh_lightning_spell_power:mainhand"
            },
            "mainhand"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 铜镐
    event.modify('create_sa:copper_pickaxe', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "irons_spellbooks:lightning_spell_power",
            {
                "operation": 0,
                "amount": 0.05,
                "id": "shh_lightning_spell_power:mainhand"
            },
            "mainhand"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 铜铲
    event.modify('create_sa:copper_shovel', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "irons_spellbooks:lightning_spell_power",
            {
                "operation": 0,
                "amount": 0.05,
                "id": "shh_lightning_spell_power:mainhand"
            },
            "mainhand"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
})
// 锌工具
ItemEvents.modification(event => {
    // 锌剑
    event.modify('create_sa:zinc_sword', item => {
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
    // 锌斧
    event.modify('create_sa:zinc_axe', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.attack_damage",
            {
                "operation": 0,
                "amount": 6,
                "id": "shh_attack_damage:mainhand"
            },
            "mainhand"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
})
// 黄铜工具
ItemEvents.modification(event => {
    // 黄铜剑
    event.modify('create_sa:brass_sword', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.attack_damage",
            {
                "operation": 0,
                "amount": 6,
                "id": "shh_attack_damage:mainhand"
            },
            "mainhand"
        )
        .withModifierAdded(
            "irons_spellbooks:lightning_spell_power",
            {
                "operation": 0,
                "amount": 0.05,
                "id": "shh_lightning_spell_power:mainhand"
            },
            "mainhand"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 黄铜斧
    event.modify('create_sa:brass_axe', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.attack_damage",
            {
                "operation": 0,
                "amount": 6,
                "id": "shh_attack_damage:mainhand"
            },
            "mainhand"
        )
        .withModifierAdded(
            "irons_spellbooks:lightning_spell_power",
            {
                "operation": 0,
                "amount": 0.05,
                "id": "shh_lightning_spell_power:mainhand"
            },
            "mainhand"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 黄铜镐
    event.modify('create_sa:brass_pickaxe', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "irons_spellbooks:lightning_spell_power",
            {
                "operation": 0,
                "amount": 0.05,
                "id": "shh_lightning_spell_power:mainhand"
            },
            "mainhand"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 黄铜铲
    event.modify('create_sa:brass_shovel', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "irons_spellbooks:lightning_spell_power",
            {
                "operation": 0,
                "amount": 0.05,
                "id": "shh_lightning_spell_power:mainhand"
            },
            "mainhand"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
})
// 烈焰工具
ItemEvents.modification(event => {
    // 烈焰长剑
    event.modify('create_sa:blazing_cleaver', item => {
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
        .withModifierAdded(
            "player.sweeping_damage_ratio",
            {
                "operation": 0,
                "amount": 1,
                "id": "shh_sweeping_damage_ratio:mainhand"
            },
            "mainhand"
        )
        .withModifierAdded(
            "artifacts:generic.attack_burning_duration",
            {
                "operation": 1,
                "amount": 0.4,
                "id": "shh_attack_burning_duration:mainhand"
            },
            "mainhand"
        )
        .withModifierAdded(
            "irons_spellbooks:fire_spell_power",
            {
                "operation": 0,
                "amount": 0.1,
                "id": "shh_fire_spell_power:mainhand"
            },
            "mainhand"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 烈焰斧
    event.modify('create_sa:blazing_axe', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.attack_damage",
            {
                "operation": 0,
                "amount": 6,
                "id": "shh_attack_damage:mainhand"
            },
            "mainhand"
        )
        .withModifierAdded(
            "artifacts:generic.attack_burning_duration",
            {
                "operation": 1,
                "amount": 0.4,
                "id": "shh_attack_burning_duration:mainhand"
            },
            "mainhand"
        )
        .withModifierAdded(
            "irons_spellbooks:fire_spell_power",
            {
                "operation": 0,
                "amount": 0.1,
                "id": "shh_fire_spell_power:mainhand"
            },
            "mainhand"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 烈焰镐
    event.modify('create_sa:blazing_pickaxe', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "artifacts:generic.attack_burning_duration",
            {
                "operation": 1,
                "amount": 0.4,
                "id": "shh_attack_burning_duration:mainhand"
            },
            "mainhand"
        )
        .withModifierAdded(
            "irons_spellbooks:fire_spell_power",
            {
                "operation": 0,
                "amount": 0.1,
                "id": "shh_fire_spell_power:mainhand"
            },
            "mainhand"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 烈焰铲
    event.modify('create_sa:blazing_shovel', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "artifacts:generic.attack_burning_duration",
            {
                "operation": 1,
                "amount": 0.4,
                "id": "shh_attack_burning_duration:mainhand"
            },
            "mainhand"
        )
        .withModifierAdded(
            "irons_spellbooks:fire_spell_power",
            {
                "operation": 0,
                "amount": 0.1,
                "id": "shh_fire_spell_power:mainhand"
            },
            "mainhand"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
})
// 经验工具
ItemEvents.modification(event => {
    // 经验剑
    event.modify('create_sa:experience_sword', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.attack_damage",
            {
                "operation": 0,
                "amount": 6,
                "id": "shh_attack_damage:mainhand"
            },
            "mainhand"
        )
        .withModifierAdded(
            "minecraft:generic.attack_speed",
            {
                "operation": 0,
                "amount": 0.2,
                "id": "shh_attack_speed:mainhand"
            },
            "mainhand"
        )
        .withModifierAdded(
            "minecraft:generic.luck",
            {
                "operation": 0,
                "amount": 2,
                "id": "shh_luck:mainhand"
            },
            "mainhand"
        )
        .withModifierAdded(
            "minecraft:generic.luck",
            {
                "operation": 0,
                "amount": 2,
                "id": "shh_luck:offhand"
            },
            "offhand"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 经验斧
    event.modify('create_sa:experience_axe', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.attack_damage",
            {
                "operation": 0,
                "amount": 6,
                "id": "shh_attack_damage:mainhand"
            },
            "mainhand"
        )
        .withModifierAdded(
            "minecraft:generic.attack_speed",
            {
                "operation": 0,
                "amount": 0.2,
                "id": "shh_attack_speed:mainhand"
            },
            "mainhand"
        )
        .withModifierAdded(
            "minecraft:generic.luck",
            {
                "operation": 0,
                "amount": 2,
                "id": "shh_luck:mainhand"
            },
            "mainhand"
        )
        .withModifierAdded(
            "minecraft:generic.luck",
            {
                "operation": 0,
                "amount": 2,
                "id": "shh_luck:offhand"
            },
            "offhand"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 经验镐
    event.modify('create_sa:experience_pickaxe', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.attack_speed",
            {
                "operation": 0,
                "amount": 0.2,
                "id": "shh_attack_speed:mainhand"
            },
            "mainhand"
        )
        .withModifierAdded(
            "minecraft:generic.luck",
            {
                "operation": 0,
                "amount": 2,
                "id": "shh_luck:mainhand"
            },
            "mainhand"
        )
        .withModifierAdded(
            "minecraft:generic.luck",
            {
                "operation": 0,
                "amount": 2,
                "id": "shh_luck:offhand"
            },
            "offhand"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 经验铲
    event.modify('create_sa:experience_shovel', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.attack_speed",
            {
                "operation": 0,
                "amount": 0.2,
                "id": "shh_attack_speed:mainhand"
            },
            "mainhand"
        )
        .withModifierAdded(
            "minecraft:generic.luck",
            {
                "operation": 0,
                "amount": 2,
                "id": "shh_luck:mainhand"
            },
            "mainhand"
        )
        .withModifierAdded(
            "minecraft:generic.luck",
            {
                "operation": 0,
                "amount": 2,
                "id": "shh_luck:offhand"
            },
            "offhand"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
})


// 铜盔甲
ItemEvents.modification(event => {
    // 铜头盔
    event.modify('create_sa:copper_helmet', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 6,
                "id": "shh_armor:head"
            },
            "head"
        )
        .withModifierAdded(
            "irons_spellbooks:lightning_spell_power",
            {
                "operation": 0,
                "amount": 0.05,
                "id": "shh_lightning_spell_power:head"
            },
            "head"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 铜胸甲
    event.modify('create_sa:copper_chestplate', item => {
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
            "irons_spellbooks:lightning_spell_power",
            {
                "operation": 0,
                "amount": 0.05,
                "id": "shh_lightning_spell_power:chest"
            },
            "chest"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 铜护腿
    event.modify('create_sa:copper_leggings', item => {
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
            "irons_spellbooks:lightning_spell_power",
            {
                "operation": 0,
                "amount": 0.05,
                "id": "shh_lightning_spell_power:legs"
            },
            "legs"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 铜靴子
    event.modify('create_sa:copper_boots', item => {
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
            "irons_spellbooks:lightning_spell_power",
            {
                "operation": 0,
                "amount": 0.05,
                "id": "shh_lightning_spell_power:feet"
            },
            "feet"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
})
// 锌盔甲
ItemEvents.modification(event => {
    // 锌头盔
    event.modify('create_sa:zinc_helmet', item => {
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
            "curseofpandora:reality_index",
            {
                "operation": 0,
                "amount": 0.25,
                "id": "shh_reality_index:head"
            },
            "head"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 锌胸甲
    event.modify('create_sa:zinc_chestplate', item => {
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
            "curseofpandora:reality_index",
            {
                "operation": 0,
                "amount": 0.25,
                "id": "shh_reality_index:chest"
            },
            "chest"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 锌护腿
    event.modify('create_sa:zinc_leggings', item => {
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
            "curseofpandora:reality_index",
            {
                "operation": 0,
                "amount": 0.25,
                "id": "shh_reality_index:legs"
            },
            "legs"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 锌靴子
    event.modify('create_sa:zinc_boots', item => {
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
            "curseofpandora:reality_index",
            {
                "operation": 0,
                "amount": 0.25,
                "id": "shh_reality_index:feet"
            },
            "feet"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
})
// 黄铜盔甲
ItemEvents.modification(event => {
    // 黄铜头盔
    event.modify('create_sa:brass_helmet', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 5,
                "id": "shh_armor:head"
            },
            "head"
        )
        .withModifierAdded(
            "irons_spellbooks:lightning_spell_power",
            {
                "operation": 0,
                "amount": 0.05,
                "id": "shh_lightning_spell_power:head"
            },
            "head"
        )
        .withModifierAdded(
            "curseofpandora:reality_index",
            {
                "operation": 0,
                "amount": 0.5,
                "id": "shh_reality_index:head"
            },
            "head"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 黄铜胸甲
    event.modify('create_sa:brass_chestplate', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 5,
                "id": "shh_armor:chest"
            },
            "chest"
        )
        .withModifierAdded(
            "irons_spellbooks:lightning_spell_power",
            {
                "operation": 0,
                "amount": 0.05,
                "id": "shh_lightning_spell_power:chest"
            },
            "chest"
        )
        .withModifierAdded(
            "curseofpandora:reality_index",
            {
                "operation": 0,
                "amount": 0.5,
                "id": "shh_reality_index:chest"
            },
            "chest"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });

    // 黄铜护腿
    event.modify('create_sa:brass_leggings', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 5,
                "id": "shh_armor:legs"
            },
            "legs"
        )
        .withModifierAdded(
            "irons_spellbooks:lightning_spell_power",
            {
                "operation": 0,
                "amount": 0.05,
                "id": "shh_lightning_spell_power:legs"
            },
            "legs"
        )
        .withModifierAdded(
            "curseofpandora:reality_index",
            {
                "operation": 0,
                "amount": 0.5,
                "id": "shh_reality_index:legs"
            },
            "legs"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 黄铜靴子
    event.modify('create_sa:brass_boots', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 5,
                "id": "shh_armor:feet"
            },
            "feet"
        )
        .withModifierAdded(
            "irons_spellbooks:lightning_spell_power",
            {
                "operation": 0,
                "amount": 0.05,
                "id": "shh_lightning_spell_power:feet"
            },
            "feet"
        )
        .withModifierAdded(
            "curseofpandora:reality_index",
            {
                "operation": 0,
                "amount": 0.5,
                "id": "shh_reality_index:feet"
            },
            "feet"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
})
// 粘液套装
ItemEvents.modification(event => {
    // 粘液头盔
    event.modify('create_sa:slime_helmet', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 3,
                "id": "shh_armor:head"
            },
            "head"
        )
        .withModifierAdded(
            "l2damagetracker:damage_absorption",
            {
                "operation": 0,
                "amount": 2,
                "id": "shh_l2_damage_absorption:head"
            },
            "head"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 粘液靴子
    event.modify('create_sa:slime_boots', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 3,
                "id": "shh_armor:feet"
            },
            "feet"
        )
        .withModifierAdded(
            "minecraft:generic.jump_strength",
            {
                "operation": 0,
                "amount": 0.5,
                "id": "shh_jump_strength:feet"
            },
            "feet"
        )
        .withModifierAdded(
            "artifacts:generic.sprinting_speed",
            {
                "operation": 0,
                "amount": 0.3,
                "id": "shh_sprinting_speed:feet"
            },
            "feet"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
})


// 喷气背包
ItemEvents.modification(event => {
    // 安山喷气背包
    event.modify('create_sa:andesite_jetpack_chestplate', item => {
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
            "curseofpandora:reality_index",
            {
                "operation": 0,
                "amount": 0.25,
                "id": "shh_reality_index:chest"
            },
            "chest"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 铜喷气背包
    event.modify('create_sa:copper_jetpack_chestplate', item => {
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
            "irons_spellbooks:lightning_spell_power",
            {
                "operation": 0,
                "amount": 0.05,
                "id": "shh_lightning_spell_power:chest"
            },
            "chest"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 黄铜喷气背包
    event.modify('create_sa:brass_jetpack_chestplate', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 5,
                "id": "shh_armor:chest"
            },
            "chest"
        )
        .withModifierAdded(
            "irons_spellbooks:lightning_spell_power",
            {
                "operation": 0,
                "amount": 0.05,
                "id": "shh_lightning_spell_power:chest"
            },
            "chest"
        )
        .withModifierAdded(
            "curseofpandora:reality_index",
            {
                "operation": 0,
                "amount": 0.5,
                "id": "shh_reality_index:chest"
            },
            "chest"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 下界合金喷气背包
    event.modify('create_sa:netherite_jetpack_chestplate', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 6,
                "id": "shh_armor:chest"
            },
            "chest"
        )
        .withModifierAdded(
            "minecraft:generic.armor_toughness",
            {
                "operation": 0,
                "amount": 5,
                "id": "shh_armor_toughness:chest"
            },
            "chest"
        )
        .withModifierAdded(
            "l2damagetracker:damage_reduction",
            {
                "operation": 0,
                "amount": -0.05,
                "id": "shh_l2_damage_reduction:chest"
            },
            "chest"
        )
        .withModifierAdded(
            "curseofpandora:reality_index",
            {
                "operation": 0,
                "amount": 1,
                "id": "shh_reality_index:chest"
            },
            "chest"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
});
// 外骨骼
ItemEvents.modification(event => {
    // 安山外骨骼
    event.modify('create_sa:andesite_exoskeleton_chestplate', item => {
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
            "curseofpandora:reality_index",
            {
                "operation": 0,
                "amount": 0.25,
                "id": "shh_reality_index:chest"
            },
            "chest"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 铜外骨骼
    event.modify('create_sa:copper_exoskeleton_chestplate', item => {
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
            "irons_spellbooks:lightning_spell_power",
            {
                "operation": 0,
                "amount": 0.05,
                "id": "shh_lightning_spell_power:chest"
            },
            "chest"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
    // 黄铜外骨骼
    event.modify('create_sa:brass_exoskeleton_chestplate', item => {
        var modifiers = item
        .item()
        .getDefaultInstance()
        .getAttributeModifiers()
        .withModifierAdded(
            "minecraft:generic.armor",
            {
                "operation": 0,
                "amount": 5,
                "id": "shh_armor:chest"
            },
            "chest"
        )
        .withModifierAdded(
            "irons_spellbooks:lightning_spell_power",
            {
                "operation": 0,
                "amount": 0.05,
                "id": "shh_lightning_spell_power:chest"
            },
            "chest"
        )
        .withModifierAdded(
            "curseofpandora:reality_index",
            {
                "operation": 0,
                "amount": 0.5,
                "id": "shh_reality_index:chest"
            },
            "chest"
        )
        .modifiers();
        item.setAttributeModifiersWithTooltip(modifiers);
    });
})

