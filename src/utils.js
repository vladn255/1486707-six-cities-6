import {MAX_RATING_PERCENT} from "./const.js";

const getRatingWidth = (rating) => Math.floor(rating) / MAX_RATING_PERCENT;

const getFilteredPlaceCards = (initialCards, city) => initialCards.slice().filter((placeCard) => placeCard.city.name === city.name);

export {
  getRatingWidth,
  getFilteredPlaceCards
};
