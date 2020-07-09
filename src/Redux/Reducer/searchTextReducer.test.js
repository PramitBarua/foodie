import searchTextReducer from './searchTextReducer';
import { CHANGE_SEARCH_TEXT } from '../Action/ActionTypes';

describe('search text reducer', () => {
  it('should return default state', () => {
    const reducer = searchTextReducer(undefined, { type: 'notAnAction' });

    expect(reducer).toEqual('');
  });

  it('should return searched text', () => {
    const searchText = 'pasta';
    const reducer = searchTextReducer('', {
      type: CHANGE_SEARCH_TEXT,
      searchText: searchText,
    });

    expect(reducer).toEqual(searchText);
  });
});
