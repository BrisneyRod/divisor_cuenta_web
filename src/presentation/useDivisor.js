import { useState } from 'react'
import { validarEntrada } from '../domain/validarEntrada.js'
import { calcularDivision } from '../domain/calcularDivision.js'

export function useDivisor({ validador = validarEntrada, calculador = calcularDivision, estrategias }) {
  const [resultado, setResultado] = useState(null)
  const [error, setError] = useState('')
  const [modo, setModo] = useState('exacto')
  function calcular(monto, personas, propina) {
    setResultado(null)
    const validacion = validador(monto, personas, propina)
    if (validacion.error) { setError(validacion.error); return }
    setError(''); setResultado(calculador(validacion.cuenta, estrategias[modo]))
  }
  return { resultado, error, modo, cambiarModo: setModo, calcular }
}
