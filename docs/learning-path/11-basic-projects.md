# Módulo 11 — Proyectos básicos

## Objetivos

- Integrar los conceptos de los módulos anteriores.
- Practicar el diseño antes de escribir código.
- Escribir tests para la lógica principal.
- Presentar un proyecto mediante un Pull Request.

## Cómo abordar un proyecto

1. Lee el enunciado completo.
2. Escribe los casos de uso en lenguaje natural.
3. Identifica las clases y responsabilidades.
4. Empieza por la lógica más simple.
5. Añade tests.
6. Mejora la presentación por consola al final.

No empieces por la interfaz. Primero haz que la lógica funcione y esté probada.

## Proyectos propuestos

### Calculadora

- Operaciones básicas.
- Validación de división entre cero.
- Historial de operaciones.

Conceptos: métodos, control de flujo, excepciones.

### Gestor de contactos

- Añadir, buscar, actualizar y eliminar contactos.
- Evitar duplicados por correo.
- Persistencia opcional en un archivo de texto.

Conceptos: clases, colecciones, excepciones, entrada/salida.

### Gestor de tareas

- Crear tareas con título, prioridad y estado.
- Marcar como completadas.
- Filtrar por estado o prioridad.

Conceptos: POO, `List`, `Map`, tests.

### Sistema de biblioteca

- Libros, usuarios y préstamos.
- Validar disponibilidad.
- Calcular fechas de devolución.

Conceptos: POO, fechas, validación, colecciones.

### Inventario simple

- Productos con precio y cantidad.
- Añadir stock y registrar ventas.
- Alertas de stock mínimo.

Conceptos: `Map`, encapsulación, validación, tests.

## Estructura recomendada

```text
projects/beginner/<nombre>/
├── README.md
└── src/
    ├── main/java/org/opendev/projects/<nombre>/
    └── test/java/org/opendev/projects/<nombre>/
```

Los proyectos no se compilan con el `pom.xml` principal salvo que se integren explícitamente. Documenta cómo ejecutarlos.

## Criterios de un buen proyecto

- El README explica qué hace y cómo ejecutarlo.
- La lógica principal tiene tests.
- No hay dependencias innecesarias.
- Los nombres son claros.
- Los errores se manejan con mensajes útiles.
- El código sigue las convenciones del repositorio.

## Publicar el proyecto

1. Crea un issue con la propuesta.
2. Añade el proyecto en `projects/`.
3. Incluye tests.
4. Ejecuta `./mvnw clean verify` y `npm run validate`.
5. Abre un Pull Request explicando qué aprendiste.

## Recursos

- [`projects/README.md`](../../projects/README.md)
- [`CONTRIBUTING.md`](../../CONTRIBUTING.md)
- [`docs/guides/code-review.md`](../guides/code-review.md)

## Fin de la ruta inicial

Al terminar estos proyectos, estarás preparado para profundizar en estructuras de datos, diseño de software, testing avanzado y desarrollo de aplicaciones reales. La comunidad de OpenDev seguirá creciendo contigo.
