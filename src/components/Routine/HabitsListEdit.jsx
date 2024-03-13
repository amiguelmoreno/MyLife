import { useTasks } from "../../contexts/routineContext";
import { MdOutlineEdit } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import RoutineForm from "./RoutineForm";
import { useState } from "react";

function HabitsListEdit({ isEditVisible, setEditVisible }) {
  const { tasks, addTask, setTasks } = useTasks();
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
        <div id='overlay' className=' overlay ' onClick={handleOverlayClick}>
          <div className='habitlist '>
            {tasks.map((task) => (
              <div key={task.id} className='habit'>
                <p>{task.title}</p>
                <div className='buttonslist'>
                  <button onClick={() => handleEdit(task.id)}>
                    <MdOutlineEdit />
                  </button>
                  <button onClick={() => handleDelete(task.id)}>
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
