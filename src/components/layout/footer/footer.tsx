import styles from "./footer.module.css";
import cn from "classnames";
import Link from "next/link";
import { Logo } from "@/src/ui-kit/logo/logo";
import { FC } from "react";

interface Props {
  policy: string;
};

export const Footer: FC<Props> = ({ policy }) => {
  return (
    <footer className={cn(styles.footer, 'container')}>
      <div className={styles.footer_logo}>
        <Logo />
        <p>Цели, достойные тебя</p>
      </div>
      <div className={styles.footer_info}>
        <p><span className={styles.info_copyrite}>© 2024&nbsp;</span> ПАО «‎СИБУР-Холдинг»</p>
        <Link href={policy} target="_blank">Политика в области обработки персональных данных</Link>
      </div>
    </footer>
  );
;}

