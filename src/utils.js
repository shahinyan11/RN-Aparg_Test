import {SQUARE_STATUS} from './constants';

export const makeTable = (count = 64) => {
  const table = [];

  for (let i = 1; i <= count; i++) {
    table.push({status: SQUARE_STATUS.EMPTY, color: null});
  }

  return table;
};

export const getActiveSquares = (table, pieceSquares) => {
  let activeSquares = [...pieceSquares];

  pieceSquares.forEach(value => {
    if (table[value]?.status.id === 'FILLED') {
      activeSquares = [];
    }
  });

  return activeSquares;
};
