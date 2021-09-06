import styled from 'styled-components';

export const Hr = styled.hr`
    opacity: 80%;
    width: 95%;`;

export const DayOfWeek = styled.div`
    width: 100%;
    margin-bottom: 20px;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-align: center;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    color: #1BBC9B;
    @media (max-width: 600px) {
    font-size: 8px;
    }`;

export const DaysGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(7, minmax(120px, 1fr));
    grid-auto-rows: 100px;
    justify-items: center;
    align-items: center;
    overflow: auto;
    @media (max-width: 900px) {
    grid-template-columns: repeat(7, minmax(50px, 1fr));
    }`;

export const CalendarContainer = styled.div`
    width: 95%;
    margin: auto;`;

export const DayContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px;
    text-align: right;
    cursor: pointer;
    box-sizing: border-box;
    color: #98a0a6;
    font-size: .9rem;
    border: 1px solid rgba(166, 168, 179, 0.12);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    ${({ skipped }) => (skipped && (
    `cursor: default !important;
    background: none !important;
    box-shadow: none !important;
    border: none !important;`
  ))};
    ${({ isCurrentDay }) => (isCurrentDay && (
    `opacity: 80%;
    background-color: #2D3E50;
    color: #1BBC9B;
        &:hover {
        background-color: rgba(166, 168, 179, 0.12);
        color: #1BBC9B;;
        }`
  ))};
    &:hover{
        background-color: rgba(166, 168, 179, 0.12);
        color: #1BBC9B;;
    }`;

export const EventContainer = styled.div`
    overflow-y: scroll;
    text-align: left;`;

export const EventTitle = styled.div`
    font-size: 11px;
    padding: 3px 8px;
    margin: 8px 0px;
    background-color: rgba(27, 188, 155, .2);
    color: white;
    border-left: 5px solid #1BBC9B;
    max-height: 55px;
    overflow: hidden;
    ${({ completed }) => (completed && 'background-color: #1BBC9B')};
    @media (max-width: 600px) {
    font-size: 0px;
    }`;
