# Módulo 04 — Control de flujo

## Objetivos

- Tomar decisiones con `if`, `else` y `else if`.
- Usar `switch`.
- Escribir expresiones condicionales legibles.

## if

```java
int edad = 20;

if (edad >= 18) {
    System.out.println("Puedes votar");
}
```

La condición debe ser un `boolean`. En Java no se evalúan números como verdadero o falso.

## if / else

```java
if (edad >= 18) {
    System.out.println("Mayor de edad");
} else {
    System.out.println("Menor de edad");
}
```

## else if

```java
if (nota >= 9) {
    System.out.println("Excelente");
} else if (nota >= 7) {
    System.out.println("Notable");
} else if (nota >= 5) {
    System.out.println("Aprobado");
} else {
    System.out.println("Suspenso");
}
```

El orden importa. Si la primera condición ya es verdadera, las demás no se evalúan.

## switch

```java
switch (dia) {
    case 1 -> System.out.println("Lunes");
    case 2 -> System.out.println("Martes");
    case 6, 7 -> System.out.println("Fin de semana");
    default -> System.out.println("Día desconocido");
}
```

La sintaxis con flechas evita el fallthrough accidental. También existe la sintaxis clásica con `break`.

## Expresión condicional

```java
String estado = edad >= 18 ? "mayor" : "menor";
```

Úsala para casos simples. Si la condición es compleja, un `if` es más claro.

## Buenas prácticas

- Evita anidar muchos `if`. Usa guard clauses (retornos tempranos).
- Extrae condiciones complejas a variables con nombre.
- No compares `boolean` con `true` o `false`: usa `if (activo)`.

```java
boolean esAdulto = edad >= 18;
boolean tienePermiso = esAdulto && !bloqueado;

if (tienePermiso) {
    // ...
}
```

## Ejercicios

En [`exercises/02-control-flow`](../../exercises/02-control-flow/):

- Clasifica una nota.
- Comprueba si un año es bisiesto.
- Calcula el mayor de tres números.

## Reto

Escribe un programa que reciba la hora del día (0–23) y muestre un saludo adecuado: buenos días, buenas tardes o buenas noches.

## Siguiente módulo

[05 — Bucles](05-loops.md)
