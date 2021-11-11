import React from 'react'
import Linkify from 'react-linkify'
import styles from './WallPost.module.css'
import Slider from "@farbenmeer/react-spring-slider"

interface wallPostProps {
  src: string
  text: string
}

function WallPost(props: wallPostProps) {

  return (
    <div className={styles.wallPost}>
      {/* <Slider hasBullets hasArrows>
        <div></div>
        <div><img src={props.src} className={styles.wallImg} alt="" /></div>
        <div><img src={props.src} className={styles.wallImg} alt="" /></div>
      </Slider> 
      
      Стартуем отсюда

      */} 
      <img src={props.src} className={styles.wallImg} alt="" />
      <p><Linkify>{props.text}</Linkify></p>
    </div>
  )
}

export default WallPost
