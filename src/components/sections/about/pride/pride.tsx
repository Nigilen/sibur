import styles from './pride.module.css';
import Image from 'next/image';

export const Pride = () => {
  return (
    <div className={styles.pride}>
      <div className={styles.pride_content}>
        <h3 className={styles.pride_title}>Мы&nbsp;<span className={styles.pride_title_decor}>гордимся</span></h3>
        <p className={styles.pride_description}>
          Результатами выпускников наших<br/>образовательных проектов, целью которых<br/>является создание инноваций и развитие<br/>российской экономики
        </p>
      </div>
      <Image className={styles.pride_img} src="/proud.png" alt="" width={808} height={569} loading="lazy"/>
    </div>
  );
};