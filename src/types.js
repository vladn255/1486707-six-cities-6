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
  }).isRequired,

  id: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(PropTypes.string),
  isPremium: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool.isRequired,

  location: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired
  }).isRequired,

  maxAdults: PropTypes.number.isRequired,
  previewImage: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  priceText: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}).isRequired;

const placeCardsType = arrayOf(placeCardType).isRequired;

const reviewItemType = shape({
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  user: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isPro: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
}).isRequired;

const reviewListType = arrayOf(reviewItemType).isRequired;

const cityType = shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
}).isRequired;

const citiesType = arrayOf(cityType).isRequired;

const LocationType = {
  selectedCity: cityType.isRequired,
  cities: citiesType.isRequired,
  initialPlaceCards: placeCardsType.isRequired,
  onChangeCity: PropTypes.func.isRequired,
  cityName: PropTypes.string.isRequired
}.isRequired;

const LocationListType = {
  selectedCity: cityType.isRequired,
  cities: citiesType.isRequired,
  initialPlaceCards: placeCardsType.isRequired,
  onChangeCity: PropTypes.func.isRequired
}.isRequired;

export {
  placeCardType,
  placeCardsType,
  reviewItemType,
  reviewListType,
  cityType,
  citiesType,
  LocationType,
  LocationListType
};
