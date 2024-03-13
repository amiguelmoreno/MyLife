import { FaPlus } from "react-icons/fa6";

function AddButton({ setIsFormVisible }) {
  return (
    <button
      className='googlebtn'
      onClick={() => setIsFormVisible((prev) => !prev)}
    >
      <FaPlus />
    </button>
  );
}

export default AddButton;
