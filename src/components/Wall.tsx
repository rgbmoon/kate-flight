import React, { useState, useEffect } from 'react'
import styles from './Wall.module.css'
import WallPost from './WallPost'
import { Item } from '../types/typesWall'
import { Preloader, FailMessage } from './Utils'


function Wall() {

  const [wallData, setWallData] = useState<Item[]>([])
  const [preload, setPreload] = useState(true)
  const [fetchFailed, setFetchFailed] = useState(false)

  const fetchData = async () => {

    try {
      const response = await fetch('/.netlify/functions/vkWall')

      if (!response.ok) {
        setFetchFailed(true)
        return
      }

      const data = await response.json()

      const items = await data.response.items.map(({ attachments, text }: Item, key: any) => {
        return {
          attachments: attachments.map(photo => {
            return photo.photo
          }),
          text: text,
        }
      })

      setWallData(items)
      setPreload(false)
    }

    catch (error: any) {
      setFetchFailed(true)
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
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
      {preload ? <Preloader /> : null}
      {fetchFailed ? <FailMessage /> : null}
    </>
  )
}

export default Wall
