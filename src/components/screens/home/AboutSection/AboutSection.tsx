import FoodImg from 'assets/main/about-food.png';
import classNames from 'classnames';
import { Container } from 'components/ui/Container';
import { Logo } from 'components/ui/Logo';
import { colors } from 'config/colors';
import { FC } from 'react';
import styles from './AboutSection.module.scss';
import { Constructor } from './Constructor';

export const AboutSection: FC = () => {
	return (
		<section className={styles.wrapper}>
			<div className={styles.description_wrapper}>
				<div className={styles.description_container}>
					<p className={styles.description_text}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
						dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
						mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
						do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
						aute irure dolor in reprehenderit.
					</p>
					<div className={styles.logo}>
						<Logo fill={colors.gray[100]} />
					</div>
				</div>
			</div>
			<Container className={styles.top_container}>
				<img alt='food' src={FoodImg} width={380} height={380} />
				<h2 className={classNames(styles.title, 'h2')}>About cracker</h2>
			</Container>
			<Container>
				<Constructor />
			</Container>
		</section>
	);
};
