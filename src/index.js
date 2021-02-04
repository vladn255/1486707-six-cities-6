import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app';

const placeCards = [
  {
    src: `img/apartment-01.jpg`,
    price: 120,
    priceText: `night`,
    ratingWidth: 80,
    placeCardText: `Beautiful &amp; luxurious apartment at great location`,
    type: `Apartment`
  },
  {
    src: `img/room.jpg`,
    price: 80,
    priceText: `night`,
    ratingWidth: 80,
    placeCardText: `Wood and stone place`,
    type: `Private room`
  },
  {
    src: `img/apartment-02.jpg`,
    price: 132,
    priceText: `night`,
    ratingWidth: 80,
    placeCardText: `Canal View Prinsengracht`,
    type: `Apartment`
  },
  {
    src: `img/apartment-03.jpg`,
    price: 180,
    priceText: `night`,
    ratingWidth: 100,
    placeCardText: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`
  },
  {
    src: `img/room.jpg`,
    price: 80,
    priceText: `night`,
    ratingWidth: 80,
    placeCardText: `Wood and stone place`,
    type: `Private room`
  },
];

ReactDOM.render(
    <App
      placeCards={placeCards}
    />,
    document.querySelector(`#root`)
);
