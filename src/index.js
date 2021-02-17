import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app';

import {placeCards} from "./mocks/offers.js";


ReactDOM.render(
    <App
      placeCards={placeCards}
    />,
    document.querySelector(`#root`)
);

