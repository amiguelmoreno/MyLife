import { useTimer } from "../../contexts/timerContext";

function TimerDisplayTime({ size }) {
  const { state } = useTimer();

  const hours = Math.floor(state.time / 3600);
  const minutes = Math.floor((state.time % 3600) / 60);
  const seconds = state.time % 60;

  return (
    <div
      className={`flex items-center justify-center  font-medium gap-[0.2rem] ${
        size === "small"
          ? "w-[7rem] absolute top-[0] left-[0] bg-[#0095ff] text-[white] pt-[0rem] pr-[0.6rem] pb-[0] pl-[0.2rem] rounded-tl-[0] rounded-br-[10px] rounded-tr-[0] rounded-bl-[0] text-[1rem]"
          : "text-[3.2rem]"
      }`}
    >
      {`${String(hours).padStart(2, "0")} : ${String(minutes).padStart(
        2,
        "0"
      )} : ${String(seconds).padStart(2, "0")}`}
    </div>
  );
}

export default TimerDisplayTime;
