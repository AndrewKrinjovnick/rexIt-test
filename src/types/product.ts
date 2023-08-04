import { type ID } from './index';

export type AdditiveKeys = 'barley' | 'corn' | 'peas' | 'wheat';

export interface Product {
	id: ID;
	barley: number;
	corn: number;
	peas: number;
	price: {
		currency: string;
		value: number;
	};
	weight: {
		measurement: string;
		value: number;
	};
	wheat: number;
}

export interface Price {
	currency: string;
	value: number;
}
