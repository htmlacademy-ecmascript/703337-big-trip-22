//import AbstractView from '../framework/view/abstract-view.js';
import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';
import { EventType } from '../const.js';
import { mockOffers } from '../mock/offerM.js';
import { humanizeEventEditDate } from '../utils/point.js';
import { mockDestinations } from '../mock/destinationM.js';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
//import{French}

const BLANK_POINT = {
  id: '',
  basePrice: 0,
  dateFrom: null,
  dateTo: null,
  destination: '',
  isFavorite: false,
  offers: [],
  type: EventType.FLIGHT,
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

const getPhotoTemplate = (array) => {
  const arrayPhoto = [];
  for (let i = 0; i < array.length; i ++){
    arrayPhoto[i] = `<img class="event__photo" src="${array[i].src}" alt="Event photo">`;
  }
  return arrayPhoto.join('');
};

const createDestEventEditTemplate = (destination) => {
  const{description, pictures} = destination;
  return `<section class="event__section  event__section--destination">
  <h3 class="event__section-title  event__section-title--destination">Destination</h3>
  <p class="event__destination-description">${description}</p>
  <div class="event__photos-container">
    <div class="event__photos-tape">
      ${getPhotoTemplate(pictures)}
    </div>
  </div>
</section>`;
};

const createTripEventEditTemplate = (event, destinationsArray, offersArray) => {
  const {type, dateFrom, dateTo, basePrice, destination, offers: arrOffers} = event;
  const dateF = humanizeEventEditDate(dateFrom);
  const dateT = humanizeEventEditDate(dateTo);
  const typeOffers = mockOffers.find((offer) => offer.type === type).offers;
  const offersAll = createOffersEventEditTemplate(typeOffers, arrOffers);

  const destinationObj = destinationsArray.find((item) => destination === item.name);
  const description = createDestEventEditTemplate(destinationObj);
  const options = destinationsArray.map((opt) => getEditOptionsTemplate(opt.name)).join('');

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

    ${description}
  </section>
  </form>
  </li>`);
};

export default class TripEventEditView extends AbstractStatefulView {
  #point = null;
  #destinations = null;
  #offers = null;
  #handleFormSubmit = null;
  #datepicker = null;
  #handleFormClose = null;
  #destComponent = null;

  constructor({point = BLANK_POINT, destinations, offers, onFormSubmit, onFormClose}) {
    super();
    this.#point = point;
    this.#destinations = destinations;
    this.#offers = offers;
    this._setState(TripEventEditView.parsePointToState(point));//объект состояния
    this.#handleFormSubmit = onFormSubmit;
    this.#handleFormClose = onFormClose;

    this._restoreHandlers();
  }

  get template() {
    return createTripEventEditTemplate(this._state, this.#destinations, this.#offers);
  }

  _restoreHandlers() {
    this.element.querySelector('form').addEventListener('submit', this.#formSubmitHandler);
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#formCloseHandler);
    this.element.querySelector('.event__type-list').addEventListener('click', this.#formTypeHandler);
    this.element.querySelector('.event__input--destination')
      .addEventListener('change', this.#formDestinationInputHandler);
    this.element.querySelector('.event__field-group--time').addEventListener('click', this.#setDatepicker);
  }

  static parsePointToState(point) {
    return {...point};
  }

  static parseStateToPoint(state) {
    const point = {...state};
    return point;
  }

  removeElement() {
    super.removeElement();

    if (this.#datepicker) {
      this.#datepicker.destroy();
      this.#datepicker = null;
    }
  }

  #setDatepicker = (evt) => {
    //const eventInputList = this.element.querySelector('.event__field-group--time').getElementsByTagName('input');
    if(evt.target.id === 'event-start-time-1'){
      this.#datepicker = flatpickr(
        evt.target,
        {
          enableTime: true,
          altInput: true,
          dateFormat: 'd/m/Y H:i',
          weekNumbers: true,
          defaultDate: this._state.dateFrom,
          onChange: this.#dateFromChangeHandler,
        },
      );
    } else {
      this.#datepicker = flatpickr(
        evt.target,
        {
          enableTime: true,
          altInput: true,
          dateFormat: 'd/m/Y H:i',
          weekNumbers: true,
          defaultDate: this._state.dateTo,
          onChange: this.#dateToChangeHandler,
        },
      );
    }
  };

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormSubmit(TripEventEditView.parseStateToPoint(this._state));
  };

  #formTypeHandler = (evt) => {
    evt.preventDefault();
    const type = evt.target.closest('div').firstElementChild;
    type.checked = true;
    this.updateElement({
      type: evt.target.closest('div').firstElementChild.value,
    });
  };

  #formCloseHandler = (evt) => {
    evt.preventDefault();
    this.updateElement(this.#point);
    this.#handleFormClose();
  };

  #formDestinationInputHandler = (evt) => {
    evt.preventDefault();
    this.updateElement({
      destination: evt.target.value,
    });
  };

  #dateFromChangeHandler = ([userDate]) => {
    //console.log(dateObj)
    //console.log(userDate)
    this.updateElement({
      dateFrom: userDate,
    });
  };

  #dateToChangeHandler = ([userDate]) => {
    this.updateElement({
      dateTo: userDate,
    });
  };
}