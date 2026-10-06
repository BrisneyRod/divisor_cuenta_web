# Bitácora final

## Criterio de medición

Inicio: primer prompt de planificación React de Parte 5. Fin: primera ejecución exitosa de los seis casos; primera compilación es un hito intermedio. Los mensajes de corrección tras el prompt inicial cuentan como iteraciones; las herramientas autónomas no cuentan. No se contaron de manera fiable los mensajes: no registrado. No se reinicia el contador por etapa.

| Métrica | Flutter | React |
|---|---|---|
| Tiempo desde inicio hasta seis casos | no registrado | no registrado |
| Tiempo a primera compilación | no registrado | no registrado |
| Iteraciones | no registrado | no registrado |
| Líneas escritas a mano por estudiante | no registrado | no registrado |
| Casos de aceptación | 6/6 | 6/6 |
| Pruebas | 23 | 18 |
| Archivos de aplicación | 11 Dart | 11 JS/JSX + 1 CSS |

Los 3.08 segundos registrados antes pertenecían solo a una ejecución del runner, no al desarrollo. No permiten comparar productividad. No se inventa tiempo retrospectivo.

## Portabilidad corregida

Spec: 36 unidades normativas únicas, todas QUÉ; 0 CÓMO y 0 MIXTO; 0 cambios textuales (100% intacta). El [análisis](analisis_spec.md) explica consolidación y trazabilidad.
Constitución: 39 reglas, 24 idénticas, 11 adaptadas, 4 reemplazadas.
Plan: 34 decisiones, 23 cambiadas, 10 conservadas, 1 omitida; [tabla](comparacion_plan.md). Diff físico: 33 líneas agregadas y 91 eliminadas; no es conteo de decisiones.

## Correcciones de auditoría

Se retiró la comprobación del contrato del cálculo para respetar SRP. El contrato aplicar(valor) queda documentado en dominio. Se recuperaron obligaciones de seguridad/explicabilidad omitidas al resumir la constitución. Se incorporó el análisis en React y se corrigieron conteos y enlaces. Vitest/jsdom/Testing Library son dependencias de desarrollo para el runner y las pruebas de UI; no hay gestor de estado externo.

## Límites honestos

No se registró el tiempo total. Parte 2 y 7.2 fueron escritas por el agente y requieren revisión personal del estudiante; no se contabilizan como líneas manuales. La revisión visual de navegador no pudo ejecutarse: el runtime no tenía navegadores disponibles. Las interacciones sí están verificadas por Testing Library. T027 queda pendiente como comprobación visual manual; no se declara realizada.

## Salidas de la última verificación

