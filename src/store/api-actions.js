import {ActionCreator} from "./action.js";
import {CityList, AuthorizationStatus, REVIEW_COUNT} from "../const.js";
import {getFilteredPlaceCards, adaptPlaceCardToClient, adaptLoginDataToClient, adaptReviewToClient, sortReviewsByDate} from "../utils.js";

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
  api.get(`/hotels/${id}/nearby`)
    .then(({data}) => {
      const parsedData = data.slice().map((card) => adaptPlaceCardToClient(card));
      dispatch(ActionCreator.loadPlaceCardsNearby(parsedData));
    })
);

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
  .then((data) => {
    const parsedData = adaptLoginDataToClient(data.data);
    dispatch(ActionCreator.setCurrentUser({
      ...parsedData
    }));
    dispatch(ActionCreator.requireAuthorization(
        AuthorizationStatus.AUTH
    ));
  })
  .catch(() => {})
);

const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
  .then(() => {
    dispatch(ActionCreator.requireAuthorization(
        AuthorizationStatus.AUTH
    ));
  })
);

const fetchHotelId = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}`)
  .then((card) => {
    dispatch(ActionCreator.setActiveCard(adaptPlaceCardToClient(card.data)));
  })
);

const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
  .then((reviews) => {
    const parsedReviews = reviews.data.slice().sort(sortReviewsByDate).slice(0, REVIEW_COUNT - 1).map((review) => adaptReviewToClient(review));
    dispatch(ActionCreator.loadReviews(parsedReviews));
  })
);

const postReview = (id, {comment, rating}) => (dispatch, _getState, api) => (
  api.post(`/comments/${id}`, {comment, rating})
  .then((reviews) => {
    dispatch(ActionCreator.setSubmitStatusDisabled(false));
    const parsedReviews = reviews.data.slice().map((review) => adaptReviewToClient(review));
    dispatch(ActionCreator.loadReviews(parsedReviews));
  })
  .catch(() => {
    dispatch(ActionCreator.setSubmitStatusDisabled(false));
  })
);

const logout = () => (dispatch, _getState, api) => (
  api.get(`/logout`)
  .then(() => {
    dispatch(ActionCreator.requireAuthorization(
        AuthorizationStatus.NO_AUTH
    ));
  })
);

const changeFavoriteStatus = (id, status) => (dispatch, _getState, api) => (
  api.post(`/favorite/${id}/${status}`, {id, status})
  .then(({data}) => {
    dispatch(ActionCreator.setActiveCard(adaptPlaceCardToClient(data)));
  })
);

const fetchFavoriteCards = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
  .then(({data}) => {
    const parsedData = data.slice().map((card) => adaptPlaceCardToClient(card));
    dispatch(ActionCreator.setFavoriteCards(parsedData));
  })
);

export {
  fetchPlaceCards,
  fetchPlaceCardsNearby,
  checkAuth,
  login,
  fetchHotelId,
  fetchComments,
  postReview,
  logout,
  changeFavoriteStatus,
  fetchFavoriteCards
};
