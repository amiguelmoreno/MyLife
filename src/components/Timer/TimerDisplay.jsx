import { useTimer } from "../../contexts/timerContext";

const TimerDisplay = () => {
  const { state } = useTimer();

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div>
      <p>{formatTime(state.time)}</p>
    </div>
  );
};

export default TimerDisplay;
