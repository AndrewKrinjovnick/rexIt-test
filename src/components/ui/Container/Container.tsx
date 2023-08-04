import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';
import styles from './Container.module.scss';

interface ContainerProps {
	className?: string;
	fullWidth?: boolean;
}

export const Container: FC<PropsWithChildren<ContainerProps>> = ({
	className = '',
	children,
	fullWidth,
}) => {
	return (
		<div className={classNames(styles.container, { [className]: className, fullWidth })}>
			{children}
		</div>
	);
};
