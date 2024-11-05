import styles from "./footer.module.css";
import cn from "classnames";
import Link from "next/link";
import { Logo } from "@/src/ui-kit/logo/logo";
import { FC } from "react";

type FooterProps = {
  policy: string;
};

export const Footer: FC<FooterProps> = ({ policy }) => {

  return (
    <footer className={cn(styles.wrapper, 'container')}>
      <div className={styles.column_logo}>
        <Logo />
        <p className={styles.descriptor}>Цели, достойные тебя</p>
      </div>
      <div className={styles.column_copy}>
        <p className={styles.copyrite}>
          <span className={styles.copyrite_span}>© 2024&nbsp;</span> ПАО «‎СИБУР-Холдинг»
        </p>
        <Link className={styles.policy} href={policy} target="blank">
          Политика в области обработки персональных данных
        </Link>
      </div>
    </footer>
  );
;}

