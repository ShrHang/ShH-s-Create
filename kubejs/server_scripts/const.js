/**
 * @file 定义了一些常用的常数
 */
//#region 类加载
/**
 * 箱子菜单类
 * @type {import("net.minecraft.world.inventory.ChestMenu")}
 */
const ChestMenu = Java.loadClass('net.minecraft.world.inventory.ChestMenu')
/**
 * 菜单提供器类
 * @type {import("net.minecraft.world.SimpleMenuProvider")}
 */
const SimpleMenuProvider = Java.loadClass('net.minecraft.world.SimpleMenuProvider')
//#endregion