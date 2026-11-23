# Instalación

Esta guía prepara tu equipo para trabajar con OpenDev. Si es la primera vez que instalas herramientas de desarrollo, sigue los pasos en orden y no te saltes las comprobaciones.

## 1. Requisitos

| Herramienta | Versión | Obligatoria |
| --- | --- | --- |
| Java Development Kit (JDK) | 21 LTS | Sí |
| Git | Reciente | Sí |
| Cuenta de GitHub | — | Para contribuir |

No necesitas instalar Maven: el repositorio incluye el Maven Wrapper (`mvnw`).

## 2. Instalar Java 21

Sigue [`java-setup.md`](java-setup.md). Al terminar, comprueba:

```bash
java -version
javac -version
```

Ambos comandos deben mostrar una versión `21`.

## 3. Instalar Git

Sigue [`git-setup.md`](git-setup.md). Comprueba:

```bash
git --version
```

## 4. Clonar el repositorio

```bash
git clone https://github.com/OWNER/OpenDev.git
cd OpenDev
```

Si vas a contribuir, clona tu fork y configura `upstream`. Consulta [`CONTRIBUTING.md`](../../CONTRIBUTING.md).

## 5. Verificar el entorno

```bash
./mvnw clean verify
```

En Windows:

```powershell
.\mvnw.cmd clean verify
```

Resultado esperado:

- Maven compila el proyecto.
- Los tests pasan.
- Checkstyle y Spotless no encuentran problemas.

La primera ejecución descarga Maven y las dependencias; necesita conexión a internet.

## 6. Ejecutar la aplicación

```bash
./mvnw package
java -cp target/opendev-0.1.0-SNAPSHOT.jar org.opendev.Main
```

La salida esperada es:

```text
Welcome to OpenDev!
```

## Problemas frecuentes

### `java: command not found`

Java no está instalado o no está en el `PATH`. Revisa [`java-setup.md`](java-setup.md).

### `./mvnw: Permission denied`

```bash
chmod +x mvnw
```

### El build falla al descargar dependencias

Comprueba tu conexión a internet y que puedas acceder a Maven Central. Si estás detrás de un proxy, configura Maven según la documentación de tu entorno.

### El build falla por la versión de Java

Ejecuta `java -version`. Debe ser Java 21. Si tienes varias versiones instaladas, revisa `JAVA_HOME` y el `PATH`.

## Siguiente paso

Continúa con [`java-setup.md`](java-setup.md) si aún no has configurado Java, o empieza la ruta en [`../learning-path/00-introduction.md`](../learning-path/00-introduction.md).
