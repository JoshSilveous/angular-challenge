export namespace Catalog {
	interface ItemBase {
		name: string
		price: number
	}

	type BlasterBeamColor = 'blue' | 'green' | 'orange' | 'purple'
	export interface Blaster extends ItemBase {
		beam: BlasterBeamColor
	}

	type LaserSaberColor = 'blue' | 'green' | 'red' | 'purple'
	export interface LaserSaber extends ItemBase {
		color: LaserSaberColor
		bladeCount: 1 | 2
	}
}
