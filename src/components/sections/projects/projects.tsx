import styles from './projects.module.css';
import cn from 'classnames';

export const Projects = () => {
  return (
    <section className={styles.projects}>
      <h2 className={styles.projects_title}>Наши <span>проекты</span></h2>
      <p className={styles.projects_description}>
        Мы синтезируем будущее, раскрывая потенциал друг друга, применяя новаторские методы в решении задач и создавая условия для будущих открытий мировой нефтегазохимии
      </p>

      <div className={styles.carousel}>
        <ul className={styles.projects_list}>
          <li className={styles.projects_item}>
            <img className={styles.project_img} width={240} height={240} src="./neiromendeleev.png" alt="" />
            <h3 className={styles.project_heading}>Нейроменделеев</h3>
            <p className={styles.project_description}>
              СИБУР «оживил» Дмитрия Ивановича Менделеева при помощи нейросетей. Он может ответить на ваши вопросы о СИБУРе, науке и даже о вакансиях в компании. Просто напишите ему сообщение в чате!
            </p>
           {/* TODO: у кнопки выровнять стрелку по вертикали как в макете */}
            <a className={styles.project_link} href="#">Узнать подробнее →</a>
          </li>
          <li className={styles.projects_item}>
            <img className={styles.project_img} width={240} height={240} src="./neiromendeleev.png" alt="" />
            <h3 className={styles.project_heading}>Нейроменделеев</h3>
            <p className={styles.project_description}>
              СИБУР «оживил» Дмитрия Ивановича Менделеева при помощи нейросетей. Он может ответить на ваши вопросы о СИБУРе, науке и даже о вакансиях в компании. Просто напишите ему сообщение в чате!
            </p>
           {/* TODO: у кнопки выровнять стрелку по вертикали как в макете */}
            <a className={styles.project_link} href="#">Узнать подробнее →</a>
          </li>
          <li className={styles.projects_item}>
            <img className={styles.project_img} width={240} height={240} src="./neiromendeleev.png" alt="" />
            <h3 className={styles.project_heading}>Нейроменделеев</h3>
            <p className={styles.project_description}>
              СИБУР «оживил» Дмитрия Ивановича Менделеева при помощи нейросетей. Он может ответить на ваши вопросы о СИБУРе, науке и даже о вакансиях в компании. Просто напишите ему сообщение в чате!
            </p>
           {/* TODO: у кнопки выровнять стрелку по вертикали как в макете */}
            <a className={styles.project_link} href="#">Узнать подробнее →</a>
          </li>
          <li className={styles.projects_item}>
            <img className={styles.project_img} width={240} height={240} src="./neiromendeleev.png" alt="" />
            <h3 className={styles.project_heading}>Нейроменделеев</h3>
            <p className={styles.project_description}>
              СИБУР «оживил» Дмитрия Ивановича Менделеева при помощи нейросетей. Он может ответить на ваши вопросы о СИБУРе, науке и даже о вакансиях в компании. Просто напишите ему сообщение в чате!
            </p>
           {/* TODO: у кнопки выровнять стрелку по вертикали как в макете */}
            <a className={styles.project_link} href="#">Узнать подробнее →</a>
          </li>
          <li className={styles.projects_item}>
            <img className={styles.project_img} width={240} height={240} src="./neiromendeleev.png" alt="" />
            <h3 className={styles.project_heading}>Нейроменделеев</h3>
            <p className={styles.project_description}>
              СИБУР «оживил» Дмитрия Ивановича Менделеева при помощи нейросетей. Он может ответить на ваши вопросы о СИБУРе, науке и даже о вакансиях в компании. Просто напишите ему сообщение в чате!
            </p>
           {/* TODO: у кнопки выровнять стрелку по вертикали как в макете */}
            <a className={styles.project_link} href="#">Узнать подробнее →</a>
          </li>
        </ul>
        <button className={cn(styles.control, styles.control_left)} type='button'>
          <img width={80} height={80} src="./left-arrow.svg" alt="" />
        </button>
        <button className={cn(styles.control, styles.control_right)} type='button'>
          <img width={80} height={80} src="./right-arrow.svg" alt="" />
        </button>
      </div>

    </section>
  );
};

