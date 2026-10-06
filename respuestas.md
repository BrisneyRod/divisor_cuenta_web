# Respuestas

## 1. Porcentaje de la spec que viajó

100% intacto, 0% adaptado y 0% no reutilizable. Se cuentan 36 unidades normativas únicas con referencia a FR, SC, escenarios y supuestos en [analisis_spec.md](analisis_spec.md). Las repeticiones se consolidan; no se cuentan líneas físicas. El [diff](evidencia_diff_spec.md) está vacío contra Flutter y contra la copia inicial del commit 0b94a5c. “Tocar Calcular” también tiene sentido en web: no se alteró. Tiempo total: no registrado; el tiempo aislado del runner no mide productividad.

## 2. Constitución

La [tabla regla por regla](analisis_spec.md#constitución) contiene 39 filas y cita secciones de [Flutter](evidencias/constitution_flutter.md) y [React](.specify/memory/constitution.md). Seguridad, pruebas críticas y explicabilidad conservan significado. Rutas lib→src, main.dart→main.jsx y prohibición de Flutter→React/DOM adaptan redacción. Lenguaje y comandos de verificación se reemplazan porque Dart/flutter test no ejecutan React. La obligación de automatizar todos los criterios procede explícitamente de Parte 4 y reemplaza la excepción manual del original. Offline en React reproduce FR-010; no es una nueva función inventada.

## 3. ¿Cambió la spec?

No. Sus entradas, validaciones, fórmulas, resultados y restricciones no dependen del framework. No existe antes/después de una corrección porque no fue necesaria. Se conserva la copia inicial en Git y la [evidencia](evidencia_diff_spec.md). El 30% es un umbral pedagógico de este deber, no una ley universal de SDD.

## 4. Los seis escenarios

Se conservaron todos los valores, mensajes y escenarios; véase la [tabla comparativa](evidencia_diff_spec.md#casos-semánticamente-idénticos). double.nan→NaN y clase→objeto son sintaxis. [division.test.js](test/division.test.js) ejecuta seis casos y LSP; [pantalla.test.jsx](test/pantalla.test.jsx) cubre los tres casos de UI. Resultado total: 18 pruebas; Flutter: 23. La cantidad diferente proviene de pruebas auxiliares, no de cambiar aceptación.

## 5. Cambios del plan

[Comparación enumerada](comparacion_plan.md) y [diff literal](evidencias/plan.diff): 23 decisiones modificadas de 34 analizadas, 10 conservadas y 1 omitida. Ejemplos: Dart→JavaScript; Flutter SDK→React/Vite; setState→useState; controlador→hook que recibe dependencias; lib→src; main.dart→main.jsx; flutter test/widgets→Vitest/Testing Library. La meta de cálculo inmediato no quedó explícita en el plan React, aunque el cálculo es local y síncrono. Las 33 líneas agregadas no significan 33 decisiones.

## 6. Más y menos reusable

La spec es la más reusable: diff vacío y 100% de unidades intactas. Los casos también viajan semánticamente, con sintaxis distinta. El código es el menos reusable: se reescribió de Dart a JS/JSX; no se reutilizó implementación Dart. Entre documentos, el plan cambia más sus decisiones tecnológicas (23 filas), mientras mantiene separación de responsabilidades y restricciones del producto. Evidencia: archivos src, historial desde 22b0c7c, [plan.diff](evidencias/plan.diff) y [salidas](bitacora.md).

## Observaciones para entregar

El análisis y los casos fueron generados con ayuda del agente; el estudiante debe revisarlos y explicar el código según el enunciado. No hay medición válida del tiempo total. Revisión visual manual pendiente; pruebas automatizadas y build aprobados.
