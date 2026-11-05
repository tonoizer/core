import { EN_US } from './enUS';

export const PT_BR: Record<keyof typeof EN_US, string> = {
  Configuration: 'Configuração',
  coldStart: 'Inicialização fria',
  coldBuild: 'Build frio',
  hmrRoot: 'HMR(raiz alterada)',
  hmrLeaf: 'HMR(folha alterada)',
  moduleCount: 'Contagem de módulos',
  guide: 'Guia',
  quickStart: 'Primeiros passos',
  features: 'Recursos',
  compatibility: 'Compatibilidade',
  migration: 'Migração',
  cli: 'CLI',
  friendLink: 'Ecossistema',
  community: 'Comunidade',
  benchmarkTitle: 'Performance de build',
  benchmarkDesc:
    'Combinando TypeScript e Rust com uma arquitetura paralelizada para oferecer uma excelente experiência de desenvolvimento.',
  benchmarkDetail: 'Ver detalhes do benchmark',
  announcementVideo:
    'https://module-federation-assest.netlify.app/document/announcement/blog/announcement/announcement-video.mp4',
  announcementVideoPoster:
    'https://module-federation-assest.netlify.app/document/announcement/blog/announcement/announcement-video-poster.png',
  hostShareScopeLabel: 'Share scope do host',
  hostShareScopeType: 'Tipo do share scope do host',
  shareScopeUnset: 'não definido',
  hostShareScopes: 'Share scopes do host',
  remoteShareScopeLabel: 'Share scope do remote',
  remoteShareScopeType: 'Tipo do share scope do remote',
  remoteShareScopes: 'Share scopes do remote',
  shareScopeWarnings: 'Avisos',
  shareScopeAlignment: 'Alinhamento (pseudocódigo)',
  shareScopeNoAlignment: '(sem alinhamento)',
  shareScopeInitialized: 'Scopes inicializados',
  hostShareScopeEmpty: 'O shareScope do host é um array vazio.',
  hostShareScopeSingleItem:
    "O shareScope do host é um array com um único item. Prefira uma string (por exemplo, 'default'), a menos que você precise explicitamente da semântica de array.",
  remoteShareScopeEmpty: 'O shareScope do remote é um array vazio.',
  remoteShareScopeSingleItem:
    "O shareScope do remote é um array com um único item. Prefira uma string (por exemplo, 'default'), a menos que você precise explicitamente da semântica de array.",
  alignedViaShareScopeObject:
    'Alinhado pelo objeto shareScope passado para remoteEntry.init(...)',
  loadingPlayground: 'Carregando Playground…',
  playAnnouncementVideo: 'Reproduzir o vídeo do anúncio',
  typeDeclaration: 'Declaração de tipos',
  errorCodeLabel: 'Código de erro: ',
  copyright:
    'Equipe central do Module Federation. Todos os direitos reservados.',
};
