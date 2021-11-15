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

      const items = await data.response.items.map((elem: Item) => {
        return elem.sizes[4].url
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
    //TODO Сделать выгрузку фоток через srcset или picture
    <div className={styles.porfolio}>
      {albumData.map((elem, i) => {
        return (<div className={styles.item} key={i}>
          <img src={elem.toString()} alt=""/>
        </div>)
      })}
    </div>
  );
}

export default Portfolio;
