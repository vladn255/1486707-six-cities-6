import {combineReducers} from "redux";

import {cardsData} from "./cards-data/cards-data.js";
import {offerData} from "./offer-data/offer-data.js";
import {userData} from "./user-data/user-data.js";

export const NameSpace = {
  CARDS: `CARDS`,
  OFFER: `OFFER`,
  USER: `USER`
};

export default combineReducers({
  [NameSpace.CARDS]: cardsData,
  [NameSpace.OFFER]: offerData,
  [NameSpace.USER]: userData
});
