import AbstractView from '../framework/view/abstract-view.js';
import { humanizeEventDueDate, duration } from '../utils/point.js';
import { mockOffers } from '../mock/offerM.js';
import dayjs from 'dayjs';


function getOffersTemplate (event){
  const {title, price} = event;
  return `<li class="event__offer">
  <span class="event__offer-title">${title}</span>
  &plus;&euro;&nbsp;
  <span class="event__offer-price">${price}</span>
</li>`;
}

function getFullOffers(arr){
  const array = [];
  if(arr.length > 0){
    for(let i = 0; i < arr.length; i++){
      array[i] = getOffersTemplate(arr[i]);
    }
  }
  return array.join('');
}

function createEventOffersTemplate (offers) {
  const offersArray = [...offers];

  return (`<ul class="event__selected-offers">
      ${getFullOffers(offersArray)}
    </ul>`);
}

function createWaypointTemplate(event, destinations) {
  //console.log(destinations)
  const {type, dateFrom, dateTo, destination, basePrice, isFavorite, offers: arrOffers} = event;
  const destinationName = destinations.find((item) => destination === item.id).name;
  //console.log(destinationName)
  const date = humanizeEventDueDate(dateFrom);
  const durationTime = () => {
    const separatedTime = duration(dateFrom, dateTo);
    const {days, hours, minutes} = separatedTime;
    return `${days}D ${hours}H ${minutes}M`;
  };
  const timeFrom = dayjs(dateFrom).format('HH:mm');
  const timeTo = dayjs(dateTo).format('HH:mm');

  const typeOffers = mockOffers.find((offer) => offer.type === type).offers;

  const pointOffers = typeOffers.filter((off) => arrOffers.includes(off.id));

  const offersPoint = createEventOffersTemplate(pointOffers);

  return (`<li class="trip-events__item">
  <div class="event">
    <time class="event__date" datetime="${dayjs(dateFrom).format('YYYY-MM-D')}">${date}</time>
    <div class="event__type">
      <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
    </div>
    <h3 class="event__title">${type} ${destinationName}</h3>
    <div class="event__schedule">
      <p class="event__time">
        <time class="event__start-time" datetime="2019-03-18T10:30">${timeFrom}</time>
        &mdash;
        <time class="event__end-time" datetime="2019-03-18T11:00">${timeTo}</time>
      </p>
      <p class="event__duration">${durationTime()}</p>
    </div>
    <p class="event__price">
      &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
    </p>
    <h4 class="visually-hidden">Offers:</h4>
    ${offersPoint}
    <button class="event__favorite-btn ${isFavorite ? 'event__favorite-btn--active' : ''}" type="button">
      <span class="visually-hidden">Add to favorite</span>
      <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
        <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
      </svg>
    </button>
    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>
  </div>
  </li>`);
}

export default class WaypointView extends AbstractView {
  #point = null;
  #destinations;
  #handleEditClick = null;
  #handleFavoriteClick = null;

  constructor({point, destinations, onEditClick, onFavoriteClick}) {
    super();
    this.#point = point;
    this.#destinations = destinations;
    this.#handleEditClick = onEditClick;
    this.#handleFavoriteClick = onFavoriteClick;

    this.element.querySelector('.event__rollup-btn')
      .addEventListener('click', this.#editClickHandler);
    this.element.querySelector('.event__favorite-btn')
      .addEventListener('click', this.#favoriteClickHandler);
  }

  get template() {
    return createWaypointTemplate(this.#point, this.#destinations);
  }

  #editClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleEditClick();
  };

  #favoriteClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleFavoriteClick();
  };

}
