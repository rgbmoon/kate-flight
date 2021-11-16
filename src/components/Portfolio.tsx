import React, { useEffect, useState } from 'react';
import styles from './Portfolio.module.css';
import { Item } from '../types/typesPortfolio'




function Portfolio() {

  const [albumData, setAlbumData] = useState<Item[]>([])

  const fetchData = async () => {

    try {
      const response = await fetch('/.netlify/functions/vkPortfolio')

      if (!response.ok) {
        console.error('Ошибка получения данных', response.status)
        return
      }

      const data = await response.json()

      const items = await data.response.items.map((elem: Item[]) => {
        return elem
      })

      setAlbumData(items)
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
    //TODO однажды сверстать это дело красиво для десктопа, на манер ImageList mui
    <div className={styles.porfolio}>
      {albumData.map((photo, i) => {
        return (<div className={styles.item} key={i}>
          <img
            srcSet={
              `${photo.sizes[0].url} ${photo.sizes[0].width}w,
              ${photo.sizes[1].url} ${photo.sizes[1].width}w,
              ${photo.sizes[2].url} ${photo.sizes[2].width}w,
              ${photo.sizes[3].url} ${photo.sizes[3].width}w,
              ${photo.sizes[4].url} ${photo.sizes[4].width}w,
              ${photo.sizes[5].url} ${photo.sizes[5].width}w,
              ${photo.sizes[6].url} ${photo.sizes[6].width}w,
              ${photo.sizes[7].url} ${photo.sizes[7].width}w,
              ${photo.sizes[8].url} ${photo.sizes[8].width}w,
              ${photo.sizes[9].url} ${photo.sizes[9].width}w,`
            }
            sizes={
              `(max-width: ${photo.sizes[0].width}px) ${photo.sizes[0].width}px,
              (max-width: ${photo.sizes[1].width}px) ${photo.sizes[1].width}px,
              (max-width: ${photo.sizes[2].width}px) ${photo.sizes[2].width}px,
              (max-width: ${photo.sizes[3].width}px) ${photo.sizes[3].width}px,
              (max-width: ${photo.sizes[4].width}px) ${photo.sizes[4].width}px,
              (max-width: ${photo.sizes[5].width}px) ${photo.sizes[5].width}px,
              (max-width: ${photo.sizes[6].width}px) ${photo.sizes[6].width}px,
              (max-width: ${photo.sizes[7].width}px) ${photo.sizes[7].width}px,
              (max-width: ${photo.sizes[8].width}px) ${photo.sizes[8].width}px,
              (max-width: ${photo.sizes[9].width}px) ${photo.sizes[9].width}px,`
            }
            src={photo.sizes[4].url}
            alt="Портфолио"
            loading="lazy"
          />
        </div>)
      })}
    </div>
  );
}

export default Portfolio;
