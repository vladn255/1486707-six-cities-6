import {ActionType} from "./action.js";
import {CityList} from "../const.js";
import {getFilteredPlaceCards} from "../utils.js";
import initialPlaceCards from "../mocks/offers.js";


const initialState = {
  selectedCity: CityList[0],
  initialPlaceCards,
  placeCards: getFilteredPlaceCards(initialPlaceCards, CityList[0]),
  activeCardId: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        selectedCity: action.payload.city,
        placeCards: action.payload.placeCards
      };

    case ActionType.SET_PLACE_CARDS:
      return {
        ...state,
        placeCards: action.payload
      };

    case ActionType.SET_ACTIVE_CARD_ID:
      return {
        ...state,
        activeCardId: action.payload
      };
    default:
      return state;
  }
};

export {reducer};
