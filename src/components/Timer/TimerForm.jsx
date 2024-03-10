import { useForm } from "react-hook-form";
import { useFormTimerContext } from "../../contexts/useFormTimerContext";
import { useTimer } from "../../contexts/timerContext";

const TimerForm = () => {
  const { state } = useTimer();

  function convertirSegundosAHMS(segundos = state.initialTime) {
    if (segundos < 0) {
      throw new Error("El tiempo en segundos no puede ser negativo.");
    }

    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const segundosRestantes = segundos % 60;

    const formatearNumero = (numero) => (numero < 10 ? `0${numero}` : numero);

    return {
      horas: formatearNumero(horas),
      minutos: formatearNumero(minutos),
      segundos: formatearNumero(segundosRestantes),
    };
  }

  const { register, handleSubmit, setValue, formState, errors } =
    useFormTimerContext();

  const handleInputChange = (e) => {
    setValue(e.target.id, e.target.value);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form
        className='flex items-center gap-4 pl-4'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='w-20 flex flex-col items-center'>
          <label className='pr-[0.8rem]'>hr</label>
          <input
            className='appearance-none text-[3.2rem] font-medium text-center w-24'
            id='hour'
            type='number'
            placeholder='00'
            defaultValue={convertirSegundosAHMS().horas}
            onChange={handleInputChange}
            {...register("hour", {
              max: 99,
              min: 0,
            })}
          />
        </div>
        <p className='text-[3.2rem] self-end pb-[0.2rem] pr-2'>:</p>
        <div className='w-20 flex flex-col items-center'>
          <label className='pr-[0.8rem]'>min</label>
          <input
            className='appearance-none text-[3.2rem] font-medium text-center w-24'
            id='minutes'
            type='number'
            placeholder='00'
            defaultValue={convertirSegundosAHMS().minutos}
            onChange={handleInputChange}
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
        </div>
        <p className='text-[3.2rem] self-end pb-[0.2rem] pr-2'>:</p>
        <div className='w-20 flex flex-col items-center'>
          <label className='pr-[0.8rem]'>sec</label>
          <input
            className='appearance-none text-[3.2rem] font-medium text-center w-24'
            id='seconds'
            type='number'
            placeholder='00'
            defaultValue={convertirSegundosAHMS().segundos}
            onChange={handleInputChange}
            {...register("seconds", { max: 59, min: 0 })}
          />
        </div>
      </form>
    </div>
  );
};

export default TimerForm;
