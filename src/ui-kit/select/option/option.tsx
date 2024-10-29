import { MouseEventHandler } from 'react';
import styles from './option.module.css';
import cn from 'classnames';

type Option = { title: string; value: string };

type OptionProps = {
  option: Option;
  onClick: (value: Option['value'], title: Option['title']) => void;
  mode?: 'rows' | 'cells';
  onMouseDown: () => void
};

export const Option = (props: OptionProps) => {
  const {
    option: { value, title },
    onClick,
    mode = 'rows',
    onMouseDown
  } = props;

  const handleClick = (clickedValue: Option['value'], clickedTitle: Option['title']): MouseEventHandler<HTMLLIElement> => () => {onClick(clickedValue, clickedTitle);};

  return (
    <li
      className={cn(styles.option, mode === 'rows' && styles.option_rows)}
      value={value}
      onClick={handleClick(value, title)}
      tabIndex={0}
      onMouseDown={onMouseDown}
    >
      {title}
    </li>
  );
};