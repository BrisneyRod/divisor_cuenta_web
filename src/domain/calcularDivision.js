import { crearResultado } from './resultado.js'

export function calcularDivision(cuenta, estrategia) {
  const total = cuenta.montoTotal * (1 + cuenta.porcentajePropina / 100)
  return crearResultado(estrategia.aplicar(total / cuenta.numeroPersonas))
}
