import React from 'react';
import styles from './ErrorComponenet.module.scss';

function ErrorComponent({ code }) {
  let content = null;
  if (code === 402) {
    content = `The daily API limit has expired. Please contact`;
  } else {
    content = `We're so sorry, something went wrong. If this error persists, please
        contact`;
  }
  return (
    <div className={styles.container}>
      <h3 data-testid="text-elememt">{content}</h3>
      <a data-testid="link-elememt" href="https://pramitbarua.com/">
        the website manager
      </a>
    </div>
  );
}

export default ErrorComponent;
