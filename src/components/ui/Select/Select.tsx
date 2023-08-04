import { ReactComponent as ChevronDown } from 'assets/icons/chevron-down.svg';
import { ReactComponent as ChevronUp } from 'assets/icons/chevron-up.svg';
import classNames from 'classnames';
import { colors } from 'config/colors';
import { FC, useState } from 'react';
import { Menu } from '../Menu';
import styles from './Select.module.scss';
import { Option } from './Select.types';

interface SelectProps {
	defaultValue?: string;
	onChange: (value: string | number) => void;
	options: Option[];
	value: string | number | null;
}

export const Select: FC<SelectProps> = ({
	defaultValue,
	onChange,
	options,
	value: selectedValue,
}) => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const onSelectedValueChange = (currentValue: string | number) => () => {
		onChange(currentValue);
		handleClose();
	};

	const optionsByValue = options.reduce(
		(acc, option) => {
			acc[option.value] = option;
			return acc;
		},
		{} as Record<string, Option>
	);

	return (
		<>
			<button className={classNames(styles.btn, 'menu')} onClick={handleClick}>
				{selectedValue ? optionsByValue[selectedValue].label : defaultValue}
				{open ? <ChevronUp stroke={colors.red} /> : <ChevronDown stroke={colors.red} />}
			</button>
			<Menu anchorEl={anchorEl} open={open} onClose={handleClose} className={styles.menu}>
				<ul>
					{options.map(({ label, value }) => (
						<li
							className={classNames(styles.option, 'menu')}
							key={label}
							onClick={onSelectedValueChange(value)}
						>
							{label}
						</li>
					))}
				</ul>
			</Menu>
		</>
	);
};
