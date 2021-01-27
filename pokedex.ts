'use strict';

export const Pokedex: {[k: string]: ModdedSpeciesData} = {
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
			"Arenay", "Arenay-Fire", "Arenay-Water", "Arenay-Grass", "Arenay-Flying", "Arenay-Steel", "Arenay-Electric", "Arenay-Ice", "Arenay-Psychic",
			"Arenay-Bug", "Arenay-Ground", "Arenay-Poison", "Arenay-Dragon", "Arenay-Fighting", "Arenay-Rock", "Arenay-Ghost", "Arenay-Dark", "Arenay-Fairy",
		],

	},
	arenayfire: {
		num: 50001,
		name: "Arenay-Fire",
		baseSpecies: "Arenay",
		forme: "Fire",
		types: ["Fire"],
		gender: "N",
		baseStats: {hp: 90, atk: 100, def: 60, spa: 90, spd: 60, spe: 90},
		abilities: {0: "Splice"},
		heightm: 0.3,
		weightkg: 6.5,
		color: "Brown",
		eggGroups: ["Undiscovered"],
		requiredItems: ["Fire Cellulose"],
		changesFrom: "Arenay",
	},
	arenaywater: {
		num: 50001,
		name: "Arenay-Water",
		baseSpecies: "Arenay",
		forme: "Water",
		types: ["Water"],
		gender: "N",
		baseStats: {hp: 90, atk: 60, def: 70, spa: 90, spd: 90, spe: 60},
		abilities: {0: "Splice"},
		heightm: 0.3,
		weightkg: 6.5,
		color: "Brown",
		eggGroups: ["Undiscovered"],
		requiredItems: ["Water Cellulose"],
		changesFrom: "Arenay",
	},
	arenaygrass: {
		num: 50001,
		name: "Arenay-Grass",
		baseSpecies: "Arenay",
		forme: "Grass",
		types: ["Grass"],
		gender: "N",
		baseStats: {hp: 90, atk: 90, def: 60, spa: 100, spd: 60, spe: 70},
		abilities: {0: "Splice"},
		heightm: 0.3,
		weightkg: 6.5,
		color: "Brown",
		eggGroups: ["Undiscovered"],
		requiredItems: ["Grass Cellulose"],
		changesFrom: "Arenay",
	},
	arenayflying: {
		num: 50001,
		name: "Arenay-Flying",
		baseSpecies: "Arenay",
		forme: "Flying",
		types: ["Flying"],
		gender: "N",
		baseStats: {hp: 90, atk: 90, def: 60, spa: 90, spd: 60, spe: 100},
		abilities: {0: "Splice"},
		heightm: 0.3,
		weightkg: 6.5,
		color: "Brown",
		eggGroups: ["Undiscovered"],
		requiredItems: ["Flying Cellulose"],
		changesFrom: "Arenay",
	},
	arenaysteel: {
		num: 50001,
		name: "Arenay-Steel",
		baseSpecies: "Arenay",
		forme: "Steel",
		types: ["Steel"],
		gender: "N",
		baseStats: {hp: 90, atk: 90, def: 100, spa: 60, spd: 60, spe: 70},
		abilities: {0: "Splice"},
		heightm: 0.3,
		weightkg: 6.5,
		color: "Brown",
		eggGroups: ["Undiscovered"],
		requiredItems: ["Steel Cellulose"],
		changesFrom: "Arenay",
	},
	arenayelectric: {
		num: 50001,
		name: "Arenay-Electric",
		baseSpecies: "Arenay",
		forme: "Electric",
		types: ["Electric"],
		gender: "N",
		baseStats: {hp: 90, atk: 90, def: 60, spa: 100, spd: 70, spe: 90},
		abilities: {0: "Splice"},
		heightm: 0.3,
		weightkg: 6.5,
		color: "Brown",
		eggGroups: ["Undiscovered"],
		requiredItems: ["Electric Cellulose"],
		changesFrom: "Arenay",
	},
	arenayice: {
		num: 50001,
		name: "Arenay-Ice",
		baseSpecies: "Arenay",
		forme: "Ice",
		types: ["Ice"],
		gender: "N",
		baseStats: {hp: 90, atk: 90, def: 70, spa: 90, spd: 60, spe: 100},
		abilities: {0: "Splice"},
		heightm: 0.3,
		weightkg: 6.5,
		color: "Brown",
		eggGroups: ["Undiscovered"],
		requiredItems: ["Ice Cellulose"],
		changesFrom: "Arenay",
	},
	arenaypsychic: {
		num: 50001,
		name: "Arenay-Psychic",
		baseSpecies: "Arenay",
		forme: "Psychic",
		types: ["Psychic"],
		gender: "N",
		baseStats: {hp: 90, atk: 70, def: 50, spa: 110, spd: 90, spe: 90},
		abilities: {0: "Splice"},
		heightm: 0.3,
		weightkg: 6.5,
		color: "Brown",
		eggGroups: ["Undiscovered"],
		requiredItems: ["Psychic Cellulose"],
		changesFrom: "Arenay",
	},
	arenaybug: {
		num: 50001,
		name: "Arenay-Bug",
		baseSpecies: "Arenay",
		forme: "Bug",
		types: ["Bug"],
		gender: "N",
		baseStats: {hp: 90, atk: 90, def: 60, spa: 70, spd: 90, spe: 60},
		abilities: {0: "Splice"},
		heightm: 0.3,
		weightkg: 6.5,
		color: "Brown",
		eggGroups: ["Undiscovered"],
		requiredItems: ["Bug Cellulose"],
		changesFrom: "Arenay",
	},
	arenayground: {
		num: 50001,
		name: "Arenay-Ground",
		baseSpecies: "Arenay",
		forme: "Ground",
		types: ["Ground"],
		gender: "N",
		baseStats: {hp: 90, atk: 100, def: 90, spa: 60, spd: 70, spe: 90},
		abilities: {0: "Splice"},
		heightm: 0.3,
		weightkg: 6.5,
		color: "Brown",
		eggGroups: ["Undiscovered"],
		requiredItems: ["Ground Cellulose"],
		changesFrom: "Arenay",
	},
	arenaypoison: {
		num: 50001,
		name: "Arenay-Poison",
		baseSpecies: "Arenay",
		forme: "Poison",
		types: ["Poison"],
		gender: "N",
		baseStats: {hp: 90, atk: 100, def: 60, spa: 100, spd: 60, spe: 90},
		abilities: {0: "Splice"},
		heightm: 0.3,
		weightkg: 6.5,
		color: "Brown",
		eggGroups: ["Undiscovered"],
		requiredItems: ["Poison Cellulose"],
		changesFrom: "Arenay",
	},
	arenaydragon: {
		num: 50001,
		name: "Arenay-Dragon",
		baseSpecies: "Arenay",
		forme: "Dragon",
		types: ["Dragon"],
		gender: "N",
		baseStats: {hp: 90, atk: 90, def: 50, spa: 110, spd: 90, spe: 90},
		abilities: {0: "Splice"},
		heightm: 0.3,
		weightkg: 6.5,
		color: "Brown",
		eggGroups: ["Undiscovered"],
		requiredItems: ["Dragon Cellulose"],
		changesFrom: "Arenay",
	},
	arenayfighting: {
		num: 50001,
		name: "Arenay-Fighting",
		baseSpecies: "Arenay",
		forme: "Fighting",
		types: ["Fighting"],
		gender: "N",
		baseStats: {hp: 90, atk: 120, def: 50, spa: 50, spd: 110, spe: 90},
		abilities: {0: "Splice"},
		heightm: 0.3,
		weightkg: 6.5,
		color: "Brown",
		eggGroups: ["Undiscovered"],
		requiredItems: ["Fighting Cellulose"],
		changesFrom: "Arenay",
	},
	arenayrock: {
		num: 50001,
		name: "Arenay-Rock",
		baseSpecies: "Arenay",
		forme: "Rock",
		types: ["Rock"],
		gender: "N",
		baseStats: {hp: 90, atk: 90, def: 120, spa: 50, spd: 80, spe: 50},
		abilities: {0: "Splice"},
		heightm: 0.3,
		weightkg: 6.5,
		color: "Brown",
		eggGroups: ["Undiscovered"],
		requiredItems: ["Rock Cellulose"],
		changesFrom: "Arenay",
	},
	arenayghost: {
		num: 50001,
		name: "Arenay-Ghost",
		baseSpecies: "Arenay",
		forme: "Ghost",
		types: ["Ghost"],
		gender: "N",
		baseStats: {hp: 90, atk: 80, def: 60, spa: 100, spd: 70, spe: 70},
		abilities: {0: "Splice"},
		heightm: 0.3,
		weightkg: 6.5,
		color: "Brown",
		eggGroups: ["Undiscovered"],
		requiredItems: ["Ghost Cellulose"],
		changesFrom: "Arenay",
	},
	arenaydark: {
		num: 50001,
		name: "Arenay-Dark",
		baseSpecies: "Arenay",
		forme: "Dark",
		types: ["Dark"],
		gender: "N",
		baseStats: {hp: 90, atk: 100, def: 60, spa: 100, spd: 70, spe: 70},
		abilities: {0: "Splice"},
		heightm: 0.3,
		weightkg: 6.5,
		color: "Brown",
		eggGroups: ["Undiscovered"],
		requiredItems: ["Dark Cellulose"],
		changesFrom: "Arenay",
	},
	arenayfairy: {
		num: 50001,
		name: "Arenay-Fairy",
		baseSpecies: "Arenay",
		forme: "Fairy",
		types: ["Fairy"],
		gender: "N",
		baseStats: {hp: 90, atk: 70, def: 50, spa: 100, spd: 120, spe: 60},
		abilities: {0: "Splice"},
		heightm: 0.3,
		weightkg: 6.5,
		color: "Brown",
		eggGroups: ["Undiscovered"],
		requiredItems: ["Psychic Cellulose"],
		changesFrom: "Arenay",
	},
	Eevee: {
		inherit: true,
		evos: ["Vaporeon", "Jolteon", "Flareon", "Espeon", "Umbreon", "Leafeon", "Glaceon", "Sylveon", "Aeveon", "Chromeon"],
	},
	aeveon: {
		num: 50002,
		name: "Aeveon",
		types: ["Flying"],
		baseStats: {hp: 95, atk: 65, def: 110, spa: 60, spd: 130, spe: 65},
		abilities: {0: "Synchronize", H: "Inner Focus"},
		heightm: 1,
		weightkg: 35,
		color: "Black",
		prevo: "Eevee",
		evoType: "useItem",
		evoItem: "Bio Stone",
		eggGroups: ["Field"],
	},
	chromeon: {
		num: 50003,
		name: "Chromeon",
		types: ["Steel"],
		baseStats: {hp: 95, atk: 65, def: 110, spa: 60, spd: 130, spe: 65},
		abilities: {0: "Synchronize", H: "Inner Focus"},
		heightm: 1,
		weightkg: 98,
		color: "Black",
		prevo: "Eevee",
		evoType: "useItem",
		evoItem: "Mech Stone",
		eggGroups: ["Field"],
	},
	magikarp: {
		inherit: true,
		otherFormes: ["Magikarp-Stacona"],
		formeOrder: ["Magikarp", "Magikarp-Stacona"],
	},
	magikarpstacona: {
		num: 129,
		name: "Magikarp-Stacona",
		baseSpecies: "Magikarp",
		forme: "Stacona",
		types: ["Water", "Electric"],
		baseStats: {hp: 20, atk: 10, def: 55, spa: 15, spd: 20, spe: 80},
		abilities: {0: "Static", 1: "Swift Swim", H: "Lightning Rod"},
		heightm: 0.9,
		weightkg: 10,
		color: "Blue",
		evos: ["Gyarados-Stacona"],
		eggGroups: ["Water 2", "Dragon"],
	},
	gyarados: {
		inherit: true,
		otherFormes: ["Gyarados-Mega", "Gyarados-Stacona"],
		formeOrder: ["Gyarados", "Gyarados-Mega", "Gyarados-Stacona"],
	},
	gyaradosstacona: {
		num: 130,
		name: "Gyarados-Stacona",
		baseSpecies: "Gyarados",
		forme: "Stacona",
		types: ["Water", "Electric"],
		baseStats: {hp: 95, atk: 125, def: 79, spa: 60, spd: 100, spe: 81},
		abilities: {0: "Static", 1: "Intimidate", H: "Lightning Rod"},
		heightm: 6.5,
		weightkg: 235,
		color: "Blue",
		evos: ["Gyarados-Stacona"],
		eggGroups: ["Water 2", "Dragon"],
	},
	lappy: {
		num: 50004,
		name: "Lappy",
		types: ["Water"],
		baseStats: {hp: 100, atk: 65, def: 90, spa: 65, spd: 65, spe: 40},
		abilities: {0: "Swift Swim", 1: "Water Absorb", H: "Hydration"},
		heightm: 2.5,
		weightkg: 220,
		color: "Blue",
		evos: ["Lapras"],
		eggGroups: ["Monster", "Water 1"],
	},
	lapras: {
		inherit: true,
		prevo: "Lappy",
	},
	babee: {
		num: 50005,
		name: "Babee",
		types: ["Bug", "Flying"],
		baseStats: {hp: 25, atk: 25, def: 36, spa: 25, spd: 36, spe: 50},
		abilities: {0: "Honey Gather", H: "Hustle"},
		heightm: 0.3,
		weightkg: 5.5,
		color: "Yellow",
		evos: ["Combee"],
		eggGroups: ["Bug"],
	},
	combee: {
		inherit: true,
		prevo: "Babee",
		evos: ["Vespiquen", "Polleknight"],
	},
	polleknight: {
		num: 50006,
		name: "Polleknight",
		types: ["Bug", "Flying"],
		baseStats: {hp: 75, atk: 125, def: 60, spa: 70, spd: 30, spe: 102},
		abilities: {0: "Shield Dust", 1: "Swarm", H: "Technician"},
		heightm: 0.3,
		weightkg: 5.5,
		color: "Yellow",
		prevo: ["Combee"],
		eggGroups: ["Bug"],
	},
	adorabull: {
		num: 50007,
		name: "Adorabull",
		types: ["Normal"],
		baseStats: {hp: 45, atk: 70, def: 75, spa: 25, spd: 50, spe: 85},
		abilities: {0: "Cute Charm", 1: "Oblivious", H: "Sheer Force"},
		heightm: 1.4,
		weightkg: 88.5,
		color: "Brown",
		evos: ["Miltank", "Tauros"],
		eggGroups: ["Field"],
	},
	miltank: {
		inherit: true,
		prevo: "Adorabull",
	},
	tauros: {
		inherit: true,
		prevo: "Adorabull",
	},
	pincush: {
		num: 50008,
		name: "Pincush",
		types: ["Bug"],
		baseStats: {hp: 55, atk: 90, def: 80, spa: 45, spd: 50, spe: 65},
		abilities: {0: "Hyper Cutter", 1: "Mold Breaker", H: "Moxie"},
		heightm: 1.1,
		weightkg: 34,
		color: "Brown",
		evos: ["Pinsir"],
		eggGroups: ["Bug"],
	},
	pinsir: {
		inherit: true,
		prevo: "Pincush",
		evos: ["Pinterra"],
	},
	pinterra: {
		num: 50009,
		name: "Pinterra",
		types: ["Bug", "Ground"],
		baseStats: {hp: 95, atk: 130, def: 105, spa: 60, spd: 80, spe: 90},
		abilities: {0: "Hyper Cutter", 1: "Mold Breaker", H: "Moxie"},
		heightm: 2.5,
		weightkg: 85,
		color: "Brown",
		prevo: ["Pinsir"],
		eggGroups: ["Bug"],
	},
	sickler: {
		num: 50010,
		name: "Sickler",
		types: ["Bug"],
		baseStats: {hp: 50, atk: 90, def: 50, spa: 45, spd: 60, spe: 85},
		abilities: {0: "Swarm", 1: "Technician", H: "Steadfast"},
		heightm: 1.5,
		weightkg: 56,
		color: "Green",
		evos: ["Scyther"],
		eggGroups: ["Bug"],
	},
	scyther: {
		inherit: true,
		prevo: "Sickler",
	},
	heracute: {
		num: 50011,
		name: "Heracute",
		types: ["Bug"],
		baseStats: {hp: 60, atk: 70, def: 55, spa: 25, spd: 55, spe: 65},
		abilities: {0: "Swarm", 1: "Guts", H: "Moxie"},
		heightm: 0.8,
		weightkg: 26,
		color: "Blue",
		evos: ["Heracross"],
		eggGroups: ["Bug"],
	},
	heracross: {
		inherit: true,
		prevo: "Heracute",
		evos: ["Heraplex"],
	},
	heraplex: {
		num: 50012,
		name: "Heraplex",
		types: ["Bug", "Fighting"],
		baseStats: {hp: 110, atk: 155, def: 90, spa: 45, spd: 100, spe: 90},
		abilities: {0: "Swarm", 1: "Guts", H: "Moxie"},
		heightm: 2.1,
		weightkg: 74,
		color: "Blue",
		prevo: ["Heracross"],
		eggGroups: ["Bug"],
	},
	foongus: {
		inherit: true,
		otherFormes: ["Foongus-Stacona"],
		formeOrder: ["Foongus", "Foongus-Stacona"],
	},
	foongusstacona: {
		num: 590,
		name: "Foonguss-Stacona",
		baseSpecies: "Foonguss",
		forme: "Stacona",
		types: ["Poison", "Psychic"],
		baseStats: {hp: 69, atk: 45, def: 45, spa: 65, spd: 55, spe: 15},
		abilities: {0: "Effect Spore", H: "Regenerator"},
		heightm: 0.2,
		weightkg: 1,
		color: "Blue",
		evos: ["Amoonguss-Stacona"],
		eggGroups: ["Grass"],
	},
	amoonguss: {
		inherit: true,
		otherFormes: ["Amoonguss-Stacona"],
		formeOrder: ["Amoonguss", "Amoonguss-Stacona"],
	},
	amoongussstacona: {
		num: 591,
		name: "Amoonguss-Stacona",
		baseSpecies: "Amoonguss",
		forme: "Stacona",
		types: ["Poison", "Psychic"],
		baseStats: {hp: 115, atk: 65, def: 70, spa: 115, spd: 80, spe: 30},
		abilities: {0: "Effect Spore", H: "Regenerator"},
		heightm: 0.6,
		weightkg: 10.5,
		color: "Blue",
		prevo: ["Foongus-Stacona"],
		eggGroups: ["Grass"],
	},
	nosepass: {
		inherit: true,
		otherFormes: ["Nosepass-Stacona"],
		formeOrder: ["Nosepass", "Nosepass-Stacona"],
	},
	nosepassstacona: {
		num: 299,
		name: "Nosepass-Stacona",
		baseSpecies: "Nosepass",
		forme: "Stacona",
		types: ["Rock", "Electric"],
		baseStats: {hp: 30, atk: 45, def: 115, spa: 65, spd: 90, spe: 30},
		abilities: {0: "Static", H: "Volt Absorb"},
		heightm: 1,
		weightkg: 97,
		color: "Gray",
		evos: ["Probopass-Stacona"],
		eggGroups: ["Mineral"],
	},
	probopass: {
		inherit: true,
		otherFormes: ["Probopass-Stacona"],
		formeOrder: ["Probopass", "Probopass-Stacona"],
	},
	probopassstacona: {
		num: 476,
		name: "Probopass-Stacona",
		baseSpecies: "Probopass",
		forme: "Stacona",
		types: ["Rock", "Electric"],
		baseStats: {hp: 60, atk: 55, def: 115, spa: 105, spd: 150, spe: 40},
		abilities: {0: "Static", H: "Volt Absorb"},
		heightm: 0.6,
		weightkg: 10.5,
		color: "Blue",
		prevo: ["Probopass-Stacona"],
		eggGroups: ["Grass"],
	},
	zangoose: {
		inherit: true,
		otherFormes: ["Zangoose-Stacona"],
		formeOrder: ["Zangoose", "Zangoose-Stacona"],
	},
	zangoosestacona: {
		num: 335,
		name: "Zangoose-Stacona",
		baseSpecies: "Zangoose",
		forme: "Stacona",
		types: ["Normal", "Fairy"],
		baseStats: {hp: 93, atk: 115, def: 50, spa: 50, spd: 70, spe: 80},
		abilities: {0: "Pixilate", H: "Klutz"},
		heightm: 2.7,
		weightkg: 52.5,
		color: "Pink",
		eggGroups: ["Field"],
	},
	seviper: {
		inherit: true,
		otherFormes: ["Seviper-Stacona"],
		formeOrder: ["Seviper", "Seviper-Stacona"],
	},
	seviperstacona: {
		num: 336,
		name: "Seviper-Stacona",
		baseSpecies: "Seviper",
		forme: "Stacona",
		types: ["Poison", "Rock"],
		baseStats: {hp: 73, atk: 110, def: 60, spa: 65, spd: 60, spe: 90},
		abilities: {0: "Stench", H: "Sturdy"},
		heightm: 2.7,
		weightkg: 52.5,
		color: "Black",
		eggGroups: ["Field", "Dragon"],
	},
	zubat: {
		inherit: true,
		otherFormes: ["Zubat-Stacona"],
		formeOrder: ["Zubat", "Zubat-Stacona"],
	},
	//zubatstacona: {
	//	num: 41,
	//	name: "Zubat-Stacona",
	//	baseSpecies: "Zubat",
	//	forme: "Stacona",
	//	types: ["Dark", "Flying"],
	//	baseStats: {hp: 40, atk: 45, def: 35, spa: 30, spd: 40, spe: 55}, To Be Updated
	//	abilities: {0: "Inner Focus", H: "Infiltrator"}, To Be Updated
	//	heightm: 0.8,
	//	weightkg: 7.5,
	//	color: "Black",
	//	evos: ["Golbat-Stacona"],
	//	eggGroups: ["Flying"],
	//},
	//golbat: {
	//	inherit: true,
	//	otherFormes: ["Golbat-Stacona"],
	//	formeOrder: ["Golbat", "Golbat-Stacona"],
	//},
	//golbatstacona: {
	//	num: 42,
	//	name: "Golbat-Stacona",
	//	baseSpecies: "Golbat",
	//	forme: "Stacona",
	//	types: ["Dark", "Flying"],
	//	baseStats: {hp: 40, atk: 45, def: 35, spa: 30, spd: 40, spe: 55}, To Be Updated
	//	abilities: {0: "Inner Focus", H: "Infiltrator"}, To Be Updated
	//	heightm: 1.6,
	//	weightkg: 55,
	//	color: "Black",
	//	evos: ["Crobat-Stacona"],
	//	prevo: "Zubat-Stacona",
	//	eggGroups: ["Flying"],
	//},
	//crobat: {
	//	inherit: true,
	//	otherFormes: ["Crobat-Stacona"],
	//	formeOrder: ["Crobat", "Crobat-Stacona"],
	//},
	//crobatstacona: {
	//	num: 169,
	//	name: "Crobat-Stacona",
	//	baseSpecies: "Crobat",
	//	forme: "Stacona",
	//	types: ["Dark", "Flying"],
	//	baseStats: {hp: 40, atk: 45, def: 35, spa: 30, spd: 40, spe: 55}, To Be Updated
	//	abilities: {0: "Inner Focus", H: "Infiltrator"}, To Be Updated
	//	heightm: 1.8,
	//	weightkg: 75,
	//	color: "Black",
	//	prevo: "Golbat-Stacona",
	//	eggGroups: ["Flying"],
	//},
	wingot: {
		num: 50013,
		name: "Wingot",
		types: ["Steel", "Flying"],
		baseStats: {hp: 40, atk: 55, def: 100, spa: 30, spd: 40, spe: 40},
		abilities: {0: "Keen Eye", 1: "Sturdy", H: "Weak Armor"},
		heightm: 0.9,
		weightkg: 20.5,
		color: "Gray",
		evos: ["Skarmory"],
		eggGroups: ["Flying"],
	},
	skarmory: {
		inherit: true,
		prevo: "Wingot",
		evos: ["Skartillery"],
	},
	skartillery: {
		num: 50014,
		name: "Wingot",
		types: ["Steel", "Flying"],
		baseStats: {hp: 75, atk: 100, def: 160, spa: 45, spd: 75, spe: 80},
		abilities: {0: "Keen Eye", 1: "Sturdy", H: "Weak Armor"},
		heightm: 2.3,
		weightkg: 70.4,
		color: "Gray",
		evos: ["Skarmory"],
		eggGroups: ["Flying"],
	},
	klink: {
		inherit: true,
		otherFormes: ["Klink-Stacona"],
		formeOrder: ["Klink", "Klink-Stacona"],
	},
	klinkstacona: {
		num: 599,
		name: "Klink-Stacona",
		baseSpecies: "Klink",
		forme: "Stacona",
		types: ["Steel", "Fire"],
		baseStats: {hp: 40, atk: 55, def: 50, spa: 55, spd: 60, spe: 50},
		abilities: {0: "Steampunk", 1: "Motor Drive", H: "White Smoke"},
		heightm: 0.3,
		weightkg: 21,
		color: "Gray",
		evos: ["Klang-Stacona"],
		eggGroups: ["Mineral"],
	},
	klang: {
		inherit: true,
		otherFormes: ["Klang-Stacona"],
		formeOrder: ["Klang", "Klang-Stacona"],
	},
	klangstacona: {
		num: 600,
		name: "Klang-Stacona",
		baseSpecies: "Klang",
		forme: "Stacona",
		types: ["Steel", "Fire"],
		baseStats: {hp: 60, atk: 80, def: 75, spa: 80, spd: 85, spe: 70},
		abilities: {0: "Steampunk", 1: "Motor Drive", H: "White Smoke"},
		heightm: 0.6,
		weightkg: 51,
		color: "Gray",
		evos: ["Klinklang-Stacona"],
		prevo: "Klink-Stacona",
		eggGroups: ["Mineral"],
	},
	klinklang: {
		inherit: true,
		otherFormes: ["Klinklang-Stacona"],
		formeOrder: ["Klinklang", "Klinklang-Stacona"],
	},
	klinklangstacona: {
		num: 600,
		name: "Klinklang-Stacona",
		baseSpecies: "Klinklang",
		forme: "Stacona",
		types: ["Steel", "Fire"],
		baseStats: {hp: 60, atk: 100, def: 95, spa: 90, spd: 85, spe: 110},
		abilities: {0: "Steampunk", 1: "Motor Drive", H: "White Smoke"},
		heightm: 0.6,
		weightkg: 81,
		color: "Gray",
		prevo: "Klang-Stacona",
		eggGroups: ["Mineral"],
	},
	dunsparce: {
		inherit: true,
		otherFormes: ["Dunsparce-Stacona"],
		formeOrder: ["Dunsparce", "Dunsparce-Stacona"],
	},
	dunsparcestacona: {
		num: 206,
		name: "Dunsparce-Stacona",
		baseSpecies: "Dunsparce",
		forme: "Stacona",
		types: ["Dark"],
		baseStats: {hp: 90, atk: 80, def: 70 , spa: 55, spd: 65, spe: 55},
		abilities: {0: "Intimidate", 1: "Moxie", H: "Justified"},
		heightm: 1.5,
		weightkg: 14,
		color: "Purple",
		evos: ["Dundrake"],
		eggGroups: ["Field"],
	},
	dundrake: {
		num: 50015,
		name: "Drundrake",
		types: ["Dark", "Dragon"],
		baseStats: {hp: 110, atk: 110, def: 80, spa: 70, spd: 60, spe: 85},
		abilities: {0: "Intimidate", 1: "Moxie", H: "Justified"},
		heightm: 4.2,
		weightkg: 72,
		color: "Purple",
		prevo: ["Dunsparce-Stacona"],
		eggGroups: ["Field"],
	},
	lotad: {
		inherit: true,
		otherFormes: ["Lotad-Stacona"],
		formeOrder: ["Lotad", "Lotad-Stacona"],
	},
	lotadstacona: {
		num: 270,
		name: "Lotad-Stacona",
		baseSpecies: "Lotad",
		forme: "Stacona",
		types: ["Grass", "Water"],
		baseStats: {hp: 40, atk: 50, def: 30, spa: 35, spd: 35, spe: 30},
		abilities: {0: "Submerged", 1: "Thick Fat", H: "Drizzle"},
		heightm: 0.5,
		weightkg: 2.6,
		color: "Blue",
		evos: ["Lombre-Stacona"],
		eggGroups: ["Water 1", "Grass"],
	},
	lombre: {
		inherit: true,
		otherFormes: ["Lombre-Stacona"],
		formeOrder: ["Lombre", "Lombre-Stacona"],
	},
	lombrestacona: {
		num: 271,
		name: "Lombre-Stacona",
		baseSpecies: "Lombre",
		forme: "Stacona",
		types: ["Grass", "Water"],
		baseStats: {hp: 60, atk: 70, def: 50, spa: 60, spd: 60, spe: 50},
		abilities: {0: "Submerged", 1: "Thick Fat", H: "Drizzle"},
		heightm: 1.2,
		weightkg: 32.5,
		color: "Blue",
		evos: ["Ludicolo-Stacona"],
		prevo: "Lotad-Stacona",
		eggGroups: ["Water 1", "Grass"],
	},
	ludicolo: {
		inherit: true,
		otherFormes: ["Ludicolo-Stacona"],
		formeOrder: ["Ludicolo", "Ludicolo-Stacona"],
	},
	ludicolostacona: {
		num: 272,
		name: "Ludicolo-Stacona",
		baseSpecies: "Ludicolo",
		forme: "Stacona",
		types: ["Grass", "Water"],
		baseStats: {hp: 80, atk: 100, def: 70, spa: 80, spd: 80, spe: 70},
		abilities: {0: "Submerged", 1: "Thick Fat", H: "Drizzle"},
		heightm: 1.5,
		weightkg: 55,
		color: "Blue",
		prevo: "Lombre-Stacona",
		eggGroups: ["Water 1", "Grass"],
	},
	solosis: {
		inherit: true,
		otherFormes: ["Solosis-Stacona"],
		formeOrder: ["Solosis", "Solosis-Stacona"],
	},
	solosisstacona: {
		num: 577,
		name: "Solosis-Stacona",
		baseSpecies: "Solosis",
		forme: "Stacona",
		types: ["Grass", "Psychic"],
		baseStats: {hp: 45, atk: 30, def: 40, spa: 115, spd: 50, spe: 30},
		abilities: {0: "Chlorophyll", 1: "Magic Guard", H: "Psychic Surge"},
		heightm: 0.3,
		weightkg: 1,
		color: "Green",
		evos: ["Duosion-Stacona"],
		eggGroups: ["Amorphous"],
	},
	duosion: {
		inherit: true,
		otherFormes: ["Duosion-Stacona"],
		formeOrder: ["Duosion", "Duosion-Stacona"],
	},
	duosionstacona: {
		num: 578,
		name: "Duosion-Stacona",
		baseSpecies: "Duosion",
		forme: "Stacona",
		types: ["Grass", "Psychic"],
		baseStats: {hp: 65, atk: 40, def: 50, spa: 135, spd: 60, spe: 40},
		abilities: {0: "Chlorophyll", 1: "Magic Guard", H: "Psychic Surge"},
		heightm: 0.6,
		weightkg: 8,
		color: "Green",
		evos: ["Reuniclus-Stacona"],
		prevo: "Solosis-Stacona",
		eggGroups: ["Amorphous"],
	},
	reuniclus: {
		inherit: true,
		otherFormes: ["Reuniclus-Stacona"],
		formeOrder: ["Reuniclus", "Reuniclus-Stacona"],
	},
	reuniclusstacona: {
		num: 579,
		name: "Reuniclus-Stacona",
		baseSpecies: "Reuniclus",
		forme: "Stacona",
		types: ["Grass", "Psychic"],
		baseStats: {hp: 115, atk: 65, def: 70, spa: 140, spd: 85, spe: 45},
		abilities: {0: "Chlorophyll", 1: "Magic Guard", H: "Psychic Surge"},
		heightm: 1,
		weightkg: 20.1,
		color: "Green",
		prevo: "Duosion-Stacona",
		eggGroups: ["Amorphous"],
	},
	krabby: {
		inherit: true,
		otherFormes: ["Krabby-Stacona"],
		formeOrder: ["Krabby", "Krabby-Stacona"],
	},
	krabbystacona: {
		num: 98,
		name: "Krabby-Stacona",
		baseSpecies: "Krabby",
		forme: "Stacona",
		types: ["Water", "Steel"],
		baseStats: {hp: 30, atk: 105, def: 90, spa: 25, spd: 25, spe: 50},
		abilities: {0: "Hyper Cutter", 1: "Shell Armor", H: "Steelworker"},
		heightm: 0.4,
		weightkg: 6.5,
		color: "Blue",
		evos: ["Kingler-Stacona"],
		eggGroups: ["Water 3"],
	},
	kingler: {
		inherit: true,
		otherFormes: ["Kingler-Stacona"],
		formeOrder: ["Kingler", "Kingler-Stacona"],
	},
	kinglerstacona: {
		num: 99,
		name: "Kingler-Stacona",
		baseSpecies: "Kingler",
		forme: "Stacona",
		types: ["Water", "Steel"],
		baseStats: {hp: 55, atk: 130, def: 115, spa: 50, spd: 50, spe: 75},
		abilities: {0: "Hyper Cutter", 1: "Shell Armor", H: "Steelworker"},
		heightm: 1.3,
		weightkg: 60,
		color: "Blue",
		prevo: "Krabby-Stacona",
		eggGroups: ["Water 3"],
	},
	sandile: {
		inherit: true,
		otherFormes: ["Sandile-Stacona"],
		formeOrder: ["Sandile", "Sandile-Stacona"],
	},
	sandilestacona: {
		num: 551,
		name: "Sandile-Stacona",
		baseSpecies: "Sandile",
		forme: "Stacona",
		types: ["Water", "Dark"],
		baseStats: {hp: 50, atk: 72, def: 35, spa: 35, spd: 35, spe: 65},
		abilities: {0: "Intimidate", 1: "Water Absorb", H: "Moxie"},
		heightm: 0.7,
		weightkg: 15.2,
		color: "Blue",
		evos: ["Krokorok-Stacona"],
		eggGroups: ["Field"],
	},
	krokorok: {
		inherit: true,
		otherFormes: ["Krokorok-Stacona"],
		formeOrder: ["Krokorok", "Krokorok-Stacona"],
	},
	krokorokstacona: {
		num: 552,
		name: "Duosion-Stacona",
		baseSpecies: "Duosion",
		forme: "Stacona",
		types: ["Water", "Dark"],
		baseStats: {hp: 60, atk: 82, def: 45, spa: 45, spd: 45, spe: 74},
		abilities: {0: "Intimidate", 1: "Water Absorb", H: "Moxie"},
		heightm: 1,
		weightkg: 33.4,
		color: "Blue",
		evos: ["Krookodile-Stacona"],
		prevo: "Sandile-Stacona",
		eggGroups: ["Field"],
	},
	krookodile: {
		inherit: true,
		otherFormes: ["Krookodile-Stacona"],
		formeOrder: ["Krookodile", "Krookodile-Stacona"],
	},
	krookodilestacona: {
		num: 553,
		name: "Krookodile-Stacona",
		baseSpecies: "Krookodile",
		forme: "Stacona",
		types: ["Water", "Dark"],
		baseStats: {hp: 115, atk: 65, def: 70, spa: 140, spd: 85, spe: 45},
		abilities: {0: "Intimidate", 1: "Water Absorb", H: "Moxie"},
		heightm: 1.5,
		weightkg: 96.3,
		color: "Blue",
		prevo: "Krokorok-Stacona",
		eggGroups: ["Field"],
	},
	kanga: {
		num: 50017,
		name: "Kanga",
		types: ["Normal"],
		baseStats: {hp: 80, atk: 75, def: 90, spa: 30, spd: 65, spe: 70},
		abilities: {0: "Early Bird", 1: "Scrappy", H: "Inner Focus"},
		heightm: 1.1,
		weightkg: 32,
		color: "Brown",
		evos: ["Kangaskhan"],
		eggGroups: ["Monster"],
	},
	kangaskhan: {
		inherit: true,
		prevo: "Kanga",
	},
	pichu: {
		inherit: true,
		otherFormes: ["Pichu-Spiky-eared", "Pichu-Mech"],
		formeOrder: ["Pichu", "Pichu-Spiky-eared", "Pichu-Mech"],
	},
	pichumech: {
		num: 172,
		name: "Pichu-Mech",
		baseSpecies: "Pichu",
		forme: "Stacona",
		types: ["Steel", "Electric"],
		baseStats: {hp: 20, atk: 40, def: 35, spa: 45, spd: 25, spe: 40},
		abilities: {0: "Motor Drive", 1: "Download", H: "Volt Absorb"},
		heightm: 0.3,
		weightkg: 2,
		color: "Gray",
		evos: ["Pikachu-Mech"],
		eggGroups: ["Undiscovered"],
	},
	pikachu: {
		inherit: true,
		otherFormes: ["Pikachu-Cosplay", "Pikachu-Rock-Star", "Pikachu-Belle", "Pikachu-Pop-Star", "Pikachu-PhD", "Pikachu-Libre", "Pikachu-Original", "Pikachu-Hoenn", "Pikachu-Sinnoh", "Pikachu-Unova", "Pikachu-Kalos", "Pikachu-Alola", "Pikachu-Partner", "Pikachu-Starter", "Pikachu-World", "Pikachu-Mech"],
		formeOrder: [
			"Pikachu",
			"Pikachu-Original", "Pikachu-Hoenn", "Pikachu-Sinnoh", "Pikachu-Unova", "Pikachu-Kalos", "Pikachu-Alola", "Pikachu-Partner", // Gen 7 formes
			"Pikachu-Starter", // forme 8 in LGPE
			"Pikachu-World", // Gen 8 forme (indexed as Pikachu 9 in datamine)
			"Pikachu-Rock-Star", "Pikachu-Belle", "Pikachu-Pop-Star", "Pikachu-PhD", "Pikachu-Libre", "Pikachu-Cosplay", // formes 1-6 from Gen 6
			"Pikachu-Mech"
		]
	},
	pikachumech: {
		num: 25,
		name: "Pikachu-Mech",
		baseSpecies: "Pikachu",
		forme: "Mech",
		types: ["Steel", "Electric"],
		baseStats: {hp: 40, atk: 60, def: 50, spa: 70, spd: 50, spe: 60},
		abilities: {0: "Motor Drive", 1: "Download", H: "Volt Absorb"},
		heightm: 0.4,
		weightkg: 6,
		color: "Gray",
		evos: ["Raichu-Mech"],
		prevo: "Pichu-Mech",
		eggGroups: ["Field"],
	},
	raichu: {
		inherit: true,
		otherFormes: ["Raichu-Alola", "Raichu-Mech"],
		formeOrder: ["Raichu", "Raichu-Alola", "Raichu-Mech"],
	},
	raichumech: {
		num: 26,
		name: "Raichu-Mech",
		baseSpecies: "Raichu",
		forme: "Mech",
		types: ["Steel", "Electric"],
		baseStats: {hp: 60, atk: 80, def: 95, spa: 90, spd: 70, spe: 80},
		abilities: {0: "Intimidate", 1: "Water Absorb", H: "Moxie"},
		heightm: 0.7,
		weightkg: 21,
		color: "Blue",
		prevo: "Pikachu-Mech",
		eggGroups: ["Field"],
	},
	marbolt: {
		num: 50018,
		name: "Marbolt",
		types: ["Electric"],
		baseStats: {hp: 30, atk: 25, def: 40, spa: 45, spd: 45, spe: 90},
		abilities: {0: "Soundproof", 1: "Static", H: "Aftermath"},
		heightm: 0.2,
		weightkg: 2.4,
		color: "Red",
		evos: ["Voltorb"],
		eggGroups: ["Mineral"],
	},
	voltorb: {
		inherit: true,
		prevo: "Marbolt",
	},
	mareep: {
		inherit: true,
		otherFormes: ["Mareep-Stacona"],
		formeOrder: ["Mareep", "Mareep-Stacona"],
	},
	mareepstacona: {
		num: 179,
		name: "Mareep-Stacona",
		baseSpecies: "Mareep",
		forme: "Stacona",
		types: ["Ice", "Electric"],
		baseStats: {hp: 55, atk: 40, def: 40, spa: 65, spd: 45, spe: 35},
		abilities: {0: "Ice Body", 1: "Snow Warning", H: "Lightning Rod"},
		heightm: 0.6,
		weightkg: 7.8,
		color: "White",
		evos: ["Flaaffy-Stacona"],
		eggGroups: ["Monster", "Field"],
	},
	flaaffy: {
		inherit: true,
		otherFormes: ["Flaaffy-Stacona"],
		formeOrder: ["Flaaffy", "Flaaffy-Stacona"],
	},
	flaaffystacona: {
		num: 180,
		name: "Flaaffy-Stacona",
		baseSpecies: "Flaaffy",
		forme: "Stacona",
		types: ["Ice", "Electric"],
		baseStats: {hp: 70, atk: 55, def: 55, spa: 80, spd: 60, spe: 45},
		abilities: {0: "Ice Body", 1: "Snow Warning", H: "Lightning Rod"},
		heightm: 0.8,
		weightkg: 13.3,
		color: "White",
		evos: ["Ampharos-Stacona"],
		prevo: "Mareep-Stacona",
		eggGroups: ["Monster", "Field"],
	},
	ampharos: {
		inherit: true,
		otherFormes: ["Ampharos-Stacona"],
		otherFormes: ["Ampharos-Mega", "Ampharos-Stacona"],
		formeOrder: ["Ampharos", "Ampharos-Mega", "Ampharos-Stacona"],
	},
	ampharosstacona: {
		num: 181,
		name: "Ampharos-Stacona",
		baseSpecies: "Ampharos",
		forme: "Stacona",
		types: ["Ice", "Electric"],
		baseStats: {hp: 90, atk: 75, def: 85, spa: 115, spd: 90, spe: 55},
		abilities: {0: "Ice Body", 1: "Snow Warning", H: "Lightning Rod"},
		heightm: 1.4,
		weightkg: 61.5,
		color: "White",
		prevo: "Flaaffy-Stacona",
		eggGroups: ["Monster", "Field"],
	},
	sentret: {
		inherit: true,
		otherFormes: ["Sentret-Stacona"],
		formeOrder: ["Sentret", "Sentret-Stacona"],
	},
	sentretstacona: {
		num: 161,
		name: "Sentret-Stacona",
		baseSpecies: "Sentret",
		forme: "Stacona",
		types: ["Normal", "Fairy"],
		baseStats: {hp: 34, atk: 35, def: 20, spa: 46, spd: 45, spe: 35},
		abilities: {0: "Cute Charm", 1: "Frisk", H: "Magic Guard"},
		heightm: 0.8,
		weightkg: 6,
		color: "Pink",
		evos: ["Furret-Stacona"],
		eggGroups: ["Field"],
	},
	furret: {
		inherit: true,
		otherFormes: ["Furret-Stacona"],
		formeOrder: ["Furret", "Furret-Stacona"],
	},
	furretstacona: {
		num: 168,
		name: "Furret-Stacona",
		baseSpecies: "Furret",
		forme: "Stacona",
		types: ["Normal", "Fairy"],
		baseStats: {hp: 74, atk: 45, def: 45, spa: 96, spd: 75, spe: 90},
		abilities: {0: "Cute Charm", 1: "Frisk", H: "Magic Guard"},
		heightm: 1.8,
		weightkg: 32.5,
		color: "Pink",
		prevo: "Sentret-Stacona",
		eggGroups: ["Field"],
	},
	spinarak: {
		inherit: true,
		otherFormes: ["Spinarak-Stacona"],
		formeOrder: ["Spinarak", "Spinarak-Stacona"],
	},
	spinarakstacona: {
		num: 167,
		name: "Spinarak-Stacona",
		baseSpecies: "Spinarak",
		forme: "Stacona",
		types: ["Bug", "Dark"],
		baseStats: {hp: 30, atk: 50, def: 60, spa: 50, spd: 40, spe: 40},
		abilities: {0: "Prankster", 1: "Stall", H: "Intimidate"},
		heightm: 0.4,
		weightkg: 6.5,
		color: "Black",
		evos: ["Ariados-Stacona"],
		eggGroups: ["Bug"],
	},
	ariados: {
		inherit: true,
		otherFormes: ["Ariados-Stacona"],
		formeOrder: ["Ariados", "Ariados-Stacona"],
	},
	ariadosstacona: {
		num: 168,
		name: "Ariados-Stacona",
		baseSpecies: "Ariados",
		forme: "Stacona",
		types: ["Bug", "Dark"],
		baseStats: {hp: 40, atk: 95, def: 90, spa: 75, spd: 40, spe: 60},
		abilities: {0: "Prankster", 1: "Stall", H: "Intimidate"},
		heightm: 1.1,
		weightkg: 33.5,
		color: "Black",
		prevo: "Spinarak-Stacona",
		eggGroups: ["Bug"],
	},
	shuckle: {
		inherit: true,
		evos: ["Shuckavern"],
	},
	shuckavern: {
		num: 50018,
		name: "Shuckavern",
		types: ["Bug", "Rock"],
		baseStats: {hp: 25, atk: 15, def: 250, spa: 15, spd: 240, spe: 10},
		abilities: {0: "Sturdy", 1: "Cheek Pouch", H: "Contrary"},
		heightm: 1.1,
		weightkg: 51.4,
		color: "Yellow",
		prevo: ["Shuckle"],
		eggGroups: ["Bug"],
	},
	stantler: {
		inherit: true,
		evos: ["Gigantler"],
	},
	gigantler: {
		num: 50019,
		name: "Gigantler",
		types: ["Normal"],
		baseStats: {hp: 100, atk: 120, def: 90, spa: 90, spd: 75, spe: 100},
		abilities: {0: "Intimidate", 1: "Frisk", H: "Sap Sipper"},
		heightm: 2.3,
		weightkg: 94.1,
		color: "Brown",
		prevo: ["Stantler"],
		eggGroups: ["Bug"],
	},
	elekid: {
		inherit: true,
		otherFormes: ["Elekid-Stacona"],
		formeOrder: ["Elekid", "Elekid-Stacona"],
	},
	elekidstacona: {
		num: 239,
		name: "Elekid-Stacona",
		baseSpecies: "Elekid",
		forme: "Stacona",
		types: ["Electric", "Fighting"],
		baseStats: {hp: 45, atk: 85, def: 37, spa: 63, spd: 55, spe: 65},
		abilities: {0: "Flash Fist", 1: "Iron Fist", H: "Electric Surge"},
		heightm: 0.6,
		weightkg: 23.5,
		color: "Brown",
		evos: ["Electabuzz-Stacona"],
		eggGroups: ["Undiscovered"],
	},
	electabuzz: {
		inherit: true,
		otherFormes: ["Electabuzz-Stacona"],
		formeOrder: ["Electabuzz", "Electabuzz-Stacona"],
	},
	electabuzzstacona: {
		num: 125,
		name: "Electabuzz-Stacona",
		baseSpecies: "Electabuzz",
		forme: "Stacona",
		types: ["Electric", "Fighting"],
		baseStats: {hp: 65, atk: 103, def: 57, spa: 95, spd: 85, spe: 75},
		abilities: {0: "Flash Fist", 1: "Iron Fist", H: "Electric Surge"},
		heightm: 1.1,
		weightkg: 30,
		color: "Brown",
		evos: ["Electivire-Stacona"],
		prevo: "Elekid-Stacona",
		eggGroups: ["Human-Like"],
	},
	electivire: {
		inherit: true,
		otherFormes: ["Electivire-Stacona"],
		formeOrder: ["Electivire", "Electivire-Stacona"],
	},
	electivirestacona: {
		num: 466,
		name: "Electivire-Stacona",
		baseSpecies: "Electivire",
		forme: "Stacona",
		types: ["Electric", "Fighting"],
		baseStats: {hp: 75, atk: 133, def: 67, spa: 95, spd: 85, spe: 85},
		abilities: {0: "Flash Fist", 1: "Iron Fist", H: "Electric Surge"},
		heightm: 1.8,
		weightkg: 138.6,
		color: "Brown",
		prevo: "Electabuzz-Stacona",
		eggGroups: ["Human-Like"],
	},
	ralts: {
		inherit: true,
		otherFormes: ["Ralts-Stacona"],
		formeOrder: ["Ralts", "Ralts-Stacona"],
	},
	raltsstacona: {
		num: 280,
		name: "Ralts-Stacona",
		baseSpecies: "Ralts",
		forme: "Stacona",
		types: ["Psychic", "Ground"],
		baseStats: {hp: 25, atk: 25, def: 45, spa: 28, spd: 35, spe: 25},
		abilities: {0: "Cursed Body", 1: "Sychronize", H: "No Guard"},
		heightm: 0.4,
		weightkg: 6.6,
		color: "Black",
		evos: ["Kirlia-Stacona"],
		eggGroups: ["Human-Like", "Amorphous"],
	},
	kirlia: {
		inherit: true,
		otherFormes: ["Kirlia-Stacona"],
		formeOrder: ["Kirlia", "Kirlia-Stacona"],
	},
	kirliastacona: {
		num: 281,
		name: "Kirlia-Stacona",
		baseSpecies: "Kirlia",
		forme: "Stacona",
		types: ["Psychic", "Ground"],
		baseStats: {hp: 55, atk: 35, def: 50, spa: 38, spd: 65, spe: 35},
		abilities: {0: "Cursed Body", 1: "Sychronize", H: "No Guard"},
		heightm: 0.8,
		weightkg: 20.2,
		color: "Black",
		evos: ["Gardevoir-Stacona", "Gallade-Stacona"],
		prevo: "Ralts-Stacona",
		eggGroups: ["Human-Like", "Amorphous"],
	},
	gardevoir: {
		inherit: true,
		otherFormes: ["Gardevoir-Mega", "Gardevoir-Stacona"],
		formeOrder: ["Gardevoir", "Gardevoir-Mega", "Gardevoir-Stacona"],
	},
	gardevoirstacona: {
		num: 282,
		name: "Gardevoir-Stacona",
		baseSpecies: "Gardevoir",
		forme: "Stacona",
		types: ["Psychic", "Ground"],
		baseStats: {hp: 68, atk: 55, def: 80, spa: 135, spd: 115, spe: 65},
		abilities: {0: "Levitate", H: "Magic Bounce"},
		heightm: 1.6,
		weightkg: 48.4,
		color: "Black",
		prevo: "Kirlia-Stacona",
		eggGroups: ["Human-Like", "Amorphous"],
	},
	gallade: {
		inherit: true,
		otherFormes: ["Gallade-Mega", "Gallade-Stacona"],
		formeOrder: ["Gallade", "Gallade-Mega", "Gallade-Stacona"],
	},
	galladestacona: {
		num: 475,
		name: "Gallade-Stacona",
		baseSpecies: "Gallade",
		forme: "Stacona",
		types: ["Fighting", "Ground"],
		baseStats: {hp: 68, atk: 135, def: 80, spa: 55, spd: 115, spe: 65},
		abilities: {0: "Intimidate", H: "Inner Focus"},
		heightm: 1.6,
		weightkg: 52,
		color: "Black",
		prevo: "Kirlia-Stacona",
		eggGroups: ["Human-Like", "Amorphous"],
	},
	sabling: {
		num: 50020,
		name: "Sabling",
		types: ["Dark", "Ghost"],
		baseStats: {hp: 40, atk: 55, def: 55, spa: 55, spd: 55, spe: 40},
		abilities: {0: "Keen Eye", 1: "Stall", H: "Prankster"},
		heightm: x.x,
		weightkg: x.x,
		color: "Purple",
		evos: ["Sableye"],
		eggGroups: ["Human-Like"],
	},
	sableye: {
		inherit: true,
		prevo: "Sabling",
		evos: ["Sabsidian"],
	},
	sabsidian: {
		num: 50021,
		name: "Sabsidian",
		types: ["Dark", "Ghost"],
		baseStats: {hp: 70, atk: 85, def: 110, spa: 70, spd: 75, spe: 55},
		abilities: {0: "Magic Bounce", 1: "Stall", H: "Prankster"},
		heightm: x.x,
		weightkg: x.x,
		color: "Purple",
		prevo: ["Sableye"],
		eggGroups: ["Human-Like"],
	},
	numel: {
		inherit: true,
		otherFormes: ["Numel-Stacona"],
		formeOrder: ["Numel", "Numel-Stacona"],
	},
	numelstacona: {
		num: 322,
		name: "Numel-Stacona",
		baseSpecies: "Numel",
		forme: "Stacona",
		types: ["Ice", "Ground"],
		baseStats: {hp: 60, atk: 60, def: 40, spa: 65, spd: 45, spe: 35},
		abilities: {0: "Snow Warning", 1: "Sand Stream", H: "Thick Fat"},
		heightm: 0.7,
		weightkg: 24,
		color: "Blue",
		evos: ["Camerupt-Stacona"],
		eggGroups: ["Field"],
	},
	camerupt: {
		inherit: true,
		otherFormes: ["Camerupt-Stacona"],
		formeOrder: ["Camerupt", "Camerupt-Stacona"],
	},
	cameruptstacona: {
		num: 323,
		name: "Camerupt-Stacona",
		baseSpecies: "Camerupt",
		forme: "Stacona",
		types: ["Ice", "Ground"],
		baseStats: {hp: 70, atk: 100, def: 70, spa: 105, spd: 75, spe: 40},
		abilities: {0: "Snow Warning", 1: "Sand Stream", H: "Thick Fat"},
		heightm: 1.9,
		weightkg: 220,
		color: "Blue",
		prevo: "Numel-Stacona",
		eggGroups: ["Field"],
	},
	
	
	
	

	
