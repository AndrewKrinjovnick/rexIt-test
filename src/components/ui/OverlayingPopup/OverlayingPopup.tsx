import classNames from 'classnames';
import { Portal } from 'components/ui/Portal';
import { FC, PropsWithChildren, useEffect } from 'react';
import styles from './OverlayingPopup.module.scss';

interface OverlayingPopupProps {
	className?: string;
	onClose: () => void;
	isOpened: boolean;
}

export const OverlayingPopup: FC<PropsWithChildren<OverlayingPopupProps>> = ({
	children,
	className = '',
	onClose,
	isOpened,
}) => {
	useEffect(() => {
		if (isOpened) {
			document.body.style.overflow = 'hidden';
			document.body.style.paddingRight = '17px';
		} else {
			document.body.style.overflow = 'auto';
			document.body.style.paddingRight = '0';
		}

		return () => {
			document.body.style.overflow = 'auto';
			document.body.style.paddingRight = '0';
		};
	}, [isOpened]);

	if (!isOpened) {
		return null;
	}

	return (
		<Portal>
			<div className={styles.container} role='dialog'>
				<div
					className={classNames(styles.overlay, { [className]: className })}
					role='button'
					tabIndex={0}
					onClick={onClose}
				/>
				{children}
			</div>
		</Portal>
	);
};
