import styles from './aboutHeader.module.css';
import cn from 'classnames';

export const AboutHeader = () => {
  return (
    <div className={cn(styles.about_header, 'container')}>
      <h2 className={cn('section_caption', styles.section_caption)}>О компании</h2>
      <p className={styles.about_header_text}>
        СИБУР — одна 
        из&nbsp;лидирующих компаний 
        мировой нефтегазохимии, которая повышает качество жизни и&nbsp;создает новые возможности для&nbsp;людей и&nbsp;планеты
      </p>
    </div>
  );
};