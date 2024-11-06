import styles from './pride.module.css';
import Image from 'next/image';

import prideBg from '@/src/assets/images/pride-bg.png'

export const Pride = () => {
  return (
    <div className={styles.pride}>
      <div className={styles.pride_content}>
        <h3 className={styles.pride_title}>Мы&nbsp;<span className={styles.pride_title_decor}>гордимся</span></h3>
        <p className={styles.pride_description}>
          Результатами выпускников <br className={styles.br_1440}/>наших образовательных <br className={styles.br_1440}/>проектов, целью которых <br className={styles.br_1440}/>является создание инноваций и&nbsp;развитие российской экономики
        </p>
      </div>
      <Image className={styles.pride_img} src={prideBg} alt="" width={808} height={569} quality={100}/>
    </div>
  );
};