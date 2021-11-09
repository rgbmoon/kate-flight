import React from 'react'
import styles from './Wall.module.css'

function Wall() {

  fetch('/.netlify/functions/vk', {
    method: 'GET'
  })
    .then(res => res.json())
    .then(
      (result) => {
        console.log('ответ', result)
      },
      (error) => {
        console.log("Ошибка при получении данных...", error)
      }
    )

  return (
    <div className={styles.wall}>
      <div className={styles.wallPost}>1</div>
      <div className={styles.wallPost}>2</div>
      <div className={styles.wallPost}>1</div>
      <div className={styles.wallPost}>2</div>
    </div>
  )
}

export default Wall
