import styles from './styles.module.scss'
import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Fade } from '@mui/material'
import { ModalText } from '../ModalText'
import { Tabs } from '../Tabs'

/*
TODO 
В целом по сайту осталось:

2) Мета теги по страницам.
3) Отрефакторить компоненты.
4) Отрефакторить стили(Миксин для брейкпоинтов, переменные для цветов и шрифтов.)
5) Фикс шапка(телефон точно и мб десктоп).

*/

const App:FC = () => {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Fade in timeout={2000}>
            <h1 className={styles.title}>
              kate <span className={styles.color}>flight</span>
            </h1>
          </Fade>
          
          <ModalText />

          <Tabs />

          <Outlet />

        </div>
      </div>
    </div>
  )
}

export { App } 
