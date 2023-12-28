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

export {generateRandomArrayElement,getRandomArrayElement};
