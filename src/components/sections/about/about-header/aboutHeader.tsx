import styles from './aboutHeader.module.css';
import cn from 'classnames';

export const AboutHeader = () => {
  return (
    <div className={cn(styles.about_header, 'container')}>
      <h2 className='section_caption'>О компании</h2>
      <p className={styles.about_header_text}>
        СИБУР — одна 
        <br className={styles.br_768} /> из лидирующих компаний 
        мировой нефтегазохимии, которая повышает качество жизни и&nbsp;создает новые возможности
        <br/>для людей и планеты
      </p>
    </div>
  );
};