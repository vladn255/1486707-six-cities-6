import {ActionType} from "./../action.js";

const initialState = {
  placeCardsNearby: [],
  reviews: [],
  submitStatusDisabled: false
};

const offerData = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.LOAD_PLACE_CARDS_NEARBY:
      return {
        ...state,
        placeCardsNearby: action.payload
      };

    case ActionType.LOAD_REVIEWS:
      return {
        ...state,
        reviews: action.payload
      };

    case ActionType.SET_SUBMIT_STATUS_DISABLED:
      return {
        ...state,
        submitStatusDisabled: action.payload
      };

  }
  return state;
};

export {offerData};
