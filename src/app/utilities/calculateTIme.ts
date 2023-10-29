
export function calculateDifferenceTime( startTime:Date |null, endTime:Date | null){
  if (startTime && endTime) {
    const differenceInMillis = endTime.getTime() - startTime.getTime();
    const hours = Math.floor(differenceInMillis / 3600000); // 3600000 ms en una hora
    const minutes = Math.floor((differenceInMillis % 3600000) / 60000); // 60000 ms en un minuto
    const seconds = Math.floor((differenceInMillis % 60000) / 1000); // 1000 ms en un segundo
    return`${hours}h ${minutes}m ${seconds}s`;
  } else {
    return '';
  }
}