/*
List of flags and their descriptions:
authentic: Ignores a target's substitute.
bite: Power is multiplied by 1.5 when used by a Pokemon with the Ability Strong Jaw.
bullet: Has no effect on Pokemon with the Ability Bulletproof.
charge: The user is unable to make a move between turns.
contact: Makes contact.
dance: When used by a Pokemon, other Pokemon with the Ability Dancer can attempt to execute the same move.
defrost: Thaws the user if executed successfully while the user is frozen.
distance: Can target a Pokemon positioned anywhere in a Triple Battle.
gravity: Prevented from being executed or selected during Gravity's effect.
heal: Prevented from being executed or selected during Heal Block's effect.
mirror: Can be copied by Mirror Move.
mystery: Unknown effect.
nonsky: Prevented from being executed or selected in a Sky Battle.
powder: Has no effect on Grass-type Pokemon, Pokemon with the Ability Overcoat, and Pokemon holding Safety Goggles.
protect: Blocked by Detect, Protect, Spiky Shield, and if not a Status move, King's Shield.
pulse: Power is multiplied when used by a Pokemon with the Ability Mega Launcher.
punch: Power is multiplied when used by a Pokemon with the Ability Iron Fist.
recharge: If this move is successful, the user must recharge on the following turn and cannot make a move.
reflectable: Bounced back to the original user by Magic Coat or the Ability Magic Bounce.
snatch: Can be stolen from the original user and instead used by another Pokemon using Snatch.
sound: Has no effect on Pokemon with the Ability Soundproof.
*/
export const Moves: {[k: string]: ModdedMoveData} = {
	gearray: {
		num: 50000,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		desc: "The target is shot by energy produced from quickly turning gears.",
		shortDesc: "The target is shot by energy produced from quickly turning gears.",
		name: "Gear Ray",
		pp: 25,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Steel",
	},
	cellshot: {
		num: 50001,
		accuracy: 100,
		basePower: 35,
		category: "Special",
		desc: "The user unleashes genetic energy, changing based on the user's type.",
		shortDesc: "The user unleashes genetic energy, changing based on the user's type.",
		name: "Cell Shot",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onModifyType(move, pokemon) {
			let type = pokemon.types[0];
			if (type === "Bird") type = "???";
			move.type = type;
		},
		secondary: null,
		target: "normal",
		type: "Normal",
	},
	dnaray: {
		num: 50002,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		desc: "The user unleashes a supreme blast of molecular energy, changing based on the user's type.",
		shortDesc: "The user unleashes a supreme blast of molecular energy, changing based on the user's type.",
		name: "DNA Ray",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onModifyType(move, pokemon) {
			let type = pokemon.types[0];
			if (type === "Bird") type = "???";
			move.type = type;
		},
		secondary: null,
		target: "normal",
		type: "Normal",
	},
	zap: {
		num: 50003,
		accuracy: 100,
		basePower: 35,
		category: "Physical",
		desc: "The user throws a weak, electrically charged tackle at the target.",
		shortDesc: "The user throws a weak, electrically charged tackle at the target.",
		name: "Zap",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Electric",
	},
	suplex: {
		num: 50004,
		accuracy: 90,
		basePower: 85,
		category: "Physical",
		desc: "The user grapples the foe and then slams them with extreme force. This always lowers the foe's Defense stat.",
		shortDesc: "The user grapples the foe and then slams them with extreme force. This always lowers the foe's Defense stat.",
		name: "Suplex",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				def: -1,
			},
		},
		target: "normal",
		type: "Fighting",
	},
	cellslam: {
		num: 50005,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		desc: "The user slams the enemy with genetic energy, changing based on the user's type.",
		shortDesc: "The user slams the enemy with genetic energy, changing based on the user's type.",
		name: "Cell Slam",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onModifyType(move, pokemon) {
			let type = pokemon.types[0];
			if (type === "Bird") type = "???";
			move.type = type;
		},
		secondary: null,
		target: "normal",
		type: "Normal",
	},
	cellblast: {
		num: 50006,
		accuracy: 80,
		basePower: 70,
		category: "Special",
		desc: "The user unleases a huge blast of genetic energy, changing based on the user's type.",
		shortDesc: "The user unleases a huge blast of genetic energy, changing based on the user's type.",
		name: "Cell Blast",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onModifyType(move, pokemon) {
			let type = pokemon.types[0];
			if (type === "Bird") type = "???";
			move.type = type;
		},
		secondary: null,
		target: "normal",
		type: "Normal",
	},
	cellexplosion: {
		num: 50007,
		accuracy: 100,
		basePower: 140,
		category: "Special",
		desc: "The user combusts in an ultimate explosion of genetic energy. The user faints upon using this move.",
		shortDesc: "The user combusts in an ultimate explosion of genetic energy. The user faints upon using this move.",
		name: "Cell Explosion",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onModifyType(move, pokemon) {
			let type = pokemon.types[0];
			if (type === "Bird") type = "???";
			move.type = type;
		},
		selfdestruct: "always",
		secondary: null,
		target: "allAdjacent",
		type: "Normal",
	},
	cellstrike: {
		num: 50008,
		accuracy: 75,
		basePower: 80,
		category: "Physical",
		desc: "The user strikes the enemy with a flurry genetic energy, changing based on the user's type.",
		shortDesc: "The user strikes the enemy with a flurry genetic energy, changing based on the user's type.",
		name: "Cell Strike",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onModifyType(move, pokemon) {
			let type = pokemon.types[0];
			if (type === "Bird") type = "???";
			move.type = type;
		},
		secondary: null,
		target: "normal",
		type: "Normal",
	},
	terrortremor: {
		num: 50009,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		desc: "The user rattles the earth with bone-chilling power. Lowers Attack for all enemies hit.",
		shortDesc: "The user rattles the earth with bone-chilling power. Lowers Attack for all enemies hit.",
		name: "Terror Tremor",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				atk: -1,
			},
		},
		target: "allAdjacent",
		type: "Ground",
	},
	galeforce: {
		num: 50010,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		desc: "The user dashes forward with a burst of wind energy. This also raises the user's Speed stat.",
		shortDesc: "The user dashes forward with a burst of wind energy. This also raises the user's Speed stat.",
		name: "Gale Force",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			self: {
				boosts: {
					spe: 1,
				},
			},
		},
		target: "normal",
		type: "Flying",
	},
	ironforce: {
		num: 50011,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		desc: "The user dashes forward with a burst of steel energy. This also raises the user's Defense stat.",
		shortDesc: "The user dashes forward with a burst of steel energy. This also raises the user's Defense stat.",
		name: "Iron Force",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			self: {
				boosts: {
					def: 1,
				},
			},
		},
		target: "normal",
		type: "Steel",
	},
	insectlance: {
		num: 50012,
		accuracy: 85,
		basePower: 60,
		category: "Physical",
		desc: "The user furiously jabs the target with its spear. This also raises the user's Attack stat.",
		shortDesc: "The user furiously jabs the target with its spear. This also raises the user's Attack stat.",
		name: "Insect Lance",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			self: {
				boosts: {
					atk: 1,
				},
			},
		},
		target: "normal",
		type: "Bug",
	},
	windrush: {
		num: 50013,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		desc: "The user charges the target with a rush of wind. It is sure to strike first.",
		shortDesc: "The user charges the target with a rush of wind. It is sure to strike first.",
		name: "Wind Rush",
		pp: 30,
		priority: 1,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Flying",
	},
	rageclaw: {
		num: 50014,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		desc: "The user swipes at the target with malice. This has a 50% chance to raise the user's Attack stat.",
		shortDesc: "The user swipes at the target with malice. This has a 50% chance to raise the user's Attack stat.",
		name: "Rage Claw",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 50,
			self: {
				boosts: {
					atk: 1,
				},
			},
		},
		target: "normal",
		type: "Dark",
	},
	boltbashes: {
		num: 50015,
		accuracy: 100,
		basePower: 25,
		category: "Physical",
		desc: "The user repeatedly kicks the target with electric energy. Two to five hits occur in rapid succession.",
		shortDesc: "The user repeatedly kicks the target with electric energy. Two to five hits occur in rapid succession.",
		name: "Bolt Bashes",
		pp: 30,
		priority: 1,
		flags: {contact: 1, protect: 1, mirror: 1},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Electric",
	},
	kingsclaw: {
		num: 50016,
		accuracy: 80,
		basePower: 90,
		category: "Physical",
		desc: "The target is smashed by a forceful claw. It may also raise the user's Defense stat.",
		shortDesc: "The target is smashed by a forceful claw. It may also raise the user's Defense stat.",
		name: "Kings Claw",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 40,
			self: {
				boosts: {
					def: 1,
				},
			},
		},
		target: "normal",
		type: "Water",
	},
	freezerburn: {
		num: 50017,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		desc: "The target is blasted with chilly wind. It may also leave the target with a burn.",
		shortDesc: "The target is blasted with chilly wind. It may also leave the target with a burn.",
		name: "Freezer Burn",
		pp: 25,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			status: 'brn',
		},
		target: "normal",
		type: "Ice",
	},
	missiledive: {
		num: 50018,
		accuracy: 80,
		basePower: 80,
		category: "Physical",
		desc: "The user dives at the target with the force of a missile. It has a 20% chance to sharply raise the Speed stat.",
		shortDesc: "The user dives at the target with the force of a missile. It has a 20% chance to sharply raise the Speed stat.",
		name: "Missile Dive",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			self: {
				boosts: {
					spe: 2,
				},
			},
		},
		target: "normal",
		type: "Steel",
	},
	haymaker: {
		num: 50019,
		accuracy: 75,
		basePower: 100,
		category: "Physical",
		desc: "A reckless, full-body swinging punch that also damages the user a little.",
		shortDesc: "A reckless, full-body swinging punch that also damages the user a little.",
		name: "Haymaker",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, punch: 1, mirror: 1},
		recoil: [1, 4],
		secondary: null,
		target: "normal",
		type: "Fighting",
	},
	toxicrush: {
		num: 50020,
		accuracy: 90,
		basePower: 60,
		category: "Physical",
		desc: "A stinging dive attack that always leaves the target poisoned.",
		shortDesc: "A stinging dive attack that always leaves the target poisoned.",
		name: "Toxic Rush",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			status: 'psn',
		},
		target: "normal",
		type: "Poison",
	},
	tidalcharge: {
		num: 50021,
		accuracy: 75,
		basePower: 100,
		category: "Physical",
		desc: "A reckless, full-body dive that also damages the user a little.",
		shortDesc: "A reckless, full-body dive that also damages the user a little.",
		name: "Tidal Charge",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, punch: 1, mirror: 1},
		recoil: [1, 4],
		secondary: null,
		target: "normal",
		type: "Water",
	},
	psycheburst: {
		num: 50022,
		accuracy: 60,
		basePower: 75,
		category: "Special",
		desc: "The user unleashes a wave of mind-bending energy. This has a 30% chance to put the target to sleep.",
		shortDesc: "The user unleashes a wave of mind-bending energy. This has a 30% chance to put the target to sleep.",
		name: "Psyche Burst",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			status: 'slp',
		},
		target: "normal",
		type: "Psychic",
	},
	chloraburst: {
		num: 50023,
		accuracy: 90,
		basePower: 50,
		category: "Special",
		desc: "The user releases a burst of biological energy. It has a 60% chance to also raise the user's Sp. Atk stat.",
		shortDesc: "The user releases a burst of biological energy. It has a 60% chance to also raise the user's Sp. Atk stat.",
		name: "Chlora Burst",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 60,
			self: {
				boosts: {
					spa: 1,
				},
			},
		},
		target: "normal",
		type: "Grass",
	},
	moonrampage: {
		num: 50024,
		accuracy: 100,
		basePower: 120,
		category: "Special",
		desc: "The user rampages and attacks for two to three turns. It then becomes confused, however.",
		shortDesc: "The user rampages and attacks for two to three turns. It then becomes confused, however.",
		name: "Moon Rampage",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		self: {
			volatileStatus: 'lockedmove',
		},
		onAfterMove(pokemon) {
			if (pokemon.volatiles['lockedmove'] && pokemon.volatiles['lockedmove'].duration === 1) {
				pokemon.removeVolatile('lockedmove');
			}
		},
		secondary: null,
		target: "randomNormal",
		type: "Fairy",
	},
	pestilence: {
		num: 50025,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Pestilence",
		pp: 10,
		priority: 0,
		flags: {authentic: 1},
		volatileStatus: 'curse',
		onHit(target, source) {
			this.directDamage(source.maxhp / 4, source, source);
			source.trySetStatus('psn', pokemon);
		},
		condition: {
			onStart(pokemon, source) {
				this.add('-start', pokemon, 'Curse', '[of] ' + source);
			},
			onResidualOrder: 10,
			onResidual(pokemon) {
				this.damage(pokemon.baseMaxhp / 4);
			},
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Poison",
	},
	bouldercrush: {
		num: 50026,
		accuracy: 90,
		basePower: 90,
		category: "Physical",
		desc: "Crushes the target with boulder-like weight. The user's Defense increases the damage of this attack.",
		shortDesc: "Crushes the target with boulder-like weight. The user's Defense increases the damage of this attack.",
		name: "Boulder Crush",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		useSourceDefensiveAsOffensive: true,
		secondary: null,
		target: "normal",
		type: "Rock",
	},
	freezingglare: {
		num: 50027,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		desc: "The user shoots its psychic power from its eyes to attack. This may also leave the target frozen.",
		shortDesc: "The user shoots its psychic power from its eyes to attack. This may also leave the target frozen.",
		name: "Freezing Glare",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			status: 'frz',
		},
		target: "normal",
		type: "Psychic",
	},
	enchantedslash: {
		num: 50028,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		desc: "The target is struck with a mystical slash that has a chance to confuse them.",
		shortDesc: "The target is struck with a mystical slash that has a chance to confuse them.",
		name: "Enchanted Slash",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			volatileStatus: 'confusion',
		},
		critRatio: 2,
		target: "normal",
		type: "Fairy",
	},
	pixiepummel: {
		num: 50029,
		accuracy: 100,
		basePower: 20,
		category: "Physical",
		desc: "The user repeatedly pummels the target with fairy energy. Two to five hits occur in rapid succession.",
		shortDesc: "The user repeatedly pummels the target with fairy energy. Two to five hits occur in rapid succession.",
		name: "Pixie Pummel",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		target: "normal",
		type: "Fairy",
	},
	asbestoslam: {
		num: 50030,
		accuracy: 100,
		basePower: 85,
		category: "Special",
		desc: "The user slams the target with a toxic rock. This may also poison the target.",
		shortDesc: "The user slams the target with a toxic rock. This may also poison the target.",
		name: "Asbestoslam",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			status: 'psn',
		},
		target: "normal",
		type: "Rock",
	},
	rocktail: {
		num: 50031,
		accuracy: 100,
		basePower: 65,
		category: "Physical",
		desc: "The user sweeps at the target's legs swiftly, reducing the target's Speed stat.",
		shortDesc: "The user sweeps at the target's legs swiftly, reducing the target's Speed stat.",
		name: "Rock Tail",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				spe: -1,
			},
		},
		target: "normal",
		type: "Rock",
	},
	weatherblast: {
		num: 50032,
		accuracy: 90,
		basePower: 120,
		category: "Special",
		desc: "A powerful blast that varies in type depending on the weather.",
		shortDesc: "A powerful blast that varies in type depending on the weather.",
		name: "Weather Blast",
		pp: 5,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		onModifyType(move, pokemon) {
			switch (pokemon.effectiveWeather()) {
			case 'sunnyday':
			case 'desolateland':
				move.type = 'Fire';
				break;
			case 'raindance':
			case 'primordialsea':
				move.type = 'Water';
				break;
			case 'sandstorm':
				move.type = 'Rock';
				break;
			case 'hail':
				move.type = 'Ice';
				break;
			}
		},
		secondary: null,
		target: "normal",
		type: "Normal",
	},
	clearsky: {
		num: 50033,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user clears up the sky, clearing all weather effects on the field.",
		shortDesc: "The user clears up the sky, clearing all weather effects on the field.",
		name: "Clear Sky",
		pp: 5,
		priority: 0,
		flags: {},
		onHitField: function(target, source) {
			this.field.removeWeather('sunnyday');
			this.field.removeWeather('desolateland');
			this.field.removeWeather('raindance');
			this.field.removeWeather('primordialsea');
			this.field.removeWeather('hail');
			this.field.removeWeather('sandstorm');
		},
		secondary: null,
		target: "all",
		type: "Flying",
	/*},
	clearshot: {
		num: 50034,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		desc: "A slick move that doubles in power if the sky is clear of any weather.", (This is currently coded so that it halves in weather rather than double outside, mainly because I'm dumb)
		shortDesc: "A slick move that doubles in power if the sky is clear of any weather.",
		name: "Clear Shot",
		pp: 5,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		onModifyMove(move, pokemon) {
			switch (pokemon.effectiveWeather()) {
			case 'sunnyday':
			case 'desolateland':
				move.basePower *= 0.5;
				break;
			case 'raindance':
			case 'primordialsea':
				move.basePower *= 0.5;
				break;
			case 'sandstorm':
				move.basePower *= 0.5;
				break;
			case 'hail':
				move.basePower *= 0.5;
				break;
			}
		},
		secondary: null,
		target: "normal",
		type: "Normal",*/
	},
	weatherroulette: {
		num: 50035,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user changes the weather to a new, randomized weather.", 
		shortDesc: "The user changes the weather to a new, randomized weather.",
		name: "Weather Roulette",
		pp: 5,
		priority: 0,
		flags: {},
		onHit(target) {
			const result = this.random(5);
			if (result === 0) {
					this.useMove('Sunny Day', source);
				} else if (result === 1) {
					this.useMove('Rain Dance', source);
				} else if (result === 2) {
					this.useMove('Sandstorm', source);
				} else if (result === 3) {
					this.useMove('Hail', source);
				} else {
					this.useMove('Clear Sky', source);
				}
			},
		},
		secondary: null,
		target: "all",
		type: "Flying",
	},
        sacredpower: {
		num: 50036,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		desc: "A unique attack that varies in type and intensity depending on the Pokémon using it.", 
		shortDesc: "A unique attack that varies in type and intensity depending on the Pokémon using it.",
		name: "Sacred Power",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onModifyType(move, pokemon) {
			move.type = pokemon.hpType || 'Dark';
		},
		secondary: null,
		target: "normal",
		type: "Normal",
        },
	sacredpowerbug: {
		num: 50036,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		realMove: "Sacred Power",
		name: "Sacred Power Bug",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Bug",
	},
	sacredpowerdark: {
		num: 50036,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		realMove: "Sacred Power",
		name: "Sacred Power Dark",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Dark",
	},
	sacredpowerdragon: {
		num: 50036,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		realMove: "Sacred Power",
		name: "Sacred Power Dragon",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Dragon",
	},
	sacredpowerelectric: {
		num: 50036,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		realMove: "Sacred Power",
		name: "Sacred Power Electric",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Electric",
	},
	sacredpowerfighting: {
		num: 50036,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		realMove: "Sacred Power",
		name: "Sacred Power Fighting",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Fighting",
	},
	sacredpowerfire: {
		num: 50036,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		realMove: "Sacred Power",
		name: "Sacred Power Fire",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Fire",
	},
	sacredpowerflying: {
		num: 50036,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		realMove: "Sacred Power",
		name: "Sacred Power Flying",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Flying",
	},
	sacredpowerghost: {
		num: 50036,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		realMove: "Sacred Power",
		name: "Sacred Power Ghost",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Ghost",
	},
	sacredpowergrass: {
		num: 50036,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		realMove: "Sacred Power",
		name: "Sacred Power Grass",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Grass",
	},
	sacredpowerground: {
		num: 50036,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		realMove: "Sacred Power",
		name: "Sacred Power Ground",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Ground",
	},
	sacredpowerice: {
		num: 50036,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		realMove: "Sacred Power",
		name: "Sacred Power Ice",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Ice",
	},
	sacredpowerpoison: {
		num: 50036,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		realMove: "Sacred Power",
		name: "Sacred Power Poison",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Poison",
	},
	sacredpowerpsychic: {
		num: 50036,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		realMove: "Sacred Power",
		name: "Sacred Power Psychic",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Psychic",
	},
	sacredpowerrock: {
		num: 50036,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		realMove: "Sacred Power",
		name: "Sacred Power Rock",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Rock",
	},
	sacredpowersteel: {
		num: 50036,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		realMove: "Sacred Power",
		name: "Sacred Power Steel",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Steel",
	},
	sacredpowerwater: {
		num: 50036,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		realMove: "Sacred Power",
		name: "Sacred Power Water",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Water",
	},
	echolocation: {
		num: 50037,
		accuracy: 100,
		basePower: 30,
		category: "Special",
		desc: "The user reveals the location of enemies with a piercing cry, lowering their evasion.",
		shortDesc: "The user reveals the location of enemies with a piercing cry, lowering their evasion.",
		name: "Echolocation",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				evasion: -1,
			},
		},
		target: "allAdjacentFoes",
		type: "Dark",
	},
	//Quick Parry - Protect + Deal 50% of the damage you would've taken if physical
};
