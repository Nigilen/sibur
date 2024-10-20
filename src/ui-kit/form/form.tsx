'use client'

import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './form.module.css';
import cn from 'classnames';
import { useContext } from 'react';
import { Success } from '../success/success';
import { LevelContext } from '@/src/context/context';


type Inputs = {
  firstname: string
  lastname: string
  patronymic: string
  exampleRequired: string
  personal: string
  policy: string
}

export const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const { isSuccess, setSuccess } = useContext(LevelContext);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setSuccess(true);
    console.log(data);
  }

  console.log(watch("firstname"));

  // TODO: Закрытие по отправке
  
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
                <input className={styles.input} id='lastname' type="text" placeholder='Фамилия' {...register("exampleRequired")}/>
              </label>
              <label htmlFor="patronymic" className={styles.label_wrapper}>
                <input className={styles.input} id='patronymic' placeholder='Отчество' type="text" />
              </label>
            </fieldset>

            <fieldset className={cn(styles.fieldset, styles.fieldset__other)}>
              <label htmlFor='post' className={styles.label_wrapper}>
                <span className={styles.label}>Ваша должность</span>
                <div className={styles.select_wrapper}>
                  {/* TODO: стилизировать выпадающий список */}
                  <select className={styles.input} name="post" id="post"> 
                    <option value="">Директор</option>
                    <option value="">Учитель</option>
                    <option value="">Родитель</option>
                  </select>
                </div>
              </label>
              <label htmlFor="city" className={styles.label_wrapper}>
                <span className={styles.label}>Город</span>
                <div className={styles.select_wrapper}>
                  <select className={styles.input} name="city" id="city">
                    <option value="">Благовещенск</option>
                    <option value="">Воронеж</option>
                    <option value="">Дзержинск</option>
                    <option value="">Казань</option>
                    <option value="">Красноярск</option>
                    <option value="">Кстово</option>
                    <option value="">Тверь</option>
                    <option value="">Тобольск</option>
                    <option value="">с. Черниговка</option>
                    <option value="">Усть-Лужское с/п</option>
                    <option value="">Курск</option>
                    <option value="">Москва и МО</option>
                    <option value="">Нижневартовск</option>
                    <option value="">Нижнекамск</option>
                    <option value="">Новокуйбышевск</option>
                    <option value="">Пермь</option>
                  </select>
                </div>
              </label>
            </fieldset>

            <fieldset className={cn(styles.fieldset, styles.fieldset__school)}>
              <label htmlFor="number" className={styles.label_wrapper}>
                <span className={styles.label}>Номер школы</span>
                <input className={styles.input} id='number' type="text" />
              </label>
              <label htmlFor="address" className={styles.label_wrapper}>
                <span className={styles.label}>Адрес школы</span>
                <input className={styles.input} id='address' type="text" />
              </label>
            </fieldset>

            <fieldset className={cn(styles.fieldset, styles.fieldset__contacts)}>
              <legend className={styles.fieldset_caption}>Контактные данные</legend>
              <label className={styles.label_wrapper} htmlFor="phone">
                <span className='visually-hidden'>Телефон</span>
                <input className={styles.input} id='phone' type="phone" placeholder='Телефон'/> {/* TODO: Маска для телефона */}
              </label>
              <label className={styles.label_wrapper} htmlFor="email">
                <span className='visually-hidden'>Email</span>
                <input className={styles.input} id='email' type="email" placeholder='Email' /> {/* TODO: Маска для почты */}
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
              <label htmlFor="policy">
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
                {(errors.policy || errors.personal) && <span>обязательные поля</span>}
            </fieldset>

            <button className={styles.submit_btn} type='submit'>Отправить</button>
          </form>
        </>
        : <Success />
      }
    </>
  );
};