import React, { useState } from 'react';

import styles from './Calendar.module.scss';

const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

// const todoList = [
//   { id: 1, item: '집에 가자마자 가방 세탁 맡기기', date: '2023-08-15' },
//   { id: 2, item: '가방 세탁 맡기기 집에 가자마자', date: '2023-08-16' },
//   { id: 3, item: '가자마자 집에 가방 세탁 맡기기', date: '2023-08-17' },
//   { id: 4, item: '세탁기 집에 가자마자 돌리기', date: '2023-08-18' },
// ];
const todoList = [
  {
    id: 1,
    items: [
      { id: 1, item: '1집에 가자마자 가방 세탁 맡기기' },
      { id: 2, item: '1가방 세탁 맡기기 집에 가자마자' },
      { id: 3, item: '1가자마자 집에 가방 세탁 맡기기' },
      { id: 4, item: '1세탁기 집에 가자마자 돌리기' },
    ],
    date: '2023-08-15',
  },
  {
    id: 2,
    items: [
      { id: 1, item: '2집에 가자마자 가방 세탁 맡기기' },
      { id: 2, item: '2가방 세탁 맡기기 집에 가자마자' },
      { id: 3, item: '2가자마자 집에 가방 세탁 맡기기' },
      { id: 4, item: '2세탁기 집에 가자마자 돌리기' },
    ],
    date: '2023-08-16',
  },
  {
    id: 3,
    items: [
      { id: 1, item: '3집에 가자마자 가방 세탁 맡기기' },
      { id: 2, item: '3가방 세탁 맡기기 집에 가자마자' },
      { id: 3, item: '3가자마자 집에 가방 세탁 맡기기' },
      { id: 4, item: '3세탁기 집에 가자마자 돌리기' },
    ],
    date: '2023-08-17',
  },
  {
    id: 4,
    items: [
      { id: 1, item: '4집에 가자마자 가방 세탁 맡기기' },
      { id: 2, item: '4가방 세탁 맡기기 집에 가자마자' },
      { id: 3, item: '4가자마자 집에 가방 세탁 맡기기' },
      { id: 4, item: '4세탁기 집에 가자마자 돌리기' },
    ],
    date: '2023-08-18',
  },
];

const Calendar = () => {
  const currentDate = new Date();
  const [year, setYear] = useState(currentDate.getFullYear());
  const [month, setMonth] = useState(currentDate.getMonth());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showTodo, setShowTodo] = useState(false);
  const [diditList, setDiditList] = useState([]);
  const [selectedTodoList, setSelectedTodoList] = useState([]);

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
    const clickedDate = new Date(year, month, dayNumber);
    setSelectedDate(clickedDate);
    setShowTodo(true);

    // todoList 배열에서 클릭한 날짜와 일치하는 아이템을 찾음
    const matchingTodo = todoList.find((todo) => {
      return new Date(todo.date).toDateString() === clickedDate.toDateString();
    });

    // 일치하는 아이템이 있을 경우 showTodo를 true로 설정
    if (matchingTodo) {
      setSelectedTodoList(matchingTodo);
    } else {
      // setShowTodo(false);
      setSelectedTodoList([]);
    }
  };

  const handleItemClick = (parendtsId, index) => {
    console.log(parendtsId);
    if (!diditList.includes(index)) {
      setDiditList([...diditList, index]);
    } else {
      const list = diditList.filter((el) => {
        return el !== index;
      });
      setDiditList(list);
    }
  };

  return (
    <div className={`${styles.calendarPage} ${showTodo && styles.getTodoList}`}>
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
                  const dateToCompare = new Date(year, month, dayNumber);
                  return (
                    <th
                      className={`${styles.date} ${
                        dateToCompare.getFullYear() === selectedDate.getFullYear() &&
                        dateToCompare.getMonth() === selectedDate.getMonth() &&
                        dateToCompare.getDate() === selectedDate.getDate()
                          ? styles.selected
                          : ''
                      }`}
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
      {showTodo && (
        <div className={styles.todoList}>
          {selectedTodoList.length !== 0 ? (
            selectedTodoList.items.map((item) => (
              <span
                key={item.id}
                className={`${styles.todoItem} ${diditList.includes(item.id) ? styles.itemSelected : ''}`}
                onClick={() => handleItemClick(selectedTodoList.id, item.id)}
              >
                {item.item}
              </span>
            ))
          ) : (
            <span className={styles.todoItem}>( no diditos yet )</span>
          )}
        </div>
      )}
    </div>
  );
};

export default Calendar;
