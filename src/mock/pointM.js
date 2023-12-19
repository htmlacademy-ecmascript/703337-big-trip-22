//import { type } from 'os';
import { DESTINATIONS, NUMBERS_ID } from '../const';
import { generateRandomArrayElement } from '../utils';

const getRandomElement = generateRandomArrayElement(DESTINATIONS);

const getRandomId = generateRandomArrayElement(NUMBERS_ID);

const mockPoints = [
  {
    id: `${getRandomId()}`,
    type: 'ship',
    basePrice: Math.floor(Math.random() * 200),
    dateFrom: new Date('2019-01-25'),
    dateTo: new Date('2023-01-28'),
    destination: getRandomElement(),
    isFavorite: false,
    offers: ['b4c3e4e6-9053-42ce-b747-e281314baa51'],
  },
  {
    id: `${getRandomId()}`,
    type: 'flight',
    basePrice: Math.floor(Math.random() * 200),
    dateFrom: new Date('2023-05-01'),
    dateTo: new Date('2023-05-25'),
    destination: getRandomElement(),
    isFavorite: true,
    offers: ['b4c3e4e6-9053-42ce-b747-e281314baa71', 'b4c3e4e6-9053-42ce-b747-e281314baa72'],
  },
  {
    id: `${getRandomId()}`,
    type: 'restaurant',
    basePrice: Math.floor(Math.random() * 200),
    dateFrom: new Date('2023-08-15'),
    dateTo: new Date('2023-08-17'),
    destination: getRandomElement(),
    isFavorite: false,
    offers: ['b4c3e4e6-9053-42ce-b747-e281314baa11', 'b4c3e4e6-9053-42ce-b747-e281314baa12', 'b4c3e4e6-9053-42ce-b747-e281314baa13'],
  },
  {
    id: `${getRandomId()}`,
    type: 'bus',
    basePrice: Math.floor(Math.random() * 200),
    dateFrom: new Date('2023-09-24'),
    dateTo: new Date('2023-09-25'),
    destination: getRandomElement(),
    isFavorite: true,
    offers: [],
  }
];

const getPoint = generateRandomArrayElement(mockPoints);
function getRandomPoint() {
  return getPoint();

}

export {getRandomPoint};
