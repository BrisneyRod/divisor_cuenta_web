import { useState } from 'react'
import { formatearMoneda } from './formateadorMoneda.js'
import { useDivisor } from './useDivisor.js'

export function PantallaDivisor({ estrategias }) {
  const [monto, setMonto] = useState(''); const [personas, setPersonas] = useState(''); const [propina, setPropina] = useState('0')
  const { resultado, error, modo, cambiarModo, calcular } = useDivisor({ estrategias })
  function enviar(evento) { evento.preventDefault(); calcular(monto, personas, propina) }
  return <main className="contenedor"><h1>Divisor de cuenta</h1><p>Calcula cuánto paga cada persona.</p><form onSubmit={enviar}>
    <label>Monto total<input aria-label="Monto total" value={monto} onChange={(e) => setMonto(e.target.value)} /></label>
    <label>Número de personas<input aria-label="Número de personas" value={personas} onChange={(e) => setPersonas(e.target.value)} /></label>
    <label>Propina (%)<input aria-label="Propina" value={propina} onChange={(e) => setPropina(e.target.value)} /></label>
    <label>Modo<select aria-label="Modo de redondeo" value={modo} onChange={(e) => cambiarModo(e.target.value)}><option value="exacto">Exacto</option><option value="arriba">Hacia arriba</option></select></label>
    <button type="submit">Calcular</button></form>{error && <p role="alert">{error}</p>}{resultado && <p role="status">Cada persona paga: {formatearMoneda(resultado.pagoPorPersona)}</p>}</main>
}
