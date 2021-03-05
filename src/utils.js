import {MAX_RATING_PERCENT} from "./const.js";

const getRatingWidth = (rating) => Math.floor(rating) / MAX_RATING_PERCENT;

const getFilteredPlaceCards = (initialCards, city) => initialCards.slice().filter((placeCard) => placeCard.city.name === city.name);

const sortByPriceUp = (cardA, cardB) => cardB.price - cardA.price;

const sortByPriceDown = (cardA, cardB) => cardA.price - cardB.price;

const sortByRate = (cardA, cardB) => cardB.rating - cardA.rating;

export {
  getRatingWidth,
  getFilteredPlaceCards,
  sortByPriceUp,
  sortByPriceDown,
  sortByRate
};
