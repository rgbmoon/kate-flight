import React from 'react'
import Linkify from 'react-linkify'
import styles from './WallPost.module.css'
import Slider from "@farbenmeer/react-spring-slider"

interface wallPostProps {
  src: string
  text: string
}

interface BulletComponentProps {
  onClick(...args: unknown[]): unknown;
  isActive: boolean;
}

interface ArrowComponentProps {
  onClick(...args: unknown[]): unknown;
  direction: string;
}

const BulletComponent = ({
  onClick,
  isActive
}: BulletComponentProps) => (
  <li
    className={styles.bullet}
    style={{ backgroundColor: isActive ? "#4D4D4D" : "#fff" }}
    onClick={onClick}
  />
);

const ArrowComponent = ({
  onClick,
  direction
}: ArrowComponentProps) => {
  return (
    <div
      className={styles.arrow}
      style={{
        transform: (direction === 'left') ?
          "rotate(45deg)" : "rotate(225deg)",
      }}
      onClick={onClick}
    >
    </div>
  );
};

function WallPost(props: wallPostProps) {

  return (
    <>
    <div className={styles.wallPost}>
      <div className={styles.slider}>
        {/* TODO Подтянуть все фото с поста в слайдер
                  сделать через Picture */}
        <Slider
          hasBullets
          hasArrows
          BulletComponent={BulletComponent}
          ArrowComponent={ArrowComponent}
        >
          <div><img src={props.src} className={styles.wallImg} alt="" /></div>
          <div><img src={props.src} className={styles.wallImg} alt="" /></div>
          <div><img src={props.src} className={styles.wallImg} alt="" /></div>
        </Slider>
      </div>
      <p><Linkify>{props.text}</Linkify></p>
    </div>
    <div className={styles.after}></div>
    </>
  )
}

export default WallPost
