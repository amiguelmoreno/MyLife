function Toolbar({ type, setEditVisible }) {
  function handleVisible() {
    setEditVisible((prev) => !prev);
  }

  return (
    <div className='fixed gap-4 bottom-[4.2rem] px-4 py-[0] left-[0] '>
      {type === "routine" && (
        <button
          className='bg-[#0095ff] text-[1.2rem] px-[0.4rem] py-[0] border-[2px] border-[solid] border-[#0095ff] text-[white] rounded-[5px] p-[0.1rem] [box-shadow:rgba(0,_0,_0,_0.35)_0px_5px_10px] [transition:all_0.3s] active:[box-shadow:unset] '
          onClick={handleVisible}
        >
          Edit Habits
        </button>
      )}
    </div>
  );
}

export default Toolbar;
