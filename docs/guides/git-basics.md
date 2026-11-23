# Fundamentos de Git

Git es un sistema de control de versiones. Guarda el historial de cambios y permite colaborar sin sobrescribir el trabajo de otras personas.

## Conceptos básicos

| Concepto    | Significado                           |
| ----------- | ------------------------------------- |
| Repositorio | Carpeta con historial de Git.         |
| Commit      | Instantánea de los cambios.           |
| Rama        | Línea independiente de trabajo.       |
| Remoto      | Copia del repositorio en un servidor. |
| `origin`    | Remoto de tu fork.                    |
| `upstream`  | Remoto del repositorio original.      |

## Comandos esenciales

```bash
git status                 # Ver el estado del árbol de trabajo
git diff                   # Ver cambios no preparados
git add archivo            # Preparar un archivo
git add .                  # Preparar todos los cambios (revisa antes)
git commit -m "mensaje"    # Crear un commit
git log --oneline          # Ver historial compacto
git branch                 # Listar ramas
git switch -c feat/nombre  # Crear y cambiar de rama
git switch main            # Cambiar a main
```

## El flujo básico

1. Modificas archivos.
2. `git status` muestra qué cambió.
3. `git diff` muestra el contenido del cambio.
4. `git add` prepara lo que quieres incluir.
5. `git commit` guarda la instantánea.

## Ramas

Una rama permite trabajar sin afectar `main`.

```bash
git switch main
git pull upstream main
git switch -c docs/mejorar-guia
```

Cuando termines, sube la rama:

```bash
git push -u origin docs/mejorar-guia
```

## Deshacer cambios

```bash
# Descartar cambios no preparados de un archivo
git restore archivo

# Quitar un archivo del área de preparación
git restore --staged archivo

# Ver el último commit
git show HEAD

# Crear un commit que revierte otro
git revert <hash>
```

Evita `git reset --hard` si no entiendes exactamente qué vas a perder.

## Sincronizar

```bash
git fetch upstream
git merge upstream/main
```

`fetch` descarga sin modificar tu rama. `merge` integra los cambios.

## Conflictos

Un conflicto ocurre cuando dos ramas cambian la misma parte de un archivo.

1. Git marca el archivo con `<<<<<<<`, `=======` y `>>>>>>>`.
2. Edita el archivo y deja la versión correcta.
3. Elimina las marcas.
4. Prueba el proyecto.
5. `git add archivo` y `git commit`.

## Buenas prácticas

- Haz commits pequeños y con propósito.
- Revisa `git status` antes de commitear.
- No subas secretos, `node_modules` ni `target/`.
- No reescribas el historial de ramas compartidas.
- Mantén tu rama actualizada con `main`.

## Recursos

- [Pro Git (español)](https://git-scm.com/book/es/v2)
- [`commit-conventions.md`](commit-conventions.md)
