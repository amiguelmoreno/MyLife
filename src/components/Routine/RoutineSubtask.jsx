import { useEffect, useState } from "react";

function RoutineSubtask({ isChecked, subtask, setIsChecked }) {
  const [isSubtaskChecked, setIsSubtaskChecked] = useState(isChecked);

  useEffect(() => {
    if (isSubtaskChecked === false) {
      setIsChecked(false);
    }
  }, [isSubtaskChecked]);

  useEffect(() => {
    if (isChecked === true) setIsSubtaskChecked(isChecked);
  }, [isChecked]);

  function handleChecked() {
    setIsSubtaskChecked((prevCheck) => !prevCheck);
  }

  return (
    <div
      className={`${
        (isSubtaskChecked || isChecked) && "taskdone"
      } flex items-center pl-[1.3rem] gap-2`}
    >
      <input
        className='checked:bg-[#5b5b5b9a] checked:border-[#3232329a] checked:text-white appearance-none w-[25px] h-[25px] border-[2px]  border-[#cccccc9a] bg-[#fff] cursor-pointer rounded-[100%]'
        name='habit1'
        type='checkbox'
        checked={isSubtaskChecked || isChecked}
        onChange={handleChecked}
      />
      <p>{subtask}</p>
    </div>
  );
}

export default RoutineSubtask;
