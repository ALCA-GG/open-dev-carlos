# Contribuir a OpenDev

Gracias por querer formar parte de OpenDev. Esta guía explica el proceso completo, desde instalar las herramientas hasta abrir tu primer Pull Request. Está pensada para personas que nunca han contribuido a un repositorio de GitHub.

## Antes de empezar

Necesitas:

- Git instalado.
- Una cuenta de GitHub.
- Java 21 LTS.
- Node.js LTS (la versión está en `.nvmrc`).
- Ganas de aprender. No necesitas experiencia profesional.

Si algo no funciona, consulta [`SUPPORT.md`](SUPPORT.md) antes de abrir un issue.

## Tipos de contribución

Puedes ayudar de muchas formas:

- Corregir errores ortográficos o explicaciones confusas.
- Mejorar la documentación o los ejemplos.
- Crear ejercicios para principiantes.
- Añadir o mejorar tests.
- Revisar Pull Requests de otras personas.
- Reportar errores con pasos claros para reproducirlos.

No hace falta escribir código para contribuir.

## Flujo de trabajo con fork

### 1. Haz fork

En GitHub, pulsa **Fork** en la página del repositorio. Se creará una copia en tu cuenta.

### 2. Clona tu fork

```bash
git clone https://github.com/USERNAME/OpenDev.git
cd OpenDev
```

Sustituye `USERNAME` por tu usuario de GitHub.

### 3. Configura el repositorio original como upstream

```bash
git remote add upstream https://github.com/OWNER/OpenDev.git
git remote -v
```

Sustituye `OWNER` por el propietario del repositorio original.

### 4. Instala las herramientas

```bash
npm install
./mvnw --version
```

`npm install` instala Husky y activa los hooks locales.

### 5. Crea una rama

Parte siempre de la última versión de `main`:

```bash
git checkout main
git pull upstream main
git checkout -b feat/my-first-exercise
```

Prefijos permitidos:

| Tipo                            | Prefijo     | Ejemplo                       |
| ------------------------------- | ----------- | ----------------------------- |
| Nueva funcionalidad o ejercicio | `feat/`     | `feat/array-exercises`        |
| Corrección                      | `fix/`      | `fix/incorrect-loop-example`  |
| Documentación                   | `docs/`     | `docs/java-installation`      |
| Refactorización                 | `refactor/` | `refactor/exercise-structure` |
| Tests                           | `test/`     | `test/array-validation`       |
| Mantenimiento                   | `chore/`    | `chore/update-maven`          |
| Corrección urgente              | `hotfix/`   | `hotfix/critical-build-error` |

Usa minúsculas y kebab-case. Los nombres deben ser cortos y descriptivos.

## Realizar el cambio

### Documentación

- Escribe en español claro.
- Explica los conceptos sin asumir conocimientos previos.
- Usa ejemplos ejecutables.
- Actualiza los enlaces internos si mueves archivos.

### Ejercicios

Cada ejercicio debe seguir la estructura descrita en [`exercises/README.md`](exercises/README.md):

```text
exercises/<categoria>/<numero-nombre>/
├── README.md
├── Main.java
└── MainTest.java
```

El README debe incluir dificultad, objetivos, descripción, requisitos, salida esperada, pistas, criterios de aceptación y un reto adicional.

No coloques la solución junto al enunciado. Si hace falta una solución, añádela en `solutions/` con una explicación.

### Código Java

- Usa Java 21.
- Respeta el formato de Spotless y las reglas de Checkstyle.
- Documenta las clases y métodos públicos con Javadoc.
- Añade tests con JUnit 5 cuando la lógica lo permita.
- No introduzcas dependencias sin justificación.
- No añadas frameworks, bases de datos ni servicios externos para los ejercicios básicos.

## Verificar antes de commitear

Ejecuta las mismas comprobaciones que CI:

```bash
npm run validate
./mvnw clean verify
./mvnw spotless:check
```

Si el formato falla, puedes aplicar el formateador:

```bash
npm run format:write
./mvnw spotless:apply
```

Revisa el diff antes de continuar:

```bash
git diff
git status
```

## Commits

Usa Conventional Commits:

```text
<tipo>(<alcance>): <descripción>
```

Ejemplos:

```text
feat(exercises): add variable exercises
fix(fundamentals): correct integer division example
docs(installation): improve Java setup guide
test(arrays): add array boundary tests
```

Reglas:

- Descripción en imperativo.
- Primera letra en minúscula.
- Sin punto final.
- Máximo 72 caracteres en la primera línea.
- Un commit por unidad lógica de trabajo.

El hook `commit-msg` valida el formato automáticamente. Puedes comprobarlo antes con:

```bash
npm run validate:commit -- "feat(exercises): add my first exercise"
```

Consulta [`docs/guides/commit-conventions.md`](docs/guides/commit-conventions.md) para más detalle.

## Pull Request

1. Sube tu rama:

```bash
git push origin feat/my-first-exercise
```

2. Abre un Pull Request contra `main`.
3. Completa la plantilla.
4. Enlaza el issue relacionado con `Closes #N`.
5. Espera a que CI termine.
6. Responde a los comentarios de revisión.
7. Mantén la rama actualizada si es necesario.

No hagas merge de tu propio Pull Request. Un maintainer lo revisará y decidirá cuándo integrarlo.

## Sincronizar tu fork

```bash
git fetch upstream
git checkout main
git merge upstream/main
git push origin main
```

Después, actualiza tu rama de trabajo:

```bash
git checkout feat/my-first-exercise
git merge main
```

Si hay conflictos, Git te indicará los archivos afectados. Edítalos, elimina las marcas de conflicto, prueba el proyecto y confirma la resolución:

```bash
git add <archivos>
git commit -m "chore: resolve merge conflicts with main"
```

## Hooks de Git

Husky instala tres hooks:

| Hook         | Qué hace                                           |
| ------------ | -------------------------------------------------- |
| `pre-commit` | Valida la estructura y el formato de Markdown/JSON |
| `commit-msg` | Valida Conventional Commits                        |
| `pre-push`   | Ejecuta `./mvnw -B verify`                         |

Si un hook falla, lee el mensaje, corrige el problema y vuelve a intentarlo. No uses `git push --no-verify` como solución habitual: CI ejecuta las mismas validaciones y el Pull Request fallará igualmente.

En Windows, los hooks se ejecutan con Git Bash. Si el hook `pre-push` falla por el entorno, ejecuta manualmente:

```powershell
.\mvnw.cmd -B verify
```

Para desactivar los hooks temporalmente en una emergencia:

```bash
git commit --no-verify
```

Úsalo solo si sabes por qué falla el hook y cómo resolverlo después.

## Revisión de código

Las revisiones buscan ayudar, no desanimar. Se evalúan:

1. Corrección.
2. Legibilidad.
3. Valor educativo.
4. Convenciones de Java.
5. Nombres y estructura.
6. Tests.
7. Documentación.
8. Alcance del cambio.

Un Pull Request puede ser aprobado, aprobado con sugerencias, devuelto para cambios o rechazado con explicación. Consulta [`docs/guides/code-review.md`](docs/guides/code-review.md).

## ¿Necesitas ayuda?

- Dudas de programación: usa GitHub Discussions.
- Errores del repositorio: abre un issue con la plantilla de bug.
- Problemas de contribución: comenta en el issue o abre uno nuevo.
- Vulnerabilidades: sigue [`SECURITY.md`](SECURITY.md).

Gracias por contribuir a una comunidad donde se puede aprender sin miedo a equivocarse.
