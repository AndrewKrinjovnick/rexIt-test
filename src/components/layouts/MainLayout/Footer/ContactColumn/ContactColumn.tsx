import classNames from 'classnames';
import { FC, PropsWithChildren, ReactElement } from 'react';
import styles from './ContactColumn.module.scss';

interface ContactColumnProps {
	title: string;
	Icon: ReactElement;
}

export const ContactColumn: FC<PropsWithChildren<ContactColumnProps>> = ({
	children,
	Icon,
	title,
}) => {
	return (
		<div className={styles.wrapper}>
			{Icon}
			<div className={styles.right_side}>
				<div className={classNames(styles.title, 'menu')}>{title}</div>
				{children}
			</div>
		</div>
	);
};
