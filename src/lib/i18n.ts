export type Language = 'es' | 'en' | 'ca';

export const languageLabels: Record<Language, string> = {
  es: 'Castellano',
  en: 'English',
  ca: 'Català',
};

const translations = {
  es: {
    nav: { '/': 'Inicio', '/work/': 'Proyectos', '/landing/': 'Servicios', '/gallery/': 'Galería', '/about/': 'Sobre mí', '/contact/': 'Contacto' },
    projects: 'Proyectos',
    gallery: 'Galería',
    about: 'Sobre mí',
    contact: 'Contacto',
    contactTitle: 'Hablemos de tu próximo proyecto.',
    aboutText1: 'Soy diseñador y desarrollador digital. Durante los últimos años he trabajado en proyectos donde la estrategia, la identidad y la tecnología se encuentran para crear experiencias claras y útiles.',
    aboutText2: 'Mi trayectoria combina curiosidad visual, atención por los detalles y una forma de trabajar cercana. Me interesa convertir ideas complejas en productos sencillos de entender y agradables de usar.',
    name: 'Nombre',
    email: 'Email',
    message: 'Mensaje',
    send: 'Enviar mensaje',
  },
  en: {
    nav: { '/': 'Home', '/work/': 'Projects', '/landing/': 'Services', '/gallery/': 'Gallery', '/about/': 'About me', '/contact/': 'Contact' },
    projects: 'Projects',
    gallery: 'Gallery',
    about: 'About me',
    contact: 'Contact',
    contactTitle: "Let's talk about your next project.",
    aboutText1: 'I am a designer and digital developer. Over the last few years I have worked on projects where strategy, identity, and technology meet to create clear and useful experiences.',
    aboutText2: 'My practice combines visual curiosity, attention to detail, and a close way of working. I enjoy turning complex ideas into products that are simple to understand and pleasant to use.',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    send: 'Send message',
  },
  ca: {
    nav: { '/': 'Inici', '/work/': 'Projectes', '/landing/': 'Serveis', '/gallery/': 'Galeria', '/about/': 'Sobre mi', '/contact/': 'Contacte' },
    projects: 'Projectes',
    gallery: 'Galeria',
    about: 'Sobre mi',
    contact: 'Contacte',
    contactTitle: 'Parlem del teu proper projecte.',
    aboutText1: 'Soc dissenyador i desenvolupador digital. Durant els darrers anys he treballat en projectes on l’estratègia, la identitat i la tecnologia es troben per crear experiències clares i útils.',
    aboutText2: 'La meva trajectòria combina curiositat visual, atenció pels detalls i una manera de treballar propera. M’interessa convertir idees complexes en productes senzills d’entendre i agradables d’utilitzar.',
    name: 'Nom',
    email: 'Email',
    message: 'Missatge',
    send: 'Enviar missatge',
  },
} as const;

export function getLanguage(value: string | null | undefined): Language {
  return value === 'en' || value === 'ca' ? value : 'es';
}

export function getTranslations(language: Language) {
  return translations[language];
}
