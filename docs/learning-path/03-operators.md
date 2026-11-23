# Módulo 03 — Operadores

## Objetivos

- Usar operadores aritméticos, de comparación y lógicos.
- Entender la precedencia.
- Evitar errores comunes con división entera.

## Operadores aritméticos

| Operador | Significado    | Ejemplo  |
| -------- | -------------- | -------- |
| `+`      | Suma           | `2 + 3`  |
| `-`      | Resta          | `5 - 2`  |
| `*`      | Multiplicación | `4 * 3`  |
| `/`      | División       | `10 / 2` |
| `%`      | Módulo (resto) | `10 % 3` |

### División entera

```java
int resultado = 5 / 2;          // 2, no 2.5
double decimal = 5.0 / 2;       // 2.5
double correcto = (double) 5 / 2;
```

## Operadores de asignación

```java
int numero = 10;
numero += 5;   // 15
numero -= 3;   // 12
numero *= 2;   // 24
numero /= 4;   // 6
numero %= 4;   // 2
```

## Incremento y decremento

```java
int contador = 0;
contador++;    // 1
contador--;    // 0
```

## Comparación

| Operador | Significado   |
| -------- | ------------- |
| `==`     | Igual a       |
| `!=`     | Distinto de   |
| `>`      | Mayor que     |
| `<`      | Menor que     |
| `>=`     | Mayor o igual |
| `<=`     | Menor o igual |

Las comparaciones devuelven `boolean`.

```java
boolean mayorDeEdad = edad >= 18;
```

Para comparar `String`, usa `equals`, no `==`:

```java
String a = "hola";
String b = "hola";
boolean iguales = a.equals(b);
```

## Operadores lógicos

| Operador | Significado | Ejemplo                      |
| -------- | ----------- | ---------------------------- |
| `&&`     | Y lógico    | `edad >= 18 && tieneEntrada` |
| `\|\|`   | O lógico    | `esAdmin \|\| esEditor`      |
| `!`      | Negación    | `!activo`                    |

`&&` y `||` evalúan en cortocircuito: si el resultado ya se conoce, no evalúan el resto.

## Precedencia

1. Paréntesis.
2. Incremento y decremento.
3. Multiplicación, división y módulo.
4. Suma y resta.
5. Comparaciones.
6. `&&`.
7. `||`.

Ante la duda, usa paréntesis. Mejoran la lectura aunque no sean obligatorios.

## Siguiente módulo

[04 — Control de flujo](04-control-flow.md)
