# Flujo de trabajo en GitHub

OpenDev usa un GitHub Flow simplificado. Toda contribución pasa por una rama, un Pull Request y una revisión.

## Ramas

- `main` es la única rama permanente.
- Las ramas de trabajo se crean desde `main`.
- Los nombres usan prefijos: `feat/`, `fix/`, `docs/`, `refactor/`, `test/`, `chore/`, `hotfix/`.

## Ciclo completo

```text
main
  |
  |--- feat/nueva-funcionalidad
  |         |
  |         |--- commits
  |         |
  |         |--- Pull Request
  |                    |
  |                    |--- CI
  |                    |--- revisión
  |                    |--- aprobación
  |                    |
  |                    |--- squash and merge
  |
  |--- fix/error-documentacion
            |
            |--- Pull Request
            |--- revisión
            |--- merge
```

## 1. Actualiza tu fork

```bash
git fetch upstream
git switch main
git merge upstream/main
git push origin main
```

## 2. Crea la rama

```bash
git switch -c feat/nombre-descriptivo
```

## 3. Trabaja y verifica

```bash
npm run validate
./mvnw clean verify
```

## 4. Commit y push

```bash
git add <archivos>
git commit -m "feat(scope): descripción"
git push -u origin feat/nombre-descriptivo
```

## 5. Abre el Pull Request

- Base: `main` del repositorio original.
- Título: Conventional Commits.
- Descripción: qué, por qué y cómo se probó.
- Issue relacionado: `Closes #N`.

## 6. Revisión

- CI debe pasar.
- Un maintainer revisa el cambio.
- Responde a los comentarios.
- Si piden cambios, actualiza la rama y vuelve a subir.

## 7. Merge

El maintainer hará **squash and merge** para mantener un historial limpio. Tu rama se eliminará después del merge.

## Reglas de `main`

- No se permite push directo.
- Se requiere Pull Request.
- Se requiere al menos una aprobación.
- Se requieren los checks de CI.
- Se requiere resolver conversaciones.
- La rama debe estar actualizada antes del merge.
- Force push y borrado de la rama están bloqueados.

La configuración exacta se aplica en **Settings → Branches** o **Rulesets** de GitHub. Los archivos del repositorio no pueden imponer todas estas restricciones por sí solos.

## Buenas prácticas

- Un Pull Request por unidad lógica.
- Cambios pequeños y revisables.
- No mezcles refactorizaciones no relacionadas.
- Explica las decisiones, no solo los archivos cambiados.
- Sé paciente y respetuoso en la revisión.

## Recursos

- [`pull-requests.md`](pull-requests.md)
- [`code-review.md`](code-review.md)
- [`commit-conventions.md`](commit-conventions.md)
