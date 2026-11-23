# Configuración de GitHub

GitHub aloja el repositorio y permite colaborar mediante issues y Pull Requests.

## Crear una cuenta

Si aún no tienes cuenta, regístrate en [github.com](https://github.com). Usa un nombre de usuario reconocible y añade una foto y una breve descripción si quieres.

## Configurar el perfil

1. Verifica tu correo.
2. Activa la autenticación en dos pasos en **Settings → Password and authentication**.
3. Añade tu clave SSH o configura un token de acceso, como se explica en [`git-setup.md`](git-setup.md).

## Hacer fork del repositorio

1. Abre la página del repositorio en GitHub.
2. Pulsa **Fork**.
3. Elige tu cuenta como destino.

Ahora tienes una copia en `https://github.com/USERNAME/OpenDev`.

## Clonar y configurar remotos

```bash
git clone https://github.com/USERNAME/OpenDev.git
cd OpenDev
git remote add upstream https://github.com/OWNER/OpenDev.git
git remote -v
```

Deberías ver `origin` apuntando a tu fork y `upstream` al repositorio original.

## Mantener tu fork actualizado

```bash
git fetch upstream
git checkout main
git merge upstream/main
git push origin main
```

## Abrir un issue

1. Ve a la pestaña **Issues**.
2. Pulsa **New issue**.
3. Elige la plantilla adecuada.
4. Completa todos los campos obligatorios.
5. Revisa que no exista un issue similar.

## Abrir un Pull Request

1. Sube tu rama a tu fork.
2. GitHub mostrará un botón para comparar y abrir un Pull Request.
3. Asegúrate de que la rama base es `main` del repositorio original.
4. Completa la plantilla y enlaza el issue.

## Notificaciones

Configura las notificaciones en **Settings → Notifications**. Para un repositorio educativo, se recomienda:

- Participating and @mentions.
- Custom: issues y Pull Requests del repositorio.
- Desactivar correos innecesarios si prefieres revisar la interfaz web.

## Buenas prácticas

- No publiques datos personales en issues.
- No compartas tokens ni claves.
- Sé respetuoso en los comentarios.
- Usa Discussions para preguntas abiertas y issues para problemas concretos.

## Siguiente paso

Lee [`../guides/github-workflow.md`](../guides/github-workflow.md) y abre tu primer issue o Pull Request.
