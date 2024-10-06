import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ProveedorAuth } from './components/contexto/ContextoAuth.jsx'
import { ProveedorTarjetas } from './components/contexto/TarjetasContexto.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProveedorTarjetas>
      <ProveedorAuth>
        <App />
      </ProveedorAuth>
    </ProveedorTarjetas>
  </StrictMode>,
)
