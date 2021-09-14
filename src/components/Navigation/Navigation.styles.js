import styled from 'styled-components';

export const NavContainer = styled.div`
    background-color: #2D3E50;
    font-size: 1.2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 7%;`;

export const NavIcon = styled.div`
    svg{
      ${({ active }) => (active ? `
        fill: #1BBC9B;
        width: 40px;
        height: 40px;` : `
        fill: #128069;
      width: 28px;
      height: 28px;`)}
    }`;
