import React from 'react'
import styles from './ModalText.module.css'


function ModalText() {

  const [isHide, setHide] = React.useState(false)

  const onClose = () => {
    setHide(!isHide)
    console.log(isHide)
  }

  return (
    <div
      className={isHide ? `${styles.modalText} ${styles.modalTextClosed}` : styles.modalText} 
      onClick={isHide ? onClose : undefined}>

      <p className={isHide ? `${styles.textHidden} ${styles.text}` : styles.text}>Привет, меня зовут Катерина. Рада видеть вас в своем уютном уголке интернета.
        Я занимаюсь индивидуальными фотосессиями в Петербурге уже более 6 лет. Бесконечно вдохновляюсь людьми и их уникальной красотой.<br /><br />
        Ниже можно подробно ознакомиться с моим творчеством, условиями съемок и прочей полезной информацией.
      </p>
      <span
        className={isHide ? `${styles.close} ${styles.open}` : styles.close}
        onClick={onClose}></span>
        
    </div>
  )
}

export default ModalText
