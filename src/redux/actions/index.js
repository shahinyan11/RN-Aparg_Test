export const SET_PIECE_COORDS = 'SET_PIECE_COORDS';

export function setPieceCoords(coords) {
  return {type: SET_PIECE_COORDS, payload: coords};
}
