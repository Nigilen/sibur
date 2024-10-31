'use client'

import { ActionButton } from "@/src/ui-kit/action-button/actionButton";
import { useContext } from "react";
import { MainContext } from "@/src/context/context";
import Link from "next/link";
import { Logo } from "@/src/ui-kit/logo/logo";
import { links } from "./utils";
import cn from "classnames";
import styles from "./header.module.css";



export const Header = () => {
  const {isMenuOpen, setIsMenuOpen} = useContext(MainContext);

  const hadnlerOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const hadnlerClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={cn(styles.wrapper)}>
      <nav className={styles.nav}>
        <Logo className={styles.logo_header} />
        <ul className={cn(styles.nav_list, isMenuOpen && styles.mob_menu_open)}>
          {links.map((link) => (
            <li className={styles.nav_item} key={link.id}>
              <Link className={styles.nav_link} href={link.id} onClick={hadnlerClose}>{link.title}</Link>
            </li>
          ))}
          <ActionButton className={cn(styles.action_btn__header)} withArrow />
        </ul>
      </nav>
      <ActionButton className={cn(styles.action_btn__header, isMenuOpen && styles.action_btn__header_hide)} />
      <button className={cn(styles.burger_btn, isMenuOpen && styles.burger_btn__open)} type="button" onClick={hadnlerOpen}>
        <div className={cn(styles.burger_line, styles.top_line)}></div>
        <div className={cn(styles.burger_line, styles.bottom_line)}></div>
      </button>
    </header>
  );
;}

