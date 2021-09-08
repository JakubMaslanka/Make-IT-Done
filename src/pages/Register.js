import React, { useContext, useRef, useState } from 'react';
import styled from 'styled-components';
import { useHistory, Link } from 'react-router-dom';

import { AuthContext } from '../components/context/AuthContext';

const Register = () => {
  const { AuthenticationApi, setUser } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState(null);
  const emailInput = useRef(null);
  const nicknameInput = useRef(null);
  const passwordInput = useRef(null);

  const history = useHistory();

  const handleRegisterAttempt = (e) => {
    e.preventDefault();
    const credentials = {
      email: emailInput.current.value,
      nickname: nicknameInput.current.value,
      password: passwordInput.current.value,
    };
    if (!/\S+@\S+\.\S+/.test(credentials.email)) {
      setErrorMessage('Incorrect email');
      return;
    }
    if (!/(?=.{8,})/.test(credentials.password)) {
      setErrorMessage('Password is too weak');
      return;
    }

    AuthenticationApi.register(credentials)
      .catch(({ message }) => {
        setErrorMessage(message);
      })
      .then((result) => {
        if (result) {
          setUser(result);
          AuthenticationApi.openSession(result);
          history.replace('home');
        }
      });
  };

  return (
    <Container isError={errorMessage}>
      <h1>Sign up in app</h1>
      {errorMessage
      && (
      <StyledErrorMessage>
        {errorMessage}
      </StyledErrorMessage>
      )}
      <LoginForm>
        <Input type="text" ref={nicknameInput} required placeholder="Nickname" />
        <Input type="text" ref={emailInput} required placeholder="Email" />
        <Input type="password" ref={passwordInput} required placeholder="Password" />
        <Button type="submit" onClick={handleRegisterAttempt}>Sign up</Button>
      </LoginForm>
      <Link to="/login">Already have an account? Login!</Link>
    </Container>
  );
};

const StyledErrorMessage = styled.div`
    background: #BF3F55;
    border-radius: 5px;
    font-size: 1rem;
    color: white;
    padding: 20px;
    text-align: center;
    margin: 0px auto 15px auto;`;

const Container = styled.div`
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

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 30vw; 
    gap: 30px;`;

const Input = styled.input`
    border: none;
    border-bottom: 2px solid #1BBC9B;
    background: transparent;
    outline: none;
    font-size: 1rem;
    color: white;
    padding: 5px;`;

const Button = styled.button`
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

export default Register;
