const services = {
  'medicina-general': {
    es: ['Medicina General', 'Atención primaria, urgencias y seguimiento integral para toda la familia.'],
    'en-GB': ['General medicine', 'Primary care, urgent attention and comprehensive follow-up for the whole family.'],
    'de-DE': ['Allgemeinmedizin', 'Hausärztliche Versorgung, dringende Anliegen und umfassende Betreuung für die ganze Familie.'],
    'fr-FR': ['Médecine générale', 'Soins primaires, consultations urgentes et suivi global pour toute la famille.'],
    'zh-CN': ['全科医疗', '为全家提供初级医疗、紧急护理和全面的健康随访。'],
    ar: ['الطب العام', 'رعاية أولية واستشارات عاجلة ومتابعة شاملة لجميع أفراد الأسرة.'],
  },
  'ginecologia-obstetricia': {
    es: ['Ginecología y Obstetricia', 'Salud femenina integral con diagnóstico preciso y atención personalizada.'],
    'en-GB': ['Gynaecology and obstetrics', 'Comprehensive women’s health with precise diagnosis and personalised care.'],
    'de-DE': ['Gynäkologie und Geburtshilfe', 'Ganzheitliche Frauengesundheit mit präziser Diagnostik und persönlicher Betreuung.'],
    'fr-FR': ['Gynécologie et obstétrique', 'Santé féminine globale avec diagnostic précis et accompagnement personnalisé.'],
    'zh-CN': ['妇科与产科', '提供精准诊断和个性化服务的女性全生命周期健康护理。'],
    ar: ['أمراض النساء والتوليد', 'رعاية شاملة لصحة المرأة مع تشخيص دقيق وعناية شخصية.'],
  },
  dermatologia: {
    es: ['Dermatología', 'Diagnóstico y tratamiento de la piel, el cabello y las uñas.'],
    'en-GB': ['Dermatology', 'Diagnosis and treatment of skin, hair and nail conditions.'],
    'de-DE': ['Dermatologie', 'Diagnose und Behandlung von Erkrankungen der Haut, Haare und Nägel.'],
    'fr-FR': ['Dermatologie', 'Diagnostic et traitement des affections de la peau, des cheveux et des ongles.'],
    'zh-CN': ['皮肤科', '皮肤、毛发和指甲疾病的诊断与治疗。'],
    ar: ['الأمراض الجلدية', 'تشخيص وعلاج أمراض الجلد والشعر والأظافر.'],
  },
  psicologia: {
    es: ['Psicología', 'Acompañamiento profesional para tu salud mental y emocional.'],
    'en-GB': ['Psychology', 'Professional support for your mental and emotional wellbeing.'],
    'de-DE': ['Psychologie', 'Professionelle Begleitung für Ihre psychische und emotionale Gesundheit.'],
    'fr-FR': ['Psychologie', 'Accompagnement professionnel pour votre santé mentale et émotionnelle.'],
    'zh-CN': ['心理咨询', '为心理和情绪健康提供专业支持。'],
    ar: ['علم النفس', 'دعم مهني لصحتك النفسية والعاطفية.'],
  },
  fisioterapia: {
    es: ['Fisioterapia', 'Recuperación funcional, movilidad y prevención de lesiones.'],
    'en-GB': ['Physiotherapy', 'Functional recovery, mobility and injury prevention.'],
    'de-DE': ['Physiotherapie', 'Funktionelle Rehabilitation, Beweglichkeit und Verletzungsprävention.'],
    'fr-FR': ['Kinésithérapie', 'Récupération fonctionnelle, mobilité et prévention des blessures.'],
    'zh-CN': ['物理治疗', '功能恢复、运动能力改善和损伤预防。'],
    ar: ['العلاج الطبيعي', 'استعادة الوظائف وتحسين الحركة والوقاية من الإصابات.'],
  },
  podologia: {
    es: ['Podología', 'Cuidado experto del pie para mejorar la movilidad y el confort.'],
    'en-GB': ['Podiatry', 'Expert foot care to improve mobility and comfort.'],
    'de-DE': ['Podologie', 'Kompetente Fußversorgung für bessere Beweglichkeit und mehr Komfort.'],
    'fr-FR': ['Podologie', 'Soins spécialisés des pieds pour améliorer la mobilité et le confort.'],
    'zh-CN': ['足病科', '专业足部护理，改善行动能力和舒适度。'],
    ar: ['طب足 القدم', 'رعاية متخصصة للقدم لتحسين الحركة والراحة.'],
  },
  enfermeria: {
    es: ['Enfermería', 'Extracciones, controles y seguimiento clínico cercano.'],
    'en-GB': ['Nursing', 'Sample collection, clinical checks and close follow-up.'],
    'de-DE': ['Krankenpflege', 'Blutentnahmen, Kontrollen und persönliche klinische Betreuung.'],
    'fr-FR': ['Soins infirmiers', 'Prélèvements, contrôles et suivi clinique de proximité.'],
    'zh-CN': ['护理', '提供采样、临床检查和持续护理。'],
    ar: ['التمريض', 'سحب العينات والفحوصات والمتابعة السريرية القريبة.'],
  },
  'diagnostico-por-imagen': {
    es: ['Diagnóstico por imagen', 'Tecnología avanzada para un diagnóstico preciso, ágil y seguro.'],
    'en-GB': ['Diagnostic imaging', 'Advanced technology for accurate, efficient and safe diagnosis.'],
    'de-DE': ['Bildgebende Diagnostik', 'Moderne Technologie für eine präzise, schnelle und sichere Diagnostik.'],
    'fr-FR': ['Imagerie médicale', 'Technologie avancée pour un diagnostic précis, rapide et sûr.'],
    'zh-CN': ['影像诊断', '采用先进技术，实现精准、高效和安全的诊断。'],
    ar: ['التصوير التشخيصي', 'تقنيات متقدمة لتشخيص دقيق وسريع وآمن.'],
  },
};

