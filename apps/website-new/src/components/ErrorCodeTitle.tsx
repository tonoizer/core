import { getCustomMDXComponent } from '@rspress/core/theme';
import { errorDescMap } from '@module-federation/error-codes';
import { useI18n } from '../../theme/i18n';

const ErrorCodeTitle = ({ code }: { code: string }) => {
  const t = useI18n();
  const { h1, ul, li } = getCustomMDXComponent();
  const Title = h1({ children: errorDescMap[code] });
  const Info = ul({
    children: li({
      children: [
        t('errorCodeLabel'),
        <code key={`err-code-${code}`}>{code}</code>,
      ],
    }),
  });
  return (
    <>
      {Title}
      {Info}
    </>
  );
};

export default ErrorCodeTitle;
