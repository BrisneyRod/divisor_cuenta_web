# Research: Dividir cuenta web

## Decisions

- React con Vite: es la tecnología solicitada y ya es la base del proyecto.
- Estado local con `useState`: una pantalla no necesita estado compartido.
- Vitest: se integra con Vite y prueba funciones puras y flujo de UI.
- Capas por dependencia: el dominio no depende de React o DOM y la composición
  concreta se mantiene en `src/main.jsx`.

## Alternatives considered

Redux/Zustand, backend, base de datos y reutilización de código Dart fueron
descartados por ser innecesarios, contrarios a la spec o específicos de Flutter.
