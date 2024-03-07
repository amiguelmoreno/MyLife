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
    <div>
      <button onClick={resetTimer} className='boton'>
        Cancel
      </button>
      {state.isRunning && (
        <button onClick={stopTimer} className='boton'>
          Pause
        </button>
      )}
      {!state.isRunning && (
        <button
          onClick={startTimer}
          disabled={state.isRunning}
          className='boton'
        >
          Start
        </button>
      )}
    </div>
  );
};

export default TimerControls;
