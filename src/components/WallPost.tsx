import React from 'react'
import Linkify from 'react-linkify'
import styles from './WallPost.module.css'
import { Attachment } from '../types/typesWall'
import SwipeableViews from 'react-swipeable-views';
interface wallPostProps {
  src: Attachment[]
  text: string
}

function WallPost(props: wallPostProps) {
  return (
    <>
      <div className={styles.wallPost}>
        <div className={styles.slider}>
          {/* TODO На мобиле плохо листаются фотки из-за слайдера, нужно отключить 
          перелистывание по касанию, либо другой слайдер взять */}
          <SwipeableViews
          hysteresis={0.6} // Сила, с которой нужно свайпать
          enableMouseEvents
          resistance
          >
            {props.src.map((photo, key) => {
              return (
                <div key={key}>
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
                      ${photo.sizes[8].url} ${photo.sizes[8].width}w,`
                    }
                    src={photo.sizes[8].url}
                    className={styles.wallImg}
                    alt="Последние события"
                    loading="lazy"
                  />
                </div>
              )
            })}
          </SwipeableViews>
        </div>
        <p><Linkify>{props.text}</Linkify></p>
      </div>
      <div className={styles.after}></div>
    </>
  )
}

export default WallPost
