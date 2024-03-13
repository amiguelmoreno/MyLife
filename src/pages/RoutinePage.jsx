import { useState } from "react";
import RoutineForm from "../components/Routine/RoutineForm";
import RoutineHabits from "../components/Routine/RoutineHabits";
import TimerDisplayTime from "../components/Timer/TimerDisplayTime";
import { TaskProvider } from "../contexts/routineContext";
import AddButton from "../ui/AddButton";
import Toolbar from "../ui/Toolbar";
import { formatDate } from "../utils/dates";

function RoutinePage() {
  const [isFormVisible, setIsFormVisible] = useState();

  return (
    <div className='pt-8 px-[0.8rem] pb-24'>
      <TaskProvider>
        <h1 className='text-center font-medium text-[1.8rem]'>
          {formatDate()}
        </h1>
        <RoutineHabits></RoutineHabits>
        <RoutineForm
          isFormVisible={isFormVisible}
          setIsFormVisible={setIsFormVisible}
        ></RoutineForm>
        <AddButton setIsFormVisible={setIsFormVisible}></AddButton>
        <Toolbar type='routine'></Toolbar>
      </TaskProvider>
      {<TimerDisplayTime size='small'></TimerDisplayTime>}
    </div>
  );
}

export default RoutinePage;