const ui = {
  es: { localeName: 'Español', home: 'Inicio', services: 'Servicios', team: 'Equipo profesional', book: 'Reservar cita', viewAll: 'Ver todas las especialidades', viewDetails: 'Ver detalle completo', appointment: 'Solicita una consulta con nosotros', appointmentText: 'Rellena el formulario y contactaremos contigo para confirmar tu visita.', teamTitle: 'Especialistas que acompañan cada etapa de tu salud', club: 'Club CSV', clubTitle: 'Una forma más fácil de cuidar tu salud', contact: 'Contacto', call: 'Llamar al centro', next: 'Próximamente nuevas colaboraciones' },
  ca: { localeName: 'Català', home: 'Inici', services: 'Serveis', team: 'Equip professional', book: 'Reservar visita', viewAll: 'Veure totes les especialitats', viewDetails: 'Veure el detall complet', appointment: 'Sol·licita una consulta amb nosaltres', appointmentText: 'Omple el formulari i contactarem amb tu per confirmar la teva visita.', teamTitle: 'Especialistes que t’acompanyen en cada etapa de la teva salut', club: 'Club CSV', clubTitle: 'Una manera més fàcil de cuidar la teva salut', contact: 'Contacte', call: 'Trucar al centre', next: 'Properament, noves col·laboracions' },
  'en-GB': { localeName: 'English', home: 'Home', services: 'Services', team: 'Professional team', book: 'Book an appointment', viewAll: 'View all specialties', viewDetails: 'View details', appointment: 'Request a consultation with us', appointmentText: 'Complete the form and we will contact you to confirm your visit.', teamTitle: 'Specialists supporting every stage of your health', club: 'CSV Club', clubTitle: 'A simpler way to care for your health', contact: 'Contact', call: 'Call the centre', next: 'New partnerships coming soon' },
  'de-DE': { localeName: 'Deutsch', home: 'Startseite', services: 'Leistungen', team: 'Professionelles Team', book: 'Termin buchen', viewAll: 'Alle Fachbereiche ansehen', viewDetails: 'Details ansehen', appointment: 'Vereinbaren Sie eine Sprechstunde', appointmentText: 'Füllen Sie das Formular aus. Wir kontaktieren Sie zur Bestätigung Ihres Termins.', teamTitle: 'Spezialisten für jede Phase Ihrer Gesundheit', club: 'CSV Club', clubTitle: 'Gesundheit einfacher gestalten', contact: 'Kontakt', call: 'Zentrum anrufen', next: 'Neue Kooperationen folgen in Kürze' },
  'fr-FR': { localeName: 'Français', home: 'Accueil', services: 'Services', team: 'Équipe professionnelle', book: 'Prendre rendez-vous', viewAll: 'Voir toutes les spécialités', viewDetails: 'Voir les détails', appointment: 'Demandez une consultation', appointmentText: 'Remplissez le formulaire et nous vous contacterons pour confirmer votre rendez-vous.', teamTitle: 'Des spécialistes à vos côtés à chaque étape de votre santé', club: 'Club CSV', clubTitle: 'Une façon plus simple de prendre soin de votre santé', contact: 'Contact', call: 'Appeler le centre', next: 'De nouvelles collaborations prochainement' },
  'zh-CN': { localeName: '简体中文', home: '首页', services: '服务', team: '专业团队', book: '预约就诊', viewAll: '查看全部专科', viewDetails: '查看详情', appointment: '向我们申请咨询', appointmentText: '填写表格后，我们会联系您确认就诊安排。', teamTitle: '陪伴您每个健康阶段的专业团队', club: 'CSV 会员计划', clubTitle: '更轻松地守护您的健康', contact: '联系我们', call: '致电中心', next: '即将推出新的合作服务' },
  ar: { localeName: 'العربية', home: 'الرئيسية', services: 'الخدمات', team: 'الفريق الطبي', book: 'حجز موعد', viewAll: 'عرض جميع التخصصات', viewDetails: 'عرض التفاصيل', appointment: 'اطلب استشارة معنا', appointmentText: 'املأ النموذج وسنتواصل معك لتأكيد موعدك.', teamTitle: 'أخصائيون يرافقونك في كل مرحلة من مراحل صحتك', club: 'نادي CSV', clubTitle: 'طريقة أسهل للعناية بصحتك', contact: 'اتصل بنا', call: 'اتصل بالمركز', next: 'شراكات جديدة قريباً' },
};

const serviceSlugs = Object.keys(services);

const serviceDetailText = {
  es: { highlights: ['Valoración integral', 'Prevención y seguimiento', 'Atención personalizada'], texts: ['Valoración clínica y orientación adaptada a las necesidades de cada paciente.', 'Revisiones y seguimiento para detectar cambios y actuar a tiempo.', 'Un plan de atención claro, cercano y coordinado con nuestro equipo.'], bullets: ['Consulta especializada con enfoque preventivo', 'Valoración y seguimiento según cada caso', 'Orientación personalizada para adultos y familias', 'Coordinación con otros profesionales cuando sea necesario'] },
  ca: { highlights: ['Valoració integral', 'Prevenció i seguiment', 'Atenció personalitzada'], texts: ['Valoració clínica i orientació adaptada a les necessitats de cada pacient.', 'Revisions i seguiment per detectar canvis i actuar a temps.', 'Un pla d’atenció clar, proper i coordinat amb el nostre equip.'], bullets: ['Consulta especialitzada amb enfocament preventiu', 'Valoració i seguiment segons cada cas', 'Orientació personalitzada per a adults i famílies', 'Coordinació amb altres professionals quan sigui necessari'] },
  'en-GB': { highlights: ['Comprehensive assessment', 'Prevention and follow-up', 'Personalised care'], texts: ['Clinical assessment and guidance adapted to each patient’s needs.', 'Reviews and follow-up to identify changes and act promptly.', 'A clear, personal care plan coordinated with our team.'], bullets: ['Specialist consultation with a preventive approach', 'Assessment and follow-up tailored to each case', 'Personalised guidance for adults and families', 'Coordination with other professionals when needed'] },
  'de-DE': { highlights: ['Ganzheitliche Beurteilung', 'Prävention und Nachsorge', 'Persönliche Betreuung'], texts: ['Klinische Beurteilung und Beratung nach den Bedürfnissen jedes Patienten.', 'Kontrollen und Nachsorge, um Veränderungen frühzeitig zu erkennen.', 'Ein klarer, persönlicher und mit unserem Team abgestimmter Betreuungsplan.'], bullets: ['Fachärztliche Beratung mit präventivem Ansatz', 'Beurteilung und Nachsorge je nach Fall', 'Persönliche Beratung für Erwachsene und Familien', 'Koordination mit anderen Fachkräften bei Bedarf'] },
  'fr-FR': { highlights: ['Évaluation globale', 'Prévention et suivi', 'Accompagnement personnalisé'], texts: ['Évaluation clinique et conseils adaptés aux besoins de chaque patient.', 'Bilans et suivi pour détecter les changements et agir rapidement.', 'Un parcours de soins clair, proche et coordonné avec notre équipe.'], bullets: ['Consultation spécialisée avec une approche préventive', 'Évaluation et suivi adaptés à chaque situation', 'Conseils personnalisés pour adultes et familles', 'Coordination avec d’autres professionnels si nécessaire'] },
  'zh-CN': { highlights: ['综合评估', '预防与随访', '个性化护理'], texts: ['根据每位患者的需求提供临床评估和专业指导。', '通过检查和随访及时发现变化并采取行动。', '由我们的团队协调制定清晰、贴心的护理计划。'], bullets: ['以预防为重点的专科咨询', '根据具体情况进行评估和随访', '为成人和家庭提供个性化指导', '必要时与其他专业人员协作'] },
  ar: { highlights: ['تقييم شامل', 'الوقاية والمتابعة', 'رعاية شخصية'], texts: ['تقييم سريري وإرشاد يتناسبان مع احتياجات كل مريض.', 'فحوصات ومتابعة لاكتشاف التغييرات والتصرف في الوقت المناسب.', 'خطة رعاية واضحة وقريبة ومنسقة مع فريقنا.'], bullets: ['استشارة متخصصة تركز على الوقاية', 'تقييم ومتابعة حسب كل حالة', 'إرشاد شخصي للبالغين والعائلات', 'التنسيق مع متخصصين آخرين عند الحاجة'] },
};

