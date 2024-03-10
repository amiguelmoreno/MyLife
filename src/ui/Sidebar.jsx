import { NavLink } from "react-router-dom";
import { IoIosTimer } from "react-icons/io";
import { MdOutlineTaskAlt } from "react-icons/md";
import { IoCalendarOutline } from "react-icons/io5";
import { LuAlarmClock } from "react-icons/lu";
import TimerRing from "../components/Timer/TimerDisplay";

function Sidebar() {
  return (
    <nav className='fixed bottom-0'>
      <ul className='flex justify-around items-center w-screen bg-[white] [transition:all_0.5s]'>
        <li className='flex justify-center w-full p-[0.7rem] text-[2rem] [transition:all_0.3s] hover:bg-[rgb(239,_239,_239)] hover:text-[rgb(0,_149,_255)]'>
          <NavLink to='/timer' className='w-full h-full flex justify-center'>
            <IoIosTimer />
          </NavLink>
        </li>
        <li className='flex justify-center w-full p-[0.7rem] text-[1.9rem] [transition:all_0.3s] hover:bg-[rgb(239,_239,_239)] hover:text-[rgb(0,_149,_255)]'>
          <NavLink to='/calendar' className='w-full h-full flex justify-center'>
            <IoCalendarOutline />
          </NavLink>
        </li>
        <li className='flex justify-center w-full p-[0.7rem] text-[1.9rem] [transition:all_0.3s] hover:bg-[rgb(239,_239,_239)] hover:text-[rgb(0,_149,_255)]'>
          <NavLink to='/tasks' className='w-full h-full flex justify-center'>
            <MdOutlineTaskAlt />
          </NavLink>
        </li>
        <li className='flex justify-center w-full p-[0.7rem] text-[1.9rem] [transition:all_0.3s] hover:bg-[rgb(239,_239,_239)] hover:text-[rgb(0,_149,_255)] '>
          <NavLink
            to='/routine'
            className={`w-full h-full flex justify-center`}
          >
            <LuAlarmClock />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
