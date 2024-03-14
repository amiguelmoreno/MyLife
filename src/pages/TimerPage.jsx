import SpotyBtn from "../components/Timer/SpotyBtn";
import TimerControls from "../components/Timer/TimerControls";
import TimerDisplay from "../components/Timer/TimerDisplay";
import TimerQuotes from "../components/Timer/TimerQuotes";
import { FormTimerProvider } from "../contexts/useFormTimerContext";

function TimerPage() {
  return (
    <div
      className={`relative flex items-center justify-center flex-col gap-8  p-4  bg-[rgb(255,_255,_255)] bg-[url("/icons/timer-background.png")] bg-cover bg-bottom`}
    >
      <FormTimerProvider>
        <div className='absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2'>
          <TimerDisplay></TimerDisplay>
          <TimerControls></TimerControls>
          <TimerQuotes></TimerQuotes>
        </div>
        <SpotyBtn></SpotyBtn>
      </FormTimerProvider>
    </div>
  );
}

export default TimerPage;
