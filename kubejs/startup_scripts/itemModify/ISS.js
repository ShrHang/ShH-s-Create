// requires: irons_spellbooks
ItemEvents.modification(event => {
    // 法杖
    {
        // 猩红神杖
        event.modify('irons_spellbooks:blood_staff', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.attack_damage", amount: 6, id: "shh_attack_damage:mainhand", slot: "mainhand" }
            ]);
        });
        // 长者手杖
        event.modify('irons_spellbooks:graybeard_staff', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.attack_damage", amount: 6, id: "shh_attack_damage:mainhand", slot: "mainhand" }
            ])
        });
        // 冰霜魔杖
        event.modify('irons_spellbooks:ice_staff', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.attack_damage", amount: 6, id: "shh_attack_damage:mainhand", slot: "mainhand" }
            ]);
        });
        // 匠师之杖
        event.modify('irons_spellbooks:artificer_cane', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.attack_damage", amount: 6, id: "shh_attack_damage:mainhand", slot: "mainhand" }
            ]);
        });
        // 雷霆之杖
        event.modify('irons_spellbooks:lightning_rod', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.attack_damage", amount: 6, id: "shh_attack_damage:mainhand", slot: "mainhand" }
            ]);
        });
        // 炽金魔杖
        event.modify('irons_spellbooks:pyrium_staff', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.attack_damage", amount: 6, id: "shh_attack_damage:mainhand", slot: "mainhand" }
            ]);
        });
    }

    // 近战武器
    {
        // 狩魔人之剑
        event.modify('irons_spellbooks:magehunter', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.attack_damage", amount: 6, id: "shh_attack_damage:mainhand", slot: "mainhand" }
            ]);
        });
        // 破法者
        event.modify('irons_spellbooks:spellbreaker', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.attack_damage", amount: 7, id: "shh_attack_damage:mainhand", slot: "mainhand" }
            ]);
        });
        // 紫水晶刺剑
        event.modify('irons_spellbooks:amethyst_rapier', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.attack_damage", amount: 6, id: "shh_attack_damage:mainhand", slot: "mainhand" },
                { attribute: "irons_spellbooks:spell_power", operation: 1, amount: 0.05, id: "shh_spell_power:mainhand", slot: "mainhand" }
            ])
        });
        // 破败焰型剑
        event.modify('irons_spellbooks:keeper_flamberge', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.attack_damage", amount: 6, id: "shh_attack_damage:mainhand", slot: "mainhand" }
            ]);
        });
        // 军团焰型剑
        event.modify('irons_spellbooks:legionnaire_flamberge', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.attack_damage", amount: 8, id: "shh_attack_damage:mainhand", slot: "mainhand" }
            ]);
        });
        // 破败战镰
        event.modify('irons_spellbooks:decrepit_scythe', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.attack_damage", amount: 6, id: "shh_attack_damage:mainhand", slot: "mainhand" },
                { attribute: "minecraft:player.entity_interaction_range", amount: 2, id: "shh_entity_interaction:mainhand", slot: "mainhand" }
            ]);
        });
        // 地狱战镰
        event.modify('irons_spellbooks:hellrazor', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.attack_damage", amount: 8, id: "shh_attack_damage:mainhand", slot: "mainhand" },
                { attribute: "minecraft:player.entity_interaction_range", amount: 2, id: "shh_entity_interaction:mainhand", slot: "mainhand" }
            ]);
        });
        // 北冰之刃
        event.modify('irons_spellbooks:boreal_blade', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.attack_damage", amount: 6, id: "shh_attack_damage:mainhand", slot: "mainhand" },
                { attribute: "minecraft:generic.attack_speed", amount: 0.4, id: "shh_attack_speed:mainhand", slot: "mainhand" },
                { attribute: "minecraft:player.entity_interaction_range", amount: 1, id: "shh_entity_interaction:mainhand", slot: "mainhand" }
            ]);
        });
    }

    // 流浪法师套装
    {
        // 流浪法师兜帽
        event.modify('irons_spellbooks:wandering_magician_helmet', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 3, id: "shh_armor:head", slot: "head" },
                { attribute: "irons_spellbooks:max_mana", amount: 50, id: "shh_max_mana:head", slot: "head" }
            ]);
        })
        // 流浪法师法袍
        event.modify('irons_spellbooks:wandering_magician_chestplate', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 3, id: "shh_armor:chest", slot: "chest" },
                { attribute: "irons_spellbooks:max_mana", amount: 50, id: "shh_max_mana:chest", slot: "chest" }
            ]);
        })
        // 流浪法师裤子
        event.modify('irons_spellbooks:wandering_magician_leggings', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 3, id: "shh_armor:legs", slot: "legs" },
                { attribute: "irons_spellbooks:max_mana", amount: 50, id: "shh_max_mana:legs", slot: "legs" }
            ]);
        })
        // 流浪法师靴子
        event.modify('irons_spellbooks:wandering_magician_boots', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 3, id: "shh_armor:feet", slot: "feet" },
                { attribute: "irons_spellbooks:max_mana", amount: 50, id: "shh_max_mana:feet", slot: "feet" }
            ]);
        })
    }

    // 惊悚南瓜套装
    {
        // 惊悚南瓜帽子
        event.modify('irons_spellbooks:pumpkin_helmet', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 3, id: "shh_armor:head", slot: "head" },
                { attribute: "irons_spellbooks:max_mana", amount: 50, id: "shh_max_mana:head", slot: "head" }
            ]);
        })
        // 惊悚南瓜法袍
        event.modify('irons_spellbooks:pumpkin_chestplate', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 3, id: "shh_armor:chest", slot: "chest" },
                { attribute: "irons_spellbooks:max_mana", amount: 50, id: "shh_max_mana:chest", slot: "chest" }
            ]);
        })
        // 惊悚南瓜裤子
        event.modify('irons_spellbooks:pumpkin_leggings', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 3, id: "shh_armor:legs", slot: "legs" },
                { attribute: "irons_spellbooks:max_mana", amount: 50, id: "shh_max_mana:legs", slot: "legs" }
            ]);
        })
        // 惊悚南瓜靴子
        event.modify('irons_spellbooks:pumpkin_boots', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 3, id: "shh_armor:feet", slot: "feet" },
                { attribute: "irons_spellbooks:max_mana", amount: 50, id: "shh_max_mana:feet", slot: "feet" }
            ]);
        })
    }

    // 术士套装
    {
        // 术士兜帽
        event.modify('irons_spellbooks:wizard_helmet', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 3, id: "shh_armor:head", slot: "head" },
                { attribute: "irons_spellbooks:max_mana", amount: 75, id: "shh_max_mana:head", slot: "head" }
            ]);
        })
        // 术士法袍
        event.modify('irons_spellbooks:wizard_chestplate', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 3, id: "shh_armor:chest", slot: "chest" },
                { attribute: "irons_spellbooks:max_mana", amount: 75, id: "shh_max_mana:chest", slot: "chest" }
            ]);
        })
        // 术士裤子
        event.modify('irons_spellbooks:wizard_leggings', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 3, id: "shh_armor:legs", slot: "legs" },
                { attribute: "irons_spellbooks:max_mana", amount: 75, id: "shh_max_mana:legs", slot: "legs" }
            ]);
        })
        // 术士靴子
        event.modify('irons_spellbooks:wizard_boots', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 3, id: "shh_armor:feet", slot: "feet" },
                { attribute: "irons_spellbooks:max_mana", amount: 75, id: "shh_max_mana:feet", slot: "feet" }
            ]);
        })
    }

    // 高位唤魔者套装
    {
        // 高位唤魔者法帽
        event.modify('irons_spellbooks:archevoker_helmet', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 3, id: "shh_armor:head", slot: "head" },
                { attribute: "irons_spellbooks:max_mana", amount: 75, id: "shh_max_mana:head", slot: "head" }
            ]);
        })
        // 高位唤魔者法袍
        event.modify('irons_spellbooks:archevoker_chestplate', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 3, id: "shh_armor:chest", slot: "chest" },
                { attribute: "irons_spellbooks:max_mana", amount: 75, id: "shh_max_mana:chest", slot: "chest" }
            ]);
        })
        // 高位唤魔者裤子
        event.modify('irons_spellbooks:archevoker_leggings', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 3, id: "shh_armor:legs", slot: "legs" },
                { attribute: "irons_spellbooks:max_mana", amount: 75, id: "shh_max_mana:legs", slot: "legs" }
            ]);
        })
        // 高位唤魔者靴子
        event.modify('irons_spellbooks:archevoker_boots', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 3, id: "shh_armor:feet", slot: "feet" },
                { attribute: "irons_spellbooks:max_mana", amount: 75, id: "shh_max_mana:feet", slot: "feet" }
            ]);
        })
    }

    // 雷霆术士套装
    {
        // 雷霆术士兜帽
        event.modify('irons_spellbooks:electromancer_helmet', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 3, id: "shh_armor:head", slot: "head" },
                { attribute: "irons_spellbooks:max_mana", amount: 75, id: "shh_max_mana:head", slot: "head" }
            ]);
        })
        // 雷霆术士法袍
        event.modify('irons_spellbooks:electromancer_chestplate', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 3, id: "shh_armor:chest", slot: "chest" },
                { attribute: "irons_spellbooks:max_mana", amount: 75, id: "shh_max_mana:chest", slot: "chest" }
            ]);
        })
        // 雷霆术士裤子
        event.modify('irons_spellbooks:electromancer_leggings', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 3, id: "shh_armor:legs", slot: "legs" },
                { attribute: "irons_spellbooks:max_mana", amount: 75, id: "shh_max_mana:legs", slot: "legs" }
            ]);
        })
        // 雷霆术士靴子
        event.modify('irons_spellbooks:electromancer_boots', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 3, id: "shh_armor:feet", slot: "feet" },
                { attribute: "irons_spellbooks:max_mana", amount: 75, id: "shh_max_mana:feet", slot: "feet" }
            ]);
        })
    }

    // 炽焰术士套装
    {
        // 炽焰术士兜帽
        event.modify('irons_spellbooks:pyromancer_helmet', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 3, id: "shh_armor:head", slot: "head" },
                { attribute: "irons_spellbooks:max_mana", amount: 75, id: "shh_max_mana:head", slot: "head" }
            ]);
        })
        // 炽焰术士法袍
        event.modify('irons_spellbooks:pyromancer_chestplate', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 3, id: "shh_armor:chest", slot: "chest" },
                { attribute: "irons_spellbooks:max_mana", amount: 75, id: "shh_max_mana:chest", slot: "chest" }
            ]);
        })
        // 炽焰术士裤子
        event.modify('irons_spellbooks:pyromancer_leggings', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 3, id: "shh_armor:legs", slot: "legs" },
                { attribute: "irons_spellbooks:max_mana", amount: 75, id: "shh_max_mana:legs", slot: "legs" }
            ]);
        })
        // 炽焰术士靴子
        event.modify('irons_spellbooks:pyromancer_boots', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 3, id: "shh_armor:feet", slot: "feet" },
                { attribute: "irons_spellbooks:max_mana", amount: 75, id: "shh_max_mana:feet", slot: "feet" }
            ]);
        })
    }

    // 下界合金战斗法师套装
    {
        // 下界合金战斗法师帽
        event.modify('irons_spellbooks:netherite_mage_helmet', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 4, id: "shh_armor:head", slot: "head" },
                { attribute: "irons_spellbooks:max_mana", amount: 75, id: "shh_max_mana:head", slot: "head" }
            ]);
        })
        // 下界合金战斗法师法袍
        event.modify('irons_spellbooks:netherite_mage_chestplate', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 4, id: "shh_armor:chest", slot: "chest" },
                { attribute: "irons_spellbooks:max_mana", amount: 75, id: "shh_max_mana:chest", slot: "chest" }
            ]);
        })
        // 下界合金战斗法师裤子
        event.modify('irons_spellbooks:netherite_mage_leggings', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 4, id: "shh_armor:legs", slot: "legs" },
                { attribute: "irons_spellbooks:max_mana", amount: 75, id: "shh_max_mana:legs", slot: "legs" }
            ]);
        })
        // 下界合金战斗法师靴子
        event.modify('irons_spellbooks:netherite_mage_boots', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 4, id: "shh_armor:feet", slot: "feet" },
                { attribute: "irons_spellbooks:max_mana", amount: 75, id: "shh_max_mana:feet", slot: "feet" }
            ]);
        })
    }

    // 瘟疫术士套装
    {
        // 瘟疫术士兜帽
        event.modify('irons_spellbooks:plagued_helmet', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 3, id: "shh_armor:head", slot: "head" },
                { attribute: "irons_spellbooks:max_mana", amount: 75, id: "shh_max_mana:head", slot: "head" }
            ]);
        })
        // 瘟疫术士法袍
        event.modify('irons_spellbooks:plagued_chestplate', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 3, id: "shh_armor:chest", slot: "chest" },
                { attribute: "irons_spellbooks:max_mana", amount: 75, id: "shh_max_mana:chest", slot: "chest" }
            ]);
        })
        // 瘟疫术士裤子
        event.modify('irons_spellbooks:plagued_leggings', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 3, id: "shh_armor:legs", slot: "legs" },
                { attribute: "irons_spellbooks:max_mana", amount: 75, id: "shh_max_mana:legs", slot: "legs" }
            ]);
        })
        // 瘟疫术士靴子
        event.modify('irons_spellbooks:plagued_boots', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 3, id: "shh_armor:feet", slot: "feet" },
                { attribute: "irons_spellbooks:max_mana", amount: 75, id: "shh_max_mana:feet", slot: "feet" }
            ]);
        })
    }

    // 牧师套装
    {
        // 牧师兜帽
        event.modify('irons_spellbooks:priest_helmet', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 3, id: "shh_armor:head", slot: "head" },
                { attribute: "irons_spellbooks:max_mana", amount: 75, id: "shh_max_mana:head", slot: "head" }
            ]);
        })
        // 牧师法袍
        event.modify('irons_spellbooks:priest_chestplate', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 3, id: "shh_armor:chest", slot: "chest" },
                { attribute: "irons_spellbooks:max_mana", amount: 75, id: "shh_max_mana:chest", slot: "chest" }
            ]);
        })
        // 牧师裤子
        event.modify('irons_spellbooks:priest_leggings', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 3, id: "shh_armor:legs", slot: "legs" },
                { attribute: "irons_spellbooks:max_mana", amount: 75, id: "shh_max_mana:legs", slot: "legs" }
            ]);
        })
        // 牧师靴子
        event.modify('irons_spellbooks:priest_boots', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 3, id: "shh_armor:feet", slot: "feet" },
                { attribute: "irons_spellbooks:max_mana", amount: 75, id: "shh_max_mana:feet", slot: "feet" }
            ]);
        })
    }

    // 暗影行者套装
    {
        // 暗影行者兜帽
        event.modify('irons_spellbooks:shadowwalker_helmet', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 3, id: "shh_armor:head", slot: "head" },
                { attribute: "irons_spellbooks:max_mana", amount: 75, id: "shh_max_mana:head", slot: "head" }
            ]);
        })
        // 暗影行者法袍
        event.modify('irons_spellbooks:shadowwalker_chestplate', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 3, id: "shh_armor:chest", slot: "chest" },
                { attribute: "irons_spellbooks:max_mana", amount: 75, id: "shh_max_mana:chest", slot: "chest" }
            ]);
        })
        // 暗影行者裤子
        event.modify('irons_spellbooks:shadowwalker_leggings', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 3, id: "shh_armor:legs", slot: "legs" },
                { attribute: "irons_spellbooks:max_mana", amount: 75, id: "shh_max_mana:legs", slot: "legs" }
            ]);
        })
        // 暗影行者靴子
        event.modify('irons_spellbooks:shadowwalker_boots', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 3, id: "shh_armor:feet", slot: "feet" },
                { attribute: "irons_spellbooks:max_mana", amount: 75, id: "shh_max_mana:feet", slot: "feet" }
            ]);
        })
    }

    // 冰霜术士套装
    {
        // 冰霜术士兜帽
        event.modify('irons_spellbooks:cryomancer_helmet', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 3, id: "shh_armor:head", slot: "head" },
                { attribute: "irons_spellbooks:max_mana", amount: 75, id: "shh_max_mana:head", slot: "head" }
            ]);
        })
        // 冰霜术士法袍
        event.modify('irons_spellbooks:cryomancer_chestplate', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 3, id: "shh_armor:chest", slot: "chest" },
                { attribute: "irons_spellbooks:max_mana", amount: 75, id: "shh_max_mana:chest", slot: "chest" }
            ]);
        })
        // 冰霜术士裤子
        event.modify('irons_spellbooks:cryomancer_leggings', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 3, id: "shh_armor:legs", slot: "legs" },
                { attribute: "irons_spellbooks:max_mana", amount: 75, id: "shh_max_mana:legs", slot: "legs" }
            ]);
        })
        // 冰霜术士靴子
        event.modify('irons_spellbooks:cryomancer_boots', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 3, id: "shh_armor:feet", slot: "feet" },
                { attribute: "irons_spellbooks:max_mana", amount: 75, id: "shh_max_mana:feet", slot: "feet" }
            ]);
        })
    }

    // 猩红教徒套装
    {
        // 猩红教徒兜帽
        event.modify('irons_spellbooks:cultist_helmet', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 3, id: "shh_armor:head", slot: "head" },
                { attribute: "irons_spellbooks:max_mana", amount: 75, id: "shh_max_mana:head", slot: "head" }
            ]);
        })
        // 猩红教徒法袍
        event.modify('irons_spellbooks:cultist_chestplate', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 3, id: "shh_armor:chest", slot: "chest" },
                { attribute: "irons_spellbooks:max_mana", amount: 75, id: "shh_max_mana:chest", slot: "chest" }
            ]);
        })
        // 猩红教徒裤子
        event.modify('irons_spellbooks:cultist_leggings', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 3, id: "shh_armor:legs", slot: "legs" },
                { attribute: "irons_spellbooks:max_mana", amount: 75, id: "shh_max_mana:legs", slot: "legs" }
            ]);
        })
        // 猩红教徒靴子
        event.modify('irons_spellbooks:cultist_boots', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 3, id: "shh_armor:feet", slot: "feet" },
                { attribute: "irons_spellbooks:max_mana", amount: 75, id: "shh_max_mana:feet", slot: "feet" }
            ]);
        })
    }

    // 其它装备
    {
        // 暗淡皇冠
        event.modify('irons_spellbooks:tarnished_helmet', item => {
            addAttModifiers(item, [
                { attribute: "irons_spellbooks:max_mana", amount: 125, id: "shh_max_mana:head", slot: "head" },
                { attribute: "irons_spellbooks:spell_power", operation: 1, amount: 0.25, id: "shh_spell_power:head", slot: "head" },
                { attribute: "l2damagetracker:magic_damage", amount: 0.25, id: "shh_l2_magic_damage:head", slot: "head", condition: Platform.isLoaded('l2damagetracker') }
            ]);
        })
        // 光明行者胸甲
        event.modify('irons_spellbooks:paladin_chestplate', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 5, id: "shh_armor:chest", slot: "chest" },
                { attribute: "irons_spellbooks:max_mana", amount: 75, id: "shh_max_mana:chest", slot: "chest" },
                { attribute: "l2damagetracker:magic_damage", amount: 0.25, id: "shh_l2_magic_damage:chest", slot: "chest", condition: Platform.isLoaded('l2damagetracker') }
            ]);
        })
        // 迅捷之靴
        event.modify('irons_spellbooks:speed_boots', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 5, id: "shh_armor:feet", slot: "feet" },
                { attribute: "irons_spellbooks:max_mana", amount: 75, id: "shh_max_mana:feet", slot: "feet" }
            ]);
        })
        // 金皇冠
        event.modify('irons_spellbooks:gold_crown', item => {
            addAttModifiers(item, [
                { attribute: "irons_spellbooks:spell_power", operation: 1, amount: 0.5, id: "shh_spell_power:head", slot: "head" },
                { attribute: "l2damagetracker:magic_damage", amount: 0.25, id: "shh_l2_magic_damage:head", slot: "head", condition: Platform.isLoaded('l2damagetracker') }
            ]);
        })
    }
});
