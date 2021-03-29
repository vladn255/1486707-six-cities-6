import {NameSpace} from '../root-reducer.js';

const getPlaceCardsNearby = (state) => state[NameSpace.OFFER].placeCardsNearby;

const getReviews = (state) => state[NameSpace.OFFER].reviews;

const getSubmitStatusDisabled = (state) => state[NameSpace.OFFER].submitStatusDisabled;

export {
  getPlaceCardsNearby,
  getReviews,
  getSubmitStatusDisabled
};
