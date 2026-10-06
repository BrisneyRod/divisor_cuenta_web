import { expect, it } from 'vitest'
import { redondeoExacto } from '../../src/data/redondeoExacto.js'
import { redondeoHaciaArriba } from '../../src/data/redondeoHaciaArriba.js'
it('redondea exacto y hacia arriba', () => { expect(redondeoExacto.aplicar(3.333)).toBe(3.33); expect(redondeoHaciaArriba.aplicar(3.33)).toBe(4) })
