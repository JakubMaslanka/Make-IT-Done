import styled from 'styled-components';

export const TaskListContainer = styled.div`
    ${({ heightIncrease }) => `height: ${heightIncrease}px`};
    overflow-y: scroll;`;

export const TaskListPosition = styled.div`
    @media screen and (min-width: 900px) {
        max-width: 66%;
        height: 100%;
    }
    height: 100vh;
`;
