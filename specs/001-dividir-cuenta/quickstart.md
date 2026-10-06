# Quickstart: validar el divisor web

```powershell
npm install
npm run build
npm run test
npm run dev
```

Casos: `100/4/10` exacto -> `27.50`; `90/3/0` -> `30.00`; `10/3/0` ->
`3.33`; el mismo caso hacia arriba -> `4.00`; cero personas -> error sin
resultado; monto `abc` -> `Monto inválido` sin resultado.
