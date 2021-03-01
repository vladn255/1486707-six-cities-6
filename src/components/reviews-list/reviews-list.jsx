import React from 'react';

import {reviewListType} from "../../types.js";

import ReviewItem from "../review-item/review-item.jsx";

const ReviewList = ({reviewList}) => {
  return (
    <ul className="reviews__list">
      {reviewList.map((review) => <ReviewItem key={review.id.toString()} reviewItem={review} />) }
    </ul>
  );
};

ReviewList.propTypes = {
  reviewList: reviewListType,
};

export default ReviewList;
