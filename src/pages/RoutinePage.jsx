import RoutineForm from "../components/Routine/RoutineForm";
import RoutineHabits from "../components/Routine/RoutineHabits";

function RoutinePage() {
  return (
    <div className='section'>
      <h1 className='dayroutine'>Wednesday 3 February</h1>
      <RoutineHabits></RoutineHabits>
      <RoutineForm></RoutineForm>
    </div>
  );
}

export default RoutinePage;
