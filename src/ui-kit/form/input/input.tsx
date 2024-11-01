import { HTMLProps } from 'react';
import styles from './input.module.css';
import cn from 'classnames';
import {FieldError, FieldValues, Path, RegisterOptions, UseFormRegister } from 'react-hook-form';

interface InputProps<T extends FieldValues> extends HTMLProps<HTMLInputElement> {
  fieldLabel?: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  rules: RegisterOptions<T>;
  error: FieldError | undefined;
};

export const Input = <T extends FieldValues>({ 
    fieldLabel,
    name,
    register,
    rules,
    error,
    className,
    placeholder = '', 
  }: InputProps<T>): JSX.Element => {

  return (
    <label htmlFor={name} className={cn(styles.label_wrapper, className)}>
      {fieldLabel && 
        <span className={cn(styles.label, {[styles.error]: error})}>
          {fieldLabel}
        </span>
      }
      <input
        id={name}
        className={cn(styles.input, {[styles.error]: error})}
        placeholder={placeholder}
        {...register(name, rules)}
        tabIndex={0}
        type="text"
      />
      {error && <span className={styles.message}>{error.message}</span>}
    </label>
  );
};