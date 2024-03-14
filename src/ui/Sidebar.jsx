import { NavLink } from "react-router-dom";
import { IoIosTimer } from "react-icons/io";
import { LuAlarmClock } from "react-icons/lu";

function Sidebar() {
  return (
    <nav className='fixed bottom-0 z-20 border-t-[1px]  border-t-[#ccc] '>
      <ul className='flex justify-around items-center w-screen bg-[white] [transition:all_0.5s]'>
        <li className='flex justify-center w-full text-[2rem] [transition:all_0.3s] hover:bg-[rgb(239,_239,_239)] hover:text-[rgb(0,_149,_255)]'>
          <NavLink
            to='/timer'
            className='w-full h-full flex justify-center  p-[0.7rem]'
          >
            <IoIosTimer />
          </NavLink>
        </li>

        <li className='flex justify-center w-full  text-[1.9rem] [transition:all_0.3s] hover:bg-[rgb(239,_239,_239)] hover:text-[rgb(0,_149,_255)] '>
          <NavLink
            to='/routine'
            className={`w-full h-full flex justify-center p-[0.7rem]`}
          >
            <LuAlarmClock />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
