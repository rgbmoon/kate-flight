import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import reportWebVitals from './reportWebVitals'
import Wall from './components/Wall'
import Portfolio from './components/Portfolio'
import Price from './components/Price'
import Contacts from './components/Contacts'

const firebaseConfig = {
  apiKey: "AIzaSyDs9E0SqZainnUf8b3plOmI4jOtJaAj2ZU",
  authDomain: "kate-flight.firebaseapp.com",
  projectId: "kate-flight",
  storageBucket: "kate-flight.appspot.com",
  messagingSenderId: "618138148923",
  appId: "1:618138148923:web:176caa0af00371d34bbc1e",
  measurementId: "G-N7QG067VHY"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

// TODO Сделать нормальную 404 и редиректы
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="/news" element={<Wall />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/price" element={<Price />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
        <Route
          path="*"
          element={<App />} // TODO Скорее всего так делать не стоит, надо прописать нормальные человеческие роуты позже.
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
