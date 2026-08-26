# Sistema modular de información para la IA

## Fuente canónica

Los datos públicos utilizados por la prompt de Ollama viven en `src/data/clinic.json`.

Para cambiar una mutua, horario, contacto, especialidad o profesional, edita ese archivo y ejecuta:

```sh
npm run ai:prompt
```

No edites manualmente `docs/instrucciones_ia.txt`: es un archivo generado.

## Fichas profesionales

Añade cada profesional en `professionals` con estos campos obligatorios:

- `id`: identificador único, en minúsculas y con guiones.
- `name`: nombre público.
- `specialty`: especialidad publicada.
- `bio`: biografía breve y verificable.
- `image`: ruta de la imagen utilizada por la web.

El generador valida que no haya IDs duplicados y que la especialidad exista en el catálogo. Una ficha nueva se incorporará automáticamente a la prompt al regenerarla.

## Agenda

La disponibilidad real no se guarda en `clinic.json` ni se inventa en el documento. Ollama debe recibirla como contexto interno adicional en cada conversación, después de la prompt base, por ejemplo:

```text
TABLA DE DISPONIBILIDAD INTERNA
Fecha: 2026-08-26
Especialidad: Medicina general
- Libre de 10:00 a 11:30
- [HUECO PEQUEÑO de 20 minutos] a las 16:00
```

El asistente solo puede ofrecer horas presentes en esa tabla y debe aplicar la advertencia obligatoria a los huecos pequeños.

## Verificación

```sh
npm run ai:prompt:check
npm run build
```

El modo `check` falla si el documento generado no coincide con la fuente canónica.
