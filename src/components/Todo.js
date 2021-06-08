import React from 'react';

const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };

  return (
    <div className='todo'>
      <li className='todo-item'>{text}</li>
      <div className='todo'>
        <button className='complete-btn'>
          {' '}
          <i className='fas fa-check'></i>
        </button>
        <button className='trash-btn' onClick={deleteHandler}>
          {' '}
          <i className='fas fa-trash'></i>
        </button>
      </div>
    </div>
  );
};

export default Todo;
