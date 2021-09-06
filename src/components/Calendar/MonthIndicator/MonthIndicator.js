import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as ArrowLeft } from '../../utilities/assets/arrow_left_icon.svg';
import { ReactComponent as ArrowRight } from '../../utilities/assets/arrow_right_icon.svg';

import { MonthIndicatorHeader } from './MonthIndicator.styles';

export function MonthIndicator({ onNext, onBack, dateDisplay }) {
  return (
    <MonthIndicatorHeader>
      <ArrowLeft onClick={onBack} />
      <h2>{dateDisplay}</h2>
      <ArrowRight onClick={onNext} />
    </MonthIndicatorHeader>
  );
}

MonthIndicator.propTypes = {
  onNext: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
  dateDisplay: PropTypes.string.isRequired,
};
