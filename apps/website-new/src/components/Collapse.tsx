import { useState } from 'react';
import { useI18n } from '../../theme/i18n';
import styles from './Collapse.module.scss';

const Collapse = (props) => {
  const t = useI18n();
  const [collapse, setCollapse] = useState(true);

  return (
    <details className={styles.details}>
      <summary
        onClick={() => {
          setCollapse(!collapse);
        }}
        className={styles.summary}
      >
        <span
          className={collapse ? styles['arrow-right'] : styles['arrow-down']}
        ></span>
        &nbsp; {props.title || t('typeDeclaration')}
      </summary>
      {props.children}
    </details>
  );
};

export default Collapse;
