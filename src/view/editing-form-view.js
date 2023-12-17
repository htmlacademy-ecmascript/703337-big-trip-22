import {createElement} from '../render.js';
import { TYPE_EVENTS } from '../const.js';
import { mockOffers } from '../mock/offerM.js';
import { humanizeEventEditDate } from '../utils.js';
import { mockDestinations } from '../mock/destinationM.js';

const BLANK_POINT = {
  id: '',
  basePrice: '',
  dateFrom: null,
  dateTo: null,
  destination: '',
  isFavorite: false,
  offers: [],
  type: TYPE_EVENTS[0],
};

const getEditOffersTemplate = (offer, array) => {
  const{id, title, price} = offer;
  const isChecked = array.includes(id);
  const lastWord = title.split(' ');
  //console.log(lastWord[lastWord.length - 1]);
  return `<div class="event__offer-selector">
  <input class="event__offer-checkbox  visually-hidden" id="event-offer-${lastWord[lastWord.length - 1]}-1"
  type="checkbox" name="event-offer-${lastWord[lastWord.length - 1]}" ${isChecked ? 'checked' : ''}>
  <label class="event__offer-label" for="event-offer-${lastWord[lastWord.length - 1]}-1">
    <span class="event__offer-title">${title}</span>
    &plus;&euro;&nbsp;
    <span class="event__offer-price">${price}</span>
  </label>
</div>`;
};

const createOffersEventEditTemplate = (offers, arr) => {
  const offersArray = [...offers];
  const array = [];
  if(offersArray.length > 0){
    for(let i = 0; i < offersArray.length; i++){
      array[i] = getEditOffersTemplate(offersArray[i], arr);
    }
  }
  return array.join('');
};

const getEditOptionsTemplate = (dest) => `<option value="${dest}"></option>`;

const createDestEventEditTemplate = (destination) => {
  const{description} = destination;
  return `<section class="event__section  event__section--destination">
  <h3 class="event__section-title  event__section-title--destination">Destination</h3>
  <p class="event__destination-description">${description}</p>
</section>`;
};

const createTripEventEditTemplate = (event) => {
  const {type, dateFrom, dateTo, basePrice, destination, offers: arrOffers} = event;
  const dateF = humanizeEventEditDate(dateFrom);
  const dateT = humanizeEventEditDate(dateTo);
  const typeOffers = mockOffers.find((offer) => offer.type === type).offers;
  //console.log(typeOffers);
  //const pointOffers = typeOffers.filter((off) => offers.includes(off.id));
  const offersAll = createOffersEventEditTemplate(typeOffers, arrOffers);

  const getDestinationObj = () => {
    let destObject;
    for (let i = 0; i < mockDestinations.length; i++){
      if(mockDestinations[i].name === destination){
        destObject = {...mockDestinations[i]};
      }
    }
    return destObject;
  };

  const descriptionPoint = createDestEventEditTemplate(getDestinationObj());
  const options = mockDestinations.map((opt) => getEditOptionsTemplate(opt.name)).join('');

  return (`<li class="trip-events__item">
  <form class="event event--edit" action="#" method="post">
  <header class="event__header">
    <div class="event__type-wrapper">
      <label class="event__type  event__type-btn" for="event-type-toggle-1">
        <span class="visually-hidden">Choose event type</span>
        <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
      </label>
      <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

      <div class="event__type-list">
        <fieldset class="event__type-group">
          <legend class="visually-hidden">Event type</legend>

          <div class="event__type-item">
            <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">
            <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>
          </div>

          <div class="event__type-item">
            <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">
            <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>
          </div>

          <div class="event__type-item">
            <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">
            <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>
          </div>

          <div class="event__type-item">
            <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">
            <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>
          </div>

          <div class="event__type-item">
            <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">
            <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>
          </div>

          <div class="event__type-item">
            <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked>
            <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>
          </div>

          <div class="event__type-item">
            <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">
            <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>
          </div>

          <div class="event__type-item">
            <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">
            <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>
          </div>

          <div class="event__type-item">
            <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">
            <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>
          </div>
        </fieldset>
      </div>
    </div>

    <div class="event__field-group  event__field-group--destination">
      <label class="event__label  event__type-output" for="event-destination-1">
        ${type}
      </label>
      <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${destination}" list="destination-list-1">
      <datalist id="destination-list-1">
      ${options}
      </datalist>
    </div>

    <div class="event__field-group  event__field-group--time">
      <label class="visually-hidden" for="event-start-time-1">From</label>
      <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${dateF}">
      &mdash;
      <label class="visually-hidden" for="event-end-time-1">To</label>
      <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${dateT}">
    </div>

    <div class="event__field-group  event__field-group--price">
      <label class="event__label" for="event-price-1">
        <span class="visually-hidden">Price</span>
        &euro;
      </label>
      <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${basePrice}">
    </div>

    <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
    <button class="event__reset-btn" type="reset">Delete</button>
    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>
  </header>
  <section class="event__details">
    <section class="event__section  event__section--offers">
      <h3 class="event__section-title  event__section-title--offers">${typeOffers.length ? 'Offers' : ''}</h3>

      <div class="event__available-offers">
        ${offersAll}
      </div>
    </section>

    ${descriptionPoint}
  </section>
</form>
</li>`);
};

export default class TripEventEditView {
  constructor({event = BLANK_POINT}) {
    this.event = event;
  }

  getTemplate() {
    return createTripEventEditTemplate(this.event);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
