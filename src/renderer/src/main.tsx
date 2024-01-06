import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/index.css'
import { NTProvider } from 'ntcore-react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {import.meta.env.RENDERER_VITE_NT === "DEVELOPMENT" && <NTProvider uri="127.0.0.1" port={5810}>
      <App />
    </NTProvider>}
    {import.meta.env.RENDERER_VITE_NT !== "DEVELOPMENT" && <NTProvider uri={`roborio-${import.meta.env.RENDERER_VITE_NT}-frc.local`}>
      <App />
    </NTProvider>}
  </React.StrictMode>,
)