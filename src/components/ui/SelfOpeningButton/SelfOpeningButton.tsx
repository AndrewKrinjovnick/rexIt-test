import { ReactComponent as PlusIcon } from 'assets/icons/plus.svg';
import classNames from 'classnames';
import { ButtonHTMLAttributes, FC, MouseEvent, PropsWithChildren } from 'react';
import { Button } from '../Button';
import styles from './SelfOpeningButton.module.scss';

interface SelfOpeningButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	open: boolean;
	onSwitch: () => void;
}

export const SelfOpeningButton: FC<PropsWithChildren<SelfOpeningButtonProps>> = ({
	children,
	className = '',
	onSwitch,
	open,
	...props
}) => {
	const onOpen = (event: MouseEvent<HTMLOrSVGElement>) => {
		event.stopPropagation();
		onSwitch();
	};

	return (
		<Button
			{...props}
			className={classNames(styles.btn, { [className]: className, [styles.open]: open })}
		>
			{open && <span>{children}</span>} <PlusIcon onClick={onOpen} />
		</Button>
	);
};
