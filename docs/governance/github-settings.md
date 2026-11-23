# Configuración de GitHub

Esta lista resume los ajustes que deben aplicarse en GitHub. Los archivos del repositorio no pueden imponer permisos, protecciones ni etiquetas: hay que configurarlos en la interfaz o con la API.

## Configuración general

| Ajuste                      | Valor recomendado                  |
| --------------------------- | ---------------------------------- |
| Visibilidad                 | Público                            |
| Rama por defecto            | `main`                             |
| Issues                      | Activados                          |
| Discussions                 | Activadas cuando estén disponibles |
| Projects                    | Opcional                           |
| Wiki                        | Desactivada inicialmente           |
| Pull Requests               | Activados                          |
| Squash merge                | Activado                           |
| Merge commits               | Desactivados                       |
| Rebase merge                | Opcional                           |
| Borrado automático de ramas | Activado                           |
| Dependabot alerts           | Activadas                          |
| Dependabot security updates | Activadas cuando estén disponibles |

## Protección de `main`

Usa **Settings → Branches** o **Rulesets** y aplica:

- [ ] Requerir Pull Request antes de merge.
- [ ] Requerir al menos una aprobación.
- [ ] Descartar aprobaciones antiguas cuando se suben cambios nuevos.
- [ ] Requerir que pasen los checks de CI.
- [ ] Requerir conversaciones resueltas.
- [ ] Requerir que la rama esté actualizada antes del merge.
- [ ] Bloquear force pushes.
- [ ] Bloquear el borrado de la rama.
- [ ] Restringir pushes directos.
- [ ] Incluir administradores si el equipo lo considera necesario.

## Checks requeridos

Marca como obligatorios los jobs de:

- `CI / Compilación, tests y calidad`.
- `Validación de Pull Request / Título convencional`.
- `Validación de Pull Request / Estructura y formato`.

Los nombres exactos aparecen en la pestaña **Actions** después de la primera ejecución.

## Etiquetas

Crea las etiquetas descritas en [`labels.md`](labels.md). GitHub no las crea a partir de archivos YAML del repositorio.

## CODEOWNERS

Sustituye `@OWNER` en [`.github/CODEOWNERS`](../../.github/CODEOWNERS) por el usuario u organización real. GitHub solo reconoce el archivo si las cuentas tienen acceso de escritura.

## Temas del repositorio

Añade en **Settings → General → Topics**:

```text
java
learning
education
open-source
programming
beginners
students
community
github
```

## Descripción y sitio web

- Descripción: `Comunidad educativa de código abierto para aprender Java desde cero.`
- Sitio web: opcional, si existe documentación publicada.
- Foto del repositorio: opcional, con licencia compatible.

## Verificación

Después de configurar, comprueba:

1. Un push directo a `main` es rechazado.
2. Un Pull Request sin aprobación no se puede mergear.
3. Un Pull Request con CI en rojo no se puede mergear.
4. Las conversaciones sin resolver bloquean el merge.
5. Dependabot abre Pull Requests semanales.
6. Las etiquetas existen y coinciden con las plantillas.

No afirmes que estos ajustes están aplicados hasta haberlos verificado en GitHub.
