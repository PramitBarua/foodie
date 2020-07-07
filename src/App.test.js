import React from 'react';
import { render } from '@testing-library/react';
import { App } from './App';
import { Provider } from 'react-redux';
import Store from './Redux/Store';

describe('app component', () => {
  it('should have a background component', () => {
    render(
      <Provider store={Store}>
        <App />
      </Provider>
    );
  });
});
