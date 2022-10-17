function formatTime(time) {
  const hours = (Math.floor(time / (60 * 60)));
  const minutes = (Math.floor((time % (60 * 60)) / 60)).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping:false });
  const seconds = (time % 60).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping:false });
  return `${hours}:${minutes}:${seconds}`;
}

export default formatTime;
