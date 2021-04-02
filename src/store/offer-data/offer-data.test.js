import {offerData} from "./offer-data.js";
import {ActionType} from "../action.js";

describe(`Offer data reducers work correctly`, () => {
  const placeCardMock = {
    bedrooms: 1,
    city: {
      location: {
        latitude: 1,
        longitude: 2,
        zoom: 3
      },
      name: `string`
    },
    description: `string`,
    goods: [`string`, `string`, `string`],
    host: {
      avatarUrl: `string`,
      id: 1,
      isPro: false,
      name: `string`
    },
    id: 2,
    images: [`string`, `string`, `string`],
    isPremium: false,
    isFavorite: false,
    location: {
      latitude: 4,
      longitude: 5,
      zoom: 6
    },
    maxAdults: 7,
    previewImage: `string`,
    price: 8,
    rating: 9,
    title: `string`,
    type: `string`
  };

  const placeCardsMock = [placeCardMock, placeCardMock];

  const reviewsMock = {
    comment: `string`,
    date: `string`,
    id: 1,
    rating: 2,
    user: {
      avatarUrl: `string`,
      id: 3,
      isPro: false,
      name: `string`
    }
  };

  const initialState = {
    placeCardsNearby: [],
    reviews: [],
    submitStatusDisabled: false
  };

  it(`Reducer without additional parameters should return initial state`, () => {
    expect(offerData(undefined, {}))
      .toEqual(initialState);
  });

  it(`Reducer for loading nearby place cards should set nearby cards array`, () => {
    const state = Object.assign({}, initialState);

    const loadPlaceCardsNearbyAction = {
      type: ActionType.LOAD_PLACE_CARDS_NEARBY,
      payload: placeCardsMock
    };

    expect(offerData(state, loadPlaceCardsNearbyAction))
  .toEqual({
    ...state,
    placeCardsNearby: placeCardsMock
  });
  });

  it(`Reducer for loading reviews should return reviews array`, () => {
    const state = Object.assign({}, initialState);

    const loadReviewsAction = {
      type: ActionType.LOAD_REVIEWS,
      payload: reviewsMock
    };

    expect(offerData(state, loadReviewsAction))
  .toEqual({
    ...state,
    reviews: reviewsMock
  });
  });

  it(`Reducer for setting submit status should return submit status`, () => {
    const state = Object.assign({}, initialState);

    const setSubmitStatusAction = {
      type: ActionType.SET_SUBMIT_STATUS_DISABLED,
      payload: true
    };

    expect(offerData(state, setSubmitStatusAction))
  .toEqual({
    ...state,
    submitStatusDisabled: true
  });
  });

});
