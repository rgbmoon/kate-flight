import styles from './styles.module.scss'
import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../Header'

/*
TODO 
В целом по сайту осталось:

1) Мета теги по страницам.(Next JS)
2) доделать шапку(чтобы при смене таба каждый раз не выскакивал логотип)
3) Что нибудь стилевое придумать по оформлению, чтобы быстро работало и цепляло взгляд.
4) Какое то адовое количество запросов, если запрашваиешь данные без интернета. 
Надо поправить Wall и на Portfolio. (Нужен какой нибуль debounce для запроса)

*/

const App:FC = () => {

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export { App } 
