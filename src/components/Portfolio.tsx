import { Fade } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { AlbumResponse, ItemsEntity } from '../types/typesPortfolio';
import styles from './Portfolio.module.css';
import { Preloader, FailMessage } from './Utils'


function Portfolio() {

  const [albumData, setAlbumData] = useState<ItemsEntity[]>([])
  const [totalPhotos, setTotalPhotos] = useState(0)
  const [fetching, setFetching] = useState(true)
  const [fetchFailed, setFetchFailed] = useState(false)
  const [offset, setOffset] = useState(0)

  const photosPerRequest = 5

  const fetchData = () => {
    fetch(`/.netlify/functions/vkPortfolio?count=${photosPerRequest}&offset=${offset}`)
      .then(response => {
        if (!response.ok) {
          setFetchFailed(true)
          throw new Error(response.status.toString());
        }
        return response.json()
      })
      .then((data: AlbumResponse) => {
        setAlbumData([...albumData, ...data.response.items!])
        console.log(data)
        setTotalPhotos(data.response.count)
        setOffset(offset + photosPerRequest)
      })
      .catch(error => console.error('fetch fail:', error.message))
      .finally(() => setFetching(false))
  }

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetching])

  return (
    //TODO Оформить компонент красиво на десктопе и на мобиле, например как ImageList mui
    <>
      <div className={styles.porfolio}>
        {albumData.map((photo, i) => {
          return (
            <Fade in timeout={1000}>
              <div className={styles.item} key={i}>
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
                  alt="Портфолио"
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
  );
}

export default Portfolio;
