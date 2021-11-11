import styles from './App.module.css'
import Footer from './Footer'
import ModalText from './ModalText'
import Tabs from './Tabs'
import { Outlet } from "react-router-dom"

function App() {

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Kate Flight</h1>

          <ModalText />

          <Tabs />
          
          <Outlet />

        </div>

        <Footer />

      </div>
    </div>
  )
}

export default App

