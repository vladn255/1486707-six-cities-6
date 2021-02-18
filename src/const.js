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

export {
  RoutePath,
  MAX_RATING_PERCENT,
  StarsList
};
