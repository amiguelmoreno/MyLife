import TimerDisplayTime from "../components/Timer/TimerDisplayTime";
import { useTimer } from "../contexts/timerContext";

function CalendarPage() {
  const { state } = useTimer();

  return (
    <div>
      Calendar
      {<TimerDisplayTime size='small'></TimerDisplayTime>}
    </div>
  );
}

export default CalendarPage;
