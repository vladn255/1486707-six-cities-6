import React from 'react';

import {CityList} from "../../const.js";

import LocationItem from "../location-item/location-item.jsx";


const LocationList = () => {

  return (
    <ul className="locations__list tabs__list">
      {CityList.map(({id, name}) => <LocationItem
        key={id.toString()} cityName={name}
      />)}
    </ul>
  );
};

export default LocationList;

