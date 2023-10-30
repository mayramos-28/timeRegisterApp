
export function calculateDifferenceTime(startTime: Date | null, endTime: Date | null) {
  if (startTime && endTime) {
    const differenceInMillis = endTime.getTime() - startTime.getTime();
    const hours = Math.floor(differenceInMillis / 3600000); // 3600000 ms en una hora
    const minutes = Math.floor((differenceInMillis % 3600000) / 60000); // 60000 ms en un minuto
    const seconds = Math.floor((differenceInMillis % 60000) / 1000); // 1000 ms en un segundo
    return `${hours}h ${minutes}m ${seconds}s`;
  } else {
    return '';
  }
}

export function padZero(value: number): string {
  return value < 10 ? '0' + value : value.toString();
}
export function calculateTotalTime(initialValue: Date | null, finalValue: Date | null, ) {
  if (initialValue && finalValue) {
    const differenceInMillis = finalValue.getTime() - initialValue.getTime();
    const seconds = Math.floor((differenceInMillis / 1000) % 60);
    const minutes = Math.floor((differenceInMillis / (1000 * 60)) % 60);
    const hours = Math.floor(differenceInMillis / (1000 * 60 * 60));
    const totalTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    return totalTime;
  }
  return '';
}

export function formatTime(date: Date): string {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
}

export function getCurrentDate(initialValue:Date | null) {
  if (initialValue) {
    return (initialValue.getMonth() + 1) + '/' + initialValue.getDate() + '/' + initialValue.getFullYear();
  } else {
    return '';
  }
}
