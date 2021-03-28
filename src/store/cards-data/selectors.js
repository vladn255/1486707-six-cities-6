import {NameSpace} from '../root-reducer.js';
import {createSelector} from 'reselect';

import {sortByPriceDown, sortByPriceUp, sortByRate} from "../../utils.js";
import {SortItems} from "../../const.js";

const getPlaceCards = (state) => state[NameSpace.CARDS].placeCards;

const getCurrentSortItem = (state) => state[NameSpace.CARDS].currentSortItem;

const getSelectedCity = (state) => state[NameSpace.CARDS].selectedCity;

const getInitialPlaceCards = (state) => state[NameSpace.CARDS].initialPlaceCards;

const getActiveCard = (state) => state[NameSpace.CARDS].activeCard;

const getInitialSortItem = (state) => state[NameSpace.CARDS].initialSortItem;

const getSortedPlaceCards = createSelector(
    [getPlaceCards, getCurrentSortItem],
    (placeCards, currentSortItem) => {
      switch (currentSortItem) {

        case SortItems.PRICE_LOW_TO_HIGH:
          return placeCards.slice().sort(sortByPriceDown);

        case SortItems.PRICE_HIGH_TO_LOW:
          return placeCards.slice().sort(sortByPriceUp);

        case SortItems.TOP_RATED_FIRST:
          return placeCards.slice().sort(sortByRate);
      }
      return placeCards;
    }
);


export {
  getPlaceCards,
  getCurrentSortItem,
  getSelectedCity,
  getInitialPlaceCards,
  getActiveCard,
  getInitialSortItem,
  getSortedPlaceCards
};

