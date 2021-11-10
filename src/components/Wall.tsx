import React, { useState, useEffect } from 'react'
import styles from './Wall.module.css'
import { Item } from '../types/types'

function Wall() {
  const [wallData, setWallData] = useState<Item[]>([])

  const fetchData = async () => {
    try {
      const response = await fetch('/.netlify/functions/vkWall')
      
      if (!response.ok) {
        console.error('Ошибка получения данных', response.status)
        return
      }
      const data = await response.json()
      const items = await data.response.items

      setWallData(items)
    } catch (error: any) {
      console.error('Ошибка получения данных', error.message)
      //TODO не забыть сделать заглущку для страницы
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  console.log('стена прилетела', wallData)

  return (
    <>
      <div className={styles.wall}>
        {Object.keys(wallData)
          .map(key => {
            return (
              <div key={key} className={styles.wallPost}>
                {/* <img src={} /> */}
              </div>)
          })}
      </div>
    </>
  )
}

export default Wall
