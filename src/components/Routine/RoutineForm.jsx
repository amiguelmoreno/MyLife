import { useState } from "react";

function RoutineForm() {
  const [subtasksCnt, setSubtasksCnt] = useState(0);
  const MAX_SUBTASKS = 8;

  function addSubtask() {
    if (subtasksCnt < MAX_SUBTASKS) {
      setSubtasksCnt((prev) => prev + 1);
    }
  }

  const subtaskInputs = Array.from({ length: subtasksCnt }, (_, index) => (
    <input
      key={index}
      className='bg-white border-2 border-solid border-gray-300 rounded-5 px-2 py-0 w-full rounded-[5px]'
      type='text'
      name='habitSubtasks'
    />
  ));

  return (
    <div className=' bg-[white] border-[3px] border-[solid] border-[#ccc] rounded-[5px] top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 absolute p-4'>
      <form className='flex flex-col gap-4' action=''>
        <div className='flex items-center gap-4'>
          <label htmlFor='habitTitle'>Title</label>
          <input
            className='bg-[white] border-[2px] border-[solid] border-[#ccc] rounded-[5px] px-2 py-[0] w-full'
            type='text'
            name='habitTitle'
            id='habitTitle'
          />
        </div>
        <div className='flex items-center gap-4'>
          <label htmlFor='habitColor'>Color</label>
          <input
            className='bg-[#f0f0f0] border-[2px] border-[solid] border-[#ccc] rounded-[5px] cursor-pointer focus:border-[rgb(0,_149,_255)]'
            type='color'
            name='habitColor'
            id='habitColor'
          />
        </div>
        <div className='flex items-center gap-4'>
          <label htmlFor='habitHour'>Hour</label>
          <input
            className='bg-[white] border-[2px] border-[solid] border-[#ccc] rounded-[5px] cursor-pointer pl-[0.4rem]'
            type='time'
            name='habitHour'
            id='habitHour'
          />
        </div>
        <div className='flex items-center gap-4'>
          <label htmlFor='days'>Days</label>
          <div className='flex gap-[0.6rem]'>
            <div className='relative flex w-min'>
              <input
                className='appearance-none w-[25px] h-[25px] border-[2px] border-[solid] border-[#ccc] bg-[#fff] cursor-pointer rounded-[5px] checked:bg-blue-500 checked:border-blue-700 checked:text-white'
                type='checkbox'
                name='day'
                value='Monday'
              />
              <p className='pointer-events-none left-2/4 top-2/4 absolute -translate-x-1/2 -translate-y-1/2 text-[0.8rem] font-medium'>
                M
              </p>
            </div>
            <div className='relative flex w-min'>
              <input
                className='appearance-none w-[25px] h-[25px] border-[2px] border-[solid] border-[#ccc] bg-[#fff] cursor-pointer rounded-[5px] checked:bg-blue-500 checked:border-blue-700 checked:text-white'
                type='checkbox'
                name='day'
                value='Tuesday'
              />
              <p className='pointer-events-none left-2/4 top-2/4 absolute -translate-x-1/2 -translate-y-1/2 text-[0.8rem] font-medium'>
                T
              </p>
            </div>
            <div className='relative flex w-min'>
              <input
                className='appearance-none w-[25px] h-[25px] border-[2px] border-[solid] border-[#ccc] bg-[#fff] cursor-pointer rounded-[5px] checked:bg-blue-500 checked:border-blue-700 checked:text-white'
                type='checkbox'
                name='day'
                value='Wednesday'
              />
              <p className='pointer-events-none left-2/4 top-2/4 absolute -translate-x-1/2 -translate-y-1/2 text-[0.8rem] font-medium'>
                W
              </p>
            </div>
            <div className='relative flex w-min'>
              <input
                className='appearance-none w-[25px] h-[25px] border-[2px] border-[solid] border-[#ccc] bg-[#fff] cursor-pointer rounded-[5px] checked:bg-blue-500 checked:border-blue-700 checked:text-white'
                type='checkbox'
                name='day'
                value='Thursday'
              />
              <p className='pointer-events-none left-2/4 top-2/4 absolute -translate-x-1/2 -translate-y-1/2 text-[0.8rem] font-medium'>
                T
              </p>
            </div>
            <div className='relative flex w-min'>
              <input
                className='appearance-none w-[25px] h-[25px] border-[2px] border-[solid] border-[#ccc] bg-[#fff] cursor-pointer rounded-[5px] checked:bg-blue-500 checked:border-blue-700 checked:text-white'
                type='checkbox'
                name='day'
                value='Friday'
              />
              <p className='pointer-events-none left-2/4 top-2/4 absolute -translate-x-1/2 -translate-y-1/2 text-[0.8rem] font-medium'>
                F
              </p>
            </div>
            <div className='relative flex w-min'>
              <input
                className='appearance-none w-[25px] h-[25px] border-[2px] border-[solid] border-[#ccc] bg-[#fff] cursor-pointer rounded-[5px] checked:bg-blue-500 checked:border-blue-700 checked:text-white'
                type='checkbox'
                name='day'
                value='Saturday'
              />
              <p className='pointer-events-none left-2/4 top-2/4 absolute -translate-x-1/2 -translate-y-1/2 text-[0.8rem] font-medium'>
                S
              </p>
            </div>
            <div className='relative flex w-min'>
              <input
                className='appearance-none w-[25px] h-[25px] border-[2px] border-[solid] border-[#ccc] bg-[#fff] cursor-pointer rounded-[5px] checked:bg-blue-500 checked:border-blue-700 checked:text-white'
                type='checkbox'
                name='day'
                value='Sunday'
              />
              <p className='pointer-events-none left-2/4 top-2/4 absolute -translate-x-1/2 -translate-y-1/2 text-[0.8rem] font-medium'>
                S
              </p>
            </div>
          </div>
        </div>
        <div className='flex gap-4 items-center'>
          <label htmlFor='habitSubtasks'>Subtasks</label>
          <div className='flex flex-col items-start gap-2'>
            {subtaskInputs}
            {subtasksCnt < MAX_SUBTASKS && (
              <button
                className='bg-[white] border-[2px] border-[solid] border-[#ccc] rounded-[5px] px-2 py-[0]'
                type='button'
                onClick={addSubtask}
              >
                + Add subtask
              </button>
            )}
          </div>
        </div>
        <div className='flex items-center justify-end gap-4'>
          <button
            className='w-24 bg-[rgb(_255,_48,_48)] px-[0.6rem] py-[0.3rem] rounded-[5px] text-[white]'
            type='button'
          >
            Cancel
          </button>
          <button
            className='w-24 bg-[rgb(0,_149,_255)] px-[0.6rem] py-[0.3rem] rounded-[5px] text-[white]'
            type='submit'
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default RoutineForm;
