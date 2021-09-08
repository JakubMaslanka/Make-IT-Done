import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import makeRequest from '../utilities/makeRequest';

export const AuthContext = createContext();
const BASE_URL = 'http://localhost:5000';

export default function AuthProvider({ children }) {
  const isSessionOpen = () => {
    let prevSession = JSON.parse(window.localStorage.getItem('session'));
    if (prevSession) {
      if (prevSession.extTimestamp < new Date().getTime()) {
        window.localStorage.removeItem('session');
        prevSession = null;
      }
    } else {
      prevSession = null;
    }
    return prevSession;
  };

  const [user, setUser] = useState(isSessionOpen);

  const AuthenticationApi = {
    async register(credentials) {
      const response = await makeRequest(`${BASE_URL}/register`, 'POST', credentials);
      const result = await response.json();
      return result;
    },
    async login(credentials) {
      const response = await makeRequest(`${BASE_URL}/login`, 'POST', credentials);
      const result = await response.json();
      return result;
    },
    logout() {
      window.location.replace('/');
      setUser(null);
      AuthenticationApi.closeSession();
    },
    openSession(userInfo) {
      const dateNow = new Date();
      const session = {
        timestamp: dateNow.getTime(),
        extTimestamp: dateNow.getTime() + 10 * 60000,
        user: {
          accessToken: userInfo.accessToken,
          id: userInfo.user.id,
          nickname: userInfo.user.nickname,
        },
      };
      window.localStorage.setItem('session', JSON.stringify(session));
    },
    closeSession() {
      if (window.localStorage.getItem('session')) {
        window.localStorage.removeItem('session');
      }
    },
  };

  return (
    <AuthContext.Provider value={{
      user,
      setUser,
      AuthenticationApi,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