const clubComparisonByLocale = {
  es: { title: 'Comparativa de analíticas anuales', concept: 'Analítica anual', general: 'Básica', sport: 'Básica + Gamma, Fosfatasa, TSH/T3/T4, Cortisol, Vitamina D, Creatina-Cinasa, Hierro y Hemoglobina Glicosilada', senior: 'Básica + Vitamina D, PSA, Filtrado Glomerular y TSH/T3/T4' },
  ca: { title: 'Comparativa d’analítiques anuals', concept: 'Analítica anual', general: 'Bàsica', sport: 'Bàsica + Gamma, Fosfatasa, TSH/T3/T4, Cortisol, Vitamina D, Creatina-Cinasa, Ferro i Hemoglobina Glicosilada', senior: 'Bàsica + Vitamina D, PSA, Filtrat Glomerular i TSH/T3/T4' },
  'en-GB': { title: 'Annual blood test comparison', concept: 'Annual blood test', general: 'Basic', sport: 'Basic + Gamma, phosphatase, TSH/T3/T4, cortisol, vitamin D, creatine kinase, iron and glycated haemoglobin', senior: 'Basic + vitamin D, PSA, glomerular filtration and TSH/T3/T4' },
  'de-DE': { title: 'Vergleich der jährlichen Analysen', concept: 'Jährliche Analyse', general: 'Basis', sport: 'Basis + Gamma-GT, Phosphatase, TSH/T3/T4, Cortisol, Vitamin D, Kreatinkinase, Eisen und glykiertes Hämoglobin', senior: 'Basis + Vitamin D, PSA, glomeruläre Filtration und TSH/T3/T4' },
  'fr-FR': { title: 'Comparatif des bilans annuels', concept: 'Bilan annuel', general: 'De base', sport: 'Bilan de base + gamma-GT, phosphatase, TSH/T3/T4, cortisol, vitamine D, créatine kinase, fer et hémoglobine glyquée', senior: 'Bilan de base + vitamine D, PSA, filtration glomérulaire et TSH/T3/T4' },
  'zh-CN': { title: '年度检查对比', concept: '年度检查', general: '基础检查', sport: '基础检查 + γ-GT、磷酸酶、TSH/T3/T4、皮质醇、维生素D、肌酸激酶、铁和糖化血红蛋白', senior: '基础检查 + 维生素D、PSA、肾小球滤过和TSH/T3/T4' },
  ar: { title: 'مقارنة التحاليل السنوية', concept: 'التحليل السنوي', general: 'أساسي', sport: 'أساسي + غاما وفوسفاتاز وTSH/T3/T4 وكورتيزول وفيتامين د وكرياتين كيناز وحديد وهيموغلوبين سكري', senior: 'أساسي + فيتامين د وPSA والترشيح الكبيبي وTSH/T3/T4' },
};

const homeContent = {
  es: { whyTitle: 'Calidad, rapidez y atención cercana', whyText: 'Un equipo sanitario con experiencia, tecnología actual y una atención pensada para acompañarte.', techTitle: 'Tecnología para un diagnóstico preciso', techText: 'Equipos modernos y procesos coordinados para ofrecer resultados ágiles y seguros.', clubText: 'Modalidades de salud con beneficios preferentes para ti y tu familia.', address: 'Carrer Molí del Blanquet, 24, Calafell', hours: 'Lunes – Viernes: 8:00–13:00 / 15:00–20:00' },
  ca: { whyTitle: 'Qualitat, rapidesa i atenció propera', whyText: 'Un equip sanitari amb experiència, tecnologia actual i una atenció pensada per acompanyar-te.', techTitle: 'Tecnologia per a un diagnòstic precís', techText: 'Equips moderns i processos coordinats per oferir resultats àgils i segurs.', clubText: 'Modalitats de salut amb beneficis preferents per a tu i la teva família.', address: 'Carrer Molí del Blanquet, 24, Calafell', hours: 'Dilluns – Divendres: 8:00–13:00 / 15:00–20:00' },
  'en-GB': { whyTitle: 'Quality, speed and personal care', whyText: 'An experienced healthcare team, modern technology and care designed around you.', techTitle: 'Technology for accurate diagnosis', techText: 'Modern equipment and coordinated processes for fast, safe results.', clubText: 'Health plans with preferential benefits for you and your family.', address: 'Carrer Molí del Blanquet, 24, Calafell', hours: 'Monday – Friday: 8:00–13:00 / 15:00–20:00' },
  'de-DE': { whyTitle: 'Qualität, Schnelligkeit und persönliche Betreuung', whyText: 'Ein erfahrenes Gesundheitsteam, moderne Technologie und eine Betreuung, die Sie begleitet.', techTitle: 'Technologie für präzise Diagnosen', techText: 'Moderne Geräte und abgestimmte Abläufe für schnelle und sichere Ergebnisse.', clubText: 'Gesundheitsmodelle mit besonderen Vorteilen für Sie und Ihre Familie.', address: 'Carrer Molí del Blanquet, 24, Calafell', hours: 'Montag – Freitag: 8:00–13:00 / 15:00–20:00' },
  'fr-FR': { whyTitle: 'Qualité, rapidité et proximité', whyText: 'Une équipe de santé expérimentée, une technologie moderne et un accompagnement personnalisé.', techTitle: 'La technologie au service du diagnostic', techText: 'Des équipements modernes et des processus coordonnés pour des résultats rapides et sûrs.', clubText: 'Des formules de santé avec des avantages privilégiés pour vous et votre famille.', address: 'Carrer Molí del Blanquet, 24, Calafell', hours: 'Lundi – Vendredi : 8:00–13:00 / 15:00–20:00' },
  'zh-CN': { whyTitle: '品质、高效与贴心服务', whyText: '经验丰富的医疗团队、现代化技术和以您为中心的护理服务。', techTitle: '以技术助力精准诊断', techText: '采用现代设备和协调流程，提供快速、安全的检查结果。', clubText: '为您和家人提供多种健康计划与专属权益。', address: 'Carrer Molí del Blanquet, 24, Calafell', hours: '周一至周五：8:00–13:00 / 15:00–20:00' },
  ar: { whyTitle: 'جودة وسرعة وعناية قريبة', whyText: 'فريق صحي ذو خبرة وتقنيات حديثة ورعاية مصممة لمرافقتك.', techTitle: 'تقنيات لتشخيص دقيق', techText: 'أجهزة حديثة وعمليات منسقة لتقديم نتائج سريعة وآمنة.', clubText: 'خطط صحية بمزايا مفضلة لك ولعائلتك.', address: 'Carrer Molí del Blanquet, 24, Calafell', hours: 'من الإثنين إلى الجمعة: 8:00–13:00 / 15:00–20:00' },
};

