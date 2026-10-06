# Data model: Dividir cuenta web

## Cuenta

- `montoTotal`: número no negativo.
- `numeroPersonas`: entero mayor o igual que 1.
- `porcentajePropina`: número no negativo.

## Resultado

- `pagoPorPersona`: número mostrado con dos decimales.

## Estrategia de redondeo

Contrato funcional con `aplicar(valor)`. Exacta conserva el cociente a dos
decimales; hacia arriba usa el entero superior si hay decimales.

## Flujo

Texto -> validación -> Cuenta -> total con propina -> división -> redondeo ->
Resultado -> formato visible.
