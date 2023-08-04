export enum VerticalPositions {
	top = 'top',
	bottom = 'bottom',
}

export enum HorizontalPositions {
	left = 'left',
	right = 'right',
	center = 'center',
}

export enum MenuMode {
	always = 'always',
	content = 'content',
}

export type HorizontalPositionsKeys = keyof typeof HorizontalPositions;
export type VerticalPositionsKeys = keyof typeof VerticalPositions;

export interface MenuPositions {
	horizontal: HorizontalPositionsKeys;
	vertical: VerticalPositionsKeys;
}

export interface MenuProps {
	anchorEl: HTMLElement | null;
	className?: string;
	onClose: () => void;
	open: boolean;
	position?: MenuPositions;
}

export interface SetMenuPositionReturn {
	left: number;
	top: number;
	currentVerticalPosition: VerticalPositionsKeys;
}
