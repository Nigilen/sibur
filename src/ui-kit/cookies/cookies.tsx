'use client'

import { FC, useEffect, useRef } from 'react';
import styles from './cookies.module.css';
import Link from 'next/link';

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

  const handleClose = () => {
    modal.current?.close();
    
  };

  return (
    <dialog ref={modal} className={styles.cookies}>
      <div className={styles.cookies_wrapper}>
        <div className={styles.message}>
          <p>
            Мы используем <Link href='./personal.pdf' target="_blank" className={styles.link}>cookie-файлы.</Link>
          </p>
          <p>
            С их помощью работать<br className={styles.br}/>с сайтом проще и удобнее
          </p>
        </div>
        <button onClick={handleClose} className={styles.button_accept} type='button'>Принимаю</button>
      </div>
    </dialog>
  );
};