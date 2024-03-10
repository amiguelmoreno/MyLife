import RoutineForm from "../components/Routine/RoutineForm";
import RoutineHabits from "../components/Routine/RoutineHabits";
import TimerDisplayTime from "../components/Timer/TimerDisplayTime";

function RoutinePage() {
  return (
    <div className='p-4 pb-20'>
      <h1 className='text-center font-medium text-[1.8rem]'>
        Wednesday 3 February
      </h1>
      <RoutineHabits></RoutineHabits>
      <RoutineForm></RoutineForm>{" "}
      {<TimerDisplayTime size='small'></TimerDisplayTime>}
    </div>
  );
}

export default RoutinePage;
