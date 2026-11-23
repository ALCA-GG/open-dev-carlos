# Módulo 01 — Fundamentos de Java

## Objetivos

- Conocer la estructura de un programa Java.
- Entender clases, métodos y sentencias.
- Usar comentarios correctamente.
- Compilar y ejecutar código.

## Estructura de un programa

```java
package org.opendev;

public class Saludo {

    public static void main(String[] args) {
        System.out.println("Hola, OpenDev");
    }
}
```

- **package:** agrupa clases relacionadas.
- **class:** unidad básica de organización.
- **method:** bloque de código que realiza una tarea.
- **statement:** instrucción terminada en punto y coma.

## Convenciones de nombres

| Elemento  | Convención       | Ejemplo                  |
| --------- | ---------------- | ------------------------ |
| Clase     | PascalCase       | `Calculadora`            |
| Método    | camelCase        | `calcularTotal`          |
| Variable  | camelCase        | `edadUsuario`            |
| Constante | UPPER_SNAKE_CASE | `MAX_INTENTOS`           |
| Paquete   | minúsculas       | `org.opendev.ejercicios` |

Los nombres deben explicar qué representan. Evita `x`, `dato1` o `cosa`.

## Comentarios

```java
// Comentario de una línea

/*
 * Comentario de varias líneas.
 */

/**
 * Documentación Javadoc para clases y métodos públicos.
 */
```

No comentes lo obvio. Un comentario debe explicar el **porqué**, no repetir el código.

## Salida por consola

```java
System.out.println("Hola");
System.out.print("Sin salto de línea");
System.out.printf("Edad: %d%n", 21);
```

## Compilar y ejecutar

```bash
javac Main.java
java Main
```

Con Maven:

```bash
./mvnw compile
java -cp target/classes org.opendev.Main
```

## Errores comunes

- Olvidar el punto y coma.
- Usar mayúsculas distintas en el nombre del archivo y de la clase pública.
- Cerrar mal una llave `}`.
- Escribir `System.out.println` con minúscula inicial.

Leer el error del compilador es una habilidad. Empieza por la primera línea del error.

## Siguiente módulo

[02 — Variables y tipos](02-variables-and-types.md)
