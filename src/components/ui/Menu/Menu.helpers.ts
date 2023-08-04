import {
	HorizontalPositions,
	MenuPositions,
	VerticalPositions,
	VerticalPositionsKeys,
	type SetMenuPositionReturn,
} from './Menu.types';

export const setMenuPosition = (
	child: HTMLElement,
	menu: HTMLElement,
	position: MenuPositions
): SetMenuPositionReturn => {
	const coords = child.getBoundingClientRect();

	let left = 0;
	let top = 0;
	let currentVerticalPosition: VerticalPositionsKeys = position.vertical;

	if (position.vertical === VerticalPositions.top) {
		top = coords.top - menu.offsetHeight;
		currentVerticalPosition = 'top';

		if (top < 0) {
			top = coords.top + child.offsetHeight;
			currentVerticalPosition = 'bottom';
		}
	}

	if (position.vertical === VerticalPositions.bottom) {
		top = coords.top + child.offsetHeight;
		currentVerticalPosition = 'bottom';

		if (document.documentElement.clientHeight < top + menu.offsetHeight) {
			top = coords.top - menu.offsetHeight;
			currentVerticalPosition = 'top';
		}
	}

	if (position.horizontal === HorizontalPositions.center) {
		left = coords.left + (child.offsetWidth - menu.offsetWidth) / 2;

		if (left < 0) {
			left = coords.left;
		}

		if (document.documentElement.clientWidth < left + menu.offsetWidth) {
			left = coords.left + child.offsetWidth - menu.offsetWidth;
		}
	}

	if (position.horizontal === HorizontalPositions.left) {
		left = coords.left;

		if (document.documentElement.clientWidth < left + menu.offsetWidth) {
			left = coords.left + child.offsetWidth - menu.offsetWidth;
		}
	}

	if (position.horizontal === HorizontalPositions.right) {
		left = coords.left + child.offsetWidth - menu.offsetWidth;

		if (left < 0) {
			left = coords.left;
		}
	}

	return { left, top, currentVerticalPosition };
};
