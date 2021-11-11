import React, { useState, useEffect } from 'react'
import Linkify from 'react-linkify'
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

      const items = await data.response.items.map(({ attachments, text }: Item) => {
        return {
          attachments: attachments[0].photo.sizes[attachments[0].photo.sizes.length - 1].url,
          text: text
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

  // console.log(wallData)
  return (
    <div className={styles.wall}>
      {wallData.map((data, key) => {
        return (
          <WallPost
            key={key}
            src={data.attachments.toString()}
            text={data.text}
          />
        )
      })}
    </div>
  )
}

export default Wall
