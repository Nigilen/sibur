import { MouseEventHandler } from 'react';
import styles from './option.module.css';
import cn from 'classnames';

type Option = { label: string; value: string };

type OptionProps = {
  option: Option;
  onClick: (value: Option['value'], title: Option['label']) => void;
  mode?: 'rows' | 'cells';
};

export const Option = (props: OptionProps) => {
  const {
    option: { value, label },
    onClick,
    mode = 'rows',
  } = props;

  const handleClick = (clickedValue: Option['value'], clickedTitle: Option['label']): MouseEventHandler<HTMLLIElement> => () => {onClick(clickedValue, clickedTitle);};

  return (
    <li
      className={cn(styles.option, mode === 'rows' && styles.option_rows)}
      value={value}
      onMouseDown={handleClick(value, label)}
      tabIndex={-1}
    >
      {label}
    </li>
  );
};