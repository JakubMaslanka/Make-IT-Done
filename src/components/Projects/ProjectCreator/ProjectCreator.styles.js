import styled from 'styled-components';

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    align-items: center;
    gap: 35px;
    justify-content: center;
    padding: 30px;`;

export const Input = styled.input`
    background: transparent;
    outline: none;
    padding: 7px;
    border: none;
    border-bottom: 1px solid #1BBC9B;
    color: #DDDDDD;
    font-size: 1.2rem;
    width: 100%;
    ::placeholder {
        color: #BBBBBB;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    }`;

export const Textarea = styled.textarea`
    background: transparent;
    outline: none;
    padding: 7px;
    border: 1px solid #128069;
    color: #DDDDDD;
    font-size: 0.9rem;
    width: 100%;
    height: 50px;
    resize: none;
    border-radius: 4px;
    ::placeholder {
        color: #AAAAAA;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    }`;

export const ColorPickerContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    justify-content: space-evenly;
    background-color: #3F5873;
    padding: 7px;
    border-radius: 10px;
    flex-wrap: wrap;
    justify-content: space-around;`;

export const Circle = styled.div`
    background: transparent;
    cursor: pointer;
    transform: scale(0.9);
    ${({ hslColor }) => (hslColor
    && `border: 2px solid hsl(${hslColor}, 90%, 10%);`)}
    outline: none;
    ${({ hslColor }) => (hslColor
        && `background-color: hsl(${hslColor}, 75%, 42%);`)}
    width: 35px;
    height: 35px;
    border-radius: 50%;
    &:hover{
        transform: scale(1);
        transition: transform 100ms ease 0s;
    }`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-evenly;`;

export const Button = styled.button`
    ${({ selectedColor }) => (selectedColor
    ? `background-color: ${selectedColor};`
    : 'background-color: hsl(167, 75%, 42%);')}
    border: none;
    color: #FFFFFF;
    font-size: 1rem;
    padding: 10px 20px;
    cursor: pointer;
    ${({ danger }) => (danger && (
    `background-color: #BF3F55;
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 5px;`
  ))}`;
