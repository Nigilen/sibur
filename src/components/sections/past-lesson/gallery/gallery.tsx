import { FC } from 'react';
import styles from './gallery.module.css';
import { SliderLesson } from './slider/slider';
import { TSliders } from '../types';

export const Gallery: FC<TSliders> = ({ dataSlider }) => {
  return (
    <>
      {dataSlider.length > 0 &&
      <div className={styles.gallery}>
        <div className={styles.decor_top}></div>
        <div className={styles.decor_bottom}></div>
        <h3 className={styles.title}>
          Это было <span className={styles.title_decor}>эпично</span><br className={styles.br}/> <span className={styles.title_italic}>химично!</span>
        </h3>
        <SliderLesson dataSlider={dataSlider}/>
      </div>}
    </>
  );
};
