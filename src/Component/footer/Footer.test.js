import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../test/testUtils';
import Footer from './Footer';

describe('footer component', () => {
  const wrapper = shallow(<Footer />);
  it('should render without error', () => {
    const component = findByTestAttr(wrapper, 'footer-componenet');
    expect(component.length).toBe(1);
  });

  it('should have a developer info', () => {
    const component = findByTestAttr(wrapper, 'developer-info');
    expect(component.length).toBe(1);
  });

  it('should have a developer info', () => {
    const component = findByTestAttr(wrapper, 'github-link');
    expect(component.length).toBe(1);
  });
});
