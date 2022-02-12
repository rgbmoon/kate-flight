import { Fade } from '@mui/material'
import React, { FC, useEffect, useState } from 'react'
import { AlbumResponse, ItemsEntity } from '../../types/typesPortfolio'
import { FailMessage } from '../FailMessage'
import { Preloader } from '../Preloader'
import styles from './styles.module.scss'


const Portfolio:FC = () => {

  const [albumData, setAlbumData] = useState<ItemsEntity[]>([])
  const [totalPhotos, setTotalPhotos] = useState(0)
  const [fetching, setFetching] = useState(true)
  const [fetchFailed, setFetchFailed] = useState(false)
  const [offset, setOffset] = useState(0)

  const photosPerRequest = 9

  const fetchData = () => {
    fetch(`/.netlify/functions/vkPortfolio?count=${photosPerRequest}&offset=${offset}`)
      .then(response => {
        if (!response.ok) {
          setFetching(false)
          setFetchFailed(true)
          throw new Error(response.status.toString())
        }
        return response.json()
      })
      .then((data: AlbumResponse) => {
        setAlbumData([...albumData, ...data.response.items as ItemsEntity[]])
        setTotalPhotos(data.response.count)
        setOffset(offset + photosPerRequest)
      })
      .catch(error => console.error('fetch fail:', error.message))
      .finally(() => setFetching(false))
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const scrollHandler = (e: any) => {
    if((e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) &&
    albumData.length <= totalPhotos) {
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
      <div className={styles.porfolio}>
        {albumData.map((photo, i) => {
          return (
            <Fade in timeout={1000} key={i}>
              <div className={styles.item}>
                <img
                  srcSet={
                    `${photo?.sizes ? photo.sizes[0].url : ''} ${photo?.sizes ? photo.sizes[0]?.width : ''}w,
                    ${photo?.sizes ? photo.sizes[1].url : ''} ${photo?.sizes ? photo.sizes[1]?.width : ''}w,
                    ${photo?.sizes ? photo.sizes[2].url : ''} ${photo?.sizes ? photo.sizes[2]?.width : ''}w,
                    ${photo?.sizes ? photo.sizes[3].url : ''} ${photo?.sizes ? photo.sizes[3]?.width : ''}w,
                    ${photo?.sizes ? photo.sizes[4].url : ''} ${photo?.sizes ? photo.sizes[4]?.width : ''}w,
                    ${photo?.sizes ? photo.sizes[5].url : ''} ${photo?.sizes ? photo.sizes[5]?.width : ''}w,
                    ${photo?.sizes ? photo.sizes[6].url : ''} ${photo?.sizes ? photo.sizes[6]?.width : ''}w,
                    ${photo?.sizes ? photo.sizes[7].url : ''} ${photo?.sizes ? photo.sizes[7]?.width : ''}w,
                    ${photo?.sizes ? photo.sizes[8].url : ''} ${photo?.sizes ? photo.sizes[8]?.width : ''}w,`
                  }
                  src={photo?.sizes ? photo?.sizes[8]?.url : ''}
                  alt="Kate Flight Portfolio"
                  loading="lazy"
                />
              </div>
            </Fade>
          )
        })}
      </div>
      {fetching ? <Preloader /> : null}
      {fetchFailed ? <FailMessage /> : null}
    </>
  )
}

export { Portfolio }
