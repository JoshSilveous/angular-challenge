import { Catalog } from './services/catalog.model'

export const MOCK_RETRIEVED_ITEMS = [
	{
		name: 'Blasters',
		id: 'blasters',
		items: [
			{
				name: 'GR-4 ST Blaster',
				price: 400,
				beam: 'green',
			},
			{
				name: 'GR-9 Plasma Blaster',
				price: 740,
				beam: 'orange',
			},
			{
				name: 'TM-59 Blaster Pistol',
				price: 920,
				beam: 'blue',
			},
			{
				name: 'WL-29 Blaster',
				price: 785,
				beam: 'purple',
			},
		],
	},
	{
		name: 'Laser Sabers',
		id: 'laser-sabers',
		items: [
			{
				name: "Blademaster's Shoto",
				price: 615,
				color: 'blue',
				bladeCount: 1,
			},
			{
				name: 'Tythian Lightsaber',
				price: 895,
				color: 'green',
				bladeCount: 1,
			},
			{
				name: 'Fractured Bogan Lightsaber',
				price: 790,
				color: 'red',
				bladeCount: 1,
			},
			{
				name: "Indomitable Vanquisher's Lightsaber",
				price: 585,
				color: 'purple',
				bladeCount: 1,
			},
			{
				name: 'Skorpion TK Dualsaber',
				price: 1025,
				color: 'blue',
				bladeCount: 2,
			},
			{
				name: 'Entropic Dualsaber',
				price: 999,
				color: 'green',
				bladeCount: 2,
			},
			{
				name: 'Twisted Fang Dualsaber',
				price: 790,
				color: 'red',
				bladeCount: 2,
			},
			{
				name: 'Starforged Dualsaber',
				price: 1256,
				color: 'purple',
				bladeCount: 2,
			},
		],
	},
] as Catalog.FullCatalog

export const MOCK_HTTP_DELAY = 2000
