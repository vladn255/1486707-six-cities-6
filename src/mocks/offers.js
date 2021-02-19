const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const placeCards = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.37,
        longitude: 4.895,
        zoom: 10
      },
      name: `Amsterdam`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [
      `Heating`,
      `Kitchen`,
      `Cable TV`,
      `Washing machine`,
      `Coffee machine`,
      `Dishwasher`
    ],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: getRandomInteger(1, 1000),
      isPro: true,
      name: `Angelina`
    },
    id: getRandomInteger(1, 1000),
    images: [
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`
    ],
    isPremium: true,
    isFavorite: false,
    location: {
      latitude: 52.37,
      longitude: 4.895,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: `img/apartment-01.jpg`,
    price: 120,
    priceText: `night`,
    rating: 4.8,
    title: `Beautiful &amp; luxurious apartment at great location`,
    type: `Apartment`
  },

  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.37,
        longitude: 4.895,
        zoom: 10
      },
      name: `Amsterdam`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [
      `Heating`,
      `Kitchen`,
      `Cable TV`,
      `Washing machine`,
      `Coffee machine`,
      `Dishwasher`
    ],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: getRandomInteger(1, 1000),
      isPro: true,
      name: `Angelina`
    },
    id: getRandomInteger(1, 1000),
    images: [
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`
    ],
    isPremium: false,
    isFavorite: true,
    location: {
      latitude: 52.37,
      longitude: 4.895,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: `img/room.jpg`,
    price: 80,
    priceText: `night`,
    rating: 4.8,
    title: `Wood and stone place`,
    type: `Private room`
  },

  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.37,
        longitude: 4.895,
        zoom: 10
      },
      name: `Amsterdam`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [
      `Heating`,
      `Kitchen`,
      `Cable TV`,
      `Washing machine`,
      `Coffee machine`,
      `Dishwasher`
    ],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: getRandomInteger(1, 1000),
      isPro: true,
      name: `Angelina`
    },
    id: getRandomInteger(1, 1000),
    images: [
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`
    ],
    isPremium: false,
    isFavorite: false,
    location: {
      latitude: 52.37,
      longitude: 4.895,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: `img/apartment-02.jpg`,
    price: 132,
    priceText: `night`,
    rating: 4.8,
    title: `Canal View Prinsengracht`,
    type: `Apartment`
  },

  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.37,
        longitude: 4.895,
        zoom: 10
      },
      name: `Amsterdam`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [
      `Heating`,
      `Kitchen`,
      `Cable TV`,
      `Washing machine`,
      `Coffee machine`,
      `Dishwasher`
    ],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: getRandomInteger(1, 1000),
      isPro: true,
      name: `Angelina`
    },
    id: getRandomInteger(1, 1000),
    images: [
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`
    ],
    isPremium: true,
    isFavorite: false,
    location: {
      latitude: 52.37,
      longitude: 4.895,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: `img/apartment-03.jpg`,
    price: 180,
    priceText: `night`,
    rating: 4.8,
    title: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`
  },

  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.37,
        longitude: 4.895,
        zoom: 10
      },
      name: `Amsterdam`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [
      `Heating`,
      `Kitchen`,
      `Cable TV`,
      `Washing machine`,
      `Coffee machine`,
      `Dishwasher`
    ],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: getRandomInteger(1, 1000),
      isPro: true,
      name: `Angelina`
    },
    id: getRandomInteger(1, 1000),
    images: [
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`
    ],
    isPremium: false,
    isFavorite: true,
    location: {
      latitude: 52.37,
      longitude: 4.895,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: `img/room.jpg`,
    price: 80,
    priceText: `night`,
    rating: 4.8,
    title: `Wood and stone place`,
    type: `Private room`
  }
];

export {
  placeCards
};
