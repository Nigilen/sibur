import { Video } from '@/src/ui-kit/video/video';
import { Gallery } from './gallery/gallery';
import styles from './past-lesson.module.css';

export const PastLesson = () => {
  return (
    <section id='lesson' className={styles.pastLesson}>
      <h2 className={styles.lesson_title}>Урок <span className={styles.lesson_title_decor}>«Менделеевская Смена»</span></h2>
      <p className={styles.lesson_description}>Смотрите, как школьники <br className={styles.br}/>открывают для себя мир науки <br className={styles.br}/>через увлекательный квест<br className={styles.br}/>и&nbsp;опыты! Такое может быть&nbsp;<br className={styles.br}/>и&nbsp;у&nbsp;вас — оставьте заявку <br className={styles.br}/>и пригласите СИБУР&nbsp;<br className={styles.br}/>в&nbsp;вашу&nbsp;школу!</p>


      <div className={styles.video_decor}>
        <div className={styles.video_decor_blue_line}></div>
        <div className={styles.video_decor_red_line}></div>
        <div className={styles.video_decor_star}></div>
        <div className={styles.video_decor_quote_top}></div>
        <div className={styles.video_decor_quote_bottom}></div>
        <Video 
          video='https://rutube.ru/play/embed/b96effb0a4004369c6fee2adcaa75e20' 
          preloader={'/lesson-video-preloader.png'} 
          classNames={styles.lesson_video}
        />
      </div>

      <Gallery />

    </section>
  );
};
