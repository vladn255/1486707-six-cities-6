import React from 'react';
import PropTypes from 'prop-types';


const ReviewStar = ({count, title, onChangeRate, isDisabled}) => {
  return (<>
    <input className="form__rating-input visually-hidden" name="rating" value={count} id={`${count}-stars`} type="radio" onChange={onChangeRate} disabled={isDisabled}/>
    <label htmlFor={`${count}-stars`} className="reviews__rating-label form__rating-label" title={title}>
      <svg className="form__star-image" width="37" height="33">
        <use xlinkHref="#icon-star"></use>
      </svg>
    </label>
  </>
  );
};

ReviewStar.propTypes = {
  count: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  onChangeRate: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired
};

export default ReviewStar;
