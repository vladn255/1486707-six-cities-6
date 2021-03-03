const ActionType = {
  CHANGE_CITY: `main/changeCity`,
  SET_PLACE_CARDS: `main/getPlaceCards`
};

const ActionCreator = {
  changeCity: (city) => {
    return {
      type: ActionType.CHANGE_CITY,
      payload: city
    };
  },

  setPlaceCards: (cards) => ({
    type: ActionType.SET_PLACE_CARDS,
    payload: cards
  })
};

export {
  ActionType,
  ActionCreator
};
