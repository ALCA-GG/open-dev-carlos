# Maven y el Maven Wrapper

OpenDev usa Maven para compilar, ejecutar tests y empaquetar la aplicación. **No necesitas instalar Maven**: el repositorio incluye el Maven Wrapper (`mvnw`), que descarga la versión correcta la primera vez.

## Qué es Maven

Maven es una herramienta de construcción para Java. Lee el archivo `pom.xml` y:

- descarga las dependencias, como JUnit, desde Maven Central;
- compila el código de `src/main/java`;
- ejecuta los tests de `src/test/java`;
- empaqueta el JAR en `target/`;
- ejecuta Checkstyle y Spotless.

## El Maven Wrapper

| Sistema              | Comando      |
| -------------------- | ------------ |
| Linux/macOS          | `./mvnw`     |
| Windows (PowerShell) | `.\mvnw.cmd` |

La primera ejecución descarga Maven 3.9.16 en `~/.m2/wrapper` y las dependencias en `~/.m2/repository`. Necesita conexión a internet; las siguientes ejecuciones son más rápidas.

El wrapper necesita un JDK 25 instalado. Si aún no lo tienes, sigue [`java-setup.md`](java-setup.md).

## Verificar el entorno

```bash
./mvnw --version
```

Salida esperada:

```text
Apache Maven 3.9.16 ...
Java version: 25.0.x ...
```

Comprueba que `Java version` sea 25. Si muestra 21 o 17, revisa `JAVA_HOME` y el `PATH`.

## Comandos habituales

| Comando                   | Qué hace                                              |
| ------------------------- | ----------------------------------------------------- |
| `./mvnw clean`            | Borra `target/`.                                      |
| `./mvnw compile`          | Compila el código principal.                          |
| `./mvnw test`             | Ejecuta los tests.                                    |
| `./mvnw package`          | Genera el JAR en `target/`.                           |
| `./mvnw verify`           | Compila, prueba y ejecuta Checkstyle y Spotless.      |
| `./mvnw clean verify`     | Lo anterior desde cero. **Ejecútalo antes de commitear.** |
| `./mvnw spotless:apply`   | Aplica el formato al código Java.                     |
| `./mvnw checkstyle:check` | Ejecuta solo Checkstyle.                              |

En Windows, cambia `./mvnw` por `.\mvnw.cmd`.

## Ciclo de vida

Maven ejecuta fases en orden:

```text
validate → compile → test → package → verify → install → deploy
```

OpenDev usa hasta `verify`. No necesitas `install` ni `deploy` para trabajar en el repositorio.

## El archivo pom.xml

`pom.xml` describe el proyecto:

- **Coordenadas:** `groupId`, `artifactId` y `version`.
- **Propiedades:** codificación UTF-8 y versión de Java (`25`).
- **Dependencias:** JUnit 5 para los tests.
- **Plugins:** compilador, tests, JAR, Checkstyle y Spotless.

No modifiques las versiones de Java ni de los plugins sin hablarlo antes en un issue.

## Instalar Maven (opcional)

No es necesario. Si quieres el comando `mvn` disponible en todo el sistema:

- SDKMAN: `sdk install maven`
- Fedora: `sudo dnf install maven`
- Ubuntu/Debian: `sudo apt install maven`
- macOS: `brew install maven`
- Windows: descarga el binario desde [maven.apache.org](https://maven.apache.org/download.cgi) y añade su carpeta `bin` al `PATH`.

Aun así, usa `./mvnw` dentro del repositorio para que todo el mundo trabaje con la misma versión.

## Problemas frecuentes

### `./mvnw: Permission denied`

```bash
chmod +x mvnw
```

### `mvn: command not found`

No instales Maven para este proyecto. Usa `./mvnw` o `.\mvnw.cmd`.

### La descarga falla

Comprueba la conexión, el proxy y el acceso a `repo.maven.apache.org`. Si estás detrás de un proxy, configura `~/.m2/settings.xml` según la documentación de Maven.

### `release version 25 not supported`

Estás usando un JDK anterior. `./mvnw --version` debe mostrar Java 25.

### Warning de `sun.misc.Unsafe` con Spotless

En JDK 25, Spotless puede imprimir un warning sobre `sun.misc.Unsafe`. Es inocuo si el build termina en `BUILD SUCCESS`.

## Siguiente paso

Configura tu IDE en [`ide-setup.md`](ide-setup.md).
