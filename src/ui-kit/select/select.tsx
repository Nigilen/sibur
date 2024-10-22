'use client'

import { MouseEventHandler, useEffect, useRef, useState } from 'react';
import styles from './select.module.css';
import { Option } from './option/option';
import cn from 'classnames';


type Option = { title: string; value: string };


type SelectProps = {
  selected: Option | null;
  options: Option[];
  placeholder?: string;
  mode?: 'rows' | 'cells';
  status?: 'default' | 'invalid';
  onChange?: (selected: Option['value']) => void;
  onClose?: () => void;
  name: string;
};

export const Select = (props: SelectProps) => {
  const {
    mode = 'rows',
    options,
    placeholder,
    status = 'default',
    selected,
    onChange,
    onClose,
    name
  } = props;
  
  
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    // inputRef?.current?.disabled = true;
  }, []);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const { target } = event;
      if (target instanceof Node && !rootRef.current?.contains(target)) {
        // isOpen && onClose?.();
        setIsOpen(false);
      }
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [isOpen, onClose]);

  const handleOptionClick = (value: Option['value']) => {
    setIsOpen(false);
    console.log('A')
    onChange?.(value);
  };
  const handlePlaceHolderClick: MouseEventHandler<HTMLInputElement> = () => {
    setIsOpen((prev) => !prev);
    console.log('B')
  };

  return (
    <div
      className={styles.selectWrapper}
      ref={rootRef}
      data-is-active={isOpen}
      data-mode={mode}
    >
      <div className={cn(styles.arrow, isOpen && styles.arrow_open)} onClick={handlePlaceHolderClick}></div>
      <input
        ref={inputRef}
        readOnly
        className={styles.placeholder}
        data-status={status}
        data-selected={!!selected?.value}
        defaultValue={selected?.title || ''}
        onClick={handlePlaceHolderClick}
        placeholder={selected?.title || placeholder}
        name={name}
        role='button'
        tabIndex={0}
        type='text'
      />

      {isOpen && 
        <ul className={cn(styles.select, mode === 'cells' && styles.cells)}>
          {options.map((option) => (
            <Option
              key={option.value}
              option={option}
              onClick={handleOptionClick}
            />
          ))}
        </ul>
      }
    </div>
  );
};