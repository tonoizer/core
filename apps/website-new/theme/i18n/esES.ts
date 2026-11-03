import { EN_US } from './enUS';

export const ES_ES: Record<keyof typeof EN_US, string> = {
  Configuration: 'Configuración',
  coldStart: 'Arranque en frío',
  coldBuild: 'Build en frío',
  hmrRoot: 'HMR(raíz modificada)',
  hmrLeaf: 'HMR(hoja modificada)',
  moduleCount: 'Número de módulos',
  guide: 'Guía',
  quickStart: 'Inicio rápido',
  features: 'Características',
  compatibility: 'Compatibilidad',
  migration: 'Migración',
  cli: 'CLI',
  friendLink: 'Ecosistema',
  community: 'Comunidad',
  benchmarkTitle: 'Rendimiento de build',
  benchmarkDesc:
    'Combinamos TypeScript y Rust con una arquitectura paralelizada para ofrecerte la mejor experiencia de desarrollo.',
  benchmarkDetail: 'Ver detalles del benchmark',
  announcementVideo:
    'https://module-federation-assest.netlify.app/document/announcement/blog/announcement/announcement-video.mp4',
  announcementVideoPoster:
    'https://module-federation-assest.netlify.app/document/announcement/blog/announcement/announcement-video-poster.png',
  hostShareScopeLabel: 'Share scope del host',
  hostShareScopeType: 'Tipo del share scope del host',
  shareScopeUnset: 'no establecido',
  hostShareScopes: 'Share scopes del host',
  remoteShareScopeLabel: 'Share scope del remoto',
  remoteShareScopeType: 'Tipo del share scope del remoto',
  remoteShareScopes: 'Share scopes del remoto',
  shareScopeWarnings: 'Advertencias',
  shareScopeAlignment: 'Alineación (pseudocódigo)',
  shareScopeNoAlignment: '(sin alineación)',
  shareScopeInitialized: 'Scopes inicializados',
  hostShareScopeEmpty: 'El shareScope del host es un array vacío.',
  hostShareScopeSingleItem:
    "El shareScope del host es un array con un solo elemento. Usa preferiblemente un string (por ejemplo, 'default'), salvo que necesites expresamente la semántica de array.",
  remoteShareScopeEmpty: 'El shareScope del remoto es un array vacío.',
  remoteShareScopeSingleItem:
    "El shareScope del remoto es un array con un solo elemento. Usa preferiblemente un string (por ejemplo, 'default'), salvo que necesites expresamente la semántica de array.",
  alignedViaShareScopeObject:
    'Alineado mediante el objeto shareScope que se pasa a remoteEntry.init(...)',
  loadingPlayground: 'Cargando Playground…',
  playAnnouncementVideo: 'Reproducir el video del anuncio',
  typeDeclaration: 'Declaración de tipos',
  errorCodeLabel: 'Código de error: ',
  copyright: 'Equipo central de Module Federation. Todos los derechos reservados.',
};
