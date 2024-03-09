import { useState } from "react";

function RoutineForm() {
  const [subtasksCnt, setSubtasksCnt] = useState(2);
  const MAX_SUBTASKS = 6;

  function addSubtask(e) {
    setSubtasksCnt((prev) => prev + 1);
    const inputHtml = `<input className='subtask' type='text' name='habitSubtasks' />`;
    e.target.insertAdjacentHTML("beforebegin", inputHtml);
  }

  return (
    <div className='formcont'>
      <form action=''>
        <div className='field'>
          <label htmlFor='habitTitle'>Title</label>
          <input type='text' name='habitTitle' id='habitTitle' />
        </div>
        <div className='field'>
          <label htmlFor='habitColor'>Color</label>
          <input type='color' name='habitColor' id='habitColor' />
        </div>
        <div className='field'>
          <label htmlFor='habitHour'>Hour</label>
          <input type='time' name='habitHour' id='habitHour' />
        </div>
        <div className='field'>
          <label htmlFor='days'>Days</label>
          <div className='days-container'>
            <div className='checkbox-container'>
              <input type='checkbox' name='day' value='Monday' /> <p>M</p>
            </div>
            <div className='checkbox-container'>
              <input type='checkbox' name='day' value='Tuesday' /> <p>T</p>
            </div>
            <div className='checkbox-container'>
              <input type='checkbox' name='day' value='Wednesday' /> <p>W</p>
            </div>
            <div className='checkbox-container'>
              <input type='checkbox' name='day' value='Thursday' /> <p>T</p>
            </div>
            <div className='checkbox-container'>
              <input type='checkbox' name='day' value='Friday' /> <p>F</p>
            </div>
            <div className='checkbox-container'>
              <input type='checkbox' name='day' value='Saturday' /> <p>S</p>
            </div>
            <div className='checkbox-container'>
              <input type='checkbox' name='day' value='Sunday' /> <p>S</p>
            </div>
          </div>
        </div>
        <div className='fieldtask'>
          <label htmlFor='habitSubtasks'>Subtasks</label>
          <div className='tasks'>
            <div className='subtasks'>
              <input className='subtask' type='text' name='habitSubtasks' />
              <input className='subtask' type='text' name='habitSubtasks' />
            </div>
            {subtasksCnt < MAX_SUBTASKS && (
              <button type='button' onClick={addSubtask}>
                + Add subtask
              </button>
            )}
          </div>
        </div>
        <div className='buttonsform'>
          <button type='button'>Cancel</button>
          <button type='submit'>Save</button>
        </div>
      </form>
    </div>
  );
}

export default RoutineForm;
