// 'use client';
// import { type FC, type KeyboardEvent, useEffect, useRef, useState } from 'react';
// // import type { ISelectOptions, TSelectOption } from '@/src/utils/types';
// import type { FieldError } from 'react-hook-form';
// import styles from './select.module.css';
// import cn from 'classnames';
// // import { SelectHeader } from './select-header/select-header';
// // import { SelectBody } from './select-body/select-body';

// type TSelectOption = {
//   value: string | number;
//   label: string;
// };

// type ISelectOptions = {
//   list: string[];
//   options: TSelectOption[];
// };

// export interface ISelectProps {
//   optionsObject: ISelectOptions;
//   name: string;
//   onChange: (value: string | number) => void;
//   placeholder?: string;
//   value: string | undefined | number;
//   className?: string;
//   disabled?: boolean;
//   error: FieldError | undefined;
//   fieldLabel?: string;
//   autoFocus?: boolean;
// }

// const Select: FC<ISelectProps> = ({
//   optionsObject,
//   name,
//   fieldLabel,
//   value,
//   onChange,
//   placeholder,
//   disabled,
//   error,
//   autoFocus = false,
//   className,
// }) => {
//   const [inputValue, setInputValue] = useState<string | number>(value || '');
//   const [isOpen, setIsOpen] = useState<boolean>(false);
//   const selectRef = useRef<HTMLDivElement>(null);
//   const { list, options } = optionsObject;

//   const handleOpen = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleKeyDownOpen = (e: KeyboardEvent<HTMLDivElement>) => {
//     if (e.keyCode === 13 || e.keyCode === 32) {
//       setIsOpen(!isOpen);
//     }
//   };

//   const onOptionClick = (option: TSelectOption) => {
//     setIsOpen(false);
//     onChange(option.value);
//   };

//   const handleKeyDownSelect = (e: KeyboardEvent<HTMLLIElement>, option: TSelectOption) => {
//     if (e.keyCode === 13 || e.keyCode === 32) {
//       onOptionClick(option);
//     }
//   };

//   // useEffect(() => {
//   //   if (value) {
//   //     setInputValue(options[value]);
//   //   }
//   //   // eslint-disable-next-line react-hooks/exhaustive-deps
//   // }, [value]);

//   useEffect(() => {
//     const { current: target } = selectRef;
//     const outsideHandler: EventListener = (e) => {
//       if (target && !target.contains(e.target as HTMLElement)) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener('click', outsideHandler);
//     return () => {
//       document.removeEventListener('click', outsideHandler);
//     };
//   }, [selectRef]);

//   return (
//     <div className={cn(styles.wrapper, className, { [styles.wrapper_hasError]: error })}>
//       {fieldLabel && <span className={styles.wrapper__fieldLabel}>{fieldLabel}</span>}
//       <div
//         tabIndex={0}
//         ref={selectRef}
//         autoFocus={autoFocus}
//         className={cn(styles.select, {
//           [styles.select_isSelected]: value,
//           [styles.select_isOpen]: isOpen,
//           [styles.select_disabled]: disabled,
//         })}
//         onClick={handleOpen}
//         onKeyDown={handleKeyDownOpen}
//       >
//         {/* <SelectHeader
//           hasError={!!error}
//           isBodyOpen={isOpen}
//           placeholder={placeholder}
//           name={name}
//           selectLabel={inputValue}
//         />

//         {isOpen && (
//           <SelectBody options={list} handleOptionClick={onOptionClick} keyDownSelectHandler={handleKeyDownSelect} />
//         )} */}
//       </div>
//       {error && <span className={styles.wrapper__message}>{error.message}</span>}
//     </div>
//   );
// };

// export { Select };
