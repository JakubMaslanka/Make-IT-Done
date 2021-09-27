import styled from 'styled-components';

export const SettingsContainer = styled.div`
    text-align: center;
    margin: 16px;
    margin-bottm: 0px;
    form{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    }
    button {
    color:#efefef;
    font-size: 14px;
    padding: 8px 24px;
    border: none;
    border-radius: 42px;
    background: #128069;
    min-width: 80px;
    cursor: pointer;
    }`;

export const InputsContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;`;

export const Input = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    p{
    font-weight: 500;
    letter-spacing: 0.1em;
    height: 40px;
    text-align: center;
    color: #1BBC9B;
    margin: 0px;
    }
    input{
    height: 30px;
    width: 30px;
    padding: 24px;
    text-align: center;
    font-size: 18px;
    border: none;
    border-radius: 8px;
    background-color: #3F5873;
    color: white;
    outline: none;
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    }
    svg{
    width: 32px;
    height: 32px;
    fill: #ffffff;
    cursor: pointer;
    }`;
