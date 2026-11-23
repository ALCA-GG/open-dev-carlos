# Revisión de código

La revisión busca mejorar el código y ayudar a aprender. No es un examen ni una competición.

## Qué se evalúa

1. **Corrección:** ¿hace lo que dice?
2. **Legibilidad:** ¿se entiende sin explicaciones externas?
3. **Valor educativo:** ¿ayuda a aprender?
4. **Convenciones:** ¿sigue el estilo del proyecto?
5. **Nombres:** ¿describen la intención?
6. **Estructura:** ¿respeta la separación de responsabilidades?
7. **Tests:** ¿cubre casos normales y límite?
8. **Documentación:** ¿está actualizada?
9. **Alcance:** ¿el cambio se limita a lo pedido?

## Cómo dar feedback

- Empieza por lo que está bien.
- Explica **qué**, **por qué** y **cómo** mejorar.
- Usa preguntas cuando algo no esté claro.
- Distingue entre bloqueante y sugerencia.
- No reescribas el código de otra persona sin explicar el motivo.
- Evita sarcasmo y juicios personales.

Ejemplo:

> En `calcularPromedio` se divide entre `3` de forma fija. Si mañana se añade una cuarta nota, el resultado será incorrecto. ¿Podríamos usar la longitud del array o recibir la cantidad como parámetro?

## Cómo recibir feedback

- Asume buena intención.
- Pregunta si algo no se entiende.
- Aplica los cambios que tengan sentido.
- Si no estás de acuerdo, argumenta con ejemplos.
- No lo tomes como algo personal: se revisa el código, no a ti.

## Resultados posibles

| Resultado                | Significado                                      |
| ------------------------ | ------------------------------------------------ |
| Aprobado                 | Se puede integrar.                               |
| Aprobado con sugerencias | Se puede integrar; las mejoras son opcionales.   |
| Cambios solicitados      | Hay que corregir algo antes del merge.           |
| Rechazado                | No encaja con el proyecto; se explica el motivo. |

## Revisión de seguridad

Cuando el cambio toca entradas, archivos, configuración o dependencias, revisa:

- Validación de datos externos.
- Rutas y nombres de archivo.
- Secretos expuestos.
- Permisos de workflows.
- Dependencias nuevas y su mantenimiento.
- Errores que revelan información sensible.

## Tiempo de respuesta

No hay plazos garantizados. Si un PR lleva tiempo sin revisión, deja un comentario amable o consulta en Discussions.

## Principio final

Una revisión debe dejar el código mejor y a la persona con más ganas de seguir aprendiendo.
