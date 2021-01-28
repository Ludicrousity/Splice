export const Items: {[itemid: string]: ModdedItemData} = {
grasscellulose: {
		name: "Meadow Plate",
		spritenum: 282,
		onPlate: 'Grass',
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Grass') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 493) || pokemon.baseSpecies.num === 493) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus-Grass",
		num: 301,
		gen: 4,
		isNonstandard: "Unobtainable",
	},
