import { ActionButton } from '@/src/ui-kit/action-button/actionButton';
import styles from './hero.module.css';
import cn from "classnames";
import Image from 'next/image';
import heroImage from '@/src/assets/images/hero-img.png';

export const Hero = () => {
  return (
    <section className={cn(styles.wrapper, 'container')}>
      <div className={styles.hero_text_container}>
        <h2 className={styles.hero_heading}>Менделеевская<br/><span className={styles.hero_heading__decor}>смена</span></h2>
        <p className={styles.hero_description}>Откройте удивительный мир химии вместе с СИБУРом</p>
        <ActionButton withArrow/>  
      </div>

      <ul className={styles.badges_list}>
        <p className={styles.badges_list__caption}>Результаты первой смены,<br/>с 21 по  26 октября 2024 года:</p>
        <li className={styles.badge}>
          <div className={cn(styles.badge_icon, styles.badge_icon__people)}></div>
          <p className={styles.badge_caption}>Узнали больше о химии <span className={styles.badge_caption__decor}>&#62;15 000</span>учеников</p>
        </li>
        <li className={cn(styles.badge, styles.badge__pink)}>
          <div className={cn(styles.badge_icon, styles.badge_icon__school)}></div>          
          <p className={styles.badge_caption}>Приняли участие <span className={styles.badge_caption__decor}>&#62;230</span>школ</p>
        </li>
      </ul>

      <div className={styles.hero_img_container}>
        <Image className={styles.hero_img} width={809} height={867} src={heroImage} alt="" priority quality={100}/>
      </div>

    </section>
  );
};