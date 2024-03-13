import { useTimer } from "../../contexts/timerContext";
import TimerDisplayFinish from "./TimerDisplayFinish";
import TimerDisplayTime from "./TimerDisplayTime";
import TimerForm from "./TimerForm";

function TimerDisplay() {
  const { state } = useTimer();

  return (
    <div className='relative flex flex-col justify-center items-center gap-4'>
      <div
        className={`absolute same ${
          state.isRunning || state.time !== state.initialTime
            ? "opacity-100 [transition:all_1s]"
            : "opacity-0 -translate-y-80 [transition:all_0.5s] "
        }`}
      >
        <TimerDisplayFinish></TimerDisplayFinish>
        <TimerDisplayTime></TimerDisplayTime>
      </div>

      <div
        className={`abssolute same ${
          !state.isRunning && state.time === state.initialTime
            ? "opacity-100 [transition:all_1s]"
            : "opacity-0 -translate-y-80 [transition:all_0.5s] "
        }`}
      >
        <TimerForm></TimerForm>
      </div>
    </div>
  );
}

export default TimerDisplay;
