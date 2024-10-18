import styles from './contacts.module.css';

// TODO: фон блока нужно выставить норм (по PixelPerfect)
// TODO: разобраться со стилем шрифта - italic

export const Contacts = () => {
  return (
    <section className={styles.contacts}>
      <h2 className={styles.contacts_title}>
        Меняй мир вместе с 
        <span>&nbsp;СИБУРом
          <img width={63} height={37.8} src="./contacts-title-decor.svg" alt="" />
        </span>
      </h2>
      <ul className={styles.contacts_list}>
        <li className={styles.contacts_item}>
          <img className={styles.contacts_icon} src="./contacts-tg-icon.svg" alt="" />
          <a className={styles.contacts_link} href="#0" target='blank'>СИБУР в TG</a>
        </li>
        <li className={styles.contacts_item}>
          <img className={styles.contacts_icon} src="./contacts-tg-icon.svg" alt="" />
          <a className={styles.contacts_link} href="#0">Менделеевская смена в TG</a>
        </li>
        <li className={styles.contacts_item}>
          <img className={styles.contacts_icon} src="./contacts-tg-icon.svg" alt="" />
          <a className={styles.contacts_link} href="#0">Дом полимеров</a>
        </li>
        <li className={styles.contacts_item}>
          <img className={styles.contacts_icon} src="./contacts-vk-icon.svg" alt="" />
          <a className={styles.contacts_link} href="#0">СИБУР в VK</a>
        </li>
      </ul>
    </section>
  );
};