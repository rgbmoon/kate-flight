import { Fade } from '@mui/material'
import React, { FC } from 'react'
import styles from './styles.module.scss'

const Contacts:FC = () => {

  return (
    <Fade in timeout={1000}>
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
    </Fade>
  )
}

export { Contacts }
