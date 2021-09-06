import styled from 'styled-components';

export const TaskListContainer = styled.div`
    ${({ heightIncrease }) => `height: ${heightIncrease}px`};
    overflow-y: scroll;`;
