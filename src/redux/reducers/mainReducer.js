import {SET_LOGGED_IN} from '../actions';

const initialState = {
  loggedIn: false,
};

function reducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_LOGGED_IN: {
      return {
        ...state,
        loggedIn: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}

export default reducer;
