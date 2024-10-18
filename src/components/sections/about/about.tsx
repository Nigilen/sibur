import { Video } from '@/src/ui-kit/video/video';
import { AboutHeader } from './about-header/aboutHeader';
import styles from './about.module.css';
import { Advantages } from './advantages/advantages';
import { Pride } from './pride/pride';
// import cn from "classnames";

export const About = () => {
  return (
    <section className={styles.about}>
          
      <AboutHeader/> {/* TODO: доделать */}

      <Video video='https://rutube.ru/play/embed/866a47fde368dc0f283c376215b08937' /> {/* TODO: адаптив остался */}
          
      <Advantages /> {/* TODO: вынести в компонент */}    
      

      <Pride /> {/* TODO: вынести в компонент */}
      

    </section>
  );
}