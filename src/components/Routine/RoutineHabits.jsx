import { useEffect, useState } from "react";
import { useTasks } from "../../contexts/routineContext";
import RoutineHabit from "./RoutineHabit";
import { getCurrentDay } from "../../utils/dates";

function RoutineHabits() {
  const [today, setToday] = useState(getCurrentDay());
  const { tasks } = useTasks();
  const [todayTasks, setTodayTasks] = useState([]);

  useEffect(() => {
    setTodayTasks(tasks.filter((task) => task.days.includes(today)));
  }, [today, tasks]);

  function handleNextDay() {
    const days = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];
    const todayIndex = days.indexOf(today);
    const nextDayIndex = (todayIndex + 1) % 7; // Avanzar al siguiente día, asegurándose de que no se pase del índice máximo
    setToday(days[nextDayIndex]);
  }

  console.log(todayTasks);

  return (
    <section className='items-center justify-center flex flex-col gap-4 mt-8'>
      <button onClick={handleNextDay}>next day</button>
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
