import React, { useState } from 'react';

const NewTask = ({ onAdd }) => {
  const [enteredTask, setEnteredTask] = useState('');
  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    // if (enteredTask.trim() === '') {
    //   return;
    // }
    onAdd(enteredTask);
    setEnteredTask('');
  }
  return (
    <div className="flex items-center gap-4">
      <input
        onChange={handleChange}
        value={enteredTask}
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
      />
      <button
        disabled={enteredTask.trim() === ''}
        onClick={handleClick}
        className="text-stone-700 hover:text-stone-950">
        Add Task
      </button>
    </div>
  );
};

export default NewTask;
