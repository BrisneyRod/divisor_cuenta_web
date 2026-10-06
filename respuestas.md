# Respuestas del deber

## 1. ¿Qué porcentaje de la spec viajó?

El **100% viajó intacto**, el **0% necesitó adaptación** y el **0% dejó de ser
reutilizable**. `analisis_spec.md` cuenta 33 enunciados: todos son QUÉ, no hay
MIXTOS ni CÓMO. La evidencia del diff inicial está en
[`evidencia_diff_spec.md`](evidencia_diff_spec.md): `git diff --no-index`
terminó con `DIFF_EXIT=0` y no produjo salida. La única adaptación de redacción
fue interpretar “tocar Calcular” como clic o envío de formulario, sin cambiar
el requisito. El tiempo total de desarrollo es no registrado; la ejecución de
los seis casos tardó 3.08 segundos y solo sirve como contexto.

## 2. ¿Cómo viajó la Constitution?

Las reglas se clasificaron así:

- **Idénticas**: SRP, OCP, LSP, ISP, DIP, no guardar secretos, probar toda
  conducta crítica, explicar el código generado, mantener el alcance del
  divisor, usar español, trabajar offline y no usar base de datos. Su idea no
  depende de Flutter.
- **Adaptadas en redacción**: `presentation -> domain <- data` se conservó con
  `src/`; “el dominio no importa `package:flutter`” pasó a “`src/domain` no
  importa React ni DOM”; y la verificación equivalente revisa esos imports en
  los archivos JavaScript.
- **Reemplazadas**: `lib/...` por `src/...`, Dart puro por JavaScript puro,
  `main.dart` por `src/main.jsx`, `flutter analyze`/`flutter test` por build,
  lint y Vitest, y la regla de paquetes Flutter por control de paquetes npm.

La evidencia se encuentra en la constitución Flutter del repositorio original,
la constitución React en `.specify/memory/constitution.md` y la tabla de
`analisis_spec.md`. Las sustituciones son nombres, herramientas y puntos de
entrada tecnológicos; los principios que justificaban esas reglas permanecen.

## 3. ¿Se modificó algún enunciado de la spec?

No. No fue necesario modificar ningún enunciado. La spec describe entradas,
reglas de cálculo, validaciones, resultados y restricciones offline, todos
independientes de Flutter. Por eso la copia inicial se mantuvo idéntica y el
diff quedó vacío. Las referencias específicas de Flutter estaban en el plan y
las tareas, donde sí se reemplazaron en un commit separado para React.

## 4. Comparación de los seis casos

No cambió ningún valor esperado, mensaje, entrada ni escenario. Los seis casos
de `test/casos_de_prueba.dart` fueron traducidos a objetos en
`test/casosDePrueba.js`. `test/division.test.js` los ejecuta con Vitest y
`test/pantalla.test.jsx` comprueba la pantalla. Las pruebas finales muestran
`18 passed`; cualquier diferencia habría sido un error de implementación, no
una consecuencia válida de React.

## 5. ¿Qué partes del plan Flutter dejaron de tener sentido?

Tres ejemplos concretos son:

1. **Dart y Flutter SDK**: se reemplazaron por JavaScript, React, Vite y
   Node.js, porque React no ejecuta código Dart ni usa Flutter.
2. **`setState`**: se reemplazó por `useState` dentro de `useDivisor.js`, que
   conserva el estado local de una sola pantalla sin una librería externa.
3. **Capas `lib/` y `main.dart`**: se reemplazaron por `src/` y `src/main.jsx`;
   la dirección de dependencias se conservó, pero cambiaron las rutas y el
   punto de composición.
4. **`flutter_test` y widget tests**: se reemplazaron por Vitest, jsdom y
   Testing Library; los escenarios y sus resultados permanecieron iguales.
5. **Build de Flutter**: se reemplazó por `npm run build` con Vite para
   empaquetar la página web.

El diff de ambos planes y el conteo de 33 enunciados modificados están en
`evidencia_diff_spec.md`.

## 6. Artefacto más y menos reusable

El artefacto más reusable fue la **spec**, porque sus 33 enunciados viajaron sin
cambios y su copia tiene diff vacío. También viajaron los seis casos por
significado: solo cambió la sintaxis de Dart a JavaScript.

El menos reusable fue el **plan**, porque contiene decisiones del CÓMO. El diff
muestra 91 líneas eliminadas y 33 agregadas: cambiaron lenguaje, framework,
runner, estado, carpetas, punto de composición y estructura de pruebas. El
código fue todavía menos portable en términos de implementación, ya que tuvo
que rehacerse en `src/`; sin embargo, para los artefactos documentales el plan
es el menos reusable porque concentra explícitamente las decisiones técnicas.
