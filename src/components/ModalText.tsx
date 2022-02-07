import React from 'react'
import { useState, useEffect } from 'react'
import styles from './ModalText.module.css'
import Collapse from '@mui/material/Collapse'


/* Можно заменить sessionStorage на LocalStorage, если потребуется, 
методы у них одинаковые */
function getLocalStorageOrDefault(key: string, defaultValue: boolean) {
  const stored = localStorage.getItem(key)
  if (!stored) {
    return defaultValue
  }
  return JSON.parse(stored)
}

function ModalText() {

  const [isHide, setHide] = useState(
    getLocalStorageOrDefault('hide', false)
  )

  useEffect(() => {
    localStorage.setItem('hide', JSON.stringify(isHide))
  }, [isHide])

  const onClose = () => {
    setHide(!isHide)
  }

  return (
      <Collapse in={!isHide} collapsedSize={0}>
        <div
          className={isHide ? `${styles.modalText} ${styles.modalTextClosed}` : styles.modalText}
          onClick={isHide ? onClose : undefined}>
          
            <p className={isHide ? `${styles.textHidden} ${styles.text}` : styles.text}>Привет, меня зовут Катерина. Рада видеть вас в своей галерее.<br /><br />
              Я занимаюсь индивидуальными фотосессиями в Петербурге уже более 6 лет. Бесконечно вдохновляюсь людьми и их уникальной красотой. <br /><br />
              Ниже можно подробно ознакомиться с моим творчеством, условиями съемок и прочей полезной информацией.
            </p>
          
          <span
            className={isHide ? `${styles.close} ${styles.open}` : styles.close}
            onClick={onClose} />
        </div>
      </Collapse>
  )
}

export default ModalText
