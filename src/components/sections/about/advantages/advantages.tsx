import styles from './advantages.module.css';
import cn from 'classnames';
import Image from 'next/image';

export const Advantages = () => {
  return (
    <div className={styles.about_main}>
      <h3 className={cn(styles.about_main_title, 'container')}>О компании</h3>
      <ul className={styles.advantages_list}>
        <li className={styles.advantages_item}>
          <div className={styles.item_decor}></div>
          <Image className={styles.item_img} src="/about-item-img.png" width={387} height={360} alt="" />
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
          <Image className={styles.item_img} src="/about-item-img.png" width={387} height={360} alt="" />
          <div className={styles.item_content}>
            <h4 className={styles.item_title} >
              Вместе создаем лучшее будущее для людей и планеты
            </h4>
            <p className={styles.item_description}>
              Работа в СИБУРе выстроена на ESG-принципах. Для нас важны ответственное ведение бизнеса, вторичная переработка материалов и равные возможности для всей команды
            </p>
          </div>
        </li>
        <li className={styles.advantages_item}>
          <div className={styles.item_decor}></div>
          <Image className={styles.item_img} src="/about-item-img.png" width={387} height={360} alt="" />
          <div className={styles.item_content}>
            <h4 className={styles.item_title} >
              Вместе создаем лучшее будущее для людей и планеты
            </h4>
            <p className={styles.item_description}>
              Работа в СИБУРе выстроена на ESG-принципах. Для нас важны ответственное ведение бизнеса, вторичная переработка материалов и равные возможности для всей команды
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}