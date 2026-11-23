# Configuración de Git

Git guarda el historial de cambios del proyecto. Esta guía configura lo mínimo para contribuir a OpenDev.

## Instalar Git

### Linux

```bash
sudo dnf install git   # Fedora
sudo apt install git   # Ubuntu/Debian
```

### macOS

```bash
brew install git
```

### Windows

Descarga Git desde [git-scm.com](https://git-scm.com/downloads). Durante la instalación, acepta las opciones predeterminadas salvo que sepas que necesitas otra cosa.

## Comprobar la instalación

```bash
git --version
```

## Configurar tu identidad

Git necesita un nombre y un correo. Usa el mismo correo que en GitHub si quieres que tus commits se asocien a tu cuenta.

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu-correo@example.com"
```

Comprueba:

```bash
git config --global --list
```

## Configurar la rama inicial

```bash
git config --global init.defaultBranch main
```

## Finales de línea

El repositorio usa LF y `.gitattributes` se encarga de normalizar los archivos. En Windows, configura:

```bash
git config --global core.autocrlf true
```

En Linux y macOS:

```bash
git config --global core.autocrlf input
```

## Autenticación con GitHub

GitHub no acepta contraseñas para operaciones Git. Usa una de estas opciones:

### HTTPS con token

1. Crea un token en GitHub: **Settings → Developer settings → Personal access tokens**.
2. Usa el token como contraseña cuando Git lo solicite.
3. Guárdalo con un gestor de credenciales, no en el repositorio.

### SSH

```bash
ssh-keygen -t ed25519 -C "tu-correo@example.com"
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

Copia la clave pública:

```bash
cat ~/.ssh/id_ed25519.pub
```

Añádela en GitHub: **Settings → SSH and GPG keys → New SSH key**.

Comprueba la conexión:

```bash
ssh -T git@github.com
```

## Configuración útil

```bash
# Mostrar el estado de forma más compacta
git config --global status.short true

# Usar un editor cómodo para los mensajes de commit
git config --global core.editor "nano"

# Evitar que Git convierta archivos por accidente
git config --global core.safecrlf warn
```

## Siguiente paso

Continúa con [`github-setup.md`](github-setup.md).
