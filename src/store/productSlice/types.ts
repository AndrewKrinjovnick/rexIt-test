import { Product } from 'types/product';

export interface ProductSliceState {
	list: Product[];
	totalPrice: {
		value: number;
		currency: string;
	};
}
