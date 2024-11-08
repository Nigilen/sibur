import styles from './projects.module.css';
import { Slider } from './slider/slider';
import { FC } from 'react';

type ProjectsProps = {
  projects: {
    id: number,
    preview: string,
    title: string,
    description: string,
    link: string
  }[]
};

export const Projects: FC<ProjectsProps> = ({projects}) => {
  return (
    <section id='projects' className={styles.projects}>
      <div className={styles.decor}></div>
      <h2 className={styles.projects_title}>Наши <span className={styles.projects_title_decor}>проекты</span></h2>
      <p className={styles.projects_description}>
        Мы синтезируем будущее, раскрывая потенциал друг друга, применяя новаторские методы в&nbsp;решении задач и&nbsp;создавая условия для&nbsp;будущих открытий мировой нефтегазохимии
      </p>
      <Slider data={projects}/>
    </section>
  );
};

