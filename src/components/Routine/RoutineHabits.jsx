import { useEffect, useState } from "react";
import { useTasks } from "../../contexts/routineContext";
import RoutineHabit from "./RoutineHabit";
import { getCurrentDay } from "../../utils/dates";
import { sortByHour } from "../../utils/sortHour";

function RoutineHabits() {
  const [today] = useState(getCurrentDay());
  const { tasks } = useTasks();
  const [todayTasks, setTodayTasks] = useState([]);

  useEffect(() => {
    setTodayTasks(
      tasks
        .filter((task) => task.days.includes(today))
        .slice()
        .sort(sortByHour)
    );
  }, [today, tasks]);

  return (
    <section className='items-center justify-center flex flex-col gap-4 mt-8'>
      {todayTasks.length > 0 ? (
        todayTasks.map((task) => (
          <div key={task.id}>
            <RoutineHabit task={task}></RoutineHabit>
          </div>
        ))
      ) : (
        <p>There is no habits today 👍</p>
      )}
    </section>
  );
}

export default RoutineHabits;
