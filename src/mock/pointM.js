import { DESTINATIONS, NUMBERS_ID } from '../const';
import { generateRandomArrayElement } from '../utils/common.js';
import {nanoid} from 'nanoid';

const getRandomElement = generateRandomArrayElement(DESTINATIONS);

//const getRandomId = generateRandomArrayElement(NUMBERS_ID);

const mockPoints = [
  {
    //id: `${getRandomId()}`,
    type: 'ship',
    basePrice: Math.floor(Math.random() * 200),
    dateFrom: new Date('2023-01-25 20:24:00'),
    dateTo: new Date('2023-01-28 23:24:00'),
    destination: getRandomElement(),
    isFavorite: false,
    offers: ['b4c3e4e6-9053-42ce-b747-e281314baa51'],
  },
  {
    //id: `${getRandomId()}`,
    type: 'flight',
    basePrice: Math.floor(Math.random() * 200),
    dateFrom: new Date('2023-05-01 07:24:00'),
    dateTo: new Date('2023-05-25 08:24:00'),
    destination: getRandomElement(),
    isFavorite: true,
    offers: ['b4c3e4e6-9053-42ce-b747-e281314baa71', 'b4c3e4e6-9053-42ce-b747-e281314baa72'],
  },
  {
    //id: `${getRandomId()}`,
    type: 'restaurant',
    basePrice: Math.floor(Math.random() * 200),
    dateFrom: new Date('2023-08-15 13:24:00'),
    dateTo: new Date('2023-08-17 03:24:00'),
    destination: getRandomElement(),
    isFavorite: false,
    offers: ['b4c3e4e6-9053-42ce-b747-e281314baa11', 'b4c3e4e6-9053-42ce-b747-e281314baa12', 'b4c3e4e6-9053-42ce-b747-e281314baa13'],
  },
  {
    //id: `${getRandomId()}`,
    type: 'bus',
    basePrice: Math.floor(Math.random() * 200),
    dateFrom: new Date('2023-09-24 03:24:00'),
    dateTo: new Date('2023-09-25 10:30:00'),
    destination: getRandomElement(),
    isFavorite: true,
    offers: [],
  }
];

const getPoint = generateRandomArrayElement(mockPoints);
function getRandomPoint() {
  return {
    id: nanoid(),
    ...getPoint()
  };

}

export {getRandomPoint};
