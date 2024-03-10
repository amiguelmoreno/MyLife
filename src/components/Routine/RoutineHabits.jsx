function RoutineHabits() {
  return (
    <section className='flex flex-col gap-4 mt-8'>
      <article className='flex flex-col gap-2 bg-[rgba(188,35,178,0.67)] p-2 rounded-[10px]'>
        <div className='flex items-center font-medium gap-2 text-[1.2rem] taskdone'>
          <input
            className='checked:bg-blue-500 checked:border-blue-700 checked:text-white appearance-none w-[25px] h-[25px] border-[2px] border-[solid] border-[#cccccc9a] bg-[#fff] cursor-pointer rounded-[100%]'
            name='habit1'
            type='checkbox'
          />
          <p>Morning Routine</p>
        </div>
        <div className='flex items-center pl-[1.3rem] gap-2'>
          <input
            className='checked:bg-blue-500 checked:border-blue-700 checked:text-white appearance-none w-[25px] h-[25px] border-[2px] border-[solid] border-[#cccccc9a] bg-[#fff] cursor-pointer rounded-[100%]'
            name='habit1'
            type='checkbox'
          />
          <p>Stretch</p>
        </div>
        <div className='flex items-center pl-[1.3rem] gap-2'>
          <input
            className='checked:bg-blue-500 checked:border-blue-700 checked:text-white appearance-none w-[25px] h-[25px] border-[2px] border-[solid] border-[#cccccc9a] bg-[#fff] cursor-pointer rounded-[100%]'
            name='habit1'
            type='checkbox'
          />
          <p>Meditate</p>
        </div>
        <div className='flex items-center pl-[1.3rem] gap-2'>
          <input
            className='checked:bg-blue-500 checked:border-blue-700 checked:text-white appearance-none w-[25px] h-[25px] border-[2px] border-[solid] border-[#cccccc9a] bg-[#fff] cursor-pointer rounded-[100%]'
            name='habit1'
            type='checkbox'
          />
          <p>Read advices</p>
        </div>
        <div className='flex items-center pl-[1.3rem] gap-2'>
          <input
            className='checked:bg-blue-500 checked:border-blue-700 checked:text-white appearance-none w-[25px] h-[25px] border-[2px] border-[solid] border-[#cccccc9a] bg-[#fff] cursor-pointer rounded-[100%]'
            name='habit1'
            type='checkbox'
          />
          <p>Hang in bar</p>
        </div>
      </article>
    </section>
  );
}

export default RoutineHabits;
