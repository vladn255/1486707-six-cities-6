
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
  SET_SUBMIT_STATUS_DISABLED: `offerForm/setSubmitStatusDisabled`,
  SET_FAVORITE_CARDS: `data/setFavoriteCards`,
  SET_CITY: `offerForm/setCity`,
  CHANGE_FAVORITE_CARD: `data/changeFavoriteCard`,
  SET_SERVER_ERROR_STATUS: `data/setServerErrorStatus`
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

  setSubmitStatusDisabled: (status) => ({
    type: ActionType.SET_SUBMIT_STATUS_DISABLED,
    payload: status
  }),

  setFavoriteCards: (cards) => ({
    type: ActionType.SET_FAVORITE_CARDS,
    payload: cards
  }),

  setCity: (city) => ({
    type: ActionType.SET_CITY,
    payload: city
  }),

  changeFavoriteCard: (card) => ({
    type: ActionType.CHANGE_FAVORITE_CARD,
    payload: card
  }),

  setServerErrorStatus: (status) => ({
    type: ActionType.SET_SERVER_ERROR_STATUS,
    payload: status
  })
};

export {
  ActionType,
  ActionCreator
};
