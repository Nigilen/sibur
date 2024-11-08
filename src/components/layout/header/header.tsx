'use client'

import { ActionButton } from "@/src/ui-kit/action-button/actionButton";
import { useContext, useEffect } from "react";
import { MainContext } from "@/src/context/context";
import Link from "next/link";
import { Logo } from "@/src/ui-kit/logo/logo";
import { links } from "./data";
import cn from "classnames";
import styles from "./header.module.css";


export const Header = () => {
  const {isMenuOpen, setIsMenuOpen} = useContext(MainContext);

  const handleToggle = () => setIsMenuOpen(!isMenuOpen);
  const handleClose = () => setIsMenuOpen(false);

  useEffect(() => {
    window.addEventListener('resize', () => setIsMenuOpen(false));
    return () => window.removeEventListener('resize', () => setIsMenuOpen(false))
  }, [])

  return (
    <header className={cn(styles.wrapper)}>
      <nav className={styles.nav}>
        <Logo className={styles.logo_header} />
        <ul className={cn(styles.nav_list, {[styles.mob_menu_open]: isMenuOpen})}>
          {links.map((link) => (
            <li className={styles.nav_item} key={link.id}>
              <Link className={styles.nav_link} href={link.id} onClick={handleClose}>{link.title}</Link>
            </li>
          ))}
          <ActionButton className={cn(styles.action_btn__header)} withArrow />
        </ul>
      </nav>
      <ActionButton className={cn(styles.action_btn__header, {[styles.action_btn__header_hide]: isMenuOpen})} />
      <button className={cn(styles.burger_btn, {[styles.burger_btn__open]: isMenuOpen})} type="button" onClick={handleToggle}>
        <div className={cn(styles.burger_line, styles.top_line)}></div>
        <div className={cn(styles.burger_line, styles.bottom_line)}></div>
      </button>
    </header>
  );
;}

