import { getProjects } from '@/src/api/internal';
import styles from './projects.module.css';
import { Slider } from './slider/slider';


export const Projects = async () => {
  let data = null;

  try {
    data = await getProjects().then(data => data.data);
  } catch (e) {
    console.error(e);
  }

  return (
    <section id='projects' className={styles.projects}>
      <div className={styles.decor}></div>
      <h2 className={styles.projects_title}>Наши <span className={styles.projects_title_decor}>проекты</span></h2>
      <p className={styles.projects_description}>
        Мы создаем условия для роста и развития школьников, студентов и молодых специалистов
      </p>
      <Slider data={data}/>
      

    </section>
  );
};

