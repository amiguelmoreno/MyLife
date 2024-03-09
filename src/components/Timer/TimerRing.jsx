import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useTimer } from "../../contexts/timerContext";
import { FaBell } from "react-icons/fa";
import TimerControls from "./TimerControls";

function TimerRing() {
  const { state, dispatch } = useTimer();

  const children = ({ remainingTime }) => {
    // time
    const hours = Math.floor(remainingTime / 3600);
    const minutes = Math.floor((remainingTime % 3600) / 60);
    const seconds = remainingTime % 60;

    // time will finish
    const actualDate = new Date();
    const newDate = new Date(actualDate.getTime() + remainingTime * 1000);
    const formatedDate = newDate.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    return (
      <div className='flex flex-col justify-center items-center gap-4'>
        <div className='flex items-center font-medium text-[1.2rem] justify-center gap-2'>
          {formatedDate}
          <span>
            <FaBell />
          </span>
        </div>
        <div className='flex items-center justify-center text-[3.2rem] font-medium gap-[0.2rem]'>
          {`${String(hours).padStart(2, "0")}:${String(minutes).padStart(
            2,
            "0"
          )}:${String(seconds).padStart(2, "0")}`}
        </div>
        <TimerControls />
      </div>
    );
  };

  return (
    <>
      <CountdownCircleTimer
        key={state.key}
        isPlaying={state.isRunning}
        duration={state.initialTime}
        colors='rgb(0,149,255)'
        updateInterval={1}
        size={340}
        onComplete={() => {
          return {
            shouldRepeat: true,
            newInitialRemainingTime: state.initialTime,
          };
        }}
        rotation='counterclockwise'
      >
        {children}
      </CountdownCircleTimer>
    </>
  );
}

export default TimerRing;
