# Módulo 05 — Bucles

## Objetivos

- Repetir instrucciones con `for`, `while` y `do-while`.
- Usar `break` y `continue` con criterio.
- Evitar bucles infinitos.

## for

Úsalo cuando conoces el número de repeticiones o recorres una secuencia.

```java
for (int i = 1; i <= 5; i++) {
    System.out.println(i);
}
```

Partes:

1. Inicialización: `int i = 1`.
2. Condición: `i <= 5`.
3. Actualización: `i++`.

## while

Úsalo cuando no sabes cuántas veces se repetirá.

```java
int numero = 1;

while (numero <= 5) {
    System.out.println(numero);
    numero++;
}
```

Si olvidas actualizar la variable, el bucle no termina.

## do-while

Se ejecuta al menos una vez.

```java
int intento = 0;

do {
    intento++;
    System.out.println("Intento " + intento);
} while (intento < 3);
```

## break y continue

```java
for (int i = 1; i <= 10; i++) {
    if (i == 5) {
        break;       // sale del bucle
    }
    if (i % 2 == 0) {
        continue;    // salta a la siguiente iteración
    }
    System.out.println(i);
}
```

No abuses de `break` y `continue`: pueden dificultar la lectura.

## Bucles anidados

```java
for (int fila = 1; fila <= 3; fila++) {
    for (int columna = 1; columna <= 3; columna++) {
        System.out.print(fila * columna + " ");
    }
    System.out.println();
}
```

## Errores comunes

- Condición que nunca se vuelve falsa.
- Modificar la variable de control dentro del bucle de forma inesperada.
- Recorrer arrays fuera de sus límites.
- Usar `<=` con la longitud de un array cuando debería ser `<`.

## Ejercicios

En [`exercises/03-loops`](../../exercises/03-loops/):

- Suma los números del 1 al 100.
- Muestra la tabla de multiplicar de un número.
- Cuenta cuántos números pares hay en un rango.

## Reto

Escribe un programa que adivine un número secreto. Debe pedir intentos hasta acertar y decir si el número es mayor o menor.

## Siguiente módulo

[06 — Métodos](06-methods.md)
