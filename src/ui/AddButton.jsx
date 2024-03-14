import { FaPlus } from "react-icons/fa6";

function AddButton({ setIsFormVisible }) {
  return (
    <button
      className='active:[box-shadow:unset] fixed bottom-12 right-[0] text-[white] [box-shadow:rgba(0,_0,_0,_0.35)_0px_5px_10px] m-[1.2rem] bg-[#0095ff] p-[0.7rem] text-[1.6rem] rounded-[100px] [transition:all_0.5s]'
      onClick={() => setIsFormVisible((prev) => !prev)}
    >
      <FaPlus />
    </button>
  );
}

export default AddButton;
