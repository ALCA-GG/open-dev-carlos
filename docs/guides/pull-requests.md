# Pull Requests

Un Pull Request (PR) propone integrar cambios de una rama en `main`. Es también el espacio donde se revisa y se aprende.

## Antes de abrir un PR

- [ ] La rama parte de `main` actualizado.
- [ ] El cambio resuelve un issue o está justificado.
- [ ] `./mvnw clean verify` pasa.
- [ ] Añadiste tests si cambiaste lógica.
- [ ] Actualizaste la documentación afectada.
- [ ] Revisaste tu propio diff.

## Título

Usa Conventional Commits:

```text
feat(docs): add a new guide
docs(installation): clarify Java setup
fix(loops): correct off-by-one example
```

El workflow de validación comprueba el título.

## Descripción

Completa la plantilla:

- **Descripción:** qué cambia.
- **Issue relacionado:** `Closes #42`.
- **Tipo de contribución:** marca la opción correcta.
- **Cambios realizados:** lista breve.
- **Verificación:** qué comandos ejecutaste.
- **Objetivos de aprendizaje:** por qué es útil para la comunidad.
- **Checklist:** confirma las convenciones.

## Tamaño

Un PR pequeño se revisa mejor. Si el cambio es grande, divídelo:

- Un PR para la estructura.
- Otro para el contenido.
- Otro para los tests.

Evita mezclar correcciones, refactorizaciones y nuevas funcionalidades en el mismo PR.

## Durante la revisión

- Responde a cada comentario, aunque sea para decir que lo aplicaste.
- Si no estás de acuerdo, explica por qué con argumentos técnicos.
- No hagas force push sobre una rama con revisión activa salvo que sea necesario.
- Mantén la conversación enfocada en el código, no en la persona.

## Cambios solicitados

1. Lee el comentario completo.
2. Aplica el cambio o propone una alternativa.
3. Ejecuta las validaciones.
4. Haz commit y push.
5. Responde indicando qué hiciste.

No cierres un PR sin explicar por qué.

## Merge

El maintainer usa squash and merge. El mensaje final debe seguir Conventional Commits. Después del merge, la rama se elimina.

## Si tu PR queda inactivo

El workflow de inactividad avisa antes de cerrar. Si necesitas más tiempo, deja un comentario. Puedes reabrir el PR cuando quieras retomarlo.

## Recursos

- [`github-workflow.md`](github-workflow.md)
- [`code-review.md`](code-review.md)
- [`../governance/contribution-policy.md`](../governance/contribution-policy.md)
