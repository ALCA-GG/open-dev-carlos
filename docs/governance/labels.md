# Etiquetas de issues

Las etiquetas ayudan a clasificar y encontrar contribuciones. Deben crearse manualmente en GitHub (**Issues → Labels**). Este documento define su uso.

## Contribución

| Etiqueta             | Uso                                                                 |
| -------------------- | ------------------------------------------------------------------- |
| `good first issue`   | Tarea acotada y bien explicada para una primera contribución.       |
| `help wanted`        | Se busca ayuda de la comunidad.                                     |
| `first contribution` | Issue o Pull Request de una persona que contribuye por primera vez. |

## Contenido educativo

| Etiqueta        | Uso                                 |
| --------------- | ----------------------------------- |
| `exercise`      | Propuesta o mejora de un ejercicio. |
| `learning-path` | Cambios en la ruta de aprendizaje.  |
| `documentation` | Documentación general.              |
| `tutorial`      | Guías y tutoriales.                 |

## Técnico

| Etiqueta       | Uso                                          |
| -------------- | -------------------------------------------- |
| `bug`          | Algo no funciona como se espera.             |
| `enhancement`  | Mejora de una funcionalidad existente.       |
| `refactoring`  | Reestructuración sin cambiar comportamiento. |
| `tests`        | Tests nuevos o mejoras de tests.             |
| `ci/cd`        | Workflows y automatización.                  |
| `dependencies` | Actualizaciones de dependencias.             |

## Dificultad

| Etiqueta       | Uso                                        |
| -------------- | ------------------------------------------ |
| `beginner`     | No requiere conocimientos avanzados.       |
| `intermediate` | Requiere varios conceptos combinados.      |
| `advanced`     | Requiere diseño o conocimientos profundos. |

## Estado

| Etiqueta       | Uso                                           |
| -------------- | --------------------------------------------- |
| `needs-review` | Pendiente de revisión.                        |
| `in-progress`  | Alguien está trabajando en ello.              |
| `blocked`      | No puede avanzar por una dependencia externa. |
| `accepted`     | Propuesta aceptada.                           |
| `rejected`     | Propuesta rechazada, con explicación.         |

## Cómo asignar etiquetas

- Usa una etiqueta de dificultad por issue educativo.
- Usa `needs-review` al abrir un Pull Request.
- Cambia a `in-progress` cuando empieces a trabajar.
- No acumules etiquetas contradictorias (`accepted` y `rejected`).
- Los maintainers pueden ajustar las etiquetas durante la revisión.

## Crear las etiquetas

GitHub no crea etiquetas desde un archivo del repositorio. Créalas manualmente o con un script de la API de GitHub ejecutado por el Owner. Documenta cualquier script de configuración y no lo ejecutes sin revisarlo.
