import BarleyIcon from 'assets/icons/barley60x60.png';
import CornIcon from 'assets/icons/corn60x60.png';
import PackageIcon from 'assets/icons/package60x60.png';
import PeasIcon from 'assets/icons/peas60x60.png';
import WheatIcon from 'assets/icons/wheat60x60.png';
import classNames from 'classnames';
import { Range } from 'components/ui/Range';
import { rangeColorMap } from 'components/ui/Range/Range';
import { Select } from 'components/ui/Select';
import { SelfOpeningButton } from 'components/ui/SelfOpeningButton';
import { FC, useLayoutEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from 'store/productSlice/productSlice';
import { AdditiveKeys } from 'types/product';
import { getPrice } from 'utils/getPrice';
import { v4 as uuid } from 'uuid';
import { initAdditivesRange, packOptions } from './Constructor.constants';
import styles from './Constructor.module.scss';

const additives: { alt: AdditiveKeys; color: keyof typeof rangeColorMap; icon: string }[] = [
	{
		alt: 'peas',
		color: 'lightGreen',
		icon: PeasIcon,
	},
	{
		alt: 'barley',
		color: 'darkGreen',
		icon: BarleyIcon,
	},
	{
		alt: 'wheat',
		color: 'yellow',
		icon: WheatIcon,
	},
	{
		alt: 'corn',
		color: 'gray',
		icon: CornIcon,
	},
];

export const Constructor: FC = () => {
	const [additivesRange, setAdditivesRange] = useState(initAdditivesRange);
	const [price, setPrice] = useState(0);

	const [pack, setPack] = useState<number | null>(null);

	const [openBtn, setOpenBtn] = useState(false);
	const dispatch = useDispatch();

	const addNewProduct = () => {
		if (pack) {
			dispatch(
				addProduct({
					id: uuid(),
					...additivesRange,
					price: {
						currency: '€',
						value: price,
					},
					weight: {
						value: pack,
						measurement: 'kg',
					},
				})
			);
			setAdditivesRange(initAdditivesRange);
		}
	};

	const onSwitchBtn = () => {
		setOpenBtn(prevState => !prevState);
	};

	const onAdditiveRangeChange = (key: AdditiveKeys) => (value: number | number[]) => {
		if (typeof value === 'number' && key !== 'corn') {
			const sum = Object.entries(additivesRange).reduce((acc, [additiveKey, value]) => {
				if (additiveKey == key || additiveKey == 'corn') {
					return acc;
				}

				acc += value;
				return acc;
			}, 0);

			value + sum <= 100 &&
				setAdditivesRange(prevState => ({ ...prevState, [key]: value, corn: 100 - value - sum }));
		}
	};

	const onPackChange = (value: string | number) => {
		setPack(+value);
	};

	useLayoutEffect(() => {
		pack && setPrice(getPrice(additivesRange, pack));
	}, [additivesRange, pack]);

	return (
		<div className={styles.wrapper}>
			<h2 className={classNames(styles.title, 'h2')}>Cracker constructor</h2>
			<div className={styles.value}>
				<span className='h3'>Current Value:</span>
				<span className='h3'>{price}€</span>
			</div>
			<div className={styles.additives}>
				{additives.map(({ alt, color, icon }) => (
					<div className={styles.additive} key={alt}>
						<img alt={alt} src={icon} />
						<Range
							color={color}
							min={0}
							max={100}
							value={additivesRange[alt]}
							onChange={onAdditiveRangeChange(alt)}
						/>
						<div className={classNames(styles.percent, 'h3')}>{additivesRange[alt]}%</div>
					</div>
				))}
			</div>
			<div className={styles.bottom}>
				<div className={styles.options}>
					<img alt='package' src={PackageIcon} />
					<Select
						defaultValue='choose your pack'
						onChange={onPackChange}
						options={packOptions}
						value={pack}
					/>
				</div>
				<SelfOpeningButton onSwitch={onSwitchBtn} open={openBtn} onClick={addNewProduct}>
					Add to cart
				</SelfOpeningButton>
			</div>
		</div>
	);
};
