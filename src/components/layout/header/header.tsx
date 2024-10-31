'use client'

import { ActionButton } from "@/src/ui-kit/action-button/actionButton";
import styles from "./header.module.css";
import cn from "classnames";
import Image from "next/image";
import { useContext } from "react";
import { LevelContext } from "@/src/context/context";
import Link from "next/link";


export const Header = () => {
  const {isMenuOpen, setIsMenuOpen} = useContext(LevelContext);

  const hadnlerOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const hadnlerClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={cn(styles.wrapper)}>
      <nav className={styles.nav}>
        <Link className={styles.logo} href="#">
          <Image className={styles.logo_img} src="./logo.svg" width={93} height={18} alt="Логотип компании Сибур" />
        </Link>
        <ul className={cn(styles.nav_list, isMenuOpen && styles.mob_menu_open)}>
          <li className={styles.nav_item}>
            <Link className={styles.nav_link} href="#project" onClick={hadnlerClose}>О проекте</Link>
          </li>
          <li className={styles.nav_item}>
            <Link className={styles.nav_link} href="#about" onClick={hadnlerClose}>О компании</Link>
          </li>
          <li className={styles.nav_item}>
            <Link className={styles.nav_link} href="#projects" onClick={hadnlerClose}>Наши проекты</Link>
          </li>
          {/* <li className={styles.nav_item}>
            <Link className={styles.nav_link} href="#lesson" onClick={hadnlerClose}>Как это было</Link>
          </li> */}
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

