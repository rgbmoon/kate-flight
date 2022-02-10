import React, { FC } from 'react'
import styles from './styles.module.scss'

const FailMessage:FC = () => {
  return (
    <div className={styles.fail}>
      <p>Произошла ошибка при загрузке данных.</p>
      <p><button onClick={() => window.location.reload()}>Попробуем</button> еще раз?</p>
    </div>
  )
}

export { FailMessage }
