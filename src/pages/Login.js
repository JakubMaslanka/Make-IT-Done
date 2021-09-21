import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { CircleLoader } from '../utils/Loaders';
import { useAuth, useDocumentTitle } from '../hooks';
import {
  Form,
  Input,
  Button,
  Container,
  AuthenticationForm,
  StyledErrorMessage,
} from './pages.styles';

export const Login = () => {
  const history = useHistory();
  const { onLogin } = useAuth();
  useDocumentTitle('Log In - Make-IT-Done');
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const emailInput = useRef(null);
  const passwordInput = useRef(null);

  const handleLoginAttempt = (e) => {
    e.preventDefault();
    const credentials = {
      email: emailInput.current.value,
      password: passwordInput.current.value,
    };

    if (credentials.email === '' || credentials.password === '') {
      setErrorMessage('Fill in all fields');
      return;
    }
    setLoading(true);
    onLogin(credentials, setLoading, setErrorMessage, history);
  };

  return (
    <Container isError={errorMessage}>
      <AuthenticationForm>
        <h1>Login to app</h1>
        {errorMessage
      && (
      <StyledErrorMessage>
        {errorMessage}
      </StyledErrorMessage>
      )}
        <Form onSubmit={handleLoginAttempt}>
          {isLoading
            ? <CircleLoader />
            : (
              <>
                <Input required type="text" ref={emailInput} defaultValue="kuba@kursreact.pl" placeholder="Email" />
                <Input required type="password" ref={passwordInput} defaultValue="zaq1@WSX" placeholder="Password" />
              </>
            )}
          <Button type="submit">Log in</Button>
        </Form>
        <Link to="/register">Don&apos;t have an account? Register!</Link>
      </AuthenticationForm>
    </Container>
  );
};
