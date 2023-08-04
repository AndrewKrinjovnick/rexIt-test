import classNames from 'classnames';
import { useMount } from 'hooks/useMount';
import { PropsWithChildren, useEffect, useRef, useState, type FC } from 'react';
import { CSSTransition } from 'react-transition-group';
import { OverlayingPopup } from '../OverlayingPopup';
import { ANIMATION_TIME, menuAnimation } from './Menu.constants';
import { setMenuPosition } from './Menu.helpers';
import styles from './Menu.module.scss';
import { MenuPositions, VerticalPositionsKeys, type MenuProps } from './Menu.types';

const initPosition: MenuPositions = {
	vertical: 'bottom',
	horizontal: 'center',
};

export const Menu: FC<PropsWithChildren<MenuProps>> = ({
	anchorEl,
	className = '',
	children,
	onClose,
	open,
	position = initPosition,
}) => {
	const menuRef = useRef<HTMLDivElement | null>(null);
	const [animationIn, setAnimationIn] = useState<boolean>(false);
	const mounted = useMount(open, ANIMATION_TIME);
	const [currentPosition, setCurrentPosition] = useState<VerticalPositionsKeys>(position.vertical);

	useEffect(() => {
		setAnimationIn(open);
	}, [open]);

	useEffect(() => {
		const menu = menuRef.current;

		if (menu && anchorEl) {
			const { left, top, currentVerticalPosition } = setMenuPosition(anchorEl, menu, position);
			setCurrentPosition(currentVerticalPosition);
			menu.style.left = `${left}px`;
			menu.style.top = `${top}px`;
		}
	}, [anchorEl, mounted, position, menuRef]);

	return (
		<>
			{(mounted || open) && (
				<OverlayingPopup className={styles.overlay_wrapper} isOpened={open} onClose={onClose}>
					<CSSTransition
						nodeRef={menuRef}
						classNames={menuAnimation}
						in={animationIn}
						timeout={ANIMATION_TIME}
						mountOnEnter
						unmountOnExit
					>
						<div
							className={classNames(styles.menu_wrapper, {
								[className]: className,
								[styles[currentPosition]]: currentPosition,
							})}
							ref={menuRef}
						>
							{children}
						</div>
					</CSSTransition>
				</OverlayingPopup>
			)}
		</>
	);
};
