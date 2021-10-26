import React from 'react';
import styles from './App.module.css';
import Menu from './Menu';
import Wall from './Wall';

function App() {

  const apiVer = process.env.REACT_APP_VK_API_VER;
  const apiKey = process.env.REACT_APP_VK_SERVICE_KEY;
  const ownerID = process.env.REACT_APP_VK_OWNER_ID;

  const apiUrl = `/method/wall.get?owner_id=-${ownerID}&count=1&access_token=${apiKey}&v=${apiVer}`;

  // fetch(apiUrl,{
  //   method: 'GET'
  //   })
  // .then(res => res.json())
  // .then(
  //     (result) => {
  //       handleData(result);
  //     },
  //     (error) => {
  //         console.log("Ошибка при получении данных...")
  //     }
  // )

  function handleData(data: object) {
    console.log('ШЫШ', data);
  }

  return (
    <div className={ styles.app }>
      <div className={ styles.container }>
        <h1 className={ styles.title }>Kate Flight</h1>
        <div className={ styles.modalText }> 
          {/* TODO: Сделапть модалку с приветственным текстом при первом посещении сайта. */}
          <p>Привет, меня зовут Катерина. Рада видеть вас в своем уютном уголке интернета. <br/> 
          Я занимаюсь индивидуальными фотосессиями в Петербурге уже более 5 лет. Бесконечно вдохновляюсь людьми и их уникальной красотой.<br />
          Ниже можно подробно ознакомиться с моим творчеством, условиями съемок и прочей полезной информацией.
          </p>
        </div>

        <Menu />

        <Wall />

      </div>
    </div>
  );
}

export default App;

