# Módulo 10 — Colecciones

## Objetivos

- Usar `List`, `Set` y `Map`.
- Elegir la colección adecuada.
- Recorrer colecciones con bucles y streams básicos.

## ¿Por qué colecciones?

Los arrays tienen tamaño fijo. Las colecciones crecen y ofrecen operaciones útiles.

## List

Una lista mantiene el orden y permite duplicados.

```java
List<String> nombres = new ArrayList<>();
nombres.add("Ana");
nombres.add("Luis");
nombres.add("Ana");

System.out.println(nombres.get(0)); // Ana
System.out.println(nombres.size()); // 3
```

## Set

Un conjunto no permite duplicados.

```java
Set<String> correos = new HashSet<>();
correos.add("ana@example.com");
correos.add("ana@example.com");

System.out.println(correos.size()); // 1
```

`HashSet` no garantiza orden. `LinkedHashSet` conserva el orden de inserción y `TreeSet` ordena.

## Map

Un mapa asocia claves con valores.

```java
Map<String, Integer> edades = new HashMap<>();
edades.put("Ana", 20);
edades.put("Luis", 22);

System.out.println(edades.get("Ana"));

for (Map.Entry<String, Integer> entrada : edades.entrySet()) {
    System.out.println(entrada.getKey() + ": " + entrada.getValue());
}
```

## Recorrer colecciones

```java
for (String nombre : nombres) {
    System.out.println(nombre);
}

nombres.forEach(System.out::println);
```

## Operaciones útiles

```java
nombres.contains("Ana");
nombres.remove("Luis");
nombres.isEmpty();
nombres.clear();

edades.containsKey("Ana");
edades.getOrDefault("Marta", 0);
```

## Streams básicos

```java
List<Integer> numeros = List.of(1, 2, 3, 4, 5);

List<Integer> pares = numeros.stream()
        .filter(n -> n % 2 == 0)
        .toList();
```

No necesitas dominar streams para empezar. Primero aprende a recorrer colecciones con bucles.

## Elegir la colección

| Necesidad          | Colección    |
| ------------------ | ------------ |
| Orden y duplicados | `ArrayList`  |
| Sin duplicados     | `HashSet`    |
| Clave → valor      | `HashMap`    |
| Orden por clave    | `TreeMap`    |
| Cola FIFO          | `ArrayDeque` |

## Buenas prácticas

- Declara variables con la interfaz (`List`, `Map`) y crea la implementación concreta.
- No modifiques una colección mientras la recorres; usa un iterador o una copia.
- Para datos inmutables, usa `List.of`, `Set.of` y `Map.of`.

## Ejercicios

En [`exercises/08-collections`](../../exercises/08-collections/):

- Guarda una lista de tareas y elimina las completadas.
- Cuenta cuántas veces aparece cada palabra en un texto.
- Gestiona un directorio de contactos con `Map`.

## Reto

Crea un inventario con `Map<String, Integer>`. Permite añadir productos, actualizar cantidades y mostrar los que estén por debajo de un mínimo.

## Siguiente módulo

[11 — Proyectos básicos](11-basic-projects.md)
