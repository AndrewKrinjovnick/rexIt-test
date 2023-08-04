import { AdditiveKeys } from 'types/product';

const additiveCoefficientMap: Record<AdditiveKeys, number> = {
	barley: 0.08,
	corn: 0.015,
	peas: 0.1,
	wheat: 0.05,
};

export const getPrice = (additives: Record<AdditiveKeys, number>, weight: number) => {
	return Object.entries(additives).reduce((acc, [key, value]) => {
		acc += value * additiveCoefficientMap[key as AdditiveKeys] * weight * 10;
		return +acc.toFixed(2);
	}, 0);
};
