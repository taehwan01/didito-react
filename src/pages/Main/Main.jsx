import { useState, useEffect } from 'react';
// import axios from 'axios';

import './Main.scss';

const Main = () => {
  const [inputTodo, setInputTodo] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [diditList, setDiditList] = useState([]);

  // useEffect(() => {
  //   axios.get('http://localhost:8080/').then(res => console.log(res));
  //   // console.log(result);
  // });

  const handleInputTodo = (event) => {
    setInputTodo(event.target.value);
  };

  const handleInputTodoFocus = () => {
    setIsFocused(!isFocused);
  };

  const handleEnterKey = (event) => {
    if (event.key === 'Enter' && event.nativeEvent.isComposing === false) {
      handleButtonClick();
    }
  };

  const handleButtonClick = () => {
    if (inputTodo.trim() !== '') {
      setTodoList([...todoList, inputTodo]);
      setInputTodo('');
    }
    if (inputTodo.trim() === '') {
      alert('No inputs, try again!!!');
    }
  };

  const handleItemClick = (index) => {
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
    <div className='main'>
      <h1>diditos</h1>
      {/* <p style={{ position: 'relative', top: '145px', right: '15px', fontSize: '3rem', fontWeight: '300' }}>D</p>
      <p style={{ fontSize: '3rem', fontWeight: '300' }}>T</p> */}
      <div className='input-item'>
        <input
          className='input input-todo'
          type='text'
          placeholder={isFocused ? '' : 'input todos'}
          value={inputTodo}
          onChange={handleInputTodo}
          onFocus={handleInputTodoFocus}
          onBlur={handleInputTodoFocus}
          onKeyDown={handleEnterKey}
        />
        <button className='input input-button' onClick={handleButtonClick}>
          +
        </button>
      </div>

      {todoList.length > 0 ? (
        todoList.map((item, id) => (
          <span
            key={id}
            className={diditList.includes(id) ? 'item selected' : 'item'}
            onClick={() => handleItemClick(id)}
          >
            {id + 1}. {item}
          </span>
        ))
      ) : (
        <span className='item'>List is Empty</span>
      )}
    </div>
  );
};

export default Main;
