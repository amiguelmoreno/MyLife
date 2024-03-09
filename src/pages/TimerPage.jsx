import TimerRing from "../components/Timer/TimerRing";
import SpotyBtn from "../components/Timer/SpotyBtn";

function TimerPage() {
  return (
    <div
      className={`flex items-center justify-center flex-col gap-8 h-full p-4 pt-40 bg-[rgb(255,_255,_255)] bg-[url("../public/icons/timer-background.png")] bg-cover bg-bottom`}
    >
      <TimerRing></TimerRing>
      <SpotyBtn></SpotyBtn>
    </div>
  );
}

export default TimerPage;
