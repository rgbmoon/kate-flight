import React, { useState, useEffect, FC } from 'react'
import { AttachmentsEntity, ItemsEntity, WallResponse } from '../../types/typesWall'
import { FailMessage } from '../FailMessage'
import { Preloader } from '../Preloader'
import { WallPost } from './components/WallPost'
import styles from './styles.module.scss'

// TODO: Заглушки, если нет фото в посте
// TODO: Поправить сетку карточек постов на десктопе. Пока что местами криво при подгрузке данных.

const Wall:FC = () => {

  const [wallData, setWallData] = useState<ItemsEntity[]>([])
  const [totalPosts, setTotalPosts] = useState(0)
  const [fetching, setFetching] = useState(true)
  const [fetchFailed, setFetchFailed] = useState(false)
  const [offset, setOffset] = useState(0)

  const postsPerRequest = 6

  const fetchData = () => {
    fetch(`/.netlify/functions/vkWall?count=${postsPerRequest}&offset=${offset}`)
      .then(response => {
        if (!response.ok) {
          setFetchFailed(true)
          throw new Error(response.status.toString())
        }
        return response.json()
      })
      .then((data: WallResponse) => {
        setWallData([...wallData, ...data.response.items as ItemsEntity[]])
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
  
  }, [fetching])

  return (
    <>
      <div className={styles.wall}>
        {wallData.map((data) => {
          return (
            <WallPost
              key={data.id}
              src={data.attachments as AttachmentsEntity[]}
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

export { Wall }
