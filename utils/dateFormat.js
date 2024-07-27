// utils/dateFormat.js

const addLeadingZero = (num) => (num < 10 ? `0${num}` : num);

module.exports = (timestamp) => {
  const date = new Date(timestamp);

  const year = date.getFullYear();
  const month = addLeadingZero(date.getMonth() + 1);
  const day = addLeadingZero(date.getDate());
  const hours = addLeadingZero(date.getHours());
  const minutes = addLeadingZero(date.getMinutes());
  const seconds = addLeadingZero(date.getSeconds());

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};
