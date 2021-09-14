import React from 'react';
import { CalendarManager } from '../components';
import { Layout } from './Layout';

export const Calendar = () => (
  <Layout baseRoute="calendar">
    <CalendarManager />
  </Layout>
);
