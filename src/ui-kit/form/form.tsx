'use client'

import { SubmitHandler, useForm, FormProvider } from 'react-hook-form';
import styles from './form.module.css';
import cn from 'classnames';
import { useContext, useState } from 'react';
import { Success } from '../success/success';
import { LevelContext } from '@/src/context/context';
import { Select } from '../select/select';
import { ErrorMessage } from "@hookform/error-message";


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
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   setValue,
  //   reset,
  //   formState: { errors },
  // } = useForm<Inputs>({criteriaMode: "all"});
  const methods  = useForm<Inputs>({criteriaMode: "all"});

  const { isSuccess, setSuccess } = useContext(LevelContext);

  // const postName = methods.register("post", { 
  //   required: "Обязательное поле",
  //   pattern: {
  //     value: /[A-я]/,
  //     message: "Только буквы",
  //   },
  //   maxLength: {
  //     value: 20,
  //     message: "Не больше 15 символов",
  //   },
  //   minLength: {
  //     value: 2,
  //     message: "Не меньше 2 символов",
  //   },
  // });
  
  // const cityName = methods.register("city", { 
  //   required: "Обязательное поле",
  //   pattern: {
  //     value: /[A-я]/,
  //     message: "Только буквы",
  //   },
  //   maxLength: {
  //     value: 20,
  //     message: "Не больше 15 символов",
  //   },
  //   minLength: {
  //     value: 2,
  //     message: "Не меньше 2 символов",
  //   },
  // });
  

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setSuccess(true);
    methods.reset();
    console.log(data)
  }
  
  const [selectPost, setSelectPost] = useState('');
  const [selectCity, setSelectCity] = useState('');

  const handleSelectPost = (value: string) => {
    setSelectPost(value);
    methods.setValue("post", value);
  };
  const handleSelectCity = (value: string) => {
    setSelectCity(value);
    methods.setValue("city", value);
  };
  
  const selectedPost = posts.find((item) => item.value === selectPost);
  const selectedCity = cities.find((item) => item.value === selectCity);
  


  return (
    <>
      {!isSuccess ? 
        <>
        <FormProvider {...methods}>
          <div className={styles.form_header}>
            <h2 className={styles.form_title}>Менделеевская смена в вашей школе!</h2>
            <p className={styles.form_description}>Оставьте заявку на проведение урока от СИБУРа в период с&nbsp;ноября&nbsp;2024 по май 2025 года.</p>
          </div>
          <form action="" className={styles.form} onSubmit={methods.handleSubmit(onSubmit)}>

            <fieldset className={cn(styles.fieldset, styles.fieldset__fullname)}>
              <legend className={styles.fieldset_caption}>ФИО</legend>
              <label htmlFor='firstname' className={styles.label_wrapper}>
                <input className={cn(styles.input, [methods.formState.errors.firstname && styles.error])} id='firstname' type="text" placeholder='Имя' {...methods.register("firstname", { 
                  required: "Обязательное поле",
                  pattern: {
                    value: /[а-яa-z]/gi,
                    message: "Только буквы",
                  },
                  maxLength: {
                    value: 15,
                    message: "Не больше 15 символов",
                  },
                  minLength: {
                    value: 2,
                    message: "Не меньше 2 символов",
                  },
                })}/>
                <ErrorMessage
                  errors={methods.formState.errors}
                  name="firstname"
                  render={({ messages }) =>
                    messages &&
                    Object.entries(messages).map(([type, message]) => (
                      <span className={styles.message} key={type}>{message}</span>
                    ))
                  }
                />
              </label>
              <label htmlFor="lastname" className={styles.label_wrapper}>
                <input className={cn(styles.input, [methods.formState.errors.lastname && styles.error])} id='lastname' type="text" placeholder='Фамилия' {...methods.register("lastname", { 
                  required: "Обязательное поле",
                  pattern: {
                    value: /[а-яa-z]/gi,
                    message: "Только буквы",
                  },
                  maxLength: {
                    value: 15,
                    message: "Не больше 15 символов",
                  },
                  minLength: {
                    value: 2,
                    message: "Не меньше 2 символов",
                  },
                })}/>
                <ErrorMessage
                  errors={methods.formState.errors}
                  name="lastname"
                  render={({ messages }) =>
                    messages &&
                    Object.entries(messages).map(([type, message]) => (
                      <span className={styles.message} key={type}>{message}</span>
                    ))
                  }
                />
              </label>
              <label htmlFor="patronymic" className={styles.label_wrapper}>
                <input className={cn(styles.input, [methods.formState.errors.patronymic && styles.error])} id='patronymic' placeholder='Отчество' type="text" {...methods.register("patronymic")}/>
                <ErrorMessage
                  errors={methods.formState.errors}
                  name="patronymic"
                  render={({ messages }) =>
                    messages &&
                    Object.entries(messages).map(([type, message]) => (
                      <span className={styles.message} key={type}>{message}</span>
                    ))
                  }
                />
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
                  name={'post'}
                  isError={methods.formState.errors.post ? true : false}
                />
                <ErrorMessage
                  errors={methods.formState.errors}
                  name="post"
                  render={({ messages }) =>
                    messages &&
                    Object.entries(messages).map(([type, message]) => (
                      <span className={styles.message} key={type}>{message}</span>
                    ))
                  }
                />
              </label>

              <label htmlFor="city" className={styles.label_wrapper}>
                <span className={styles.label}>Город</span>
                <Select 
                  selected={selectedCity || null}
                  options={cities} 
                  placeholder='Город' 
                  onChange={handleSelectCity}
                  name='city'
                  mode='cells'
                  isError={methods.formState.errors.city ? true : false}
                />
                <ErrorMessage
                  errors={methods.formState.errors}
                  name="city"
                  render={({ messages }) =>
                    messages &&
                    Object.entries(messages).map(([type, message]) => (
                      <span className={styles.message} key={type}>{message}</span>
                    ))
                  }
                />
              </label>
            </fieldset>

            <fieldset className={cn(styles.fieldset, styles.fieldset__school)}>
              <label htmlFor="number" className={styles.label_wrapper}>
                <span className={styles.label}>Номер школы</span>
                <input className={cn(styles.input, [methods.formState.errors.number && styles.error])} id='number' type="text" {...methods.register("number", { 
                  required: "Обязательное поле",
                  pattern: {
                    value: /\d/,
                    message: "Только цифры",
                  },
                  maxLength: {
                    value: 8,
                    message: "Не больше 8 символов",
                  }
                })}/>
                <ErrorMessage
                  errors={methods.formState.errors}
                  name="number"
                  render={({ messages }) =>
                    messages &&
                    Object.entries(messages).map(([type, message]) => (
                      <span className={styles.message} key={type}>{message}</span>
                    ))
                  }
                />
              </label>
              <label htmlFor="address" className={styles.label_wrapper}>
                <span className={styles.label}>Адрес школы</span>
                <input className={cn(styles.input, [methods.formState.errors.address && styles.error])} id='address' type="text" {...methods.register("address", { 
                  required: "Обязательное поле",
                  maxLength: {
                    value: 50,
                    message: "Не больше 50 символов",
                  },
                  minLength: {
                    value: 5,
                    message: "Не меньше 5 символов",
                  },
                })}/>
                <ErrorMessage
                  errors={methods.formState.errors}
                  name="address"
                  render={({ messages }) =>
                    messages &&
                    Object.entries(messages).map(([type, message]) => (
                      <span className={styles.message} key={type}>{message}</span>
                    ))
                  }
                />
              </label>
            </fieldset>

            <fieldset className={cn(styles.fieldset, styles.fieldset__contacts)}>
              <legend className={styles.fieldset_caption}>Контактные данные</legend>
              <label className={styles.label_wrapper} htmlFor="phone">
                <span className='visually-hidden'>Телефон</span>
                <input className={cn(styles.input, [methods.formState.errors.phone && styles.error])} id='phone' type="phone" placeholder='Телефон' {...methods.register("phone", { 
                  required: "Обязательное поле",
                  pattern: {
                    value: /\d/,
                    message: "Только цифры",
                  },
                  maxLength: {
                    value: 12,
                    message: "Не больше 12 символов",
                  },
                  minLength: {
                    value: 11,
                    message: "Не меньше 11 символов",
                  },
                })}/>
                <ErrorMessage
                  errors={methods.formState.errors}
                  name="phone"
                  render={({ messages }) =>
                    messages &&
                    Object.entries(messages).map(([type, message]) => (
                      <span className={styles.message} key={type}>{message}</span>
                    ))
                  }
                />
              </label>
              <label className={styles.label_wrapper} htmlFor="email">
                <span className='visually-hidden'>Email</span>
                <input className={cn(styles.input, [methods.formState.errors.email && styles.error])} id='email' type="email" placeholder='Email' {...methods.register("email", { 
                  required: "Обязательное поле"
                })}/>
                <ErrorMessage
                  errors={methods.formState.errors}
                  name="email"
                  render={({ messages }) =>
                    messages &&
                    Object.entries(messages).map(([type, message]) => (
                      <span className={styles.message} key={type}>{message}</span>
                    ))
                  }
                />
              </label>
            </fieldset>

            
            <fieldset className={cn(styles.fieldset, styles.fieldset__agreements)}>
              <label htmlFor="personal">
                <input id='personal' className={'visually-hidden'} type="checkbox" {...methods.register("personal", { 
                  required: "Обязательное поле",
                })}/>
                <ErrorMessage
                  errors={methods.formState.errors}
                  name="personal"
                  render={({ messages }) =>
                    messages &&
                    Object.entries(messages).map(([type, message]) => (
                      <span className={styles.message} key={type}>{message}</span>
                    ))
                  }
                />
                <span className={cn(styles.custom_checkbox, methods.formState.errors.personal && styles.error)}></span>
                Согласен с обработкой&nbsp;
                <a href='./personal.pdf' target='blank'>персональных данных</a>
                
              </label>
              <label htmlFor="policy">
                <input id='policy' className={'visually-hidden'} type="checkbox" {...methods.register("policy", { 
                  required: "Обязательное поле",
                })}/>
                <ErrorMessage
                  errors={methods.formState.errors}
                  name="policy"
                  render={({ messages }) =>
                    messages &&
                    Object.entries(messages).map(([type, message]) => (
                      <span className={styles.message} key={type}>{message}</span>
                    ))
                  }
                />
                <span className={cn(styles.custom_checkbox, methods.formState.errors.policy && styles.error)}></span>
                Согласен с&nbsp;
                <a href='./policy.pdf' target='blank'>политикой конфиденциальности</a>
                
              </label>
                
            </fieldset>

            <button className={styles.submit_btn} type='submit'>Отправить</button>
          </form>
          </FormProvider>
        </>
        
        : <Success />
      }
    </>
  );
};