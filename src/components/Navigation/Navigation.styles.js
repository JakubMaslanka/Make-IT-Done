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
    height: 7%;
    @media screen and (min-width: 900px) {
        top: 0;
        left: 0;
        width: 80px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }`;

export const LinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 75px;
    gap: 75px;
`;

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

export const LogoutContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    padding-bottom: 20px;
`;
