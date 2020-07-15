import React from 'react';
import styles from './ErrorComponenet.module.scss';

function ErrorComponent({ code }) {
  let content = null;
  if (code === 402) {
    content = (
      <span>
        The daily API limit has expired. <br /> If this error persists, please
        contact;
      </span>
    );
  } else if (code === 'no result found') {
    content = (
      <span>
        No result has found for the searched text. <br /> Please try different
        text to search. <br /> If this error persists, please contact;
      </span>
    );
  } else {
    content = (
      <span>
        We're so sorry, something went wrong. <br /> If this error persists,
        please contact
      </span>
    );
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
