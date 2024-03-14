export function sortByHour(taskA, taskB) {
  const [hourA, minuteA] = taskA.hour.split(":").map(Number);
  const [hourB, minuteB] = taskB.hour.split(":").map(Number);

  if (hourA !== hourB) {
    return hourA - hourB;
  } else {
    return minuteA - minuteB;
  }
}
