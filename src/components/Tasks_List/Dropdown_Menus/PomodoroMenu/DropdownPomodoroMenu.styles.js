import styled from 'styled-components';

export const CustomViewContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
    user-select: none;
    svg{
        width: 55px;
        height: 55px;
    }
    p{
        font-size: 18px;
        font-weight: 500;
        margin: 5px auto;
    }`;

export const ControlsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-top: 10px;`;

export const Button = styled.button`
    padding: 10px;
    width: 106px;
    cursor: pointer;
    border: none;
    font-weight: 700;
    background-color: #EEEEEE;
    color: #444444;
    &:hover{
        transition: all 0.2s ease;
        background-color: #DDDDDD;
        color: #000000;
    }
    ${({ saveButtonType }) => (saveButtonType && (
    `background-color: #128069;
    color: #DDDDDD;
    &:hover{
        transition: all 0.2s ease;
        background-color: #1BBC9B;
        color: #FFFFFF;
    }`
  )
  )}`;

export const DropdownMenuContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    ${({ editorStyle }) => (editorStyle && (
    `display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-content: center;
        align-items: center;
        justify-content: flex-start;
        background: rgba(63, 88, 115, 1);
        padding: 0px 15px;
        border-radius: 10px;
        color: white;
        margin-bottom: 25px;
        cursor: pointer;
        &:hover{
        transition: background 0.2s ease;
        background: rgba(63, 88, 115, .6);
        }
        svg{
        width: 24px;
        height: 24px;
        margin-right: 10px;
        &:hover{
            transition: all 0.2s ease;
            fill: #1BBC9B;
        }
        }`)
  )}`;

export const LabelContainer = styled.div`
    display: flex;
    flex-direction: row;
    ${({ editorStyle }) => (editorStyle ? 'justify-content: flex-start;' : 'justify-content: center;')}
    align-items: center; 
    width: 100%;
    color: #DDDDDD;
    span{
    ${({ editorStyle }) => (editorStyle && 'padding: 15px 5px;')}
    }`;

export const MenuContainer = styled.div`
    position: absolute;
    ${({ position, heightIncrease }) => (position
    ? (`top: ${position.fromTop}px; 
        right: ${position.fromRight - 75}px;`)
    : (`top: ${heightIncrease}px;`))}
    width: 210px;
    transform: translateX(-35%);
    background-color: white;
    border-radius: 5%;
    overflow: hidden;
    color: black;
    hr {
        margin: 2px 0px;
        opacity: 60%;
    }`;

export const MenuItem = styled.li`
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: background 0.5;
    padding: .8rem;
    cursor: pointer;
    p:nth-child(2){
    opacity: 45%;
    }
    ${({ removeItem }) => (removeItem ? `
    color: #F00000;
    .icon {
    padding: 0px;
    fill: #F00000;
    width: 25px;
    height: 25px;
    &:hover{
    fill: #F00000;
    }
    ` : null)}
    &:hover{
    background: #EFEFEF;
    }`;
