import React from 'react';
import {connect} from 'react-redux';

import {ActionCreator} from '../../store/action.js';
import {LocationType} from "../../types.js";

import {CityList} from "../../const.js";

const getActiveCity = (cityName, selectedCityName) => {
  return cityName === selectedCityName
    ? `tabs__item--active`
    : ``;
};

const LocationItem = ({cityName, selectedCity, onChangeCity}) => {

  return (
    <li
      className="locations__item"
      onClick={(evt) => {
        evt.preventDefault();

        if (evt.target.textContent === selectedCity[`name`]) {
          return;
        }

        const targetCity = CityList.find((city) => {
          return city[`name`] === evt.target.textContent;
        });
        onChangeCity(targetCity);

      }}>
      <a className={`locations__item-link tabs__item ${getActiveCity(cityName, selectedCity.name)}`} href="#">
        <span>{cityName}</span>
      </a>
    </li>
  );
};

const mapStateToProps = ({selectedCity, initialPlaceCards}) => ({
  selectedCity,
  placeCards: initialPlaceCards
});

const mapDispatchToProps = (dispatch) => ({
  onChangeCity(city) {
    dispatch(ActionCreator.changeCity(city));
    dispatch(ActionCreator.setPlaceCards(city));
  }
});

LocationItem.propTypes = LocationType;

export {LocationItem};
export default connect(mapStateToProps, mapDispatchToProps)(LocationItem);
