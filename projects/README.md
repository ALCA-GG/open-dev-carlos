# Proyectos

Los proyectos integran varios conceptos y producen algo que puedes ejecutar y mostrar. Están organizados por dificultad.

## Niveles

| Nivel        | Directorio                       | Qué practicas                              |
| ------------ | -------------------------------- | ------------------------------------------ |
| Principiante | [`beginner/`](beginner/)         | Variables, condicionales, bucles y métodos |
| Intermedio   | [`intermediate/`](intermediate/) | POO, colecciones, excepciones y tests      |
| Avanzado     | [`advanced/`](advanced/)         | Diseño, persistencia y proyectos completos |

## Cómo plantear un proyecto

1. Lee el enunciado.
2. Escribe los casos de uso.
3. Diseña las clases y sus responsabilidades.
4. Implementa la lógica principal.
5. Añade tests.
6. Mejora la interfaz por consola.
7. Documenta cómo ejecutarlo.

## Estructura recomendada

```text
projects/<nivel>/<nombre>/
├── README.md
└── src/
    ├── main/java/org/opendev/projects/<nombre>/
    └── test/java/org/opendev/projects/<nombre>/
```

Los proyectos no forman parte del build principal salvo que se integren en el `pom.xml`. Indica en el README cómo compilarlos y ejecutarlos.

## Criterios de calidad

- El README explica el objetivo y los comandos.
- La lógica está separada de la entrada/salida.
- Hay tests para las reglas principales.
- No hay dependencias innecesarias.
- Los errores se manejan con mensajes claros.
- El código sigue el estilo del repositorio.

## Contribuir

Propón el proyecto en un issue antes de implementarlo. Consulta [`CONTRIBUTING.md`](../CONTRIBUTING.md) y [`docs/learning-path/11-basic-projects.md`](../docs/learning-path/11-basic-projects.md).
