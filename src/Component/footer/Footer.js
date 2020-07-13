import React from 'react';

import styles from './Footer.module.scss';

function Footer() {
  return (
    <div data-testid="footer-componenet" className={styles.container}>
      <p data-testid="developer-info">Designed & Developed By Pramit Barua</p>
      <a
        data-testid="github-link"
        href="https://github.com/PramitBarua/foodToFork-react"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github Repo
      </a>
    </div>
  );
}

export default Footer;
