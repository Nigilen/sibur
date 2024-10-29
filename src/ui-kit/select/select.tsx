'use client'

import { MouseEventHandler, useEffect, useRef, useState } from 'react';
import styles from './select.module.css';
import { Option } from './option/option';
import cn from 'classnames';
import { useFormContext } from 'react-hook-form';


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
  isError: boolean;
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
    name,
    isError
  } = props;
  const { register, setValue, setFocus } = useFormContext()
  
  
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const rootRef = useRef<HTMLDivElement>(null);

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

  const handleOptionClick = (value: Option['value'], title: Option['title'] ) => {
    setValue(name, title, { shouldValidate: true });
    onChange?.(title);
    setIsOpen(false);
  };
  const handlePlaceHolderClick: MouseEventHandler<HTMLInputElement> = () => {
    setIsOpen((prev) => !prev);
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
        readOnly
        className={cn(styles.placeholder, isError && styles.placeholder_error)}
        data-status={status}
        data-selected={!!selected?.value}
        defaultValue={selected?.title || undefined}
        onClick={handlePlaceHolderClick}
        placeholder={selected?.title || placeholder}
        tabIndex={0}
        type='text'
        {...register(name, { required: 'Обязательное поле' })}
        
      />

      {isOpen && 
        <ul className={cn(styles.select, mode === 'cells' && styles.cells)} 
          tabIndex={-1}
          onFocus={() => setFocus(name)}
          >
          {options.map((option) => (
            <Option
              key={option.value}
              option={option}
              onClick={handleOptionClick}
              mode={mode}
            />
          ))}
        </ul>
      }
    </div>
  );
};