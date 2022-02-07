import styles from './App.module.css'
import ModalText from './ModalText'
import MyTabs from './Tabs'
import { Outlet } from "react-router-dom"

/*
TODO 
В целом по сайту осталось:

2) Мета теги по страницам. 
3) Заюзать MUI для иконок. Навернуть всяких красивых транзишнов.
4) Отрефакторить приложение. 

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
