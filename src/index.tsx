import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Wall from './components/Wall'
import Portfolio from './components/Portfolio'
import Price from './components/Price'
import Contacts from './components/Contacts'


// TODO Сделать нормальную 404 и редиректы
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="/main" element={<Wall />} />
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

