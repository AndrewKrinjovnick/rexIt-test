import classNames from 'classnames';
import Slider, { SliderProps } from 'rc-slider';
import { FC } from 'react';
import './Range.scss';

export enum rangeColorMap {
	darkGreen,
	gray,
	lightGreen,
	yellow,
}

interface RangeProps extends SliderProps {
	color?: keyof typeof rangeColorMap;
}

export const Range: FC<RangeProps> = ({ className = '', color = 'lightGreen', ...props }) => {
	return (
		<Slider
			className={classNames('Slider', {
				[className]: className,
				[color]: rangeColorMap[color],
			})}
			{...props}
		/>
	);
};
