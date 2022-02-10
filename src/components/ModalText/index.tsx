import React, { FC } from 'react'
import { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import Collapse from '@mui/material/Collapse'
import CloseIcon from '@mui/icons-material/Close'


/* Можно заменить sessionStorage на LocalStorage, если потребуется, 
методы у них одинаковые */

const ModalText:FC = () => {
  const getLocalStorageOrDefault = (key: string, defaultValue: boolean) => {
    const stored = localStorage.getItem(key)
    if (!stored) {
      return defaultValue
    }
    return JSON.parse(stored)
  }

  const [isHide, setHide] = useState(
    getLocalStorageOrDefault('hide', false)
  )

  const onClose = () => {
    setHide(!isHide)
  }

  useEffect(() => {
    localStorage.setItem('hide', JSON.stringify(isHide))
  }, [isHide])

  return (
    <div>
      <Collapse in={!isHide} collapsedSize={0}>
        <div className={styles.modalText}>
          <p className={styles.text}>
              Привет, меня зовут Катерина. Рада видеть вас в своей галерее.<br /><br />
              Я занимаюсь индивидуальными фотосессиями в Петербурге уже более 6 лет. Бесконечно вдохновляюсь людьми и их уникальной красотой. <br /><br />
              Ниже можно подробно ознакомиться с моим творчеством, условиями съемок и прочей полезной информацией.
          </p>
          <span className={styles.close} onClick={onClose} >
            <CloseIcon className={styles.close}/>
          </span>
        </div>
      </Collapse>
    </div>
  )
}

export { ModalText }
