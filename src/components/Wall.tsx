import React, { useState, useEffect } from 'react'
import styles from './Wall.module.css'
import WallPost from './WallPost'
import { Item } from '../types/typesWall'

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

      const items = await data.response.items.map(({ attachments, text }: Item, key: any) => {
        return {
          attachments: attachments.map(photo => {
            return photo.photo //TODO Не уверен, что это правильный парсинг JSON, узнать как сделать все по уму
          }),
          text: text,
        }
      })

      setWallData(items)
    }

    catch (error: any) {
      console.error('Ошибка получения данных', error.message)
      //TODO не забыть сделать заглущку для страницы
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className={styles.wall}>
      {wallData.map((data, key) => {
        return (
          <WallPost
            key={key}
            src={data.attachments}
            text={data.text}
          />
        )
      })}
    </div>
  )
}

export default Wall
