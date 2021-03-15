import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {StarsList, ReviewLength, AuthorizationStatus} from "../../const.js";
import {postReview, fetchComments} from '../../store/api-actions.js';
import {reviewListType, placeCardType} from '../../types.js';

import ReviewList from "../reviews-list/reviews-list.jsx";

const ReviewStar = ({count, title, handler, submitStatus}) => {
  return (<>
    <input className="form__rating-input visually-hidden" name="rating" value={count} id={`${count}-stars`} type="radio" onChange={handler} disabled={submitStatus}/>
    <label htmlFor={`${count}-stars`} className="reviews__rating-label form__rating-label" title={title}>
      <svg className="form__star-image" width="37" height="33">
        <use xlinkHref="#icon-star"></use>
      </svg>
    </label>
  </>
  );
};

const ReviewForm = ({reviewList, submitStatus, activeCard, createReview, authorizationStatus}) => {

  if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
    return <> </>;
  }


  const [userReview, setReviewForm] = useState({
    comment: ``,
    rating: 0
  });

  const [submitFormDisabled, setSubmitFormDisabled] = useState(true);

  const isFormFilled = (rate, text) => {
    return rate !== 0 && (text.length >= ReviewLength.MIN && text.length < ReviewLength.MAX)
      ? setSubmitFormDisabled(false)
      : setSubmitFormDisabled(true);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    createReview(activeCard.id, userReview);
    evt.currentTarget.reset();
  };

  const handleRateChange = (evt) => {
    const {value} = evt.target;
    setReviewForm({...userReview, rating: parseInt(value, 10)});
    isFormFilled(userReview.rating, userReview.comment);
  };

  const handlecommentChange = (evt) => {
    const {value} = evt.target;
    setReviewForm({...userReview, comment: value});
    isFormFilled(userReview.rating, userReview.comment);
  };

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewList.length}</span></h2>

      <ReviewList
        reviewList={reviewList}
      />

      <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit} disabled>
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          {StarsList.map((star) => <ReviewStar key={star.count.toString()} count={star.count} title={star.title} handler={handleRateChange} submitStatus={submitStatus}/>)}
        </div>
        <textarea
          className="reviews__textarea form__textarea"
          id="review" name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
          onChange={handlecommentChange}
          disabled={submitStatus}
        ></textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled={submitFormDisabled}>Submit</button>
        </div>
      </form>
    </section>
  );
};

ReviewStar.propTypes = {
  count: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
  submitStatus: PropTypes.bool.isRequired
};

ReviewForm.propTypes = {
  reviewList: reviewListType,
  submitStatus: PropTypes.bool.isRequired,
  activeCard: placeCardType,
  createReview: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired
};

const mapStateToProps = ({submitStatus, reviews, authorizationStatus}) => ({
  submitStatus,
  reviewList: reviews,
  authorizationStatus
});

const mapDispatchToProps = (dispatch) => ({
  createReview(cardId, review) {
    dispatch(postReview(cardId, review))
    .then(() => dispatch(fetchComments())
    );
  }
});

export {ReviewForm};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
