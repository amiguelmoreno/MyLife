function RoutineHabits() {
  return (
    <section className='habcontainer'>
      <article className='habit'>
        <div className='habitmain taskdone'>
          <input name='habit1' type='checkbox' />
          <p>Morning Routine</p>
        </div>
        <div className='subhabit'>
          <input name='habit1' type='checkbox' />
          <p>Stretch</p>
        </div>
        <div className='subhabit'>
          <input name='habit1' type='checkbox' />
          <p>Meditate</p>
        </div>
        <div className='subhabit'>
          <input name='habit1' type='checkbox' />
          <p>Read advices</p>
        </div>
        <div className='subhabit'>
          <input name='habit1' type='checkbox' />
          <p>Hang in bar</p>
        </div>
      </article>
    </section>
  );
}

export default RoutineHabits;
