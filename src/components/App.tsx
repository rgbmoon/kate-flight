import React from 'react'
import styles from './App.module.css'
import { Outlet } from 'react-router'
import Footer from './Footer'
import ModalText from './ModalText'
import Tabs from './Tabs'

function App() {

  // const apiVer = process.env.REACT_APP_VK_API_VER
  // const apiKey = process.env.REACT_APP_VK_SERVICE_KEY
  // const ownerID = process.env.REACT_APP_VK_OWNER_ID

  // const apiUrl = `/method/wall.get?owner_id=-${ownerID}&count=1&access_token=${apiKey}&v=${apiVer}`

  // fetch(apiUrl, {
  //   method: 'GET'
  // })
  //   .then(res => res.json())
  //   .then(
  //     (result) => {
  //       handleData(result)
  //     },
  //     (error) => {
  //       console.log("Ошибка при получении данных...")
  //     }
  //   )

  // function handleData(data: object) {
  //   console.log('ШЫШ', data)
  // }

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Kate Flight</h1>

          <ModalText />

          <Tabs />

        </div>

        <Footer />

      </div>
      <Outlet />
    </div>
  )
}

export default App

