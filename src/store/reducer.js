import {ActionType} from "./action.js";
import {CityList, SortItems, AuthorizationStatus} from "../const.js";
import {getFilteredPlaceCards} from "../utils.js";

const initialState = {
  selectedCity: CityList[0],
  initialSortItem: SortItems.POPULAR,
  currentSortItem: SortItems.POPULAR,
  initialPlaceCards: [],
  placeCards: [],
  unSortedPlaceCards: [],
  placeCardsNearby: [],

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

  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isDataLoaded: false,

  currentUser: {
    avatarUrl: ``,
    email: ``,
    id: -1,
    isPro: false,
    name: ``
  },

  reviews: [],
  submitStatusDisabled: false,
  favoriteCards: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      const filteredPlaceCards = getFilteredPlaceCards(state.initialPlaceCards, action.payload);
      return {
        ...state,
        selectedCity: action.payload,
        unSortedPlaceCards: filteredPlaceCards,
        placeCards: filteredPlaceCards,
        currentSortItem: state.initialSortItem
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
        placeCards: action.payload.placeCards,
        unSortedPlaceCards: action.payload.placeCards,
        isDataLoaded: true
      };

    case ActionType.LOAD_PLACE_CARDS_NEARBY:
      return {
        ...state,
        placeCardsNearby: action.payload
      };

    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload
      };

    case ActionType.SET_SORT_ITEM:
      return {
        ...state,
        currentSortItem: action.payload
      };

    case ActionType.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: {
          avatarUrl: action.payload.avatarUrl,
          email: action.payload.email,
          id: action.payload.id,
          isPro: action.payload.isPro,
          name: action.payload.name
        }
      };

    case ActionType.LOAD_REVIEWS:
      return {
        ...state,
        reviews: action.payload
      };

    case ActionType.SET_SUBMIT_STATUS_DISABLED:
      return {
        ...state,
        submitStatusDisabled: action.payload
      };

    case ActionType.SET_FAVORITE_CARDS:
      return {
        ...state,
        favoriteCards: action.payload
      };

    case ActionType.SET_CITY:
      return {
        ...state,
        selectedCity: action.payload
      };

    default:
      return state;
  }
};

export {reducer};
