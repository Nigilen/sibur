import { FC } from 'react';
import styles from './actionButton.module.css';
import Image from 'next/image';
import cn from 'classnames';

type Props = {
  withArrow?: boolean;
  className?: string;
};

export const ActionButton: FC<Props> = ({ withArrow, className }) => {
  return (
    <button className={cn(styles.action_btn, withArrow && styles.with_arrow, className)} type="button">
      Пригласить СИБУР к себе
      {withArrow && <Image src={'./arrow-icon.svg'} width={28} height={28} alt={''} />}
    </button>
  );
}