ItemEvents.modification(event => {
    // 盾牌
    event.modify('minecraft:shield', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.armor", amount: 6, id: "shh_armor:any" },
            { attribute: "minecraft:generic.knockback_resistance", amount: 0.1, id: "shh_nockback_resistance:any" }
        ]);
    });

    // 剑
    //#region 
    // 木剑
    event.modify('minecraft:wooden_sword', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.attack_damage", amount: 6, id: "shh_attack_damage:mainhand", slot: "mainhand" }
        ]);
    });
    // 石剑
    event.modify('minecraft:stone_sword', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.attack_damage", amount: 6, id: "shh_attack_damage:mainhand", slot: "mainhand" }
        ]);
    });
    // 金剑
    event.modify('minecraft:golden_sword', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.attack_damage", amount: 6, id: "shh_attack_damage:mainhand", slot: "mainhand" }
        ]);
    });
    // 铁剑
    event.modify('minecraft:iron_sword', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.attack_damage", amount: 6, id: "shh_attack_damage:mainhand", slot: "mainhand" }
        ]);
    });
    // 钻石剑
    event.modify('minecraft:diamond_sword', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.attack_damage", amount: 6, id: "shh_attack_damage:mainhand", slot: "mainhand" }
        ]);
    });
    // 下界合金剑
    event.modify('minecraft:netherite_sword', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.attack_damage", amount: 6, id: "shh_attack_damage:mainhand", slot: "mainhand" }
        ]);
    });
    //#endregion

    // 斧
    //#region 
    // 木斧
    event.modify('minecraft:wooden_axe', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.attack_damage", amount: 6, id: "shh_attack_damage:mainhand", slot: "mainhand" }
        ]);
    });
    // 石斧
    event.modify('minecraft:stone_axe', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.attack_damage", amount: 6, id: "shh_attack_damage:mainhand", slot: "mainhand" }
        ]);
    });
    // 金斧
    event.modify('minecraft:golden_axe', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.attack_damage", amount: 6, id: "shh_attack_damage:mainhand", slot: "mainhand" }
        ]);
    });
    // 铁斧
    event.modify('minecraft:iron_axe', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.attack_damage", amount: 6, id: "shh_attack_damage:mainhand", slot: "mainhand" }
        ]);
    });
    // 钻石斧
    event.modify('minecraft:diamond_axe', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.attack_damage", amount: 6, id: "shh_attack_damage:mainhand", slot: "mainhand" }
        ]);
    });
    // 下界合金斧
    event.modify('minecraft:netherite_axe', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.attack_damage", amount: 6, id: "shh_attack_damage:mainhand", slot: "mainhand" }
        ]);
    });
    //#endregion

    // 三叉戟&重锤
    //#region 
    // 三叉戟
    event.modify('minecraft:trident', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.attack_damage", amount: 6, id: "shh_attack_damage:mainhand", slot: "mainhand" },
            { attribute: "neoforge:swim_speed", amount: 0.15, id: "shh_swim_speed:any" }
        ]);
    });
    // 重锤
    event.modify('minecraft:mace', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.attack_damage", amount: 7, id: "shh_attack_damage:mainhand", slot: "mainhand" },
            { attribute: "minecraft:generic.knockback_resistance", amount: 0.15, id: "shh_knockback_resistance:any" }
        ]);
    });
    //#endregion

    // 皮革套装
    //#region 
    // 皮革帽
    event.modify('minecraft:leather_helmet', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.armor", amount: 4, id: "shh_armor:head", slot: "head" }
        ]);
    });
    // 皮革胸甲
    event.modify('minecraft:leather_chestplate', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.armor", amount: 4, id: "shh_armor:chest", slot: "chest" }
        ]);
    });
    // 皮革护腿
    event.modify('minecraft:leather_leggings', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.armor", amount: 4, id: "shh_armor:legs", slot: "legs" }
        ]);
    });
    // 皮革靴子
    event.modify('minecraft:leather_boots', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.armor", amount: 4, id: "shh_armor:feet", slot: "feet" }
        ]);
    });
    //#endregion

    //#region 
    // 锁链套装
    // 锁链帽
    event.modify('minecraft:chainmail_helmet', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.armor", amount: 4, id: "shh_armor:head", slot: "head" }
        ]);
    });
    // 锁链胸甲
    event.modify('minecraft:chainmail_chestplate', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.armor", amount: 4, id: "shh_armor:chest", slot: "chest" }
        ]);
    });
    // 锁链护腿
    event.modify('minecraft:chainmail_leggings', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.armor", amount: 4, id: "shh_armor:legs", slot: "legs" }
        ]);
    });
    // 锁链靴子
    event.modify('minecraft:chainmail_boots', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.armor", amount: 4, id: "shh_armor:feet", slot: "feet" }
        ]);
    });
    //#endregion

    // 铁套装
    //#region 
    // 铁头盔
    event.modify('minecraft:iron_helmet', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.armor", amount: 4, id: "shh_armor:head", slot: "head" },
            { attribute: "minecraft:generic.armor_toughness", amount: 2, id: "shh_armor_toughness:head", slot: "head" }
        ]);
    });
    // 铁胸甲
    event.modify('minecraft:iron_chestplate', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.armor", amount: 4, id: "shh_armor:chest", slot: "chest" },
            { attribute: "minecraft:generic.armor_toughness", amount: 2, id: "shh_armor_toughness:chest", slot: "chest" }
        ]);
    });
    // 铁护腿
    event.modify('minecraft:iron_leggings', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.armor", amount: 4, id: "shh_armor:legs", slot: "legs" },
            { attribute: "minecraft:generic.armor_toughness", amount: 2, id: "shh_armor_toughness:legs", slot: "legs" }
        ]);
    });
    // 铁靴子
    event.modify('minecraft:iron_boots', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.armor", amount: 4, id: "shh_armor:feet", slot: "feet" },
            { attribute: "minecraft:generic.armor_toughness", amount: 2, id: "shh_armor_toughness:feet", slot: "feet" }
        ]);
    });
    //#endregion

    // 金套装
    //#region 
    // 金头盔
    event.modify('minecraft:golden_helmet', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.armor", amount: 4, id: "shh_armor:head", slot: "head" }
        ]);
    });
    // 金胸甲
    event.modify('minecraft:golden_chestplate', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.armor", amount: 4, id: "shh_armor:chest", slot: "chest" }
        ]);
    });
    // 金护腿
    event.modify('minecraft:golden_leggings', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.armor", amount: 4, id: "shh_armor:legs", slot: "legs" }
        ]);
    });
    // 金靴子
    event.modify('minecraft:golden_boots', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.armor", amount: 4, id: "shh_armor:feet", slot: "feet" }
        ]);
    });
    //#endregion

    // 钻石套装
    //#region 
    // 钻石头盔
    event.modify('minecraft:diamond_helmet', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.armor", amount: 5, id: "shh_armor:head", slot: "head" },
            { attribute: "minecraft:generic.armor_toughness", amount: 1, id: "shh_armor_toughness:head", slot: "head" },
            { attribute: "l2damagetracker:damage_reduction", amount: -0.03, id: "shh_l2_damage_reduction:head", slot: "head", condition: Platform.isLoaded('l2damagetracker') }
        ]);
    });
    // 钻石胸甲
    event.modify('minecraft:diamond_chestplate', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.armor", amount: 5, id: "shh_armor:chest", slot: "chest" },
            { attribute: "minecraft:generic.armor_toughness", amount: 5, id: "shh_armor_toughness:chest", slot: "chest" },
            { attribute: "l2damagetracker:damage_reduction", amount: -0.03, id: "shh_l2_damage_reduction:chest", slot: "chest", condition: Platform.isLoaded('l2damagetracker') }
        ]);
    });
    // 钻石护腿
    event.modify('minecraft:diamond_leggings', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.armor", amount: 5, id: "shh_armor:legs", slot: "legs" },
            { attribute: "minecraft:generic.armor_toughness", amount: 1, id: "shh_armor_toughness:legs", slot: "legs" },
            { attribute: "l2damagetracker:damage_reduction", amount: -0.03, id: "shh_l2_damage_reduction:legs", slot: "legs", condition: Platform.isLoaded('l2damagetracker') }
        ]);
    });
    // 钻石靴子
    event.modify('minecraft:diamond_boots', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.armor", amount: 5, id: "shh_armor:feet", slot: "feet" },
            { attribute: "minecraft:generic.armor_toughness", amount: 1, id: "shh_armor_toughness:feet", slot: "feet" },
            { attribute: "l2damagetracker:damage_reduction", amount: -0.03, id: "shh_l2_damage_reduction:feet", slot: "feet", condition: Platform.isLoaded('l2damagetracker') }
        ]);
    });
    //#endregion

    // 下界合金套装
    //#region 
    // 下界合金头盔
    event.modify('minecraft:netherite_helmet', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.armor", amount: 5, id: "shh_armor:head", slot: "head" },
            { attribute: "minecraft:generic.armor_toughness", amount: 1, id: "shh_armor_toughness:head", slot: "head" },
            { attribute: "l2damagetracker:damage_reduction", amount: -0.05, id: "shh_l2_damage_reduction:head", slot: "head", condition: Platform.isLoaded('l2damagetracker') }
        ]);
    });
    // 下界合金胸甲
    event.modify('minecraft:netherite_chestplate', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.armor", amount: 5, id: "shh_armor:chest", slot: "chest" },
            { attribute: "minecraft:generic.armor_toughness", amount: 5, id: "shh_armor_toughness:chest", slot: "chest" },
            { attribute: "l2damagetracker:damage_reduction", amount: -0.05, id: "shh_l2_damage_reduction:chest", slot: "chest", condition: Platform.isLoaded('l2damagetracker') }
        ]);
    });
    // 下界合金护腿
    event.modify('minecraft:netherite_leggings', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.armor", amount: 5, id: "shh_armor:legs", slot: "legs" },
            { attribute: "minecraft:generic.armor_toughness", amount: 1, id: "shh_armor_toughness:legs", slot: "legs" },
            { attribute: "l2damagetracker:damage_reduction", amount: -0.05, id: "shh_l2_damage_reduction:legs", slot: "legs", condition: Platform.isLoaded('l2damagetracker') }
        ]);
    });
    // 下界合金靴子
    event.modify('minecraft:netherite_boots', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.armor", amount: 5, id: "shh_armor:feet", slot: "feet" },
            { attribute: "minecraft:generic.armor_toughness", amount: 1, id: "shh_armor_toughness:feet", slot: "feet" },
            { attribute: "l2damagetracker:damage_reduction", amount: -0.05, id: "shh_l2_damage_reduction:feet", slot: "feet", condition: Platform.isLoaded('l2damagetracker') }
        ]);
    });
    //#endregion

    // 海龟壳
    event.modify('minecraft:turtle_helmet', item => {
        addAttModifiers(item, [
            { attribute: "minecraft:generic.armor", amount: 3, id: "shh_armor:head", slot: "head" },
            { attribute: "neoforge:swim_speed", amount: 0.15, id: "shh_swim_speed:head", slot: "head" }
        ]);
    });

    // event.modify('minecraft:coal', item => {
    //     item.setBurnTime(1)
    // })
})