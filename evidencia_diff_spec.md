# Evidencia de reutilización

La comparación inicial se ejecutó en Parte 3.4: diff vacío, código 0; copia conservada en commit 0b94a5c. Se verificó otra vez al entregar, tanto contra Flutter como contra ese commit. No hubo corrección de spec.

```powershell
git diff --no-index -- "../participacion_semana7_sdd_run/specs/001-dividir-cuenta/spec.md" "specs/001-dividir-cuenta/spec.md"
# salida vacía; exit 0
git diff 0b94a5c -- specs/001-dividir-cuenta/spec.md
# salida vacía
```

36/36 enunciados normativos únicos reutilizados (100%), según [análisis](analisis_spec.md). Corrige el conteo anterior no reproducible de 33. [Diff completo del plan](evidencias/plan.diff) y [conteo por decisión](comparacion_plan.md): 23 decisiones cambiadas, no 33. Las 33 adiciones/91 eliminaciones del diff original son líneas, no enunciados.

## Casos semánticamente idénticos

| Escenario | Monto | Personas | Propina | Modo | Esperado en ambos |
|---|---:|---:|---:|---|---|
| 1 | 100 | 4 | 10 | exacto | 27.50 |
| 2 | 90 | 3 | 0 | exacto | 30.00 |
| 3 | 50 | 0 | 0 | exacto | Debe haber al menos una persona |
| 4 | NaN | 4 | 0 | exacto | Monto inválido |
| 5 | 10 | 3 | 0 | exacto | 3.33 |
| 6 | 10 | 3 | 0 | arriba | 4.00 |

Dart double.nan y JS NaN representan el mismo dato inválido. Clases Dart → objetos JS; los valores, errores y reglas no cambiaron.
