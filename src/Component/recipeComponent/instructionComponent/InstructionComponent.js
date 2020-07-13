import React from 'react';
import styles from './InstructionComponent.module.scss';

function InstructionComponent({ instructionHeading, steps }) {
  return (
    <div className={styles.container}>
      {instructionHeading ? (
        <h3 data-testid="component-instruction-title">{instructionHeading}</h3>
      ) : null}
      <ul>
        {steps.map((step, stepIndex) => {
          return (
            <li data-testid="component-instruction-step" key={stepIndex}>
              {step}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default InstructionComponent;
