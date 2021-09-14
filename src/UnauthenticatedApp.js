import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthProvider from './context/AuthContext';
import { CircleLoader, FullScreenContainer } from './utils/Loaders';

import {
  Landing,
  Register,
  Login,
  NotFound,
} from './pages';

const AuthenticatedApp = React.lazy(() => import('./AuthenticatedApp'));

export default function UnauthenticatedApp() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Suspense
            fallback={(
              <FullScreenContainer>
                <CircleLoader />
              </FullScreenContainer>
            )}
          >
            <AuthenticatedApp />
          </Suspense>
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}
