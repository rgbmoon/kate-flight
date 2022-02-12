import styles from './styles.module.scss'
import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../Header'

/*
TODO 
В целом по сайту осталось:


1) Какое то адовое количество запросов, если запрашваиешь данные без интернета. 
Надо поправить Wall и на Portfolio. (Нужен какой нибуль debounce для запроса).
Баг заметил только на десктопе. Достаточно редкий кейс, мб и не критично, но лучше фиксануть.
2) Мета теги по страницам.(Next JS)
3) Оформить компонент Portfolio красиво на десктопе и на мобиле, например как ImageList mui

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
