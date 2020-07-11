import React from 'react';
import styles from './LoadingComponent.module.scss';

function LoadingComponent({
  type = 'componentLoading',
  text = 'Please Wait...',
}) {
  return (
    <div className={styles.loading}>
      <div data-testid="spinner-element" className={styles[`${type}`]}></div>
      <h3 data-testid="text-elememt" className={styles.text}>
        {text}
      </h3>
    </div>
  );
}

export default LoadingComponent;
