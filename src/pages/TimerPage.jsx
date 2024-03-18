import SpotyBtn from "../components/Timer/SpotyBtn";
import TimerControls from "../components/Timer/TimerControls";
import TimerDisplay from "../components/Timer/TimerDisplay";
import TimerQuotes from "../components/Timer/TimerQuotes";
import { FormTimerProvider } from "../contexts/useFormTimerContext";

function TimerPage() {
  return (
    <div
      className={`relative flex items-center justify-center flex-col h-[100vh]  p-4  bg-[rgb(255,_255,_255)] bg-[url("/icons/timer-background.png")] bg-cover bg-bottom`}
    >
      <div className={`flex flex-col gap-8 justify-center items-center`}>
        <FormTimerProvider>
          <TimerDisplay></TimerDisplay>
          <TimerControls></TimerControls>
          <TimerQuotes></TimerQuotes>
          <SpotyBtn></SpotyBtn>
        </FormTimerProvider>
      </div>
    </div>
  );
}

export default TimerPage;
