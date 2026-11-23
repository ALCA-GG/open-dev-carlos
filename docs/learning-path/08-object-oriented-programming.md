# Módulo 08 — Programación orientada a objetos

## Objetivos

- Crear clases y objetos.
- Usar constructores y encapsulación.
- Entender herencia, polimorfismo, abstracción e interfaces.

## Clases y objetos

Una clase es un molde. Un objeto es una instancia de ese molde.

```java
public class Persona {
    private String nombre;
    private int edad;

    public Persona(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    public String getNombre() {
        return nombre;
    }

    public void cumplirAnios() {
        edad++;
    }
}
```

Crear y usar un objeto:

```java
Persona ana = new Persona("Ana", 20);
System.out.println(ana.getNombre());
ana.cumplirAnios();
```

## Atributos y métodos

- **Atributos:** datos del objeto.
- **Métodos:** comportamiento del objeto.
- **Constructor:** inicializa el objeto.

## Encapsulación

Oculta los detalles internos y expone solo lo necesario. Los atributos suelen ser `private`; el acceso se controla con métodos.

```java
public class Cuenta {
    private double saldo;

    public void depositar(double cantidad) {
        if (cantidad <= 0) {
            throw new IllegalArgumentException("La cantidad debe ser positiva");
        }
        saldo += cantidad;
    }

    public double getSaldo() {
        return saldo;
    }
}
```

La validación vive dentro del objeto: nadie puede dejar la cuenta en un estado inválido.

## Herencia

Una clase puede heredar de otra.

```java
public class Animal {
    public void comer() {
        System.out.println("Comiendo");
    }
}

public class Perro extends Animal {
    public void ladrar() {
        System.out.println("Guau");
    }
}
```

`Perro` hereda `comer()` y añade `ladrar()`.

## Polimorfismo

Un objeto puede tratarse como su tipo base.

```java
Animal animal = new Perro();
animal.comer();
```

El método que se ejecuta depende del objeto real. Esto permite escribir código genérico.

## Abstracción

Una clase abstracta define comportamiento común pero no se instancia.

```java
public abstract class Figura {
    public abstract double area();
}

public class Circulo extends Figura {
    private final double radio;

    public Circulo(double radio) {
        this.radio = radio;
    }

    @Override
    public double area() {
        return Math.PI * radio * radio;
    }
}
```

## Interfaces

Una interfaz define un contrato.

```java
public interface Saludable {
    void saludar();
}

public class Usuario implements Saludable {
    @Override
    public void saludar() {
        System.out.println("Hola");
    }
}
```

Una clase puede implementar varias interfaces, pero solo heredar de una clase.

## Composición frente a herencia

Prefiere composición cuando un objeto **tiene** otro, y herencia solo cuando existe una relación **es un**. La herencia excesiva acopla las clases.

## Buenas prácticas

- Mantén los atributos privados.
- Usa nombres claros.
- No crees getters y setters automáticos sin necesidad.
- Valida en los constructores y en los métodos que cambian estado.
- Programa contra interfaces cuando aporte flexibilidad.

## Ejercicios

En [`exercises/06-oop`](../../exercises/06-oop/):

- Crea una clase `Libro` con título, autor y año.
- Crea una clase `CuentaBancaria` con depósitos y retiros validados.
- Modela una jerarquía de figuras con área y perímetro.

## Reto

Diseña un pequeño sistema de biblioteca con `Libro`, `Usuario` y `Prestamo`. Piensa qué responsabilidad tiene cada clase antes de escribir código.

## Siguiente módulo

[09 — Excepciones](09-exceptions.md)
