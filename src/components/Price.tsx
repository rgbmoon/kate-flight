import React from 'react';
import styles from './Price.module.css';

function Price() {

  return (
    <div className={styles.wrapper}>
      <div className={styles.block}>
        <div className={styles.titleWrapper}>
          <div className={styles.title}>
            Фотосет
          </div>
          <div className={styles.price}>
            12 000 руб.
          </div>
        </div>
        <p className={styles.text}>Привет, меня зовут Катерина. Рада видеть вас в своем уютном уголке интернета. Я занимаюсь индивидуальными фотосессиями в Петербурге уже более 6 лет. Бесконечно вдохновляюсь людьми и их уникальной красотой.</p>
      </div>
      <div className={styles.block}>
        <div className={styles.titleWrapper}>
          <div className={styles.title}>
            Фотосет
          </div>
          <div className={styles.price}>
            12 000 руб.
          </div>
        </div>
        <p className={styles.text}>Привет, меня зовут Катерина. Рада видеть вас в своем уютном уголке интернета. Я занимаюсь индивидуальными фотосессиями в Петербурге уже более 6 лет. Бесконечно вдохновляюсь людьми и их уникальной красотой.</p>
      </div>
    </div>
  );
}

export default Price;
