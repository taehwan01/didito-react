import React, { useState } from 'react';

const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

const Calendar = () => {
  const currentDate = new Date();
  const [year, setYear] = useState(currentDate.getFullYear());
  const [month, setMonth] = useState(currentDate.getMonth());

  const daysCount = daysInMonth(year, month);
  const startDay = new Date(year, month, 1).getDay();

  const daysArray = Array.from({ length: daysCount }, (_, i) => i + 1);
  const blankDaysArray = Array.from({ length: startDay }, (_, i) => '');

  return (
    <div>
      <h2>
        {year}년 {month + 1}월
      </h2>
      <table>
        <thead>
          <tr>
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
          {Array.from({ length: (daysCount + startDay) / 7 }, (_, weekIndex) => (
            <tr key={weekIndex}>
              {Array.from({ length: 7 }, (_, dayIndex) => {
                const dayNumber = weekIndex * 7 + dayIndex - startDay + 1;
                const isCurrentMonth = dayNumber > 0 && dayNumber <= daysCount;

                return <td key={dayIndex}>{isCurrentMonth ? dayNumber : ''}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
