import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from "redux-thunk";

import App from './components/app/app';

import rootReducer from './store/root-reducer.js';
import {ActionCreator} from './store/action.js';
import {createAPI} from './services/api.js';
import {AuthorizationStatus} from './const';
import {checkAuth, fetchPlaceCards} from './store/api-actions';

const api = createAPI(
    () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)),
    () => store.dispatch(ActionCreator.setServerErrorStatus(true))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(fetchPlaceCards());
store.dispatch(checkAuth())
  .finally(() => {
    ReactDOM.render(
        <Provider store={store}>
          <App
          />
        </Provider>,
        document.querySelector(`#root`)
    );
  });


