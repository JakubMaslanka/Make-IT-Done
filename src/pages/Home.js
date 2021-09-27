import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Layout } from './Layout';
import { TaskManager } from '../components';
import { useAuth, useDocumentTitle } from '../hooks';

import { ReactComponent as LogoutIcon } from '../icons/logout_icon.svg';

import {
  Header,
  UpperContainer,
} from './pages.styles';

export const Home = () => {
  const { user, onLogout } = useAuth();
  useDocumentTitle('Home - Make-IT-Done');
  const [greeting, setGreeting] = useState('Good morning');
  const date = new Date();
  const currentHour = date.getHours();

  useEffect(() => {
    if (currentHour >= 5 && currentHour < 12) {
      setGreeting('Good morning');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Good afternoon');
    } else if (currentHour >= 18 && currentHour > 5) {
      setGreeting('Good evening');
    } else if (currentHour < 5) {
      setGreeting('Good evening');
    }
  }, []);

  return (
    <Layout baseRoute="home">
      <Header>
        <UpperContainer>
          <p>
            {moment(date).format('dddd, D MMM')}
          </p>
          {window.innerWidth < 900 && (
          <LogoutIcon
            onClick={onLogout}
          />
          )}
        </UpperContainer>
        <h2>{`${greeting},`}</h2>
        <h1>{`${user.user.nickname}!`}</h1>
        <h5>Your&apos;s taks for today:</h5>
      </Header>
      <TaskManager height={window.innerHeight - 125} />
    </Layout>
  );
};
