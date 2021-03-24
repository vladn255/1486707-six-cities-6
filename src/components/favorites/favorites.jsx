import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {placeCardsType} from "../../types.js";
import {RoutePath} from "../../const.js";
import {fetchFavoriteCards} from '../../store/api-actions.js';

import HeaderUserInfo from "../header-user-info/header-user-info.jsx";
import FavoritesEmpty from "../favorites-empty/favorites-empty.jsx";
import FavoriteList from "../favorite-list/favorite-list.jsx";
import {getFavoriteCards} from '../../store/user-data/selectors.js';

const Favorites = ({favoriteCards, loadFavoriteCards}) => {
  loadFavoriteCards();

  if (favoriteCards.length === 0) {
    return <FavoritesEmpty />;
  }

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to={RoutePath.MAIN} className="header__logo-link" href="#">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
            <nav className="header__nav">
              <HeaderUserInfo />
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>

            <FavoriteList favoritePlaceCards={favoriteCards} />

          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
};

Favorites.propTypes = {
  favoriteCards: placeCardsType,
  loadFavoriteCards: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  favoriteCards: getFavoriteCards(state)
});

const mapDispatchToProps = (dispatch) => ({
  loadFavoriteCards() {
    dispatch(fetchFavoriteCards());
  }
});


export {Favorites};
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
