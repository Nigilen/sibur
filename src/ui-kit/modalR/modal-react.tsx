'use client'

import { FC, useContext, useEffect } from 'react';
import styles from './modal-react.module.css';
import ReactDOM from 'react-dom';
import { MainContext } from '@/src/context/context';

interface Props {
  children: React.ReactNode;
  onClose?: () => void;
};


export const ModalReact: FC<Props> = ({ children }) => {
  
  const { setIsOpen, isOpen, setSuccess } = useContext(MainContext);
  
  useEffect(()=> {
    const padding =`${window.innerWidth - document.documentElement.clientWidth}px`;
    const header = document.querySelectorAll('header');
    if (isOpen) {
      document.body.style.paddingRight = padding;
      // document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      header[0].style.marginRight = padding;
      window.scrollTo(0, 0);
    } else {
      document.body.style.paddingRight = '0px';
      // document.body.style.overflow = 'auto';
      document.body.style.position = 'relative';
      header[0].style.marginRight = '0px';
    }
  }, [isOpen, setIsOpen])
  
  const handleClose = () => {
    setIsOpen(false);
    setSuccess(false)
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    (
      <div className={styles.modal_wrapper}>
        <div className={styles.modal}>
          <button className={styles.close_btn} onClick={handleClose} type='button'>
            <svg width="37" height="36" viewBox="0 0 37 36" fill="#00313C" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.3" d="M28.1343 12.0935L24.7676 8.7282L18.8618 14.6336L12.9557 8.7282L9.5893 12.0935L15.4955 17.9993L9.5893 23.9054L12.9557 27.2718L18.8618 21.366L24.7676 27.2718L28.1343 23.9054L22.2282 17.9993L28.1343 12.0935ZM18.8618 36C8.92042 36 0.862183 27.9407 0.862183 17.9993C0.862183 8.05932 8.92042 0 18.8618 0C28.8032 0 36.8611 8.05932 36.8611 17.9993C36.8611 27.9407 28.8032 36 18.8618 36Z" />
            </svg>
          </button>
          {children}
        </div>
        <div className={styles.modal_overlay} onClick={handleClose} />
      </div>
    ),
    document.body
  );
}