import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app';

import {placeCards} from "./mocks/offers.js";
import {reviews} from "./mocks/reviews.js";

const placeCardsNearby = placeCards.slice(0, 2);

ReactDOM.render(
    <App
      placeCards={placeCards}
      placeCardsNearby={placeCardsNearby}
      reviewList={reviews}
    />,
    document.querySelector(`#root`)
);

