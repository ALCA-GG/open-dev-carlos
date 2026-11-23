# Convenciones de commits

OpenDev usa [Conventional Commits](https://www.conventionalcommits.org/es/v1.0.0/).

## Formato

```text
<tipo>(<alcance>): <descripción>
```

El alcance es opcional:

```text
docs: fix broken link
feat(exercises): add array exercises
```

## Tipos

| Tipo       | Uso                                         |
| ---------- | ------------------------------------------- |
| `feat`     | Nueva funcionalidad o ejercicio             |
| `fix`      | Corrección de un error                      |
| `docs`     | Documentación                               |
| `test`     | Tests                                       |
| `refactor` | Reestructuración sin cambiar comportamiento |
| `style`    | Formato, sin cambios de lógica              |
| `chore`    | Mantenimiento                               |
| `build`    | Configuración de build                      |
| `ci`       | CI/CD                                       |
| `perf`     | Mejora de rendimiento                       |
| `revert`   | Reversión de un cambio                      |

## Reglas

- Descripción en imperativo: `add`, no `added` ni `adds`.
- Primera letra en minúscula.
- Sin punto final.
- Máximo 72 caracteres en la primera línea.
- Sé específico: evita `update`, `changes`, `fix stuff`.

## Ejemplos válidos

```text
feat(exercises): add calculator exercise #42
fix(fundamentals): correct integer division example
docs(installation): improve Java setup guide
test(arrays): add boundary tests
refactor(exercises): simplify folder structure
chore(dependencies): update JUnit version
ci(workflows): cache Maven dependencies
```

## Ejemplos inválidos

```text
update files
changes
fixed stuff
my first commit
test
Feat: add exercise
feat: Add exercise.
```

## Alcances habituales

- `exercises`
- `fundamentals`
- `learning-path`
- `docs`
- `installation`
- `ci`
- `dependencies`
- `governance`
- `security`

Usa un alcance solo si aclara el contexto. No es obligatorio.

## Validación automática

El hook `commit-msg` ejecuta `scripts/check-commit-message.js`. También puedes validar manualmente:

```bash
npm run validate:commit -- "feat(exercises): add my first exercise"
```

El script comprueba:

- Tipo permitido.
- Formato `tipo(alcance): descripción`.
- Longitud máxima.
- Inicio en minúscula.
- Ausencia de punto final.

Los commits de merge (`Merge ...`) se permiten para no romper el flujo de Git.

## Cuerpo del commit

Si el motivo no es obvio, añade un cuerpo:

```text
fix(loops): correct off-by-one example

The loop used <= with the array length, causing an
ArrayIndexOutOfBoundsException on the last iteration.
```

Separa la cabecera del cuerpo con una línea en blanco.

## Referencias a issues

Puedes incluir `#N` al final de la cabecera o en el cuerpo:

```text
feat(exercises): add array exercises #42
```

No es obligatorio, pero ayuda a rastrear el contexto.
