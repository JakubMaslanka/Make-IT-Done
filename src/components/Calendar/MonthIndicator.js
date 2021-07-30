/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ArrowLeft } from '../utilities/assets/arrow_left_icon.svg';
import { ReactComponent as ArrowRight } from '../utilities/assets/arrow_right_icon.svg';

export default function MonthIndicator({ onNext, onBack, dateDisplay }) {
  return (
    <MonthIndicatorHeader>
      <ArrowLeft onClick={onBack} />
      <h2 className="monthDisplay">{dateDisplay}</h2>
      <ArrowRight onClick={onNext} />
    </MonthIndicatorHeader>
  );
}

const MonthIndicatorHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 10px 20px;
    color: #FFFFFF;
    font-family: Roboto;
    line-height: 70px;
    h2{
      font-size: 32px;
      font-style: normal;
      font-weight: 300;
      margin: 0px;
    }
    svg{
      fill: #FFFFFF;
      width: 32px;
      height: 32px;
      margin: 0 10px;
      cursor: pointer;
      &:hover{
        transition: all 0.2s ease;
        fill: #1BBC9B;
      }
    }
`;
