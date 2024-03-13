import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { useTasks } from "../../contexts/routineContext";

function RoutineForm({ isFormVisible, setIsFormVisible, taskId }) {
  const { tasks, addTask, setTasks } = useTasks();
  const { register, handleSubmit, formState, reset } = useForm();
  const [editTask, setEditTask] = useState(
    tasks.filter((task) => task.id === taskId)[0]
  );
  const [subtasksCnt, setSubtasksCnt] = useState(editTask.subtasks.length || 0);
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
      defaultValue={editTask.subtasks[index]}
      id={`subtask${index}`}
      maxLength={30}
      {...register(`subtask${index}`)}
    />
  ));

  const onSubmit = (data) => {
    if (taskId) {
      const popedIdTasks = tasks.filter((task) => task.id !== taskId);
      setTasks(popedIdTasks);
    }

    if (
      !data.monday &&
      !data.tuesday &&
      !data.wednesday &&
      !data.thursday &&
      !data.friday &&
      !data.saturday &&
      !data.sunday
    )
      return;

    let habitSubtasks = [];
    for (const key in data) {
      if (key.startsWith("subtask") && data[key] !== "") {
        habitSubtasks.push(data[key]);
      }
    }

    const daysFiltered = [
      data.monday,
      data.tuesday,
      data.wednesday,
      data.thursday,
      data.friday,
      data.saturday,
      data.sunday,
    ].filter((value) => value !== false);

    const newTask = {
      color: data.habitColor,
      title: data.habitTitle,
      hour: data.habitHour,
      days: daysFiltered,
      subtasks: habitSubtasks,
      id: editTask.id || uuidv4(),
      done: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setSubtasksCnt(0);
    reset();
    setIsFormVisible((prev) => !prev);
    console.log(tasks);
  };
  //console.log(errors);

  function handleOverayClick(e) {
    if (e.target.id !== "overlay") return;

    setIsFormVisible((prev) => !prev);
  }

  return (
    isFormVisible && (
      <div className='overlay' id='overlay' onClick={handleOverayClick}>
        <div className='bg-[white] border-[3px] border-[solid] border-[#ccc] rounded-[5px] top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 absolute p-4'>
          <form className='flex flex-col gap-4' action=''>
            <div className='flex items-center gap-4'>
              <label htmlFor='habitTitle'>Title</label>
              <input
                className='bg-[white] border-[2px] border-[solid] border-[#ccc] rounded-[5px] px-2 py-[0] w-full'
                type='text'
                name='habitTitle'
                id='habitTitle'
                defaultValue={editTask?.title}
                maxLength={30}
                {...register("habitTitle", {
                  required: "Este campo es obligatorio",
                })}
              />
            </div>
            <div className='flex items-center gap-4'>
              <label htmlFor='habitColor'>Color</label>
              <input
                className='bg-[#f0f0f0] border-[2px] border-[solid] border-[#ccc] rounded-[5px] cursor-pointer focus:border-[rgb(0,_149,_255)]'
                type='color'
                defaultValue={editTask?.color || "#323232"}
                name='habitColor'
                id='habitColor'
                {...register("habitColor")}
              />
            </div>
            <div className='flex items-center gap-4'>
              <label htmlFor='habitHour'>Hour</label>
              <input
                className='bg-[white] border-[2px] border-[solid] border-[#ccc] rounded-[5px] cursor-pointer pl-[0.4rem]'
                type='time'
                defaultValue={editTask?.hour}
                name='habitHour'
                id='habitHour'
                {...register("habitHour")}
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
                    defaultChecked={editTask?.days.includes("monday")}
                    value='monday'
                    id='monday'
                    {...register("monday")}
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
                    defaultChecked={editTask?.days.includes("tuesday")}
                    value='tuesday'
                    id='tuesday'
                    {...register("tuesday")}
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
                    defaultChecked={editTask?.days.includes("wednesday")}
                    value='wednesday'
                    id='wednesday'
                    {...register("wednesday")}
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
                    defaultChecked={editTask?.days.includes("thursday")}
                    value='thursday'
                    id='thursday'
                    {...register("thursday")}
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
                    defaultChecked={editTask?.days.includes("friday")}
                    value='friday'
                    id='friday'
                    {...register("friday")}
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
                    defaultChecked={editTask?.days.includes("saturday")}
                    value='saturday'
                    id='saturday'
                    {...register("saturday")}
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
                    defaultChecked={editTask?.days.includes("sunday")}
                    value='sunday'
                    id='sunday'
                    {...register("sunday")}
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
                onClick={() => setIsFormVisible((prev) => !prev)}
              >
                Cancel
              </button>
              <button
                className='w-24 bg-[rgb(0,_149,_255)] px-[0.6rem] py-[0.3rem] rounded-[5px] text-[white]'
                type='submit'
                onClick={handleSubmit(onSubmit)}
                disabled={formState.isSubmitting}
              >
                {taskId ? "Save" : "Add"}
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
}

export default RoutineForm;
