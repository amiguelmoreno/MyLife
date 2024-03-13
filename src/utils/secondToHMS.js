function secondstoAHMS(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const formatearNumero = (number) => (number < 10 ? `0${number}` : number);

  return {
    hours: formatearNumero(hours),
    minutes: formatearNumero(minutes),
    seconds: formatearNumero(remainingSeconds),
  };
}

export default secondstoAHMS;
