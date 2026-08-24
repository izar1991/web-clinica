import { z } from 'zod';

const base = (import.meta.env.BASE_URL || '/').replace(/\/?$/, '/');

export const especialidades = [
  { slug: 'medicina-general', title: 'Medicina General' },
  { slug: 'ginecologia-obstetricia', title: 'Ginecología y Obstetricia' },
  { slug: 'dermatologia', title: 'Dermatología' },
  { slug: 'aparato-digestivo', title: 'Aparato Digestivo' },
  { slug: 'psicologia', title: 'Psicología' },
  { slug: 'fisioterapia', title: 'Fisioterapia' },
  { slug: 'podologia', title: 'Podología' },
  { slug: 'enfermeria', title: 'Enfermería' },
  { slug: 'diagnostico-por-imagen', title: 'Diagnóstico por imagen' },
];

const especialidadSlugs = especialidades.map((especialidad) => especialidad.slug);

const profesionalSchema = z.object({
  id: z.string().trim().min(1),
  nombre: z.string().trim().min(1),
  role: z.string().trim().min(1),
  especialidad: z.enum(especialidadSlugs),
  image: z.string().trim().min(1),
  bio: z.string().trim().min(1),
});

const profesionalesSchema = z
  .array(profesionalSchema)
  .superRefine((items, ctx) => {
    const ids = new Set();

    items.forEach((item, index) => {
      if (ids.has(item.id)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: [index, 'id'],
          message: `El id \"${item.id}\" está duplicado en profesionales.`,
        });
      }

      ids.add(item.id);
    });
  });

