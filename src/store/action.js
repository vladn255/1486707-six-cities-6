
const ActionType = {
  CHANGE_CITY: `locationItem/changeCity`,
  SET_PLACE_CARDS: `main/setPlaceCards`,
  SET_ACTIVE_CARD_ID: `placesList/setActiveCardId`,
  LOAD_PLACE_CARDS: `data/loadPlaceCards`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),

  setPlaceCards: (cards) => ({
    type: ActionType.SET_PLACE_CARDS,
    payload: cards
  }),

  setActiveCard: (cardId) => ({
    type: ActionType.SET_ACTIVE_CARD_ID,
    payload: cardId
  }),

  loadPlaceCards: (cards) => ({
    type: ActionType.LOAD_PLACE_CARDS,
    payload: cards
  }),

  requireAuthorization: () => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status
  })
};

export {
  ActionType,
  ActionCreator
};
