import BarleyIcon from 'assets/icons/barley32x32.png';
import CornIcon from 'assets/icons/corn32x32.png';
import PeasIcon from 'assets/icons/peas32x32.png';
import WheatIcon from 'assets/icons/wheat32x32.png';
import classNames from 'classnames';
import { Button } from 'components/ui/Button';
import { FC } from 'react';
import { useAppDispatch } from 'store/hooks';
import { deleteProduct } from 'store/productSlice/productSlice';
import { ID } from 'types/index';
import { Price, Product } from 'types/product';
import styles from './Basket.module.scss';
import { ListItem } from './ListItem';

const additives = [
	{ alt: 'peas', icon: PeasIcon },
	{ alt: 'barley', icon: BarleyIcon },
	{ alt: 'wheat', icon: WheatIcon },
	{ alt: 'corn', icon: CornIcon },
];

interface BasketProps {
	products: Product[];
	totalPrice: Price;
}

export const Basket: FC<BasketProps> = ({ products, totalPrice }) => {
	const dispatch = useAppDispatch();

	const onDelete = (id: ID) => () => {
		dispatch(deleteProduct(id));
	};

	return (
		<>
			<div className={styles.additives}>
				<span />
				{additives.map(({ alt, icon }, index) => (
					<img alt={alt} src={icon} width={32} height={32} key={index} />
				))}
			</div>
			<ul>
				{products.map((product, index) => (
					<ListItem key={index} onDelete={onDelete(product.id)} {...product} />
				))}
			</ul>
			<div className={styles.checkout}>
				<div className={styles.price}>
					<span className={classNames(styles.total, 'menu')}>Total:</span>
					<span className='body_small'>
						{totalPrice.value}
						{totalPrice.currency}
					</span>
				</div>
				<Button className={classNames(styles.btn, 'menu')}>Checkout</Button>
			</div>
		</>
	);
};