const homeDetails = {
  es: {
    why: [['Profesionales cualificados', 'Equipo con experiencia clínica y atención cercana, rigurosa y personalizada.'], ['Instalaciones punteras', 'Tecnología moderna para facilitar un diagnóstico ágil y seguro.'], ['Salud integral', 'Especialidades y servicios coordinados para cuidar de toda la familia.']],
    tech: [['Ecografía', 'Ecógrafo Doppler color CHISON QBit 7 con alta definición, ecografía 4D y elastografía.'], ['Radiología', 'Sistema Universal Vertix digitalizado para estudios generales y traumatológicos.']],
    insurerNotice: ['Próximamente nuevas colaboraciones', 'Estamos ampliando nuestra red de mutuas y seguros colaboradores.'],
    plans: [['General', 'Ideal para adultos y familias.', 'Desde 35 € / mes'], ['Sport', 'Para personas activas y deportistas.', 'Desde 40 € / mes'], ['Senior (+60)', 'Para mayores de 60 años.', 'Desde 35 € / mes']],
    address: 'Carrer Molí del Blanquet, 24, baixos', city: 'El Vilarenc, 43820 Calafell, Tarragona', phone: 'Teléfono', email: 'Email', hoursLabel: 'Horario', map: 'Ubicación Centre Sanitari Villaquet', online: 'Reserva tu cita online', onlineText: 'Completa tus datos en nuestra página de reserva dedicada.'
  },
  ca: {
    why: [['Professionals qualificats', 'Equip amb experiència clínica i atenció propera, rigorosa i personalitzada.'], ['Instal·lacions capdavanteres', 'Tecnologia moderna per facilitar un diagnòstic àgil i segur.'], ['Salut integral', 'Especialitats i serveis coordinats per cuidar de tota la família.']],
    tech: [['Ecografia', 'Ecògraf Doppler color CHISON QBit 7 amb alta definició, ecografia 4D i elastografia.'], ['Radiologia', 'Sistema Universal Vertix digitalitzat per a estudis generals i traumatològics.']],
    insurerNotice: ['Properament, noves col·laboracions', 'Estem ampliant la nostra xarxa de mútues i assegurances col·laboradores.'],
    plans: [['General', 'Ideal per a adults i famílies.', 'Des de 35 € / mes'], ['Sport', 'Per a persones actives i esportistes.', 'Des de 40 € / mes'], ['Sènior (+60)', 'Per a majors de 60 anys.', 'Des de 35 € / mes']],
    address: 'Carrer Molí del Blanquet, 24, baixos', city: 'El Vilarenc, 43820 Calafell, Tarragona', phone: 'Telèfon', email: 'Email', hoursLabel: 'Horari', map: 'Ubicació Centre Sanitari Villaquet', online: 'Reserva la teva visita en línia', onlineText: 'Completa les teves dades a la nostra pàgina de reserva dedicada.'
  },
  'en-GB': {
    why: [['Qualified professionals', 'An experienced team providing close, rigorous and personalised care.'], ['Leading facilities', 'Modern technology to support fast and safe diagnosis.'], ['Whole-person care', 'Coordinated specialties and services for the whole family.']],
    tech: [['Ultrasound', 'CHISON QBit 7 colour Doppler ultrasound with high definition, 4D imaging and elastography.'], ['Radiology', 'Digital Universal Vertix system for general and trauma examinations.']],
    insurerNotice: ['New partnerships coming soon', 'We are expanding our network of collaborating insurers.'],
    plans: [['General', 'Ideal for adults and families.', 'From €35 / month'], ['Sport', 'For active people and athletes.', 'From €40 / month'], ['Senior (+60)', 'For people aged over 60.', 'From €35 / month']],
    address: 'Carrer Molí del Blanquet, 24, baixos', city: 'El Vilarenc, 43820 Calafell, Tarragona', phone: 'Telephone', email: 'Email', hoursLabel: 'Opening hours', map: 'Centre location', online: 'Book your appointment online', onlineText: 'Complete your details on our dedicated booking page.'
  },
  'de-DE': {
    why: [['Qualifizierte Fachkräfte', 'Ein erfahrenes Team mit persönlicher, sorgfältiger und individueller Betreuung.'], ['Moderne Einrichtungen', 'Moderne Technologie für eine schnelle und sichere Diagnostik.'], ['Ganzheitliche Gesundheit', 'Koordinierte Fachbereiche und Leistungen für die ganze Familie.']],
    tech: [['Ultraschall', 'Farbdoppler-Ultraschall CHISON QBit 7 mit hoher Auflösung, 4D-Ultraschall und Elastografie.'], ['Radiologie', 'Digitales Universal-Vertix-System für allgemeine und traumatologische Untersuchungen.']],
    insurerNotice: ['Neue Kooperationen folgen in Kürze', 'Wir erweitern unser Netzwerk kooperierender Versicherungen.'],
    plans: [['Allgemein', 'Ideal für Erwachsene und Familien.', 'Ab 35 € / Monat'], ['Sport', 'Für aktive Menschen und Sportler.', 'Ab 40 € / Monat'], ['Senior (+60)', 'Für Menschen über 60.', 'Ab 35 € / Monat']],
    address: 'Carrer Molí del Blanquet, 24, baixos', city: 'El Vilarenc, 43820 Calafell, Tarragona', phone: 'Telefon', email: 'E-Mail', hoursLabel: 'Öffnungszeiten', map: 'Standort des Zentrums', online: 'Termin online buchen', onlineText: 'Füllen Sie Ihre Daten auf unserer Buchungsseite aus.'
  },
  'fr-FR': {
    why: [['Professionnels qualifiés', 'Une équipe expérimentée pour un accompagnement proche, rigoureux et personnalisé.'], ['Installations modernes', 'Une technologie actuelle pour un diagnostic rapide et sûr.'], ['Santé globale', 'Des spécialités et services coordonnés pour toute la famille.']],
    tech: [['Échographie', 'Échographe Doppler couleur CHISON QBit 7 avec haute définition, échographie 4D et élastographie.'], ['Radiologie', 'Système Universal Vertix numérique pour les examens généraux et traumatologiques.']],
    insurerNotice: ['De nouvelles collaborations prochainement', 'Nous développons notre réseau d’assurances partenaires.'],
    plans: [['Général', 'Idéal pour les adultes et les familles.', 'À partir de 35 € / mois'], ['Sport', 'Pour les personnes actives et les sportifs.', 'À partir de 40 € / mois'], ['Senior (+60)', 'Pour les personnes de plus de 60 ans.', 'À partir de 35 € / mois']],
    address: 'Carrer Molí del Blanquet, 24, baixos', city: 'El Vilarenc, 43820 Calafell, Tarragona', phone: 'Téléphone', email: 'E-mail', hoursLabel: 'Horaires', map: 'Localisation du centre', online: 'Prenez rendez-vous en ligne', onlineText: 'Complétez vos informations sur notre page de rendez-vous.'
  },
  'zh-CN': {
    why: [['专业医疗团队', '经验丰富的团队，为您提供贴心、严谨和个性化的护理。'], ['先进设施', '现代化技术支持快速、安全的诊断。'], ['全方位健康服务', '协调的专科和服务，守护全家健康。']],
    tech: [['超声检查', 'CHISON QBit 7 彩色多普勒超声，支持高清、四维超声和弹性成像。'], ['放射科', 'Universal Vertix 数字化系统，适用于常规和创伤检查。']],
    insurerNotice: ['新的合作即将推出', '我们正在扩大合作保险机构网络。'],
    plans: [['普通计划', '适合成人和家庭。', '每月 35 欧元起'], ['运动计划', '适合积极生活和运动人群。', '每月 40 欧元起'], ['长者计划（60岁以上）', '适合 60 岁以上人士。', '每月 35 欧元起']],
    address: 'Carrer Molí del Blanquet, 24, baixos', city: 'El Vilarenc, 43820 Calafell, Tarragona', phone: '电话', email: '电子邮箱', hoursLabel: '服务时间', map: '中心位置', online: '在线预约就诊', onlineText: '请在我们的预约页面填写您的信息。'
  },
  ar: {
    why: [['متخصصون مؤهلون', 'فريق ذو خبرة يقدم رعاية قريبة ودقيقة وشخصية.'], ['مرافق متقدمة', 'تقنيات حديثة لدعم تشخيص سريع وآمن.'], ['رعاية صحية شاملة', 'تخصصات وخدمات منسقة للعناية بالعائلة بأكملها.']],
    tech: [['التصوير بالموجات فوق الصوتية', 'جهاز CHISON QBit 7 دوبلر ملون بدقة عالية وتصوير رباعي الأبعاد وإلاستوغرافيا.'], ['الأشعة', 'نظام Universal Vertix الرقمي للفحوصات العامة وفحوصات الإصابات.']],
    insurerNotice: ['شراكات جديدة قريباً', 'نعمل على توسيع شبكة شركات التأمين المتعاونة معنا.'],
    plans: [['عام', 'مثالي للبالغين والعائلات.', 'ابتداءً من 35 يورو / شهر'], ['رياضي', 'للأشخاص النشطين والرياضيين.', 'ابتداءً من 40 يورو / شهر'], ['كبار السن (+60)', 'للأشخاص الذين تزيد أعمارهم عن 60 عاماً.', 'ابتداءً من 35 يورو / شهر']],
    address: 'Carrer Molí del Blanquet, 24, baixos', city: 'El Vilarenc, 43820 Calafell, Tarragona', phone: 'الهاتف', email: 'البريد الإلكتروني', hoursLabel: 'ساعات العمل', map: 'موقع المركز', online: 'احجز موعدك عبر الإنترنت', onlineText: 'أكمل بياناتك في صفحة الحجز المخصصة.'
  },
};

