import { generateRandomArrayElement } from '../utils/common';
import { NUMBERS_ID } from '../const';
const getRandomIdDest = generateRandomArrayElement(NUMBERS_ID);

const mockDestinations = [
  {
    id: `${getRandomIdDest()}`,
    description: 'Moscow, is a beautiful city, a true asian pearl, with crowded streets.',
    name: 'Moscow',
    pictures: [
      {
        src: 'img/photos/1.jpg',
        description: ' parliament building'
      }
    ]
  },
  {
    id: `${getRandomIdDest()}`,
    description: 'Krasnodar, is a beautiful city, a true asian pearl, with crowded streets.',
    name: 'Krasnodar',
    pictures: [
      {
        src: 'img/photos/2.jpg',
        description: ' parliament building'
      }
    ]
  },
  {
    id: `${getRandomIdDest()}`,
    description: 'Tomsk, is a beautiful city, a true asian pearl, with crowded streets.',
    name: 'Tomsk',
    pictures: [
      {
        src: 'img/photos/3.jpg',
        description: ' parliament building'
      }
    ]
  },
  {
    id: `${getRandomIdDest()}`,
    description: 'Norilsk, is a beautiful city, a true asian pearl, with crowded streets.',
    name: 'Norilsk',
    pictures: [
      {
        src: 'img/photos/4.jpg',
        description: 'parliament building'
      }
    ]
  },
  {
    id: `${getRandomIdDest()}`,
    description: 'Krasnoyarsk, is a beautiful city, a true asian pearl, with crowded streets.',
    name: 'Krasnoyarsk',
    pictures: [
      {
        src: 'img/photos/5.jpg',
        description: '$ame} parliament building'
      }
    ]
  },
  {
    id: `${getRandomIdDest()}`,
    description: 'Perm, is a beautiful city, a true asian pearl, with crowded streets.',
    name: 'Perm',
    pictures: [
      {
        src: `http://picsum.photos/300/200?r=${Math.random()}`,
        description: 'this.name} parliament building'
      }
    ]
  },
  {
    id: `${getRandomIdDest()}`,
    description: 'Voronej is a beautiful city, a true asian pearl, with crowded streets.',
    name: 'Voronej',
    pictures: [
      {
        src: `http://picsum.photos/300/200?r=${Math.random()}`,
        description: '$ parliament building'
      }
    ]
  },
];

const getDestination = (arrPoint) => {
  const destArray = [];
  for (let i = 0; i < arrPoint.length; i++){
    for(let j = 0; j < mockDestinations.length; j++){
      if(arrPoint[i] === mockDestinations[j].name){
        destArray[i] = structuredClone(mockDestinations[j]);
      }
    }
  }
  return destArray;
};


export{mockDestinations, getDestination};
