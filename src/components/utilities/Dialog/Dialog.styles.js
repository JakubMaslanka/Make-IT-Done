import PropTypes from 'prop-types';
import styled from 'styled-components';

export const ConfirmOverlay = styled.div`
      z-index: 100;
      position: fixed;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0,0,0, .25);`;

export const DialogContainer = styled.div`
      background: #FFF;
      padding: 20px;
      font-family: Roboto;
      box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.25);
      border-radius: 10px;`;

export const ButtonsContainer = styled.div`
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      margin-top: 40px;`;

export const Button = styled.button`
      font-weight: 700;
      border: none;
      padding: 8px 35px;
      ${({ submit }) => (submit
    ? 'background-color: #BF3F55; color: #FFF; border: 1px solid #BF3F55;'
    : 'background-color: #DDDDDD; border: 1px solid #DDDDDD;')}
      &:hover{
          border: 1px solid #000000;
      }`;

Button.propTypes = {
  submit: PropTypes.bool,
};

Button.defaultProps = {
  submit: false,
};
