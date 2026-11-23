# Contribuir a OpenDev

Gracias por querer formar parte de OpenDev. Esta guía explica el proceso completo, desde instalar las herramientas hasta abrir tu primer Pull Request. Está pensada para personas que nunca han contribuido a un repositorio de GitHub.

## Antes de empezar

Necesitas:

- Git instalado.
- Una cuenta de GitHub.
- Java 25 LTS.
- Ganas de aprender. No necesitas experiencia profesional.

El proyecto usa únicamente Java, Maven Wrapper y Git. Si usas IntelliJ IDEA o Apache NetBeans, sigue [`docs/getting-started/ide-setup.md`](docs/getting-started/ide-setup.md).

Si algo no funciona, consulta [`SUPPORT.md`](SUPPORT.md) antes de abrir un issue.

## Tipos de contribución

Puedes ayudar de muchas formas:

- Corregir errores ortográficos o explicaciones confusas.
- Mejorar la documentación o los ejemplos.
- Añadir o mejorar tests.
- Revisar Pull Requests de otras personas.
- Reportar errores con pasos claros para reproducirlos.
- Proponer mejoras para la ruta de aprendizaje.

Los ejercicios se incorporarán de forma progresiva y coordinada. No añadas ejercicios ni soluciones por tu cuenta sin hablarlo antes en un issue.

No hace falta escribir código para contribuir.

## Ejercicios del alumnado

El repositorio compartido contiene el currículo, no las soluciones de cada alumno. Tus ejercicios van en tu fork:

- Crea una carpeta `users/TU-USUARIO/` en tu fork.
- Guarda ahí todos tus ejercicios.
- No abras un Pull Request con tus ejercicios para que se mergeen en `main`.

Si quieres revisión, abre un Pull Request desde tu fork hacia `main`. El maintainer lo revisa y lo cierra sin mergear; el código sigue en tu fork. Esto evita que el repositorio crezca con el trabajo de todos y que las soluciones queden a la vista.

## Flujo de trabajo con fork

### 1. Haz fork

En GitHub, pulsa **Fork** en la página del repositorio. Se creará una copia en tu cuenta.

### 2. Clona tu fork

```bash
git clone https://github.com/USERNAME/open-dev.git
cd open-dev
```

Sustituye `USERNAME` por tu usuario de GitHub.

### 3. Configura el repositorio original como upstream

```bash
git remote add upstream https://github.com/carlosgarcia-tech/open-dev.git
git remote -v
```

### 4. Comprueba Java y Maven Wrapper

```bash
java -version
./mvnw --version
```

En Windows:

```powershell
.\mvnw.cmd --version
```

### 5. Crea una rama

Parte siempre de la última versión de `main`:

```bash
git checkout main
git pull upstream main
git checkout -b feat/my-first-change
```

Prefijos permitidos:

| Tipo                | Prefijo     | Ejemplo                       |
| ------------------- | ----------- | ----------------------------- |
| Nueva funcionalidad | `feat/`     | `feat/improve-docs`           |
| Corrección          | `fix/`      | `fix/incorrect-loop-example`  |
| Documentación       | `docs/`     | `docs/java-installation`      |
| Refactorización     | `refactor/` | `refactor/exercise-structure` |
| Tests               | `test/`     | `test/array-validation`       |
| Mantenimiento       | `chore/`    | `chore/update-maven`          |
| Corrección urgente  | `hotfix/`   | `hotfix/critical-build-error` |

Usa minúsculas y kebab-case. Los nombres deben ser cortos y descriptivos.

## Realizar el cambio

### Documentación

- Escribe en español claro.
- Explica los conceptos sin asumir conocimientos previos.
- Usa ejemplos ejecutables.
- Actualiza los enlaces internos si mueves archivos.

### Código Java

- Usa Java 25.
- Respeta el formato de Spotless y las reglas de Checkstyle.
- Documenta las clases y métodos públicos con Javadoc.
- Añade tests con JUnit 5 cuando la lógica lo permita.
- No introduzcas dependencias sin justificación.
- No añadas frameworks, bases de datos ni servicios externos para los ejercicios básicos.

## Verificar antes de commitear

Ejecuta las mismas comprobaciones que CI:

```bash
./mvnw clean verify
```

Esto compila, ejecuta los tests, pasa Checkstyle y comprueba el formato con Spotless.

Si el formato falla, puedes aplicar el formateador:

```bash
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
docs(learning-path): add variables module
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

Consulta [`docs/guides/commit-conventions.md`](docs/guides/commit-conventions.md) para más detalle. El título del Pull Request se valida automáticamente en CI.

## Pull Request

1. Sube tu rama:

```bash
git push origin feat/my-first-change
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
git checkout feat/my-first-change
git merge main
```

Si hay conflictos, Git te indicará los archivos afectados. Edítalos, elimina las marcas de conflicto, prueba el proyecto y confirma la resolución:

```bash
git add <archivos>
git commit -m "chore: resolve merge conflicts with main"
```

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
