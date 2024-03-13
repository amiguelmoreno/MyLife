import { useEffect, useState } from "react";
import { convertColorToRgb } from "../../utils/convertColorToRgb";
import RoutineSubtask from "./RoutineSubtask";
import { useTasks } from "../../contexts/routineContext";

function RoutineHabit({ task }) {
  const { tasks, addTask } = useTasks();
  const [isChecked, setIsChecked] = useState(false);
  const { color, title, hour, days, subtasks, done } = task;

  function handleChecked() {
    setIsChecked((prevCheck) => !prevCheck);
  }

  return (
    <article
      style={{ backgroundColor: `rgba(${convertColorToRgb(color)}, 0.4)` }} // tw does not accept dinamic variables
      className={`w-[90vw] max-w-[40rem] relative flex flex-col gap-2 p-2 rounded-[10px] ${
        isChecked && "opacity-60"
      }`}
    >
      {hour !== "" && (
        <div className='bg-[#b3b3b3] w-min px-[0.2rem] py-[0] text-[black] absolute -right-[0.3rem] -top-[0.3rem] rounded-[3px]'>
          {hour}
        </div>
      )}
      <div
        className={`${
          isChecked && "taskdone"
        } flex items-center font-medium gap-2 text-[1.2rem]`}
      >
        <input
          className='checked:bg-[#5b5b5b9a] checked:border-[#3232329a] checked:text-white appearance-none w-[25px] h-[25px] border-[2px]  border-[#cccccc9a] bg-[#fff] cursor-pointer rounded-[100%]'
          name='habit1'
          type='checkbox'
          checked={isChecked}
          onChange={handleChecked}
        />
        <p>{title}</p>
      </div>

      {subtasks?.map((subtask, i) => (
        <RoutineSubtask
          key={i}
          setIsChecked={setIsChecked}
          subtask={subtask}
          isChecked={isChecked}
        ></RoutineSubtask>
      ))}
    </article>
  );
}

export default RoutineHabit;
