import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyles';
import AuthStyles from './styles/AuthStyles';
import AuthProvider from './context/AuthContext';
import { CircleLoader, FullScreenContainer } from './utils/Loaders';

import {
  Landing,
  Register,
  Login,
} from './pages';

const AuthenticatedApp = React.lazy(() => import('./AuthenticatedApp'));

export default function UnauthenticatedApp() {
  return (
    <AuthProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <AuthStyles>
            <Suspense
              fallback={(
                <FullScreenContainer>
                  <CircleLoader />
                </FullScreenContainer>
            )}
            >
              <AuthenticatedApp />
            </Suspense>
          </AuthStyles>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}
