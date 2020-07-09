import React from 'react';

function InstructionComponent({ instructionHeading, steps }) {
  return (
    <div>
      <h3 data-testid="component-instruction-title">{instructionHeading}</h3>
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
