import { ReactComponent as ChevronDown } from 'assets/icons/chevron-down.svg';
import { ReactComponent as ChevronUp } from 'assets/icons/chevron-up.svg';
import { Container } from 'components/ui/Container';
import { Logo } from 'components/ui/Logo';
import { Menu } from 'components/ui/Menu';
import { SeedCount } from 'components/ui/SeedCount';
import { colors } from 'config/colors';
import { FC, useState } from 'react';
import { useAppSelector } from 'store/hooks';
import { selectProduct } from 'store/productSlice/productSlice';
import { Basket } from './Basket';
import styles from './Header.module.scss';

export const Header: FC = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const { list, totalPrice } = useAppSelector(selectProduct);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<header className={styles.wrapper}>
				<Container className={styles.container}>
					<Logo />
					<div className={styles.menu}>
						<SeedCount amount={list.length} />
						<div className={`${styles.menu_item} menu`}>
							<span>Total:</span>
							<span>
								{totalPrice.value}
								{totalPrice.currency}
							</span>
						</div>
						<button className={`${styles.menu_item} ${styles.btn} menu`} onClick={handleClick}>
							<span>Details</span>
							{open ? <ChevronUp stroke={colors.white} /> : <ChevronDown stroke={colors.white} />}
						</button>
					</div>
				</Container>
			</header>
			<Menu
				anchorEl={anchorEl}
				onClose={handleClose}
				open={open}
				position={{
					horizontal: 'right',
					vertical: 'bottom',
				}}
			>
				<Basket products={list} totalPrice={totalPrice} />
			</Menu>
		</>
	);
};
