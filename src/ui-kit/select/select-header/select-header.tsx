import { type FC } from 'react';
import styles from './select-header.module.css';
import cn from 'classnames';

export interface ISelectHeaderProps {
  name: string;
  selectLabel: string | number;
  placeholder?: string;
  isBodyOpen: boolean;
  hasError: boolean;
}

const SelectHeader: FC<ISelectHeaderProps> = ({ name, selectLabel, placeholder, hasError }) => {
  return (
    <label htmlFor={name} className={cn(styles.header, { [styles.header_hasError]: hasError })}>
      <input
        tabIndex={-1}
        autoFocus={false}
        value={selectLabel}
        type="text"
        readOnly
        className={styles.header__input}
        name={name}
        id={name}
        placeholder={placeholder}
      />
      {/* <Chevron className={cn(styles.header__icon, {[styles.header__icon_up]: isBodyOpen})} /> */}
    </label>
  );
};

export { SelectHeader };
