# Comparación de decisiones del plan

Se consolidan repeticiones entre resumen, contexto, estructura y checks. Cada fila identifica una decisión independiente; se excluyen fecha, título y formato Markdown. Corrige la cifra anterior de 33, que confundía líneas agregadas con enunciados.

| Flutter | React | Resultado |
|---|---|---|
| Lenguaje Dart | JavaScript | Cambiado |
| SDK Flutter | React/Vite | Cambiado |
| Estado setState | useState | Cambiado |
| Sin paquetes externos | React/Vitest, sin estado externo | Cambiado |
| flutter test | Vitest | Cambiado |
| Widgets de Flutter | Componentes en navegador | Cambiado |
| Aplicación Flutter | Aplicación web | Cambiado |
| lib/ | src/ | Cambiado |
| Dominio Dart sin Flutter | JS sin React/DOM | Cambiado |
| main.dart | main.jsx | Cambiado |
| Cuenta clase Dart | cuenta.js | Cambiado |
| Resultado clase Dart | resultado.js | Cambiado |
| CalcularDivision clase Dart | calcularDivision.js | Cambiado |
| ValidarEntrada clase Dart | validarEntrada.js | Cambiado |
| EstrategiaRedondeo interfaz | aplicar(valor) contrato funcional | Cambiado |
| RedondeoExacto Dart | redondeoExacto.js | Cambiado |
| RedondeoHaciaArriba Dart | redondeoHaciaArriba.js | Cambiado |
| DivisorController constructor | useDivisor recibe dependencias | Cambiado |
| Formateador Dart | formateadorMoneda.js | Cambiado |
| Pantalla Dart | PantallaDivisor.jsx | Cambiado |
| Tests de dominio Dart | Tests de dominio Vitest | Cambiado |
| Tests de estrategias Dart | Tests de estrategias Vitest | Cambiado |
| Tests de widget | Testing Library/jsdom | Cambiado |
| Sin almacenamiento | Sin almacenamiento | Conservado |
| Sin red | Sin red | Conservado |
| Sin base de datos | Sin base de datos | Conservado |
| Una pantalla | Una pantalla | Conservado |
| Seis escenarios | Seis escenarios | Conservado |
| Separar validación/cálculo/formato/UI | Se conserva | Conservado |
| Dirección de dependencias | Se conserva | Conservado |
| Sin secretos | Se conserva | Conservado |
| Explicabilidad | Se conserva | Conservado |
| OCP sin editar cálculo | Se conserva | Conservado |
| Cálculo inmediato sin carga intensiva | Omitido explícitamente en plan React | Omitido |

34 decisiones analizadas: 23 cambiadas, 10 conservadas y 1 omitida explícitamente (rendimiento). No se interpreta esa omisión como cambio de requisito. El diff literal está en [plan.diff](evidencias/plan.diff).

