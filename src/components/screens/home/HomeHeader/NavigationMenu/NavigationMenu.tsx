import classNames from 'classnames';
import { Container } from 'components/ui/Container';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavigationMenu.module.scss';

const menuItems = [
	{ label: 'Home', link: '/' },
	{ label: 'About us', link: '/about' },
	{ label: 'Contacts us', link: '/contacts' },
	{ label: 'Checkout', link: '/checkout' },
	{ label: 'Account', link: '/account' },
];

export const NavigationMenu: FC = () => {
	return (
		<nav className={styles.nav}>
			<Container>
				<ul className={styles.list}>
					{menuItems.map(({ label, link }) => (
						<li key={link} className={styles.list_item}>
							<NavLink
								to={link}
								className={({ isActive }) =>
									classNames(styles.link, 'menu', {
										[styles.active]: isActive,
									})
								}
							>
								{label}
							</NavLink>
						</li>
					))}
				</ul>
			</Container>
		</nav>
	);
};
