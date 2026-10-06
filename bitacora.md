# Bitácora de migración Flutter a React

## Reglas de medición

La solicitud inicial de cada etapa no cuenta como iteración. Una iteración es
un mensaje posterior que pide una corrección o cambio. El tiempo total de
desarrollo no se registró desde el primer prompt de planificación hasta que
los seis casos quedaron en verde; por eso se reporta como **no registrado**.

## Artefactos y métricas

| Métrica | Flutter | React |
|---|---:|---:|
| Iteraciones observadas | no registrado | no registrado |
| Casos de aceptación | 6/6 | 6/6 |
| Pruebas automatizadas | 23 | 18 |
| Archivos de código principales | 11 Dart | 13 JavaScript/JSX |
| Tiempo total hasta los seis casos | no registrado | no registrado |
| Tiempo de la orden `vitest run test/division.test.js` | no aplica | 3.08 s |

El tiempo de 3.08 segundos corresponde solo a la ejecución del runner, no al
tiempo de desarrollo. No se usa como criterio único para comparar enfoques.

## Spec

La spec Flutter está en `../participacion_semana7_sdd_run/specs/001-dividir-cuenta/spec.md`.
La copia React está en `specs/001-dividir-cuenta/spec.md`. La comparación
`git diff --no-index` terminó con `DIFF_EXIT=0` y salida vacía.

Se analizaron 33 enunciados: 33 QUÉ, 0 MIXTOS y 0 CÓMO. No se modificó ningún
enunciado de la spec.

## Constitution

La constitución Flutter conserva cinco familias de principios: SOLID, capas,
seguridad, pruebas y explicabilidad. La constitución React conserva esas ideas.
Se adaptaron rutas (`lib` a `src`), imports (`package:flutter` a React/DOM),
composición (`main.dart` a `src/main.jsx`) y comandos de calidad. No se agregó
una librería de estado ni una regla sin equivalente.

## Plan

El diff de los planes tuvo 33 enunciados modificados y 124 líneas físicas
afectadas (33 agregadas y 91 eliminadas según `git diff --stat`). Cambiaron las
decisiones de implementación Flutter por React, Vite, JavaScript, `useState`,
Vitest, jsdom, `src/` y `main.jsx`.

## Pruebas finales

- `npx vitest run test/division.test.js`: 7 pruebas pasan; contiene los seis
  casos y la prueba LSP.
- `npm test`: 6 archivos y 18 pruebas pasan.
- `npm run build`: compilación Vite correcta.
- `npm run lint`: sin errores.
- `src/domain/` no importa React ni DOM.
