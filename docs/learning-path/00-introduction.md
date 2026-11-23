# Módulo 00 — Introducción

## Objetivos

- Entender qué es programar.
- Saber qué es Java y para qué se usa.
- Diferenciar JVM, JRE y JDK.
- Escribir y ejecutar tu primer programa.

## ¿Qué es programar?

Programar es dar instrucciones precisas a un ordenador para que realice una tarea. El ordenador no adivina: ejecuta exactamente lo que escribes, en el orden en que lo escribes.

Un programa es una secuencia de instrucciones. Por ejemplo:

1. Pedir un número.
2. Pedir otro número.
3. Sumarlos.
4. Mostrar el resultado.

## ¿Qué es Java?

Java es un lenguaje de programación creado en 1995. Es conocido por:

- Ejecutarse en muchos sistemas operativos.
- Tener un ecosistema enorme.
- Usarse en aplicaciones empresariales, Android, servidores y herramientas.
- Ser un lenguaje orientado a objetos.

OpenDev usa **Java 21 LTS**, una versión con soporte a largo plazo.

## ¿Cómo se ejecuta un programa Java?

1. Escribes código en un archivo `.java`.
2. El compilador `javac` lo convierte en bytecode (`.class`).
3. La JVM ejecuta el bytecode.

```text
Main.java  --javac-->  Main.class  --JVM-->  resultado
```

Este diseño permite que el mismo bytecode funcione en distintos sistemas operativos.

## JVM, JRE y JDK

- **JVM:** ejecuta el bytecode.
- **JRE:** JVM + bibliotecas para ejecutar aplicaciones.
- **JDK:** JRE + herramientas para desarrollar, como `javac`.

Para este curso necesitas el **JDK 21**.

## Tu primer programa

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Welcome to OpenDev!");
    }
}
```

Partes importantes:

- `public class Main`: declara una clase llamada `Main`.
- `public static void main(String[] args)`: punto de entrada del programa.
- `System.out.println(...)`: imprime texto en la consola.

## Ejecutarlo

Con el Maven Wrapper:

```bash
./mvnw -q compile
java -cp target/classes org.opendev.Main
```

O desde tu editor, ejecutando la clase `Main`.

## Recursos

- [Documentación oficial de Java](https://docs.oracle.com/en/java/)
- [Dev.java](https://dev.java/)

## Siguiente módulo

[01 — Fundamentos de Java](01-java-fundamentals.md)
