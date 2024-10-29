'use client';

import { SubmitHandler, useForm, FormProvider } from 'react-hook-form';
import styles from './form.module.css';
import cn from 'classnames';
import { useContext, useEffect, useState } from 'react';
import { Success } from '../success/success';
import { LevelContext } from '@/src/context/context';
import { Select } from '../select/select';
import { ErrorMessage } from '@hookform/error-message';
import { getSettings, sendRequest } from '@/src/api/internal';
import { addressRegexp, emailRegex, onlyCyrillicAndSpacesRegex } from './utils';

const posts = [
  { title: 'Директор', value: 'director' },
  { title: 'Учитель', value: 'teacher' },
  { title: 'Родитель', value: 'parent' },
];
const cities = [
  { title: 'Балахна', value: 'blagoveshchensk' },
  { title: 'Благовещенск (Дальний Восток)', value: 'blagoveshchensk-dv' },
  { title: 'Благовещенск (Республика Башкортостан)', value: 'blagoveshchensk-bashk' },
  { title: 'Воронеж', value: 'voronezh' },
  { title: 'Дзержинск', value: 'dzerzhinsk' },
  { title: 'Казань', value: 'kazan' },
  { title: 'Красноярск', value: 'krasnoyarsk' },
  { title: 'Кстово', value: 'kstovo' },
  { title: 'Москва и МО', value: 'moskva-i-mo' },
  { title: 'Нижневартовск', value: 'nizhnevartovsk' },
  { title: 'Нижнекамск', value: 'nizhnekamsk' },
  { title: 'Нижний Новгород', value: 'n-novgorod' },
  { title: 'Новокуйбышевск', value: 'novokujbyshevsk' },
  { title: 'Ноябрьск', value: 'noyabrsk' },
  { title: 'Нягань', value: 'nyagan' },
  { title: 'Пермь', value: 'perm' },
  { title: 'Пыть-Ях', value: 'pyt-yah' },
  { title: 'Свободный', value: 'svobodnyj' },
  { title: 'Тверь', value: 'tver' },
  { title: 'Тобольск', value: 'tobolsk' },
  { title: 'Томск', value: 'tomsk' },
  { title: 'Тюмень', value: 'tyumen' },
  { title: 'Усть-Лужское с/п', value: 'ust-luzhskoe' },
  { title: 'Уфа', value: 'ufa' },
];

// 58, 59, 26, 28, 49, 48
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
};

type TSettings = {
  policy: string,
  participation: string,
  tg_sibur: string,
  tg_career: string,
  tg_polymar: string,
  vk: string
}

