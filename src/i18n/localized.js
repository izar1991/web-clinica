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
  es: { localeName: 'Español', home: 'Inicio', services: 'Servicios', team: 'Equipo profesional', book: 'Reservar cita', viewAll: 'Ver todas las especialidades', appointment: 'Solicita una consulta con nosotros', appointmentText: 'Rellena el formulario y contactaremos contigo para confirmar tu visita.', teamTitle: 'Especialistas que acompañan cada etapa de tu salud', club: 'Club CSV', clubTitle: 'Una forma más fácil de cuidar tu salud', contact: 'Contacto', call: 'Llamar al centro', next: 'Próximamente nuevas colaboraciones' },
  ca: { localeName: 'Català', home: 'Inici', services: 'Serveis', team: 'Equip professional', book: 'Reservar visita', viewAll: 'Veure totes les especialitats', appointment: 'Sol·licita una consulta amb nosaltres', appointmentText: 'Omple el formulari i contactarem amb tu per confirmar la teva visita.', teamTitle: 'Especialistes que t’acompanyen en cada etapa de la teva salut', club: 'Club CSV', clubTitle: 'Una manera més fàcil de cuidar la teva salut', contact: 'Contacte', call: 'Trucar al centre', next: 'Properament, noves col·laboracions' },
  'en-GB': { localeName: 'English', home: 'Home', services: 'Services', team: 'Professional team', book: 'Book an appointment', viewAll: 'View all specialties', appointment: 'Request a consultation with us', appointmentText: 'Complete the form and we will contact you to confirm your visit.', teamTitle: 'Specialists supporting every stage of your health', club: 'CSV Club', clubTitle: 'A simpler way to care for your health', contact: 'Contact', call: 'Call the centre', next: 'New partnerships coming soon' },
  'de-DE': { localeName: 'Deutsch', home: 'Startseite', services: 'Leistungen', team: 'Professionelles Team', book: 'Termin buchen', viewAll: 'Alle Fachbereiche ansehen', appointment: 'Vereinbaren Sie eine Sprechstunde', appointmentText: 'Füllen Sie das Formular aus. Wir kontaktieren Sie zur Bestätigung Ihres Termins.', teamTitle: 'Spezialisten für jede Phase Ihrer Gesundheit', club: 'CSV Club', clubTitle: 'Gesundheit einfacher gestalten', contact: 'Kontakt', call: 'Zentrum anrufen', next: 'Neue Kooperationen folgen in Kürze' },
  'fr-FR': { localeName: 'Français', home: 'Accueil', services: 'Services', team: 'Équipe professionnelle', book: 'Prendre rendez-vous', viewAll: 'Voir toutes les spécialités', appointment: 'Demandez une consultation', appointmentText: 'Remplissez le formulaire et nous vous contacterons pour confirmer votre rendez-vous.', teamTitle: 'Des spécialistes à vos côtés à chaque étape de votre santé', club: 'Club CSV', clubTitle: 'Une façon plus simple de prendre soin de votre santé', contact: 'Contact', call: 'Appeler le centre', next: 'De nouvelles collaborations prochainement' },
  'zh-CN': { localeName: '简体中文', home: '首页', services: '服务', team: '专业团队', book: '预约就诊', viewAll: '查看全部专科', appointment: '向我们申请咨询', appointmentText: '填写表格后，我们会联系您确认就诊安排。', teamTitle: '陪伴您每个健康阶段的专业团队', club: 'CSV 会员计划', clubTitle: '更轻松地守护您的健康', contact: '联系我们', call: '致电中心', next: '即将推出新的合作服务' },
  ar: { localeName: 'العربية', home: 'الرئيسية', services: 'الخدمات', team: 'الفريق الطبي', book: 'حجز موعد', viewAll: 'عرض جميع التخصصات', appointment: 'اطلب استشارة معنا', appointmentText: 'املأ النموذج وسنتواصل معك لتأكيد موعدك.', teamTitle: 'أخصائيون يرافقونك في كل مرحلة من مراحل صحتك', club: 'نادي CSV', clubTitle: 'طريقة أسهل للعناية بصحتك', contact: 'اتصل بنا', call: 'اتصل بالمركز', next: 'شراكات جديدة قريباً' },
};

const serviceSlugs = Object.keys(services);

const layoutLabels = {
  es: { searchLabel: 'Buscar en el sitio', searchPlaceholder: 'Buscar especialidades, profesionales o servicios', portal: 'Intranet del paciente', follow: 'Síguenos', sections: 'Secciones', rights: 'Todos los derechos reservados.', menu: 'Abrir menú', technology: 'Tecnología', insurers: 'Mutuas' },
  ca: { searchLabel: 'Cercar al lloc web', searchPlaceholder: 'Cercar especialitats, professionals o serveis', portal: 'Intranet del pacient', follow: 'Segueix-nos', sections: 'Seccions', rights: 'Tots els drets reservats.', menu: 'Obrir el menú', technology: 'Tecnologia', insurers: 'Mútues' },
  'en-GB': { searchLabel: 'Search the site', searchPlaceholder: 'Search specialties, professionals or services', portal: 'Patient portal', follow: 'Follow us', sections: 'Sections', rights: 'All rights reserved.', menu: 'Open menu', technology: 'Technology', insurers: 'Insurers' },
  'de-DE': { searchLabel: 'Website durchsuchen', searchPlaceholder: 'Fachbereiche, Fachkräfte oder Leistungen suchen', portal: 'Patientenportal', follow: 'Folgen Sie uns', sections: 'Bereiche', rights: 'Alle Rechte vorbehalten.', menu: 'Menü öffnen', technology: 'Technologie', insurers: 'Versicherungen' },
  'fr-FR': { searchLabel: 'Rechercher sur le site', searchPlaceholder: 'Rechercher une spécialité, un professionnel ou un service', portal: 'Portail patient', follow: 'Suivez-nous', sections: 'Rubriques', rights: 'Tous droits réservés.', menu: 'Ouvrir le menu', technology: 'Technologie', insurers: 'Assurances' },
  'zh-CN': { searchLabel: '搜索网站', searchPlaceholder: '搜索专科、专业人员或服务', portal: '患者平台', follow: '关注我们', sections: '栏目', rights: '版权所有。', menu: '打开菜单', technology: '医疗技术', insurers: '保险' },
  ar: { searchLabel: 'البحث في الموقع', searchPlaceholder: 'ابحث عن التخصصات أو المختصين أو الخدمات', portal: 'بوابة المرضى', follow: 'تابعنا', sections: 'الأقسام', rights: 'جميع الحقوق محفوظة.', menu: 'فتح القائمة', technology: 'التقنية', insurers: 'التأمين' },
};

export function getLocaleContent(locale) {
  const selected = ui[locale] || ui['en-GB'];
  return {
    ...selected,
    ...layoutLabels[locale] || layoutLabels['en-GB'],
    locale,
    serviceList: serviceSlugs.map((slug) => ({ slug, title: services[slug][locale]?.[0] || services[slug].es[0], description: services[slug][locale]?.[1] || services[slug].es[1] })),
  };
}

export function getServiceContent(locale, slug) {
  const content = services[slug]?.[locale] || services[slug]?.es;
  return content ? { title: content[0], subtitle: content[1], intro: content[1], slug } : null;
}

export { serviceSlugs };
