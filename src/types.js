import PropTypes from 'prop-types';

const {shape, arrayOf} = PropTypes;

const placeCardType = shape({
  bedrooms: PropTypes.number.isRequired,

  city: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired
    }).isRequired,
    name: PropTypes.string.isRequired
  }),

  description: PropTypes.string.isRequired,
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,

  host: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isPro: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
  }),

  id: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(PropTypes.string),
  isPremium: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool.isRequired,

  location: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired
  }),

  maxAdults: PropTypes.number.isRequired,
  previewImage: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  priceText: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired

});

const placeCardsType = arrayOf(placeCardType).isRequired;

export {
  placeCardType,
  placeCardsType
};