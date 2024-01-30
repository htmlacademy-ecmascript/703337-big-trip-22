import dayjs from 'dayjs';
import 'dayjs/locale/ru';
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

const sortTypePrice = (a, b) => b.basePrice - a.basePrice;


const sortTypeTime = (a, b) => {
  const durationA = dayjs(a.dateTo).diff(dayjs(a.dateFrom));
  const durationB = dayjs(b.dateTo).diff(dayjs(b.dateFrom));
  return durationB - durationA;
};

const isDatesFuture = (point) => {
  const now = dayjs();
  const dateStart = dayjs(point.dateFrom);
  return dateStart.isAfter(now);
};

const isDatesPast = (point) => {
  const now = dayjs();
  const dateEnd = dayjs(point.dateTo);
  return dateEnd.isBefore(now);
};

const isDatesPresent = (point) => {
  const now = dayjs();
  const dateStart = dayjs(point.dateFrom);
  const dateEnd = dayjs(point.dateTo);
  if((dateStart.isBefore(now) || dateStart.isSame(now)) && (dateEnd.isAfter(now)
  || dateEnd.isSame(now))){
    return true;
  }
};

export {humanizeEventDueDate, humanizeEventEditDate, sortTypeTime, duration, sortTypePrice, isDatesFuture,
  isDatesPast, isDatesPresent};
