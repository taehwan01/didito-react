import React, { useState } from 'react';

import styles from './Calendar.module.scss';

const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

const Calendar = () => {
  const currentDate = new Date();
  const [year, setYear] = useState(currentDate.getFullYear());
  const [month, setMonth] = useState(currentDate.getMonth());
  const [selectedDate, setSelectedDate] = useState(new Date().getDate());

  const daysCount = daysInMonth(year, month);
  const startDay = new Date(year, month, 1).getDay();

  const goToPreviousMonth = () => {
    setMonth((prevMonth) => prevMonth - 1);
    if (month === 0) {
      setYear((prevYear) => prevYear - 1);
      setMonth(11);
    }
  };

  const goToNextMonth = () => {
    setMonth((prevMonth) => prevMonth + 1);
    if (month === 11) {
      setYear((prevYear) => prevYear + 1);
      setMonth(0);
    }
  };

  const handleClickDate = (dayNumber) => {
    setSelectedDate(dayNumber);
  };

  return (
    <div className={styles.calendar}>
      <div className={styles.calendarHeader}>
        <button className={styles.monthChangeButton} onClick={goToPreviousMonth}>
          {'<'}
        </button>
        <span className={styles.yearAndMonth}>
          {year}년 {month + 1}월
        </span>
        <button className={styles.monthChangeButton} onClick={goToNextMonth}>
          {'>'}
        </button>
      </div>
      <table className={styles.calendarTable}>
        <thead className={styles.weekdayHeader}>
          <tr className={styles.daysHeader}>
            <th>일</th>
            <th>월</th>
            <th>화</th>
            <th>수</th>
            <th>목</th>
            <th>금</th>
            <th>토</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: Math.ceil((daysCount + startDay) / 7) }, (_, weekIndex) => (
            <tr key={weekIndex}>
              {Array.from({ length: 7 }, (_, dayIndex) => {
                const dayNumber = weekIndex * 7 + dayIndex - startDay + 1;
                const isCurrentMonth = dayNumber > 0 && dayNumber <= daysCount;

                return (
                  <th
                    className={`${styles.date} ${isCurrentMonth && dayNumber === selectedDate ? styles.selected : ''}`}
                    key={dayIndex}
                    onClick={() => handleClickDate(dayNumber)}
                  >
                    {isCurrentMonth ? dayNumber : ''}
                  </th>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
