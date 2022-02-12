import styles from './styles.module.scss'
import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../Header'

/*
TODO 
В целом по сайту осталось:

1) Мета теги по страницам.(Next JS)
2) Какое то адовое количество запросов, если запрашваиешь данные без интернета. 
Надо поправить Wall и на Portfolio. (Нужен какой нибуль debounce для запроса).
Баг заметил только на десктопе. Достаточно редкий кейс, мб и не критично, но лучше фиксануть.

3) Табы точно переделать на муи автоскролл, сейчас не очень хорошо переключаются

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
