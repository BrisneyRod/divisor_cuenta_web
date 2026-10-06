import { crearResultado } from './resultado.js'
import { validarEstrategia } from './estrategiaRedondeo.js'

export function calcularDivision(cuenta, estrategia) {
  validarEstrategia(estrategia)
  const total = cuenta.montoTotal * (1 + cuenta.porcentajePropina / 100)
  return crearResultado(estrategia.aplicar(total / cuenta.numeroPersonas))
}
