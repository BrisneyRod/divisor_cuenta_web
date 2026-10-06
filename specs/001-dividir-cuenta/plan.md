# Implementation Plan: Dividir cuenta web

**Branch**: `001-dividir-cuenta` | **Date**: 2026-10-06 | **Spec**: [spec.md](spec.md)

## Summary

Implementar la misma funcionalidad como aplicación web React con Vite, JavaScript,
estado local con `useState` y ninguna librería externa de estado.

## Technical Context

**Language/Version**: JavaScript moderno, Node.js 22.12+
**Framework/Build**: React con Vite
**Dependencies**: React y herramientas Vite/Vitest; sin librerías de estado externas
**Storage**: N/A; sin red, archivos ni base de datos
**Testing**: Vitest y pruebas de componentes; dependencias adicionales solo si se justifican
**Target Platform**: Navegador web
**Project Type**: Aplicación React de una sola pantalla
**Constraints**: Offline, sin API, sin base de datos, interfaz en español

## Constitution Check

- SOLID: PASS. Validación, cálculo, redondeo, formato y UI tendrán responsabilidades separadas.
- Capas: PASS. Se usarán `src/presentation`, `src/domain` y `src/data`.
- Dependencias: PASS. `presentation -> domain <- data`; el dominio no importará React ni DOM.
- Composición: PASS. `src/main.jsx` será el único punto que instancie estrategias concretas.
- Seguridad: PASS. No habrá secretos, API keys, red ni persistencia.
- Pruebas: PASS. Los seis escenarios serán pruebas ejecutables.
- Explicabilidad: PASS. Cada módulo tendrá una responsabilidad concreta.

## Project Structure

```text
src/
├── main.jsx
├── domain/ (cuenta.js, resultado.js, calcularDivision.js, validarEntrada.js, estrategiaRedondeo.js)
├── data/ (redondeoExacto.js, redondeoHaciaArriba.js)
└── presentation/ (useDivisor.js, formateadorMoneda.js, PantallaDivisor.jsx)
```

## Design Decisions

- El dominio exportará funciones y un contrato pequeño `aplicar(valor)`.
- `useDivisor` recibirá sus dependencias por parámetro y no creará estrategias.
- `main.jsx` compondrá validación, cálculo y estrategias concretas.
- La validación ocurrirá antes del cálculo y un error limpiará el resultado anterior.
- Exacto muestra dos decimales; hacia arriba usa el entero superior y muestra dos decimales.

## Constitution Re-check

PASS. El diseño conserva el QUÉ de la spec y reemplaza decisiones Flutter por
módulos React equivalentes. No hay contradicciones que obliguen a modificar `spec.md`.
