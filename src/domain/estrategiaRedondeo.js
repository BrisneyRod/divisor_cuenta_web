export function validarEstrategia(estrategia) {
  if (!estrategia || typeof estrategia.aplicar !== 'function') throw new Error('La estrategia debe implementar aplicar(valor)')
  return estrategia
}
