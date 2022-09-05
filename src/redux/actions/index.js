export const SET_LOGGED_IN = 'SET_LOGGED_IN';

export function setLoggedIn(bool) {
  return {type: SET_LOGGED_IN, payload: bool};
}
