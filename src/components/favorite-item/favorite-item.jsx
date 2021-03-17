import React from 'react';

import {placeCardsType, cityType} from "../../types.js";
import {getFilteredPlaceCards} from "../../utils.js";

import FavoritePlacesList from "../favorite-place-list/favorite-place-list.jsx";

const FavoriteItem = ({city, placeCards}) => {
  const filteredPlaceCards = getFilteredPlaceCards(placeCards, city);

  return filteredPlaceCards.length === 0
    ? <> </>
    : (
      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>{city.name}</span>
            </a>
          </div>
        </div>
        <div className="favorites__places">

          <FavoritePlacesList placeCards = {filteredPlaceCards}/>

        </div>
      </li>
    );
};

FavoriteItem.propTypes = {
  city: cityType,
  placeCards: placeCardsType,
};

export default FavoriteItem;
