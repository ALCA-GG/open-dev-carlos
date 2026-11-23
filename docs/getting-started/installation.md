# Instalación

Esta guía deja tu equipo listo para trabajar con OpenDev. Sigue los pasos en orden y no te saltes las comprobaciones.

## 1. Requisitos

| Herramienta      | Versión                            | Obligatoria     |
| ---------------- | ---------------------------------- | --------------- |
| JDK              | 25 LTS                             | Sí              |
| Git              | Reciente                           | Sí              |
| IDE              | IntelliJ IDEA o Apache NetBeans    | Recomendado     |
| Cuenta de GitHub | —                                  | Para contribuir |

No necesitas instalar Maven: el repositorio incluye el Maven Wrapper (`mvnw`), que descarga Maven automáticamente.

## 2. Instalar el JDK 25

Sigue [`java-setup.md`](java-setup.md). Al terminar, comprueba:

```bash
java -version
javac -version
```

Ambos comandos deben mostrar una versión `25`.

## 3. Instalar Git

Sigue [`git-setup.md`](git-setup.md). Comprueba:

```bash
git --version
```

## 4. Clonar el repositorio

```bash
git clone https://github.com/carlosgarcia-tech/open-dev.git
cd open-dev
```

Si vas a contribuir, clona tu fork y configura `upstream`. Consulta [`CONTRIBUTING.md`](../../CONTRIBUTING.md).

## 5. Verificar el Maven Wrapper

La primera ejecución descarga Maven 3.9.16 y las dependencias. Necesita conexión a internet.

```bash
./mvnw --version
```

En Windows:

```powershell
.\mvnw.cmd --version
```

Comprueba que la salida incluye `Java version: 25`.

Después, compila y ejecuta todas las comprobaciones:

```bash
./mvnw clean verify
```

Resultado esperado:

- Maven compila el proyecto.
- Los tests pasan.
- Checkstyle y Spotless no encuentran problemas.

La guía completa de Maven está en [`maven.md`](maven.md).

## 6. Ejecutar la aplicación

```bash
./mvnw package
java -cp target/opendev-0.1.0-SNAPSHOT.jar org.opendev.Main
```

La salida esperada es:

```text
Welcome to OpenDev!
```

## 7. Configurar el IDE

Recomendado: IntelliJ IDEA o Apache NetBeans. Sigue [`ide-setup.md`](ide-setup.md).

## Problemas frecuentes

### `java: command not found`

Java no está instalado o no está en el `PATH`. Revisa [`java-setup.md`](java-setup.md).

### `javac: command not found`

Instalaste un JRE, no un JDK. Necesitas el JDK 25: [`java-setup.md`](java-setup.md).

### `./mvnw: Permission denied`

```bash
chmod +x mvnw
```

### El build falla al descargar dependencias

Comprueba tu conexión a internet y que puedas acceder a Maven Central. Si estás detrás de un proxy, revisa [`maven.md`](maven.md).

### El build falla por la versión de Java

Ejecuta `./mvnw --version`. Debe mostrar Java 25. Si tienes varias versiones instaladas, revisa `JAVA_HOME` y el `PATH`.

## Siguiente paso

Empieza la ruta en [`../learning-path/00-introduction.md`](../learning-path/00-introduction.md).
