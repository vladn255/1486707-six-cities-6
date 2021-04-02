import {userData} from "./user-data.js";
import {ActionType} from "../action.js";
import {AuthorizationStatus} from "../../const.js";

describe(`User data reducers work correctly`, () => {
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

  const userMock = {
    avatarUrl: `string`,
    email: `string`,
    id: 1,
    isPro: false,
    name: `string`
  };

  const initialState = {
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    currentUser: {
      avatarUrl: ``,
      email: ``,
      id: -1,
      isPro: false,
      name: ``
    },
    favoriteCards: []
  };

  it(`Reducer without additional parameters should return initial state`, () => {
    expect(userData(undefined, {}))
      .toEqual(initialState);
  });

  it(`Reducer for setting authorization status should set authorization status`, () => {
    const state = Object.assign({}, initialState);

    const setAuthorizationStatusAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH
    };

    expect(userData(state, setAuthorizationStatusAction))
  .toEqual({
    ...state,
    authorizationStatus: AuthorizationStatus.AUTH
  });
  });

  it(`Reducer for setting current user should set current user`, () => {
    const state = Object.assign({}, initialState);

    const setCurrentUserAction = {
      type: ActionType.SET_CURRENT_USER,
      payload: userMock
    };

    expect(userData(state, setCurrentUserAction))
  .toEqual({
    ...state,
    currentUser: userMock
  });
  });

  it(`Reducer for setting favorite cards should return favorite cards`, () => {
    const state = Object.assign({}, initialState);

    const setFavoriteCardsAction = {
      type: ActionType.SET_FAVORITE_CARDS,
      payload: placeCardsMock
    };

    expect(userData(state, setFavoriteCardsAction))
  .toEqual({
    ...state,
    favoriteCards: placeCardsMock
  });
  });
});

