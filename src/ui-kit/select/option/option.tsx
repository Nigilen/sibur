import { MouseEventHandler } from 'react';
import styles from './option.module.css';
import cn from 'classnames';

type Option = { title: string; value: string };

type OptionProps = {
  option: Option;
  onClick: (value: Option['value'], title: Option['title']) => void;
  mode?: 'rows' | 'cells';
};

export const Option = (props: OptionProps) => {
  const {
    option: { value, title },
    onClick,
    mode = 'rows',
  } = props;

  const handleClick = (clickedValue: Option['value'], clickedTitle: Option['title']): MouseEventHandler<HTMLLIElement> => () => {onClick(clickedValue, clickedTitle);};

  return (
    <li
      className={cn(styles.option, mode === 'rows' && styles.option_rows)}
      value={value}
      onMouseDown={handleClick(value, title)}
      tabIndex={-1}
    >
      {title}
    </li>
  );
};