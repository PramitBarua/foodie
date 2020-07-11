import React from 'react';
import { shallow } from 'enzyme';
import ErrorComponent from './ErrorComponent';
import { findByTestAttr } from '../../test/testUtils';

describe('error component render', () => {
  let wrapper = shallow(<ErrorComponent />);

  it('should contain one text element', () => {
    const element = findByTestAttr(wrapper, 'text-elememt');
    expect(element.length).toBe(1);
  });
});
