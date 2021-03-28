import {NameSpace} from '../root-reducer.js';

const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;

const getCurrentUser = (state) => state[NameSpace.USER].currentUser;

const getFavoriteCards = (state) => state[NameSpace.USER].favoriteCards;


export {
  getAuthorizationStatus,
  getCurrentUser,
  getFavoriteCards
};
