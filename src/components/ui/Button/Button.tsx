import classNames from 'classnames';
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import styles from './Button.module.scss';

export const Button: FC<PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>> = ({
	className = '',
	children,
	...props
}) => {
	return (
		<button
			type='button'
			{...props}
			className={classNames(styles.btn, 'button', {
				[className]: className,
			})}
		>
			{children}
		</button>
	);
};
