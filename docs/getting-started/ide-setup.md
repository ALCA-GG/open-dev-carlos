# Configuración del IDE

Los entornos recomendados para OpenDev son **IntelliJ IDEA** y **Apache NetBeans**. Ambos son gratuitos, reconocen proyectos Maven y funcionan con el Maven Wrapper. Elige uno; no necesitas los dos.

## Antes de empezar

- JDK 25 instalado: [`java-setup.md`](java-setup.md).
- Repositorio clonado.
- `./mvnw clean verify` funciona en la terminal: [`maven.md`](maven.md).

## IntelliJ IDEA

### Instalar

1. Descarga **IntelliJ IDEA Community Edition** desde [jetbrains.com/idea/download](https://www.jetbrains.com/idea/download/).
2. Instálalo con las opciones por defecto.

### Abrir el proyecto

1. Pulsa **Open** y selecciona la carpeta `open-dev`, la que contiene `pom.xml`.
2. Confía en el proyecto si IntelliJ lo pregunta.
3. Espera a que termine la importación de Maven.

### Configurar el JDK 25

1. Abre **File → Project Structure → Project**.
2. En **SDK**, elige **Add SDK → JDK** y selecciona la carpeta del JDK 25.
3. En **Language level**, elige **25**.
4. Abre **Settings → Build, Execution, Deployment → Build Tools → Maven**.
5. En **Maven home**, elige **Wrapper**.
6. En **JDK for importer**, elige 25.

En macOS, **Settings** está en el menú **IntelliJ IDEA**.

### Ejecutar

1. Abre `src/main/java/org/opendev/Main.java`.
2. Pulsa el triángulo verde junto a `main` y elige **Run 'Main'**.
3. Debes ver `Welcome to OpenDev!` en la consola.

### Tests

- Clic derecho en `src/test/java` → **Run 'All Tests'**.
- O abre `MainTest.java` y pulsa el triángulo verde.

### Formato y estilo

Antes de commitear:

```bash
./mvnw spotless:apply
./mvnw clean verify
```

Opcional: instala el plugin **CheckStyle-IDEA** y añade `checkstyle.xml` en **Settings → Tools → Checkstyle**.

## Apache NetBeans

### Instalar

1. Descarga la versión **Java SE** desde [netbeans.apache.org](https://netbeans.apache.org/).
2. Instálala con las opciones por defecto.

### Abrir el proyecto

1. Abre **File → Open Project**.
2. Selecciona la carpeta `open-dev`.
3. NetBeans detecta el `pom.xml` y lo abre como proyecto Maven.

### Configurar el JDK 25

1. Abre **Tools → Java Platforms → Add Platform → Java Standard Edition**.
2. Selecciona la carpeta del JDK 25.
3. Clic derecho en el proyecto → **Properties**.
4. En **Sources → Source/Binary Format**, elige 25.
5. En **Build → Compiling → Java Platform**, elige el JDK 25.

### Ejecutar

1. Clic derecho en el proyecto → **Run**.
2. Si pide la clase principal, elige `org.opendev.Main`.
3. Debes ver `Welcome to OpenDev!`.

### Tests

Clic derecho en el proyecto → **Test**.

### Formato y estilo

```bash
./mvnw spotless:apply
./mvnw clean verify
```

## Problemas frecuentes

### El IDE usa Java 21 o 17

Cambia el SDK del proyecto en IntelliJ o la plataforma Java en NetBeans a 25. Después reimporta el proyecto Maven.

### El IDE marca errores pero la terminal compila

Reimporta el proyecto Maven y comprueba el SDK. En IntelliJ: clic derecho en `pom.xml` → **Maven → Reload project**.

### El IDE no encuentra Maven

No instales Maven. En IntelliJ elige **Maven home = Wrapper**. NetBeans incluye su propio Maven; si falla, ejecuta `./mvnw` en la terminal.

### Acentos o caracteres raros

El proyecto usa UTF-8 en `pom.xml`. Configura la codificación del IDE en UTF-8 si es necesario.

## Siguiente paso

Empieza la ruta en [`../learning-path/00-introduction.md`](../learning-path/00-introduction.md).
