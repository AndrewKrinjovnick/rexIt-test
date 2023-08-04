import { ReactComponent as SeedIcon } from 'assets/icons/seed.svg';
import { colors } from 'config/colors';
import { FC } from 'react';
import styles from './SeedCount.module.scss';

interface SeedCountProps {
	amount: number;
}

export const SeedCount: FC<SeedCountProps> = ({ amount }) => {
	return (
		<div className={styles.wrapper}>
			<SeedIcon fill={colors.white} />
			{!!amount && <div className={`${styles.amount} subtitle`}>{amount}</div>}
		</div>
	);
};
