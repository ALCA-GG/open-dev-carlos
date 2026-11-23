# Módulo 02 — Variables y tipos

## Objetivos

- Declarar variables y constantes.
- Conocer los tipos primitivos.
- Diferenciar tipos primitivos y de referencia.
- Leer datos con `Scanner`.

## Variables

Una variable es un espacio con nombre que guarda un valor.

```java
int edad = 21;
String nombre = "Ana";
boolean activo = true;
```

Puedes cambiar el valor de una variable:

```java
edad = 22;
```

## Constantes

Una constante no cambia después de asignarse:

```java
final int MAX_INTENTOS = 3;
```

## Tipos primitivos

| Tipo      | Uso                         | Ejemplo                         |
| --------- | --------------------------- | ------------------------------- |
| `byte`    | Enteros pequeños            | `byte nivel = 3;`               |
| `short`   | Enteros cortos              | `short año = 2026;`             |
| `int`     | Enteros                     | `int edad = 21;`                |
| `long`    | Enteros grandes             | `long poblacion = 8000000000L;` |
| `float`   | Decimales                   | `float nota = 8.5f;`            |
| `double`  | Decimales con más precisión | `double precio = 19.99;`        |
| `char`    | Un carácter                 | `char inicial = 'A';`           |
| `boolean` | Verdadero o falso           | `boolean aprobado = true;`      |

## Tipos de referencia

`String` es un tipo de referencia:

```java
String saludo = "Hola";
```

También son referencias los arrays, objetos y colecciones. Más adelante verás la diferencia con detalle.

## Conversiones

```java
int numero = 42;
double decimal = numero;        // conversión automática
int truncado = (int) 3.99;      // conversión explícita: 3
String texto = String.valueOf(numero);
int parseado = Integer.parseInt("123");
```

## Entrada por consola

```java
import java.util.Scanner;

public class Entrada {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("¿Cómo te llamas? ");
        String nombre = scanner.nextLine();
        System.out.println("Hola, " + nombre);
    }
}
```

Cierra el `Scanner` cuando termines si tu programa lo requiere, aunque en programas cortos no es crítico.

## Buenas prácticas

- Usa nombres descriptivos.
- Declara la variable lo más cerca posible de su uso.
- Prefiere `int` para enteros y `double` para decimales.
- No uses números mágicos: extrae constantes con nombre.

## Siguiente módulo

[03 — Operadores](03-operators.md)
