import { EN_US } from './enUS';

export const DE_DE: Record<keyof typeof EN_US, string> = {
  Configuration: 'Konfiguration',
  coldStart: 'Kaltstart',
  coldBuild: 'Build ohne Cache',
  hmrRoot: 'HMR (Root geändert)',
  hmrLeaf: 'HMR (Leaf geändert)',
  moduleCount: 'Anzahl der Module',
  guide: 'Leitfaden',
  quickStart: 'Schnellstart',
  features: 'Funktionen',
  compatibility: 'Kompatibilität',
  migration: 'Migration',
  cli: 'CLI',
  friendLink: 'Ökosystem',
  community: 'Community',
  benchmarkTitle: 'Build-Performance',
  benchmarkDesc:
    'TypeScript und Rust mit einer parallelen Architektur für effizientes Entwickeln.',
  benchmarkDetail: 'Benchmark-Details ansehen',
  announcementVideo:
    'https://module-federation-assest.netlify.app/document/announcement/blog/announcement/announcement-video.mp4',
  announcementVideoPoster:
    'https://module-federation-assest.netlify.app/document/announcement/blog/announcement/announcement-video-poster.png',
  hostShareScopeLabel: 'Share Scope des Hosts',
  hostShareScopeType: 'Typ des Host-Share-Scopes',
  shareScopeUnset: 'nicht gesetzt',
  hostShareScopes: 'Host-Share-Scopes',
  remoteShareScopeLabel: 'Share Scope des Remotes',
  remoteShareScopeType: 'Typ des Remote-Share-Scopes',
  remoteShareScopes: 'Remote-Share-Scopes',
  shareScopeWarnings: 'Warnungen',
  shareScopeAlignment: 'Abgleich (Pseudocode)',
  shareScopeNoAlignment: '(kein Abgleich)',
  shareScopeInitialized: 'Initialisierte Scopes',
  hostShareScopeEmpty: 'Der shareScope des Hosts ist ein leeres Array.',
  hostShareScopeSingleItem:
    "Der shareScope des Hosts ist ein Array mit einem einzigen Eintrag. Verwende vorzugsweise einen String (z. B. 'default'), sofern du nicht ausdrücklich die Array-Semantik benötigst.",
  remoteShareScopeEmpty: 'Der shareScope des Remotes ist ein leeres Array.',
  remoteShareScopeSingleItem:
    "Der shareScope des Remotes ist ein Array mit einem einzigen Eintrag. Verwende vorzugsweise einen String (z. B. 'default'), sofern du nicht ausdrücklich die Array-Semantik benötigst.",
  alignedViaShareScopeObject:
    'Abgleich über das shareScope-Objekt, das an remoteEntry.init(...) übergeben wird',
  loadingPlayground: 'Playground wird geladen …',
  playAnnouncementVideo: 'Ankündigungsvideo abspielen',
  typeDeclaration: 'Typdeklaration',
  errorCodeLabel: 'Fehlercode: ',
  copyright: 'Module Federation Core-Team. Alle Rechte vorbehalten.',
};
