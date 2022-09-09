export const SET_LOGGED_IN = 'SET_LOGGED_IN';
export const SET_PHOTOS = 'SET_PHOTOS';
export const REMOVE_PHOTOS = 'REMOVE_PHOTOS';

export function setLoggedInAction(bool) {
  return {type: SET_LOGGED_IN, payload: bool};
}

export function setPhotosAction(photos) {
  return {type: SET_PHOTOS, payload: photos};
}

export function removePhotosAction(photos) {
  return {type: REMOVE_PHOTOS};
}
