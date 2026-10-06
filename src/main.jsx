import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PantallaDivisor } from './presentation/PantallaDivisor.jsx'
import { redondeoExacto } from './data/redondeoExacto.js'
import { redondeoHaciaArriba } from './data/redondeoHaciaArriba.js'
import './index.css'

createRoot(document.getElementById('root')).render(<StrictMode><PantallaDivisor estrategias={{ exacto: redondeoExacto, arriba: redondeoHaciaArriba }} /></StrictMode>)
