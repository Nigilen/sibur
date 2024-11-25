import { Video } from '@/src/ui-kit/video/video';
import { FC } from 'react';
import { Gallery } from './gallery/gallery';
import styles from './past-lesson.module.css';
// import videoPreloader from '@/src/assets/images/lesson-video-preloader.png'
import { TSliders } from './types';


export const PastLesson: FC<TSliders> = ({ dataSlider }) => {
  return (
    <section id='lesson' className={styles.pastLesson}>
      <h2 className={styles.lesson_title}>Урок <span className={styles.lesson_title_decor}>«Менделеевская Смена»</span></h2>
      <p className={styles.lesson_description}>Смотрите, как школьники открывают для себя мир науки через увлекательный квест и&nbsp;опыты! Такое может быть и у вас — оставьте заявку  и пригласите СИБУР в вашу школу!</p>


      <div className={styles.video_decor}>
        <div className={styles.video_decor_blue_line}></div>
        <div className={styles.video_decor_red_line}></div>
        <div className={styles.video_decor_star}></div>
        <div className={styles.video_decor_quote_top}></div>
        <div className={styles.video_decor_quote_bottom}></div>
        
        <Video 
          video='https://rutube.ru/play/embed/fb146facdbc8c244c8fb67efc5221c4e' 
          // preloader={videoPreloader} 
          classNames={styles.lesson_video}
        />
        
      </div>

      <Gallery dataSlider={dataSlider}/>

    </section>
  );
};
