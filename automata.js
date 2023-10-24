const { combineStats, makeAuto, makeCeption } = require('../facilitators.js');
const { base, gunCalcNames, statnames, smshskl } = require('../constants.js');
const tanks = require('../groups/tanks.js');
const g = require('../gunvals.js');

module.exports = ({ Class }) => {

Class.znpAutoBasic = makeAuto(Class.basic);
Class.basic.UPGRADES_TIER_1.push("znpAutoBasic");
    Class.znpAutoBasic.UPGRADES_TIER_1 = [];
    Class.znpAutoBasic.UPGRADES_TIER_2 = ["znpAutoTwin", "znpAutoSniper", "znpAutoMachineGun", "znpAutoFlankGuard", "znpAutoDirector", "znpAutoPounder", "autoTrapper", "znpCeptBasic"];
    Class.znpAutoBasic.UPGRADES_TIER_3 = ["autoSmasher"];

Class.znpAutoTwin = makeAuto(Class.twin);
Class.twin.UPGRADES_TIER_2.push("znpAutoTwin");
    Class.znpAutoTwin.UPGRADES_TIER_2 = [];
    Class.znpAutoTwin.UPGRADES_TIER_3 = ["autoDouble", "znpAutoTripleShot", "autoGunner", "znpAutoHexaTank", "znpCeptTwin"];

Class.znpAutoSniper = makeAuto(Class.sniper);
Class.sniper.UPGRADES_TIER_2.push("znpAutoSniper");
    Class.znpAutoSniper.UPGRADES_TIER_2 = [];
    Class.znpAutoSniper.UPGRADES_TIER_3 = ["autoAssassin", "znpAutoHunter", "znpAutoMinigun", "znpAutoRifle", "znpCeptSniper"];

Class.znpAutoMachineGun = makeAuto(Class.machineGun);
Class.machineGun.UPGRADES_TIER_2.push("znpAutoMachineGun");
    Class.znpAutoMachineGun.UPGRADES_TIER_2 = [];
    Class.znpAutoMachineGun.UPGRADES_TIER_3 = ["znpAutoArtillery", "znpAutoMinigun", "autoGunner", "znpAutoSprayer", "znpCeptMachineGun"];

Class.znpAutoFlankGuard = makeAuto(Class.flankGuard);
Class.flankGuard.UPGRADES_TIER_2.push("znpAutoFlankGuard");
    Class.znpAutoFlankGuard.UPGRADES_TIER_2 = [];
    Class.znpAutoFlankGuard.UPGRADES_TIER_3 = ["znpAutoHexaTank", "autoTriAngle", "znpAutoAuto3", "znpAutoTrapGuard", "znpAutoTriTrapper", "znpCeptFlankGuard"];

Class.znpAutoDirector = makeAuto(Class.director);
Class.director.UPGRADES_TIER_2.push("znpAutoDirector");
    Class.znpAutoDirector.UPGRADES_TIER_2 = [];
    Class.znpAutoDirector.UPGRADES_TIER_3 = ["autoOverseer", "autoCruiser", "znpAutoUnderseer", "autoSpawner", "znpCeptDirector"];

Class.znpAutoPounder = makeAuto(Class.pounder);
Class.pounder.UPGRADES_TIER_2.push("znpAutoPounder");
    Class.znpAutoPounder.UPGRADES_TIER_2 = [];
    Class.znpAutoPounder.UPGRADES_TIER_3 = ["znpAutoDestroyer", "autoBuilder", "znpAutoArtillery", "znpAutoLauncher", "znpCeptPounder"];

// auto trapper already exists in definitions lol
Class.trapper.UPGRADES_TIER_2.push("autoTrapper");
    Class.autoTrapper.UPGRADES_TIER_2 = [];
    Class.autoTrapper.UPGRADES_TIER_3 = ["autoBuilder", "znpAutoTriTrapper", "znpAutoTrapGuard", "znpCeptTrapper"];

Class.znpAutoTripleShot = makeAuto(Class.tripleShot);
Class.tripleShot.UPGRADES_TIER_3.push("znpAutoTripleShot");
    Class.znpAutoTripleShot.UPGRADES_TIER_3 = [];

Class.znpAutoHunter = makeAuto(Class.hunter);
Class.hunter.UPGRADES_TIER_3.push("znpAutoHunter");
    Class.znpAutoHunter.UPGRADES_TIER_3 = [];

Class.znpAutoRifle = makeAuto(Class.rifle);
Class.rifle.UPGRADES_TIER_3.push("znpAutoRifle");
    Class.znpAutoRifle.UPGRADES_TIER_3 = [];

Class.znpAutoMinigun = makeAuto(Class.minigun);
Class.minigun.UPGRADES_TIER_3.push("znpAutoMinigun");
    Class.znpAutoMinigun.UPGRADES_TIER_3 = [];

Class.znpAutoSprayer = makeAuto(Class.sprayer);
Class.sprayer.UPGRADES_TIER_3.push("znpAutoSprayer");
    Class.znpAutoSprayer.UPGRADES_TIER_3 = [];

Class.znpAutoHexaTank = makeAuto(Class.hexaTank);
Class.hexaTank.UPGRADES_TIER_3.push("znpAutoHexaTank");
    Class.znpAutoHexaTank.UPGRADES_TIER_3 = [];

Class.znpAutoAuto3 = makeAuto(Class.auto3);
Class.auto3.UPGRADES_TIER_3.push("znpAutoAuto3");
    Class.znpAutoAuto3.UPGRADES_TIER_3 = [];

Class.znpAutoUnderseer = makeAuto(Class.underseer);
Class.underseer.UPGRADES_TIER_3.push("znpAutoUnderseer");
    Class.znpAutoUnderseer.UPGRADES_TIER_3 = [];

Class.znpAutoDestroyer = makeAuto(Class.destroyer);
Class.destroyer.UPGRADES_TIER_3.push("znpAutoDestroyer");
    Class.znpAutoDestroyer.UPGRADES_TIER_3 = [];

Class.znpAutoArtillery = makeAuto(Class.artillery);
Class.artillery.UPGRADES_TIER_3.push("znpAutoArtillery");
    Class.znpAutoArtillery.UPGRADES_TIER_3 = [];

Class.znpAutoLauncher = makeAuto(Class.launcher);
Class.launcher.UPGRADES_TIER_3.push("znpAutoLauncher");
    Class.znpAutoLauncher.UPGRADES_TIER_3 = [];

Class.znpAutoTriTrapper = makeAuto(Class.triTrapper);
Class.triTrapper.UPGRADES_TIER_3.push("znpAutoTriTrapper");
    Class.znpAutoTriTrapper.UPGRADES_TIER_3 = [];

Class.znpAutoTrapGuard = makeAuto(Class.trapGuard);
Class.trapGuard.UPGRADES_TIER_3.push("znpAutoTrapGuard");
    Class.znpAutoTrapGuard.UPGRADES_TIER_3 = [];

Class.znpCeptBasic = makeCeption(Class.basic, "Inception");
    Class.znpCeptBasic.UPGRADES_TIER_1 = [];
    Class.znpCeptBasic.UPGRADES_TIER_2 = [];
    Class.znpCeptBasic.UPGRADES_TIER_3 = ["znpCeptTwin", "znpCeptSniper", "znpCeptMachineGun", "znpCeptFlankGuard", "znpCeptDirector", "znpCeptPounder", "znpCeptTrapper", "znpCept2Basic"];

Class.znpCeptTwin = makeCeption(Class.twin, "Twinception");
    Class.znpCeptTwin.UPGRADES_TIER_2 = [];
    Class.znpCeptTwin.UPGRADES_TIER_3 = [];

Class.znpCeptSniper = makeCeption(Class.sniper, "Snipeception");
    Class.znpCeptSniper.UPGRADES_TIER_2 = [];
    Class.znpCeptSniper.UPGRADES_TIER_3 = [];

Class.znpCeptMachineGun = makeCeption(Class.machineGun, "Machineception");
    Class.znpCeptMachineGun.UPGRADES_TIER_2 = [];
    Class.znpCeptMachineGun.UPGRADES_TIER_3 = [];

Class.znpCeptFlankGuard = makeCeption(Class.flankGuard, "Flankception");
    Class.znpCeptFlankGuard.UPGRADES_TIER_2 = [];
    Class.znpCeptFlankGuard.UPGRADES_TIER_3 = [];

Class.znpCeptDirector = makeCeption(Class.director, "Direction");
    Class.znpCeptDirector.UPGRADES_TIER_2 = [];
    Class.znpCeptDirector.UPGRADES_TIER_3 = [];

Class.znpCeptPounder = makeCeption(Class.pounder, "Poundception");
    Class.znpCeptPounder.UPGRADES_TIER_2 = [];
    Class.znpCeptPounder.UPGRADES_TIER_3 = [];

Class.znpCeptTrapper = makeCeption(Class.trapper, "Trapception");
    Class.znpCeptTrapper.UPGRADES_TIER_2 = [];
    Class.znpCeptTrapper.UPGRADES_TIER_3 = [];

Class.znpCept2Basic = makeAuto(Class.basic, "Recursion", {
    type: "znpCeptBasic",
    size: 12,
});
    Class.znpCept2Basic.UPGRADES_TIER_1 = [];
    Class.znpCept2Basic.UPGRADES_TIER_2 = [];

};