import { CHANGE_SEARCH_TEXT } from './ActionTypes';
import { changeSearchText } from './changeSearchTextAction';

describe('testing changeSearchText()', () => {
  it('should return default (empty string)', () => {
    expect(changeSearchText(undefined)).toEqual({
      type: CHANGE_SEARCH_TEXT,
      text: '',
    });
  });

  it('should return the text', () => {
    const text = 'pizza';

    const expectedAction = {
      type: CHANGE_SEARCH_TEXT,
      text: text,
    };

    expect(changeSearchText(text)).toEqual(expectedAction);
  });
});
