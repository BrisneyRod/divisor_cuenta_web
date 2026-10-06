import { expect, it } from 'vitest'
import { validarEntrada } from '../../src/domain/validarEntrada.js'
it('valida errores de entrada', () => { expect(validarEntrada('50', '0', '0').error).toBe('Debe haber al menos una persona'); expect(validarEntrada('abc', '2', '0').error).toBe('Monto inválido'); expect(validarEntrada('-1', '2', '0').error).toBe('Los valores no pueden ser negativos') })
