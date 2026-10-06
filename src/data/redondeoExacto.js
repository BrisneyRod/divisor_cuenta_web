export const redondeoExacto = { aplicar(valor) { return Math.round((valor + Number.EPSILON) * 100) / 100 } }
