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
    location: [48.85661, 2.351499]
  },
  {
    id: 2,
    name: `Cologne`,
    location: [50.938361, 6.959974]
  },
  {
    id: 3,
    name: `Brussels`,
    location: [50.846557, 4.351697]
  },
  {
    id: 4,
    name: `Amsterdam`,
    location: [52.37454, 4.897976]
  },
  {
    id: 5,
    name: `Hamburg`,
    location: [53.550341, 10.000654]
  },
  {
    id: 6,
    name: `Dusseldorf`,
    location: [51.225402, 6.776314]
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
