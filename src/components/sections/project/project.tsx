import Image from 'next/image';
import styles from './project.module.css';
import cn from "classnames";
import { ActionButton } from '@/src/ui-kit/action-button/actionButton';

import mendeleevImg from '@/src/assets/images/project-mendeleev.png';
import studentImg from '@/src/assets/images/project-student.png';

export const Project = () => {
  return (
    <article className={cn(styles.project, 'container')}>
      <div className={styles.project_header}>
        <h2 id='project' className={cn(styles.project_caption, 'section_caption')}>Проект</h2>
        <p className={styles.project_title}>
          Менделеевская<br/>
          <span className={styles.project_title__decor}>Смена </span>
        </p>
      </div>
      <section className={styles.project_section}>
        <p className={cn(styles.section_text, styles.section_text__decor)}>
          Всё, что нас окружает — это химия! Доска, парты, линейки, пеналы и телефоны! 8 из 10 предметов вокруг нас сделаны благодаря нефтегазохимии. Как полимерная продукция влияет на&nbsp;экономику страны? Почему без нефтегазохимии невозможно представить не только будущее, <br className={styles.br}/>но и наше настоящее?
        </p>
        <p className={styles.section_text}>
          Во время урока «Менделеевская смена» школьники по&nbsp;всей России смогут поближе познакомиться с миром нефтегазохимии, из&nbsp;первых уст узнать про карьерные<br/>возможности СИБУРа и вместе <br className={styles.br}/>с&nbsp;Константином Вернигоровым, <br className={styles.br}/>Генеральным директором «СИБУР <br className={styles.br}/>ПолиЛаб», и&nbsp;НейроМенделеевым открыть <br className={styles.br}/>для себя мир бесконечных возможностей. 
        </p>
      </section>

      <section className={cn(styles.project_section, styles.project_section__grid)}>
        <h3 className={styles.section_heading}>Увлекательный<br/><span className={styles.section_heading__decor}>Урок Химии</span></h3>
        <Image className={styles.section_img} width={540} height={634} src={mendeleevImg} alt="" />
        <p className={styles.section_text}>
          Сотрудники СИБУРа и НейроМенделеев проведут интерактивный урок химии в школах по всей стране. Школьники станут участниками увлекательной квест-легенды, которая наглядно покажет возможности современной науки. Завершим урок зрелищным химическим экспериментом!
          {/* Сотрудники СИБУРа и НейроМенделеев проведут интерактивный урок химии в&nbsp;600+&nbsp;классах <br className={styles.br}/>по всей стране. Школьники станут участниками увлекательной квест-легенды, которая наглядно покажет возможности современной науки. Завершим урок зрелищным химическим экспериментом! */}
        </p>
        <dl className={styles.badge}>
          <dt className={styles.badge_termin}><span className={styles.badge_termin__decor}>26+</span><br/>Регионов РФ</dt>
          <dd className={styles.badge_description}>Охватывает образовательный проект «Менделеевская смена»</dd>
        </dl>
      </section>
      
      <section className={styles.project_section}>
        <div className={styles.section_content}>
          <h3 className={styles.section_heading}>Миссия&nbsp;<span className={styles.section_heading__decor}>урока</span></h3>
          <p className={styles.section_text}>
            Мы вызываем <span className={styles.through}>химическую</span> реакцию <br className={styles.br}/>в сердцах юных химиков. Наш проект <br className={styles.br}/>познакомит с нефтегазохимической <br className={styles.br}/>отраслью и вдохновит на изучение естественных наук для&nbsp;профессионального <br className={styles.br}/>развития в индустрии в&nbsp;дальнейшем. <br className={styles.br}/>Составим формулу будущего вместе!
          </p>
          <ActionButton className={styles.section_button} withArrow/>
        </div>
        <div className={styles.section_img_wrapper}>
          <Image className={styles.section_img} width={710} height={579} src={studentImg} alt="" />
        </div>
      </section>
    </article>
  );
};