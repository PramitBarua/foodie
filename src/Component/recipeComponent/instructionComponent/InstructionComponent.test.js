import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../test/testUtils';

import InstructionComponent from './InstructionComponent';

const initialState = {
  instructionHeading: '',
  steps: [
    'Place all ingredients in a food processor or high-powered blender.',
    'Mix until it forms a dough.',
    'Roll into balls.Store in the fridge or freezer.',
  ],
};

describe('instruction component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<InstructionComponent {...initialState} />);
  });
  it('should contains instruction title when it is present', () => {
    const component = findByTestAttr(wrapper, 'component-instruction-title');
    if (initialState.instructionHeading) {
      expect(component.length).toBe(1);
    } else {
      expect(component.length).toBe(0);
    }
  });

  it('should contains instruction steps', () => {
    const component = findByTestAttr(wrapper, 'component-instruction-step');
    expect(component.length).toBe(initialState.steps.length);
  });
});
