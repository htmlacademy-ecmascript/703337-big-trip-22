import dayjs from 'dayjs';
const DATE_FORMAT = 'MMM D';
const DATE_EDIT_FORMAT = 'DD/MM/YY HH:mm';

function humanizeEventDueDate(dueDate) {
  return dueDate ? dayjs(dueDate).format(DATE_FORMAT) : '';
}

function humanizeEventEditDate(dueDate){
  return dueDate ? dayjs(dueDate).format(DATE_EDIT_FORMAT) : '';
}

function duration(dateFrom, dateTo){
  const ms = dayjs(dateTo).diff(dayjs(dateFrom));
  const daysMs = ms % (24 * 60 * 60 * 1000);
  const hoursMs = ms % (60 * 60 * 1000);

  const separatedDate = (num) => num < 0 ? 0 : num;

  const days = separatedDate(Math.floor(ms / (24 * 60 * 60 * 1000)));
  const hours = separatedDate(Math.floor(daysMs / (60 * 60 * 1000)));
  const minutes = separatedDate(Math.floor(hoursMs / (60 * 1000)));
  return {
    days,
    hours,
    minutes
  };
}

function sortTypePrice(a, b) {

  return b.basePrice - a.basePrice;
}

function sortTypeTime(a, b){
  const durationA = dayjs(a.dateTo).diff(dayjs(a.dateFrom));
  const durationB = dayjs(b.dateTo).diff(dayjs(b.dateFrom));
  //console.log(durationA - durationB)
  return durationB - durationA;
}

export {humanizeEventDueDate, humanizeEventEditDate, sortTypeTime, duration, sortTypePrice};
