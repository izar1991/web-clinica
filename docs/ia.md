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

Cuando la tabla sea válida, las reservas se gestionan directamente por WhatsApp. La web solo se ofrece como alternativa si la tabla no llega, está vacía, ha caducado o no permite calcular una disponibilidad utilizable.

Las citas médicas duran 20 minutos. El contexto que inyecte FastAPI debe incluir una fecha y hora actuales fiables. El asistente nunca debe ofrecer fechas pasadas ni horas ya transcurridas del día actual. Para cada bloque libre debe ofrecer inicios separados por 20 minutos cuyo final quede dentro del bloque, con un mínimo de una opción y un máximo de cuatro.

## Verificación

```sh
npm run ai:prompt:check
npm run build
```

El modo `check` falla si el documento generado no coincide con la fuente canónica.

## Sincronización con el servidor de IA

En cada `push` a `main`, GitHub Actions regenera `docs/instrucciones_ia.txt` y puede copiarlo automáticamente a un servidor externo mediante SSH.

Configura estos secretos en GitHub, en `Settings > Secrets and variables > Actions`:

- `AI_SERVER_HOST`: dominio o IP del servidor.
- `AI_SERVER_USER`: usuario SSH.
- `AI_SERVER_PORT`: puerto SSH, opcional; por defecto `22`.
- `AI_SERVER_PATH`: carpeta remota de destino, ya existente y escribible por el usuario SSH.
- `AI_SERVER_SSH_KEY`: clave privada SSH asociada a una clave pública autorizada en el servidor.

El archivo se copiará como `instrucciones_ia.txt` dentro de `AI_SERVER_PATH`. La clave privada nunca se guarda en el repositorio. Si los secretos obligatorios no están configurados, la sincronización se omite y GitHub Pages continúa con normalidad.
