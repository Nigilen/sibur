import { type FC, type KeyboardEvent } from 'react';
import styles from './select-option.module.css';

type TSelectOption = {
  label: string;
};

export interface ISelectOptionProps {
  option: {
    label: string
  };
  keyDownHandler: (e: KeyboardEvent<HTMLLIElement>, option: TSelectOption) => void;
  onClickHandler: (option: TSelectOption) => void;
}

const SelectOption: FC<ISelectOptionProps> = ({ option, keyDownHandler, onClickHandler }) => {
  return (
    <li
      tabIndex={0}
      autoFocus={true}
      className={styles.option}
      onKeyDown={(e) => keyDownHandler(e, option)}
      onClick={() => onClickHandler(option)}
    >
      <span className={styles.option__label}>{option.label}</span>
    </li>
  );
};

export { SelectOption };
