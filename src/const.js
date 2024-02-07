const NUMBERS_ID = [
  1, 2, 3, 4, 5,
  6, 7, 8, 9, 10,
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30
];
const TYPE_EVENTS = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight',
  'check-in', 'sightseeing', 'restaurant'];

const DESTINATIONS = ['Moscow', 'Krasnodar', 'Tomsk', 'Norilsk', 'Krasnoyarsk', 'Perm', 'Voronej'];

const FilterType = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past',
};

const SortType = {
  DEFAULT: 'day',
  TIME: 'time',
  PRICE: 'price',
};

const EventType = {
  TAXI: 'taxi',
  BUS: 'bus',
  TRAIN: 'train',
  SHIP: 'ship',
  DRIVE: 'drive',
  FLIGHT: 'flight',
  CHECKIN: 'check-in',
  SIGHTSEEING:'sightseeing',
  RESTAURANT: 'restaurant',
};

const UserAction = {
  UPDATE_POINT: 'UPDATE_POINT',
  ADD_POINT: 'ADD_POINT',
  DELETE_POINT: 'DELETE_POINT',
};

const UpdateType = {
  PATCH: 'PATCH',
  MINOR: 'MINOR',
  MAJOR: 'MAJOR',
  INIT: 'INIT',
  FAILED: 'FAILED',
};

export {TYPE_EVENTS, FilterType, DESTINATIONS, NUMBERS_ID, SortType, EventType, UserAction, UpdateType};
