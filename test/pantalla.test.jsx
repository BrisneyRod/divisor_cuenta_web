import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PantallaDivisor } from '../src/presentation/PantallaDivisor.jsx'
import { redondeoExacto } from '../src/data/redondeoExacto.js'
import { redondeoHaciaArriba } from '../src/data/redondeoHaciaArriba.js'

const estrategias = { exacto: redondeoExacto, arriba: redondeoHaciaArriba }

function ingresar(monto, personas, propina = '0') {
  fireEvent.change(screen.getByLabelText('Monto total'), { target: { value: monto } })
  fireEvent.change(screen.getByLabelText('Número de personas'), { target: { value: personas } })
  fireEvent.change(screen.getByLabelText('Propina'), { target: { value: propina } })
  fireEvent.click(screen.getByRole('button', { name: 'Calcular' }))
}

describe('pantalla del divisor', () => {
  it('muestra 27.50 para 100, 4 y 10%', () => {
    render(<PantallaDivisor estrategias={estrategias} />)
    ingresar('100', '4', '10')
    expect(screen.getByRole('status')).toHaveTextContent('27.50')
  })

  it('muestra error para cero personas y ningún resultado numérico', () => {
    render(<PantallaDivisor estrategias={estrategias} />)
    ingresar('50', '0')
    expect(screen.getByRole('alert')).toHaveTextContent('Debe haber al menos una persona')
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('muestra error para monto no numérico', () => {
    render(<PantallaDivisor estrategias={estrategias} />)
    ingresar('abc', '4')
    expect(screen.getByRole('alert')).toHaveTextContent('Monto inválido')
  })
})
