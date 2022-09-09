import {REMOVE_PHOTOS, SET_LOGGED_IN, SET_PHOTOS} from '../actions';

const initialState = {
  loggedIn: false,
  photos: [],
};

function reducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_LOGGED_IN: {
      return {
        ...state,
        loggedIn: action.payload,
      };
    }

    case SET_PHOTOS: {
      return {
        ...state,
        photos: [...state.photos, ...action.payload],
      };
    }
    case REMOVE_PHOTOS: {
      return {
        ...state,
        photos: [],
      };
    }

    default: {
      return state;
    }
  }
}

export default reducer;
