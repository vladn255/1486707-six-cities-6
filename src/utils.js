import {MAX_RATING_PERCENT} from "./const.js";

const getRatingWidth = (rating) => Math.floor(rating) / MAX_RATING_PERCENT;

const sortByPriceUp = (cardA, cardB) => cardB.price - cardA.price;

const sortByPriceDown = (cardA, cardB) => cardA.price - cardB.price;

const sortByRate = (cardA, cardB) => cardB.rating - cardA.rating;

const adaptPlaceCardToClient = (card) => Object.assign(
    {},
    card,
    {
      host: {
        avatarUrl: card.host.avatar_url,
        id: card.host.id,
        isPro: card.host.is_pro,
        name: card.host.name
      },
      maxAdults: card.max_adults,
      previewImage: card.preview_image,
      isPremium: card.is_premium,
      isFavorite: card.is_favorite
    });

const getFilteredPlaceCards = (initialCards, city) => initialCards.slice().filter((placeCard) => placeCard.city.name === city.name);

const adaptLoginDataToClient = (data) => Object.assign(
    {},
    data,
    {
      avatarUrl: data.avatar_url,
      isPro: data.is_pro
    }
);

const adaptReviewToClient = (review) => Object.assign(
    {},
    review,
    {
      user: {
        ...review.user,
        avatarUrl: review.user.avatar_url,
        isPro: review.user.is_pro
      }
    }
);

export {
  getRatingWidth,
  getFilteredPlaceCards,
  sortByPriceUp,
  sortByPriceDown,
  sortByRate,
  adaptPlaceCardToClient,
  adaptLoginDataToClient,
  adaptReviewToClient
};
