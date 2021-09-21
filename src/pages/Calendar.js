import React from 'react';
import { CalendarManager } from '../components';
import { Layout } from './Layout';
import { useDocumentTitle } from '../hooks';

export const Calendar = () => {
  useDocumentTitle('Calendar - Make-IT-Done');
  return (
    <Layout baseRoute="calendar">
      <CalendarManager />
    </Layout>
  );
};
