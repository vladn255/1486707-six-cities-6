import {ActionType} from "../action.js";
import {CityList, SortItems} from "../../const.js";
import {getFilteredPlaceCards} from "../../utils.js";

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

const cardsData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      const filteredPlaceCards = getFilteredPlaceCards(state.initialPlaceCards, action.payload);
      return {
        ...state,
        selectedCity: action.payload,
        placeCards: filteredPlaceCards,
        currentSortItem: state.initialSortItem
      };

    case ActionType.SET_SORT_ITEM:
      return {
        ...state,
        currentSortItem: action.payload
      };

    case ActionType.SET_PLACE_CARDS:
      return {
        ...state,
        placeCards: action.payload
      };

    case ActionType.SET_ACTIVE_CARD:
      return {
        ...state,
        activeCard: action.payload
      };

    case ActionType.LOAD_PLACE_CARDS:
      return {
        ...state,
        initialPlaceCards: action.payload.initialPlaceCards,
        placeCards: action.payload.placeCards
      };

    case ActionType.SET_CITY:
      return {
        ...state,
        selectedCity: action.payload
      };

    case ActionType.CHANGE_FAVORITE_CARD:
      const newCard = action.payload;
      const index = state.initialPlaceCards.findIndex((card) => card.id === newCard.id);

      const updatedInitialPlaceCards = [
        ...state.initialPlaceCards.slice(0, index),
        newCard,
        ...state.initialPlaceCards.slice(index + 1)
      ];

      const updatedPlaceCards = getFilteredPlaceCards(updatedInitialPlaceCards, state.selectedCity);
      return {
        ...state,
        initialPlaceCards: updatedInitialPlaceCards,
        placeCards: updatedPlaceCards
      };
  }
  return state;
};

export {cardsData};
