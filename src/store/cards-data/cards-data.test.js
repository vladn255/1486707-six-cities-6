import {cardsData} from "./cards-data.js";

import {ActionType} from "../action.js";
import {getFilteredPlaceCards} from "../../utils.js";
import {CityList, SortItems} from "../../const.js";


const cityMock = {
  id: 1,
  name: `string`,
  location: [1, 2]
};

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

describe(`Cards data reducers work correctly`, () => {

  const initialState = {
    selectedCity: CityList[0],
    initialPlaceCards: [],
    placeCards: [],

    activeCard: {
      bedrooms: 0,
      city: {
        location: {
          latitude: 0,
          longitude: 0,
          zoom: 0
        },
        name: ``
      },
      description: ``,
      goods: [],
      host: {
        avatarUrl: ``,
        id: -1,
        isPro: false,
        name: ``
      },
      id: -1,
      images: [],
      isPremium: false,
      isFavorite: false,
      location: {
        latitude: 0,
        longitude: 0,
        zoom: 0
      },
      maxAdults: 0,
      previewImage: ``,
      price: 0,
      rating: 0,
      title: ``,
      type: ``
    },

    currentSortItem: SortItems.POPULAR,
    initialSortItem: SortItems.POPULAR
  };

  it(`Reducer without additional parameters should return initial state`, () => {
    expect(cardsData(undefined, {}))
      .toEqual(initialState);
  });

  it(`Reducer for changing cities should set a new city, return filtered place cards and default initial sort item`, () => {
    const state = Object.assign({}, initialState);
    const changeCityAction = {
      type: ActionType.CHANGE_CITY,
      payload: cityMock
    };

    expect(cardsData(state, changeCityAction))
  .toEqual({
    ...state,
    selectedCity: cityMock,
    placeCards: getFilteredPlaceCards(state.initialPlaceCards, cityMock),
    currentSortItem: state.initialSortItem
  });
  });

  it(`Reducer for setting sort item should set a new sort item`, () => {
    const state = Object.assign({}, initialState);

    const sortMock = `string`;

    const setSortItemAction = {
      type: ActionType.SET_SORT_ITEM,
      payload: sortMock
    };

    expect(cardsData(state, setSortItemAction))
  .toEqual({
    ...state,
    currentSortItem: sortMock
  });
  });

  it(`Reducer for setting place cards should set new place cards array`, () => {
    const state = Object.assign({}, initialState);

    const setPlaceCardsAction = {
      type: ActionType.SET_PLACE_CARDS,
      payload: placeCardsMock
    };

    expect(cardsData(state, setPlaceCardsAction))
  .toEqual({
    ...state,
    placeCards: placeCardsMock
  });
  });

  it(`Reducer for setting active card should set new active card`, () => {
    const state = Object.assign({}, initialState);

    const setActiveCardAction = {
      type: ActionType.SET_ACTIVE_CARD,
      payload: placeCardMock
    };

    expect(cardsData(state, setActiveCardAction))
  .toEqual({
    ...state,
    activeCard: placeCardMock
  });
  });

  it(`Reducer for loading place cards should set new initial place cards array and place cards array`, () => {
    const state = Object.assign({}, initialState);

    const loadPlaceCardsAction = {
      type: ActionType.LOAD_PLACE_CARDS,
      payload: {
        initialPlaceCards: placeCardsMock,
        placeCards: placeCardsMock}
    };

    expect(cardsData(state, loadPlaceCardsAction))
  .toEqual({
    ...state,
    initialPlaceCards: placeCardsMock,
    placeCards: placeCardsMock
  });
  });

  it(`Reducer for setting new city should set a new city`, () => {
    const state = Object.assign({}, initialState);
    const setCityAction = {
      type: ActionType.SET_CITY,
      payload: cityMock
    };

    expect(cardsData(state, setCityAction))
  .toEqual({
    ...state,
    selectedCity: cityMock
  });
  });

  it(`Reducer for setting card favorite status should return new initial place cards array and a new place cards array`, () => {
    const state = Object.assign({}, initialState);

    const favoritePlaceCardMock = Object.assign({},
        {...placeCardMock,
          id: 10}
    );

    const favoritePlaceCardsMock = [
      placeCardMock,
      favoritePlaceCardMock,
      placeCardMock
    ];

    state.initialPlaceCards = favoritePlaceCardsMock;

    const index = state.initialPlaceCards.findIndex((card) => card.id === favoritePlaceCardMock.id);

    const updatedFavoritePlaceCardsMock = [
      ...favoritePlaceCardsMock.slice(0, index),
      favoritePlaceCardMock,
      ...favoritePlaceCardsMock.slice(index + 1)
    ];

    const changeFavoriteCardAction = {
      type: ActionType.CHANGE_FAVORITE_CARD,
      payload: favoritePlaceCardMock
    };


    expect(cardsData(state, changeFavoriteCardAction))
  .toEqual({
    ...state,
    initialPlaceCards: updatedFavoritePlaceCardsMock,
    placeCards: getFilteredPlaceCards(updatedFavoritePlaceCardsMock, state.selectedCity)
  });
  });

});
