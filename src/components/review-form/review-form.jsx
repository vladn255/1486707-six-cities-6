import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {StarsList} from "../../const.js";

import ReviewList from "../reviews-list/reviews-list.jsx";
import {reviewListType} from '../../types.js';

const ReviewStar = ({count, title, handler}) => {
  return (<>
    <input className="form__rating-input visually-hidden" name="rating" value={count} id={`${count}-stars`} type="radio" onChange={handler}/>
    <label htmlFor={`${count}-stars`} className="reviews__rating-label form__rating-label" title={title}>
      <svg className="form__star-image" width="37" height="33">
        <use xlinkHref="#icon-star"></use>
      </svg>
    </label>
  </>
  );
};

const ReviewForm = ({reviewList}) => {

  const [userReview, setReviewForm] = useState({
    reviewText: ``,
    reviewRate: ``
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  const handleRateChange = (evt) => {
    const {value} = evt.target;
    setReviewForm({...userReview, reviewRate: value});
  };

  const handleReviewTextChange = (evt) => {
    const {value} = evt.target;
    setReviewForm({...userReview, reviewText: value});
  };

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewList.length}</span></h2>

      <ReviewList
        reviewList={reviewList}
      />

      <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">

          {StarsList.map((star) => <ReviewStar key={star.count.toString()} count={star.count} title={star.title} handler={handleRateChange}/>)}

        </div>
        <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={handleReviewTextChange}></textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
        </div>
      </form>
    </section>
  );
};

ReviewStar.propTypes = {
  count: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired
};

ReviewForm.propTypes = {
  reviewList: reviewListType
};

export default ReviewForm;

