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
        return elem.sizes[8].url
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

  console.log(albumData)

  return (
    <div className={styles.portfolio}>
      {albumData.map((elem, i) => {
        return (<div className={styles.item} key={i}>
          <img src={elem.toString()} alt=""/>
        </div>)
      })}
    </div>
  );
}

export default Portfolio;
