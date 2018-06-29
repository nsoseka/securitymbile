import {
  CHANGE_BACKGROUND,
  CHANGE_QUERY,
  ERROR,
  SET_RESULT,
} from '../actions/background';

const initialState = {
  background: {
    id: {},
    restrictions: [],
    flags: [],
  },
  query: '',
};

// const initialState2 = {
//   background: {
//     id: {
//       name: 'The Real Sinach',
//       expiry_date: '12-08-2022',
//       date_of_issue: '12-08-2012',
//       id_card_number: '123456789',
//       avatar: 'https://instagram.fdla2-1.fna.fbcdn.net/vp/a15bcfd6669db89b34149093c80345b9/5BB2DFA0/t51.2885-19/s150x150/17663614_1976006765964588_9211289482102308864_a.jpg',
//     },
//     restrictions: ['Not allowed to leave the north west region'],
//     flags: ['Suspected of preaching the gospel in a forbidden zone'],
//   },
//   query: 'sinope',
// };


const reducer = (state=initialState, action) => {
  switch(action.type) {
    case CHANGE_BACKGROUND:
      return { 
        ...state, 
        //background: action.background || state.background,
      };

    case CHANGE_QUERY:
      return {
        ...state,
        query: action.query || '',
      };

    case SET_RESULT:
      return {
        ...state,
        background: action.result,
      };

    case ERROR:
      return {
        ...state,
        ...initialState,
        query: state.query
      }

    default: 
      return state;
  }
};

export default reducer;