export const Form = () => {
  const [docs, setDocs] = useState<TSettings | null>(null);

  const fetchAndSetCommonDocs = async () => {
    try {
      setDocs(await getSettings().then((res) => res.data[0]));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAndSetCommonDocs()
  }, []);

  
  const methods = useForm<Inputs>({ criteriaMode: 'all', mode: 'onTouched' });

  const { isSuccess, setSuccess } = useContext(LevelContext);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await sendRequest(data)
      .then(() => {
        methods.reset();
        setSuccess(true);
      })
      .catch(console.error);
  };

  const [selectPost, setSelectPost] = useState('');
  const [selectCity, setSelectCity] = useState('');

  const handleSelectPost = (value: string) => {
    setSelectPost(value);
    methods.setValue('status', value);
  };
  const handleSelectCity = (value: string) => {
    setSelectCity(value);
    methods.setValue('city', value);
  };

  const selectedPost = posts.find((item) => item.value === selectPost);
  const selectedCity = cities.find((item) => item.value === selectCity);

  return (
    <>
      {!isSuccess ? (
        <>
          <FormProvider {...methods}>
            <div className={styles.form_header}>
              <h2 className={styles.form_title}>Менделеевская смена в вашей школе!</h2>
              <p className={styles.form_description}>
                Оставьте заявку на проведение урока от СИБУРа в период с&nbsp;ноября&nbsp;2024 по май 2025 года.
              </p>
            </div>
            <form action="" className={styles.form} onSubmit={methods.handleSubmit(onSubmit)}>
              <fieldset className={cn(styles.fieldset, styles.fieldset__fullname)}>
                <legend
                  className={cn(styles.fieldset_caption, [
                    (methods.formState.errors.name || methods.formState.errors.surname) && styles.error,
                  ])}
                >
                  ФИО
                </legend>
                <label htmlFor="name" className={styles.label_wrapper}>
                  <input
                    className={cn(styles.input, [methods.formState.errors.name && styles.error])}
                    id="name"
                    type="text"
                    tabIndex={0}
                    placeholder="Имя"
                    {...methods.register('name', {
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
                    })}
                  />
                  <ErrorMessage
                    errors={methods.formState.errors}
                    name="name"
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
                <label htmlFor="surname" className={styles.label_wrapper}>
                  <input
                    className={cn(styles.input, [methods.formState.errors.surname && styles.error])}
                    id="surname"
                    type="text"
                    tabIndex={0}
                    placeholder="Фамилия"
                    {...methods.register('surname', {
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
                    })}
                  />
                  <ErrorMessage
                    errors={methods.formState.errors}
                    name="surname"
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
                <label htmlFor="middle_name" className={styles.label_wrapper}>
                  <input
                    className={cn(styles.input, [methods.formState.errors.middle_name && styles.error])}
                    id="middle_name"
                    tabIndex={0}
                    placeholder="Отчество"
                    type="text"
                    {...methods.register('middle_name', {
                      required: false,
                      maxLength: {
                        value: 55,
                        message: 'Не больше 55 символов',
                      },
                      pattern: {
                        value: onlyCyrillicAndSpacesRegex,
                        message: 'Допускается только кириллица, пробел и тире',
                      },
                    })}
                  />
                  <ErrorMessage
                    errors={methods.formState.errors}
                    name="middle_name"
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

              <fieldset className={cn(styles.fieldset, styles.fieldset__other)}>
                <label htmlFor="status" className={styles.label_wrapper}>
                  <span className={cn(styles.label, [methods.formState.errors.status && styles.error])}>
                    Ваша должность
                  </span>
                  <Select
                    selected={selectedPost || null}
                    options={posts}
                    placeholder="Статус"
                    onChange={handleSelectPost}
                    name={'status'}
                    mode='rows'
                    isError={methods.formState.errors.status ? true : false}
                  />
                  <ErrorMessage
                    errors={methods.formState.errors}
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
                  <span className={cn(styles.label, [methods.formState.errors.city && styles.error])}>Город</span>
                  <Select
                    selected={selectedCity || null}
                    options={cities}
                    placeholder="Город"
                    onChange={handleSelectCity}
                    name="city"
                    mode="cells"
                    isError={methods.formState.errors.city ? true : false}
                  />
                  <ErrorMessage
                    errors={methods.formState.errors}
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
                <label htmlFor="school" className={styles.label_wrapper}>
                  <span className={cn(styles.label, [methods.formState.errors.school && styles.error])}>
                    Номер школы
                  </span>
                  <input
                    className={cn(styles.input, [methods.formState.errors.school && styles.error])}
                    id="school"
                    tabIndex={0}
                    type="text"
                    {...methods.register('school', {
                      required: 'Обязательное поле',
                      pattern: {
                        value: addressRegexp,
                        message: 'Недопустимые символы',
                      },
                      maxLength: {
                        value: 100,
                        message: 'Не больше 100 символов',
                      },
                    })}
                  />
                  <ErrorMessage
                    errors={methods.formState.errors}
                    name="school"
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
                <label htmlFor="adress" className={styles.label_wrapper}>
                  <span className={cn(styles.label, [methods.formState.errors.adress && styles.error])}>
                    Адрес школы
                  </span>
                  <input
                    className={cn(styles.input, [methods.formState.errors.adress && styles.error])}
                    id="adress"
                    tabIndex={0}
                    type="text"
                    {...methods.register('adress', {
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
                    })}
                  />
                  <ErrorMessage
                    errors={methods.formState.errors}
                    name="adress"
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

              <fieldset className={cn(styles.fieldset, styles.fieldset__contacts)}>
                <legend
                  className={cn(styles.fieldset_caption, [
                    (methods.formState.errors.phone_number || methods.formState.errors.email) && styles.error,
                  ])}
                >
                  Контактные данные
                </legend>
                <label className={styles.label_wrapper} htmlFor="phone_number">
                  <span className="visually-hidden">Телефон</span>
                  <input
                    className={cn(styles.input, [methods.formState.errors.phone_number && styles.error])}
                    id="phone_number"
                    tabIndex={0}
                    type="phone"
                    placeholder="Телефон"
                    {...methods.register('phone_number', {
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
                    })}
                  />
                  <ErrorMessage
                    errors={methods.formState.errors}
                    name="phone_number"
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
                <label className={styles.label_wrapper} htmlFor="email">
                  <span className="visually-hidden">Email</span>
                  <input
                    className={cn(styles.input, [methods.formState.errors.email && styles.error])}
                    id="email"
                    tabIndex={0}
                    type="email"
                    placeholder="Email"
                    {...methods.register('email', {
                      required: 'Обязательное поле',
                      pattern: {
                        value: emailRegex,
                        message: 'Введите валидный email',
                      },
                    })}
                  />
                  <ErrorMessage
                    errors={methods.formState.errors}
                    name="email"
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

              <fieldset className={cn(styles.fieldset, styles.fieldset__agreements)}>
                <label htmlFor="personal" className={styles.checkbox}>
                  <input
                    id="personal"
                    className={'visually-hidden'}
                    type="checkbox"
                    {...methods.register('personal', {
                      required: 'Обязательное поле',
                    })}
                  />
                  <ErrorMessage
                    errors={methods.formState.errors}
                    name="personal"
                    render={({ messages }) =>
                      messages &&
                      Object.entries(messages).map(([type, message]) => (
                        <span className={styles.message} key={type}>
                          {message}
                        </span>
                      ))
                    }
                  />
                  <span
                    className={cn(styles.custom_checkbox, methods.formState.errors.personal && styles.error)}
                  ></span>
                  <span className={styles.checkbox__text}>
                    Согласен с обработкой {' '}
                    <a href={docs?.participation} target="_blank">
                      персональных данных
                    </a>
                  </span>
                </label>
                <label htmlFor="policy" className={styles.checkbox}>
                  <input
                    id="policy"
                    className={'visually-hidden'}
                    type="checkbox"
                    {...methods.register('policy', {
                      required: 'Обязательное поле',
                    })}
                  />
                  <ErrorMessage
                    errors={methods.formState.errors}
                    name="policy"
                    render={({ messages }) =>
                      messages &&
                      Object.entries(messages).map(([type, message]) => (
                        <span className={styles.message} key={type}>
                          {message}
                        </span>
                      ))
                    }
                  />
                  <span className={cn(styles.custom_checkbox, methods.formState.errors.policy && styles.error)}></span>
                  <span className={styles.checkbox__text}>
                    Согласен с {' '}
                    <a href={docs?.policy} target="_blank">
                      политикой конфиденциальности
                    </a>
                  </span>
                </label>
              </fieldset>

              <button className={styles.submit_btn} type="submit">
                Отправить
              </button>
            </form>
          </FormProvider>
        </>
      ) : (
        <Success />
      )}
    </>
  );
};