const profesionalesData = [
  {
    id: 'jaime-paredes',
    nombre: 'Dr. Jaime Paredes',
    role: 'Director Médico · Medicina General · Urgencias',
    especialidad: 'medicina-general',
    image: `${base}images/Dr.Paredes_Amaya.png`,
    bio: 'Más de 25 años de experiencia en urgencias y medicina general. Especialista en atención primaria, diagnóstico clínico y coordinación de tratamientos complejos.',
  },
  {
    id: 'esteban-pedro-mussin',
    nombre: 'Dr. Esteban Pedro Mussin',
    role: 'Ginecología y Obstetricia',
    especialidad: 'ginecologia-obstetricia',
    image: `${base}images/Dr.Esteban_Pedro_Mussin.png`,
    bio: 'Más de 20 años de experiencia internacional en ginecología y obstetricia, con especial interés en cirugía ginecológica y atención integral a la salud femenina.',
  },
  {
    id: 'yolanda-medrano',
    nombre: 'Dra. Yolanda Medrano de Blas',
    role: 'Ginecología y Obstetricia',
    especialidad: 'ginecologia-obstetricia',
    image: `${base}images/Dra.Yolanda_Medrano_de_Blas.jpg`,
    bio: 'Especialista con una sólida trayectoria de más de 20 años de experiencia en salud femenina. Cuenta con formación de posgrado de Máster en Anticoncepción, Salud Sexual y Reproductiva por la Universidad de Alcalá. Es referente en el abordaje de la menopausia, ecografía avanzada, reproducción asistida y citología. Su perfil combina una preparación técnica avanzada y una dilatada experiencia clínica para ofrecer una atención integral de la mujer, enfocada en la prevención, el diagnóstico preciso y el tratamiento de las diferentes etapas de la salud reproductiva.',
  },
  {
    id: 'alvaro-gomez-tomas',
    nombre: 'Dr. Álvaro Gómez Tomás',
    role: 'Dermatología',
    especialidad: 'dermatologia',
    image: `${base}images/Dr.Alvaro_Gomez_Tomas.png`,
    bio: 'Formación en dermatología integral y pediátrica con especialidad en diagnóstico de patologías cutáneas, prevención y tratamiento estético y terapéutico.',
  },
  {
    id: 'jordi-asensio-porti',
    nombre: 'Dr. Jordi Asensio Porti',
    role: 'Gastroenterología · Aparato Digestivo',
    especialidad: 'aparato-digestivo',
    image: `${base}images/Dr-Jordi-Asensio-Porti.png`,
    bio: 'Graduado en Medicina por la Universidad Autónoma de Barcelona y especializado en Aparato Digestivo (Gastroenterología y Hepatología) vía MIR en el prestigioso Hospital de la Santa Creu i Sant Pau de Barcelona, el Dr. Jordi Asensio Porti ofrece una atención médica de primer nivel fundamentada en una rigurosa formación y una amplia experiencia clínica. Cuenta con la titulación en ecografía digestiva avanzada reconocida por la Asociación Española de Ecografía Digestiva, habiéndose formado a nivel práctico en el Hospital Universitario 12 de Octubre de Madrid, donde también se especializó en elastografía hepática / fibroscan. Asimismo, complementa su alta cualificación con un máster universitario en Patología Digestiva por la Universitat Oberta de Catalunya. En la actualidad, el Dr. Asensio consolida su actividad de consultorio privado y endoscopia digestiva en el Centre Sanitari Villaquet de Calafell, acercando una asistencia médica de máxima especialización, cercanía y confianza a los pacientes de todo el Baix Penedès. Esta actividad privada la compagina con su labor en un hospital universitario del área de Barcelona, donde forma parte de la unidad de enfermedad inflamatoria intestinal (colitis ulcerosa y enfermedad de Crohn), asiste en la planta de hospitalización de agudos de Patología Digestiva y ejerce en la Unidad de Endoscopia Digestiva, además de participar activamente en la formación de residentes y futuros digestólogos. Su sólida trayectoria hospitalaria, sumada a su dedicación personalizada en Calafell, le permite ofrecer a sus pacientes un diagnóstico preciso y un tratamiento avanzado para asegurar su bienestar y salud digestiva.',
  },
  {
    id: 'maria-cecilia-cristaldi',
    nombre: 'María Cecilia Cristaldi',
    role: 'Psicología',
    especialidad: 'psicologia',
    image: `${base}images/Dra.Maria_Cecilia_.png`,
    bio: 'Psicóloga con amplia experiencia en terapia individual, acompañamiento emocional y abordaje del trauma, con enfoque cercano y personalizado para adolescentes y adultos.',
  },
  {
    id: 'klay-escobar',
    nombre: 'Klay del Carmen Escobar',
    role: 'Psicología',
    especialidad: 'psicologia',
    image: `${base}images/Klay.png`,
    bio: 'Especializada en psicología infantil, terapia breve y acompañamiento en procesos emocionales y familiares, con más de 25 años de experiencia profesional.',
  },
  {
    id: 'luciano-herlein',
    nombre: 'Lic. Luciano Ezequiel Herlein',
    role: 'Fisioterapia y Rehabilitación',
    especialidad: 'fisioterapia',
    image: `${base}images/Lic.Luciano_Ezequiel_Herlein.png`,
    bio: 'Fisioterapeuta especializado en traumatología, rehabilitación funcional y deporte. Trabaja con técnicas avanzadas para la recuperación y la prevención de lesiones.',
  },
  {
    id: 'didac-melero',
    nombre: 'Dídac Melero',
    role: 'Podología',
    especialidad: 'podologia',
    image: `${base}images/Didac_Melero.png`,
    bio: 'Especialista en Podología, con formación universitaria por la Universitat de Barcelona y una sólida especialización en imagen diagnóstica, medicina nuclear y cirugía de antepié, gracias a su formación de posgrado en la Universitat de Manresa. Su perfil combina preparación técnica avanzada y experiencia clínica para ofrecer una atención integral del pie, enfocada en la prevención, el diagnóstico preciso y el tratamiento personalizado de las patologías podológicas.',
  },
  {
    id: 'meritxell-paredes',
    nombre: 'Dra. Meritxell Paredes',
    role: 'Medicina',
    especialidad: 'medicina-general',
    image: `${base}images/Dra.Meritxell_Paredes.png`,
    bio: 'Doctora con formación sanitaria y experiencia en Atención Primaria, lo que le aporta una visión médica integral del bienestar y del cuidado global del paciente. Su trayectoria combina la atención clínica general con tratamientos realzando el bienestar personal, siempre desde un enfoque basado en la seguridad, la confianza, la precisión profesional y la personalización de cada tratamiento.',
  },
  {
    id: 'calipso-del-pino',
    nombre: 'Calipso del Pino',
    role: 'Enfermería',
    especialidad: 'enfermeria',
    image: `${base}images/Calipso_del_Pino.png`,
    bio: 'Enfermera con amplia experiencia en extracciones, consultas, urgencias y control de tratamientos. Además, colabora en procedimientos diagnósticos y apoyo asistencial.',
  },
];

