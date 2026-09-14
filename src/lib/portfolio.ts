import type { ImageMetadata } from 'astro';
import type { Language } from './i18n';
import { withBase } from './url';
import homeImage from '@/assets/images/ai/home.png';
import environments from '@/assets/images/ai/environments.png';
import virtualProduction from '@/assets/images/ai/virtual-production.png';
import immersive from '@/assets/images/ai/immersive.png';
import previsualization from '@/assets/images/ai/previsualization.png';
import splatting from '@/assets/images/ai/gaussian-splatting.png';
import photogrammetry from '@/assets/images/ai/photogrammetry.png';

// Editorial entry points. AI images are provisional illustrations, never projects.
export const home = {
  title: 'Real-time creation',
  image: homeImage,
  focalPoint: '50% 50%',
};
export const profile = {
  name: 'Xavi Calvo',
  email: 'xavicalvof@gmail.com',
  photo: undefined as ImageMetadata | undefined,
  biography: { ca: '', es: '', en: '' },
};
export const projectOrder = [
  'fieldnote-research-library',
  'interval-health-companion',
  'afterlight-cultural-archive',
  'northstar-civic-platform',
  'morrow-studio',
  'ecam-entorns-produccio-virtual',
  'mckallan-personatges-3d',
  'audi-e-tron',
];
export const serviceImages: (ImageMetadata | undefined)[] = [
  environments,
  virtualProduction,
  immersive,
  previsualization,
  splatting,
  photogrammetry,
];
export function pageLanguage(url: URL): Language {
  return url.pathname.split('/').includes('ca')
    ? 'ca'
    : url.pathname.split('/').includes('es')
      ? 'es'
      : 'en';
}
export function localLink(path: string, language: Language): string {
  return withBase(`${language === 'en' ? '' : '/' + language}${path}`);
}
export function plainPath(path: string): string {
  return path.replace(/^\/(ca|en|es)(?=\/|$)/, '') || '/';
}

