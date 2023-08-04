import { v4 as uuid } from 'uuid';

export const initProducts = [
	{
		id: uuid(),
		barley: 15,
		corn: 20,
		peas: 4,
		price: {
			currency: '€',
			value: 81.5,
		},
		weight: {
			measurement: 'kg',
			value: 1.5,
		},
		wheat: 61,
	},
	{
		id: uuid(),
		barley: 19,
		corn: 16,
		peas: 14,
		price: {
			currency: '€',
			value: 28.5,
		},
		weight: {
			measurement: 'kg',
			value: 0.5,
		},
		wheat: 51,
	},
	{
		id: uuid(),
		barley: 14,
		corn: 16,
		peas: 5,
		price: {
			currency: '€',
			value: 33.5,
		},
		weight: {
			measurement: 'kg',
			value: 0.66,
		},
		wheat: 65,
	},
];
