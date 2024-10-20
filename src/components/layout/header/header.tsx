'use client'

import { ActionButton } from "@/src/ui-kit/action-button/actionButton";
import styles from "./header.module.css";
import cn from "classnames";
import Image from "next/image";
import { useState } from "react";


export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const hadnlerOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={cn('container', styles.wrapper)}>
      <nav className={styles.nav}>
        <a className={styles.logo} href="#">
          <Image src="./logo.svg" width={93} height={18} alt="Логотип компании Сибур" />
        </a>
        <ul className={cn(styles.nav_list, isOpen && styles.mob_menu_open)}>
          <li className={styles.nav_item}>
            <a className={styles.nav_link} href="#project">О проекте</a>
          </li>
          <li className={styles.nav_item}>
            <a className={styles.nav_link} href="#about">О компании</a>
          </li>
          <li className={styles.nav_item}>
            <a className={styles.nav_link} href="#projects">Наши проекты</a>
          </li>
          <li className={styles.nav_item}>
            <a className={styles.nav_link} href="#contacts">Как это было</a>
          </li>
        </ul>
      </nav>
      <ActionButton className={styles.action_btn__header} />
      <button className={cn(styles.burger_btn, isOpen && styles.burger_btn__open)} type="button" onClick={hadnlerOpen}>
        <div className={cn(styles.burger_line, styles.top_line)}></div>
        <div className={cn(styles.burger_line, styles.bottom_line)}></div>
      </button>
    </header>
  );
;}

