import styles from './advantages.module.css';
import cn from 'classnames';
import Image from 'next/image';

import advantageImg1 from '@/src/assets/images/advantage-item-future.png';
import advantageImg2 from '@/src/assets/images/advantage-item-tech.png';
import advantageImg3 from '@/src/assets/images/advantage-item-exp.png';


export const Advantages = () => {
  return (
    <div className={styles.about_main}>
      <h3 className={cn(styles.about_main_title, 'container')}>О компании</h3>
      <ul className={styles.advantages_list}>
        <li className={styles.advantages_item}>
          <div className={styles.item_decor}></div>
          <Image className={styles.item_img} src={advantageImg1} width={387} height={360} alt="" quality={100}/>
          <div className={styles.item_content}>
            <h4 className={styles.item_title} >
              Вместе создаем лучшее будущее для людей и&nbsp;планеты
            </h4>
            <p className={styles.item_description}>
              Работа в СИБУРе выстроена<br/>на ESG-принципах. Для нас важны ответственное ведение бизнеса, вторичная переработка материалов и&nbsp;равные возможности для всей команды
            </p>
          </div>
        </li>
        <li className={styles.advantages_item}>
          <div className={styles.item_decor}></div>
          <Image className={styles.item_img} src={advantageImg2} width={387} height={360} alt="" quality={100}/>
          <div className={styles.item_content}>
            <h4 className={styles.item_title} >
              Используем инновационные технологии
            </h4>
            <p className={styles.item_description}>
              Мы создаем уникальные решения, не имеющие аналогов в России и мире. Буквально определяем вектор развития индустрии и движем её за собой
            </p>
          </div>
        </li>
        <li className={styles.advantages_item}>
          <div className={styles.item_decor}></div>
          <Image className={styles.item_img} src={advantageImg3} width={387} height={360} alt="" quality={100}/>
          <div className={styles.item_content}>
            <h4 className={styles.item_title} >
              Растим экспертов для создания умных решений
            </h4>
            <p className={styles.item_description}>
              Всего за два года молодой специалист в СИБУРе может дорасти до начальной управленческой позиции — начальника смены
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}