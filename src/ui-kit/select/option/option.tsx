import { MouseEventHandler } from 'react';
import styles from './option.module.css';

type Option = { title: string; value: string };

type OptionProps = {
  option: Option;
  onClick: (value: Option['value']) => void;
};

export const Option = (props: OptionProps) => {
  const {
    option: { value, title },
    onClick,
  } = props;

  const handleClick =
    (clickedValue: Option['value']): MouseEventHandler<HTMLLIElement> =>
    () => {
      onClick(clickedValue);
    };

  return (
    <li
      className={styles.option}
      value={value}
      onClick={handleClick(value)}
      tabIndex={0}
    >
      {title}
    </li>
  );
};