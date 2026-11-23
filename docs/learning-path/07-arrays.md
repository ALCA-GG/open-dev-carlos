# Módulo 07 — Arrays y cadenas

## Objetivos

- Declarar y recorrer arrays.
- Usar arrays multidimensionales.
- Manejar cadenas con sus métodos habituales.
- Comparar cadenas correctamente.

## Arrays

Un array guarda varios valores del mismo tipo.

```java
int[] notas = {8, 7, 9, 6};
String[] nombres = new String[3];

nombres[0] = "Ana";
nombres[1] = "Luis";
nombres[2] = "Marta";
```

Los índices empiezan en `0`. El último índice es `longitud - 1`.

## Recorrer un array

```java
for (int i = 0; i < notas.length; i++) {
    System.out.println(notas[i]);
}

for (int nota : notas) {
    System.out.println(nota);
}
```

## Arrays multidimensionales

```java
int[][] matriz = {
    {1, 2, 3},
    {4, 5, 6}
};

System.out.println(matriz[1][2]); // 6
```

## Operaciones habituales

```java
int[] numeros = {3, 1, 4, 1, 5};
Arrays.sort(numeros);
int maximo = Arrays.stream(numeros).max().getAsInt();
```

Para copiar un array, usa `Arrays.copyOf` o `clone`; no asignes una variable a otra si esperas una copia independiente.

## Cadenas

`String` es inmutable: sus métodos devuelven una cadena nueva.

```java
String texto = "  Hola, OpenDev  ";

texto.length();
texto.trim();
texto.toUpperCase();
texto.toLowerCase();
texto.contains("Open");
texto.startsWith("  Hola");
texto.substring(2, 6);
texto.replace("OpenDev", "mundo");
```

## Comparar cadenas

```java
String a = "java";
String b = "JAVA";

boolean iguales = a.equals(b);            // false
boolean sinMayusculas = a.equalsIgnoreCase(b); // true
```

No uses `==` para comparar contenido.

## Dividir y unir

```java
String csv = "Ana,Luis,Marta";
String[] partes = csv.split(",");
String unido = String.join(" - ", partes);
```

## Fin de la ruta actual

Los siguientes módulos se publicarán cuando el alumnado haya completado esta etapa. No se adelanta material para evitar que se acumule contenido sin practicar.
