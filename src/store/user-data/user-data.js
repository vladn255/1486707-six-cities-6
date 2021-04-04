import {ActionType} from "../action.js";
import {AuthorizationStatus} from "../../const.js";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,

  currentUser: {
    avatarUrl: ``,
    email: ``,
    id: -1,
    isPro: false,
    name: ``
  },

  favoriteCards: [],
  serverErrorStatus: false
};

const userData = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload
      };

    case ActionType.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: {
          avatarUrl: action.payload.avatarUrl,
          email: action.payload.email,
          id: action.payload.id,
          isPro: action.payload.isPro,
          name: action.payload.name
        }
      };

    case ActionType.SET_FAVORITE_CARDS:
      return {
        ...state,
        favoriteCards: action.payload
      };

    case ActionType.SET_SERVER_ERROR_STATUS:
      return {
        ...state,
        serverErrorStatus: action.payload
      };

  }
  return state;
};

export {userData};
