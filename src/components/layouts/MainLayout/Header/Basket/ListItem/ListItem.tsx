import { ReactComponent as CloseIcon } from 'assets/icons/close.svg';
import { ReactComponent as SeedIcon } from 'assets/icons/seed.svg';
import classNames from 'classnames';
import { colors } from 'config/colors';
import { FC } from 'react';
import { Product } from 'types/product';
import styles from './ListItem.module.scss';

interface ListItemProps extends Product {
	onDelete: () => void;
}

export const ListItem: FC<ListItemProps> = ({
	barley,
	corn,
	peas,
	price,
	onDelete,
	weight,
	wheat,
}) => {
	const additives = [peas, barley, wheat, corn].map(additives => `${additives}%`);

	return (
		<li className={classNames(styles.list_item, 'body_small')}>
			<SeedIcon fill={colors.gray[100]} />
			{additives.map((additive, index) => (
				<span className={styles.additive} key={index}>
					{additive}
				</span>
			))}
			<span className={styles.value}>
				{weight.value}
				{weight.measurement}
			</span>
			<span className={styles.value}>{`${price.value}${price.currency}`}</span>
			<button className={styles.btn} onClick={onDelete}>
				<CloseIcon />
			</button>
		</li>
	);
};
