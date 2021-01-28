export const Abilities: {[k: string]: ModdedAbilityData} = {
	splice: {
		// Splice's type-changing itself is implemented in statuses.js
		isPermanent: true,
		name: "Splice",
		rating: 4,
		num: 50000,
	},
	steampunk: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Water') {
				this.debug('Steampunk boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Water') {
				this.debug('Steampunk boost');
				return this.chainModify(1.5);
			}
		},
		name: "Steam Punk",
		rating: 3.5,
		num: 50001,
	},
	submerged: {
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (move.type === 'Normal' && !noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				move.type = 'Water';
				move.submergedBoosted = true;
			}
		},
		onBasePowerPriority: 23,
		onBasePower(basePower, pokemon, target, move) {
			if (move.submergedBoosted) return this.chainModify([0x1333, 0x1000]);
		},
		name: "Submerged",
		rating: 4,
		num: 50002,
	},
	flashfist: {
		onModifyPriority(priority, pokemon, target, move) {
			if (move.flags['punch']) {
				move.flashfistBoosted = true;
				return priority + 1;
			}
		},
		name: "Flash Fist",
		rating: 4,
		num: 50003,
	},
};
