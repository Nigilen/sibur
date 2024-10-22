import { MouseEventHandler } from 'react';
import styles from './option.module.css';

type Option = { title: string; value: string };

type OptionProps = {
  option: Option;
  onClick: (value: Option['value'], title: Option['title']) => void;
};

export const Option = (props: OptionProps) => {
  const {
    option: { value, title },
    onClick,
  } = props;

  const handleClick = (clickedValue: Option['value'], clickedTitle: Option['title']): MouseEventHandler<HTMLLIElement> => () => {onClick(clickedValue, clickedTitle);};

  return (
    <li
      className={styles.option}
      value={value}
      onClick={handleClick(value, title)}
      tabIndex={0}
    >
      {title}
    </li>
  );
};