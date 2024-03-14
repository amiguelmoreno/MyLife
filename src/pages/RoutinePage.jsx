import { useState } from "react";
import RoutineForm from "../components/Routine/RoutineForm";
import RoutineHabits from "../components/Routine/RoutineHabits";
import TimerDisplayTime from "../components/Timer/TimerDisplayTime";
import { useTasks } from "../contexts/routineContext";
import AddButton from "../ui/AddButton";
import Toolbar from "../ui/Toolbar";
import { formatDate } from "../utils/dates";
import { useTimer } from "../contexts/timerContext";
import HabitsListEdit from "../components/Routine/HabitsListEdit";

function RoutinePage() {
  const { tasks } = useTasks();
  const { state } = useTimer();
  const [isFormVisible, setIsFormVisible] = useState();
  const [isEditVisible, setEditVisible] = useState();

  return (
    <div className='pt-8 px-[0.8rem] pb-28 h-[100%]'>
      <h1 className='text-center font-medium text-[1.8rem]'>{formatDate()}</h1>
      <RoutineHabits></RoutineHabits>
      {tasks.length > 0 && (
        <HabitsListEdit
          isEditVisible={isEditVisible}
          setEditVisible={setEditVisible}
        ></HabitsListEdit>
      )}
      {isFormVisible && (
        <RoutineForm
          isFormVisible={isFormVisible}
          setIsFormVisible={setIsFormVisible}
        ></RoutineForm>
      )}
      <AddButton setIsFormVisible={setIsFormVisible}></AddButton>
      {tasks.length > 0 && (
        <Toolbar type='routine' setEditVisible={setEditVisible}></Toolbar>
      )}
      {(state.isRunning || state.time !== state.initialTime) && (
        <TimerDisplayTime size='small'></TimerDisplayTime>
      )}
    </div>
  );
}

export default RoutinePage;