export const copy = {
  ca: {
    period: 'Període de participació',
    course: 'Veure el curs',
    coverPending: 'Portada pendent',
    aiNotice: 'Imatge conceptual generada amb IA',
    aiServicesNotice: 'Imatges conceptuals generades amb IA',
    hero: 'Creació d’escenaris · Producció virtual · Experiències immersives',
    engine: 'Amb Unreal Engine',
    work: 'Veure projectes',
    services: 'Serveis',
    galleryIntro: 'Renders, detalls i exploracions visuals.',
    specialty: 'Artista 3D i tècnic de producció virtual',
    contactTitle: 'Parlem del teu projecte.',
    contactIntro:
      'Explica’m què necessites, en quin punt es troba el projecte i quins terminis tens.',
    mailNote:
      'S’obrirà la teva aplicació de correu amb el missatge preparat. L’enviament es fa des d’allà.',
    back: 'Tots els projectes',
    next: 'Següent projecte',
    context: 'El projecte',
    contribution: 'La meva aportació',
    process: 'Procés i detalls',
    pending: 'Fitxa ampliada en preparació.',
    photoPending: 'Foto de treball pendent',
    imagePending: 'Imatge pendent',
    year: 'Any',
    role: 'Rol',
    tools: 'Eines',
    client: 'Client',
    close: 'Tancar',
    previous: 'Anterior',
    nextImage: 'Següent',
    menu: 'Menú',
    skip: 'Saltar al contingut',
    servicesList: [
      [
        'Creació d’escenaris',
        'Entorns 3D per a cinema, videojocs i experiències immersives.',
      ],
      [
        'Producció virtual',
        'Preparació d’entorns i suport tècnic durant el rodatge.',
      ],
      [
        'Experiències immersives',
        'Continguts interactius per a museus i instal·lacions.',
      ],
      [
        'Previsualització',
        'Plans, càmeres i seqüències per preparar el rodatge.',
      ],
      [
        'Gaussian splatting',
        'Captura d’espais reals per integrar-los en entorns digitals.',
      ],
      [
        'Fotogrametria',
        'Models 3D d’objectes i espais a partir de fotografies.',
      ],
    ],
  },
  es: {
    period: 'Período de participación',
    course: 'Ver el curso',
    coverPending: 'Portada pendiente',
    aiNotice: 'Imagen conceptual generada con IA',
    aiServicesNotice: 'Imágenes conceptuales generadas con IA',
    hero: 'Creación de escenarios · Producción virtual · Experiencias inmersivas',
    engine: 'Con Unreal Engine',
    work: 'Ver proyectos',
    services: 'Servicios',
    galleryIntro: 'Renders, detalles y exploraciones visuales.',
    specialty: 'Artista 3D y técnico de producción virtual',
    contactTitle: 'Hablemos de tu proyecto.',
    contactIntro:
      'Cuéntame qué necesitas, en qué punto está el proyecto y qué plazos tienes.',
    mailNote:
      'Se abrirá tu aplicación de correo con el mensaje preparado. El envío se realiza desde allí.',
    back: 'Todos los proyectos',
    next: 'Siguiente proyecto',
    context: 'El proyecto',
    contribution: 'Mi aportación',
    process: 'Proceso y detalles',
    pending: 'Ficha ampliada en preparación.',
    photoPending: 'Foto de trabajo pendiente',
    imagePending: 'Imagen pendiente',
    year: 'Año',
    role: 'Rol',
    tools: 'Herramientas',
    client: 'Cliente',
    close: 'Cerrar',
    previous: 'Anterior',
    nextImage: 'Siguiente',
    menu: 'Menú',
    skip: 'Saltar al contenido',
    servicesList: [
      [
        'Creación de escenarios',
        'Entornos 3D para cine, videojuegos y experiencias inmersivas.',
      ],
      [
        'Producción virtual',
        'Preparación de entornos y soporte técnico durante el rodaje.',
      ],
      [
        'Experiencias inmersivas',
        'Contenidos interactivos para museos e instalaciones.',
      ],
      [
        'Previsualización',
        'Planos, cámaras y secuencias para preparar el rodaje.',
      ],
      [
        'Gaussian splatting',
        'Captura de espacios reales para integrarlos en entornos digitales.',
      ],
      [
        'Fotogrametría',
        'Modelos 3D de objetos y espacios a partir de fotografías.',
      ],
    ],
  },
  en: {
    period: 'Participation period',
    course: 'View course',
    coverPending: 'Cover pending',
    aiNotice: 'AI-generated concept image',
    aiServicesNotice: 'AI-generated concept images',
    hero: 'Environment creation · Virtual production · Immersive experiences',
    engine: 'With Unreal Engine',
    work: 'View projects',
    services: 'Services',
    galleryIntro: 'Renders, details and visual explorations.',
    specialty: '3D artist and virtual production technician',
    contactTitle: 'Let’s talk about your project.',
    contactIntro:
      'Tell me what you need, where the project stands and what your deadlines are.',
    mailNote:
      'Your email application will open with the message prepared. Send it from there.',
    back: 'All projects',
    next: 'Next project',
    context: 'The project',
    contribution: 'My contribution',
    process: 'Process and details',
    pending: 'Full project information coming soon.',
    photoPending: 'Work photograph pending',
    imagePending: 'Image pending',
    year: 'Year',
    role: 'Role',
    tools: 'Tools',
    client: 'Client',
    close: 'Close',
    previous: 'Previous',
    nextImage: 'Next',
    menu: 'Menu',
    skip: 'Skip to content',
    servicesList: [
      [
        'Environment creation',
        '3D environments for film, games and immersive experiences.',
      ],
      [
        'Virtual production',
        'Environment preparation and technical support during filming.',
      ],
      [
        'Immersive experiences',
        'Interactive content for museums and installations.',
      ],
      [
        'Previsualization',
        'Shots, cameras and sequences to prepare for filming.',
      ],
      [
        'Gaussian splatting',
        'Capturing real spaces for integration into digital environments.',
      ],
      [
        'Photogrammetry',
        '3D models of objects and spaces made from photographs.',
      ],
    ],
  },
};
