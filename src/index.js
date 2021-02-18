import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app';

import {placeCards} from "./mocks/offers.js";

const placeCardsNearby = placeCards.slice(0, 2);

ReactDOM.render(
    <App
      placeCards={placeCards}
      placeCardsNearby={placeCardsNearby}
    />,
    document.querySelector(`#root`)
);

