import styles from './styles.module.scss'
import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Fade } from '@mui/material'
import { ModalText } from '../ModalText'
import { Tabs } from '../Tabs'

/*
TODO 
В целом по сайту осталось:

1) Мета теги по страницам.
2) Фикс шапка(телефон точно и мб десктоп).
3) Что нибудь стилевое придумать по оформлению, чтобы быстро работало и цепляло взгляд.

*/

const App:FC = () => {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Fade in timeout={2000}>
            <div className={styles.header}>
              <h1 className={styles.title}>
                kate <span className={styles.color}>flight</span>
              </h1>
              <ModalText />
              <Tabs />
            </div>
          </Fade>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export { App } 
