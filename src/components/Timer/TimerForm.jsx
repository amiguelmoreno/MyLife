import { useFormTimerContext } from "../../contexts/useFormTimerContext";
import { useTimer } from "../../contexts/timerContext";
import { useEffect } from "react";
import secondtoHMS from "../../utils/secondToHMS.js";

const TimerForm = () => {
  const { state } = useTimer();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormTimerContext();

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
      }
    };

    document.addEventListener("keypress", handleKeyPress);

    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, []);

  return (
    <div>
      <form className='flex items-center gap-4 pl-4' onSubmit={handleSubmit}>
        <button type='submit'></button>
        <div className='w-20 flex flex-col items-center'>
          <label className='pr-[0.8rem]'>hr</label>
          <input
            className='appearance-none text-[3.2rem] font-medium text-center w-24'
            type='number'
            placeholder='00'
            defaultValue={secondtoHMS(state.initialTime).hours}
            {...register("hour", {
              max: 99,
              min: 0,
            })}
          />
          {errors && <p>{errors?.hours?.message}</p>}
        </div>
        <p className='text-[3.2rem] self-end pb-[0.2rem] pr-2'>:</p>
        <div className='w-20 flex flex-col items-center'>
          <label className='pr-[0.8rem]'>min</label>
          <input
            className='appearance-none text-[3.2rem] font-medium text-center w-24'
            type='number'
            placeholder='00'
            defaultValue={secondtoHMS(state.initialTime).minutes}
            {...register("minutes", {
              max: {
                value: 59,
                message: "Less than 59 min",
              },
              min: {
                value: 0,
                message: "Less than 0 min",
              },
            })}
          />
          {errors && <p>{errors?.minutes?.message}</p>}
        </div>
        <p className='text-[3.2rem] self-end pb-[0.2rem] pr-2'>:</p>
        <div className='w-20 flex flex-col items-center'>
          <label className='pr-[0.8rem]'>sec</label>
          <input
            className='appearance-none text-[3.2rem] font-medium text-center w-24'
            type='number'
            placeholder='00'
            defaultValue={secondtoHMS(state.initialTime).seconds}
            {...register("seconds", { max: 59, min: 0 })}
          />
          {errors && <p>{errors?.seconds?.message}</p>}
        </div>
      </form>
    </div>
  );
};

export default TimerForm;
