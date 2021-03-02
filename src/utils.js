import {MAX_RATING_PERCENT} from "./const.js";

const getRatingWidth = (rating) => Math.floor(rating) / MAX_RATING_PERCENT;

export {
  getRatingWidth
};
