import { Video } from '@/src/ui-kit/video/video';
import { AboutHeader } from './about-header/aboutHeader';
import styles from './about.module.css';
import { Advantages } from './advantages/advantages';
import { Pride } from './pride/pride';
import videoPreloader from '@/src/assets/images/about-video-preloader.png'

export const About = () => {
  return (
    <section id='about' className={styles.about}>
          
      <AboutHeader/> 

      <div className={styles.video_decor}>
        <div className={styles.video_decor_blue_line}></div>
        <div className={styles.video_decor_red_line}></div>
        <div className={styles.video_decor_star}></div>
        <Video 
          video='https://rutube.ru/play/embed/b96effb0a4004369c6fee2adcaa75e20' 
          preloader={videoPreloader}
        />
      </div>
          
      <Advantages /> 
      
      <Pride />
      
    </section>
  );
}
