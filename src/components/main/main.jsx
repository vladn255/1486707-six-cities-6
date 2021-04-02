import React from 'react';
import {connect} from 'react-redux';

import {placeCardsType, cityType} from "../../types.js";
import {getSelectedCity, getPlaceCards} from "../../store/cards-data/selectors.js";

import LocationList from "../location-list/location-list.jsx";
import HeaderUserInfo from "../header-user-info/header-user-info.jsx";
import MainEmpty from '../main-empty/main-empty.jsx';
import MainPlacesContainer from "../main-places-container/main-places-container.jsx";


const Main = ({placeCards}) => {

  if (placeCards.length === 0) {
    return <MainEmpty />;
  }

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

            <MainPlacesContainer />

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

const mapStateToProps = (state) => ({
  placeCards: getPlaceCards(state),
  selectedCity: getSelectedCity(state)
});

export {Main};
export default connect(mapStateToProps)(Main);
