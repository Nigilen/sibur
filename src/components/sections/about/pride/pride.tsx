import styles from './pride.module.css';

export const Pride = () => {
  return (
    <div className={styles.pride}>
      <div>
        <h3 className={styles.pride_title}>Мы&nbsp;<span>гордимся</span></h3>
        <p className={styles.pride_description}>
          Результатами выпускников наших образовательных проектов, целью которых является создание инноваций и развитие российской экономики
        </p>
      </div>
      <img className={styles.pride_img} src="./proud.png" alt="" width={808} height={569} />
    </div>
  );
};