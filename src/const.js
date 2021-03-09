const RoutePath = {
  MAIN: `/`,
  LOGIN: `/login`,
  FAVORITES: `/favorites`,
  OFFER: `/offer/:id?`
};

const MAX_RATING_PERCENT = 5 / 100;

const StarsList = [
  {
    count: 1,
    title: `terribly`
  },
  {
    count: 2,
    title: `badly`
  },
  {
    count: 3,
    title: `not bad`
  },
  {
    count: 4,
    title: `good`
  },
  {
    count: 5,
    title: `perfect`
  },
];

const CityList = [
  {
    id: 1,
    name: `Paris`,
    location: [52.35333, 4.8]
  },
  {
    id: 2,
    name: `Cologne`,
    location: [52.36333, 4.7]
  },
  {
    id: 3,
    name: `Brussels`,
    location: [52.34333, 4.6]
  },
  {
    id: 4,
    name: `Amsterdam`,
    location: [52.38333, 4.9]
  },
  {
    id: 5,
    name: `Hamburg`,
    location: [52.39333, 4.5]
  },
  {
    id: 6,
    name: `Dusseldorf`,
    location: [52.40333, 4.4]
  }
];

const SortItems = {
  POPULAR: `Popular`,
  PRICE_LOW_TO_HIGH: `Price: low to high`,
  PRICE_HIGH_TO_LOW: `Price: high to low`,
  TOP_RATED_FIRST: `Top rated first`
};

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`
};

export {
  RoutePath,
  MAX_RATING_PERCENT,
  StarsList,
  CityList,
  SortItems,
  AuthorizationStatus
};
