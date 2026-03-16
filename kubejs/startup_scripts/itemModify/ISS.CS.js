// requires: cataclysm_spellbooks
ItemEvents.modification(event => {
        //#region  cataclysm_spellbooks 法杖类
        // 花岩之杖
        event.modify('cataclysm_spellbooks:bloom_stone_staff', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.attack_damage", amount: 7, id: "shh_attack_damage:mainhand", slot: "mainhand" }
            ]);
        });

        // 珊瑚法杖
        event.modify('cataclysm_spellbooks:coral_staff', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.attack_damage", amount: 7, id: "shh_attack_damage:mainhand", slot: "mainhand" }
            ]);
        });

        // 仿制瓦吉特法杖
        event.modify('cataclysm_spellbooks:fake_wudjets_staff', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.attack_damage", amount: 7, id: "shh_attack_damage:mainhand", slot: "mainhand" }
            ]);
        });

        // 虚空魔杖
        event.modify('cataclysm_spellbooks:void_staff', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.attack_damage", amount: 7, id: "shh_attack_damage:mainhand", slot: "mainhand" }
            ]);
        });

        // 灵魂决裂之杖
        event.modify('cataclysm_spellbooks:spirit_sunderer', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.attack_damage", amount: 7, id: "shh_attack_damage:mainhand", slot: "mainhand" }
            ]);
        });

        // Soul Brazier
        event.modify('cataclysm_spellbooks:soul_brazier', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.attack_damage", amount: 7, id: "shh_attack_damage:mainhand", slot: "mainhand" }
            ]);
        });
        //#endregion

        //#region  cataclysm_spellbooks 近战武器
        // 恶兽焰型剑
        event.modify('cataclysm_spellbooks:monstrous_flamberge', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.attack_damage", amount: 9, id: "shh_attack_damage:mainhand", slot: "mainhand" }
            ]);
        });

        // 狱火锻锤
        event.modify('cataclysm_spellbooks:hellfire_forge', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.attack_damage", amount: 9, id: "shh_attack_damage:mainhand", slot: "mainhand" }
            ]);
        });
        //#endregion

        //#region  深渊术士套装
        // 深渊术士兜帽（多物品）
        event.modify(['cataclysm_spellbooks:abyssal_warlock_helmet', 'cataclysm_spellbooks:abyssal_warlock_mask'], item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 4, id: "shh_armor:head", slot: "head" },
                { attribute: "irons_spellbooks:max_mana", amount: 75, id: "shh_max_mana:head", slot: "head" }
            ]);
        });

        // 深渊术士长袍
        event.modify('cataclysm_spellbooks:abyssal_warlock_chestplate', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 4, id: "shh_armor:chest", slot: "chest" },
                { attribute: "irons_spellbooks:max_mana", amount: 75, id: "shh_max_mana:chest", slot: "chest" }
            ]);
        });

        // 深渊术士护腿
        event.modify('cataclysm_spellbooks:abyssal_warlock_leggings', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 4, id: "shh_armor:legs", slot: "legs" },
                { attribute: "irons_spellbooks:max_mana", amount: 75, id: "shh_max_mana:legs", slot: "legs" }
            ]);
        });

        // 深渊术士长靴
        event.modify('cataclysm_spellbooks:abyssal_warlock_boots', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 4, id: "shh_armor:feet", slot: "feet" },
                { attribute: "irons_spellbooks:max_mana", amount: 75, id: "shh_max_mana:feet", slot: "feet" }
            ]);
        });
        //#endregion

        //#region  咒魂法师套装
        // 咒魂法师兜帽
        event.modify('cataclysm_spellbooks:cursium_mage_circlet', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 4, id: "shh_armor:head", slot: "head" },
                { attribute: "irons_spellbooks:max_mana", amount: 75, id: "shh_max_mana:head", slot: "head" }
            ]);
        });

        // 咒魂法师长袍（多物品）
        event.modify(['cataclysm_spellbooks:cursium_mage_chestplate', 'cataclysm_spellbooks:cursium_mage_elytra'], item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 4, id: "shh_armor:chest", slot: "chest" },
                { attribute: "irons_spellbooks:max_mana", amount: 75, id: "shh_max_mana:chest", slot: "chest" }
            ]);
        });

        // 咒魂法师护腿
        event.modify('cataclysm_spellbooks:cursium_mage_skirt', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 4, id: "shh_armor:legs", slot: "legs" },
                { attribute: "irons_spellbooks:max_mana", amount: 75, id: "shh_max_mana:legs", slot: "legs" }
            ]);
        });

        // 咒魂法师长靴
        event.modify('cataclysm_spellbooks:cursium_mage_boots', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 4, id: "shh_armor:feet", slot: "feet" },
                { attribute: "irons_spellbooks:max_mana", amount: 75, id: "shh_max_mana:feet", slot: "feet" }
            ]);
        });
        //#endregion

        //#region  腾炎法师套装
        // 腾炎法师兜帽
        event.modify('cataclysm_spellbooks:ignis_helmet', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 4, id: "shh_armor:head", slot: "head" },
                { attribute: "irons_spellbooks:max_mana", amount: 75, id: "shh_max_mana:head", slot: "head" }
            ]);
        });

        // 腾炎法师长袍（多物品）
        event.modify(['cataclysm_spellbooks:ignis_chestplate', 'cataclysm_spellbooks:ignis_chestplate_elytra'], item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 4, id: "shh_armor:chest", slot: "chest" },
                { attribute: "irons_spellbooks:max_mana", amount: 75, id: "shh_max_mana:chest", slot: "chest" }
            ]);
        });

        // 腾炎法师护腿
        event.modify('cataclysm_spellbooks:ignis_leggings', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 4, id: "shh_armor:legs", slot: "legs" },
                { attribute: "irons_spellbooks:max_mana", amount: 75, id: "shh_max_mana:legs", slot: "legs" }
            ]);
        });

        // 腾炎法师长靴
        event.modify('cataclysm_spellbooks:ignis_boots', item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 4, id: "shh_armor:feet", slot: "feet" },
                { attribute: "irons_spellbooks:max_mana", amount: 75, id: "shh_max_mana:feet", slot: "feet" }
            ]);
        });
        //#endregion
})