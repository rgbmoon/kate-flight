import React from 'react'
import { useState, useEffect } from 'react'
import styles from './ModalText.module.css'
import Collapse from '@mui/material/Collapse'


/* Можно заменить sessionStorage на LocalStorage, если потребуется, 
методы у них одинаковые */
function getSessionStorageOrDefault(key: string, defaultValue: boolean) {
  const stored = sessionStorage.getItem(key)
  if (!stored) {
    return defaultValue
  }
  return JSON.parse(stored)
}

function ModalText() {

  const [isHide, setHide] = useState(
    getSessionStorageOrDefault('hide', false)
  )

  useEffect(() => {
    sessionStorage.setItem('hide', JSON.stringify(isHide))
  }, [isHide])

  const onClose = () => {
    setHide(!isHide)
  }

  return (
    <div
      className={isHide ? `${styles.modalText} ${styles.modalTextClosed}` : styles.modalText}
      onClick={isHide ? onClose : undefined}>
      <Collapse in={!isHide} collapsedSize={20}>
        <p className={isHide ? `${styles.textHidden} ${styles.text}` : styles.text}>Привет, меня зовут Катерина. Рада видеть вас в своем уютном уголке интернета.
          Я занимаюсь индивидуальными фотосессиями в Петербурге уже более 6 лет. Бесконечно вдохновляюсь людьми и их уникальной красотой. <br /><br />
          Ниже можно подробно ознакомиться с моим творчеством, условиями съемок и прочей полезной информацией.
        </p>
      </Collapse>
      <span
        className={isHide ? `${styles.close} ${styles.open}` : styles.close}
        onClick={onClose}></span>

    </div>
  )
}

export default ModalText
