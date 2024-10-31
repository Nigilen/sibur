import Link from 'next/link';
import Image from 'next/image';
import styles from './logo.module.css';
import { FC } from 'react';
import cn from 'classnames';

type LogoProps = {
  className?: string;
};

export const Logo:FC<LogoProps> = ({className}) => {
  return (
    <Link className={cn(styles.logo, className)} href="#">
      <Image className={styles.logo_img} src="./logo.svg" width={93} height={18} alt="Логотип компании Сибур" />
    </Link>
  )
}