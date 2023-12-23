import dayjs from 'dayjs';
const DATE_FORMAT = 'MMM D';
const DATE_EDIT_FORMAT = 'DD/MM/YY HH:mm';

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

const generateRandomArrayElement = (arr) => {
  const array = [...arr];
  return function (){
    const randomElement = getRandomArrayElement(array);
    const index = array.indexOf(randomElement);
    array.splice(index, 1);
    return randomElement;
  };
};
function humanizeEventDueDate(dueDate) {
  return dueDate ? dayjs(dueDate).format(DATE_FORMAT) : '';
}

function humanizeEventEditDate(dueDate){
  return dueDate ? dayjs(dueDate).format(DATE_EDIT_FORMAT) : '';
}

export {generateRandomArrayElement,getRandomArrayElement, humanizeEventDueDate, humanizeEventEditDate};