const layoutLabels = {
  es: { searchLabel: 'Buscar en el sitio', searchPlaceholder: 'Buscar especialidades, profesionales o servicios', portal: 'Intranet del paciente', follow: 'Síguenos', sections: 'Secciones', rights: 'Todos los derechos reservados.', menu: 'Abrir menú', technology: 'Tecnología', insurers: 'Mutuas' },
  ca: { searchLabel: 'Cercar al lloc web', searchPlaceholder: 'Cercar especialitats, professionals o serveis', portal: 'Intranet del pacient', follow: 'Segueix-nos', sections: 'Seccions', rights: 'Tots els drets reservats.', menu: 'Obrir el menú', technology: 'Tecnologia', insurers: 'Mútues' },
  'en-GB': { searchLabel: 'Search the site', searchPlaceholder: 'Search specialties, professionals or services', portal: 'Patient portal', follow: 'Follow us', sections: 'Sections', rights: 'All rights reserved.', menu: 'Open menu', technology: 'Technology', insurers: 'Insurers' },
  'de-DE': { searchLabel: 'Website durchsuchen', searchPlaceholder: 'Fachbereiche, Fachkräfte oder Leistungen suchen', portal: 'Patientenportal', follow: 'Folgen Sie uns', sections: 'Bereiche', rights: 'Alle Rechte vorbehalten.', menu: 'Menü öffnen', technology: 'Technologie', insurers: 'Versicherungen' },
  'fr-FR': { searchLabel: 'Rechercher sur le site', searchPlaceholder: 'Rechercher une spécialité, un professionnel ou un service', portal: 'Portail patient', follow: 'Suivez-nous', sections: 'Rubriques', rights: 'Tous droits réservés.', menu: 'Ouvrir le menu', technology: 'Technologie', insurers: 'Assurances' },
  'zh-CN': { searchLabel: '搜索网站', searchPlaceholder: '搜索专科、专业人员或服务', portal: '患者平台', follow: '关注我们', sections: '栏目', rights: '版权所有。', menu: '打开菜单', technology: '医疗技术', insurers: '保险' },
  ar: { searchLabel: 'البحث في الموقع', searchPlaceholder: 'ابحث عن التخصصات أو المختصين أو الخدمات', portal: 'بوابة المرضى', follow: 'تابعنا', sections: 'الأقسام', rights: 'جميع الحقوق محفوظة.', menu: 'فتح القائمة', technology: 'التقنية', insurers: 'التأمين' },
};

