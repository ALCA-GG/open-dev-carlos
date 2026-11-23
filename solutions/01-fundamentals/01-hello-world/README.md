# Solución: Hello World

## Enunciado

Mostrar `Hello, World!` por consola.

## Razonamiento

1. Todo programa Java necesita al menos una clase.
2. El método `main` es el punto de entrada.
3. `System.out.println` imprime una línea y añade un salto de línea.

## Código

```java
public class Main {

    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

## Explicación

- `public class Main` declara una clase pública llamada `Main`. El archivo debe llamarse `Main.java`.
- `public static void main(String[] args)` es la firma que busca la JVM para iniciar el programa.
- `System.out.println("Hello, World!")` envía el texto a la salida estándar.

## Alternativas

También se puede usar `System.out.print("Hello, World!\n")`, pero `println` es más claro para este caso.

## Qué practicar después

- Cambiar el mensaje.
- Añadir una segunda línea.
- Ejecutar el programa desde la terminal y desde el editor.
