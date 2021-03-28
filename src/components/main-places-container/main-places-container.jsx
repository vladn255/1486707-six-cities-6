import React from 'react';
import {connect} from 'react-redux';

import {placeCardsType, cityType} from "../../types.js";
import {getSelectedCity, getSortedPlaceCards} from "../../store/cards-data/selectors.js";

import PlacesList from "../places-list/places-list.jsx";
import Map from "../map/map.jsx";
import SortMenu from "../sort-menu-items/sort-menu-items.jsx";

const MainPlacesContainer = ({placeCards, selectedCity}) => {

  return (
    <>
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{placeCards.length} places to stay in {selectedCity.name}</b>

        <SortMenu />

        <div className="cities__places-list places__list tabs__content">

          <PlacesList placeCards = {placeCards} isMapChanging={true}/>

        </div>
      </section>
      <div className="cities__right-section">
        <section className="cities__map map">

          <Map
            placeCards = {placeCards.map((card) => card)}
            city={selectedCity}/>

        </section>
      </div>
    </>
  );
};

MainPlacesContainer.propTypes = {
  placeCards: placeCardsType,
  selectedCity: cityType,
};

const mapStateToProps = (state) => ({
  placeCards: getSortedPlaceCards(state),
  selectedCity: getSelectedCity(state)
});

export {MainPlacesContainer};
export default connect(mapStateToProps)(MainPlacesContainer);
