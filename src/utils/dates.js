export function getCurrentDay() {
  const daysOfWeek = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  const currentDate = new Date();
  const currentDay = daysOfWeek[currentDate.getDay()];

  return currentDay;
}

export function formatDate() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentDate = new Date();

  const dayOfWeek = daysOfWeek[currentDate.getDay()];
  const dayOfMonth = currentDate.getDate();
  const month = months[currentDate.getMonth()];

  const formattedDate = `${dayOfWeek} ${dayOfMonth} ${month}`;

  return formattedDate;
}

export function generateRandomHour() {
  const hour = Math.floor(Math.random() * 24); // Genera un número aleatorio entre 0 y 23
  const minute = Math.floor(Math.random() * 60); // Genera un número aleatorio entre 0 y 59

  // Formatea la hora y el minuto con ceros a la izquierda si es necesario
  const formattedHour = hour < 10 ? `0${hour}` : `${hour}`;
  const formattedMinute = minute < 10 ? `0${minute}` : `${minute}`;

  return `${formattedHour}:${formattedMinute}`;
}
