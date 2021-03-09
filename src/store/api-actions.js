import {ActionCreator} from "./action.js";
import {CityList, AuthorizationStatus} from "../const.js";
import {getFilteredPlaceCards, adaptPlaceCardToClient} from "../utils.js";

const fetchPlaceCards = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => {
      const parsedData = data.slice().map((card) => adaptPlaceCardToClient(card));
      const placeCards = getFilteredPlaceCards(parsedData, CityList[0]);
      dispatch(ActionCreator.loadPlaceCards({
        initialPlaceCards: parsedData,
        placeCards
      }));
    })
);

const fetchPlaceCardsNearby = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/:${id}`)
    .then(({data}) => {
      const parsedData = data.slice().map((card) => adaptPlaceCardToClient(card));
      dispatch(ActionCreator.loadPlaceCards({
        placeCardsNearby: parsedData
      }));
    })
);

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
  .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
  .catch(() => {})
);

const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
.then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
);

export {
  fetchPlaceCards,
  fetchPlaceCardsNearby,
  checkAuth,
  login
};
