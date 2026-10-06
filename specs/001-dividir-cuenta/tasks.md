# Tasks: Dividir cuenta web

**Input**: Design documents from `specs/001-dividir-cuenta/`

## Phase 1: Setup

- [X] T001 [P] Add Vitest scripts and configuration in `package.json` and `vitest.config.js`
- [X] T002 [P] Create `src/domain`, `src/data`, `src/presentation`, and `tests` directories
- [X] T003 [P] Remove Vite demo content from `src/App.jsx`, `src/App.css`, and `src/index.css`

## Phase 2: Foundational

- [X] T004 [P] Create domain account and result modules in `src/domain/cuenta.js` and `src/domain/resultado.js`
- [X] T005 [P] Define the `aplicar(valor)` rounding contract in `src/domain/estrategiaRedondeo.js`
- [X] T006 Implement pure calculation in `src/domain/calcularDivision.js` without validation or formatting
- [X] T007 Implement text validation and negative-value errors in `src/domain/validarEntrada.js`
- [X] T008 [P] Implement exact and upward strategies in `src/data/redondeoExacto.js` and `src/data/redondeoHaciaArriba.js`
- [X] T009 [P] Implement two-decimal formatting in `src/presentation/formateadorMoneda.js`

## Phase 3: User Story 1 - Calcular pago por persona (P1) MVP

**Independent test**: valid exact inputs produce 27.50, 30.00, and 3.33.

- [X] T010 [P] [US1] Add domain tests for the three exact calculations in `tests/domain/calcularDivision.test.js`
- [X] T011 [P] [US1] Implement dependency-injected `useDivisor` state flow in `src/presentation/useDivisor.js`
- [X] T012 [US1] Build amount, people, tip inputs and Calcular action in `src/presentation/PantallaDivisor.jsx`
- [X] T013 [US1] Compose domain and presentation dependencies in `src/main.jsx`
- [X] T014 [US1] Add UI test for valid exact calculation in `tests/presentation/PantallaDivisor.test.jsx`

## Phase 4: User Story 2 - Elegir modo de redondeo (P2)

**Independent test**: 10.00 / 3 / 0 in upward mode displays 4.00.

- [X] T015 [P] [US2] Add strategy tests for exact and upward modes in `tests/data/redondeo.test.js`
- [X] T016 [US2] Add rounding selector to `src/presentation/PantallaDivisor.jsx`
- [X] T017 [US2] Route selected strategy through `src/presentation/useDivisor.js`
- [X] T018 [US2] Add upward-mode UI test in `tests/presentation/PantallaDivisor.test.jsx`

## Phase 5: User Story 3 - Validar entradas inválidas (P3)

**Independent test**: zero people, nonnumeric amount, and negatives show errors and no result.

- [X] T019 [P] [US3] Add validation tests in `tests/domain/validarEntrada.test.js`
- [X] T020 [US3] Render validation errors and clear stale results in `src/presentation/useDivisor.js`
- [X] T021 [US3] Render error state without result in `src/presentation/PantallaDivisor.jsx`
- [X] T022 [US3] Add invalid-input UI tests in `tests/presentation/PantallaDivisor.test.jsx`

## Phase 6: Polish and verification

- [X] T023 [P] Add Spanish responsive styling in `src/index.css` and `src/App.css`
- [X] T024 [P] Verify domain imports no React or DOM APIs with a repository search
- [X] T025 [P] Run `npm run build` and record result in `bitacora.md`
- [X] T026 [P] Run `npm run test` and validate all six acceptance scenarios
- [X] T027 Run the `quickstart.md` manual flow and record observed results in `bitacora.md`

## Dependencies and execution order

- Setup (T001-T003) precedes Foundational (T004-T009).
- Foundational precedes all user stories.
- US1 (T010-T014) is the MVP; US2 and US3 can follow it independently.
- Polish depends on the completed user stories.

## Parallel opportunities

- T001-T003 can run in parallel.
- T004-T005, T008-T009 can run in parallel.
- T010-T011 and T015 can run in parallel with their respective implementation work.
- T019 can run in parallel with UI error work after the foundational layer.

## Implementation strategy

1. Complete setup and foundational modules.
2. Deliver US1 and validate the MVP.
3. Add the rounding selector for US2.
4. Add invalid-input behavior for US3.
5. Run build, tests, and quickstart verification.
