import styles from "./footer.module.css";
import cn from "classnames";
import Image from "next/image";


export const Footer = () => {
  return (
    <footer className={cn(styles.wrapper, 'container')}>
      <div className={styles.column_logo}>
        <a className={styles.logo} href="#">
          <Image src="./logo.svg" width={93} height={18} alt="Логотип компании Сибур" />
        </a>
        <p className={styles.descriptor}>Цели, достойные тебя</p>
      </div>
      <div className={styles.column_copy}>
        <p className={styles.copyrite}><span>© 2024&nbsp;</span> ПАО «‎СИБУР-Холдинг»‎</p>
        <a className={styles.policy} href="#">Политика в области обработки персональных данных</a>
      </div>
    </footer>
  );
;}

