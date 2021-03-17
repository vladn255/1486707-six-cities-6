import React from 'react';

import {placeCardsType} from "../../types.js";
import {CityList} from "../../const.js";

import FavoriteItem from "../favorite-item/favorite-item.jsx";

const FavoritesList = ({favoritePlaceCards}) => {

  return (
    <ul className="favorites__list">

      <>
        {CityList.slice().map((city) => <FavoriteItem key={city.id.toString()} city={city} placeCards={favoritePlaceCards}/>)}
      </>

    </ul>
  );
};

FavoritesList.propTypes = {
  favoritePlaceCards: placeCardsType,
};

export default FavoritesList;
