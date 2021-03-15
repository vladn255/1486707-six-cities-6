
const ActionType = {
  CHANGE_CITY: `locationItem/changeCity`,
  SET_PLACE_CARDS: `main/setPlaceCards`,
  SET_ACTIVE_CARD: `placesList/setActiveCardId`,
  LOAD_PLACE_CARDS: `data/loadPlaceCards`,
  LOAD_PLACE_CARDS_NEARBY: `offer/loadPlaceCardsNearby`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  SET_SORT_ITEM: `main/setSortItem`,
  SET_CURRENT_USER: `data/setCurrentUser`,
  LOAD_REVIEWS: `data/loadReviews`,
  SET_SUBMIT_STATUS: `offerForm/setSubmitStatus`
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
    type: ActionType.SET_ACTIVE_CARD,
    payload: cardId
  }),

  loadPlaceCards: (cards) => ({
    type: ActionType.LOAD_PLACE_CARDS,
    payload: cards
  }),

  loadPlaceCardsNearby: (cards) => ({
    type: ActionType.LOAD_PLACE_CARDS_NEARBY,
    payload: cards
  }),

  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status
  }),

  setSortItem: (sortItem) => ({
    type: ActionType.SET_SORT_ITEM,
    payload: sortItem
  }),

  setCurrentUser: (data) => ({
    type: ActionType.SET_CURRENT_USER,
    payload: data
  }),

  loadReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews
  }),

  setSubmitStatus: (status) => ({
    type: ActionType.SET_SUBMIT_STATUS,
    payload: status
  })
};

export {
  ActionType,
  ActionCreator
};
