import { EN_US } from './enUS';

export const ZH_CN: Record<keyof typeof EN_US, string> = {
  Configuration: '配置',
  coldStart: '冷启动（dev）',
  coldBuild: '冷构建',
  hmrRoot: '热更新（根模块变动）',
  hmrLeaf: '热更新（叶子模块变动）',
  moduleCount: '模块数量',
  guide: '指南',
  quickStart: '快速开始',
  features: '核心特性',
  compatibility: '对 webpack 的兼容性',
  migration: '迁移指南',
  cli: 'CLI 接口',
  friendLink: '友情链接',
  community: '社区',
  benchmarkTitle: '极快的构建速度',
  benchmarkDesc:
    '基于 Rust 和 TypeScript 的高度并行、增量编译架构，构建速度非常快，带给你极致的开发体验。',
  benchmarkDetail: '参见 Benchmark 详情',
  announcementVideo:
    'https://module-federation-assest.netlify.app/document/announcement/blog/announcement/announcement-video.mp4',
  announcementVideoPoster:
    'https://module-federation-assest.netlify.app/document/announcement/blog/announcement/announcement-video-poster.png',
  hostShareScopeLabel: '宿主 Share Scope',
  hostShareScopeType: '宿主 Share Scope 的类型',
  shareScopeUnset: '未设置',
  hostShareScopes: '宿主 Share Scope',
  remoteShareScopeLabel: '远程 Share Scope',
  remoteShareScopeType: '远程 Share Scope 的类型',
  remoteShareScopes: '远程 Share Scope',
  shareScopeWarnings: '警告',
  shareScopeAlignment: '对齐（伪代码）',
  shareScopeNoAlignment: '（无对齐）',
  shareScopeInitialized: '已初始化的 Scope',
  hostShareScopeEmpty: '宿主的 shareScope 是空数组。',
  hostShareScopeSingleItem:
    "宿主的 shareScope 是只包含一项的数组。除非你确实需要数组语义，否则请优先使用字符串（例如 'default'）。",
  remoteShareScopeEmpty: '远程模块的 shareScope 是空数组。',
  remoteShareScopeSingleItem:
    "远程模块的 shareScope 是只包含一项的数组。除非你确实需要数组语义，否则请优先使用字符串（例如 'default'）。",
  alignedViaShareScopeObject:
    '通过传给 remoteEntry.init(...) 的 shareScope 对象完成对齐',
  loadingPlayground: '正在加载 Playground…',
  playAnnouncementVideo: '播放公告视频',
  typeDeclaration: '类型声明',
  errorCodeLabel: '错误代码：',
  copyright: 'Module Federation 核心团队。保留所有权利。',
};
