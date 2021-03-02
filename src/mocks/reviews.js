const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const reviews = [
  {
    comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    date: `2019-05-08T14:13:56.569Z`,
    id: 1,
    rating: 4,
    user: {
      avatarUrl: `img/avatar-max.jpg`,
      id: getRandomInteger(0, 100),
      isPro: false,
      name: `Max`
    }
  },

  {
    comment: `A quiet cozy and picturesque`,
    date: `2018-07-05T14:13:56.569Z`,
    id: 2,
    rating: 5,
    user: {
      avatarUrl: `img/avatar-max.jpg`,
      id: getRandomInteger(0, 100),
      isPro: false,
      name: `Min`
    }
  }
];

export {
  reviews
};
