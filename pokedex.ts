'use strict';

exports.BattlePokedex = { 
  	arenay: {
		num: 50001,
		name: "Arenay",
		baseForme: "Normal",
		types: ["Normal"],
		gender: "N",
		baseStats: {hp: 90, atk: 70, def: 70, spa: 70, spd: 70, spe: 70},
		abilities: {0: "Splice"},
		heightm: 0.3,
		weightkg: 6.5,
		color: "Brown",
		eggGroups: ["Undiscovered"],
		otherFormes: ["Arenay-Bug", "Arenay-Dark", "Arenay-Dragon", "Arenay-Electric", "Arenay-Fairy", "Arenay-Fighting", "Arenay-Fire", "Arenay-Flying", "Arenay-Ghost", "Arenay-Grass", "Arenay-Ground", "Arenay-Ice", "Arenay-Poison", "Arenay-Psychic", "Arenay-Rock", "Arenay-Steel", "Arenay-Water"],
		formeOrder: [
			"Arenay", "Arenay-Fighting", "Arenay-Flying", "Arenay-Poison", "Arenay-Ground", "Arenay-Rock", "Arenay-Bug", "Arenay-Ghost", "Arenay-Steel",
			"Arenay-Fire", "Arenay-Water", "Arenay-Grass", "Arenay-Electric", "Arenay-Psychic", "Arenay-Ice", "Arenay-Dragon", "Arenay-Dark", "Arenay-Fairy",
		],

	},
  arceusbug: {
		num: 493,
		name: "Arceus-Bug",
		baseSpecies: "Arceus",
		forme: "Bug",
		types: ["Bug"],
		gender: "N",
		baseStats: {hp: 120, atk: 120, def: 120, spa: 120, spd: 120, spe: 120},
		abilities: {0: "Multitype"},
		heightm: 3.2,
		weightkg: 320,
		color: "Gray",
		eggGroups: ["Undiscovered"],
		requiredItems: ["Insect Plate", "Buginium Z"],
		changesFrom: "Arceus",
	},
