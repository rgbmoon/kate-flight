import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Wall from './components/Wall'
import Portfolio from './components/Portfolio'
import Price from './components/Price'
import Contacts from './components/Contacts'



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/home" />}
        />
        <Route path="/" element={<App />} >
          <Route path="/home" element={<Wall />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/price" element={<Price />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
        <Route
          path="*"
          element={<Navigate to="/home" />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

