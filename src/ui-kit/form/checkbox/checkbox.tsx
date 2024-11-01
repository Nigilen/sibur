import { HTMLProps } from 'react';
import styles from './checkbox.module.css';
import cn from 'classnames';
import { FieldError, FieldValues, Path, RegisterOptions, UseFormRegister } from 'react-hook-form';

interface CheckboxProps<T extends FieldValues> extends HTMLProps<HTMLInputElement> {
  fieldLabel?: string;

  name: Path<T>;
  register: UseFormRegister<T>;
  rules: RegisterOptions<T>;
  error: FieldError | undefined;
  children: React.ReactNode;
};

export const Checkbox = <T extends FieldValues>({ 
    name,
    register,
    rules,
    error,
    children,
  }: CheckboxProps<T>): JSX.Element => {

  return (
      <label htmlFor={name} className={styles.checkbox}>
        <input
          id={name}
          className={cn(styles.input, 'visually-hidden')}
          type="checkbox"
          {...register(name, rules)}
          />
        <span
          className={cn(styles.custom_checkbox, {[styles.error]: error})}
          ></span>
        <span className={styles.checkbox__text}>
          {children}
        </span>
        {error && <span className={styles.message}>{error.message}</span>}
      </label>
  );
};