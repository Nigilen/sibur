'use client'

import cn from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import styles from './slider.module.css';
import 'swiper/css';
import { FC } from 'react';
import Link from 'next/link';
import { DataProjects } from '../types';


export const Slider: FC<DataProjects> = ({projects}) => {
  return (
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
        {projects && projects.map((item, index) => (
          <SwiperSlide key={index} className={cn(styles.slider_item, 'swiper-slide')}>
            <img className={styles.project_img} width={240} height={240} src={item.preview} alt="" />
            <h3 className={styles.project_heading}>{item.title}</h3>
            <p className={styles.project_description}>
              {item.description}
            </p>
            <Link className={styles.project_link} target='_blank' href={item.link}>Узнать подробнее →</Link>
          </SwiperSlide>
        ))}
        
      </Swiper>
      <button className={cn(styles.slider_control, styles.slider_control__left, 'swiper-button-prev')} type='button'>
        <svg className={styles.slider_control__icon} width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40.8193" cy="40.6973" r="40" fill="#008C95"/>
          <g clipPath="url(#clip0_5127_1841)">
          <path d="M44.6213 18.6877L18.2337 43.4836M21.2337 40.4836L42.4781 63.2316M21.2337 40.4836L157.066 39.8301L102.347 65.6987L186.571 88.338" stroke="white" strokeWidth="7.95287"/>
          </g>
          <defs>
          <clipPath id="clip0_5127_1841">
          <rect width="34.7938" height="31.4801" fill="white" transform="translate(17.6367 40.5361) rotate(-41.891)"/>
          </clipPath>
          </defs>
        </svg>
      </button>
      <button className={cn(styles.slider_control, styles.slider_control__right, 'swiper-button-next')} type='button'>
        <svg className={styles.slider_control__icon} width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40.5" cy="40.1289" r="40" fill="#008C95"/>
          <g clipPath="url(#clip0_4911_2219)">
          <path d="M37.2537 19.384L63.6413 43.1799M60.6413 41.1799L39.3969 63.9279M60.6413 41.1799L-45.1909 40.5264L-20.4721 66.395L-104.696 89.0343" stroke="white" strokeWidth="7.95287"/>
          </g>
          <defs>
          <clipPath id="clip0_4911_2219">
          <rect width="34.7938" height="31.4801" fill="white" transform="matrix(-0.744416 -0.667716 -0.667716 0.744416 64.2383 39.9678)"/>
          </clipPath>
          </defs>
        </svg>
      </button>
    </div>
  )
}