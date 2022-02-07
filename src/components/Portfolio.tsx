import React, { useEffect, useState } from 'react';
import styles from './Portfolio.module.css';
import { Item } from '../types/typesPortfolio'
import { Preloader, FailMessage } from './Utils'


function Portfolio() {

  const [albumData, setAlbumData] = useState<Item[]>([])
  const [preload, setPreload] = useState(true)
  const [fetchFailed, setFetchFailed] = useState(false)

  const fetchData = async () => {

    try {
      const response = await fetch('/.netlify/functions/vkPortfolio')

      if (!response.ok) {
        setFetchFailed(true)
        return
      }

      const data = await response.json()

      const items = await data.response.items.map((elem: Item[]) => {
        return elem
      })

      setAlbumData(items)
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
    //TODO Оформить компонент красиво на десктопе, например как ImageList mui
    <>
      <div className={styles.porfolio}>
        {albumData.map((photo, i) => {
          return (<div className={styles.item} key={i}>
            <img
              srcSet={
                `${photo.sizes[0]?.url} ${photo.sizes[0]?.width}w,
              ${photo.sizes[1]?.url} ${photo.sizes[1]?.width}w,
              ${photo.sizes[2]?.url} ${photo.sizes[2]?.width}w,
              ${photo.sizes[3]?.url} ${photo.sizes[3]?.width}w,
              ${photo.sizes[4]?.url} ${photo.sizes[4]?.width}w,
              ${photo.sizes[5]?.url} ${photo.sizes[5]?.width}w,
              ${photo.sizes[6]?.url} ${photo.sizes[6]?.width}w,
              ${photo.sizes[7]?.url} ${photo.sizes[7]?.width}w,
              ${photo.sizes[8]?.url} ${photo.sizes[8]?.width}w,
              ${photo.sizes[9]?.url} ${photo.sizes[9]?.width}w,`
              }
              src={photo.sizes[4]?.url}
              alt="Портфолио"
              loading="lazy"
            />
          </div>)
        })}
      </div>
      {preload ? <Preloader /> : null}
      {fetchFailed ? <FailMessage /> : null}
    </>
  );
}

export default Portfolio;
