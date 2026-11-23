# Configuración de Java 25

OpenDev usa **Java 25 LTS**. Esta guía explica qué instalar, cómo comprobarlo y cómo dejar el entorno listo. Solo necesitas el JDK: Maven lo aporta el Maven Wrapper del repositorio, como se explica en [`maven.md`](maven.md).

## JDK, JRE y JVM

| Término                            | Significado                                                    |
| ---------------------------------- | -------------------------------------------------------------- |
| **JVM** (Java Virtual Machine)     | Máquina virtual que ejecuta el bytecode de Java.               |
| **JRE** (Java Runtime Environment) | JVM más las bibliotecas necesarias para ejecutar aplicaciones. |
| **JDK** (Java Development Kit)     | JRE más las herramientas para desarrollar, como `javac`.       |

Para programar necesitas un **JDK**, no solo un JRE. Un JRE puede ejecutar programas, pero no incluye el compilador `javac`.

## ¿Por qué Java 25?

- Es una versión **LTS** (Long Term Support): recibe actualizaciones durante varios años.
- Es la versión con la que se compila y prueba OpenDev.
- `java -version` y `javac -version` deben mostrar `25`.

## Instalar el JDK 25

### Windows

Opción recomendada: el instalador de Eclipse Temurin.

1. Descarga [Eclipse Temurin 25](https://adoptium.net/temurin/releases/?version=25).
2. Ejecuta el instalador.
3. Marca **Set JAVA_HOME variable** y **Add to PATH**.
4. Abre una terminal nueva.

También puedes usar `winget`:

```powershell
winget install EclipseAdoptium.Temurin.25.JDK
```

### macOS

Con Homebrew:

```bash
brew install --cask temurin@25
```

Si el cask no está disponible, descarga el instalador `.pkg` desde [Adoptium](https://adoptium.net/temurin/releases/?version=25).

### Linux

Fedora:

```bash
sudo dnf install java-25-openjdk-devel
```

Ubuntu/Debian:

```bash
sudo apt update
sudo apt install openjdk-25-jdk
```

En Fedora el paquete se llama `-devel` porque incluye `javac`. En Debian/Ubuntu, `-jdk`.

Si tu distribución no ofrece Java 25, usa [SDKMAN](https://sdkman.io/):

```bash
curl -s "https://get.sdkman.io" | bash
source "$HOME/.sdkman/bin/sdkman-init.sh"
sdk list java
sdk install java <identificador-de-java-25>
```

Sustituye `<identificador-de-java-25>` por la línea de Temurin 25 que muestre `sdk list java`.

## Configurar JAVA_HOME

Algunas herramientas, incluido el Maven Wrapper, necesitan saber dónde está el JDK.

### Linux/macOS

Averigua la ruta:

```bash
readlink -f "$(which java)"
```

Añade a `~/.bashrc`, `~/.zshrc` o el archivo de configuración de tu shell:

```bash
export JAVA_HOME="/ruta/al/jdk-25"
export PATH="$JAVA_HOME/bin:$PATH"
```

En macOS puedes obtener la ruta directamente:

```bash
export JAVA_HOME=$(/usr/libexec/java_home -v 25)
```

Recarga la configuración:

```bash
source ~/.bashrc   # o source ~/.zshrc
```

### Windows (PowerShell)

Ajusta la ruta a la versión instalada:

```powershell
[Environment]::SetEnvironmentVariable("JAVA_HOME", "C:\Program Files\Eclipse Adoptium\jdk-25.0.5-hotspot", "User")
```

Añade `%JAVA_HOME%\bin` al `Path` del usuario desde **Variables de entorno**. Abre una terminal nueva después.

## Verificar la instalación

```bash
java -version
javac -version
echo "$JAVA_HOME"
```

En Windows, `echo %JAVA_HOME%`.

Salida esperada (los números menores pueden variar):

```text
openjdk version "25.0.5" ...
javac 25.0.5
```

Si aparece `21`, `17` u otra versión, revisa el `PATH` y `JAVA_HOME`.

## Varias versiones instaladas

### Linux

```bash
sudo update-alternatives --config java
sudo update-alternatives --config javac
```

### macOS

```bash
export JAVA_HOME=$(/usr/libexec/java_home -v 25)
```

### Windows

Revisa el orden de `Path` y que `JAVA_HOME` apunte al JDK 25.

## Problemas frecuentes

### `java: command not found`

Java no está instalado o no está en el `PATH`. Revisa esta guía y abre una terminal nueva.

### `javac: command not found`

Instalaste un JRE, no un JDK. En Fedora instala `java-25-openjdk-devel`; en Debian/Ubuntu, `openjdk-25-jdk`.

### `java -version` muestra otra versión

Tienes varias versiones y el `PATH` apunta a la incorrecta. Ajusta `JAVA_HOME` y el `PATH`, o usa `update-alternatives` en Linux.

### El instalador de Windows no actualizó la terminal

Cierra y abre una terminal nueva para que tome las variables de entorno.

## Siguiente paso

Configura Maven con [`maven.md`](maven.md) (no hace falta instalarlo) y elige un IDE en [`ide-setup.md`](ide-setup.md).
