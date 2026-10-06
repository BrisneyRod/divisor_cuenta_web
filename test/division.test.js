import { describe, expect, it } from 'vitest'
import { casos } from './casosDePrueba.js'
import { validarEntrada } from '../src/domain/validarEntrada.js'
import { calcularDivision } from '../src/domain/calcularDivision.js'
import { redondeoExacto } from '../src/data/redondeoExacto.js'
import { redondeoHaciaArriba } from '../src/data/redondeoHaciaArriba.js'

const estrategias = { exacto: redondeoExacto, arriba: redondeoHaciaArriba }

describe('casos de aceptación de la especificación', () => {
  for (const caso of casos) {
    it(caso.nombre, () => {
      const validacion = validarEntrada(String(caso.monto), String(caso.personas), String(caso.propina))

      if (caso.errorEsperado) {
        expect(validacion.error).toBe(caso.errorEsperado)
        expect(validacion.cuenta).toBeUndefined()
        return
      }

      expect(validacion.error).toBeUndefined()
      const resultado = calcularDivision(validacion.cuenta, estrategias[caso.modo])
      expect(resultado.pagoPorPersona).toBeCloseTo(caso.esperado, 2)
    })
  }
})

it('demuestra LSP con ambas estrategias de redondeo', () => {
  const cuenta = { montoTotal: 10, numeroPersonas: 3, porcentajePropina: 0 }
  const exacto = calcularDivision(cuenta, redondeoExacto)
  const haciaArriba = calcularDivision(cuenta, redondeoHaciaArriba)

  expect(exacto.pagoPorPersona).toBeCloseTo(3.33, 2)
  expect(haciaArriba.pagoPorPersona).toBe(4)
})
