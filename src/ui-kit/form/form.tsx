'use client'

import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './form.module.css';
import cn from 'classnames';
import { useContext, useState } from 'react';
import { Success } from '../success/success';
import { LevelContext } from '@/src/context/context';
import { Select } from '../select/select';


const posts = [
  { "title": "Директор", "value": "director" },
  { "title": "Учитель", "value": "teacher" },
  { "title": "Родитель", "value": "parent" }
]
const cities = [
  {"title": "Благовещенск","value": "blagoveshchensk" },
  {"title": "Воронеж","value": "voronezh" },
  {"title": "Дзержинск","value": "dzerzhinsk" },
  {"title": "Казань","value": "kazan" },
  {"title": "Красноярск","value": "krasnoyarsk" },
  {"title": "Кстово","value": "kstovo" },
  {"title": "Тверь","value": "tver" },
  {"title": "Томск","value": "tomsk" },
  {"title": "Тобольск","value": "tobolsk" },
  {"title": "с. Черниговка", "value": "chernigovka"},
  {"title": "Усть-Лужское с/п", "value": "ust-luzhskoe"},
  {"title": "Курск","value": "kursk" },
  {"title": "Москва и МО", "value": "moskva-i-mo"},
  {"title": "Нижневартовск","value": "nizhnevartovsk" },
  {"title": "Нижнекамск","value": "nizhnekamsk" },
  {"title": "Новокуйбышевск","value": "novokujbyshevsk" },
  {"title": "Пермь","value": "perm" }
]

export type Inputs = {
  firstname: string,
  lastname: string,
  patronymic: string,
  number: string,
  address: string,
  email: string,
  phone: string,
  city: string,
  post: string,
  personal: string,
  policy: string
}

export const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<Inputs>();


  const { isSuccess, setSuccess } = useContext(LevelContext);
  const postName = register("post");
  const cityName = register("city");

  const onSubmit: SubmitHandler<Inputs> = () => {
    setSuccess(true);
    reset();
  }
  
  const [selectPost, setSelectPost] = useState('');
  const [selectCity, setSelectCity] = useState('');

  const handleSelectPost = (value: string) => {
    setSelectPost(value);
    setValue("post", value);
  };
  const handleSelectCity = (value: string) => {
    setSelectCity(value);
    setValue("city", value);
  };
  
  const selectedPost = posts.find((item) => item.value === selectPost);
  const selectedCity = cities.find((item) => item.value === selectCity);
  
  console.log(watch("city")); 
  console.log(watch("post")); 

  return (
    <>
      {!isSuccess ? 
        <>
          <div className={styles.form_header}>
            <h2 className={styles.form_title}>Менделеевская смена в вашей школе!</h2>
            <p className={styles.form_description}>Оставьте заявку на проведение урока от СИБУРа в период с&nbsp;ноября&nbsp;2024 по май 2025 года.</p>
          </div>
          <form action="" className={styles.form} onSubmit={handleSubmit(onSubmit)}>

            <fieldset className={cn(styles.fieldset, styles.fieldset__fullname)}>
              <legend className={styles.fieldset_caption}>ФИО</legend>
              <label htmlFor={cn(styles.label_wrapper, "firstname")}>
                <input className={styles.input} id='firstname' type="text" placeholder='Имя' {...register("firstname")}/>
              </label>
              <label htmlFor="lastname" className={styles.label_wrapper}>
                <input className={styles.input} id='lastname' type="text" placeholder='Фамилия' {...register("lastname")}/>
              </label>
              <label htmlFor="patronymic" className={styles.label_wrapper}>
                <input className={styles.input} id='patronymic' placeholder='Отчество' type="text" {...register("patronymic")} />
              </label>
            </fieldset>

            <fieldset className={cn(styles.fieldset, styles.fieldset__other)}>
              <label htmlFor='post' className={styles.label_wrapper}>
                <span className={styles.label}>Ваша должность</span>
                <Select 
                  selected={selectedPost || null}
                  options={posts} 
                  placeholder='Статус' 
                  onChange={handleSelectPost}
                  name={postName.name}
                />
              </label>

              <label htmlFor="city" className={styles.label_wrapper}>
                <span className={styles.label}>Город</span>
                <Select 
                  selected={selectedCity || null}
                  options={cities} 
                  placeholder='Город' 
                  onChange={handleSelectCity}
                  name={cityName.name}
                  mode='cells'
                />
                
              </label>
            </fieldset>

            <fieldset className={cn(styles.fieldset, styles.fieldset__school)}>
              <label htmlFor="number" className={styles.label_wrapper}>
                <span className={styles.label}>Номер школы</span>
                <input className={styles.input} id='number' type="text" {...register("number")}/>
              </label>
              <label htmlFor="address" className={styles.label_wrapper}>
                <span className={styles.label}>Адрес школы</span>
                <input className={styles.input} id='address' type="text" {...register("address")}/>
              </label>
            </fieldset>

            <fieldset className={cn(styles.fieldset, styles.fieldset__contacts)}>
              <legend className={styles.fieldset_caption}>Контактные данные</legend>
              <label className={styles.label_wrapper} htmlFor="phone">
                <span className='visually-hidden'>Телефон</span>
                <input className={styles.input} id='phone' type="phone" placeholder='Телефон' {...register("phone")}/> 
              </label>
              <label className={styles.label_wrapper} htmlFor="email">
                <span className='visually-hidden'>Email</span>
                <input className={styles.input} id='email' type="email" placeholder='Email' {...register("email")}/>
              </label>
            </fieldset>

            
            <fieldset className={cn(styles.fieldset, styles.fieldset__agreements)}>
              <label htmlFor="personal">
                <input id='personal' type="checkbox" 
                  {...register(
                    "personal", 
                    { 
                      required: true, 
                    }
                  )}/>
                Согласен с обработкой&nbsp;
                <a href='./personal.pdf' target='blank'>персональных данных</a>
              </label>
              <label htmlFor="policy" className={cn(errors.policy && styles.errors)}>
                <input id='policy' type="checkbox" 
                  {...register(
                    "policy", 
                    { 
                      required: true, 
                    }
                  )}/>
                Согласен с&nbsp;
                <a href='./policy.pdf' target='blank'>политикой конфиденциальности</a>
              </label>
                {(errors.policy || errors.personal) && <span className={styles.message}>Error</span>}
            </fieldset>

            

            <button className={styles.submit_btn} type='submit'>Отправить</button>
          </form>
        </>
        : <Success />
      }
    </>
  );
};