const clubBenefitsByLocale = {
  es: [
    ['Medicina General: 12 visitas / año', 'Visitas posteriores: 25€', 'Enfermería: 12 visitas / año (Curas e Inyectables*)', 'Analítica Básica Anual: hemograma, glucosa, colesterol, triglicéridos, creatinina y transaminasas', 'Analíticas posteriores: 15% DTO', 'Ginecología: revisión anual (Citología + Ecografía + Visita)', 'Fisioterapia: 5 sesiones (45\') / año', 'Sesiones posteriores: 36€', 'Podología: 1 quiropedia / año', 'Quiropedias posteriores: 25€'],
    ['Medicina General: 12 visitas / año', 'Visitas posteriores: 25€', 'Enfermería: 12 visitas / año (Curas e Inyectables*)', 'Analítica Deportiva Anual: básica + Gamma, Fosfatasa, TSH/T3/T4, Cortisol, Vitamina D, Hierro y Hemoglobina Glicosilada', 'Analíticas posteriores: 15% DTO', 'Fisioterapia: 10 sesiones (30\') / año', 'Sesiones posteriores: 30€', 'Bono 5 sesiones (mensual): 135€', 'Sesión MEP-EPI: 40€', 'Podología: 1 quiropedia / año + Estudio Biomecánico Anual'],
    ['Medicina General: 12 visitas / año', 'Visitas posteriores: 25€', 'Enfermería: 12 visitas / año (Curas e Inyectables*)', 'Analítica Senior Anual: básica + Vitamina D, PSA, Filtrado Glomerular y TSH/T3/T4', 'Analíticas posteriores: 15% DTO', 'Fisioterapia: 5 sesiones (45\') / año', 'Bono 5 sesiones (mensual): 180€', 'Podología: 2 quiropedias / año', 'Quiropedias posteriores: Bono 3x2'],
  ],
  ca: [
    ['Medicina general: 12 visites / any', 'Visites posteriors: 25€', 'Infermeria: 12 visites / any (cures i injectables*)', 'Analítica bàsica anual: hemograma, glucosa, colesterol, triglicèrids, creatinina i transaminases', 'Analítiques posteriors: 15% de descompte', 'Ginecologia: revisió anual (citologia + ecografia + visita)', 'Fisioteràpia: 5 sessions (45\') / any', 'Sessions posteriors: 36€', 'Podologia: 1 quiropòdia / any', 'Quiropòdies posteriors: 25€'],
    ['Medicina general: 12 visites / any', 'Visites posteriors: 25€', 'Infermeria: 12 visites / any (cures i injectables*)', 'Analítica esportiva anual: bàsica + gamma, fosfatasa, TSH/T3/T4, cortisol, vitamina D, ferro i hemoglobina glicosilada', 'Analítiques posteriors: 15% de descompte', 'Fisioteràpia: 10 sessions (30\') / any', 'Sessions posteriors: 30€', 'Bono de 5 sessions (mensual): 135€', 'Sessió MEP-EPI: 40€', 'Podologia: 1 quiropòdia / any + estudi biomecànic anual'],
    ['Medicina general: 12 visites / any', 'Visites posteriors: 25€', 'Infermeria: 12 visites / any (cures i injectables*)', 'Analítica sènior anual: bàsica + vitamina D, PSA, filtrat glomerular i TSH/T3/T4', 'Analítiques posteriors: 15% de descompte', 'Fisioteràpia: 5 sessions (45\') / any', 'Bono de 5 sessions (mensual): 180€', 'Podologia: 2 quiropòdies / any', 'Quiropòdies posteriors: bono 3x2'],
  ],
  'en-GB': [
    ['General medicine: 12 visits / year', 'Further visits: €25', 'Nursing: 12 visits / year (dressings and injections*)', 'Annual basic blood test: full blood count, glucose, cholesterol, triglycerides, creatinine and liver enzymes', 'Further tests: 15% discount', 'Gynaecology: annual check-up (cytology + ultrasound + consultation)', 'Physiotherapy: 5 sessions (45 minutes) / year', 'Further sessions: €36', 'Podiatry: 1 foot-care treatment / year', 'Further foot-care treatments: €25'],
    ['General medicine: 12 visits / year', 'Further visits: €25', 'Nursing: 12 visits / year (dressings and injections*)', 'Annual sports blood test: basic panel plus vitamin D, iron, thyroid and muscle markers', 'Further tests: 15% discount', 'Physiotherapy: 10 sessions (30 minutes) / year', 'Further sessions: €30', 'Five-session monthly package: €135', 'MEP-EPI session: €40', 'Podiatry: 1 treatment / year + annual biomechanical assessment'],
    ['General medicine: 12 visits / year', 'Further visits: €25', 'Nursing: 12 visits / year (dressings and injections*)', 'Annual senior blood test: basic panel plus vitamin D, PSA, renal filtration and thyroid markers', 'Further tests: 15% discount', 'Physiotherapy: 5 sessions (45 minutes) / year', 'Five-session monthly package: €180', 'Podiatry: 2 treatments / year', 'Further treatments: 3-for-2 package'],
  ],
  'de-DE': [
    ['Allgemeinmedizin: 12 Besuche / Jahr', 'Weitere Besuche: 25 €', 'Krankenpflege: 12 Besuche / Jahr (Verbände und Injektionen*)', 'Jährliche Basisanalyse: Blutbild, Glukose, Cholesterin, Triglyceride, Kreatinin und Leberwerte', 'Weitere Analysen: 15 % Rabatt', 'Gynäkologie: jährliche Kontrolle (Zytologie + Ultraschall + Besuch)', 'Physiotherapie: 5 Sitzungen (45 Minuten) / Jahr', 'Weitere Sitzungen: 36 €', 'Podologie: 1 Behandlung / Jahr', 'Weitere Behandlungen: 25 €'],
    ['Allgemeinmedizin: 12 Besuche / Jahr', 'Weitere Besuche: 25 €', 'Krankenpflege: 12 Besuche / Jahr (Verbände und Injektionen*)', 'Jährliche Sportanalyse: Basisprofil plus Vitamin D, Eisen, Schilddrüsen- und Muskelwerte', 'Weitere Analysen: 15 % Rabatt', 'Physiotherapie: 10 Sitzungen (30 Minuten) / Jahr', 'Weitere Sitzungen: 30 €', 'Monatliches Paket mit 5 Sitzungen: 135 €', 'MEP-EPI-Sitzung: 40 €', 'Podologie: 1 Behandlung / Jahr + jährliche biomechanische Untersuchung'],
    ['Allgemeinmedizin: 12 Besuche / Jahr', 'Weitere Besuche: 25 €', 'Krankenpflege: 12 Besuche / Jahr (Verbände und Injektionen*)', 'Jährliche Seniorenanalyse: Basisprofil plus Vitamin D, PSA, Nierenfiltration und Schilddrüsenwerte', 'Weitere Analysen: 15 % Rabatt', 'Physiotherapie: 5 Sitzungen (45 Minuten) / Jahr', 'Monatliches Paket mit 5 Sitzungen: 180 €', 'Podologie: 2 Behandlungen / Jahr', 'Weitere Behandlungen: 3-für-2-Paket'],
  ],
  'fr-FR': [
    ['Médecine générale : 12 visites / an', 'Visites supplémentaires : 25 €', 'Soins infirmiers : 12 visites / an (pansements et injections*)', 'Bilan annuel de base : hémogramme, glucose, cholestérol, triglycérides, créatinine et transaminases', 'Analyses supplémentaires : 15 % de remise', 'Gynécologie : bilan annuel (cytologie + échographie + consultation)', 'Kinésithérapie : 5 séances (45 minutes) / an', 'Séances supplémentaires : 36 €', 'Podologie : 1 soin / an', 'Soins supplémentaires : 25 €'],
    ['Médecine générale : 12 visites / an', 'Visites supplémentaires : 25 €', 'Soins infirmiers : 12 visites / an (pansements et injections*)', 'Bilan sportif annuel : bilan de base avec vitamine D, fer, thyroïde et marqueurs musculaires', 'Analyses supplémentaires : 15 % de remise', 'Kinésithérapie : 10 séances (30 minutes) / an', 'Séances supplémentaires : 30 €', 'Forfait mensuel de 5 séances : 135 €', 'Séance MEP-EPI : 40 €', 'Podologie : 1 soin / an + bilan biomécanique annuel'],
    ['Médecine générale : 12 visites / an', 'Visites supplémentaires : 25 €', 'Soins infirmiers : 12 visites / an (pansements et injections*)', 'Bilan senior annuel : bilan de base avec vitamine D, PSA, filtration rénale et thyroïde', 'Analyses supplémentaires : 15 % de remise', 'Kinésithérapie : 5 séances (45 minutes) / an', 'Forfait mensuel de 5 séances : 180 €', 'Podologie : 2 soins / an', 'Soins supplémentaires : forfait 3 pour 2'],
  ],
  'zh-CN': [
    ['全科医疗：每年 12 次就诊', '后续就诊：25 欧元', '护理：每年 12 次（换药和注射*）', '年度基础检查：血常规、血糖、胆固醇、甘油三酯、肌酐和肝酶', '后续检查：优惠 15%', '妇科：年度检查（细胞学 + 超声 + 就诊）', '物理治疗：每年 5 次（45 分钟）', '后续治疗：36 欧元', '足病护理：每年 1 次', '后续护理：25 欧元'],
    ['全科医疗：每年 12 次就诊', '后续就诊：25 欧元', '护理：每年 12 次（换药和注射*）', '年度运动检查：基础项目加维生素D、铁、甲状腺和肌肉指标', '后续检查：优惠 15%', '物理治疗：每年 10 次（30 分钟）', '后续治疗：30 欧元', '每月 5 次治疗套餐：135 欧元', 'MEP-EPI 治疗：40 欧元', '足病护理：每年 1 次 + 年度生物力学评估'],
    ['全科医疗：每年 12 次就诊', '后续就诊：25 欧元', '护理：每年 12 次（换药和注射*）', '年度长者检查：基础项目加维生素D、PSA、肾小球滤过和甲状腺指标', '后续检查：优惠 15%', '物理治疗：每年 5 次（45 分钟）', '每月 5 次治疗套餐：180 欧元', '足病护理：每年 2 次', '后续护理：买二送一套餐'],
  ],
  ar: [
    ['الطب العام: 12 زيارة / السنة', 'الزيارات اللاحقة: 25 يورو', 'التمريض: 12 زيارة / السنة (تغيير الضمادات والحقن*)', 'تحليل أساسي سنوي: تعداد الدم والسكر والكوليسترول والدهون الثلاثية والكرياتينين وإنزيمات الكبد', 'التحاليل اللاحقة: خصم 15%', 'أمراض النساء: فحص سنوي (علم الخلايا + الموجات فوق الصوتية + زيارة)', 'العلاج الطبيعي: 5 جلسات (45 دقيقة) / السنة', 'الجلسات اللاحقة: 36 يورو', 'العناية بالقدم: جلسة واحدة / السنة', 'جلسات العناية اللاحقة: 25 يورو'],
    ['الطب العام: 12 زيارة / السنة', 'الزيارات اللاحقة: 25 يورو', 'التمريض: 12 زيارة / السنة (تغيير الضمادات والحقن*)', 'تحليل رياضي سنوي: الفحوص الأساسية مع فيتامين د والحديد والغدة الدرقية ومؤشرات العضلات', 'التحاليل اللاحقة: خصم 15%', 'العلاج الطبيعي: 10 جلسات (30 دقيقة) / السنة', 'الجلسات اللاحقة: 30 يورو', 'باقة شهرية من 5 جلسات: 135 يورو', 'جلسة MEP-EPI: 40 يورو', 'العناية بالقدم: جلسة واحدة / السنة + تقييم ميكانيكا حيوية سنوي'],
    ['الطب العام: 12 زيارة / السنة', 'الزيارات اللاحقة: 25 يورو', 'التمريض: 12 زيارة / السنة (تغيير الضمادات والحقن*)', 'تحليل سنوي لكبار السن: الفحوص الأساسية مع فيتامين د وPSA وترشيح الكلى والغدة الدرقية', 'التحاليل اللاحقة: خصم 15%', 'العلاج الطبيعي: 5 جلسات (45 دقيقة) / السنة', 'باقة شهرية من 5 جلسات: 180 يورو', 'العناية بالقدم: جلستان / السنة', 'الجلسات اللاحقة: باقة 3 مقابل 2'],
  ],
};

