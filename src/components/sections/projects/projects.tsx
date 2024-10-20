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
              // nextEl: `${styles.slider_control__right}`,
              // prevEl: styles.slider_control__left,

              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }
          }

          modules={[Navigation]}
          className={styles.slider_list}
        >
          <SwiperSlide className={styles.slider_item}>
            <Image className={styles.project_img} width={240} height={240} src="/neiromendeleev.png" alt="" />
            <h3 className={styles.project_heading}>Нейроменделеев</h3>
            <p className={styles.project_description}>
              СИБУР «оживил» Дмитрия Ивановича Менделеева при помощи нейросетей. Он может ответить на ваши вопросы о СИБУРе, науке и даже о вакансиях в компании. Просто напишите ему сообщение в чате!
            </p>
            <a className={styles.project_link} href="#">Узнать подробнее →</a>
          </SwiperSlide>
          <SwiperSlide className={styles.slider_item}>
            <Image className={styles.project_img} width={240} height={240} src="/neiromendeleev.png" alt="" />
            <h3 className={styles.project_heading}>Нейроменделеев</h3>
            <p className={styles.project_description}>
              СИБУР «оживил» Дмитрия Ивановича Менделеева при помощи нейросетей. Он может ответить на ваши вопросы о СИБУРе, науке и даже о вакансиях в компании. Просто напишите ему сообщение в чате!
            </p>
            <a className={styles.project_link} href="#">Узнать подробнее →</a>
          </SwiperSlide>
          <SwiperSlide className={styles.slider_item}>
            <Image className={styles.project_img} width={240} height={240} src="/neiromendeleev.png" alt="" />
            <h3 className={styles.project_heading}>Нейроменделеев</h3>
            <p className={styles.project_description}>
              СИБУР «оживил» Дмитрия Ивановича Менделеева при помощи нейросетей. Он может ответить на ваши вопросы о СИБУРе, науке и даже о вакансиях в компании. Просто напишите ему сообщение в чате!
            </p>
            <a className={styles.project_link} href="#">Узнать подробнее →</a>
          </SwiperSlide>
          <SwiperSlide className={styles.slider_item}>
            <Image className={styles.project_img} width={240} height={240} src="/neiromendeleev.png" alt="" />
            <h3 className={styles.project_heading}>Нейроменделеев</h3>
            <p className={styles.project_description}>
              СИБУР «оживил» Дмитрия Ивановича Менделеева при помощи нейросетей. Он может ответить на ваши вопросы о СИБУРе, науке и даже о вакансиях в компании. Просто напишите ему сообщение в чате!
            </p>
            <a className={styles.project_link} href="#">Узнать подробнее →</a>
          </SwiperSlide>
          <SwiperSlide className={styles.slider_item}>
            <Image className={styles.project_img} width={240} height={240} src="/neiromendeleev.png" alt="" />
            <h3 className={styles.project_heading}>Нейроменделеев</h3>
            <p className={styles.project_description}>
              lol!</p>
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

