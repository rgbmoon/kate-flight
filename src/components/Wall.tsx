import React, { useState, useEffect } from 'react'
import styles from './Wall.module.css'
import WallPost from './WallPost'
import { ItemsEntity, WallResponse } from '../types/typesWall'
import { Preloader } from './Utils'

// TODO: Сделать проверку на пустой массив. Сделать проверку на конец записей
// TODO: Заглушки, если нет фото в посте
// TODO: Поправить сетку карточек постов. Пока что местами криво при подгрузке данных.

function Wall() {

  const [wallData, setWallData] = useState<ItemsEntity[]>([])
  const [totalPosts, setTotalPosts] = useState(0)
  const [fetching, setFetching] = useState(true)
  // const [fetchFailed, setFetchFailed] = useState(false)
  const [offset, setOffset] = useState(0)

  const postsPerRequest = 5

  useEffect(() => {
    if (fetching) {
      fetch(`/.netlify/functions/vkWall?count=${postsPerRequest}&offset=${offset}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status.toString());
        }
        return response.json()
      })
      .then((data: WallResponse) => {
        setTotalPosts(data.response.count)
        setWallData([...wallData, ...data.response.items!])
        setOffset(offset + postsPerRequest)
      })
      .catch(error => console.error('fetch fail:', error.message))
      .finally(() => setFetching(false))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetching])

  const scrollHandler = (e: any) => {
    if((e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) && wallData.length < 20) {
      setFetching(true)
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
    return function() {
      document.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  return (
    <>
      <div className={styles.wall}>
        {wallData.map((data) => {
          return (
            <WallPost
              key={data.id}
              src={data.attachments!}
              text={data.text}
            />
          )
        })}
      </div>
      {fetching ? <Preloader /> : null}
      {/* {fetchFailed ? <FailMessage /> : null} */}
    </>
  )
}

export default Wall
