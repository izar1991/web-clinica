export const especialitatsCa = /** @type {Record<string, string>} */ ({
  'medicina-general': 'Medicina general',
  'ginecologia-obstetricia': 'Ginecologia i obstetrícia',
  dermatologia: 'Dermatologia',
  psicologia: 'Psicologia',
  fisioterapia: 'Fisioteràpia',
  podologia: 'Podologia',
  enfermeria: 'Infermeria',
  'diagnostico-por-imagen': 'Diagnòstic per la imatge',
});

export const professionalsCa = /** @type {Record<string, { role: string; bio: string }>} */ ({
  'jaime-paredes': {
    role: 'Director mèdic · Medicina general · Urgències',
    bio: "Més de 25 anys d'experiència en urgències i medicina general. Especialista en atenció primària, diagnòstic clínic i coordinació de tractaments complexos.",
  },
  'esteban-pedro-mussin': {
    role: 'Ginecologia i obstetrícia',
    bio: "Més de 20 anys d'experiència internacional en ginecologia i obstetrícia, amb especial interès en cirurgia ginecològica i atenció integral de la salut femenina.",
  },
  'yolanda-medrano': {
    role: 'Ginecologia i obstetrícia',
    bio: 'Especialista amb una sòlida trajectòria de més de 20 anys d’experiència en salut femenina. Té formació de postgrau de Màster en Anticoncepció, Salut Sexual i Reproductiva per la Universitat d’Alcalá. És referent en l’abordatge de la menopausa, l’ecografia avançada, la reproducció assistida i la citologia. El seu perfil combina una preparació tècnica avançada i una àmplia experiència clínica per oferir una atenció integral de la dona, centrada en la prevenció, el diagnòstic precís i el tractament de les diferents etapes de la salut reproductiva.',
  },
  'alvaro-gomez-tomas': {
    role: 'Dermatologia',
    bio: 'Formació en dermatologia integral i pediàtrica, amb especialització en el diagnòstic de patologies cutànies, la prevenció i el tractament estètic i terapèutic.',
  },
  'maria-cecilia-cristaldi': {
    role: 'Psicologia',
    bio: 'Psicòloga amb àmplia experiència en teràpia individual, acompanyament emocional i abordatge del trauma, amb un enfocament proper i personalitzat per a adolescents i adults.',
  },
  'klay-escobar': {
    role: 'Psicologia',
    bio: 'Especialitzada en psicologia infantil, teràpia breu i acompanyament en processos emocionals i familiars, amb més de 25 anys d’experiència professional.',
  },
  'luciano-herlein': {
    role: 'Fisioteràpia i rehabilitació',
    bio: 'Fisioterapeuta especialitzat en traumatologia, rehabilitació funcional i esport. Treballa amb tècniques avançades per a la recuperació i la prevenció de lesions.',
  },
  'didac-melero': {
    role: 'Podologia',
    bio: 'Especialista en podologia, amb formació universitària per la Universitat de Barcelona i una sòlida especialització en imatge diagnòstica, medicina nuclear i cirurgia de l’avantpeu, gràcies a la seva formació de postgrau a la Universitat de Manresa. El seu perfil combina una preparació tècnica avançada i experiència clínica per oferir una atenció integral del peu, centrada en la prevenció, el diagnòstic precís i el tractament personalitzat de les patologies podològiques.',
  },
  'meritxell-paredes': {
    role: 'Medicina',
    bio: 'Doctora amb formació sanitària i experiència en atenció primària, que li aporta una visió mèdica integral del benestar i la cura global del pacient. La seva trajectòria combina l’atenció clínica general amb tractaments orientats al benestar personal, sempre des d’un enfocament basat en la seguretat, la confiança, la precisió professional i la personalització de cada tractament.',
  },
  'calipso-del-pino': {
    role: 'Infermeria',
    bio: 'Infermera amb àmplia experiència en extraccions, consultes, urgències i control de tractaments. També col·labora en procediments diagnòstics i suport assistencial.',
  },
});

