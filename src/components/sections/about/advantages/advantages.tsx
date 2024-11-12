'use client'

import styles from './advantages.module.css';
import cn from 'classnames';
import Image from 'next/image';


import advantageImg1 from '@/src/assets/images/advantage-item-future.png';
import advantageImg2 from '@/src/assets/images/advantage-item-tech.png';
import advantageImg3 from '@/src/assets/images/advantage-item-exp.png';
import { Slider } from './slider/slider';

export const Advantages = () => {

  return (
    <div className={styles.about_main}>
      <h3 className={cn(styles.about_main_title, 'container')}>О компании</h3>

        <ul className={cn(styles.advantages_list, styles.slider_view)}>
          <li className={styles.advantages_item}>
            <div className={styles.item_decor}></div>
            <Image className={styles.item_img} src={advantageImg1} width={387} height={360} alt="" quality={100}/>
            <div className={styles.item_content}>
              <h4 className={styles.item_title} >
                Вместе создаем лучшее будущее для людей и&nbsp;планеты
              </h4>
              <p className={styles.item_description}>
                Работа в&nbsp;СИБУРе выстроена на&nbsp;ESG-принципах. Для нас важны ответственное ведение бизнеса, вторичная переработка материалов и&nbsp;равные возможности для&nbsp;всей команды
              </p>
            </div>
          </li>
          <li className={styles.advantages_item}>
            <div className={styles.item_decor}></div>
            <Image className={styles.item_img} src={advantageImg2} width={387} height={360} alt="" quality={100}/>
            <div className={styles.item_content}>
              <h4 className={styles.item_title}>
                Используем инновационные технологии
              </h4>
              <p className={styles.item_description}>
                Мы создаем уникальные решения, не&nbsp;имеющие аналогов в&nbsp;России и&nbsp;мире. Буквально определяем вектор развития индустрии и&nbsp;движем её&nbsp;за&nbsp;собой
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
                Всего за два года молодой специалист в&nbsp;СИБУРе может дорасти до&nbsp;начальной управленческой позиции — начальника смены
              </p>
            </div>
          </li>
        </ul>

        <Slider />

    </div>
  );
}