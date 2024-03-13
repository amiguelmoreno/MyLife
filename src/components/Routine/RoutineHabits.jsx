import { useState } from "react";
import { useTasks } from "../../contexts/routineContext";
import RoutineHabit from "./RoutineHabit";
import { getCurrentDay } from "../../utils/dates";

function RoutineHabits() {
  const [today, setToday] = useState(getCurrentDay());
  const { tasks, addTask } = useTasks();

  console.log(today);
  const filteredTasks = tasks.filter((task) => task.days.includes(today));

  return (
    <section className='flex flex-col gap-4 mt-8'>
      {filteredTasks.map((task) => (
        <div key={task.id}>
          <RoutineHabit task={task}></RoutineHabit>
        </div>
      ))}
    </section>
  );
}

export default RoutineHabits;
