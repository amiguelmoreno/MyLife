import { useTimer } from "../../contexts/timerContext";
import { useFormTimerContext } from "../../contexts/useFormTimerContext";

const TimerControls = () => {
  const { state, dispatch } = useTimer();
  const { handleSubmit } = useFormTimerContext();

  const onSubmitData = (data) => {
    const hoursToSec = +data.hour * 3600;
    const minToSec = +data.minutes * 60;

    const timeToAdd = hoursToSec + minToSec + +data.seconds;

    if (timeToAdd === 0) return;

    dispatch({ type: "UPDATETIME", payload: { timeToAdd } });
    dispatch({ type: "START" });
  };

  const startTimer = () => {
    dispatch({ type: "START" });
  };

  const stopTimer = () => {
    dispatch({ type: "STOP" });
  };

  const resetTimer = () => {
    dispatch({ type: "RESET" });
  };

  const restartTimer = () => {
    dispatch({ type: "RESET" });
    dispatch({ type: "START" });
  };

  return (
    <div className='flex gap-4'>
      <button
        onClick={resetTimer}
        className={` ${
          state.isRunning || state.time === state.initialTime
            ? "bg-[#ccc] cursor-not-allowed"
            : "bg-[rgb(255,48,48)]"
        }  text-[white] px-4 py-[0.4rem] rounded-[5px] w-24 [transition:all_0.4s]`}
        disabled={state.isRunning || state.time === state.initialTime}
      >
        Cancel
      </button>
      {state.isRunning && (
        <button
          onClick={stopTimer}
          className='  text-[white] bg-[#f39243] px-4 py-[0.4rem] rounded-[5px] w-24 [transition:all_0.4s]'
        >
          Pause
        </button>
      )}
      {!state.isRunning && state.time === state.initialTime && (
        <button
          onClick={handleSubmit(onSubmitData)}
          disabled={state.isRunning}
          className=' bg-[rgb(_0,_149,_255)] text-[white] px-4 py-[0.4rem] rounded-[5px] w-24 [transition:all_0.4s]'
        >
          Start
        </button>
      )}
      {!state.isRunning &&
        state.time !== state.initialTime &&
        state.time !== 0 && (
          <button
            onClick={startTimer}
            disabled={state.isRunning}
            className=' bg-[rgb(_0,_149,_255)] text-[white] px-4 py-[0.4rem] rounded-[5px] w-24 [transition:all_0.4s]'
          >
            Resume
          </button>
        )}
      {!state.isRunning && state.time === 0 && (
        <button
          onClick={restartTimer}
          disabled={state.isRunning}
          className=' bg-[rgb(_0,_149,_255)] text-[white] px-4 py-[0.4rem] rounded-[5px] w-24 [transition:all_0.4s]'
        >
          Restart
        </button>
      )}
    </div>
  );
};

export default TimerControls;
