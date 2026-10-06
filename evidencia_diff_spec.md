# Evidencia de la spec que viaja

## Comparación inicial

Origen Flutter:

```text
../participacion_semana7_sdd_run/specs/001-dividir-cuenta/spec.md
```

Copia React:

```text
specs/001-dividir-cuenta/spec.md
```

Comando ejecutado en PowerShell:

```powershell
git diff --no-index -- "..\participacion_semana7_sdd_run\specs\001-dividir-cuenta\spec.md" `
  "specs\001-dividir-cuenta\spec.md"
```

Salida observada:

```text
DIFF_EXIT=0
```

No se produjo ninguna línea de diff. La copia inicial de la spec es idéntica a
la original.

## Porcentaje reutilizado

En `analisis_spec.md` se contaron 33 enunciados de la spec:

- 33 reutilizables sin cambios de comportamiento.
- 0 enunciados CÓMO.
- 0 enunciados MIXTOS.

Porcentaje de enunciados reutilizados sin cambios:

```text
33 / 33 × 100 = 100%
```

La redacción “al tocar Calcular” se puede expresar como clic o envío de
formulario en React, pero no cambia el requisito ni se necesitó modificar la
spec.

## Casos de prueba

La comparación conceptual entre `../participacion_semana7_sdd_run/test/casos_de_prueba.dart`
y `test/casosDePrueba.js` confirma que los seis escenarios conservan sus
entradas, resultados, mensajes, modos y reglas de negocio. Solo cambian la
sintaxis y el tipo que representa cada caso: Dart usa una clase y JavaScript
usa objetos. `double.nan` se traduce a `NaN`.

## Plan

El diff entre los planes se obtuvo con:

```powershell
git diff --no-index -- "..\participacion_semana7_sdd_run\specs\001-dividir-cuenta\plan.md" `
  "specs\001-dividir-cuenta\plan.md"
```

El resultado fue un cambio de **33 enunciados del plan**, sin contar líneas
físicas. Las adaptaciones principales fueron:

- Dart y Flutter se reemplazaron por JavaScript, React, Vite y Node.js.
- `flutter test` se reemplazó por Vitest y Testing Library.
- La app móvil Flutter se reemplazó por una aplicación web para navegador.
- `setState` se reemplazó por `useState`.
- `lib/` se reemplazó por `src/`.
- `main.dart` se reemplazó por `src/main.jsx`.
- Las clases y archivos Dart se reemplazaron por módulos JavaScript y un hook
  `useDivisor`.
- Las pruebas de widgets Flutter se reemplazaron por pruebas de pantalla con
  jsdom y Testing Library.

Estas modificaciones pertenecen al CÓMO. El QUÉ de la spec y los seis casos
de aceptación permanecieron sin cambios.
