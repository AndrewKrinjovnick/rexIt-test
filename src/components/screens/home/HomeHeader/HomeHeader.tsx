import classNames from 'classnames';
import { Button } from 'components/ui/Button';
import { Container } from 'components/ui/Container';
import { FC } from 'react';
import styles from './HomeHeader.module.scss';
import { NavigationMenu } from './NavigationMenu';

export const HomeHeader: FC = () => {
	return (
		<div className={styles.wrapper}>
			<NavigationMenu />
			<div className={styles.green_bg} />
			<Container className={styles.container}>
				<div className={styles.left_side}>
					<p className={styles.text}>
						Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
						do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation.
					</p>
				</div>
				<div className={styles.right_side}>
					<h1 className={classNames(styles.title, 'h1')}>mostly tastes with freshes</h1>
					<Button>Taste it</Button>
				</div>
			</Container>
		</div>
	);
};
