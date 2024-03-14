function RoutineSubtask({ subtask }) {
  return (
    <div className={`flex items-center pl-[1.3rem] gap-2`}>
      <p>- {subtask}</p>
    </div>
  );
}

export default RoutineSubtask;
