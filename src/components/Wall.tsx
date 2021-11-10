import React, { useState, useEffect } from 'react'
import Linkify from 'react-linkify'
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
      const items = await data.response.items.map(({ attachments, text }: Item) => {
        return {
          attachments: attachments[0].photo.sizes[attachments[0].photo.sizes.length - 1].url,
          text: text
        }
      })

      setWallData(items)
    } catch (error: any) {
      console.error('Ошибка получения данных', error.message)
      //TODO не забыть сделать заглущку для страницы
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  console.log(wallData)
  return (
      <div className={styles.wall}>
        {wallData.map((data, key) => {
          return (
            <div key={key} className={styles.wallPost}>
              <img src={data.attachments.toString()} className={styles.wallImg} alt=""/>
              <p><Linkify>{data.text}</Linkify></p>
            </div>)
        })}
      </div>
  )
}

export default Wall
