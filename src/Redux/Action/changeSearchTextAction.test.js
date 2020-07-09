import { CHANGE_SEARCH_TEXT } from './ActionTypes';
import { changeSearchText } from './changeSearchTextAction';

describe('testing changeSearchText()', () => {
  it('should return default (empty string)', () => {
    expect(changeSearchText(undefined)).toEqual({
      type: CHANGE_SEARCH_TEXT,
      searchText: '',
    });
  });

  it('should return the text', () => {
    const searchText = 'pizza';

    const expectedAction = {
      type: CHANGE_SEARCH_TEXT,
      searchText: searchText,
    };

    expect(changeSearchText(searchText)).toEqual(expectedAction);
  });
});
