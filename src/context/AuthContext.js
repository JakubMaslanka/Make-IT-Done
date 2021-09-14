import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { AuthenticationApi } from '../api/AuthenticationApi';

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(AuthenticationApi.isSessionOpen());

  const onLogin = (credentials, loadingState, errorState, pageHandle) => {
    AuthenticationApi.login(credentials)
      .catch(() => {
        loadingState(false);
        errorState('Incorrect email or password.');
      })
      .then((result) => {
        setUser(result);
        AuthenticationApi.openSession(result);
        loadingState(false);
      })
      .finally(
        () => pageHandle.replace('/home'),
      );
  };

  const onRegister = (credentials, loadingState, errorState, pageHandle) => {
    AuthenticationApi.register(credentials)
      .catch(({ message }) => {
        errorState(message);
        loadingState(false);
      })
      .then((result) => {
        setUser(result);
        AuthenticationApi.openSession(result);
        loadingState(false);
      })
      .finally(
        () => pageHandle.replace('/home'),
      );
  };

  const onLogout = () => {
    AuthenticationApi.logout()
      .then(
        () => {
          setUser(null);
          AuthenticationApi.closeSession();
        },
      )
      .finally(
        () => window.location.replace('/'),
      );
  };

  return (
    <AuthContext.Provider value={{
      user,
      onLogin,
      onRegister,
      onLogout,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const AuthContext = createContext();

AuthProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
