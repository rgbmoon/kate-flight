import { Fade } from '@mui/material'
import React, { FC } from 'react'
import styles from './styles.module.scss'

const Price:FC = () => {

  return (
    <Fade in timeout={1000}>
      <div className={styles.wrapper}>
        <div className={styles.block}>
          <div className={styles.titleWrapper}>
            <div className={styles.title}>
            Фотосет индивидуальный
            </div>
            <div className={styles.price}>
            от 9 000 руб.
            </div>
          </div>
          <p className={styles.text}>Подробные условия в моей группе ВК и в личных сообщениях.</p>
        </div>
        <div className={styles.block}>
          <div className={styles.titleWrapper}>
            <div className={styles.title}>
            Фотосет групповой
            </div>
            <div className={styles.price}>
            от 12 000 руб.
            </div>
          </div>
          <p className={styles.text}>Подробные условия в моей группе ВК и в личных сообщениях.</p>
        </div>
      </div>
    </Fade>
  )
}

export { Price }