export const contingutEspecialitatsCa = {
  'medicina-general': {
    title: 'Medicina general a Calafell', subtitle: 'Atenció primària, urgències i seguiment integral per a tota la família.',
    intro: 'La medicina general és la base de l’atenció preventiva i continuada al nostre centre. A Centre Sanitari Villaquet t’ajudem a cuidar la teva salut en cada etapa, amb revisions periòdiques, diagnòstic precoç, seguiment de patologies i atenció personalitzada per a adults i famílies.',
    highlights: [['Consulta integral', 'Valoració clínica completa, diagnòstic i seguiment en un entorn proper i professional.'], ['Prevenció', 'Revisions, cribratges i consells per mantenir una salut estable a llarg termini.'], ['Atenció continuada', 'Acompanyament per a pacients amb necessitats cròniques, revisions periòdiques i seguiment clínic.']],
    bullets: ['Consulta de medicina general amb enfocament preventiu i personalitzat', 'Certificats mèdics, revisions i atenció urgent bàsica', 'Seguiment de salut per a adults, famílies i pacients amb necessitats continuades', 'Acompanyament en la gestió de símptomes, controls i derivacions especialitzades'], cta: 'Reservar medicina general',
  },
  'ginecologia-obstetricia': {
    title: 'Ginecologia i obstetrícia a Calafell', subtitle: 'Salut femenina integral amb diagnòstic precís i atenció personalitzada.',
    intro: 'La ginecologia i obstetrícia a Calafell és una de les especialitats més sol·licitades per l’atenció preventiva, diagnòstica i terapèutica de la salut femenina. Al nostre centre t’acompanyem en cada etapa, des de la revisió anual fins al control de l’embaràs i l’atenció durant la menopausa.',
    highlights: [['Salut preventiva', 'Controls regulars, revisions i seguiment per mantenir un equilibri integral de salut.'], ['Acompanyament', 'Atenció propera durant l’embaràs, la fertilitat, la menopausa i la salut reproductiva.'], ['Diagnòstic precís', 'Ecografies i valoracions per a un abordatge segur, personalitzat i eficaç.']],
    bullets: ['Controls ginecològics i revisions preventives', 'Ecografia ginecològica i seguiment obstètric', 'Atenció en menopausa, fertilitat, salut reproductiva i benestar integral', 'Assessorament personalitzat per a cada etapa de la vida femenina'], cta: 'Reservar ginecologia',
  },
  dermatologia: { title: 'Dermatologia a Calafell', subtitle: 'Diagnòstic i tractament de la pell, el cabell i les ungles amb tecnologia i experiència.', intro: 'La dermatologia és una especialitat clau per a la prevenció, el diagnòstic i el tractament de les alteracions cutànies. A Centre Sanitari Villaquet tractem afeccions comunes i complexes amb un enfocament preventiu, un diagnòstic precís i un tractament eficaç per millorar la salut de la pell en totes les edats.', highlights: [['Pell sana', 'Diagnòstic i tractament d’èczemes, infeccions, dermatitis i alteracions cutànies freqüents.'], ['Prevenció', 'Seguiment i control de lesions cutànies amb especial atenció a la detecció precoç.'], ['Atenció integral', 'Valoració per a adults, adolescents i pacients pediàtrics amb necessitats específiques.']], bullets: ['Valoració de lesions cutànies, èczemes, infeccions i altres patologies', 'Prevenció del càncer de pell i seguiment dermatològic', 'Atenció dermatològica per a adults, adolescents i pacients pediàtrics', 'Tractaments personalitzats segons les necessitats i l’evolució de cada pacient'], cta: 'Reservar dermatologia' },
  psicologia: { title: 'Psicologia a Calafell', subtitle: 'Acompanyament professional per a la teva salut mental i emocional.', intro: 'La psicologia clínica ofereix un espai d’escolta, comprensió i tractament per afrontar moments d’ansietat, estrès, dols, canvis vitals i dificultats emocionals. Al nostre centre t’oferim teràpia personalitzada, un enfocament humà i un acompanyament orientat a millorar el teu benestar emocional i la qualitat de vida.', highlights: [['Teràpia individual', 'Acompanyament en ansietat, depressió, autoestima, dols, relacions i canvis vitals.'], ['Atenció personal', 'Abordatge integral per a adolescents, adults i famílies segons cada situació.'], ['Benestar emocional', 'Eines i suport per reforçar la salut mental i les capacitats d’afrontament.']], bullets: ['Teràpia individual, de parella i acompanyament familiar', 'Atenció en ansietat, estrès, autoestima i processos de dol', 'Suport emocional per a adolescents, adults i persones en situacions complexes', 'Consultes centrades en l’escolta activa, la comprensió i l’estratègia terapèutica'], cta: 'Reservar psicologia' },
  fisioterapia: { title: 'Fisioteràpia a Calafell', subtitle: 'Recuperació funcional, mobilitat i benestar físic.', intro: 'La fisioteràpia a Calafell és una eina essencial per reduir el dolor, recuperar la mobilitat i prevenir lesions. El nostre equip treballa en rehabilitació funcional, dolor musculoesquelètic i benestar físic per millorar la qualitat de vida de cada pacient, tant en recuperació com en rendiment.', highlights: [['Dolor i mobilitat', 'Tractament del dolor muscular, articular i postural amb un enfocament terapèutic integral.'], ['Rehabilitació', 'Recuperació funcional després d’intervencions, traumatismes o processos d’immobilització.'], ['Rendiment', 'Cures per a esportistes i pacients que volen recuperar la seva activitat diària amb seguretat.']], bullets: ['Fisioteràpia general, esportiva i traumatològica', 'Rehabilitació postquirúrgica i recuperació funcional', 'Tractament del dolor muscular, la mobilitat i el rendiment físic', 'Pla de cura adaptat a les necessitats, els objectius i l’evolució de cada pacient'], cta: 'Reservar fisioteràpia' },
  podologia: { title: 'Podologia a Calafell', subtitle: 'Cura experta del peu per a una millor mobilitat i qualitat de vida.', intro: 'La podologia ajuda a prevenir i tractar dolències del peu i de l’extremitat inferior, millorant la mobilitat, el confort i la salut de cada pacient. Des de tractaments conservadors fins a revisions preventives, treballem perquè cada pas sigui més còmode, segur i saludable.', highlights: [['Cura del peu', 'Diagnòstic de deformitats, dolor, durícies i patologies funcionals del peu.'], ['Prevenció', 'Revisions periòdiques per prevenir complicacions i millorar la mobilitat.'], ['Comoditat', 'Tractaments personalitzats per recuperar la funcionalitat i reduir el dolor diari.']], bullets: ['Diagnòstic i tractament de deformitats, durícies i dolor del peu', 'Atenció en ungles, fascitis plantar, hiperqueratosi i mobilitat', 'Seguiment personalitzat per millorar la funcionalitat i evitar complicacions', 'Valoració de problemes associats a la postura i a l’estat biomecànic general'], cta: 'Reservar podologia' },
  enfermeria: { title: 'Infermeria a Calafell', subtitle: 'Cura professional, extraccions i seguiment clínic proper.', intro: 'La infermeria a Calafell ofereix atenció clínica d’alta qualitat per a extraccions, controls, valoració de símptomes i coordinació amb la resta de l’equip mèdic. El nostre servei està pensat per acompanyar-te amb eficàcia, rigor i proximitat en cada etapa del tractament i del seguiment.', highlights: [['Procediments', 'Extraccions, control de tractaments i valoració inicial de símptomes.'], ['Seguiment', 'Acompanyament continu per millorar l’adherència al tractament i l’evolució clínica.'], ['Coordinació', 'Treball conjunt amb la resta de l’equip mèdic per a una atenció més segura i completa.']], bullets: ['Extraccions, controls i seguiment de tractaments', 'Consulta d’infermeria amb atenció personalitzada', 'Coordinació assistencial i suport en procediments bàsics', 'Avaluació clínica i seguiment per a una atenció segura i propera'], cta: 'Reservar infermeria' },
  'diagnostico-por-imagen': { title: 'Diagnòstic per la imatge a Calafell', subtitle: 'Tecnologia avançada per a un diagnòstic precís i segur.', intro: 'El diagnòstic per la imatge és essencial per detectar, confirmar i controlar patologies amb rapidesa i precisió. Al nostre centre disposem d’equips moderns per oferir ecografies, radiologia digital i exploracions complementàries amb alts estàndards de qualitat i atenció segura.', highlights: [['Tecnologia', 'Ecografies, radiologia digital i exploracions amb equips d’alta resolució.'], ['Precisió', 'Diagnòstic àgil i fiable per orientar el tractament amb més seguretat.'], ['Acompanyament', 'Atenció propera perquè la realització de les proves sigui senzilla i entenedora.']], bullets: ['Ecografies específiques i diagnòstics de control', 'Radiologia digital per a estudis generals i traumatològics', 'Atenció àgil, segura i orientada a la precisió diagnòstica', 'Coordinació amb l’equip mèdic per a una interpretació clínica i un seguiment adequats'], cta: 'Reservar diagnòstic' },
};

export const getEspecialitatCa = (slug, especialitat) => ({ slug, title: especialitatsCa[slug] || especialitat.title });
