import {ActionType} from "./action.js";
import {CityList} from "../const.js";
import initialPlaceCards from "../mocks/offers.js";

const initialState = {
  selectedCity: CityList[0],
  initialPlaceCards,
  placeCards: initialPlaceCards
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        selectedCity: action.payload
      };
    case ActionType.SET_PLACE_CARDS:
      return {
        ...state,
        placeCards: action.payload
      };
    default:
      return state;
  }
};

export {reducer};
