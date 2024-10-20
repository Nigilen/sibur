'use client'

import { FC, useEffect, useRef } from 'react';
import styles from './cookies.module.css';

type Props = {
  isOpen: boolean;
};

export const Cookies:FC<Props> = ({isOpen}) => {
  const modal = useRef<HTMLDialogElement>(null);

  useEffect(()=> {
    if (isOpen) {
      modal.current?.show();
    } else {
      modal.current?.close();
    }
  }, [isOpen])

  const handlerClose = () => {
    modal.current?.close();
    
  };

  return (
    <dialog ref={modal} className={styles.cookies}>
      <div className={styles.cookies_wrapper}>
        <div className={styles.message}>
          <p>
            Мы используем <span className={styles.link}>cookie-файлы</span>
          </p>
          <p>
            С их помощью работать<br className={styles.br}/>с сайтом проще и удобнее
          </p>
        </div>
        <button onClick={handlerClose} className={styles.button_accept} type='button'>Принимаю</button>
      </div>
    </dialog>
  );
};