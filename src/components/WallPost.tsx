import React, { useState } from 'react'
import Linkify from 'react-linkify'
import styles from './WallPost.module.css'
import { Attachment } from '../types/typesWall'
import SwipeableViews from 'react-swipeable-views';
interface wallPostProps {
  src: Attachment[]
  text: string
}

/* TODO сделать стрелки и буллеты */
function WallPost(props: wallPostProps) {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = props.src.length

  const handleNext = () => {
    if (activeStep < maxSteps - 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }
  }

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }
  }

  const handleStepChange = (step: number) => {
    setActiveStep(step)
  }

  return (
    <>
      <div className={styles.wallPost}>
        <div className={styles.slider}>
          <SwipeableViews
            hysteresis={0.6} // Сила, с которой нужно тянуть слайд для свайпа
            enableMouseEvents
            resistance
            index={activeStep}
            onChangeIndex={handleStepChange}
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
          <div className={styles.arrows}>
            <div
              onClick={handleBack}
              className={`
                ${styles.arrow} 
                ${styles.arrowLeft} 
                ${activeStep === 0 ? styles.disabled : null}
              `}
            ></div>
            <div
              onClick={handleNext}
              className={`
                ${styles.arrow} 
                ${styles.arrowRight}
                ${activeStep === maxSteps - 1 ? styles.disabled : null}
              `}
            ></div>
          </div>
        </div>
        <p><Linkify>{props.text}</Linkify></p>
      </div>
      <div className={styles.after}></div>
    </>
  )
}

export default WallPost
