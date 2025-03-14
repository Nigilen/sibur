'use client'

import { FC, useContext } from 'react';
import styles from './actionButton.module.css';
import Image from 'next/image';
import cn from 'classnames';
import { MainContext } from '@/src/context/context';
import arrowIcon from '@/src/assets/decor/arrow-icon.svg';

interface Props {
  withArrow?: boolean;
  className?: string;
};

export const ActionButton: FC<Props> = ({ withArrow, className }) => {

  const { setIsOpen, isOpen, isMenuOpen, setIsMenuOpen } = useContext(MainContext);

  const hadnlerOpen = () => {
    window.scrollTo(0, 0);
    window.onscroll = () => false;
    setIsOpen(!isOpen);
    if(isMenuOpen) {
      setIsMenuOpen(false)
      window.onscroll = null;
    }
  };

  return (
    <button 
      className={cn(styles.action_btn, withArrow && styles.with_arrow, className)} 
      type="button" 
      onClick={hadnlerOpen}
    >
      Пригласить СИБУР к себе
      {
        withArrow && <Image src={arrowIcon} width={28} height={28} unoptimized alt={''} />
      }
    </button>
  );
}