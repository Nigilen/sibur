import { Video } from '@/src/ui-kit/video/video';
import { AboutHeader } from './about-header/aboutHeader';
import styles from './about.module.css';
import { Advantages } from './advantages/advantages';
import { Pride } from './pride/pride';
// import cn from "classnames";

export const About = () => {
  return (
    <section id='about' className={styles.about}>
          
      <AboutHeader/> 

      <Video video='https://rutube.ru/play/embed/b96effb0a4004369c6fee2adcaa75e20' />
          
      <Advantages /> 
      

      <Pride />
      

    </section>
  );
}
