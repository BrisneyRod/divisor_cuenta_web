# Divisor de cuenta web — migración SDD

Entrega de Programación Asistida de Aplicaciones. React + Vite + JavaScript.

## Para el profesor

1. [Respuestas a las seis preguntas](respuestas.md).
2. [Análisis QUÉ/CÓMO y Constitución](analisis_spec.md).
3. [Bitácora y salidas reales](bitacora.md).
4. [Spec idéntica y seis escenarios](evidencia_diff_spec.md), [cambios del plan](comparacion_plan.md).
5. [Spec, plan y tareas](specs/001-dividir-cuenta), [Constitución](.specify/memory/constitution.md).
6. [Revisión final y límites](revision_final.md).

Proyecto Flutter original: [repositorio del laboratorio, rama sdd](https://github.com/BrisneyRod/Clase-ProgramacionApss2026/tree/sdd). Se conserva su nombre original para mantener historia y ramas del laboratorio. Este repositorio contiene el segundo proyecto, divisor_cuenta_web.

## Ejecutar

Node instalado para validar: 24.19.0. Requisito del deber: 22.12 o superior.

```powershell
npm.cmd ci
npm.cmd test
npm.cmd run build
npm.cmd run dev
```

Abrir la dirección que muestra Vite. En terminal nueva, antes de iniciar el agente:

```powershell
$env:SPECIFY_FEATURE_DIRECTORY = "specs/001-dividir-cuenta"
```

No se regenera la spec. No hay backend, API ni base de datos. El cálculo funciona localmente tras cargar la página.

## Validación y pendientes personales

React: 18 pruebas, lint y build correctos. Flutter: 23 pruebas y analyze correcto. Spec sin diferencias. Tiempo de desarrollo no registrado.

Pendiente del estudiante: revisión visual de la pantalla (T027) y revisión personal de análisis/casos que el enunciado pide a mano. Los archivos se prepararon con ayuda del agente; no se declara autoría manual. El código está en GitHub, no se desplegó una web pública porque el enunciado pide repositorios.
