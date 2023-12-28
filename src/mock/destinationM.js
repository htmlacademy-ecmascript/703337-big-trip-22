import { generateRandomArrayElement } from '../utils';
import { NUMBERS_ID } from '../const';
const getRandomIdDest = generateRandomArrayElement(NUMBERS_ID);

const mockDestinations = [
  {
    id: `${getRandomIdDest()}`,
    description: 'Moscow, is a beautiful city, a true asian pearl, with crowded streets.',
    name: 'Moscow',
    pictures: [
      {
        src: `http://picsum.photos/300/200?r=${Math.random()}`,
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
        src: `http://picsum.photos/300/200?r=${Math.random()}`,
        description: '{} parliament building'
      }
    ]
  },
  {
    id: `${getRandomIdDest()}`,
    description: 'Tomsk, is a beautiful city, a true asian pearl, with crowded streets.',
    name: 'Tomsk',
    pictures: [
      {
        src: `http://picsum.photos/300/200?r=${Math.random()}`,
        description: '$ parliament building'
      }
    ]
  },
  {
    id: `${getRandomIdDest()}`,
    description: 'Norilsk, is a beautiful city, a true asian pearl, with crowded streets.',
    name: 'Norilsk',
    pictures: [
      {
        src: `http://picsum.photos/300/200?r=${Math.random()}`,
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
        src: `http://picsum.photos/300/200?r=${Math.random()}`,
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

export{mockDestinations};
