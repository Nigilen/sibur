'use client';

import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import styles from './form.module.css';
import cn from 'classnames';
import { FC, useContext } from 'react';
import { Success } from '../success/success';
import { MainContext } from '@/src/context/context';
import { ErrorMessage } from '@hookform/error-message';
import { sendRequest } from '@/src/api/internal';
import { addressRegexp, emailRegex, onlyCyrillicAndSpacesRegex } from './utils';
import { CITIES, POSTS } from './data';
import Link from 'next/link';
import { Input } from './input/input';
import { Checkbox } from './checkbox/checkbox';
import RSelect from 'react-select'
import '@/styles/redefSelect.css';

export type Inputs = {
  name: string;
  surname: string;
  middle_name: string;
  school: string;
  adress: string;
  email: string;
  phone_number: string;
  city: string;
  status: string;
  personal: string;
  policy: string;
  test: string;
};

type FormProps = {
  policy?: string;
  participation?: string;
};

export const Form: FC<FormProps> = ({ policy, participation }) => {
  const { isSuccess, setSuccess } = useContext(MainContext);

  const { 
    register, 
    handleSubmit, 
    reset, 
    formState, 
    control 
  } = useForm<Inputs>({ criteriaMode: 'all', mode: 'onTouched' });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await sendRequest(data)
      .then(() => {
        reset();
        setSuccess(true);
      })
      .catch(console.error);
  };

  return (
    <>
      {isSuccess ? <Success /> : 
        <>
          <div className={styles.form_header}>
            <h2 className={styles.form_title}>Менделеевская смена в вашей школе!</h2>
            <p className={styles.form_description}>
              Оставьте заявку на проведение урока от СИБУРа в период с&nbsp;ноября&nbsp;2024 по май 2025 года.
            </p>
          </div>
          <form action="" className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <fieldset className={cn(styles.fieldset, styles.fieldset__fullname)}>
              <legend
                className={cn(styles.fieldset_caption, [
                  (formState.errors.name || formState.errors.surname) && styles.error,
                ])}
              >
                ФИО
              </legend>
              <Input 
                register={register}
                name="name"
                placeholder='Имя'
                error={formState.errors.name}
                rules={{
                  required: 'Обязательное поле',
                  pattern: {
                    value: onlyCyrillicAndSpacesRegex,
                    message: 'Допускается только кириллица, пробел и тире',
                  },
                  maxLength: {
                    value: 55,
                    message: 'Не больше 55 символов',
                  },
                  minLength: {
                    value: 2,
                    message: 'Не меньше 2 символов',
                  },
                }}
              />
              <Input 
                register={register}
                name="surname"
                placeholder='Фамилия'
                error={formState.errors.surname}
                rules={{
                  required: 'Обязательное поле',
                  pattern: {
                    value: onlyCyrillicAndSpacesRegex,
                    message: 'Допускается только кириллица, пробел и тире',
                  },
                  maxLength: {
                    value: 55,
                    message: 'Не больше 55 символов',
                  },
                  minLength: {
                    value: 2,
                    message: 'Не меньше 2 символов',
                  }
                }}
              />
              <Input 
                register={register}
                name="middle_name"
                placeholder='Отчество'
                error={formState.errors.middle_name}
                rules={{
                  required: false,
                  maxLength: {
                    value: 55,
                    message: 'Не больше 55 символов',
                  },
                  pattern: {
                    value: onlyCyrillicAndSpacesRegex,
                    message: 'Допускается только кириллица, пробел и тире',
                  },
                }}
              />
            </fieldset>

            <fieldset className={cn(styles.fieldset, styles.fieldset__other)}>

              <label htmlFor="status" className={styles.label_wrapper}>
                <span className={cn(styles.label, [formState.errors.status && styles.error])}>
                  Ваша должность
                </span>
                <Controller 
                  control={control}
                  name="status"
                  rules={{
                    required: 'Обязательное поле',
                  }}
                  render={({ field }) => 
                    <RSelect 
                      {...field}
                      id='status'
                      placeholder='Статус'
                      name='status'
                      options={POSTS}
                      value={POSTS.find(c => c.value === field.value)}
                      onChange={val => field.onChange(val?.label)}
                      className={cn("react-select-container", [formState.errors.status && 'error'])}
                      classNamePrefix="react-select"
                    />
                  }
                />
                <ErrorMessage
                  errors={formState.errors}
                  name="status"
                  render={({ messages }) =>
                    messages &&
                    Object.entries(messages).map(([type, message]) => (
                      <span className={styles.message} key={type}>
                        {message}
                      </span>
                    ))
                  }
                  />
              </label>
              <label htmlFor="city" className={styles.label_wrapper}>
                <span className={cn(styles.label, [formState.errors.city && styles.error])}>
                  Город
                </span>
                <Controller 
                  control={control}
                  name="city"
                  rules={{
                    required: 'Обязательное поле',
                  }}
                  render={({ field }) => 
                    <RSelect 
                      {...field}
                      id='city'
                      // defaultMenuIsOpen={true}
                      placeholder='Город'
                      name='city'
                      options={CITIES}
                      value={CITIES.find(c => c.value === field.value)}
                      onChange={val => field.onChange(val?.label)}
                      className={cn("react-select-container", "cells", [formState.errors.city && 'error'])}
                      classNamePrefix="react-select"
                    />
                  }
                />
                <ErrorMessage
                  errors={formState.errors}
                  name="city"
                  render={({ messages }) =>
                    messages &&
                    Object.entries(messages).map(([type, message]) => (
                      <span className={styles.message} key={type}>
                        {message}
                      </span>
                    ))
                  }
                  />
              </label>

            </fieldset>

            <fieldset className={cn(styles.fieldset, styles.fieldset__school)}>
              <Input 
                register={register}
                name="school"
                fieldLabel='Номер школы'
                placeholder='Номер школы'
                error={formState.errors.school}
                rules={{
                  required: 'Обязательное поле',
                  pattern: {
                    value: addressRegexp,
                    message: 'Недопустимые символы',
                  },
                  maxLength: {
                    value: 100,
                    message: 'Не больше 100 символов',
                  },
                }}
              />
              <Input 
                register={register}
                name="adress"
                fieldLabel='Адрес школы'
                placeholder='Адрес школы'
                error={formState.errors.adress}
                rules={{
                  required: 'Обязательное поле',
                  pattern: {
                    value: addressRegexp,
                    message: 'Недопустимые символы',
                  },
                  maxLength: {
                    value: 100,
                    message: 'Не больше 100 символов',
                  },
                  minLength: {
                    value: 5,
                    message: 'Не меньше 5 символов',
                  },
                }}
              />
            </fieldset>

            <fieldset className={cn(styles.fieldset, styles.fieldset__contacts)}>
              <legend
                className={cn(styles.fieldset_caption, [
                  (formState.errors.phone_number || formState.errors.email) && styles.error,
                ])}
              >
                Контактные данные
              </legend>
              <Input 
                register={register}
                name="phone_number"
                placeholder='Телефон'
                error={formState.errors.phone_number}
                rules={{
                  required: 'Обязательное поле',
                  pattern: {
                    value: /\d/,
                    message: 'Только цифры',
                  },
                  maxLength: {
                    value: 12,
                    message: 'Не больше 12 символов',
                  },
                  minLength: {
                    value: 11,
                    message: 'Не меньше 11 символов',
                  },
                }}
              />
              <Input 
                register={register}
                name="email"
                placeholder='Email'
                error={formState.errors.email}
                rules={{
                  required: 'Обязательное поле',
                  pattern: {
                    value: emailRegex,
                    message: 'Введите валидный email',
                  },
                }}
              />
            </fieldset>

            <fieldset className={cn(styles.fieldset, styles.fieldset__agreements)}>
              <Checkbox 
                register={register}
                name="personal"
                error={formState.errors.personal}
                rules={{
                  required: 'Обязательное поле',
                }}
              >
                Согласен с обработкой {' '}
                <Link href={participation || ''} target="_blank" className={styles.checkbox_link}>
                  персональных данных
                </Link>
              </Checkbox>
              <Checkbox 
                register={register}
                name="policy"
                error={formState.errors.policy}
                rules={{
                  required: 'Обязательное поле',
                }}
              >
                Согласен с {' '}
                <Link href={policy || ''} target="_blank" className={styles.checkbox_link}>
                  политикой конфиденциальности
                </Link>
              </Checkbox>
            </fieldset>

            <button className={styles.submit_btn} type="submit">
              Отправить
            </button>
          </form>
        </>
        
      }
    </>
  );
};
