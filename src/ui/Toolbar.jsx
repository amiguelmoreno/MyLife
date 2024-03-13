import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Toolbar({ type }) {
  return (
    <div className='fixed flex items-center justify-center gap-4 bottom-[4.5rem] px-4 py-[0] left-[0] w-full'>
      {type === "routine" && (
        <button className='bg-[#0095ff] text-[1.5rem] px-[0.4rem] py-[0]   border-[2px] border-[solid] border-[#0095ff] text-[white] rounded-[5px] p-[0.1rem] [box-shadow:rgba(149,_157,_165,_0.2)_0px_8px_24px] [transition:all_0.3s] active:[box-shadow:unset] '>
          Edit Habits
        </button>
      )}
    </div>
  );
}

export default Toolbar;
