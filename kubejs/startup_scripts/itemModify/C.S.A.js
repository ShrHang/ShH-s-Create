// requires: create_sa
ItemEvents.modification(event => {
    //#region  玫瑰石英工具
    // 玫瑰石英剑
    event.modify('create_sa:rose_quartz_sword', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.attack_damage", amount: 7, id: "shh_attack_damage:mainhand", slot: "mainhand" },
            { attribute: "minecraft:player.entity_interaction_range", amount: 3, id: "shh_entity_interaction:mainhand", slot: "mainhand" }
        ]);
    });
    // 玫瑰石英斧
    event.modify('create_sa:rose_quartz_axe', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.attack_damage", amount: 6, id: "shh_attack_damage:mainhand", slot: "mainhand" },
            { attribute: "minecraft:player.entity_interaction_range", amount: 3, id: "shh_entity_interaction:mainhand", slot: "mainhand" }
        ]);
    });
    // 玫瑰石英镐
    event.modify('create_sa:rose_quartz_pickaxe', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:player.entity_interaction_range", amount: 3, id: "shh_entity_interaction:mainhand", slot: "mainhand" }
        ]);
    });
    // 玫瑰石英铲
    event.modify('create_sa:rose_quartz_shovel', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:player.entity_interaction_range", amount: 3, id: "shh_entity_interaction:mainhand", slot: "mainhand" }
        ]);
    });
    //#endregion

    //#region  铜工具
    // 铜剑
    event.modify('create_sa:copper_sword', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.attack_damage", amount: 6.5, id: "shh_attack_damage:mainhand", slot: "mainhand" },
            { attribute: "irons_spellbooks:lightning_spell_power", amount: 0.05, id: "shh_lightning_spell_power:mainhand", slot: "mainhand", condition: Platform.isLoaded('irons_spellbooks') }
        ]);
    });
    // 铜斧
    event.modify('create_sa:copper_axe', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.attack_damage", amount: 8, id: "shh_attack_damage:mainhand", slot: "mainhand" },
            { attribute: "irons_spellbooks:lightning_spell_power", amount: 0.05, id: "shh_lightning_spell_power:mainhand", slot: "mainhand", condition: Platform.isLoaded('irons_spellbooks') }
        ]);
    });
    // 铜镐
    event.modify('create_sa:copper_pickaxe', item => {
        addAttModifiers(item, [
            { attribute: "irons_spellbooks:lightning_spell_power", amount: 0.05, id: "shh_lightning_spell_power:mainhand", slot: "mainhand", condition: Platform.isLoaded('irons_spellbooks') }
        ]);
    });
    // 铜铲
    event.modify('create_sa:copper_shovel', item => {
        addAttModifiers(item, [
            { attribute: "irons_spellbooks:lightning_spell_power", amount: 0.05, id: "shh_lightning_spell_power:mainhand", slot: "mainhand", condition: Platform.isLoaded('irons_spellbooks') }
        ]);
    });
    //#endregion

    //#region  锌工具
    // 锌剑
    event.modify('create_sa:zinc_sword', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.attack_damage", amount: 7, id: "shh_attack_damage:mainhand", slot: "mainhand" }
        ]);
    });
    // 锌斧
    event.modify('create_sa:zinc_axe', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.attack_damage", amount: 6, id: "shh_attack_damage:mainhand", slot: "mainhand" }
        ]);
    });
    //#endregion

    //#region  黄铜工具
    // 黄铜剑
    event.modify('create_sa:brass_sword', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.attack_damage", amount: 6, id: "shh_attack_damage:mainhand", slot: "mainhand" },
            { attribute: "irons_spellbooks:lightning_spell_power", amount: 0.05, id: "shh_lightning_spell_power:mainhand", slot: "mainhand", condition: Platform.isLoaded('irons_spellbooks') }
        ]);
    });
    // 黄铜斧
    event.modify('create_sa:brass_axe', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.attack_damage", amount: 6, id: "shh_attack_damage:mainhand", slot: "mainhand" },
            { attribute: "irons_spellbooks:lightning_spell_power", amount: 0.05, id: "shh_lightning_spell_power:mainhand", slot: "mainhand", condition: Platform.isLoaded('irons_spellbooks') }
        ]);
    });
    // 黄铜镐
    event.modify('create_sa:brass_pickaxe', item => {
        addAttModifiers(item, [
            { attribute: "irons_spellbooks:lightning_spell_power", amount: 0.05, id: "shh_lightning_spell_power:mainhand", slot: "mainhand", condition: Platform.isLoaded('irons_spellbooks') }
        ]);
    });
    // 黄铜铲
    event.modify('create_sa:brass_shovel', item => {
        addAttModifiers(item, [
            { attribute: "irons_spellbooks:lightning_spell_power", amount: 0.05, id: "shh_lightning_spell_power:mainhand", slot: "mainhand", condition: Platform.isLoaded('irons_spellbooks') }
        ]);
    });
    //#endregion

    //#region  烈焰工具
    // 烈焰长剑
    event.modify('create_sa:blazing_cleaver', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.attack_damage", amount: 7, id: "shh_attack_damage:mainhand", slot: "mainhand" },
            { attribute: "player.sweeping_damage_ratio", amount: 1, id: "shh_sweeping_damage_ratio:mainhand", slot: "mainhand" },
            { attribute: "artifacts:generic.attack_burning_duration", operation: 1, amount: 0.4, id: "shh_attack_burning_duration:mainhand", slot: "mainhand", condition: Platform.isLoaded('artifacts') },
            { attribute: "irons_spellbooks:fire_spell_power", amount: 0.1, id: "shh_fire_spell_power:mainhand", slot: "mainhand", condition: Platform.isLoaded('irons_spellbooks') }
        ]);
    });
    // 烈焰斧
    event.modify('create_sa:blazing_axe', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.attack_damage", amount: 6, id: "shh_attack_damage:mainhand", slot: "mainhand" },
            { attribute: "artifacts:generic.attack_burning_duration", operation: 1, amount: 0.4, id: "shh_attack_burning_duration:mainhand", slot: "mainhand", condition: Platform.isLoaded('artifacts') },
            { attribute: "irons_spellbooks:fire_spell_power", amount: 0.1, id: "shh_fire_spell_power:mainhand", slot: "mainhand", condition: Platform.isLoaded('irons_spellbooks') }
        ]);
    });
    // 烈焰镐
    event.modify('create_sa:blazing_pickaxe', item => {
        addAttModifiers(item, [
            { attribute: "artifacts:generic.attack_burning_duration", operation: 1, amount: 0.4, id: "shh_attack_burning_duration:mainhand", slot: "mainhand", condition: Platform.isLoaded('artifacts') },
            { attribute: "irons_spellbooks:fire_spell_power", amount: 0.1, id: "shh_fire_spell_power:mainhand", slot: "mainhand", condition: Platform.isLoaded('irons_spellbooks') }
        ]);
    });
    // 烈焰铲
    event.modify('create_sa:blazing_shovel', item => {
        addAttModifiers(item, [
            { attribute: "artifacts:generic.attack_burning_duration", operation: 1, amount: 0.4, id: "shh_attack_burning_duration:mainhand", slot: "mainhand", condition: Platform.isLoaded('artifacts') },
            { attribute: "irons_spellbooks:fire_spell_power", amount: 0.1, id: "shh_fire_spell_power:mainhand", slot: "mainhand", condition: Platform.isLoaded('irons_spellbooks') }
        ]);
    });
    //#endregion

    //#region  经验工具
    // 经验剑
    event.modify('create_sa:experience_sword', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.attack_damage", amount: 6, id: "shh_attack_damage:mainhand", slot: "mainhand" },
            { attribute: "minecraft:generic.attack_speed", amount: 0.2, id: "shh_attack_speed:mainhand", slot: "mainhand" },
            { attribute: "minecraft:generic.luck", amount: 2, id: "shh_luck:mainhand", slot: "mainhand" },
            { attribute: "minecraft:generic.luck", amount: 2, id: "shh_luck:offhand", slot: "offhand" }
        ]);
    });
    // 经验斧
    event.modify('create_sa:experience_axe', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.attack_damage", amount: 6, id: "shh_attack_damage:mainhand", slot: "mainhand" },
            { attribute: "minecraft:generic.attack_speed", amount: 0.2, id: "shh_attack_speed:mainhand", slot: "mainhand" },
            { attribute: "minecraft:generic.luck", amount: 2, id: "shh_luck:mainhand", slot: "mainhand" },
            { attribute: "minecraft:generic.luck", amount: 2, id: "shh_luck:offhand", slot: "offhand" }
        ]);
    });
    // 经验镐
    event.modify('create_sa:experience_pickaxe', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.attack_speed", amount: 0.2, id: "shh_attack_speed:mainhand", slot: "mainhand" },
            { attribute: "minecraft:generic.luck", amount: 2, id: "shh_luck:mainhand", slot: "mainhand" },
            { attribute: "minecraft:generic.luck", amount: 2, id: "shh_luck:offhand", slot: "offhand" }
        ]);
    });
    // 经验铲
    event.modify('create_sa:experience_shovel', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.attack_speed", amount: 0.2, id: "shh_attack_speed:mainhand", slot: "mainhand" },
            { attribute: "minecraft:generic.luck", amount: 2, id: "shh_luck:mainhand", slot: "mainhand" },
            { attribute: "minecraft:generic.luck", amount: 2, id: "shh_luck:offhand", slot: "offhand" }
        ]);
    });
    //#endregion

    //#region  铜盔甲
    // 铜头盔
    event.modify('create_sa:copper_helmet', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.armor", amount: 6, id: "shh_armor:head", slot: "head" },
            { attribute: "irons_spellbooks:lightning_spell_power", amount: 0.05, id: "shh_lightning_spell_power:head", slot: "head", condition: Platform.isLoaded('irons_spellbooks') }
        ]);
    });
    // 铜胸甲
    event.modify('create_sa:copper_chestplate', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.armor", amount: 4, id: "shh_armor:chest", slot: "chest" },
            { attribute: "irons_spellbooks:lightning_spell_power", amount: 0.05, id: "shh_lightning_spell_power:chest", slot: "chest", condition: Platform.isLoaded('irons_spellbooks') }
        ]);
    });
    // 铜护腿
    event.modify('create_sa:copper_leggings', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.armor", amount: 4, id: "shh_armor:legs", slot: "legs" },
            { attribute: "irons_spellbooks:lightning_spell_power", amount: 0.05, id: "shh_lightning_spell_power:legs", slot: "legs", condition: Platform.isLoaded('irons_spellbooks') }
        ]);
    });
    // 铜靴子
    event.modify('create_sa:copper_boots', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.armor", amount: 4, id: "shh_armor:feet", slot: "feet" },
            { attribute: "irons_spellbooks:lightning_spell_power", amount: 0.05, id: "shh_lightning_spell_power:feet", slot: "feet", condition: Platform.isLoaded('irons_spellbooks') }
        ]);
    });
    //#endregion

    //#region  锌盔甲
    // 锌头盔
    event.modify('create_sa:zinc_helmet', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.armor", amount: 4, id: "shh_armor:head", slot: "head" },
            { attribute: "curseofpandora:reality_index", amount: 0.25, id: "shh_reality_index:head", slot: "head", condition: Platform.isLoaded('curseofpandora') }
        ]);
    });
    // 锌胸甲
    event.modify('create_sa:zinc_chestplate', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.armor", amount: 4, id: "shh_armor:chest", slot: "chest" },
            { attribute: "curseofpandora:reality_index", amount: 0.25, id: "shh_reality_index:chest", slot: "chest", condition: Platform.isLoaded('curseofpandora') }
        ]);
    });
    // 锌护腿
    event.modify('create_sa:zinc_leggings', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.armor", amount: 4, id: "shh_armor:legs", slot: "legs" },
            { attribute: "curseofpandora:reality_index", amount: 0.25, id: "shh_reality_index:legs", slot: "legs", condition: Platform.isLoaded('curseofpandora') }
        ]);
    });
    // 锌靴子
    event.modify('create_sa:zinc_boots', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.armor", amount: 4, id: "shh_armor:feet", slot: "feet" },
            { attribute: "curseofpandora:reality_index", amount: 0.25, id: "shh_reality_index:feet", slot: "feet", condition: Platform.isLoaded('curseofpandora') }
        ]);
    });
    //#endregion

    //#region  黄铜盔甲
    // 黄铜头盔
    event.modify('create_sa:brass_helmet', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.armor", amount: 5, id: "shh_armor:head", slot: "head" },
            { attribute: "irons_spellbooks:lightning_spell_power", amount: 0.05, id: "shh_lightning_spell_power:head", slot: "head", condition: Platform.isLoaded('irons_spellbooks') },
            { attribute: "curseofpandora:reality_index", amount: 0.5, id: "shh_reality_index:head", slot: "head", condition: Platform.isLoaded('curseofpandora') }
        ]);
    });
    // 黄铜胸甲
    event.modify('create_sa:brass_chestplate', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.armor", amount: 5, id: "shh_armor:chest", slot: "chest" },
            { attribute: "irons_spellbooks:lightning_spell_power", amount: 0.05, id: "shh_lightning_spell_power:chest", slot: "chest", condition: Platform.isLoaded('irons_spellbooks') },
            { attribute: "curseofpandora:reality_index", amount: 0.5, id: "shh_reality_index:chest", slot: "chest", condition: Platform.isLoaded('curseofpandora') }
        ]);
    });
    // 黄铜护腿
    event.modify('create_sa:brass_leggings', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.armor", amount: 5, id: "shh_armor:legs", slot: "legs" },
            { attribute: "irons_spellbooks:lightning_spell_power", amount: 0.05, id: "shh_lightning_spell_power:legs", slot: "legs", condition: Platform.isLoaded('irons_spellbooks') },
            { attribute: "curseofpandora:reality_index", amount: 0.5, id: "shh_reality_index:legs", slot: "legs", condition: Platform.isLoaded('curseofpandora') }
        ]);
    });
    // 黄铜靴子
    event.modify('create_sa:brass_boots', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.armor", amount: 5, id: "shh_armor:feet", slot: "feet" },
            { attribute: "irons_spellbooks:lightning_spell_power", amount: 0.05, id: "shh_lightning_spell_power:feet", slot: "feet", condition: Platform.isLoaded('irons_spellbooks') },
            { attribute: "curseofpandora:reality_index", amount: 0.5, id: "shh_reality_index:feet", slot: "feet", condition: Platform.isLoaded('curseofpandora') }
        ]);
    });
    //#endregion

    //#region  粘液套装
    // 粘液头盔
    event.modify('create_sa:slime_helmet', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.armor", amount: 3, id: "shh_armor:head", slot: "head" },
            { attribute: "l2damagetracker:damage_absorption", amount: 2, id: "shh_l2_damage_absorption:head", slot: "head", condition: Platform.isLoaded('l2damagetracker') }
        ]);
    });
    // 粘液靴子
    event.modify('create_sa:slime_boots', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.armor", amount: 3, id: "shh_armor:feet", slot: "feet" },
            { attribute: "minecraft:generic.jump_strength", amount: 0.5, id: "shh_jump_strength:feet", slot: "feet" },
            { attribute: "artifacts:generic.sprinting_speed", amount: 0.3, id: "shh_sprinting_speed:feet", slot: "feet", condition: Platform.isLoaded('artifacts') }
        ]);
    });
    //#endregion

    //#region  喷气背包
    // 安山喷气背包
    event.modify('create_sa:andesite_jetpack_chestplate', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.armor", amount: 4, id: "shh_armor:chest", slot: "chest" },
            { attribute: "curseofpandora:reality_index", amount: 0.25, id: "shh_reality_index:chest", slot: "chest", condition: Platform.isLoaded('curseofpandora') }
        ]);
    });
    // 铜喷气背包
    event.modify('create_sa:copper_jetpack_chestplate', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.armor", amount: 4, id: "shh_armor:chest", slot: "chest" },
            { attribute: "irons_spellbooks:lightning_spell_power", amount: 0.05, id: "shh_lightning_spell_power:chest", slot: "chest", condition: Platform.isLoaded('irons_spellbooks') }
        ]);
    });
    // 黄铜喷气背包
    event.modify('create_sa:brass_jetpack_chestplate', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.armor", amount: 5, id: "shh_armor:chest", slot: "chest" },
            { attribute: "irons_spellbooks:lightning_spell_power", amount: 0.05, id: "shh_lightning_spell_power:chest", slot: "chest", condition: Platform.isLoaded('irons_spellbooks') },
            { attribute: "curseofpandora:reality_index", amount: 0.5, id: "shh_reality_index:chest", slot: "chest", condition: Platform.isLoaded('curseofpandora') }
        ]);
    });
    // 下界合金喷气背包
    event.modify('create_sa:netherite_jetpack_chestplate', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.armor", amount: 6, id: "shh_armor:chest", slot: "chest" },
            { attribute: "minecraft:generic.armor_toughness", amount: 5, id: "shh_armor_toughness:chest", slot: "chest" },
            { attribute: "l2damagetracker:damage_reduction", amount: -0.05, id: "shh_l2_damage_reduction:chest", slot: "chest", condition: Platform.isLoaded('l2damagetracker') },
            { attribute: "curseofpandora:reality_index", amount: 1, id: "shh_reality_index:chest", slot: "chest", condition: Platform.isLoaded('curseofpandora') }
        ]);
    });
    //#endregion

    //#region  外骨骼
    // 安山外骨骼
    event.modify('create_sa:andesite_exoskeleton_chestplate', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.armor", amount: 4, id: "shh_armor:chest", slot: "chest" },
            { attribute: "curseofpandora:reality_index", amount: 0.25, id: "shh_reality_index:chest", slot: "chest", condition: Platform.isLoaded('curseofpandora') }
        ]);
    });
    // 铜外骨骼
    event.modify('create_sa:copper_exoskeleton_chestplate', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.armor", amount: 4, id: "shh_armor:chest", slot: "chest" },
            { attribute: "irons_spellbooks:lightning_spell_power", amount: 0.05, id: "shh_lightning_spell_power:chest", slot: "chest", condition: Platform.isLoaded('irons_spellbooks') }
        ]);
    });
    // 黄铜外骨骼
    event.modify('create_sa:brass_exoskeleton_chestplate', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.armor", amount: 5, id: "shh_armor:chest", slot: "chest" },
            { attribute: "irons_spellbooks:lightning_spell_power", amount: 0.05, id: "shh_lightning_spell_power:chest", slot: "chest", condition: Platform.isLoaded('irons_spellbooks') },
            { attribute: "curseofpandora:reality_index", amount: 0.5, id: "shh_reality_index:chest", slot: "chest", condition: Platform.isLoaded('curseofpandora') }
        ]);
    });
    //#endregion
});

