import { describe, expect, it } from 'vitest'
import { calcularDivision } from '../../src/domain/calcularDivision.js'
import { redondeoExacto } from '../../src/data/redondeoExacto.js'
describe('calcularDivision', () => { it.each([[100, 4, 10, 27.5], [90, 3, 0, 30], [10, 3, 0, 3.33]])('calcula', (monto, personas, propina, esperado) => { expect(calcularDivision({ montoTotal: monto, numeroPersonas: personas, porcentajePropina: propina }, redondeoExacto).pagoPorPersona).toBe(esperado) }) })
