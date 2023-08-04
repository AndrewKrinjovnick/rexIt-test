import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';
import styles from './MainLayout.module.scss';

export const MainLayout: FC = () => {
	return (
		<div className={styles.wrapper}>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};
