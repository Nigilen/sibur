import { type FC, type KeyboardEvent } from 'react';
import styles from './select-body.module.css';
import { SelectOption } from '../select-option/select-option';
import cn from 'classnames';

type TSelectOption = {
  label: string;
};

export interface ISelectBodyProps {
  options: TSelectOption[];
  keyDownSelectHandler: (e: KeyboardEvent<HTMLLIElement>, option: TSelectOption) => void;
  handleOptionClick: (option: TSelectOption) => void;
}

const SelectBody: FC<ISelectBodyProps> = ({ options, keyDownSelectHandler, handleOptionClick }) => {
  return (
    <ul className={cn(styles.body, 'nice-scrollbar')}>
      {options &&
        options.map((option, index) => (
          <SelectOption
            key={index}
            option={option}
            onClickHandler={handleOptionClick}
            keyDownHandler={keyDownSelectHandler}
          />
        ))}
    </ul>
  );
};

export { SelectBody };
