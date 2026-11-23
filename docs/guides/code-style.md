# Estilo de código

OpenDev busca código legible y educativo. Las reglas automatizadas son deliberadamente moderadas para no convertir los ejercicios en un trámite.

## Java

### Formato

- Indentación de 4 espacios.
- Sin tabulaciones.
- Líneas de hasta 120 caracteres.
- Llaves de apertura en la misma línea.
- Una instrucción por línea.
- Archivo termina con salto de línea.

Spotless aplica el formato:

```bash
./mvnw spotless:check
./mvnw spotless:apply
```

Checkstyle comprueba las reglas estructurales:

```bash
./mvnw checkstyle:check
```

### Nombres

| Elemento  | Convención       | Ejemplo                  |
| --------- | ---------------- | ------------------------ |
| Clase     | PascalCase       | `CuentaBancaria`         |
| Método    | camelCase        | `calcularSaldo`          |
| Variable  | camelCase        | `saldoActual`            |
| Constante | UPPER_SNAKE_CASE | `TASA_IVA`               |
| Paquete   | minúsculas       | `org.opendev.ejercicios` |

Evita abreviaturas crípticas y nombres genéricos.

### Métodos

- Una responsabilidad por método.
- Pocos parámetros.
- Retornos tempranos para evitar anidación.
- Documenta los métodos públicos con Javadoc.

### Clases

- Atributos privados.
- Validación en constructores y métodos que cambian estado.
- Evita clases gigantes.
- Prefiere composición frente a herencia innecesaria.

### Comentarios

- Explica el porqué, no el qué.
- No dejes código comentado.
- No dejes `System.out.println` de depuración en la lógica final.
- Actualiza el Javadoc cuando cambie el comportamiento.

### Tests

- Nombres descriptivos: `shouldReturnZeroWhenArrayIsEmpty`.
- Un test, una idea.
- Cubre caso normal, límites y errores.
- Tests independientes y deterministas.

## Markdown

- Un solo `#` por documento.
- Enlaces relativos para archivos del repositorio.
- Bloques de código con lenguaje.
- Líneas razonablemente cortas.

## YAML y JSON

- Indentación de 2 espacios.
- Sin tabulaciones.
- Claves claras.
- Validar la sintaxis antes de commitear.

## Commits

Consulta [`commit-conventions.md`](commit-conventions.md).

## Herramientas

| Herramienta | Comando                   |
| ----------- | ------------------------- |
| Spotless    | `./mvnw spotless:check`   |
| Checkstyle  | `./mvnw checkstyle:check` |
| Tests       | `./mvnw test`             |
| Todo        | `./mvnw clean verify`     |

## Principio

El código se lee muchas más veces de las que se escribe. Optimiza para quien lo lee, especialmente si está aprendiendo.
