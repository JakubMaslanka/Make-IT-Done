import styled from 'styled-components';

export const MonthIndicatorHeader = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin: 10px 20px;
color: #FFFFFF;
font-family: Lato;
line-height: 70px;
h2{
  font-size: 32px;
  font-style: normal;
  font-weight: 300;
  margin: 0px;
  text-align: center;
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
}`;
