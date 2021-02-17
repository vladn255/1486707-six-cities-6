import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import {placeCardsType} from "../../types.js";
import {Routes} from "../../const.js";

import MainScreenComponent from "../main/main.jsx";
import FavoritesScreenComponent from "../favorites/favorites.jsx";
import LoginScreenComponent from "../login/login.jsx";
import OfferScreenComponent from "../offer/offer.jsx";
import NotFoundScreenComponent from "../not-found/not-found.jsx";

const App = ({placeCards}) => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Routes.MAIN}>
          <MainScreenComponent placeCards={placeCards} />
        </Route>

        <Route exact path={Routes.LOGIN}>
          <LoginScreenComponent />
        </Route>

        <Route exact path={Routes.FAVORITES}>
          <FavoritesScreenComponent placeCards={placeCards} />
        </Route>

        <Route exact path={Routes.OFFER}>
          <OfferScreenComponent placeCards={placeCards}/>
        </Route>

        <Route>
          <NotFoundScreenComponent />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  placeCards: placeCardsType,
};

export default App;
