'use client'

import { ActionButton } from "@/src/ui-kit/action-button/actionButton";
import styles from "./header.module.css";
import cn from "classnames";
import Image from "next/image";
import { useContext } from "react";
import { LevelContext } from "@/src/context/context";


export const Header = () => {
  const {isMenuOpen, setIsMenuOpen} = useContext(LevelContext);

  const hadnlerOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={cn('container', styles.wrapper)}>
      <nav className={styles.nav}>
        <a className={styles.logo} href="#">
          <Image src="./logo.svg" width={93} height={18} alt="Логотип компании Сибур" />
        </a>
        <ul className={cn(styles.nav_list, isMenuOpen && styles.mob_menu_open)}>
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
          <ActionButton className={cn(styles.action_btn__header, !isMenuOpen && 'visually-hidden')} withArrow />
          
        </ul>
      </nav>
      <ActionButton className={cn(styles.action_btn__header, isMenuOpen && 'visually-hidden')} />
      <button className={cn(styles.burger_btn, isMenuOpen && styles.burger_btn__open)} type="button" onClick={hadnlerOpen}>
        <div className={cn(styles.burger_line, styles.top_line)}></div>
        <div className={cn(styles.burger_line, styles.bottom_line)}></div>
      </button>
    </header>
  );
;}

