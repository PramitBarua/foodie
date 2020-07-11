import React from 'react';
import { shallow } from 'enzyme';
import LoadingComponent from './LoadingComponent';
import { findByTestAttr } from '../../test/testUtils';

describe('loading component render', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<LoadingComponent />);
  });
  it('should contain one spinner element', () => {
    const element = findByTestAttr(wrapper, 'spinner-element');
    expect(element.length).toBe(1);
  });

  it('should contain one text field', () => {
    const element = findByTestAttr(wrapper, 'text-elememt');
    expect(element.length).toBe(1);
  });
});
