# Módulo 06 — Métodos

## Objetivos

- Declarar métodos con parámetros y valor de retorno.
- Entender el ámbito de las variables.
- Usar sobrecarga de métodos.

## ¿Qué es un método?

Un método agrupa instrucciones que realizan una tarea. Permite reutilizar código y darle un nombre.

```java
public static int sumar(int a, int b) {
    return a + b;
}
```

- `public`: visible desde otras clases.
- `static`: pertenece a la clase, no a una instancia.
- `int`: tipo del valor que devuelve.
- `sumar`: nombre del método.
- `int a, int b`: parámetros.

## Llamar a un método

```java
int resultado = sumar(2, 3);
System.out.println(resultado); // 5
```

## Métodos sin retorno

```java
public static void saludar(String nombre) {
    System.out.println("Hola, " + nombre);
}
```

`void` significa que no devuelve un valor.

## return

`return` termina el método y devuelve un valor si corresponde.

```java
public static boolean esPar(int numero) {
    return numero % 2 == 0;
}
```

## Ámbito

Una variable declarada dentro de un método solo existe dentro de ese método.

```java
public static void ejemplo() {
    int local = 10;
    // local no existe fuera de este método
}
```

## Sobrecarga

Dos métodos pueden tener el mismo nombre si cambian sus parámetros.

```java
public static int sumar(int a, int b) {
    return a + b;
}

public static double sumar(double a, double b) {
    return a + b;
}
```

## Buenas prácticas

- Un método debe hacer una sola cosa.
- Usa nombres que describan la acción: `calcularPromedio`, no `calcular`.
- Evita métodos demasiado largos.
- No uses parámetros de más; si son muchos, considera agruparlos.
- Documenta los métodos públicos con Javadoc.

```java
/**
 * Calcula el promedio de tres notas.
 *
 * @param primera primera nota
 * @param segunda segunda nota
 * @param tercera tercera nota
 * @return el promedio de las tres notas
 */
public static double calcularPromedio(double primera, double segunda, double tercera) {
    return (primera + segunda + tercera) / 3;
}
```

## Ejercicios

En [`exercises/04-methods`](../../exercises/04-methods/):

- Crea un método que calcule el área de un rectángulo.
- Crea un método que determine si un número es primo.
- Crea un método que convierta minutos a horas y minutos.

## Reto

Divide un programa de calculadora en métodos pequeños: sumar, restar, multiplicar y dividir. Cada método debe tener una responsabilidad clara.

## Siguiente módulo

[07 — Arrays y cadenas](07-arrays.md)
