import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from "redux-thunk";

import App from './components/app/app';

import {reviews} from "./mocks/reviews.js";

import {reducer} from './store/reducer.js';
import {ActionCreator} from './store/action.js';
import {createAPI} from './services/api.js';
import {AuthorizationStatus} from './const';
import {checkAuth, fetchPlaceCards} from './store/api-actions';

const api = createAPI(
    () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)),
);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(checkAuth());
store.dispatch(fetchPlaceCards());

ReactDOM.render(
    <Provider store={store}>
      <App
        reviewList={reviews}
      />
    </Provider>,
    document.querySelector(`#root`)
);

