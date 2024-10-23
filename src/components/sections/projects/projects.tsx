'use client'

import Image from 'next/image';
import styles from './projects.module.css';
import cn from 'classnames';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';


export const Projects = () => {

  return (
    <section id='projects' className={styles.projects}>
      <div className={styles.decor}></div>
      <h2 className={styles.projects_title}>Наши <span className={styles.projects_title_decor}>проекты</span></h2>
      <p className={styles.projects_description}>
        Мы синтезируем будущее, раскрывая потенциал друг друга, применяя новаторские методы в решении задач и создавая условия для будущих открытий мировой нефтегазохимии
      </p>

      <div className={styles.slider_wrapper}>
        <Swiper 
          breakpoints={{
            1440: {
              slidesPerView: 3,
              spaceBetween: 21,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            360: {
              slidesPerView: 1,
            }
          }}
          loop={true}
          speed={300}
          navigation={
            {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }
          }
          slideClass='swiper-slide'

          modules={[Navigation]}
          className={styles.slider_list}
        >
          <SwiperSlide className={cn(styles.slider_item, 'swiper-slide')}>
            <Image className={styles.project_img} width={240} height={240} src="/projects-item-mendeleev.png" alt="" />
            <h3 className={styles.project_heading}>Нейроменделеев</h3>
            <p className={styles.project_description}>
              СИБУР «оживил» Дмитрия Ивановича Менделеева при помощи нейросетей. Он может ответить на ваши вопросы о СИБУРе, науке и даже о вакансиях в компании. Просто напишите ему сообщение в чате!
            </p>
            <a className={styles.project_link} target='_blank' href="https://mendeleev.sibur.ru/">Узнать подробнее →</a>
          </SwiperSlide>
          <SwiperSlide className={cn(styles.slider_item, 'swiper-slide')}>
            <Image className={styles.project_img} width={240} height={240} src="/projects-item-polymers.png" alt="" />
            <h3 className={styles.project_heading}>Дом Полимеров</h3>
            <p className={styles.project_description}>
              Интерактивный павильон компании СИБУР, где мы показываем и рассказываем как рождаются полимеры и где они применяются. Здесь проходят мастер-классы, экскурсии и показывают фильмы. 
            </p>
            <a className={styles.project_link} target='_blank' href="https://домполимеров.рф/">Узнать подробнее →</a>
          </SwiperSlide>
          <SwiperSlide className={cn(styles.slider_item, 'swiper-slide')}>
            <Image className={styles.project_img} width={240} height={240} src="/projects-item-life.png" alt="" />
            <h3 className={styles.project_heading}>Вторая жизнь пластика</h3>
            <p className={styles.project_description}>
              Интерактивный общероссийский экологический урок для школьников 5-11 классов, который посвящен развитию отрасли переработки отходов в России
            </p>
            <a className={styles.project_link} target='_blank' href="https://втораяжизньпластика.рф/">Узнать подробнее →</a>
          </SwiperSlide>
          <SwiperSlide className={cn(styles.slider_item, 'swiper-slide')}>
            <Image className={styles.project_img} width={240} height={240} src="/projects-item-junior.png" alt="" />
            <h3 className={styles.project_heading}>«Траектория Junior» от СИБУРа</h3>
            <p className={styles.project_description}>
              Программа для старшеклассников, готовящая их к поступлению в лучшие инженерные вузы и карьере в промышленности
            </p>
            <a className={styles.project_link} target='_blank' href="https://sibured.ru/school">Узнать подробнее →</a>
          </SwiperSlide>
          <SwiperSlide className={cn(styles.slider_item, 'swiper-slide')}>
            <Image className={styles.project_img} width={240} height={240} src="/projects-item-students.png" alt="" />
            <h3 className={styles.project_heading}>Студенческая практика</h3>
            <p className={styles.project_description}>
              Образовательная онлайн-платформа для студентов, будущих молодых специалистов, где можно изучить производственные процессы СИБУРа и погрузиться в специфику нефтегазохимической отрасли!
            </p>
            <a className={styles.project_link} target='_blank' href="https://sibur-pump.ru/">Узнать подробнее →</a>
          </SwiperSlide>
          {/* <SwiperSlide className={cn(styles.slider_item, 'swiper-slide')}>
            <Image className={styles.project_img} width={240} height={240} src="/projects-item-fest.png" alt="" />
            <h3 className={styles.project_heading}>СИБУР ФЕСТ</h3>
            <p className={styles.project_description}>
              Ежегодное мероприятие, где молодежь знакомится с новейшими достижениями в области химической промышленности, посещает лекции, мастер-классы и интерактивные стенды
            </p>
            <a className={styles.project_link} target='_blank' href="https://changellenge.com/event/sibur">Узнать подробнее →</a>
          </SwiperSlide> */}
        </Swiper>
        <button className={cn(styles.slider_control, styles.slider_control__left, 'swiper-button-prev')} type='button'>
          <svg width="81" height="80" viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40.5" cy="40.001" r="40" fill="#008C95"/>
            <g clipPath="url(#clip0_4911_2218)">
            <path d="M44.6213 18.6877L18.2337 43.4836M21.2337 40.4836L42.4781 63.2316M21.2337 40.4836L157.066 39.8301L102.347 65.6987L186.571 88.338" stroke="white" strokeWidth="7.95287"/>
            </g>
            <defs>
            <clipPath id="clip0_4911_2218">
            <rect width="34.7938" height="31.4801" fill="white" transform="translate(17.3174 39.8398) rotate(-41.891)"/>
            </clipPath>
            </defs>
          </svg>


        </button>
        <button className={cn(styles.slider_control, styles.slider_control__right, 'swiper-button-next')} type='button'>


          <svg width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40.8193" cy="40.6973" r="40" fill="#008C95"/>
            <g clipPath="url(#clip0_5127_1842)">
            <path d="M37.2537 19.384L63.6413 43.1799M60.6413 41.1799L39.3969 63.9279M60.6413 41.1799L-45.1909 40.5264L-20.4721 66.395L-104.696 89.0343" stroke="white" strokeWidth="7.95287"/>
            </g>
            <defs>
            <clipPath id="clip0_5127_1842">
            <rect width="34.7938" height="31.4801" fill="white" transform="matrix(-0.744416 -0.667716 -0.667716 0.744416 64.5576 40.5361)"/>
            </clipPath>
            </defs>
          </svg>

        </button>
      </div>

    </section>
  );
};

