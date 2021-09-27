import styled from 'styled-components';

export const PositionContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  margin: 10px auto;`;

export const Container = styled.div`
  background-color: #ffffffdd;
  padding: 25px 20px;
  border-radius: 20px;
  margin: 0px 25px;
  svg{
    ${({ biggerSvg }) => (biggerSvg ? `
      width: 171px;
      heigth: 210px;` : `
        width: 90px;
        heigth: 90px;
      `)}
    @media screen and (min-height: 800px) {
      width: 171px;
      heigth: 210px;
    }
  }
  `;
