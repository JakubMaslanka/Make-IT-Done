import styled from 'styled-components';

// Pages style
export const Header = styled.div`
    margin: 10px 20px;
    color: #FFFFFF;
    font-family: Lato;
    line-height: 70px;
    h4{
        font-size: 22px;
        font-weight: 350;
        margin: 0px;
    }
    p {
        font-size: 20px;
        font-weight: 300;
        line-height: 26px;
        opacity: 88%;
        margin-bottom: 0px;
    }
    h2{
        font-size: 32px;
        font-style: normal;
        font-weight: 300;
        margin: 0px;
    }
    h1{
        font-size: 40px;
        font-weight: 500;
        margin: 0px;
        transform: translateY(-30px);
    }
    h5{
        font-size: 22px;
        font-weight: 200;
        line-height: 20px;
        margin: 0px;
    }`;

export const UpperContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-direction: row;
    svg{
        fill: #128069;
        width: 30px;
        height: 30px;
        cursor: pointer;
        transition: fill .1s ease;
        &:hover{
            fill: #1BBC9B;
        }
    }`;

// Login and Register form style
export const StyledErrorMessage = styled.div`
    background: #BF3F55;
    border-radius: 5px;
    font-size: 1rem;
    color: white;
    padding: 20px;
    text-align: center;
    margin: 0px auto 15px auto;`;

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    font-family: Lato;
    display: flex;
    align-items: center;
    justify-content: center;`;

export const AuthenticationForm = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 5px;
    background-color: #2D3E50;
    padding: 15%;
    h1{
        font-size: 2.75rem;
        color: white;
        font-weight: 200;
        border-bottom: 1px solid white;
        padding-bottom: 15px;
        ${({ isError }) => !isError && 'margin-bottom: 40px;'}
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    a{
        text-decoration: none;
        color: white;
        margin-top: 20px;
        transition: all .2 ease;
        &:hover{
            color: #1BBC9B;
        }
    }
    @media screen and (min-width: 900px) {
        padding: 150px;
      }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: scre;
    gap: 30px;`;

export const Input = styled.input`
    width: 100%;
    border: none;
    border-bottom: 2px solid #1BBC9B;
    background: transparent;
    outline: none;
    font-size: 1rem;
    color: white;
    padding: 5px;`;

export const Button = styled.button`
    width: 100%;
    padding: 7.5px 0px;
    color: #FFF;
    background: #1BBC9B;
    border: none;
    border-radius: 5px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 1rem;
    font-weight: 300;
    text-transform: uppercase;
    transition: all .15s ease;
    &:hover{
        background: #14866e;
    }`;
