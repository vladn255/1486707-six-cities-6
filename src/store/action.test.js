import {ActionType, ActionCreator} from "./action.js";

describe(`Action creators work correctly`, () => {
  const cityMock = {
    id: 1,
    name: `string`,
    location: [1, 2]
  };

  const placeCardMock = {
    bedrooms: 1,
    city: {
      location: {
        latitude: 1,
        longitude: 2,
        zoom: 3
      },
      name: `string`
    },
    description: `string`,
    goods: [`string`, `string`, `string`],
    host: {
      avatarUrl: `string`,
      id: 1,
      isPro: false,
      name: `string`
    },
    id: 2,
    images: [`string`, `string`, `string`],
    isPremium: false,
    isFavorite: false,
    location: {
      latitude: 4,
      longitude: 5,
      zoom: 6
    },
    maxAdults: 7,
    previewImage: `string`,
    price: 8,
    rating: 9,
    title: `string`,
    type: `string`
  };

  const placeCardsMock = [placeCardMock, placeCardMock];

  it(`Action creator for changing city returns correct city`, () => {

    const expectedAction = {
      type: ActionType.CHANGE_CITY,
      payload: cityMock,
    };

    expect(ActionCreator.changeCity(cityMock)).toEqual(expectedAction);
  });

  it(`Action creator for setting place cards returns correct place cards`, () => {

    const expectedAction = {
      type: ActionType.SET_PLACE_CARDS,
      payload: placeCardsMock,
    };

    expect(ActionCreator.setPlaceCards(placeCardsMock)).toEqual(expectedAction);
  });

  it(`Action creator for setting active place card returns correct place card`, () => {

    const expectedAction = {
      type: ActionType.SET_ACTIVE_CARD,
      payload: placeCardMock,
    };

    expect(ActionCreator.setActiveCard(placeCardMock)).toEqual(expectedAction);
  });

  it(`Action creator for loading place cards returns correct place cards`, () => {
    const expectedAction = {
      type: ActionType.LOAD_PLACE_CARDS,
      payload: placeCardsMock,
    };

    expect(ActionCreator.loadPlaceCards(placeCardsMock)).toEqual(expectedAction);
  });

  it(`Action creator for loading near place cards returns correct near place cards`, () => {

    const expectedAction = {
      type: ActionType.LOAD_PLACE_CARDS_NEARBY,
      payload: placeCardsMock,
    };

    expect(ActionCreator.loadPlaceCardsNearby(placeCardsMock)).toEqual(expectedAction);
  });

  it(`Action creator for checking authorization returns correct status`, () => {
    const statusMock = `string`;

    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: statusMock,
    };

    expect(ActionCreator.requireAuthorization(statusMock)).toEqual(expectedAction);
  });

  it(`Action creator for setting sorting item returns correct sorting item`, () => {
    const sortItemMock = `string`;

    const expectedAction = {
      type: ActionType.SET_SORT_ITEM,
      payload: sortItemMock,
    };

    expect(ActionCreator.setSortItem(sortItemMock)).toEqual(expectedAction);
  });

  it(`Action creator for setting current user returns correct user`, () => {
    const userMock = {
      avatarUrl: `string`,
      email: `string`,
      id: 1,
      isPro: false,
      name: `string`
    };

    const expectedAction = {
      type: ActionType.SET_CURRENT_USER,
      payload: userMock,
    };

    expect(ActionCreator.setCurrentUser(userMock)).toEqual(expectedAction);
  });

  it(`Action creator for loading reviews user returns correct reviews`, () => {
    const reviewsMock = {
      comment: `string`,
      date: `string`,
      id: 1,
      rating: 2,
      user: {
        avatarUrl: `string`,
        id: 3,
        isPro: false,
        name: `string`
      }
    };

    const expectedAction = {
      type: ActionType.LOAD_REVIEWS,
      payload: reviewsMock,
    };

    expect(ActionCreator.loadReviews(reviewsMock)).toEqual(expectedAction);
  });

  it(`Action creator for setting submit status returns correct submit status`, () => {
    const submitStatusMock = false;

    const expectedAction = {
      type: ActionType.SET_SUBMIT_STATUS_DISABLED,
      payload: submitStatusMock,
    };

    expect(ActionCreator.setSubmitStatusDisabled(submitStatusMock)).toEqual(expectedAction);
  });

  it(`Action creator for setting favorite place cards returns correct favorite place cards`, () => {

    const expectedAction = {
      type: ActionType.SET_FAVORITE_CARDS,
      payload: placeCardsMock,
    };

    expect(ActionCreator.setFavoriteCards(placeCardsMock)).toEqual(expectedAction);
  });

  it(`Action creator for setting city returns correct city`, () => {

    const expectedAction = {
      type: ActionType.SET_CITY,
      payload: cityMock,
    };

    expect(ActionCreator.setCity(cityMock)).toEqual(expectedAction);
  });

  it(`Action creator for changing favorite card returns correct place card`, () => {

    const expectedAction = {
      type: ActionType.CHANGE_FAVORITE_CARD,
      payload: placeCardMock,
    };

    expect(ActionCreator.changeFavoriteCard(placeCardMock)).toEqual(expectedAction);
  });

});

