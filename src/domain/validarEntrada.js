import { crearCuenta } from './cuenta.js'

export function validarEntrada(montoTexto, personasTexto, propinaTexto) {
  const monto = Number(montoTexto)
  const personas = Number(personasTexto)
  const propina = Number(propinaTexto)
  if (montoTexto.trim() === '' || !Number.isFinite(monto)) return { error: 'Monto inválido' }
  if (personasTexto.trim() === '' || !Number.isInteger(personas) || personas < 1) return { error: 'Debe haber al menos una persona' }
  if (propinaTexto.trim() === '' || !Number.isFinite(propina)) return { error: 'Propina inválida' }
  if (monto < 0 || personas < 0 || propina < 0) return { error: 'Los valores no pueden ser negativos' }
  return { cuenta: crearCuenta(monto, personas, propina) }
}
