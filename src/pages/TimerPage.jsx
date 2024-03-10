import TimerRing from "../components/Timer/TimerDisplay";
import SpotyBtn from "../components/Timer/SpotyBtn";
import TimerControls from "../components/Timer/TimerControls";
import TimerDisplay from "../components/Timer/TimerDisplay";
import TimerQuotes from "../components/Timer/TimerQuotes";
import { FormTimerProvider } from "../contexts/useFormTimerContext";

function TimerPage() {
  return (
    <div
      className={`flex items-center justify-center flex-col gap-8 h-full p-4 pt-40 bg-[rgb(255,_255,_255)] bg-[url("/icons/timer-background.png")] bg-cover bg-bottom`}
    >
      <FormTimerProvider>
        <TimerDisplay></TimerDisplay>
        <TimerControls></TimerControls>
        <TimerQuotes></TimerQuotes>
        <SpotyBtn></SpotyBtn>
      </FormTimerProvider>
    </div>
  );
}

export default TimerPage;
