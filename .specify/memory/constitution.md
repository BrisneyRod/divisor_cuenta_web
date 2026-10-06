# Divisor de Cuenta Web Constitution

<!-- Revisión 1.0.1: recupera obligaciones del original omitidas al resumirlo. -->

## Core Principles

### I. SOLID Code Quality

The code MUST respect SOLID in review. SRP means each function or module has one reason to change; calculation MUST NOT validate input or format display strings. OCP means adding a rounding rule MUST NOT require editing existing calculation modules. LSP means any rounding implementation can replace another without concrete type checks. ISP means interfaces remain small. DIP means `src/presentation` depends on `src/domain` abstractions, never concrete `src/data` implementations.

### II. Layered Architecture

Code MUST use `src/presentation`, `src/domain`, and `src/data` with dependency direction `presentation -> domain <- data`. `src/domain/` MUST contain pure JavaScript and MUST NOT import `react` or DOM APIs. `src/main.jsx` MUST be the only place where concrete implementations are instantiated and wired.

### III. Repository Security

Secrets and API keys MUST NOT be stored in the repository.
Credentials, tokens and private agent state MUST NOT be committed. Required secrets
MUST remain outside version control and be documented by name only.

### IV. Critical Tests

Every critical behavior MUST have executable tests, and every acceptance criterion MUST become an executable test.

### V. Student Explainability

Every generated function MUST be explainable by the student: purpose, inputs, outputs, and handled errors or invalid states.
The student MUST also explain why the function exists.

## Product Constraints

The product is a one-screen web bill splitter accepting total amount, people, tip percentage, and rounding mode. It MUST work offline without network or database. UI text and product names MUST be understandable for Spanish-speaking users. Packages require documented justification.

## Quality Gates

Product domain names MUST be Spanish. New behavior requires an explicit specification.
Interfaces MUST NOT make consumers depend on functions they do not use.
Environment failures MUST be recorded in the log. Manual verification MUST record
inputs, expected output and observed output. Run npm run lint as the static analysis gate.

Before completion, run the React build and test commands. Review MUST verify no React or DOM imports in `src/domain/`, concrete wiring only in `src/main.jsx`, and that adding a rounding rule does not change existing calculation modules.

## Governance

This constitution supersedes informal practices. Amendments require a documented reason. Semantic versioning applies: MAJOR removes or redefines a principle, MINOR adds or materially expands one, and PATCH clarifies wording without changing obligations. Compliance MUST be reviewed during planning and after implementation. Violations MUST be fixed or documented with a concrete follow-up task.

**Version**: 1.0.1 | **Ratified**: 2026-10-06 | **Last Amended**: 2026-10-06
