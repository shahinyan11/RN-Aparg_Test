import {SET_PIECE_COORDS} from '../actions';

const initialState = {
  pieceCoords: {
    x: null,
    y: null,
    status: null,
  },
};

function reducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_PIECE_COORDS: {
      return {
        ...state,
        pieceCoords: {...action.payload},
      };
    }

    default: {
      return state;
    }
  }
}

export default reducer;
