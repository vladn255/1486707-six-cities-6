import React from 'react';
import {connect} from 'react-redux';

import {ActionCreator} from '../../store/action.js';
import {LocationType, LocationListType} from "../../types.js";

import {emptyCard} from "../../mocks/offers.js";

const getActiveCity = (cityName, selectedCityName) => {
  return cityName === selectedCityName
    ? `locations__item-link tabs__item tabs__item--active`
    : `locations__item-link tabs__item`;
};

const getFilteredPlaceCards = (initialPlaceCards, city) => {

  const filteredCards = initialPlaceCards.slice().filter((placeCard) => placeCard.city.name === city.name);
  return filteredCards.length !== 0
    ? filteredCards
    : emptyCard;
};

const LocationItem = ({cityName, cities, initialPlaceCards, selectedCity, onChangeCity}) => {
  return (
    <li
      className="locations__item"
      onClick={(evt) => {
        evt.preventDefault();

        if (evt.target.textContent === selectedCity[`name`]) {
          return;
        }

        const targetCity = cities.find((city) => {
          return city[`name`] === evt.target.textContent
            ? true
            : false;
        });
        onChangeCity(targetCity, getFilteredPlaceCards(initialPlaceCards, targetCity));

      }}>
      <a className={getActiveCity(cityName, selectedCity.name)} href="#">
        <span>{cityName}</span>
      </a>
    </li>
  );
};

const LocationList = ({cities, selectedCity, initialPlaceCards, onChangeCity}) => {

  return (
    <ul className="locations__list tabs__list">
      {cities.map(({id, name}) => <LocationItem
        key={id.toString()} cityName={name}
        cities = {cities}
        selectedCity={selectedCity}
        initialPlaceCards={initialPlaceCards}
        onChangeCity={onChangeCity}
      />)}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  selectedCity: state.selectedCity,
  initialPlaceCards: state.initialPlaceCards
});

const mapDispatchToProps = (dispatch) => ({
  onChangeCity(city, placeCards) {
    dispatch(ActionCreator.changeCity(city));
    dispatch(ActionCreator.setPlaceCards(placeCards));
  }
});

LocationItem.propTypes = LocationType;

LocationList.propTypes = LocationListType;

export {LocationList};
export default connect(mapStateToProps, mapDispatchToProps)(LocationList);
