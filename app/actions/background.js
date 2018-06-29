export const CHANGE_BACKGROUND = 'CHANGE_BACKGROUND';
export const CHANGE_QUERY = 'CHANGE_QUERY';
export const ERROR = 'ERROR';
export const SET_RESULT = 'SET_RESULT';

export const changeBackground = (query, navigation) => ({
  type: CHANGE_BACKGROUND,
  query,
  navigation,
});

export const changeQuery = query => ({
  type: 'CHANGE_QUERY',
  query,
});


