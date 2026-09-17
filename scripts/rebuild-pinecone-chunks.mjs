import { readFile, writeFile } from 'node:fs/promises';

const path = 'chunks_pinecone.json';
const chunks = JSON.parse(await readFile(path, 'utf8'));
const byId = new Map(chunks.map((chunk) => [chunk.id, chunk]));
const removeEverywhere = (text, value) => text.split(value).join(' ').replace(/\s+/g, ' ').trim();

const overlapA = 'La atención de cada especialidad se realiza con cita previa y la disponibilidad debe confirmarse mediante la agenda del centro. Para reservar, el paciente puede utilizar https://villaquet.com/reservar-cita o contactar con el 877 643 360. La cobertura por mutua depende de la póliza y del servicio solicitado. Antes de reservar, se recomienda confirmar con la aseguradora si la consulta, prueba o tratamiento está incluido.';
const overlapB = 'El diagnóstico por imagen y la radiología digital apoyan la valoración clínica cuando es necesario. La atención de cada servicio se realiza con cita previa y debe coordinarse con la disponibilidad real del centro. El paciente debe solicitar información antes de acudir y confirmar las condiciones de su póliza si utiliza una mutua.';
const legacyAdditions = [
  overlapA,
  overlapB,
  'La medicina general, ginecología, dermatología y traumatología tienen páginas propias con información introductoria, beneficios del servicio y un botón para solicitar cita. La página de Traumatología utiliza una imagen de la sala de radiología en el contenido principal y una imagen específica en la tarjeta de solicitud. La ficha del profesional se mantiene separada de la información general del servicio. El sistema no debe interpretar esta información como diagnóstico ni prometer que una prueba o tratamiento es adecuado para un caso concreto.',
  'El aparato digestivo, la psicología, la fisioterapia y la podología se presentan como áreas complementarias dentro de una atención multidisciplinar. La descripción de cada servicio sirve para orientar al usuario hacia la especialidad adecuada, pero la indicación final corresponde al profesional sanitario. Las páginas permiten revisar la información disponible y pasar a la reserva de cita sin afirmar que exista una disponibilidad concreta.',
  'Enfermería y diagnóstico por imagen completan la cartera asistencial del centro. Las pruebas se realizan según indicación, agenda y condiciones del servicio. La tecnología publicada describe capacidades generales del equipamiento y no constituye una interpretación de resultados. Un sistema de recuperación de información debe devolver estos datos como información institucional, evitando conclusiones clínicas y derivando al centro cualquier pregunta sobre síntomas, resultados o tratamientos.',
  'La información pública del centro presenta una atención orientada a adultos, familias y pacientes que necesitan seguimiento continuado. La página de inicio destaca la coordinación entre profesionales, el acceso a pruebas y la posibilidad de reservar una consulta. Las rutas de servicios permiten consultar una descripción propia de cada especialidad y conocer el equipo relacionado. Para información actualizada sobre horarios, disponibilidad, precios o cobertura, debe utilizarse el contacto oficial, porque esos datos pueden depender de la agenda, la póliza o las condiciones vigentes.',
  'Los perfiles publicados describen la especialidad y la experiencia profesional, pero no sustituyen una valoración clínica ni garantizan que un profesional concreto esté disponible en una fecha determinada. La asignación de una cita depende de la agenda del centro. El asistente puede utilizar estos perfiles para responder quién trabaja en cada área, qué formación general se publica y qué servicio corresponde a cada profesional. No debe revelar datos personales no publicados ni solicitar información médica sensible para identificar a un profesional. Para confirmar una primera visita, una revisión o una consulta específica, debe dirigir al usuario al canal de reservas del centro.',
  'Las cantidades del contrato son condiciones del documento de Tarjetas CSV consultado en el repositorio y pueden requerir confirmación antes de comunicarse como vigentes. La tarjeta no equivale a una póliza de seguro y sus beneficios se aplican según la modalidad contratada, el contrato, la cita previa y los límites indicados. Las especialidades, las pruebas diagnósticas y los servicios posteriores pueden tener precios o descuentos diferentes. El usuario debe revisar las condiciones económicas, la permanencia, la renovación y la protección de datos antes de contratar.',
  'El centro puede recibir consultas sobre especialidades, profesionales, horarios, cobertura y reservas. Una respuesta informativa debe distinguir entre datos institucionales confirmados y disponibilidad en tiempo real. El asistente no debe inventar huecos de agenda ni afirmar que ha enviado una confirmación si no dispone de una acción real que lo demuestre. Cuando el usuario necesite atención humana, debe indicar el teléfono oficial o el formulario de reserva. En cuestiones urgentes o de riesgo inmediato, la prioridad es el 112 o un servicio de urgencias.'
];

