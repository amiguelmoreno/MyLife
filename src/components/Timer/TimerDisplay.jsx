import { useTimer } from "../../contexts/timerContext";
import TimerDisplayFinish from "./TimerDisplayFinish";
import TimerDisplayTime from "./TimerDisplayTime";
import TimerForm from "./TimerForm";

function TimerDisplay() {
  const { state } = useTimer();

  return (
    <div className='flex flex-col justify-center items-center gap-4'>
      <div
        className={`same ${
          state.isRunning || state.time !== state.initialTime
            ? "opacity-100 [transition:all_1s]"
            : "opacity-0 -translate-y-80 [transition:all_0.5s] h-[0]"
        }`}
      >
        <TimerDisplayFinish></TimerDisplayFinish>
        <TimerDisplayTime></TimerDisplayTime>
      </div>

      <div
        className={`same ${
          !state.isRunning && state.time === state.initialTime
            ? "opacity-100 [transition:all_1s]"
            : "opacity-0 -translate-y-80 [transition:all_0.5s] h-[0]"
        }`}
      >
        <TimerForm></TimerForm>
      </div>
    </div>
  );
}

export default TimerDisplay;
