import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PantallaDivisor } from '../../src/presentation/PantallaDivisor.jsx'
import { redondeoExacto } from '../../src/data/redondeoExacto.js'
import { redondeoHaciaArriba } from '../../src/data/redondeoHaciaArriba.js'
const estrategias = { exacto: redondeoExacto, arriba: redondeoHaciaArriba }
function llenar(monto, personas, propina = '0') { fireEvent.change(screen.getByLabelText('Monto total'), { target: { value: monto } }); fireEvent.change(screen.getByLabelText('Número de personas'), { target: { value: personas } }); fireEvent.change(screen.getByLabelText('Propina'), { target: { value: propina } }); fireEvent.click(screen.getByText('Calcular')) }
describe('PantallaDivisor', () => { it('muestra exacto', () => { render(<PantallaDivisor estrategias={estrategias} />); llenar('100', '4', '10'); expect(screen.getByRole('status')).toHaveTextContent('27.50') }); it('muestra arriba', () => { render(<PantallaDivisor estrategias={estrategias} />); fireEvent.change(screen.getByLabelText('Modo de redondeo'), { target: { value: 'arriba' } }); llenar('10', '3'); expect(screen.getByRole('status')).toHaveTextContent('4.00') }); it('oculta resultado ante error', () => { render(<PantallaDivisor estrategias={estrategias} />); llenar('10', '3'); llenar('abc', '3'); expect(screen.getByRole('alert')).toHaveTextContent('Monto inválido'); expect(screen.queryByRole('status')).not.toBeInTheDocument() }) })
