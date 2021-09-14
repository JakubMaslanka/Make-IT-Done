import styled from 'styled-components';

export const Header = styled.div`
    margin: 10px 20px;
    color: #FFFFFF;
    font-family: Roboto;
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
        font-weight: 250;
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

export const StyledErrorMessage = styled.div`
    background: #BF3F55;
    border-radius: 5px;
    font-size: 1rem;
    color: white;
    padding: 20px;
    text-align: center;
    margin: 0px auto 15px auto;`;

export const Container = styled.div`
    transform: translate(50%, 50%);
    width: 50vw;
    height: 50vh;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #2D3E50;
    font-family: Lato;
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
    }`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30vw; 
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

export const LandingContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #2D3E50;
    font-family: Lato;
    h1{
    font-size: 3.75rem;
    color: white;
    font-weight: 200;
    border-bottom: 1px solid white;
    padding-bottom: 30px;
    margin-bottom: 10px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }`;

export const LandingListItem = styled.div`
    width: 39vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    font-weight: 300;
    font-size: 1.25rem;
    line-height: 2rem;
    display: flex;
    align-items: center;
    text-transform: uppercase;`;

export const LandingButtonsContainer = styled.div`
    width: 39vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 50px;
    cursor: pointer;`;

export const LandingButton = styled.button`
    padding: 12px 20px;
    color: #1BBC9B;
    background: transparent;
    border: 5px solid #1BBC9B;
    border-radius: 5px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 1.1rem;
    font-weight: 100;
    text-transform: uppercase;
    transition: all .15s ease;
    &:hover{
        color: #2D3E50;
        background: #1BBC9B;
    }`;

export const LandingLink = styled.a`
    text-decoration: none;
    padding: 12px 20px;
    color: #2D3E50;
    background: #AEAEAE;
    border: 5px solid #AEAEAE;
    border-radius: 5px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 1.1rem;
    font-weight: 300;
    text-transform: uppercase;
    transition: all .15s ease;
    &:hover{
        color: #AEAEAE;
        background: #2D3E50;
    }`;
