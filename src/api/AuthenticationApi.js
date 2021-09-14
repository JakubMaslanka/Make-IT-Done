import { makeRequest } from './makeRequest';
import { BASE_URL } from './BaseUrl';

export const AuthenticationApi = {
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
  async logout() {
    AuthenticationApi.closeSession();
    const result = await new Promise((resolve) => resolve());
    return result;
  },
  openSession(userInfo) {
    const dateNow = new Date();
    const session = {
      timestamp: dateNow.getTime(),
      extTimestamp: dateNow.getTime() + 60 * 60000,
      accessToken: userInfo.accessToken,
      user: {
        id: userInfo.user.id,
        nickname: userInfo.user.nickname,
      },
    };
    window.localStorage.setItem('session', JSON.stringify(session));
  },
  isSessionOpen() {
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
  },
  closeSession() {
    if (window.localStorage.getItem('session')) {
      window.localStorage.removeItem('session');
    }
  },
};
