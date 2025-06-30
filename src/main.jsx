import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Formulario } from './Components/Formulario'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Formulario/>
  </StrictMode>,
)
