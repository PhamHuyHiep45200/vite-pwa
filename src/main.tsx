import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AssetLinks from './pages/AssetLinks.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={App} /> {/* 👈 Renders at /app/ */}
        <Route path="/.well-known/assetlinks.json" Component={AssetLinks} /> {/* 👈 Renders at /app/ */}
      </Routes>

    </BrowserRouter>
  </React.StrictMode>,
)
