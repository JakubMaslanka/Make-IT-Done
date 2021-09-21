import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { CircleLoader } from '../utils/Loaders';
import { useAuth, useDocumentTitle } from '../hooks';

import {
  Form,
  Input,
  Button,
  Container,
  StyledErrorMessage,
  AuthenticationForm,
} from './pages.styles';

export const Register = () => {
  const history = useHistory();
  const { onRegister } = useAuth();
  useDocumentTitle('Sign Up - Make-IT-Done');
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const emailInput = useRef(null);
  const nicknameInput = useRef(null);
  const passwordInput = useRef(null);

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
    setLoading(true);
    onRegister(credentials, setLoading, setErrorMessage, history);
  };

  return (
    <Container isError={errorMessage}>
      <AuthenticationForm>
        <h1>Sign up in app</h1>
        {errorMessage
      && (
      <StyledErrorMessage>
        {errorMessage}
      </StyledErrorMessage>
      )}
        <Form onSubmit={handleRegisterAttempt}>
          {isLoading
            ? <CircleLoader />
            : (
              <>
                <Input type="text" ref={nicknameInput} required placeholder="Nickname" />
                <Input type="text" ref={emailInput} required placeholder="Email" />
                <Input type="password" ref={passwordInput} required placeholder="Password" />
              </>
            )}
          <Button type="submit">Sign up</Button>
        </Form>
        <Link to="/login">Already have an account? Login!</Link>
      </AuthenticationForm>
    </Container>
  );
};
