# Módulo 09 — Excepciones

## Objetivos

- Entender qué es una excepción.
- Usar `try`, `catch` y `finally`.
- Lanzar excepciones con `throw`.
- Declarar excepciones con `throws`.
- Crear excepciones propias.

## ¿Qué es una excepción?

Una excepción representa un error o una situación excepcional durante la ejecución.

```java
int resultado = 10 / 0; // ArithmeticException
```

Sin manejo, el programa termina y muestra una traza. La traza indica el tipo de excepción y dónde ocurrió.

## try / catch

```java
try {
    int resultado = 10 / 0;
    System.out.println(resultado);
} catch (ArithmeticException e) {
    System.out.println("No se puede dividir entre cero");
}
```

Captura solo lo que sabes manejar. No captures `Exception` sin motivo.

## finally

Se ejecuta siempre, haya error o no.

```java
try {
    // operación
} catch (IOException e) {
    System.out.println("Error de entrada/salida");
} finally {
    System.out.println("Limpieza");
}
```

## throw

Lanza una excepción cuando se incumple una regla.

```java
public static void validarEdad(int edad) {
    if (edad < 0) {
        throw new IllegalArgumentException("La edad no puede ser negativa");
    }
}
```

## throws

Declara que un método puede propagar una excepción comprobada.

```java
public static String leerArchivo(String ruta) throws IOException {
    return Files.readString(Path.of(ruta));
}
```

## Excepciones comprobadas y no comprobadas

- **Comprobadas:** heredan de `Exception` (excepto `RuntimeException`). El compilador obliga a manejarlas o declararlas.
- **No comprobadas:** heredan de `RuntimeException`. Suelen indicar errores de programación.

## Excepciones propias

```java
public class SaldoInsuficienteException extends Exception {
    public SaldoInsuficienteException(String mensaje) {
        super(mensaje);
    }
}
```

```java
public void retirar(double cantidad) throws SaldoInsuficienteException {
    if (cantidad > saldo) {
        throw new SaldoInsuficienteException("Saldo insuficiente");
    }
    saldo -= cantidad;
}
```

## Buenas prácticas

- No tragues excepciones vacías.
- No uses excepciones para control de flujo normal.
- Mensajes claros, sin datos sensibles.
- Cierra recursos con try-with-resources.
- No expongas trazas internas al usuario final.

```java
try (BufferedReader reader = Files.newBufferedReader(Path.of("datos.txt"))) {
    return reader.readLine();
}
```

## Ejercicios

En [`exercises/07-exceptions`](../../exercises/07-exceptions/):

- Maneja una división entre cero.
- Valida una edad y lanza `IllegalArgumentException`.
- Crea una excepción para saldo insuficiente.

## Reto

Escribe un programa que lea números hasta que el usuario escriba `salir`. Si la entrada no es un número, muestra un mensaje claro y continúa.

## Siguiente módulo

[10 — Colecciones](10-collections.md)
