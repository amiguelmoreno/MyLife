import { useTimer } from "../../contexts/timerContext";

const TimerControls = () => {
  const { state, dispatch } = useTimer();

  const startTimer = () => {
    dispatch({ type: "START" });
  };

  const stopTimer = () => {
    dispatch({ type: "STOP" });
  };

  const resetTimer = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <div className='flex gap-4'>
      <button
        onClick={resetTimer}
        className={` ${
          state.isRunning || state.time === state.initialTime
            ? "bg-[#ccc] cursor-not-allowed"
            : ""
        } bg-[rgb(255,48,48)] text-[white] px-4 py-[0.4rem] rounded-[5px] w-24 [transition:all_0.4s]`}
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
          onClick={startTimer}
          disabled={state.isRunning}
          className=' bg-[rgb(_0,_149,_255)] text-[white] px-4 py-[0.4rem] rounded-[5px] w-24 [transition:all_0.4s]'
        >
          Start
        </button>
      )}
      {!state.isRunning && state.time !== state.initialTime && (
        <button
          onClick={startTimer}
          disabled={state.isRunning}
          className=' bg-[rgb(_0,_149,_255)] text-[white] px-4 py-[0.4rem] rounded-[5px] w-24 [transition:all_0.4s]'
        >
          Resume
        </button>
      )}
    </div>
  );
};

export default TimerControls;
