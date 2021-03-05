import {getFilteredPlaceCards} from "../utils.js";
import initialPlaceCards from "../mocks/offers.js";

const ActionType = {
  CHANGE_CITY: `locationItem/changeCity`,
  SET_PLACE_CARDS: `main/setPlaceCards`,
  SET_ACTIVE_CARD_ID: `placesList/setActiveCardId`
};

const ActionCreator = {
  changeCity: (city) => {
    const placeCards = getFilteredPlaceCards(initialPlaceCards, city);
    return {
      type: ActionType.CHANGE_CITY,
      payload: {
        city,
        placeCards
      }
    };
  },

  setPlaceCards: (cards) => {

    return {
      type: ActionType.SET_PLACE_CARDS,
      payload: cards
    };
  },

  setActiveCard: (cardId) => ({
    type: ActionType.SET_ACTIVE_CARD_ID,
    payload: cardId
  })
};

export {
  ActionType,
  ActionCreator
};
