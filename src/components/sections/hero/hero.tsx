import { ActionButton } from '@/src/ui-kit/action-button/actionButton';
import styles from './hero.module.css';
import cn from "classnames";
import Image from 'next/image';

export const Hero = () => {
  return (
    <section className={cn(styles.wrapper, 'container')}>
      <div className={styles.hero_text_container}>
        <h2 className={styles.hero_heading}>Менделеевская<br/><span>смена</span></h2>
        <p className={styles.hero_description}>Откройте удивительный мир химии вместе с СИБУРом</p>
        <ActionButton withArrow/>  
      </div>

      <ul className={styles.badges_list}>
        <li className={styles.badge}>
          <div className={cn(styles.badge_icon, styles.badge_icon__people)}></div>
          <p className={styles.badge_caption}>Узнают больше о химии <span>&#62;15 000</span>учеников</p>
        </li>
        <li className={cn(styles.badge, styles.badge__pink)}>
          <div className={cn(styles.badge_icon, styles.badge_icon__school)}></div>          
          <p className={styles.badge_caption}>Примут участие <span>&#62;600</span>школ</p>
        </li>
      </ul>

      <div className={styles.hero_img_container}>
        <Image className={styles.hero_img} width={809} height={867} src="/hero-img.png" alt="" priority quality={100}/>
      </div>

    </section>
  );
};