### React
```text
v24.19.0

 RUN  v5.0.3 C:/Users/brisn/Desktop/Nueva carpeta/divisor_cuenta_web

 ✓ test/division.test.js > casos de aceptación de la especificación > 1. reparto normal 2ms
 ✓ test/division.test.js > casos de aceptación de la especificación > 2. sin propina 0ms
 ✓ test/division.test.js > casos de aceptación de la especificación > 3. cero personas 0ms
 ✓ test/division.test.js > casos de aceptación de la especificación > 4. monto no numerico 0ms
 ✓ test/division.test.js > casos de aceptación de la especificación > 5. redondeo exacto 0ms
 ✓ test/division.test.js > casos de aceptación de la especificación > 6. redondeo hacia arriba 0ms
 ✓ test/division.test.js > demuestra LSP con ambas estrategias de redondeo 0ms

 Test Files  1 passed (1)
      Tests  7 passed (7)
   Start at  15:10:05
   Duration  1.97s (environment 78%, setup 14%, transform 6%, import 1%, worker 1%)


> divisor_cuenta_web@0.0.0 test
> vitest run


 RUN  v5.0.3 C:/Users/brisn/Desktop/Nueva carpeta/divisor_cuenta_web


 Test Files  6 passed (6)
      Tests  18 passed (18)
   Start at  15:10:09
   Duration  3.08s (environment 76%, setup 13%, tests 4%, transform 4%, import 2%, worker 1%)


> divisor_cuenta_web@0.0.0 lint
> oxlint


> divisor_cuenta_web@0.0.0 build
> vite build

vite v8.3.3 building client environment for production...
transforming...
✓ 24 modules transformed.
rendering chunks...
computing gzip size...
dist/index.html                   0.46 kB │ gzip:  0.30 kB
dist/assets/index-BqOqfGhe.css    0.64 kB │ gzip:  0.37 kB
dist/assets/index-C9Tdo52D.js   221.89 kB │ gzip: 69.43 kB

✓ built in 192ms

```
### Flutter
```text
Analyzing participacion_semana7_sdd_run...
No issues found! (ran in 4.5s)
00:00 +0: loading C:/Users/brisn/Desktop/Nueva carpeta/participacion_semana7_sdd_run/test/data/estrategia_redondeo_test.dart
00:00 +0: C:/Users/brisn/Desktop/Nueva carpeta/participacion_semana7_sdd_run/test/data/estrategia_redondeo_test.dart: redondeo exacto conserva el valor
00:00 +1: C:/Users/brisn/Desktop/Nueva carpeta/participacion_semana7_sdd_run/test/division_test.dart: 1. reparto normal
00:00 +2: C:/Users/brisn/Desktop/Nueva carpeta/participacion_semana7_sdd_run/test/data/estrategia_redondeo_test.dart: redondeo hacia arriba sube decimales al entero superior
00:00 +3: C:/Users/brisn/Desktop/Nueva carpeta/participacion_semana7_sdd_run/test/division_test.dart: 2. sin propina
00:00 +4: C:/Users/brisn/Desktop/Nueva carpeta/participacion_semana7_sdd_run/test/data/estrategia_redondeo_test.dart: redondeo hacia arriba conserva valores enteros
00:00 +5: C:/Users/brisn/Desktop/Nueva carpeta/participacion_semana7_sdd_run/test/division_test.dart: 3. cero personas
00:00 +6: C:/Users/brisn/Desktop/Nueva carpeta/participacion_semana7_sdd_run/test/division_test.dart: 4. monto no numerico
00:00 +7: C:/Users/brisn/Desktop/Nueva carpeta/participacion_semana7_sdd_run/test/division_test.dart: 5. redondeo exacto
00:00 +8: C:/Users/brisn/Desktop/Nueva carpeta/participacion_semana7_sdd_run/test/division_test.dart: 6. redondeo hacia arriba
00:00 +9: C:/Users/brisn/Desktop/Nueva carpeta/participacion_semana7_sdd_run/test/division_test.dart: LSP: CalcularDivision acepta cualquier EstrategiaRedondeo
00:00 +10: C:/Users/brisn/Desktop/Nueva carpeta/participacion_semana7_sdd_run/test/domain/calcular_division_test.dart: calcula 100.00 entre 4 con 10% de propina en modo exacto
00:00 +11: C:/Users/brisn/Desktop/Nueva carpeta/participacion_semana7_sdd_run/test/domain/calcular_division_test.dart: calcula 90.00 entre 3 con 0% de propina en modo exacto
00:00 +12: C:/Users/brisn/Desktop/Nueva carpeta/participacion_semana7_sdd_run/test/domain/calcular_division_test.dart: calcula 10.00 entre 3 con 0% de propina en modo exacto
00:00 +13: C:/Users/brisn/Desktop/Nueva carpeta/participacion_semana7_sdd_run/test/domain/validar_entrada_test.dart: rechaza cero personas
00:00 +14: C:/Users/brisn/Desktop/Nueva carpeta/participacion_semana7_sdd_run/test/domain/validar_entrada_test.dart: rechaza monto no numerico
00:00 +15: C:/Users/brisn/Desktop/Nueva carpeta/participacion_semana7_sdd_run/test/domain/validar_entrada_test.dart: rechaza valores negativos
00:01 +16: C:/Users/brisn/Desktop/Nueva carpeta/participacion_semana7_sdd_run/test/pantalla_test.dart: calcula y muestra 27.50
00:03 +17: C:/Users/brisn/Desktop/Nueva carpeta/participacion_semana7_sdd_run/test/presentation/pantalla_divisor_test.dart: muestra resultado exacto valido
00:03 +18: C:/Users/brisn/Desktop/Nueva carpeta/participacion_semana7_sdd_run/test/pantalla_test.dart: muestra error cuando hay cero personas
00:03 +19: C:/Users/brisn/Desktop/Nueva carpeta/participacion_semana7_sdd_run/test/presentation/pantalla_divisor_test.dart: muestra resultado con redondeo hacia arriba
00:03 +20: C:/Users/brisn/Desktop/Nueva carpeta/participacion_semana7_sdd_run/test/pantalla_test.dart: muestra error cuando el monto no es numerico
00:03 +21: C:/Users/brisn/Desktop/Nueva carpeta/participacion_semana7_sdd_run/test/presentation/pantalla_divisor_test.dart: muestra error y oculta resultado anterior
00:03 +22: C:/Users/brisn/Desktop/Nueva carpeta/participacion_semana7_sdd_run/test/presentation/pantalla_divisor_test.dart: muestra Monto inválido desde la pantalla
00:04 +23: All tests passed!

```
### Diff e imports
```text
DIFF_EXIT=0
src/data/redondeoExacto.js:1:export const redondeoExacto = { aplicar(valor) { return Math.round((valor + Number.EPSILON) * 100) / 100 } }
src/data/redondeoHaciaArriba.js:1:export const redondeoHaciaArriba = { aplicar(valor) { return Math.ceil(valor) } }
src/main.jsx:4:import { redondeoExacto } from './data/redondeoExacto.js'
src/main.jsx:5:import { redondeoHaciaArriba } from './data/redondeoHaciaArriba.js'
src/main.jsx:8:createRoot(document.getElementById('root')).render(<StrictMode><PantallaDivisor estrategias={{ exacto: redondeoExacto, arriba: redondeoHaciaArriba }} /></StrictMode>)

```
Un grep sin coincidencias retorna 1: esperado para las prohibiciones. Las estrategias aparecen en sus definiciones de data y se conectan en main.jsx.
