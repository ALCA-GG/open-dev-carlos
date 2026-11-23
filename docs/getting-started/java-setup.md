# Configuración de Java

OpenDev usa **Java 21 LTS**. Esta guía explica qué instalar, cómo comprobarlo y qué significan las siglas que verás constantemente.

## JDK, JRE y JVM

| Término                            | Significado                                                    |
| ---------------------------------- | -------------------------------------------------------------- |
| **JVM** (Java Virtual Machine)     | Máquina virtual que ejecuta el bytecode de Java.               |
| **JRE** (Java Runtime Environment) | JVM más las bibliotecas necesarias para ejecutar aplicaciones. |
| **JDK** (Java Development Kit)     | JRE más las herramientas para desarrollar, como `javac`.       |

Para programar necesitas un **JDK**, no solo un JRE.

## Instalar el JDK 21

### Linux

Con el gestor de paquetes de tu distribución:

```bash
# Fedora
sudo dnf install java-21-openjdk-devel

# Ubuntu/Debian
sudo apt install openjdk-21-jdk
```

O con [SDKMAN](https://sdkman.io/):

```bash
curl -s "https://get.sdkman.io" | bash
sdk install java 21.0.5-tem
```

### macOS

```bash
brew install --cask temurin@21
```

O con SDKMAN, igual que en Linux.

### Windows

1. Descarga el instalador de [Eclipse Temurin 21](https://adoptium.net/temurin/releases/?version=21).
2. Ejecuta el instalador y marca la opción para configurar `JAVA_HOME`.
3. Abre una terminal nueva.

## Configurar JAVA_HOME

Algunas herramientas necesitan saber dónde está el JDK.

### Linux/macOS

Averigua la ruta:

```bash
readlink -f "$(which java)"
```

Añade a `~/.bashrc`, `~/.zshrc` o equivalente:

```bash
export JAVA_HOME="/ruta/al/jdk-21"
export PATH="$JAVA_HOME/bin:$PATH"
```

Recarga la configuración:

```bash
source ~/.bashrc
```

### Windows (PowerShell)

```powershell
[Environment]::SetEnvironmentVariable("JAVA_HOME", "C:\Program Files\Eclipse Adoptium\jdk-21...", "User")
```

Abre una terminal nueva después.

## Verificar la instalación

```bash
java -version
javac -version
echo "$JAVA_HOME"
```

`java -version` debe indicar `21`. Si ves otra versión, revisa el `PATH` y `JAVA_HOME`.

## Maven Wrapper

No instales Maven. El repositorio incluye `mvnw` y `mvnw.cmd`. La primera ejecución descarga Maven 3.9.x y lo guarda en tu directorio de usuario.

```bash
./mvnw --version
```

En Windows:

```powershell
.\mvnw.cmd --version
```

## Elegir un editor

Puedes usar el editor que prefieras. Algunas opciones habituales:

- IntelliJ IDEA Community Edition.
- Visual Studio Code con el paquete de extensiones de Java.
- Eclipse.

El repositorio incluye `.editorconfig` para mantener la indentación y los finales de línea.

## Siguiente paso

Continúa con [`git-setup.md`](git-setup.md).
