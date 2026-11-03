import React, { useMemo, useState } from 'react';
import { useI18n } from '../../../theme/i18n';
import { NoSSR } from '../NoSSR';
import type { ShareScopeAlignmentItem } from './computeInitContainerShareScopeAlignment';
import { computeInitContainerShareScopeAlignment } from './computeInitContainerShareScopeAlignment';

type InputKind = 'unset' | 'string' | 'array';

const SHARE_SCOPE_MESSAGE_KEYS = {
  'Host shareScope is an empty array.': 'hostShareScopeEmpty',
  "Host shareScope is an array with a single item. Prefer a string (e.g. 'default') unless you intentionally need array semantics.":
    'hostShareScopeSingleItem',
  'Remote shareScope is an empty array.': 'remoteShareScopeEmpty',
  "Remote shareScope is an array with a single item. Prefer a string (e.g. 'default') unless you intentionally need array semantics.":
    'remoteShareScopeSingleItem',
  'Aligned via the shareScope object passed to remoteEntry.init(...)':
    'alignedViaShareScopeObject',
} as const;

type ShareScopeMessage = keyof typeof SHARE_SCOPE_MESSAGE_KEYS;

function isShareScopeMessage(message: string): message is ShareScopeMessage {
  return Object.prototype.hasOwnProperty.call(
    SHARE_SCOPE_MESSAGE_KEYS,
    message,
  );
}

function parseStringArray(raw: string): string[] {
  if (!raw.trim()) return [];
  return raw
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
}

function toShareScopeKey(
  kind: InputKind,
  raw: string,
): string | string[] | undefined {
  if (kind === 'unset') return undefined;
  if (kind === 'string') {
    const v = raw.trim();
    return v ? v : undefined;
  }
  return parseStringArray(raw);
}

export default function ShareScopeAlignmentPlayground() {
  const t = useI18n();
  const localize = (message: string) =>
    isShareScopeMessage(message)
      ? t(SHARE_SCOPE_MESSAGE_KEYS[message])
      : message;
  const [hostKind, setHostKind] = useState<InputKind>('array');
  const [hostRaw, setHostRaw] = useState('default,scope1');

  const [remoteKind, setRemoteKind] = useState<InputKind>('string');
  const [remoteRaw, setRemoteRaw] = useState('default');

  const hostShareScopeKeys = useMemo(
    () => toShareScopeKey(hostKind, hostRaw),
    [hostKind, hostRaw],
  );
  const remoteShareScopeKey = useMemo(
    () => toShareScopeKey(remoteKind, remoteRaw),
    [remoteKind, remoteRaw],
  );

  const result = useMemo(() => {
    return computeInitContainerShareScopeAlignment({
      hostShareScopeKeys,
      remoteShareScopeKey,
    });
  }, [hostShareScopeKeys, remoteShareScopeKey]);

  const inputStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: 520,
    padding: '8px 10px',
    border: '1px solid var(--rp-c-divider, #e5e7eb)',
    borderRadius: 8,
    background: 'var(--rp-c-bg, #fff)',
    color: 'var(--rp-c-text-1, #111827)',
  };

  const selectStyle: React.CSSProperties = {
    ...inputStyle,
    maxWidth: 200,
  };

  const cardStyle: React.CSSProperties = {
    border: '1px solid var(--rp-c-divider, #e5e7eb)',
    borderRadius: 12,
    padding: 14,
    background: 'var(--rp-c-bg, #fff)',
    margin: '12px 0',
  };

  const labelStyle: React.CSSProperties = {
    fontSize: 13,
    color: 'var(--rp-c-text-2, #374151)',
    marginBottom: 6,
  };

  const rowStyle: React.CSSProperties = {
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap',
    alignItems: 'center',
  };

  const blockTitleStyle: React.CSSProperties = {
    fontSize: 13,
    fontWeight: 600,
    color: 'var(--rp-c-text-1, #111827)',
    margin: '14px 0 8px',
  };

  return (
    <NoSSR>
      <div style={cardStyle}>
        <div style={rowStyle}>
          <div style={{ flex: '1 1 320px' }}>
            <div style={labelStyle}>
              {t('hostShareScopeLabel')} (remotes[remote].shareScope)
            </div>
            <div style={rowStyle}>
              <select
                aria-label={t('hostShareScopeType')}
                value={hostKind}
                onChange={(e) => setHostKind(e.target.value as InputKind)}
                style={selectStyle}
              >
                <option value="unset">{t('shareScopeUnset')}</option>
                <option value="string">string</option>
                <option value="array">array</option>
              </select>
              <input
                aria-label={t('hostShareScopes')}
                value={hostRaw}
                onChange={(e) => setHostRaw(e.target.value)}
                placeholder="default,scope1"
                style={inputStyle}
                disabled={hostKind === 'unset'}
              />
            </div>
          </div>

          <div style={{ flex: '1 1 320px' }}>
            <div style={labelStyle}>
              {t('remoteShareScopeLabel')} (shareScope)
            </div>
            <div style={rowStyle}>
              <select
                aria-label={t('remoteShareScopeType')}
                value={remoteKind}
                onChange={(e) => setRemoteKind(e.target.value as InputKind)}
                style={selectStyle}
              >
                <option value="unset">{t('shareScopeUnset')}</option>
                <option value="string">string</option>
                <option value="array">array</option>
              </select>
              <input
                aria-label={t('remoteShareScopes')}
                value={remoteRaw}
                onChange={(e) => setRemoteRaw(e.target.value)}
                placeholder="default"
                style={inputStyle}
                disabled={remoteKind === 'unset'}
              />
            </div>
          </div>
        </div>

        {result.warnings.length > 0 ? (
          <div style={{ marginTop: 12 }}>
            <div style={blockTitleStyle}>
              {t('shareScopeWarnings')}
            </div>
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              {result.warnings.map((w: string) => (
                <li key={w} style={{ color: 'var(--rp-c-text-2, #374151)' }}>
                  {localize(w)}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div style={blockTitleStyle}>
          {t('shareScopeAlignment')}
        </div>
        <pre
          style={{
            margin: 0,
            padding: 12,
            borderRadius: 10,
            border: '1px solid var(--rp-c-divider, #e5e7eb)',
            background: 'var(--rp-code-bg, rgba(0,0,0,0.03))',
            overflowX: 'auto',
          }}
        >
          {result.alignment.length > 0
            ? result.alignment
                .map((a: ShareScopeAlignmentItem) => {
                  if ('note' in a)
                    return `${a.expression}\n${localize(a.note)}`;
                  return a.expression;
                })
                .join('\n')
            : t('shareScopeNoAlignment')}
        </pre>

        <div style={blockTitleStyle}>
          {t('shareScopeInitialized')}
        </div>
        <pre
          style={{
            margin: 0,
            padding: 12,
            borderRadius: 10,
            border: '1px solid var(--rp-c-divider, #e5e7eb)',
            background: 'var(--rp-code-bg, rgba(0,0,0,0.03))',
            overflowX: 'auto',
          }}
        >
          {JSON.stringify(result.initializedScopes, null, 2)}
        </pre>
      </div>
    </NoSSR>
  );
}
