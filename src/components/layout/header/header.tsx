import { ActionButton } from "@/src/ui-kit/action-button/actionButton";
import styles from "./header.module.css";
import cn from "classnames";
import Image from "next/image";


export const Header = () => {
  return (
    <header className={cn('container', styles.wrapper)}>
      <nav className={styles.nav}>
        <a className={styles.logo} href="#">
          <Image src="./logo.svg" width={93} height={18} alt="Логотип компании Сибур" />
        </a>
        <ul className={styles.nav_list}>
          <li className={styles.nav_item}>
            <a className={styles.nav_link} href="#">О проекте</a>
          </li>
          <li className={styles.nav_item}>
            <a className={styles.nav_link} href="#">О компании</a>
          </li>
          <li className={styles.nav_item}>
            <a className={styles.nav_link} href="#">Наши проекты</a>
          </li>
          <li className={styles.nav_item}>
            <a className={styles.nav_link} href="#">Как это было</a>
          </li>
        </ul>
      </nav>
      <ActionButton className={styles.action_btn__header} />
      <button className={styles.burger_btn} type="button">
        <div className={cn(styles.burger_line, styles.top_line)}></div>
        <div className={cn(styles.burger_line, styles.bottom_line)}></div>
      </button>
    </header>
  );
;}