const clubCardBenefitsByLocale = {
  es: [['Medicina General', 'Enfermería', 'Analítica General Completa', 'Revisión Anual Ginecológica', 'Fisioterapia (5 sesiones)', 'Podología (Quiropedia)'], ['Medicina General', 'Enfermería', 'Analítica “Sport” Completa', 'Fisioterapia (10 sesiones)', 'Podología (Quiropedia + Estudio Biomecánico)'], ['Medicina General', 'Enfermería', 'Analítica Senior Completa', 'Fisioterapia (5 sesiones)', 'Podología (2 Quiropedias)']],
  ca: [['Medicina general', 'Infermeria', 'Analítica general completa', 'Revisió ginecològica anual', 'Fisioteràpia (5 sessions)', 'Podologia (quiropòdia)'], ['Medicina general', 'Infermeria', 'Analítica “Sport” completa', 'Fisioteràpia (10 sessions)', 'Podologia (quiropòdia + estudi biomecànic)'], ['Medicina general', 'Infermeria', 'Analítica sènior completa', 'Fisioteràpia (5 sessions)', 'Podologia (2 quiropòdies)']],
  'en-GB': [['General medicine', 'Nursing', 'Complete general health check', 'Annual gynaecology check-up', 'Physiotherapy (5 sessions)', 'Podiatry (foot-care treatment)'], ['General medicine', 'Nursing', 'Complete Sport health check', 'Physiotherapy (10 sessions)', 'Podiatry (foot-care treatment + biomechanical assessment)'], ['General medicine', 'Nursing', 'Complete senior health check', 'Physiotherapy (5 sessions)', 'Podiatry (2 foot-care treatments)']],
  'de-DE': [['Allgemeinmedizin', 'Krankenpflege', 'Vollständige allgemeine Analyse', 'Jährliche gynäkologische Kontrolle', 'Physiotherapie (5 Sitzungen)', 'Podologie (Fußpflege)'], ['Allgemeinmedizin', 'Krankenpflege', 'Vollständige Sportanalyse', 'Physiotherapie (10 Sitzungen)', 'Podologie (Fußpflege + biomechanische Untersuchung)'], ['Allgemeinmedizin', 'Krankenpflege', 'Vollständige Seniorenanalyse', 'Physiotherapie (5 Sitzungen)', 'Podologie (2 Fußpflegebehandlungen)']],
  'fr-FR': [['Médecine générale', 'Soins infirmiers', 'Bilan général complet', 'Bilan gynécologique annuel', 'Kinésithérapie (5 séances)', 'Podologie (soin du pied)'], ['Médecine générale', 'Soins infirmiers', 'Bilan Sport complet', 'Kinésithérapie (10 séances)', 'Podologie (soin du pied + bilan biomécanique)'], ['Médecine générale', 'Soins infirmiers', 'Bilan Senior complet', 'Kinésithérapie (5 séances)', 'Podologie (2 soins du pied)']],
  'zh-CN': [['全科医疗', '护理', '完整基础检查', '年度妇科检查', '物理治疗（5 次）', '足病护理（足部护理）'], ['全科医疗', '护理', '完整运动检查', '物理治疗（10 次）', '足病护理（足部护理 + 生物力学评估）'], ['全科医疗', '护理', '完整长者检查', '物理治疗（5 次）', '足病护理（2 次足部护理）']],
  ar: [['الطب العام', 'التمريض', 'تحليل عام شامل', 'فحص نسائي سنوي', 'العلاج الطبيعي (5 جلسات)', 'العناية بالقدم'], ['الطب العام', 'التمريض', 'تحليل رياضي شامل', 'العلاج الطبيعي (10 جلسات)', 'العناية بالقدم + تقييم ميكانيكا حيوية'], ['الطب العام', 'التمريض', 'تحليل شامل لكبار السن', 'العلاج الطبيعي (5 جلسات)', 'العناية بالقدم (جلستان)']],
};

