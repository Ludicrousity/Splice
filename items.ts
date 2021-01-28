export const Items: {[itemid: string]: ModdedItemData} = {
	firecellulose: {
		name: "Fire Cellulose",
		spritenum: 146,
		onPlate: 'Fire',
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Fire') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if ((source && source.baseSpecies.num === 50000) || pokemon.baseSpecies.num === 50000) {
				return false;
			}
			elif ((source && source.baseSpecies.num === 50026) || pokemon.baseSpecies.num === 50026) {
				return false;
			}
			elif ((source && source.baseSpecies.num === 50027) || pokemon.baseSpecies.num === 50027) {
				return false;
			}
			return true;
		},
		forcedForme: "Arenay-Fire", "Dragaia-Fire", "Prismatrix-Fire",
		num: 50001,
	},
};
