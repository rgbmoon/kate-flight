import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { App } from './components/App/App'
import { Wall } from './components/Wall'
import { Portfolio } from './components/Portfolio'
import { Price } from './components/Price'
import { Contacts } from './components/Contacts'
import { StyledEngineProvider } from '@mui/material'



ReactDOM.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
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
    </StyledEngineProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
