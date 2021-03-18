import React from 'react';
import {connect} from 'react-redux';

import {placeCardsType, cityType} from "../../types.js";

import PlacesList from "../places-list/places-list.jsx";
import LocationList from "../location-list/location-list.jsx";
import Map from "../map/map.jsx";
import SortMenu from "../sort-menu-items/sort-menu-items.jsx";
import HeaderUserInfo from "../header-user-info/header-user-info.jsx";


const Main = ({placeCards, selectedCity}) => {

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <HeaderUserInfo />
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">

            <LocationList />

          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
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
          </div>
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  placeCards: placeCardsType,
  selectedCity: cityType,
};

const mapStateToProps = ({placeCards, selectedCity}) => ({
  placeCards,
  selectedCity
});

export {Main};
export default connect(mapStateToProps)(Main);
