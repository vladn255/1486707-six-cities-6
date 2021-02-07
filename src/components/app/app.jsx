import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import MainScreenComponent from "../main/main.jsx";
import FavoritesScreenComponent from "../favorites/favorites.jsx";
import LoginScreenComponent from "../login/login.jsx";
import OfferScreenComponent from "../offer/offer.jsx";
import NotFoundScreenComponent from "../not-found/not-found.jsx";

const App = ({placeCards}) => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreenComponent placeCards={placeCards} />
        </Route>

        <Route exact path="/login">
          <LoginScreenComponent />
        </Route>

        <Route exact path="/favorites">
          <FavoritesScreenComponent />
        </Route>

        <Route exact path="/offer/:id?">
          <OfferScreenComponent />
        </Route>

        <Route>
          <NotFoundScreenComponent />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  placeCards: PropTypes.arrayOf(PropTypes.object)
};

export default App;
