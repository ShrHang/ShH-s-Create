// requires: l2complements
ItemEvents.modification(event => {
        // l2complements 剑类
        // 生命剑
        event.modify("l2complements:totemic_gold_sword", item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.attack_damage", amount: 6, id: "shh_attack_damage:mainhand", slot: "mainhand" }
            ]);
        });
        // 海神剑
        event.modify("l2complements:poseidite_sword", item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.attack_damage", amount: 7, id: "shh_attack_damage:mainhand", slot: "mainhand" }
            ]);
        });
        // 潜影剑
        event.modify("l2complements:shulkerate_sword", item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.attack_damage", amount: 7, id: "shh_attack_damage:mainhand", slot: "mainhand" }
            ]);
        });
        // 幽匿剑
        event.modify("l2complements:sculkium_sword", item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.attack_damage", amount: 8, id: "shh_attack_damage:mainhand", slot: "mainhand" }
            ]);
        });
        // 永恒剑
        event.modify("l2complements:eternium_sword", item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.attack_damage", amount: 8, id: "shh_attack_damage:mainhand", slot: "mainhand" }
            ]);
        });

        // l2complements 斧类
        // 生命斧
        event.modify("l2complements:totemic_gold_axe", item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.attack_damage", amount: 6, id: "shh_attack_damage:mainhand", slot: "mainhand" }
            ]);
        });
        // 海神斧
        event.modify("l2complements:poseidite_axe", item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.attack_damage", amount: 7, id: "shh_attack_damage:mainhand", slot: "mainhand" }
            ]);
        });
        // 潜影斧
        event.modify("l2complements:shulkerate_axe", item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.attack_damage", amount: 7, id: "shh_attack_damage:mainhand", slot: "mainhand" }
            ]);
        });
        // 幽匿斧
        event.modify("l2complements:sculkium_axe", item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.attack_damage", amount: 8, id: "shh_attack_damage:mainhand", slot: "mainhand" }
            ]);
        });
        // 永恒斧
        event.modify("l2complements:eternium_axe", item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.attack_damage", amount: 8, id: "shh_attack_damage:mainhand", slot: "mainhand" }
            ]);
        });

        // 生命套装
        // 生命头盔
        event.modify("l2complements:totemic_gold_helmet", item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 4, id: "shh_armor:head", slot: "head" },
                { attribute: "minecraft:generic.max_health", amount: 10, id: "shh_health:head", slot: "head" },
                { attribute: "l2damagetracker:damage_absorption", amount: 5, id: "shh_damage_absorption:head", slot: "head", condition: Platform.isLoaded('l2damagetracker') }
            ]);
        });
        // 生命胸甲
        event.modify("l2complements:totemic_gold_chestplate", item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 4, id: "shh_armor:chest", slot: "chest" },
                { attribute: "minecraft:generic.max_health", amount: 10, id: "shh_health:chest", slot: "chest" },
                { attribute: "l2damagetracker:damage_absorption", amount: 5, id: "shh_damage_absorption:chest", slot: "chest", condition: Platform.isLoaded('l2damagetracker') }
            ]);
        });
        // 生命护腿
        event.modify("l2complements:totemic_gold_leggings", item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 4, id: "shh_armor:legs", slot: "legs" },
                { attribute: "minecraft:generic.max_health", amount: 10, id: "shh_health:legs", slot: "legs" },
                { attribute: "l2damagetracker:damage_absorption", amount: 5, id: "shh_damage_absorption:legs", slot: "legs", condition: Platform.isLoaded('l2damagetracker') }
            ]);
        });
        // 生命靴子
        event.modify("l2complements:totemic_gold_boots", item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 4, id: "shh_armor:feet", slot: "feet" },
                { attribute: "minecraft:generic.max_health", amount: 10, id: "shh_health:feet", slot: "feet" },
                { attribute: "l2damagetracker:damage_absorption", amount: 5, id: "shh_damage_absorption:feet", slot: "feet", condition: Platform.isLoaded('l2damagetracker') }
            ]);
        });

        // 海神套装
        // 海神头盔
        event.modify("l2complements:poseidite_helmet", item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 4, id: "shh_armor:head", slot: "head" },
                { attribute: "l2damagetracker:bow_strength", amount: 0.1, id: "shh_bow_strength:head", slot: "head", condition: Platform.isLoaded('l2damagetracker') }
            ]);
        });
        // 海神胸甲
        event.modify("l2complements:poseidite_chestplate", item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 4, id: "shh_armor:chest", slot: "chest" },
                { attribute: "l2damagetracker:bow_strength", amount: 0.1, id: "shh_bow_strength:chest", slot: "chest", condition: Platform.isLoaded('l2damagetracker') }
            ]);
        });
        // 海神护腿
        event.modify("l2complements:poseidite_leggings", item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 4, id: "shh_armor:legs", slot: "legs" },
                { attribute: "l2damagetracker:bow_strength", amount: 0.1, id: "shh_bow_strength:legs", slot: "legs", condition: Platform.isLoaded('l2damagetracker') }
            ]);
        });
        // 海神靴子
        event.modify("l2complements:poseidite_boots", item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 4, id: "shh_armor:feet", slot: "feet" },
                { attribute: "l2damagetracker:bow_strength", amount: 0.1, id: "shh_bow_strength:feet", slot: "feet", condition: Platform.isLoaded('l2damagetracker') }
            ]);
        });

        // 潜影套装
        // 潜影头盔
        event.modify("l2complements:shulkerate_helmet", item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 4, id: "shh_armor:head", slot: "head" },
                { attribute: "l2damagetracker:damage_reduction", amount: -0.08, id: "shh_damage_reduction:head", slot: "head", condition: Platform.isLoaded('l2damagetracker') }
            ]);
        });
        // 潜影胸甲
        event.modify("l2complements:shulkerate_chestplate", item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 4, id: "shh_armor:chest", slot: "chest" },
                { attribute: "l2damagetracker:damage_reduction", amount: -0.08, id: "shh_damage_reduction:chest", slot: "chest", condition: Platform.isLoaded('l2damagetracker') }
            ]);
        });
        // 潜影护腿
        event.modify("l2complements:shulkerate_leggings", item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 4, id: "shh_armor:legs", slot: "legs" },
                { attribute: "l2damagetracker:damage_reduction", amount: -0.08, id: "shh_damage_reduction:legs", slot: "legs", condition: Platform.isLoaded('l2damagetracker') }
            ]);
        });
        // 潜影靴子
        event.modify("l2complements:shulkerate_boots", item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 4, id: "shh_armor:feet", slot: "feet" },
                { attribute: "l2damagetracker:damage_reduction", amount: -0.08, id: "shh_damage_reduction:feet", slot: "feet", condition: Platform.isLoaded('l2damagetracker') }
            ]);
        });

        // 幽匿套装
        // 幽匿头盔
        event.modify("l2complements:sculkium_helmet", item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 5, id: "shh_armor:head", slot: "head" },
                { attribute: "irons_spellbooks:eldritch_spell_power", amount: 0.08, id: "shh_spell_power:head", slot: "head", condition: Platform.isLoaded('irons_spellbooks') }
            ]);
        });
        // 幽匿胸甲
        event.modify("l2complements:sculkium_chestplate", item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 5, id: "shh_armor:chest", slot: "chest" },
                { attribute: "irons_spellbooks:eldritch_spell_power", amount: 0.08, id: "shh_spell_power:chest", slot: "chest", condition: Platform.isLoaded('irons_spellbooks') }
            ]);
        });
        // 幽匿护腿
        event.modify("l2complements:sculkium_leggings", item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 5, id: "shh_armor:legs", slot: "legs" },
                { attribute: "irons_spellbooks:eldritch_spell_power", amount: 0.08, id: "shh_spell_power:legs", slot: "legs", condition: Platform.isLoaded('irons_spellbooks') }
            ]);
        });
        // 幽匿靴子
        event.modify("l2complements:sculkium_boots", item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 5, id: "shh_armor:feet", slot: "feet" },
                { attribute: "irons_spellbooks:eldritch_spell_power", amount: 0.08, id: "shh_spell_power:feet", slot: "feet", condition: Platform.isLoaded('irons_spellbooks') }
            ]);
        });

        // 永恒套装
        // 永恒头盔
        event.modify("l2complements:eternium_helmet", item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 5, id: "shh_armor:head", slot: "head" },
                { attribute: "minecraft:generic.movement_speed", operation: 1, amount: 0.5, id: "shh_speed:head", slot: "head" },
                { attribute: "artifacts:generic.sprinting_step_height", amount: 0.5, id: "shh_sprinting_step_height:head", slot: "head", condition: Platform.isLoaded('artifacts') }
            ]);
        });
        // 永恒胸甲
        event.modify("l2complements:eternium_chestplate", item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 5, id: "shh_armor:chest", slot: "chest" },
                { attribute: "minecraft:generic.movement_speed", operation: 1, amount: 0.5, id: "shh_speed:chest", slot: "chest" },
                { attribute: "artifacts:generic.sprinting_step_height", amount: 0.5, id: "shh_sprinting_step_height:chest", slot: "chest", condition: Platform.isLoaded('artifacts') }
            ]);
        });
        // 永恒护腿
        event.modify("l2complements:eternium_leggings", item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 5, id: "shh_armor:legs", slot: "legs" },
                { attribute: "minecraft:generic.movement_speed", operation: 1, amount: 0.5, id: "shh_speed:legs", slot: "legs" },
                { attribute: "artifacts:generic.sprinting_step_height", amount: 0.5, id: "shh_sprinting_step_height:legs", slot: "legs", condition: Platform.isLoaded('artifacts') }
            ]);
        });
        // 永恒靴子
        event.modify("l2complements:eternium_boots", item => {
            addAttModifiers(item, [
                { attribute: "minecraft:generic.armor", amount: 5, id: "shh_armor:feet", slot: "feet" },
                { attribute: "minecraft:generic.movement_speed", operation: 1, amount: 0.5, id: "shh_speed:feet", slot: "feet" },
                { attribute: "artifacts:generic.sprinting_step_height", amount: 0.5, id: "shh_sprinting_step_height:feet", slot: "feet", condition: Platform.isLoaded('artifacts') }
            ]);
        });

        // 其它
        // 结晶渗透法杖
        event.modify("l2complements:diffusion_wand", item => {
            item.setUnbreakable();
        });
});