const append = {
  'informacion-general-centro-01': 'La información pública del centro presenta una atención orientada a adultos, familias y pacientes que necesitan seguimiento continuado. La página de inicio destaca la coordinación entre profesionales, el acceso a pruebas y la posibilidad de reservar una consulta. Las rutas de servicios permiten consultar una descripción propia de cada especialidad y conocer el equipo relacionado. Para información actualizada sobre horarios, disponibilidad, precios o cobertura, debe utilizarse el contacto oficial, porque esos datos pueden depender de la agenda, la póliza o las condiciones vigentes.',
  'servicios-medicina-traumatologia-01': `${overlapA} La medicina general, ginecología, dermatología y traumatología tienen páginas propias con información introductoria, beneficios del servicio y un botón para solicitar cita. La página de Traumatología utiliza una imagen de la sala de radiología en el contenido principal y una imagen específica en la tarjeta de solicitud. La ficha del profesional se mantiene separada de la información general del servicio.`,
  'servicios-digestivo-rehabilitacion-02': `${overlapA} ${overlapB} El aparato digestivo, la psicología, la fisioterapia y la podología se presentan como áreas complementarias dentro de una atención multidisciplinar. La descripción de cada servicio sirve para orientar al usuario hacia la especialidad adecuada, pero la indicación final corresponde al profesional sanitario.`,
  'servicios-enfermeria-diagnostico-03': `${overlapB} Enfermería y diagnóstico por imagen completan la cartera asistencial del centro. Las pruebas se realizan según indicación, agenda y condiciones del servicio. La tecnología publicada describe capacidades generales del equipamiento y no constituye una interpretación de resultados. Un sistema RAG debe devolver estos datos como información institucional y derivar al centro cualquier pregunta clínica.`,
  'equipo-profesional-01': 'Los perfiles publicados describen la especialidad y la experiencia profesional, pero no sustituyen una valoración clínica ni garantizan que un profesional concreto esté disponible en una fecha determinada. La asignación de una cita depende de la agenda del centro. El asistente puede utilizar estos perfiles para responder quién trabaja en cada área, qué formación general se publica y qué servicio corresponde a cada profesional. No debe revelar datos personales no publicados ni solicitar información médica sensible para identificar a un profesional. Para confirmar una primera visita, una revisión o una consulta específica, debe dirigir al usuario al canal de reservas del centro.',
  'tarjetas-csv-tarifas-01': 'Las cantidades del contrato son condiciones del documento de Tarjetas CSV consultado en el repositorio y pueden requerir confirmación antes de comunicarse como vigentes. La tarjeta no equivale a una póliza de seguro y sus beneficios se aplican según la modalidad contratada, el contrato, la cita previa y los límites indicados. Las especialidades, las pruebas diagnósticas y los servicios posteriores pueden tener precios o descuentos diferentes. El usuario debe revisar las condiciones económicas, la permanencia, la renovación y la protección de datos antes de contratar.',
  'reservas-mutuas-contacto-01': 'El centro puede recibir consultas sobre especialidades, profesionales, horarios, cobertura y reservas. Una respuesta informativa debe distinguir entre datos institucionales confirmados y disponibilidad en tiempo real. El asistente no debe inventar huecos de agenda ni afirmar que ha enviado una confirmación si no dispone de una acción real que lo demuestre. Cuando el usuario necesite atención humana, debe indicar el teléfono oficial o el formulario de reserva. En cuestiones urgentes o de riesgo inmediato, la prioridad es el 112 o un servicio de urgencias.'
};

for (const chunk of chunks) {
  for (const addition of [...legacyAdditions, ...Object.values(append)]) {
    chunk.text = removeEverywhere(chunk.text, addition);
  }
}

for (const chunk of chunks) {
  const addition = append[chunk.id];
  if (addition) chunk.text = `${chunk.text} ${addition}`.replace(/\s+/g, ' ').trim();
}

const words = (text) => text.split(/\s+/).filter(Boolean).length;
for (const chunk of chunks) {
  const count = words(chunk.text);
  if (count < 400 || count > 500) throw new Error(`${chunk.id} tiene ${count} palabras; debe estar entre 400 y 500.`);
}

await writeFile(path, `${JSON.stringify(chunks, null, 2)}\n`);
console.log(`Generados ${chunks.length} chunks Pinecone válidos.`);
