import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {StarsList, ReviewLength, AuthorizationStatus} from "../../const.js";
import {ActionCreator} from "../../store/action.js";
import {postReview} from '../../store/api-actions.js';
import {reviewListType} from '../../types.js';

import ReviewList from "../reviews-list/reviews-list.jsx";
import ReviewStar from "../review-star/review-star.jsx";

const ReviewForm = ({reviewList, submitStatus, activeCardId, createReview, authorizationStatus, setSubmitStatus}) => {
  const [userReview, setReviewForm] = useState({
    comment: ``,
    rating: 0
  });

  const [submitErrorStatus, setSubmitErrorStatus] = useState(false);

  const [submitFormDisabled, setSubmitFormDisabled] = useState(true);

  const checkFormFilled = (rate, text) => {
    return setSubmitFormDisabled(!(rate !== 0
        && (text.length >= ReviewLength.MIN && text.length < ReviewLength.MAX)));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    setSubmitStatus(true);

    createReview(activeCardId, userReview)
    .then(() => setSubmitErrorStatus(false))
    .catch(() => setSubmitErrorStatus(true));

    evt.currentTarget.reset();

    setReviewForm({comment: ``, rating: 0});
    setSubmitFormDisabled(true);
  };

  const handleRateChange = (evt) => {
    const {value} = evt.target;
    setReviewForm({...userReview, rating: parseInt(value, 10)});
    checkFormFilled(userReview.rating, userReview.comment);
  };

  const handleCommentChange = (evt) => {
    const {value} = evt.target;
    setReviewForm({...userReview, comment: value});
    checkFormFilled(userReview.rating, userReview.comment);
  };

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewList.length}</span></h2>

      <ReviewList
        reviewList={reviewList}
      />

      {authorizationStatus === AuthorizationStatus.NO_AUTH
        ? <> </>
        : <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
          <label className="reviews__label form__label" htmlFor="review">Your review</label>
          <div className="reviews__rating-form form__rating">
            {StarsList.map((star) => <ReviewStar key={star.count.toString()} count={star.count} title={star.title} changeRateHandler={handleRateChange} isDisabled={submitStatus}/>)}
          </div>
          <textarea
            className="reviews__textarea form__textarea"
            id="review" name="review"
            placeholder={submitErrorStatus === true
              ? `Submitting review failed`
              : `Tell how was your stay, what you like and what can be improved`
            }
            onChange={handleCommentChange}
            disabled={submitStatus}
          ></textarea>
          <div className="reviews__button-wrapper">
            <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
            </p>
            <button className="reviews__submit form__submit button" type="submit" disabled={submitFormDisabled}>Submit</button>
          </div>
        </form>}
    </section>
  );
};


ReviewForm.propTypes = {
  reviewList: reviewListType,
  submitStatus: PropTypes.bool.isRequired,
  activeCardId: PropTypes.number.isRequired,
  createReview: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  setSubmitStatus: PropTypes.func.isRequired
};

const mapStateToProps = ({submitStatus, reviews, authorizationStatus}) => ({
  submitStatus,
  reviewList: reviews,
  authorizationStatus
});

const mapDispatchToProps = (dispatch) => ({
  setSubmitStatus(bool) {
    dispatch(ActionCreator.setSubmitStatus(bool));
  },
  createReview(cardId, review) {
    return dispatch(postReview(cardId, review));
  }
});

export {ReviewForm};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
