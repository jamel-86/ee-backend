// takes 2 unix timestamps and returns the duration between them in HH:MM format
function getDuration(dateAndTime1, dateAndTime2) {
  const diffInMs = dateAndTime2 - dateAndTime1;
  const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
  const hours = Math.floor(diffInMinutes / 60);
  const minutes = diffInMinutes % 60;
  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;
}

const dateAndTime1 = 1682500983000;
const dateAndTime2 = 1682652981000;
const duration = getDuration(dateAndTime1, dateAndTime2);
console.log(duration);
