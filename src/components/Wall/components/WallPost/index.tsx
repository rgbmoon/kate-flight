import React, { FC, useState } from 'react'
import Linkify from 'react-linkify'
import styles from './styles.module.scss'
import SwipeableViews from 'react-swipeable-views'
import { Fade } from '@mui/material'
import { AttachmentsEntity } from '../../../../types/typesWall'
import cn from 'classnames'

interface wallPostProps {
  src: AttachmentsEntity[]
  text: string
}

// TODO: пофиксить отступ у текста не мобиле
const WallPost:FC<wallPostProps> = ({src, text}) => {
  const [activeStep, setActiveStep] = useState(0)
  const maxSteps = src?.length

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
      <Fade in timeout={1000}>
        <div className={styles.container}>
          <div className={styles.wallPost}>
            <div className={styles.slider}>

              <SwipeableViews
                hysteresis={0.6} // Сила, с которой нужно тянуть слайд для свайпа
                enableMouseEvents
                resistance
                index={activeStep}
                onChangeIndex={handleStepChange}
              >
                {src?.map(({ photo }, key) => {

                  return (
                    <div key={key}>
                      {photo && (
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
                          className={styles.wallImg}
                          alt="Последние события"
                          loading="lazy"
                        />
                      )}
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
                />
                <div
                  onClick={handleNext}
                  className={`
                ${styles.arrow} 
                ${styles.arrowRight}
                ${activeStep === maxSteps - 1 ? styles.disabled : null}
              `}
                />
              </div>

              <div className={styles.bullets}>
                {src?.map((pos, key) => (
                  <div
                    key={key}
                    className={cn(styles.bullet, {[styles.active]: key === activeStep})}
                  />
                ))}
              </div>

            </div>

            <p><Linkify>{text}</Linkify></p>

          </div>
          <div className={styles.after}></div>
        </div>
      </Fade>
    </>
  )
}

export { WallPost }
