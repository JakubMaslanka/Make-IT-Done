import styled from 'styled-components';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export const DatePicker = styled(Calendar)`
  position: absolute;
  top: -270px;
  right: 0;
  border-radius: 2%;
`;

export const TaskOptions = styled.div`
  list-style: none;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  span{
    ${(props) => (props.smallerScreen && 'font-size: 0px;')};
  }
  svg{
    padding: 0px 10px;
    fill: #128069;
    width: 28px;
    height: 28px;
    cursor: pointer;
    &:hover{
      transition: all 0.2s ease;
      fill: #1BBC9B;
  }
`;

export const TextInput = styled.input`
  background: none;
  border: none;
  padding: 10px;
  outline: none;
  color: white;
  font-size: 1.2rem;
  width: 100%;
`;

export const SubmitButton = styled.button`
  background: none;
  border: none;
  padding: 10px;
  svg {
    fill: #128069;
    width: 32px;
    height: 32px;
    cursor: pointer;
  }
  &:hover{
    transition: all 0.2s ease;
    svg{
      fill: #1BBC9B;
    }
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #2D3E50;
  border-radius: 10px;
`;

export const CreatorContainer = styled.div`
  position: fixed;
  bottom: 0;
  margin: 0px 10px 75px 10px;
  width: calc(100% - 20px);
  @media screen and (min-width: 900px) {
    margin: 0px 10px 20px 10px;
    max-width: 61%;
  }
`;
