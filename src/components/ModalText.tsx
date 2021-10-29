import React from 'react';
import styles from './ModalText.module.css';

function ModalText() {

  return (
    <div className={ styles.modalText }>
      <div className={ styles.modalTextInner }> 
        <p>Привет, меня зовут Катерина. Рада видеть вас в своем уютном уголке интернета. <br/> 
        Я занимаюсь индивидуальными фотосессиями в Петербурге уже более 5 лет. Бесконечно вдохновляюсь людьми и их уникальной красотой.<br />
        Ниже можно подробно ознакомиться с моим творчеством, условиями съемок и прочей полезной информацией.
        </p>
      </div>
      <span className={ styles.close }></span>
    </div>
  );
}

export default ModalText;
