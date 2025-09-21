import React from 'react'
import ReactDOM from 'react-dom/client';
import { SpeedInsights } from "@vercel/speed-insights/next"
import App from './App.jsx'
import './index.css'   // <- यह बहुत जरूरी है

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <SpeedInsights />
  </React.StrictMode>,
)
