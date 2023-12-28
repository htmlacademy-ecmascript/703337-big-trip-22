import dayjs from 'dayjs';
const DATE_FORMAT = 'MMM D';
const DATE_EDIT_FORMAT = 'DD/MM/YY HH:mm';

function humanizeEventDueDate(dueDate) {
  return dueDate ? dayjs(dueDate).format(DATE_FORMAT) : '';
}

function humanizeEventEditDate(dueDate){
  return dueDate ? dayjs(dueDate).format(DATE_EDIT_FORMAT) : '';
}

export {humanizeEventDueDate, humanizeEventEditDate};
