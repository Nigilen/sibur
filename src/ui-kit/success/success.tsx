import styles from './success.module.css';


export const Success = () => {
  return (
    <div className={styles.success}>
      <h1 className={styles.success_title}>Заявка <span>успешно</span><br/>отправлена!</h1>
      <p className={styles.success_description}>В ближайшее время с вами свяжется менеджер и ответит на все интересующие вопросы</p>
    </div>
  );
};