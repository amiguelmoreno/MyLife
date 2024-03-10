import { FaBell } from "react-icons/fa";
import { useTimer } from "../../contexts/timerContext";

function TimeDisplayFinish() {
  const { state } = useTimer();

  const actualDate = new Date();
  const newDate = new Date(actualDate.getTime() + state.time * 1000);
  const formatedDate = newDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className='flex items-center font-medium text-[1.2rem] justify-center gap-2'>
      {formatedDate}
      <span>
        <FaBell />
      </span>
    </div>
  );
}

export default TimeDisplayFinish;
