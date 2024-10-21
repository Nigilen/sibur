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
            <a className={styles.project_link} href="#">Узнать подробнее →</a>
          </SwiperSlide>
          <SwiperSlide className={cn(styles.slider_item, 'swiper-slide')}>
            <Image className={styles.project_img} width={240} height={240} src="/projects-item-polymers.png" alt="" />
            <h3 className={styles.project_heading}>Дом Полимеров</h3>
            <p className={styles.project_description}>
              Интерактивный павильон компании СИБУР, где мы показываем и рассказываем как рождаются полимеры и где они применяются. Здесь проходят мастер-классы, экскурсии и показывают фильмы. 
            </p>
            <a className={styles.project_link} href="#">Узнать подробнее →</a>
          </SwiperSlide>
          <SwiperSlide className={cn(styles.slider_item, 'swiper-slide')}>
            <Image className={styles.project_img} width={240} height={240} src="/projects-item-life.png" alt="" />
            <h3 className={styles.project_heading}>Вторая жизнь пластика</h3>
            <p className={styles.project_description}>
              Интерактивный общероссийский экологический урок для школьников 5-11 классов, который посвящен развитию отрасли переработки отходов в России
            </p>
            <a className={styles.project_link} href="#">Узнать подробнее →</a>
          </SwiperSlide>
          <SwiperSlide className={cn(styles.slider_item, 'swiper-slide')}>
            <Image className={styles.project_img} width={240} height={240} src="/projects-item-junior.png" alt="" />
            <h3 className={styles.project_heading}>«Траектория Junior» от СИБУРа</h3>
            <p className={styles.project_description}>
              Программа для старшеклассников, готовящая их к поступлению в лучшие инженерные вузы и карьере в промышленности
            </p>
            <a className={styles.project_link} href="#">Узнать подробнее →</a>
          </SwiperSlide>
          <SwiperSlide className={cn(styles.slider_item, 'swiper-slide')}>
            <Image className={styles.project_img} width={240} height={240} src="/projects-item-students.png" alt="" />
            <h3 className={styles.project_heading}>Студенческая практика</h3>
            <p className={styles.project_description}>
              Образовательная онлайн-платформа для студентов, будущих молодых специалистов, где можно изучить производственные процессы СИБУРа и погрузиться в специфику нефтегазохимической отрасли!
            </p>
            <a className={styles.project_link} href="#">Узнать подробнее →</a>
          </SwiperSlide>
          <SwiperSlide className={cn(styles.slider_item, 'swiper-slide')}>
            <Image className={styles.project_img} width={240} height={240} src="/projects-item-fest.png" alt="" />
            <h3 className={styles.project_heading}>СИБУР ФЕСТ</h3>
            <p className={styles.project_description}>
              Ежегодное мероприятие, где молодежь знакомится с новейшими достижениями в области химической промышленности, посещает лекции, мастер-классы и интерактивные стенды
            </p>
            <a className={styles.project_link} href="#">Узнать подробнее →</a>
          </SwiperSlide>
        </Swiper>
        <button className={cn(styles.slider_control, styles.slider_control__left, 'swiper-button-prev')} type='button'>
          <Image width={80} height={80} src="/left-arrow.svg" alt="" />
        </button>
        <button className={cn(styles.slider_control, styles.slider_control__right, 'swiper-button-next')} type='button'>
          <Image width={80} height={80} src="/right-arrow.svg" alt="" />
        </button>
      </div>

    </section>
  );
};

