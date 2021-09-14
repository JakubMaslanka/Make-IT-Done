import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    padding: 0px 1px;
    flex-direction: column;
    flex-wrap: no-wrap;
    align-content: center;
    align-items: center;
    justify-content: flex-start;
    gap: 25px;
    font-family: Roboto;
    margin: 10px 20px;
    height: 82vh;
    overflow-y: scroll;`;

export const ProjectCreatorButton = styled.div`
    width: 100%;
    text-align: center;
    border-radius: 10px;
    cursor: pointer;
    border: 1px solid #128069;
    background-color: #2d3e50b0;
    color: #1BBC9B;
    font-size: 1.25em;
    font-weight: 500;
    padding: 30px 0px;
    transition: all .25s ease;
    &:hover{
        border: 1px solid #1BBC9B;
        background-color: #3F5873;
        color: #1bbc9bc9;
    }`;
