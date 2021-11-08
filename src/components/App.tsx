import styles from './App.module.css'
import Footer from './Footer'
import ModalText from './ModalText'
import Tabs from './Tabs'

function App() {

  const url = '/.netlify/functions/vk'

  fetch(url, {
    method: 'GET'
  })
    .then(res => res.json())
    .then(
      (result) => {
        console.log('ШЫШ', result)
      },
      (error) => {
        console.log("Ошибка при получении данных...", error)
      }
    )


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
    </div>
  )
}

export default App

