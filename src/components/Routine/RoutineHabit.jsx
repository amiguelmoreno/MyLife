import { convertColorToRgb } from "../../utils/convertColorToRgb";
import RoutineSubtask from "./RoutineSubtask";

function RoutineHabit({ task }) {
  const { color, title, hour, subtasks } = task;

  return (
    <article
      style={{ backgroundColor: `rgba(${convertColorToRgb(color)}, 0.4)` }} // tw does not accept dinamic variables
      className={`w-[90vw] max-w-[40rem] relative flex flex-col gap-2 p-4 rounded-[10px]`}
    >
      {hour !== "" && (
        <div className='bg-[#ffffff] w-min px-[0.2rem] py-[0] text-[black] absolute -right-[0.3rem] -top-[0.3rem] rounded-[3px] [box-shadow:rgba(0,_0,_0,_0.35)_5px_5px_5px]'>
          {hour}
        </div>
      )}
      <div className={`flex items-center font-medium gap-2 text-[1.2rem]`}>
        <p>{title}</p>
      </div>

      {subtasks?.map((subtask, i) => (
        <RoutineSubtask key={i} subtask={subtask}></RoutineSubtask>
      ))}
    </article>
  );
}

export default RoutineHabit;
