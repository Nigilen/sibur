import { getSettings } from "@/src/api/internal";
import styles from "./footer.module.css";
import cn from "classnames";
import Image from "next/image";
import Link from "next/link";


export const Footer = async () => {
  let data = null;

  try {
    data = await getSettings().then(data => data.data[0]);
  } catch (e) {
    console.error(e);
  }

  return (
    <footer className={cn(styles.wrapper, 'container')}>
      <div className={styles.column_logo}>
        <Link className={styles.logo} href="#">
          <Image src="./logo.svg" width={93} height={18} alt="Логотип компании Сибур" />
        </Link>
        <p className={styles.descriptor}>Цели, достойные тебя</p>
      </div>
      <div className={styles.column_copy}>
        <p className={styles.copyrite}><span className={styles.copyrite_span}>© 2024&nbsp;</span> ПАО «‎СИБУР-Холдинг»‎</p>
        <Link className={styles.policy} href={data.policy} target="blank">Политика в области обработки персональных данных</Link>
      </div>
    </footer>
  );
;}

