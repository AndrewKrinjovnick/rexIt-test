import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { ID } from 'types/index';

import { Product } from 'types/product';
import { initProducts } from './productSlice.constants';
import { ProductSliceState } from './types';

const initialState: ProductSliceState = {
	list: initProducts,
	totalPrice: initProducts.reduce(
		(acc, { price }) => {
			acc.currency = price.currency;
			acc.value += price.value;

			return acc;
		},
		{ currency: '€', value: 0 }
	),
};

export const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		addProduct(state, { payload }: PayloadAction<Product>) {
			state.list.push(payload);
			state.totalPrice.value += payload.price.value;
		},
		deleteProduct(state, { payload }: PayloadAction<ID>) {
			state.list = state.list.filter(product => {
				if (product.id === payload) {
					state.totalPrice.value -= product.price.value;
					return false;
				}

				return true;
			});
		},
	},
});

export const { addProduct, deleteProduct } = productSlice.actions;

export const selectProduct = (state: RootState) => state.product;

export default productSlice.reducer;
