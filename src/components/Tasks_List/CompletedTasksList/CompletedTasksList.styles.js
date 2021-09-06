import styled from 'styled-components';

export const DropdownButton = styled.span`
background-color: #2D3E50;
border-radius: 10px;
padding: 10px;
margin: 0px 10px;
cursor: pointer;
color: #FFFFFF;
display: flex;
width: 100px;
align-items: center;
justify-content: flex-start;
flex-direction: row;
gap: 10px;
&:hover{
  background-color: #2f455b;
}
span:last-child {
  color: #AAAAAA;
}
`;