export function getLocaleContent(locale) {
  const selected = ui[locale] || ui['en-GB'];
  return {
    ...selected,
    ...layoutLabels[locale] || layoutLabels['en-GB'],
    ...homeContent[locale] || homeContent['en-GB'],
    ...homeDetails[locale] || homeDetails['en-GB'],
    clubBenefits: clubBenefitsByLocale[locale] || clubBenefitsByLocale['en-GB'],
    clubCardBenefits: clubCardBenefitsByLocale[locale] || clubCardBenefitsByLocale['en-GB'],
    clubComparison: clubComparisonByLocale[locale] || clubComparisonByLocale['en-GB'],
    locale,
    serviceList: serviceSlugs.map((slug) => ({ slug, title: services[slug][locale]?.[0] || services[slug].es[0], description: services[slug][locale]?.[1] || services[slug].es[1] })),
  };
}

export function getServiceContent(locale, slug) {
  const content = services[slug]?.[locale] || services[slug]?.es;
  const details = serviceDetailText[locale] || serviceDetailText['en-GB'];
  return content ? { title: content[0], subtitle: content[1], intro: content[1], highlights: details.highlights.map((title, index) => ({ title, text: details.texts[index] })), bullets: details.bullets, slug } : null;
}

export { serviceSlugs };
