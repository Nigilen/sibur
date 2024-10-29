import { getGallery } from '@/src/api/internal';
import styles from './gallery.module.css';
import { SliderLesson } from './slider/slider';

export const Gallery = async () => {
  let dataSlider = null;

  try {
    dataSlider = await getGallery().then(res => res.data);
  } catch(error){
    console.error(error)
  }

  return (
    <div className={styles.gallery}>
      <div className={styles.decor_top}></div>
      <div className={styles.decor_bottom}></div>
      <h3 className={styles.title}>
        Это было <span className={styles.title_decor}>эпично</span><br className={styles.br}/> <span className={styles.title_italic}>химично!</span>
      </h3>
      <SliderLesson dataSlider={dataSlider}/>
    </div>
  );
};
