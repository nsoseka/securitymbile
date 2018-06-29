import { takeEvery, select, call, put } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';
import { CHANGE_BACKGROUND, ERROR, SET_RESULT } from '../actions/background';

const getBackground = query => fetch(`https://securitybetatest.herokuapp.com/background_history.json?query=${query}`, { method: 'GET'});

function* fetchBackgroundHistory(action) {
  try {
    let query = action.query;
    let navigation = action.navigation;

    if (query === undefined) {
      query = yield select(state => state.myState.query);
    }

    const response = yield call(getBackground, query);
    const result = yield response.json();

    if (result.error) {
      yield put({type: ERROR, error: result.error});
      yield navigation.dispatch({
              type: 'ReplaceCurrentScreen',
              routeName: 'Background',
              params: {},
              key: 'BackgroundScreen',
            });
    } else { 
      yield put({type: SET_RESULT, result});
      yield navigation.dispatch({
              type: 'ReplaceCurrentScreen',
              routeName: 'Background',
              params: {},
              key: 'BackgroundScreen',
            });
    }

  } catch(e) {
    yield put({ type: ERROR, error: e.message});
  }
};

export default function* rootSaga() {
  yield takeEvery(CHANGE_BACKGROUND, fetchBackgroundHistory);
};

