import { NUMBERS_ID } from '../const';
import { generateRandomArrayElement } from '../utils';
const getRandomIdOffer = generateRandomArrayElement(NUMBERS_ID);

const mockOffers = [
  {
    type: 'taxi',
    offers: [
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa31',
        title: 'Upgrade to a business class taxi',
        price: 120
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa32',
        title: 'Tea in taxi',
        price: 20
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa31',
        title: 'classical music',
        price: 150
      }
    ]
  },
  {
    type: 'bus',
    offers: []
  },
  {
    type: 'train',
    offers: [
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa41',
        title: 'Tea in room(train)',
        price: 10
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa42',
        title: 'Bed sheets',
        price: 60
      }
    ]
  },
  {
    type: 'ship',
    offers: [
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa51',
        title: 'Что-то на корабле',
        price: 1000
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa52',
        title: 'Upper cabins',
        price: 250
      }
    ]
  },
  {
    type: 'drive',
    offers: [
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa61',
        title: 'Rent a car',
        price: 300
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa62',
        title: 'Rent a driver',
        price: 200
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa63',
        title: 'Rent a navigator',
        price: 150
      }
    ]
  },
  {
    type: 'flight',
    offers: [
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa71',
        title: 'Add luggage',
        price: 50
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa72',
        title: 'Switch to comfort',
        price: 80
      },
    ]
  },
  {
    type: 'check-in',
    offers: [
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa81',
        title: 'Add breakfast',
        price: 70
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa82',
        title: 'Transfer',
        price: 45
      }
    ]
  },
  {
    type: 'sightseeing',
    offers: [
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa91',
        title: 'Book tickets',
        price: 30
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa92',
        title: 'Lunch in city',
        price: 40
      }
    ]
  },
  {
    type: 'restaurant',
    offers: [
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa11',
        title: 'Water',
        price: 700
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa12',
        title: 'napkin',
        price: 15
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa13',
        title: 'Snacks',
        price: 35
      },
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa14',
        title: 'Mishlen',
        price: 250
      }
    ]
  },

];

export{mockOffers};
