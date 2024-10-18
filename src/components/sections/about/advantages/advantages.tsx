import styles from './advantages.module.css';
import cn from 'classnames';

export const Advantages = () => {
  return (
    <div className={cn(styles.about_main, 'container')}>
      <h3 className={styles.about_main_title}>О компании <img src='./about-logo.svg' alt=''></img></h3>
      <div className={styles.carousel}>
        <ul className={styles.advantages_list}>
          <li className={styles.advantages_item}>
            <img className={styles.item_img} src="./about-item-img.png" alt="" />
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
            <img className={styles.item_img} src="./about-item-img.png" alt="" />
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
            <img className={styles.item_img} src="./about-item-img.png" alt="" />
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
    </div>
  );
}