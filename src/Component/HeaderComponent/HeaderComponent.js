import React from 'react';
import { Search } from '../index';
import styles from './HeaderComponent.module.scss';

function HeaderComponent() {
  return (
    <div className={styles.container}>
      <Search />
    </div>
  );
}

export default HeaderComponent;
