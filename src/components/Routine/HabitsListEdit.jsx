import { useTasks } from "../../contexts/routineContext";
import { MdOutlineEdit } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import RoutineForm from "./RoutineForm";
import { useState } from "react";
import { convertColorToRgb } from "../../utils/convertColorToRgb";

function HabitsListEdit({ isEditVisible, setEditVisible }) {
  const { tasks, setTasks } = useTasks();
  const [isFormVisible, setIsFormVisible] = useState();
  const [currentId, setCurrentId] = useState("");

  function handleDelete(id) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  function handleEdit(id) {
    setCurrentId(id);
    setIsFormVisible((prev) => !prev);
  }

  function handleOverlayClick(e) {
    if (e.target.id !== "overlay") return;

    setEditVisible((prev) => !prev);
  }

  return (
    <>
      {isEditVisible && (
        <div
          id='overlay'
          className='fixed flex items-center justify-center top-[0] left-[0] w-full h-screen bg-[rgba(155,_155,_155,_0.583)] backdrop-filter backdrop-blur-[5px] z-[150]'
          onClick={handleOverlayClick}
        >
          <div className='bg-[white] flex flex-col gap-[0.8rem] p-4 rounded-[10px] h-[30rem] overflow-scroll w-[90%] max-w-[40rem] '>
            {tasks.map((task) => (
              <div
                key={task.id}
                style={{
                  backgroundColor: `rgba(${convertColorToRgb(
                    task.color
                  )}, 0.4)`,
                }}
                className='flex px-4 py-[0.6rem] items-center rounded-[5px] gap-4 justify-between'
              >
                <p>{task.title}</p>
                <div className='flex gap-4'>
                  <button
                    className='[box-shadow:rgba(0,_0,_0,_0.35)_0px_5px_10px] p-[0.4rem] rounded-[5px] text-[black] bg-[white]'
                    onClick={() => handleEdit(task.id)}
                  >
                    <MdOutlineEdit />
                  </button>
                  <button
                    className='[box-shadow:rgba(0,_0,_0,_0.35)_0px_5px_10px] p-[0.4rem] rounded-[5px] text-[#ffffff] bg-[#fb4e4e]'
                    onClick={() => handleDelete(task.id)}
                  >
                    <FaRegTrashAlt />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {isFormVisible && (
        <RoutineForm
          isFormVisible={isFormVisible}
          setIsFormVisible={setIsFormVisible}
          taskId={currentId}
        ></RoutineForm>
      )}
    </>
  );
}

export default HabitsListEdit;
