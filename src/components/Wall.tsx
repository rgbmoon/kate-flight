import React, { useState, useEffect } from 'react'
import styles from './Wall.module.css'
import WallPost from './WallPost'
import { Item } from '../types/typesWall'
import Stack from '@mui/material/Stack'
import CircularProgress from '@mui/material/CircularProgress'

const Preloader = () => {
  return (
    <Stack
      sx={{
        justifyContent: 'center',
        marginTop: '20vh',
      }}
      spacing={4}
      direction="row">
      <CircularProgress style={{'color': '#ff8d8b'}} />
    </Stack>
  );
}

function Wall() {

  const [wallData, setWallData] = useState<Item[]>([])
  const [preload, setPreload] = useState(true)

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
            return photo.photo
          }),
          text: text,
        }
      })

      setWallData(items)
      setPreload(false)
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
    </>
  )
}

export default Wall
