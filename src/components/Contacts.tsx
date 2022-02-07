import React from 'react';
import styles from './Contacts.module.css';

function Contacts() {

  return (
    <div className={styles.wrapper}>
      <div className={styles.block}>
        <div className={styles.titleWrapper}>
          <div className={styles.title}>
            Обо мне
          </div>
        </div>
        <p className={styles.text}>Галерея неопределенности ожидает посетителей</p>
      </div>
    </div>
  );
}

export default Contacts;
