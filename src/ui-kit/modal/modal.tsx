'use client'

import { FC, useContext, useEffect, useRef } from 'react';
import styles from './modal.module.css';
import cn from 'classnames';
import Image from 'next/image';
import { LevelContext } from '@/src/context/context';

type Props = {
  // isOpen: boolean;
  children: React.ReactNode;
};

export const Modal:FC<Props> = ({ children }) => {
  const modal = useRef<HTMLDialogElement>(null);

  const { setIsOpen, isOpen, setSuccess } = useContext(LevelContext);

  useEffect(()=> {
    if (isOpen) {
      modal.current?.showModal();
    } else {
      modal.current?.close();
    }
  }, [isOpen, setIsOpen])


  const handlerClose = () => {
    modal.current?.close();
    setIsOpen(false);
    setSuccess(false);
  }

  return (
    <dialog ref={modal} className={cn(styles.modal, 'modal')} >
      <div className={styles.dialog__wrapper}>
        <button className={styles.close_btn} onClick={handlerClose} type='button'>
          <Image src={'/close-modal-icon.svg'} alt={''} width={36} height={36} />
        </button>
        {children}
      </div>
    </dialog>
  );
};