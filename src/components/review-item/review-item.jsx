import React from 'react';

import {reviewItemType} from "../../types.js";
import {getRatingWidth} from "../../utils.js";

const ReviewItem = ({reviewItem}) => {
  const {comment, date, rating, user} = reviewItem;
  const {avatarUrl, name, isPro} = user;
  const newDate = new Date(date);
  const dateParsedToText = newDate.toLocaleString(`en-us`, {month: `long`, year: `numeric`});
  const dateParsedToDataText = newDate.toISOString().slice(0, 10);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className={`reviews__avatar user__avatar ${isPro
            ? `property__avatar-wrapper--pro`
            : ``}
            `}
          src={avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={
              {width: `${getRatingWidth(rating)}%`}
            }></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={dateParsedToDataText}>{dateParsedToText}</time>
      </div>
    </li>
  );
};

ReviewItem.propTypes = {
  reviewItem: reviewItemType
};

export default ReviewItem;
