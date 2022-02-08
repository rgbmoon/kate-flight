import React, { useState, useEffect } from 'react'
import styles from './Wall.module.css'
import WallPost from './WallPost'
import { ItemsEntity, WallResponse } from '../types/typesWall'
import { FailMessage, Preloader } from './Utils'

// TODO: Заглушки, если нет фото в посте
// TODO: Поправить сетку карточек постов на десктопе. Пока что местами криво при подгрузке данных.

function Wall() {

  const [wallData, setWallData] = useState<ItemsEntity[]>([])
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [totalPosts, setTotalPosts] = useState(0)
  const [fetching, setFetching] = useState(true)
  const [fetchFailed, setFetchFailed] = useState(false)
  const [offset, setOffset] = useState(0)

  const postsPerRequest = 5

  const fetchData = () => {
    fetch(`/.netlify/functions/vkWall?count=${postsPerRequest}&offset=${offset}`)
      .then(response => {
        if (!response.ok) {
          setFetchFailed(true)
          throw new Error(response.status.toString());
        }
        return response.json()
      })
      .then((data: WallResponse) => {
        setWallData([...wallData, ...data.response.items!])
        setTotalPosts(data.response.count)
        setOffset(offset + postsPerRequest)
      })
      .catch(error => console.error('fetch fail:', error.message))
      .finally(() => setFetching(false))
  }

  const scrollHandler = (e: any) => {
    if((e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) &&
      wallData.length < totalPosts) {
      setFetching(true)
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
    return function() {
      document.removeEventListener('scroll', scrollHandler)
    }
  })

  useEffect(() => {
    if (fetching) {
      fetchData()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetching])

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
      {fetchFailed ? <FailMessage /> : null}
    </>
  )
}

export default Wall
