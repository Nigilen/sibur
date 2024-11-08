'use client'

import cn from 'classnames';

import styles from './slider.module.css';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import advantageImg1 from '@/src/assets/images/advantage-item-future.png';
import advantageImg2 from '@/src/assets/images/advantage-item-tech.png';
import advantageImg3 from '@/src/assets/images/advantage-item-exp.png';


export const Slider = () => {
  return (
    <div className={cn(styles.slider_wrapper, styles.slider_view)} >
      <Swiper 
        loop={true}
        breakpoints={{
          1440: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          360: {
            slidesPerView: 1,
          }
        }}
        slidesPerView={1}
        spaceBetween={30}
        speed={300}
        navigation={
          {
            nextEl: '.swiper-button-adv-next',
            prevEl: '.swiper-button-adv-prev',
          }
        }
        slideClass='swiper-slide-advantages'
        modules={[Navigation]}
        className={cn(styles.slider_list, styles.advantages_list)}
      >
        <SwiperSlide className={cn(styles.advantages_item, 'swiper-slide-advantages')}>
          <div className={styles.item_decor__menu}></div>
          <div className={styles.item_decor__star}></div>
          {/* <div className={styles.item_decor}></div> */}
          <img className={styles.item_img} src={advantageImg1.src} width={387} height={360} alt=""/>
          <div className={styles.item_content}>
            <h4 className={styles.item_title} >
              Вместе создаем лучшее будущее для людей и&nbsp;планеты
            </h4>
            <p className={styles.item_description}>
              Работа в&nbsp;СИБУРе выстроена на&nbsp;ESG-принципах. Для нас важны ответственное ведение бизнеса, вторичная переработка материалов и&nbsp;равные возможности для&nbsp;всей команды
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={cn(styles.advantages_item, 'swiper-slide-advantages')}>
          <div className={styles.item_decor__top_star}></div>
          <div className={styles.item_decor__empty_star}></div>
          <img className={styles.item_img} src={advantageImg2.src} width={387} height={360} alt=""/>
          <div className={styles.item_content}>
            <h4 className={styles.item_title} >
              Используем инновационные технологии
            </h4>
            <p className={styles.item_description}>
              Мы создаем уникальные решения, не&nbsp;имеющие аналогов в&nbsp;России и&nbsp;мире. Буквально определяем вектор развития индустрии и&nbsp;движем её&nbsp;за&nbsp;собой
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={cn(styles.advantages_item, 'swiper-slide-advantages')}>
          <div className={styles.item_decor}></div>
          <div className={styles.item_decor__pencil}></div>
          <div className={styles.item_decor__bottom_star}></div>
          <img className={styles.item_img} src={advantageImg3.src} width={387} height={360} alt=""/>
          <div className={styles.item_content}>
            <h4 className={styles.item_title} >
              Растим экспертов для создания умных решений
            </h4>
            <p className={styles.item_description}>
              Всего за два года молодой специалист в&nbsp;СИБУРе может дорасти до&nbsp;начальной управленческой позиции — начальника смены
            </p>
          </div>
        </SwiperSlide>
      </Swiper>

      <button className={cn(styles.slider_control, styles.slider_control__left, 'swiper-button-adv-prev')} type='button'>
        <svg className={styles.slider_control__icon} width="81" height="80" viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      <button className={cn(styles.slider_control, styles.slider_control__right, 'swiper-button-adv-next')} type='button'>
        <svg className={styles.slider_control__icon} width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  );
};
