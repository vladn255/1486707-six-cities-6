import {getFilteredPlaceCards} from "../utils.js";
import initialPlaceCards from "../mocks/offers.js";

const ActionType = {
  CHANGE_CITY: `main/changeCity`,
  SET_PLACE_CARDS: `main/setPlaceCards`
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),

  setPlaceCards: (city) => {
    const placeCards = getFilteredPlaceCards(initialPlaceCards, city);
    return {
      type: ActionType.SET_PLACE_CARDS,
      payload: placeCards
    };
  }
};

export {
  ActionType,
  ActionCreator
};
