import { useEffect, useState } from 'react';
import moment from 'moment';

export function useCalendar(tasks, selectedMonth) {
  const [dateDisplay, setDateDisplay] = useState('');
  const [days, setDays] = useState([]);

  const tasksForDate = (date) => {
    const filteredTasks = tasks.filter((task) => (task.deadline === date ? task : null));
    return filteredTasks.length > 0 ? filteredTasks : undefined;
  };

  useEffect(() => {
    const dt = new Date();

    if (selectedMonth !== 0) {
      dt.setMonth(new Date().getMonth() + selectedMonth);
    }

    setDateDisplay(moment(dt.toISOString()).format('MMMM, YYYY'));

    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();
    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const firstCalendarDayInWeek = moment(dt.toISOString()).startOf('month').format('dddd');
    const daysInMonth = moment(dt.toISOString()).daysInMonth();
    const indexOfFirstCalendarDay = weekdays.indexOf(firstCalendarDayInWeek);

    const daysArray = [];

    for (let i = 1; i <= indexOfFirstCalendarDay + daysInMonth; i += 1) {
      const dayAsNumber = new Date(
        parseInt(year, 10),
        parseInt(month, 10),
        parseInt(i - indexOfFirstCalendarDay, 10),
      );
      const dayAsString = `${month + 1}/${i - indexOfFirstCalendarDay}/${year}`;

      if (i > indexOfFirstCalendarDay) {
        daysArray.push({
          value: i - indexOfFirstCalendarDay,
          tasks: tasksForDate(dayAsString),
          isWeekendDay: (dayAsNumber.getDay() === 0) || (dayAsNumber.getDay() === 6),
          isCurrentDay: i - indexOfFirstCalendarDay === day && selectedMonth === 0,
          date: dayAsString,
          idx: (Math.random() * 100) + 1,
        });
      } else {
        daysArray.push({
          value: 'skipped',
          tasks: null,
          isCurrentDay: false,
          date: '',
          idx: (Math.random() * 100) + 1,
        });
      }
    }

    setDays(daysArray);
  }, [tasks, selectedMonth]);

  return {
    days,
    dateDisplay,
  };
}