export const profesionales = profesionalesSchema.parse(profesionalesData);

export const contenidoEspecialidades = {
  'medicina-general': {
    title: 'Medicina General en Calafell',
    subtitle: 'Atención primaria, urgencias y seguimiento integral para toda la familia.',
    intro: 'La medicina general es la base de la atención preventiva y continua en nuestro centro. En Centre Sanitari Villaquet te ayudamos a cuidar tu salud en cada etapa, con revisiones periódicas, diagnóstico precoz, seguimiento de patologías y atención personalizada para adultos y familias.',
    image: `${base}images/servicios/medicina-general/medicina-general.jpg`,
    highlights: [
      { title: 'Consulta integral', text: 'Valoración clínica completa, diagnóstico y seguimiento en un entorno cercano y profesional.' },
      { title: 'Prevención', text: 'Revisiones, cribados y consejos para mantener una salud estable a largo plazo.' },
      { title: 'Atención continua', text: 'Acompañamiento para pacientes con necesidades crónicas, revisiones periódicas y seguimiento clínico.' },
    ],
    bullets: [
      'Consulta de medicina general con enfoque preventivo y personalizado',
      'Certificados médicos, revisiones y atención urgente básica',
      'Seguimiento de salud para adultos, familias y pacientes con necesidades continuadas',
      'Acompañamiento en la gestión de síntomas, controles y derivaciones especializadas',
    ],
    cta: 'Reservar medicina general',
  },
  'ginecologia-obstetricia': {
    title: 'Ginecología y Obstetricia en Calafell',
    subtitle: 'Salud femenina integral con diagnóstico preciso y atención personalizada.',
    intro: 'La ginecología y obstetricia en Calafell es una de las especialidades más demandadas por la atención preventiva, diagnóstica y terapéutica de la salud femenina. En nuestro centro te acompañamos en cada etapa, desde la revisión anual hasta el control durante el embarazo y la atención en la menopausia.',
    image: `${base}images/servicios/ginecologia-obstetricia/ginecologia-obstetricia.jpg`,
    highlights: [
      { title: 'Salud preventiva', text: 'Controles regulares, revisiones y seguimiento para mantener un equilibrio integral de salud.' },
      { title: 'Acompañamiento', text: 'Atención cercana en embarazo, fertilidad, menopausia y salud reproductiva.' },
      { title: 'Diagnóstico preciso', text: 'Ecografías y valoraciones para un abordaje seguro, personalizado y eficaz.' },
    ],
    bullets: [
      'Controles ginecológicos y revisiones preventivas',
      'Ecografía ginecológica y seguimiento obstétrico',
      'Atención en menopausia, fertilidad, salud reproductiva y bienestar integral',
      'Asesoramiento personalizado para cada etapa de la vida femenina',
    ],
    cta: 'Reservar ginecología',
  },
  dermatologia: {
    title: 'Dermatología en Calafell',
    subtitle: 'Diagnóstico y tratamiento de la piel, pelo y uñas con tecnología y experiencia.',
    intro: 'La dermatología es una especialidad clave para la prevención, diagnóstico y tratamiento de alteraciones cutáneas. En Centre Sanitari Villaquet tratamos afecciones comunes y complejas con un enfoque preventivo, diagnóstico preciso y tratamiento eficaz para mejorar la salud de la piel en todos los grupos de edad.',
    image: `${base}images/servicios/dermatologia/dermatologia.jpg`,
    highlights: [
      { title: 'Piel sana', text: 'Diagnóstico y tratamiento de eccemas, infecciones, dermatitis y alteraciones cutáneas frecuentes.' },
      { title: 'Prevención', text: 'Seguimiento y control de lesiones cutáneas con foco en la detección temprana.' },
      { title: 'Atención integral', text: 'Valoración para adultos, adolescentes y pacientes pediátricos con necesidades específicas.' },
    ],
    bullets: [
      'Valoración de lesiones cutáneas, eccemas, infecciones y otras patologías',
      'Prevención del cáncer de piel y seguimiento dermatológico',
      'Atención dermatológica para adultos, adolescentes y pacientes pediátricos',
      'Tratamientos personalizados según la necesidad y evolución de cada paciente',
    ],
    cta: 'Reservar dermatología',
  },
  'aparato-digestivo': {
    title: 'Aparato Digestivo en Calafell',
    subtitle: 'Especialidad en gastroenterología, endoscopia avanzada y ecografía digestiva.',
    intro: 'La especialidad de aparato digestivo del Dr. Jordi Asensio Porti integra la gastroenterología clínica, la hepatología y la endoscopia digestiva para ofrecer una atención precisa, preventiva y altamente especializada. En Centre Sanitari Villaquet se combinan la ecografía digestiva avanzada, la elastografía hepática y el seguimiento de enfermedades inflamatorias intestinales para diagnosticar a tiempo y tratar con máxima seguridad y cercanía.',
    image: `${base}images/servicios/aparato-digestivo/consulta-gastroenterologia.webp`,
    gallery: [
      `${base}images/servicios/aparato-digestivo/endoscopia-digestiva.webp`,
      `${base}images/servicios/aparato-digestivo/fibroscan-elastografia-hepatica.webp`,
      `${base}images/servicios/aparato-digestivo/ecografia-abdominal.webp`,
    ],
    highlights: [
      { title: 'Gastroenterología clínica y hepatología', text: 'Diagnóstico y seguimiento de enfermedades del tracto digestivo y del hígado con un enfoque preventivo, preciso y personalizado.' },
      { title: 'Endoscopia digestiva avanzada', text: 'Exploraciones diagnósticas y terapéuticas con máxima seguridad, precisión y enfoque individualizado.' },
      { title: 'Ecografía digestiva y fibroscan', text: 'Valoración no invasiva del hígado, tracto digestivo y fibrosis hepática para detectar alteraciones en fases tempranas.' },
    ],
    bullets: [
      'Consulta de gastroenterología, hepatología y aparato digestivo',
      'Endoscopia digestiva avanzada y detección precoz de patologías complejas',
      'Ecografía digestiva avanzada y elastografía hepática / fibroscan',
      'Acompañamiento integral en enfermedad inflamatoria intestinal, hepatopatías y patología digestiva compleja',
      'Atención cercana en Calafell y Baix Penedès con enfoque personalizado',
    ],
    cta: 'Reservar aparato digestivo',
  },
  psicologia: {
    title: 'Psicología en Calafell',
    subtitle: 'Acompañamiento profesional para tu salud mental y emocional.',
    intro: 'La psicología clínica ofrece un espacio de escucha, comprensión y tratamiento para afrontar momentos de ansiedad, estrés, duelos, cambios vitales y dificultades emocionales. En nuestro centro te brindamos terapia personalizada, un enfoque humano y un acompañamiento orientado a mejorar tu bienestar emocional y calidad de vida.',
    image: `${base}images/servicios/psicologia/psicologia.jpg`,
    highlights: [
      { title: 'Terapia individual', text: 'Acompañamiento en ansiedad, depresión, autoestima, duelos, relaciones y cambios vitales.' },
      { title: 'Atención personal', text: 'Abordaje integral para adolescentes, adultos y familias según cada situación.' },
      { title: 'Bienestar emocional', text: 'Herramientas y apoyo para fortalecer la salud mental y las capacidades de afrontamiento.' },
    ],
    bullets: [
      'Terapia individual, de pareja y acompañamiento familiar',
      'Atención en ansiedad, estrés, autoestima y procesos de duelo',
      'Apoyo emocional para adolescentes, adultos y personas en situaciones complejas',
      'Consultas centradas en la escucha activa, la comprensión y la estrategia terapéutica',
    ],
    cta: 'Reservar psicología',
  },
  fisioterapia: {
    title: 'Fisioterapia en Calafell',
    subtitle: 'Recuperación funcional, movilidad y bienestar físico.',
    intro: 'La fisioterapia en Calafell es una herramienta esencial para reducir el dolor, recuperar la movilidad y prevenir lesiones. Nuestro equipo trabaja en rehabilitación funcional, dolor musculoesquelético y bienestar físico para mejorar la calidad de vida de cada paciente, tanto en recuperación como en rendimiento.',
    image: `${base}images/servicios/fisioterapia/fisioterapia.jpg`,
    highlights: [
      { title: 'Dolor y movilidad', text: 'Tratamiento del dolor muscular, articular y postural con enfoque terapéutico integral.' },
      { title: 'Rehabilitación', text: 'Recuperación funcional tras intervenciones, traumatismos o procesos de inmovilización.' },
      { title: 'Rendimiento', text: 'Cuidados para deportistas y pacientes que quieren recuperar su actividad diaria con seguridad.' },
    ],
    bullets: [
      'Fisioterapia general, deportiva y traumatológica',
      'Rehabilitación postquirúrgica y recuperación funcional',
      'Tratamiento de dolor muscular, movilidad y rendimiento físico',
      'Plan de cuidado adaptado a necesidades, objetivos y evolución de cada paciente',
    ],
    cta: 'Reservar fisioterapia',
  },
  podologia: {
    title: 'Podología en Calafell',
    subtitle: 'Cuidado experto del pie para una mejor movilidad y calidad de vida.',
    intro: 'La podología ayuda a prevenir y tratar dolencias del pie y la extremidad inferior, mejorando la movilidad, el confort y la salud de cada paciente. Desde tratamientos conservadores hasta revisiones preventivas, trabajamos para que cada paso sea más cómodo, seguro y saludable.',
    image: `${base}images/servicios/podologia/podologia.jpg`,
    highlights: [
      { title: 'Cuidado del pie', text: 'Diagnóstico de deformidades, dolor, callosidades y patologías funcionales del pie.' },
      { title: 'Prevención', text: 'Revisiones periódicas para prevenir complicaciones y mejorar la movilidad.' },
      { title: 'Comodidad', text: 'Tratamientos personalizados para recuperar la funcionalidad y reducir el dolor diario.' },
    ],
    bullets: [
      'Diagnóstico y tratamiento de deformidades, callosidades y dolor del pie',
      'Atención en uñas, fascitis plantar, hiperqueratosis y movilidad',
      'Seguimiento personalizado para mejorar la funcionalidad y evitar complicaciones',
      'Valoración de problemas asociados a la postura y al estado biomecánico general',
    ],
    cta: 'Reservar podología',
  },
  enfermeria: {
    title: 'Enfermería en Calafell',
    subtitle: 'Cuidado profesional, extracción y seguimiento clínico cercano.',
    intro: 'La enfermería en Calafell ofrece atención clínica de alta calidad para extracciones, controles, valoración de síntomas y coordinación con el resto del equipo médico. Nuestro servicio está pensado para acompañarte con eficacia, rigor y cercanía en cada etapa del tratamiento y seguimiento.',
    image: `${base}images/servicios/enfermeria/enfermeria.jpg`,
    highlights: [
      { title: 'Procedimientos', text: 'Extracciones, control de tratamientos y valoración inicial de síntomas.' },
      { title: 'Seguimiento', text: 'Acompañamiento continuo para mejorar la adherencia al tratamiento y la evolución clínica.' },
      { title: 'Coordinación', text: 'Trabajo conjunto con el resto del equipo médico para una atención más segura y completa.' },
    ],
    bullets: [
      'Extracciones, controles y seguimiento de tratamientos',
      'Consulta de enfermería con atención personalizada',
      'Coordinación asistencial y apoyo en procedimientos básicos',
      'Evaluación clínica y seguimiento para una atención segura y cercana',
    ],
    cta: 'Reservar enfermería',
  },
  'diagnostico-por-imagen': {
    title: 'Diagnóstico por imagen en Calafell',
    subtitle: 'Tecnología avanzada para un diagnóstico preciso y seguro.',
    intro: 'El diagnóstico por imagen es esencial para detectar, confirmar y monitorizar patologías con rapidez y precisión. En nuestro centro disponemos de equipos modernos para ofrecer ecografías, radiología digital y exploraciones complementarias con altos estándares de calidad y atención segura.',
    image: `${base}images/servicios/diagnostico-por-imagen/diagnostico-por-imagen.jpg`,
    highlights: [
      { title: 'Tecnología', text: 'Ecografías, radiología digital y exploraciones con equipos de alta resolución.' },
      { title: 'Precisión', text: 'Diagnóstico ágil y fiable para orientar el tratamiento con mayor seguridad.' },
      { title: 'Acompañamiento', text: 'Atención cercana para que la realización de las pruebas sea simple y entendible.' },
    ],
    bullets: [
      'Ecografías específicas y diagnósticos de control',
      'Radiología digital para estudios generales y traumatológicos',
      'Atención ágil, segura y orientada a la precisión diagnóstica',
      'Coordinación con el equipo médico para una interpretación clínica y seguimiento adecuados',
    ],
    cta: 'Reservar diagnóstico',
  },
};
