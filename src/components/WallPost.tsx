import React from 'react'
import Linkify from 'react-linkify'
import styles from './WallPost.module.css'
import Slider from "@farbenmeer/react-spring-slider"
import { Attachment } from '../types/typesWall'

interface wallPostProps {
  src: Attachment[]
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
          {/* TODO На мобиле плохо листаются фотки из-за слайдера, нужно отключить 
          перелистывание по касанию, либо другой слайдер взять */}
          <Slider
            hasBullets
            hasArrows
            BulletComponent={BulletComponent}
            ArrowComponent={ArrowComponent}
          >
            {props.src.map((photo, key) => {
              return (
                <div key={key}>
                  {/* TODO Потестить src set */}
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
                    sizes={
                      `(max-width: ${photo.sizes[0].width}px) ${photo.sizes[0].width},
                  (max-width: ${photo.sizes[1].width}px) ${photo.sizes[1].width}px,
                  (max-width: ${photo.sizes[2].width}px) ${photo.sizes[2].width}px,
                  (max-width: ${photo.sizes[3].width}px) ${photo.sizes[3].width}px,
                  (max-width: ${photo.sizes[4].width}px) ${photo.sizes[4].width}px,
                  (max-width: ${photo.sizes[5].width}px) ${photo.sizes[5].width}px,
                  (max-width: ${photo.sizes[6].width}px) ${photo.sizes[6].width}px,
                  (max-width: ${photo.sizes[7].width}px) ${photo.sizes[7].width}px,
                  (max-width: ${photo.sizes[8].width}px) ${photo.sizes[8].width}px,`}
                    src={photo.sizes[8].url}
                    className={styles.wallImg}
                    alt=""
                    loading="lazy"
                  />
                </div>
              )
            })}

          </Slider>
        </div>
        <p><Linkify>{props.text}</Linkify></p>
      </div>
      <div className={styles.after}></div>
    </>
  )
}

export default WallPost
