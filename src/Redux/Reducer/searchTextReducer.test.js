import searchTextReducer from './searchTextReducer';
import { SEARCH_TEXT } from '../Action/ActionTypes';

describe('search text reducer', () => {
  it('should return default state', () => {
    const reducer = searchTextReducer(undefined, { type: 'notAnAction' });

    expect(reducer).toEqual('');
  });

  it('should return typed text', () => {
    const text = 'pasta';
    const reducer = searchTextReducer('', { type: SEARCH_TEXT, text: text });

    expect(reducer).toEqual(text);
  });
});
