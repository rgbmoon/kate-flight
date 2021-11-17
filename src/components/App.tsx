import styles from './App.module.css'
import ModalText from './ModalText'
import MyTabs from './Tabs'
import { Outlet } from "react-router-dom"

/*
TODO 
В целом по сайту осталось:
1) Ленивая загрузка данных
2) Подумать, как хранить фото так, чтобы не запрашивать их каждый раз с сервера

3) Совсем на потом: придумать реализацию мета тегов
*/

function App() {

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            kate <span className={styles.color}>flight</span>
          </h1>

          <ModalText />

          <MyTabs />

          <Outlet />

        </div>
      </div>
    </div>
  )
}

export default App

