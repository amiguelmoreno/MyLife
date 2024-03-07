import TimerDisplay from "../components/Timer/TimerDisplay";
import TimerControls from "../components/Timer/TimerControls";
import { FaSpotify } from "react-icons/fa";
import { Link } from "react-router-dom";

function TimerPage() {
  return (
    <div className='section'>
      <TimerDisplay />
      <TimerControls />

      <a
        href='https://open.spotify.com/'
        target='_blank'
        className='absolute top-[0] right-[0] m-4 p-[0.2rem] rounded-[10px] text-[2rem] bg-[black] text-[#1db954]'
      >
        <FaSpotify />
      </a>
    </div>
  );
}

export default TimerPage;
